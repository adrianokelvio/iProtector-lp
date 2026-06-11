import { useEffect, useRef } from 'react';

type Props = {
  src?: string;
  youtubeId?: string;
  title: string;
  variant?: 'portrait' | 'landscape';
};

type YTPlayer = {
  mute: () => void;
  playVideo: () => void;
  seekTo: (seconds: number, allowSeekAhead?: boolean) => void;
  getPlayerState: () => number;
  setPlaybackQuality: (quality: string) => void;
};

type YTPlayerOptions = {
  videoId: string;
  host?: string;
  width?: number | string;
  height?: number | string;
  playerVars?: Record<string, number | string>;
  events?: {
    onReady?: (event: { target: YTPlayer }) => void;
    onStateChange?: (event: { data: number; target: YTPlayer }) => void;
  };
};

declare global {
  interface Window {
    YT?: {
      Player: new (
        element: HTMLElement | string,
        options: YTPlayerOptions,
      ) => { destroy: () => void };
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

const YT_PAUSED = 2;
const YT_ENDED = 0;

let youtubeApiPromise: Promise<void> | null = null;

function loadYouTubeApi() {
  if (window.YT?.Player) return Promise.resolve();
  if (youtubeApiPromise) return youtubeApiPromise;

  youtubeApiPromise = new Promise((resolve) => {
    const previousReady = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      previousReady?.();
      resolve();
    };

    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    document.head.appendChild(script);
  });

  return youtubeApiPromise;
}

function fitYouTubeIframe(mount: HTMLElement) {
  const iframe = mount.querySelector('iframe');
  if (!iframe) return;

  iframe.style.position = 'absolute';
  iframe.style.top = '50%';
  iframe.style.left = '50%';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.minWidth = '100%';
  iframe.style.minHeight = '100%';
  iframe.style.transform = 'translate(-50%, -50%)';
  iframe.style.border = '0';
  iframe.style.pointerEvents = 'none';
}

function YouTubeCleanEmbed({
  youtubeId,
  title,
  className,
}: {
  youtubeId: string;
  title: string;
  className: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    const root = rootRef.current;
    if (!mount || !root) return;

    let player: { destroy: () => void } | undefined;
    let loopTimer: number | undefined;
    let resizeObserver: ResizeObserver | undefined;
    let cancelled = false;

    const restartLoop = (target: YTPlayer) => {
      target.seekTo(0, true);
      target.playVideo();
    };

    void loadYouTubeApi().then(() => {
      if (cancelled || !mountRef.current || !window.YT?.Player) return;

      const { width, height } = root.getBoundingClientRect();

      player = new window.YT.Player(mountRef.current, {
        host: 'https://www.youtube-nocookie.com',
        width: Math.max(1, Math.round(width)),
        height: Math.max(1, Math.round(height)),
        videoId: youtubeId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          loop: 1,
          playlist: youtubeId,
          controls: 0,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          disablekb: 1,
          fs: 0,
          playsinline: 1,
          cc_load_policy: 0,
          enablejsapi: 1,
          origin: window.location.origin,
        },
        events: {
          onReady: (event) => {
            const target = event.target;
            target.mute();
            target.playVideo();
            fitYouTubeIframe(mountRef.current!);
            try {
              target.setPlaybackQuality('hd2160');
            } catch {
              /* quality may be unavailable */
            }

            resizeObserver = new ResizeObserver(() => {
              fitYouTubeIframe(mountRef.current!);
            });
            resizeObserver.observe(root);

            loopTimer = window.setInterval(() => {
              if (target.getPlayerState() === YT_ENDED) {
                restartLoop(target);
              }
            }, 400);
          },
          onStateChange: (event) => {
            if (event.data === YT_ENDED) {
              restartLoop(event.target);
              return;
            }

            if (event.data === YT_PAUSED) {
              event.target.playVideo();
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
      if (loopTimer) window.clearInterval(loopTimer);
      player?.destroy();
    };
  }, [youtubeId]);

  return (
    <div
      ref={rootRef}
      className={`${className} monitoring-video--youtube`}
    >
      <div className="monitoring-video__yt-wrap" ref={mountRef} title={title} />
      <div className="monitoring-video__yt-mask" aria-hidden="true" />
    </div>
  );
}

export function PhoneVideoEmbed({
  src,
  youtubeId,
  title,
  variant = 'portrait',
}: Props) {
  const className = `monitoring-video${
    variant === 'landscape' ? ' monitoring-video--landscape' : ''
  }`;

  if (youtubeId) {
    return (
      <YouTubeCleanEmbed
        youtubeId={youtubeId}
        title={title}
        className={className}
      />
    );
  }

  if (!src) return null;

  return (
    <div className={className}>
      <video
        src={src}
        title={title}
        autoPlay
        muted
        loop
        playsInline
        controls={false}
        disablePictureInPicture
        preload="auto"
      />
    </div>
  );
}

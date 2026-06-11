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
  setPlaybackQuality: (quality: string) => void;
};

type YTPlayerOptions = {
  videoId: string;
  host?: string;
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

function YouTubeCleanEmbed({
  youtubeId,
  title,
  className,
}: {
  youtubeId: string;
  title: string;
  className: string;
}) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let player: { destroy: () => void } | undefined;
    let cancelled = false;

    void loadYouTubeApi().then(() => {
      if (cancelled || !mountRef.current || !window.YT?.Player) return;

      player = new window.YT.Player(mountRef.current, {
        host: 'https://www.youtube-nocookie.com',
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
            event.target.mute();
            event.target.playVideo();
            try {
              event.target.setPlaybackQuality('hd2160');
            } catch {
              /* quality may be unavailable */
            }
          },
          onStateChange: (event) => {
            if (event.data === YT_PAUSED || event.data === YT_ENDED) {
              event.target.playVideo();
            }
          },
        },
      });
    });

    return () => {
      cancelled = true;
      player?.destroy();
    };
  }, [youtubeId]);

  return (
    <div className={`${className} monitoring-video--youtube`}>
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

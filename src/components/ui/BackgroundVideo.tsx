import { useEffect, useRef } from 'react';

type Props = {
  src: string;
  title: string;
  poster?: string;
};

export function BackgroundVideo({ src, title, poster }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    video.muted = true;

    const play = () => {
      void video.play().catch(() => {});
    };

    play();
    video.addEventListener('loadeddata', play);
    video.addEventListener('canplay', play);

    return () => {
      video.removeEventListener('loadeddata', play);
      video.removeEventListener('canplay', play);
    };
  }, [src]);

  return (
    <video
      ref={ref}
      className="background-video"
      src={src}
      title={title}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      controls={false}
      controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
      disablePictureInPicture
      disableRemotePlayback
      preload="auto"
      aria-hidden="true"
    />
  );
}

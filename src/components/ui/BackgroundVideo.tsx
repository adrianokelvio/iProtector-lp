type Props = {
  src: string;
  title: string;
};

export function BackgroundVideo({ src, title }: Props) {
  return (
    <video
      className="background-video"
      src={src}
      title={title}
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

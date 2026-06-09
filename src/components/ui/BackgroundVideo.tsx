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
      disablePictureInPicture
      preload="auto"
      aria-hidden="true"
    />
  );
}

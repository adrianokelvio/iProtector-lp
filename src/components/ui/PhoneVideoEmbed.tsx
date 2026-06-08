type Props = {
  src: string;
  title: string;
};

export function PhoneVideoEmbed({ src, title }: Props) {
  return (
    <div className="monitoring-video">
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

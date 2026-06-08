type Props = {
  src: string;
  title: string;
  variant?: 'portrait' | 'landscape';
};

export function PhoneVideoEmbed({
  src,
  title,
  variant = 'portrait',
}: Props) {
  return (
    <div
      className={`monitoring-video${variant === 'landscape' ? ' monitoring-video--landscape' : ''}`}
    >
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

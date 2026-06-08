type Props = {
  src: string;
  title: string;
  aspect?: 'portrait' | 'landscape';
};

export function PhoneVideoEmbed({
  src,
  title,
  aspect = 'portrait',
}: Props) {
  return (
    <div
      className={`monitoring-video${aspect === 'landscape' ? ' monitoring-video--landscape' : ''}`}
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

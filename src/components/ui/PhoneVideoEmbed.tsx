type Props = {
  videoId: string;
  title: string;
};

export function PhoneVideoEmbed({ videoId, title }: Props) {
  return (
    <div className="phone-video-mock">
      <div className="phone-glow" aria-hidden="true" />
      <div className="phone-frame phone-frame--video">
        <div className="phone-notch" aria-hidden="true" />
        <div className="phone-screen phone-screen--video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}

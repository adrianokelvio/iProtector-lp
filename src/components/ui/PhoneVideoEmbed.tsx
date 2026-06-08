type Props = {
  videoId: string;
  title: string;
};

function buildEmbedUrl(videoId: string): string {
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    loop: '1',
    playlist: videoId,
    playsinline: '1',
    rel: '0',
    modestbranding: '1',
    controls: '0',
    disablekb: '1',
    fs: '0',
    iv_load_policy: '3',
  });

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}

export function PhoneVideoEmbed({ videoId, title }: Props) {
  return (
    <div className="phone-video-mock">
      <div className="phone-glow" aria-hidden="true" />
      <div className="phone-frame phone-frame--video">
        <div className="phone-notch" aria-hidden="true" />
        <div className="phone-screen phone-screen--video">
          <iframe
            src={buildEmbedUrl(videoId)}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

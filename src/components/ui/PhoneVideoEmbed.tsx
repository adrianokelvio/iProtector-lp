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
    cc_load_policy: '0',
    showinfo: '0',
    autohide: '1',
  });

  if (typeof window !== 'undefined') {
    params.set('origin', window.location.origin);
  }

  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

export function PhoneVideoEmbed({ videoId, title }: Props) {
  return (
    <div className="phone-video-mock" aria-hidden="true">
      <div className="phone-glow" aria-hidden="true" />
      <div className="phone-frame phone-frame--video">
        <div className="phone-notch" aria-hidden="true" />
        <div className="phone-screen phone-screen--video">
          <div className="phone-video-crop">
            <iframe
              src={buildEmbedUrl(videoId)}
              title={title}
              tabIndex={-1}
              allow="autoplay; encrypted-media; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <div className="phone-video-mask phone-video-mask--top" />
            <div className="phone-video-mask phone-video-mask--bottom" />
          </div>
        </div>
      </div>
    </div>
  );
}

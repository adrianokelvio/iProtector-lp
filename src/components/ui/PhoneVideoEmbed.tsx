type Props = {
  src?: string;
  youtubeId?: string;
  title: string;
  variant?: 'portrait' | 'landscape';
};

function buildYouTubeEmbedUrl(id: string) {
  const params = new URLSearchParams({
    autoplay: '1',
    mute: '1',
    loop: '1',
    playlist: id,
    controls: '0',
    modestbranding: '1',
    rel: '0',
    iv_load_policy: '3',
    disablekb: '1',
    fs: '0',
    playsinline: '1',
    cc_load_policy: '0',
    vq: 'hd2160',
  });

  return `https://www.youtube-nocookie.com/embed/${id}?${params}`;
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
      <div className={className}>
        <iframe
          src={buildYouTubeEmbedUrl(youtubeId)}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          referrerPolicy="strict-origin-when-cross-origin"
          tabIndex={-1}
        />
      </div>
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

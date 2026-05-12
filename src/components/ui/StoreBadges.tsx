/**
 * App Store + Google Play badges.
 * SVG inline — sem dependência de imagem externa.
 */
export function StoreBadges() {
  return (
    <div className="store-badges" role="group" aria-label="Baixe o app">
      <a
        href="#"
        className="store-badge"
        aria-label="Baixar na App Store"
        onClick={(e) => e.preventDefault()}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.5 12.5c0-2.4 2-3.6 2.1-3.6-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.6.9-.8 0-1.9-.9-3.2-.8-1.6 0-3.2.9-4 2.4-1.7 3-.4 7.4 1.2 9.8.8 1.2 1.8 2.5 3 2.5 1.2 0 1.7-.8 3.2-.8s1.9.8 3.2.8c1.3 0 2.2-1.2 3-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.5-1-2.5-3.8zM15 4.8c.7-.8 1.1-1.9 1-3-.9.1-2 .6-2.7 1.4-.6.7-1.2 1.8-1 2.9 1 .1 2-.5 2.7-1.3z"/>
        </svg>
        <span className="store-badge-inner">
          <span className="store-badge-sub">Download na</span>
          <span className="store-badge-name">App Store</span>
        </span>
      </a>

      <a
        href="#"
        className="store-badge"
        aria-label="Disponível no Google Play"
        onClick={(e) => e.preventDefault()}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3.6 1.6c-.3.3-.5.8-.5 1.5v17.8c0 .7.2 1.2.5 1.5l.1.1L13.4 12.3v-.2L3.7 1.5z" fill="#4FB3FF"/>
          <path d="M17 16.2l-3.6-3.6V11.4L17 7.8l.1.1 4.3 2.4c1.2.7 1.2 1.8 0 2.5l-4.3 2.4-.1 0z" fill="#FFD148"/>
          <path d="M17.1 16.1l-3.7-3.7L3.6 22.4c.4.4 1.1.4 1.8 0l11.7-6.4" fill="#E66B4F"/>
          <path d="M17.1 7.9L5.4 1.5c-.7-.4-1.4-.4-1.8 0L13.4 11.4l3.7-3.5z" fill="#3DDC84"/>
        </svg>
        <span className="store-badge-inner">
          <span className="store-badge-sub">Disponível na</span>
          <span className="store-badge-name">Google Play</span>
        </span>
      </a>
    </div>
  );
}

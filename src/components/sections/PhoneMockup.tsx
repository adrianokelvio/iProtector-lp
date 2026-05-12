/**
 * Phone mockup — iProtector app preview.
 * SVG + HTML compostos, escala via container `.phone-mock`.
 */
export function PhoneMockup() {
  return (
    <div className="phone-mock" aria-hidden="true">
      {/* Glow dourado atrás */}
      <div className="phone-glow" />

      <div className="phone-frame">
        {/* Notch */}
        <div className="phone-notch" />

        <div className="phone-screen">
          {/* Status bar */}
          <div className="phone-status">
            <span className="time">9:41</span>
            <div className="status-icons">
              <svg viewBox="0 0 18 12" width="18" height="10" fill="currentColor">
                <rect x="0" y="6" width="3" height="6" rx="0.5" />
                <rect x="5" y="4" width="3" height="8" rx="0.5" />
                <rect x="10" y="2" width="3" height="10" rx="0.5" />
                <rect x="15" y="0" width="3" height="12" rx="0.5" />
              </svg>
              <svg viewBox="0 0 16 12" width="16" height="10" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 4 Q 8 -1 14 4" />
                <path d="M4 6 Q 8 3 12 6" />
                <circle cx="8" cy="9.5" r="0.8" fill="currentColor" />
              </svg>
              <svg viewBox="0 0 24 12" width="22" height="10" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="1" y="2" width="18" height="8" rx="2" />
                <rect x="3" y="4" width="14" height="4" rx="1" fill="currentColor" />
                <rect x="20" y="5" width="2" height="2" rx="0.5" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* App header */}
          <div className="phone-header">
            <div className="phone-greet">
              <div className="hi">Olá, Mariana</div>
              <div className="loc">São Paulo · SP</div>
            </div>
            <div className="phone-avatar">M</div>
          </div>

          {/* Active protection card */}
          <div className="phone-card phone-card--active">
            <div className="phone-card-head">
              <span className="dot" />
              <span className="tag">Proteção ativa</span>
              <span className="phone-eta">ETA 06'12"</span>
            </div>
            <div className="phone-card-title">Rodrigo A. a caminho</div>
            <div className="phone-card-sub">Agente certificado · ID 0428</div>

            {/* Mini map */}
            <div className="phone-map">
              <svg viewBox="0 0 200 90" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="rt" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#4FB3FF" stopOpacity="0.9" />
                    <stop offset="1" stopColor="#C9A961" stopOpacity="0.9" />
                  </linearGradient>
                </defs>
                <path
                  d="M14 70 Q 60 50 100 40 T 184 18"
                  stroke="url(#rt)"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="3 3"
                />
              </svg>
              <span className="map-pin map-pin--client" />
              <span className="map-pin map-pin--agent" />
            </div>
          </div>

          {/* Quick actions */}
          <div className="phone-actions">
            <button className="phone-action phone-action--panic" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 9 v4 m0 4 h.01" />
                <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
              </svg>
              <span>Pânico</span>
            </button>
            <button className="phone-action" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-9 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.2A8.5 8.5 0 1 1 21 11.5Z" />
              </svg>
              <span>Chat</span>
            </button>
            <button className="phone-action" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M22 16.92V21a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 5.18 2 2 0 0 1 4.11 3h4.09a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.91 11.09a16 16 0 0 0 6 6l1.45-1.45a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
              </svg>
              <span>Ligar</span>
            </button>
          </div>

          {/* Service tiles */}
          <div className="phone-tiles">
            <div className="phone-tile">
              <div className="lbl">Histórico</div>
              <div className="val">12</div>
            </div>
            <div className="phone-tile">
              <div className="lbl">Plano</div>
              <div className="val gold">Gold</div>
            </div>
          </div>

          {/* Tab bar */}
          <div className="phone-tabbar">
            <button className="tab-item active" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M3 12 L12 3 L21 12" />
                <path d="M5 10 V21 H19 V10" />
              </svg>
              <span>Início</span>
            </button>
            <button className="tab-item" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 2 L20 6 V12 C20 17 16 21 12 22 C8 21 4 17 4 12 V6 Z" />
              </svg>
              <span>Proteger</span>
            </button>
            <button className="tab-item" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="4" width="18" height="14" rx="2" />
                <path d="M3 9 H21" />
              </svg>
              <span>Histórico</span>
            </button>
            <button className="tab-item" type="button">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21 c1-5 5-7 8-7 s7 2 8 7" />
              </svg>
              <span>Conta</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

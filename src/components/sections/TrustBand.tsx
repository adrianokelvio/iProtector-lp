export function TrustBand() {
  return (
    <div className="trust-band">
      <div className="container trust-band-inner">
        <div className="trust-stat">
          <div className="num">
            24<em>/7</em>
          </div>
          <div className="lbl">Central de operações</div>
        </div>
        <div className="trust-stat">
          <div className="num">
            100<em>%</em>
          </div>
          <div className="lbl">Atendimentos auditáveis</div>
        </div>
        <div className="trust-stat">
          <div className="num">
            <em>&lt;</em>10'
          </div>
          <div className="lbl">Tempo médio de resposta</div>
        </div>
        <div className="trust-stat">
          <div className="num">LGPD</div>
          <div className="lbl">Compliance e segurança de dados</div>
        </div>
      </div>
    </div>
  );
}

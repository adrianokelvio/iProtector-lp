export type ComparisonPlan = {
  name: string;
  priceMain: string;
  priceSuffix: string;
  featured: boolean;
  badge: string | null;
  cta: string;
  features: readonly boolean[];
  note?: string;
};

type Props = {
  plan: ComparisonPlan;
  featureLabels: readonly string[];
  onCta: () => void;
};

export function PlanComparisonCard({ plan, featureLabels, onCta }: Props) {
  return (
    <article className={`plan${plan.featured ? ' featured' : ''}`}>
      {plan.badge ? <span className="pop-badge">{plan.badge}</span> : null}
      <div className="plan-name">{plan.name}</div>
      <div className="plan-price">
        {plan.priceMain}
        <small>{plan.priceSuffix}</small>
      </div>
      {plan.note ? <p className="plan-note">{plan.note}</p> : null}
      <ul className="plan-feat-list">
        {featureLabels.map((label, index) => {
          const included = plan.features[index];
          return (
            <li
              key={label}
              className={`plan-feat ${included ? 'plan-feat--yes' : 'plan-feat--no'}`}
            >
              <span className="plan-feat__icon" aria-hidden="true">
                {included ? '✓' : '✗'}
              </span>
              <span className="plan-feat__label">{label}</span>
            </li>
          );
        })}
      </ul>
      <button
        className={`btn ${plan.featured ? 'btn-primary' : 'btn-dark'}`}
        onClick={onCta}
      >
        {plan.cta}
      </button>
    </article>
  );
}

import SectionHeader from './SectionHeader.jsx';
import { services } from '../data/site.js';

export default function Services() {
  return (
    <section className="section section-alt" id="services">
      <div className="container">
        <SectionHeader
          eyebrow="Services"
          title="Choose the website service that matches your next business move."
          description="Each service is packaged around a practical outcome: more credibility, clearer offers, smoother shopping, better product usability, or ongoing improvements after launch."
        />
        <div className="card-grid service-grid">
          {services.map(({ title, description, icon: Icon }) => (
            <article className="glass-card service-card" key={title}>
              <div className="icon-badge">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <div className="section-cta">
          <div>
            <span className="eyebrow">Not sure what you need?</span>
            <h3>Tell Joshua what you are trying to launch, sell, or improve.</h3>
            <p>He can recommend the right website direction before you commit to a full build.</p>
          </div>
          <a className="button button-primary" href="#contact">
            Get Project Guidance
          </a>
        </div>
      </div>
    </section>
  );
}

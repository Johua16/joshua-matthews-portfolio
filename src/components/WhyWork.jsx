import SectionHeader from './SectionHeader.jsx';
import { whyWorkWithMe } from '../data/site.js';

export default function WhyWork() {
  return (
    <section className="section section-alt">
      <div className="container">
        <SectionHeader
          eyebrow="Why Work With Me"
          title="A professional build experience from first message to post-launch support."
          description="The goal is not just to ship pages, but to give your business a website you can trust, share, and improve."
        />
        <div className="why-grid">
          {whyWorkWithMe.map(({ title, description, icon: Icon }) => (
            <article className="why-item" key={title}>
              <Icon size={20} aria-hidden="true" />
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

import SectionHeader from './SectionHeader.jsx';
import { processSteps } from '../data/site.js';

export default function Process() {
  return (
    <section className="section section-alt" id="process">
      <div className="container">
        <SectionHeader
          eyebrow="Process"
          title="A simple path from idea to launched website."
          description="A clear project flow keeps the work organized, reduces guesswork, and helps every decision support the business goal."
        />
        <div className="process-list">
          {processSteps.map(({ title, description, icon: Icon }, index) => (
            <article className="process-item" key={title}>
              <div className="process-number">{String(index + 1).padStart(2, '0')}</div>
              <div className="icon-badge">
                <Icon size={20} aria-hidden="true" />
              </div>
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

import { skills } from '../data/site.js';
import SectionHeader from './SectionHeader.jsx';

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">
        <div>
          <SectionHeader eyebrow="About" title="A developer focused on clean websites that help businesses move forward." />
          <div className="about-copy">
            <p>
              Joshua Matthews helps businesses turn ideas into clean, responsive, functional websites. His work is
              built for clients who need more than a nice-looking page: they need an online presence that explains their
              value, earns trust, and gives customers a clear next step.
            </p>
            <p>
              Joshua combines front-end development, practical product thinking, and business-focused design to create
              websites, e-commerce experiences, landing pages, and web app interfaces that feel polished and easy to use.
            </p>
          </div>
        </div>
        <aside className="glass-card skill-card" aria-label="Technical skills">
          <h3>Core skills</h3>
          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

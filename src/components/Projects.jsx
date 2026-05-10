import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects.js';
import SectionHeader from './SectionHeader.jsx';

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Projects built to solve practical business and product problems."
          description="These examples show how Joshua thinks about customer journeys, buying decisions, trust, responsive layouts, and interfaces that help a business operate more professionally."
        />
        <div className="project-grid">
          {projects.map((project) => (
            <article className="glass-card project-card" key={project.title}>
              <div className="project-type">{project.type}</div>
              <h3>{project.title}</h3>
              <div className="project-case-study">
                <div className="case-row">
                  <span>Goal</span>
                  <p>{project.goal}</p>
                </div>
                <div className="case-row">
                  <span>Built</span>
                  <p>{project.built}</p>
                </div>
                <div className="case-row">
                  <span>Value</span>
                  <p>{project.value}</p>
                </div>
              </div>
              <div className="feature-list" aria-label={`${project.title} key features`}>
                {project.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>
              <div className="tag-list" aria-label={`${project.title} tech stack`}>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-actions">
                {project.liveUrl ? (
                  <a className="button button-small button-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
                    Live Demo
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="button button-small button-muted">{project.status || 'Coming Soon'}</span>
                )}
                <a className="button button-small button-secondary" href="#contact">
                  Start Similar Project
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="section-cta compact">
          <div>
            <span className="eyebrow">Have something similar in mind?</span>
            <h3>Bring your idea, offer, or existing website. Joshua can turn it into a polished client-ready build.</h3>
          </div>
          <a className="button button-secondary" href="#contact">
            Discuss My Project
          </a>
        </div>
      </div>
    </section>
  );
}

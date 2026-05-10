import { BriefcaseBusiness, Code2, Mail } from 'lucide-react';
import { contactDetails } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <a className="brand footer-brand" href="#home" aria-label="Joshua Matthews home">
            <span className="brand-mark">JM</span>
            <span>Joshua Matthews</span>
          </a>
          <p>Modern websites, e-commerce experiences, landing pages, and web applications for growing businesses.</p>
        </div>
        <div className="footer-cta">
          <strong>Have a project in mind?</strong>
          <a className="button button-secondary" href="#contact">
            Let&apos;s Talk
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Joshua Matthews. All rights reserved.</span>
          <div className="social-links" aria-label="Social links">
            <a href={`mailto:${contactDetails.email}`} aria-label="Email Joshua Matthews">
              <Mail size={18} />
            </a>
            <a href={contactDetails.github} target="_blank" rel="noreferrer" aria-label="Joshua Matthews GitHub">
              <Code2 size={18} />
            </a>
            <a
              href={contactDetails.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Joshua Matthews LinkedIn"
            >
              <BriefcaseBusiness size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

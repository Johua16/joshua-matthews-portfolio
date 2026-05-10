import { ArrowRight, BriefcaseBusiness, CheckCircle2, Code2, Mail, MessageCircle } from 'lucide-react';
import { contactDetails, heroBadges } from '../data/site.js';

export default function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy">
          <span className="hero-kicker">Freelance web developer for business websites and web apps</span>
          <h1>
            Hi, I&apos;m <span>Joshua</span>. I build websites that make your business easier to trust, understand, and choose.
          </h1>
          <p>
            I help brands, entrepreneurs, and growing businesses turn rough ideas into polished websites, landing pages,
            e-commerce experiences, and web applications that are clear, responsive, and ready to send to customers.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">
              Start a Project
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <a className="button button-secondary" href="#projects">
              View Client Work
            </a>
            <a className="button button-ghost" href={contactDetails.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp Joshua
              <MessageCircle size={18} aria-hidden="true" />
            </a>
          </div>
          <p className="hero-proof">Best for service businesses, online stores, personal brands, and founders who need a website that feels credible from day one.</p>
          <div className="hero-socials" aria-label="Joshua Matthews social and contact links">
            <a href={`mailto:${contactDetails.email}`} aria-label="Email Joshua Matthews">
              <Mail size={18} />
            </a>
            <a href={contactDetails.github} target="_blank" rel="noreferrer" aria-label="Joshua Matthews GitHub">
              <Code2 size={18} />
            </a>
            <a href={contactDetails.linkedin} target="_blank" rel="noreferrer" aria-label="Joshua Matthews LinkedIn">
              <BriefcaseBusiness size={18} />
            </a>
            <a href={contactDetails.whatsapp} target="_blank" rel="noreferrer" aria-label="Message Joshua Matthews on WhatsApp">
              <MessageCircle size={18} />
            </a>
          </div>
          <div className="badge-list" aria-label="Core website capabilities">
            {heroBadges.map((badge) => (
              <span key={badge}>
                <CheckCircle2 size={16} aria-hidden="true" />
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-panel hero-portrait-panel" aria-label="Joshua Matthews portfolio highlights">
          <div className="portrait-orb" aria-hidden="true">
            <span>JM</span>
          </div>
          <div className="panel-topline">
            <span>Client-ready website package</span>
            <strong>Build + launch</strong>
          </div>
          <div className="mock-browser">
            <div className="browser-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="mock-card primary">
              <span>Conversion-focused build</span>
              <strong>Clear offer, professional pages, stronger enquiries.</strong>
            </div>
            <div className="mock-stats">
              <div>
                <strong>Message</strong>
                <span>Offer made clear</span>
              </div>
              <div>
                <strong>Action</strong>
                <span>Contact path visible</span>
              </div>
            </div>
            <div className="mock-progress">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className="hero-metrics">
            <div>
              <strong>1</strong>
              <span>Clear next step</span>
            </div>
            <div>
              <strong>6</strong>
              <span>Paid services</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>Mobile-ready</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

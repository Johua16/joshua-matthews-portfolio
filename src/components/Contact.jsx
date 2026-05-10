import { BriefcaseBusiness, Code2, Mail, MessageCircle, Send } from 'lucide-react';
import { useState } from 'react';
import { contactDetails } from '../data/site.js';
import SectionHeader from './SectionHeader.jsx';

const contactLinks = [
  { label: 'Email', value: contactDetails.email, href: `mailto:${contactDetails.email}`, icon: Mail },
  { label: 'GitHub', value: 'github.com/johua16', href: contactDetails.github, icon: Code2 },
  {
    label: 'LinkedIn',
    value: 'Joshua Dele Matthews',
    href: contactDetails.linkedin,
    icon: BriefcaseBusiness,
  },
  { label: 'WhatsApp', value: contactDetails.phone, href: contactDetails.whatsapp, icon: MessageCircle },
];

export default function Contact() {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const projectType = formData.get('projectType');
    const message = formData.get('message');
    const whatsappMessage = [
      'Hello Joshua, I want to start a project conversation.',
      '',
      `Name: ${name}`,
      `Email: ${email}`,
      `Project type: ${projectType}`,
      '',
      `Message: ${message}`,
    ].join('\n');

    const whatsappUrl = `${contactDetails.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setFormStatus('Opening WhatsApp with your project details. You can review the message before sending.');
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div>
          <SectionHeader
            eyebrow="Contact"
            title="Start with a clear project enquiry. Get a website direction you can act on."
            description="Share what you want to launch, sell, fix, or improve. Joshua will use your message to understand the business goal, suggest the right type of build, and help you move toward a client-ready website."
          />
          <div className="contact-promise" aria-label="What happens after sending a project enquiry">
            <span>1. Share your goal</span>
            <span>2. Get a clear next step</span>
            <span>3. Build with confidence</span>
          </div>
          <div className="contact-links">
            {contactLinks.map(({ label, value, href, icon: Icon }) => {
              const content = (
                <>
                  <Icon size={20} aria-hidden="true" />
                  <span>
                    <strong>{label}</strong>
                    {value}
                  </span>
                </>
              );

              return href ? (
                <a
                  className="contact-link"
                  href={href}
                  key={label}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={`Contact Joshua Matthews on ${label}`}
                >
                  {content}
                </a>
              ) : (
                <div className="contact-link is-disabled" key={label} aria-disabled="true">
                  {content}
                </div>
              );
            })}
          </div>
        </div>

        <form className="glass-card contact-form" method="POST" onSubmit={handleSubmit}>
          <div className="form-intro">
            <h3>Tell me about the project</h3>
            <p>A short, specific message is enough to begin.</p>
          </div>
          <div className="field-group">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
          </div>
          <div className="field-group">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
          </div>
          <div className="field-group">
            <label htmlFor="projectType">Project type</label>
            <select id="projectType" name="projectType" defaultValue="" required>
              <option value="" disabled>
                Select a project type
              </option>
              <option>Business website</option>
              <option>Landing page</option>
              <option>E-commerce website</option>
              <option>Web application</option>
              <option>Website redesign</option>
              <option>Maintenance and improvements</option>
            </select>
          </div>
          <div className="field-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              placeholder="Tell me what your business does, what you need the website to achieve, and any pages, products, or features you already have in mind."
              required
            />
          </div>
          <button className="button button-primary form-submit" type="submit" aria-label="Send project enquiry">
            Request a Project Conversation
            <Send size={18} aria-hidden="true" />
          </button>
          {formStatus ? (
            <p className="form-status" role="status">
              {formStatus}
            </p>
          ) : null}
          <p className="form-note">No pressure. Use the form to start a focused conversation about scope, timeline, and next steps.</p>
        </form>
      </div>
    </section>
  );
}

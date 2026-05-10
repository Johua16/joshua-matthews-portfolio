import { Mail, Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import { contactDetails, navLinks } from '../data/site.js';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Primary navigation">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Joshua Matthews home">
          <span className="brand-mark">JM</span>
          <span>Joshua Matthews</span>
        </a>

        <div className="nav-contact" aria-label="Direct contact details">
          <a href={`tel:+2348069135853`} aria-label="Call Joshua Matthews">
            <Phone size={15} aria-hidden="true" />
            {contactDetails.phone}
          </a>
          <span aria-hidden="true" />
          <a href={`mailto:${contactDetails.email}`} aria-label="Email Joshua Matthews">
            <Mail size={15} aria-hidden="true" />
            {contactDetails.email}
          </a>
        </div>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-links ${isOpen ? 'is-open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

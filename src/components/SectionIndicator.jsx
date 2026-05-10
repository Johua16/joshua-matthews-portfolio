import { navLinks } from '../data/site.js';

export default function SectionIndicator() {
  return (
    <aside className="section-indicator" aria-label="Page section shortcuts">
      {navLinks.map((link) => (
        <a key={link.href} href={link.href} aria-label={`Go to ${link.label}`}>
          <span>{link.label}</span>
        </a>
      ))}
    </aside>
  );
}

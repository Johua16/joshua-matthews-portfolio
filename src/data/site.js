import {
  Code2,
  CreditCard,
  Gauge,
  Globe2,
  Headphones,
  LayoutDashboard,
  MessageSquare,
  Rocket,
  Search,
  Palette,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Wrench,
} from 'lucide-react';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export const heroBadges = ['Mobile-first', 'Clear messaging', 'Lead-ready pages', 'Client handoff'];

export const contactDetails = {
  email: 'delematthewsjoshua@gmail.com',
  phone: '08069135853',
  whatsapp: 'https://wa.me/2348069135853',
  github: 'https://github.com/johua16',
  linkedin: 'https://ng.linkedin.com/in/joshua-dele-matthews-a6390436a',
};

export const services = [
  {
    title: 'Business Websites',
    description:
      'A complete online presence for service businesses that need to look credible, explain their offer clearly, and turn visitors into enquiries.',
    icon: Globe2,
  },
  {
    title: 'Landing Pages',
    description:
      'Single-purpose campaign pages for launches, ads, products, or offers, written and structured to move visitors toward one clear action.',
    icon: Rocket,
  },
  {
    title: 'E-commerce Websites',
    description:
      'Shopfront experiences with product categories, pricing clarity, cart-ready flows, and trust-building layouts that help customers buy with confidence.',
    icon: ShoppingBag,
  },
  {
    title: 'Web App Interfaces',
    description:
      'Professional dashboards, portals, account areas, and product screens that make your application easier to understand, use, and present to users.',
    icon: LayoutDashboard,
  },
  {
    title: 'Website Redesign',
    description:
      'A strategic rebuild for websites that feel outdated, unclear, slow, or hard to use, with stronger messaging and a cleaner customer journey.',
    icon: Sparkles,
  },
  {
    title: 'Maintenance & Improvements',
    description:
      'Ongoing support for fixes, new sections, performance updates, content changes, and small improvements after launch.',
    icon: Wrench,
  },
];

export const processSteps = [
  {
    title: 'Discover',
    description: 'Clarify the business goal, ideal customer, offer, required pages, and the action the website should drive.',
    icon: Search,
  },
  {
    title: 'Design',
    description: 'Shape the layout, content flow, and visual direction so the site feels credible before development begins.',
    icon: Palette,
  },
  {
    title: 'Build',
    description: 'Develop a fast, responsive, maintainable website with clean sections, accessible forms, and careful details.',
    icon: Code2,
  },
  {
    title: 'Launch',
    description: 'Deploy, test on key devices, check core links and forms, and make the site client-ready.',
    icon: Rocket,
  },
  {
    title: 'Improve',
    description: 'Refine pages, add features, and improve performance as the business learns what customers need.',
    icon: Gauge,
  },
];

export const whyWorkWithMe = [
  { title: 'Mobile-first development', description: 'Your site is planned for real customers who discover, compare, and contact businesses from their phones.', icon: Smartphone },
  { title: 'Clear communication', description: 'You get a structured process, plain updates, and practical guidance without technical confusion.', icon: MessageSquare },
  { title: 'Business-focused design', description: 'Sections are built to support credibility, enquiries, sales, bookings, or product adoption.', icon: CreditCard },
  { title: 'Clean, maintainable code', description: 'Components, data, and styles are organized so future edits do not become a headache.', icon: Code2 },
  { title: 'Fast and responsive websites', description: 'Performance, spacing, accessibility, and responsive behavior are handled from the start.', icon: Gauge },
  { title: 'Support after launch', description: 'You can keep improving the site with updates, fixes, new pages, and better content over time.', icon: Headphones },
];

export const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Firebase',
  'Node.js',
  'Express',
  'Git',
  'GitHub',
  'Responsive Design',
];

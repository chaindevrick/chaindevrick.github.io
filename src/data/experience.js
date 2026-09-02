import en from '../locales/en.js';
import zh from '../locales/zh.js';

const companies = [
  { id: 'saturn', company: 'Saturn Technology', url: 'https://saturn-technology-project.github.io' },
  { id: 'prism', company: 'Prism Capital LLC', url: 'https://theprism.ltd' },
  { id: 'kura', company: 'Kura Finance LLC', url: 'https://kura-finance.com' },
];

export function getExperiences(locale) {
  const L = locale === 'zh' ? zh : en;
  return companies.map((c) => ({
    ...c,
    role: L.experiencePage.role,
    period: L.experiencePage.jobs[c.id].period,
    summary: L.experiencePage.jobs[c.id].summary,
    highlights: L.experiencePage.jobs[c.id].highlights,
  }));
}

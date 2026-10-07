import React from 'react';
import { ExternalLink, Code } from 'lucide-react';
import { EVENT_CONFIG } from '../data/eventData';
import { PceAcmLogo, PceAcmWLogo } from './BrandLogos';

interface FooterProps {
  isDark: boolean;
}

const QUICK_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Challenges', href: '#challenges' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Submission', href: '#submission' },
  { label: 'Judging', href: '#judging' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  return (
    <footer
      className={`border-t pt-16 pb-12 ${
        isDark
          ? 'bg-[#040510] border-violet-500/20 text-slate-300'
          : 'bg-slate-950 border-slate-800 text-slate-300'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Event Identity & Chapters (6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <PceAcmLogo className="w-12 h-12 shrink-0" />
              <PceAcmWLogo className="w-16 h-12 shrink-0" />
            </div>

            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-poster-gold tracking-tight">
                {EVENT_CONFIG.name}
              </h2>
              <p className="font-display text-base font-bold text-white mt-0.5">
                {EVENT_CONFIG.tagline} — “{EVENT_CONFIG.secondaryTagline}”
              </p>
            </div>

            <div className="text-xs sm:text-sm text-slate-400 space-y-1 leading-relaxed">
              <p className="font-semibold text-slate-200">
                PCE ACM Student Chapter &amp; PCE ACM-W Student Chapter
              </p>
              <p>{EVENT_CONFIG.department}</p>
              <p>{EVENT_CONFIG.institution}</p>
            </div>
          </div>

          {/* Column 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
              Quick Links
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Registration CTA (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400">
              Join AI-FUSION 2026
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              22 October 2026 · Computer Laboratory, IT Building, PCE Nagpur · Entry Fee: ₹100 / Member · Deadline: 15 October 2026.
            </p>
            <a
              href={EVENT_CONFIG.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-5 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg shadow-amber-500/20 transition-colors"
            >
              <span>REGISTER NOW</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom Copyright & Subtle Developer Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 PCE ACM &amp; ACM-W Student Chapter. All rights reserved.</p>

          <p className="inline-flex items-center gap-1.5 text-slate-400">
            <Code className="w-3.5 h-3.5 text-violet-400" />
            <span>Designed &amp; Developed by</span>
            <span className="font-semibold text-slate-200">
              {EVENT_CONFIG.developerCredit}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

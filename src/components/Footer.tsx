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
  { label: 'Timeline', href: '#timeline' },
  { label: 'Challenges', href: '#challenges' },
  { label: 'Submission', href: '#submission' },
  { label: 'Judging', href: '#judging' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Register', href: '#register' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const Footer: React.FC<FooterProps> = ({ isDark }) => {
  return (
    <footer
      className={`border-t py-12 ${
        isDark
          ? 'bg-[#04050F] border-white/10 text-slate-400'
          : 'bg-slate-900 border-slate-800 text-slate-300'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Institution Info */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-3">
              <PceAcmLogo className="w-11 h-11" />
              <PceAcmWLogo className="w-14 h-11" />
              <div>
                <div className="font-display text-lg font-extrabold text-white tracking-tight">
                  NATIONAL LEVEL AI-FUSION 2026
                </div>
                <div className="text-xs font-mono text-amber-400">
                  BUILD WITH AI — “Turn Your Ideas Into Impact”
                </div>
              </div>
            </div>

            <div className="space-y-1 pt-1">
              <p className="text-[11px] font-mono uppercase tracking-wider text-amber-300/90 font-semibold">
                {EVENT_CONFIG.societyName}
              </p>
              <p className="text-xs sm:text-sm font-bold text-white">
                {EVENT_CONFIG.institution}
              </p>
              <p className="text-[11px] text-slate-400">
                {EVENT_CONFIG.institutionSubtitle}
              </p>
              <p className="text-xs text-slate-300 pt-1">
                Organized by{' '}
                <strong className="text-white">
                  {EVENT_CONFIG.department}
                </strong>{' '}
                ·{' '}
                <span className="text-sky-400">PCE ACM Student Chapter</span> &amp;{' '}
                <span className="text-sky-300">
                  PCE ACM-W Student Chapter
                </span>
              </p>
            </div>
          </div>

          {/* Quick Jump Links */}
          <div className="md:col-span-4 space-y-2.5">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              Quick Navigation
            </div>
            <div className="grid grid-cols-2 gap-1.5 text-xs">
              {QUICK_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-amber-400 transition-colors py-0.5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Primary Registration Link */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              Registration
            </div>
            <a
              href={EVENT_CONFIG.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-extrabold bg-amber-400 hover:bg-amber-300 text-slate-950 transition-all"
            >
              <span>Register Now</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <div className="text-[11px] font-mono text-slate-400">
              22 Oct 2026 · ₹100 / Member
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Developer Attribution */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © 2026 Department of Computer Technology, PCE Nagpur · PCE ACM &amp;
            ACM-W Student Chapters.
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[11px]">
            <Code className="w-3.5 h-3.5 text-amber-400" />
            <span>Designed &amp; Developed by</span>
            <strong className="text-amber-300 font-bold">
              {EVENT_CONFIG.developerCredit}
            </strong>
          </div>
        </div>
      </div>
    </footer>
  );
};

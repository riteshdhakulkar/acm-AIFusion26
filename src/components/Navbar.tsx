import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, User, ExternalLink, MessageSquare } from 'lucide-react';
import { EVENT_CONFIG } from '../data/eventData';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenDashboard: () => void;
  participantName: string | null;
}

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Challenges', href: '#challenges' },
  { label: 'Submission', href: '#submission' },
  { label: 'Judging', href: '#judging' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  onToggleTheme,
  onOpenDashboard,
  participantName,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (y / docHeight) * 100)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled
          ? isDark
            ? 'bg-[#060714]/95 backdrop-blur-md border-b border-violet-500/20 shadow-lg shadow-black/40'
            : 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : isDark
          ? 'bg-[#060714]/85 backdrop-blur-md border-b border-white/10'
          : 'bg-white/90 backdrop-blur-md border-b border-slate-200/70'
      }`}
    >
      {/* Scroll Progress Indicator */}
      <div className="h-0.5 w-full bg-transparent overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-violet-500 via-sky-400 to-amber-400 transition-transform duration-150 origin-left"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
      </div>

      {/* Top Utility Bar: Sponsorship Notice + Top Right Developer Credit */}
      <div
        className={`border-b px-3 sm:px-6 lg:px-8 py-1 text-[10px] sm:text-[11px] font-mono ${
          isDark
            ? 'bg-[#040510]/95 border-white/5 text-slate-300'
            : 'bg-slate-100/95 border-slate-200/70 text-slate-600'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-hidden">
          <a
            href="#sponsorship"
            className="inline-flex items-center gap-1 font-semibold text-emerald-400 hover:underline truncate"
          >
            <span>🤝 Open for Sponsorship &amp; Collaboration</span>
          </a>
          <span className="ml-auto inline-flex items-center gap-1 tracking-wide shrink-0">
            <span className="hidden xs:inline text-slate-400">
              Designed &amp; Developed by
            </span>
            <span className="xs:hidden text-slate-400">Dev:</span>
            <strong
              className={
                isDark ? 'text-amber-300 font-bold' : 'text-violet-800 font-bold'
              }
            >
              {EVENT_CONFIG.developerCredit}
            </strong>
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
        {/* Zone 1: Brand Title */}
        <a
          href="#home"
          className={`font-display text-base sm:text-xl font-extrabold tracking-tight whitespace-nowrap shrink-0 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}
        >
          AI-FUSION 2026
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-6 text-sm font-medium"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`whitespace-nowrap transition-colors py-1 border-b-2 border-transparent hover:border-violet-400 ${
                isDark
                  ? 'text-slate-300 hover:text-white'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Actions + Mobile Hamburger Toggle */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className={`p-2 rounded-lg border transition-colors ${
              isDark
                ? 'border-white/15 text-slate-300 hover:text-amber-300 hover:bg-white/5'
                : 'border-slate-200 text-slate-700 hover:text-violet-700 hover:bg-slate-100'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={onOpenDashboard}
            className={`hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition-colors whitespace-nowrap ${
              isDark
                ? 'border-violet-500/30 bg-violet-950/40 text-violet-200 hover:bg-violet-900/50'
                : 'border-violet-200 bg-violet-50 text-violet-900 hover:bg-violet-100'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span className="max-w-[110px] truncate">
              {participantName ? participantName : 'Team Portal'}
            </span>
          </button>

          <a
            href={EVENT_CONFIG.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs sm:text-sm font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-sm shadow-amber-500/20 transition-colors whitespace-nowrap"
          >
            <span>REGISTER NOW</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Mobile Navigation Menu"
            className={`lg:hidden inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border font-mono text-xs font-bold transition-colors ${
              mobileMenuOpen
                ? 'bg-amber-400 text-slate-950 border-amber-300'
                : isDark
                ? 'bg-violet-950/70 border-violet-400/50 text-white hover:bg-violet-900'
                : 'bg-slate-100 border-slate-300 text-slate-900 hover:bg-slate-200'
            }`}
          >
            {mobileMenuOpen ? (
              <>
                <X className="w-4 h-4" />
                <span>Close</span>
              </>
            ) : (
              <>
                <Menu className="w-4 h-4 text-amber-400" />
                <span>Menu</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Hamburger Dropdown Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-4 pt-3 pb-5 space-y-3 shadow-2xl ${
            isDark
              ? 'bg-[#080A1E]/98 border-violet-500/30 text-slate-100'
              : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          <div className="grid grid-cols-2 gap-1.5">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-colors ${
                  isDark
                    ? 'bg-[#0C1029] border-white/10 hover:border-violet-400 text-slate-100'
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDashboard();
                }}
                className={`inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold border ${
                  isDark
                    ? 'border-violet-500/40 bg-violet-950/60 text-violet-200'
                    : 'border-violet-300 bg-violet-50 text-violet-900'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span className="truncate">
                  {participantName ? `Portal (${participantName})` : 'Team Portal'}
                </span>
              </button>

              <a
                href={EVENT_CONFIG.whatsappGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold bg-emerald-500 text-slate-950"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp Group</span>
              </a>
            </div>

            <a
              href={EVENT_CONFIG.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-extrabold bg-amber-400 text-slate-950 shadow-md"
            >
              <span>REGISTER NOW (GOOGLE FORM)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

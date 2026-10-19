import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, User, ExternalLink, MessageSquare, Zap, Flame } from 'lucide-react';
import { EVENT_CONFIG } from '../data/eventData';

interface NavbarProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenDashboard: () => void;
  participantName: string | null;
}

const NAV_LINKS = [
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
      setScrolled(y > 20);
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        scrolled
          ? isDark
            ? 'bg-[#0B0F19]/95 backdrop-blur-xl border-b border-slate-800 shadow-lg shadow-black/40'
            : 'bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm'
          : isDark
          ? 'bg-[#0B0F19]/85 backdrop-blur-md border-b border-slate-800/80'
          : 'bg-white/85 backdrop-blur-md border-b border-slate-200/70'
      }`}
    >
      {/* Top Most Urgent Attention Strip */}
      <div className="bg-amber-400 text-slate-950 py-1.5 px-3 sm:px-6 text-center text-xs font-bold tracking-wide flex items-center justify-center gap-2 overflow-hidden shadow-sm">
        <span className="inline-flex items-center gap-1 bg-slate-950 text-amber-300 px-2 py-0.5 rounded-full text-[10px] uppercase font-mono font-bold shrink-0 shadow-sm">
          <Flame className="w-3 h-3 text-rose-500 fill-rose-500" />
          <span>FEW DAYS REMAINING</span>
        </span>
        <span className="truncate text-slate-950 text-[11px] sm:text-xs font-bold">
          ⚡ <strong>Problem Statements Releasing Soon!</strong> Registration Closes 20th Oct
        </span>
        <a
          href={EVENT_CONFIG.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-1 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-950 text-amber-300 hover:bg-slate-900 transition-all font-mono font-bold uppercase text-[10px] shrink-0 shadow-sm hover:scale-105"
        >
          <span>ENROLL NOW</span>
          <ExternalLink className="w-2.5 h-2.5" />
        </a>
      </div>

      {/* Top Scroll Progress Line */}
      <div className="h-[2px] w-full bg-transparent overflow-hidden">
        <div
          className="h-full bg-blue-600 transition-transform duration-150 origin-left"
          style={{ transform: `scaleX(${scrollProgress / 100})` }}
        />
      </div>

      {/* Top Strip: Sponsorship Notice + Developer Credit */}
      <div
        className={`border-b px-3 sm:px-6 lg:px-8 py-1 text-[10px] sm:text-[11px] font-mono ${
          isDark
            ? 'bg-[#0F172A] border-slate-800 text-slate-300'
            : 'bg-slate-100 border-slate-200 text-slate-600'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 overflow-hidden">
          <a
            href="#sponsorship"
            className="inline-flex items-center gap-1.5 font-semibold text-emerald-400 hover:underline truncate"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
            <span className="truncate">Open for Sponsorship &amp; Collaboration</span>
          </a>
          <span className="ml-auto inline-flex items-center gap-1 tracking-wide shrink-0">
            <span className="text-sky-400 font-semibold">Dev:</span>
            <strong
              className={
                isDark ? 'text-amber-300 font-bold' : 'text-slate-900 font-bold'
              }
            >
              {EVENT_CONFIG.developerCredit}
            </strong>
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-14 sm:h-16 flex items-center justify-between gap-2">
        {/* Brand Identity (Clean — Logos shown in Institutional Banner below) */}
        <a
          href="#home"
          className="flex items-center gap-2 group focus:outline-none min-w-0 shrink-0"
        >
          <div className="min-w-0 leading-tight">
            <span
              className={`font-display text-sm sm:text-lg font-extrabold tracking-tight block truncate ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              AI-FUSION 2026
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-1 text-xs font-semibold"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-3 py-2 rounded-lg transition-colors ${
                isDark
                  ? 'text-slate-300 hover:text-white hover:bg-white/5'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions + Mobile Menu Button */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            className={`p-2 rounded-lg border transition-colors ${
              isDark
                ? 'border-white/10 text-slate-300 hover:text-amber-400 hover:bg-white/5'
                : 'border-slate-200 text-slate-700 hover:text-blue-600 hover:bg-slate-100'
            }`}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button
            type="button"
            onClick={onOpenDashboard}
            className={`hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition-colors ${
              isDark
                ? 'border-slate-700 bg-slate-800/80 text-slate-200 hover:bg-slate-700/80'
                : 'border-slate-200 bg-slate-100 text-slate-800 hover:bg-slate-200'
            }`}
          >
            <User className="w-3.5 h-3.5 text-amber-400" />
            <span className="max-w-[110px] truncate">
              {participantName ? participantName : 'Team Portal'}
            </span>
          </button>

          <a
            href={EVENT_CONFIG.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-black uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md shadow-amber-500/25 transition-all hover:scale-105 active:scale-95"
          >
            <span>ENROLL NOW ⚡</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Clear & Prominent Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Mobile Navigation Menu"
            className={`lg:hidden inline-flex items-center gap-1.5 px-2.5 py-2 rounded-lg border font-mono text-xs font-bold transition-colors ${
              mobileMenuOpen
                ? 'bg-amber-400 text-slate-950 border-amber-400'
                : isDark
                ? 'bg-white/5 border-white/20 text-white hover:bg-white/10'
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
                <Menu className="w-4 h-4" />
                <span>Menu</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b px-4 pt-3 pb-5 space-y-3 shadow-2xl ${
            isDark
              ? 'bg-[#0F172A] border-slate-800 text-slate-100'
              : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          <div className="grid grid-cols-2 gap-1.5">
            {NAV_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 rounded-xl text-xs font-bold border transition-colors ${
                  isDark
                    ? 'bg-slate-900 border-slate-800 hover:bg-slate-800 text-slate-200'
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDashboard();
                }}
                className={`inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold border ${
                  isDark
                    ? 'border-slate-700 bg-slate-800 text-slate-200'
                    : 'border-slate-300 bg-slate-100 text-slate-900'
                }`}
              >
                <User className="w-3.5 h-3.5 text-amber-400" />
                <span className="truncate">
                  {participantName ? `Portal (${participantName})` : 'Team Portal'}
                </span>
              </button>

              <a
                href={EVENT_CONFIG.whatsappGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-extrabold bg-[#25D366] text-slate-950"
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
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider bg-amber-400 text-slate-950 shadow-md shadow-amber-500/30 transition-transform active:scale-95"
            >
              <span>ENROLL NOW ⚡ (CLOSES 20 OCT)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

import React from 'react';
import {
  Trophy,
  Sparkles,
  Palette,
  Award,
  ExternalLink,
  Handshake,
  MessageSquare,
} from 'lucide-react';
import {
  PRIZE_CATEGORIES,
  WHY_PARTICIPATE_ITEMS,
  EVENT_CONFIG,
} from '../data/eventData';

interface PrizesAndWhyProps {
  isDark: boolean;
}

export const PrizesAndWhy: React.FC<PrizesAndWhyProps> = ({ isDark }) => {
  return (
    <section
      className={`py-20 lg:py-28 border-t bg-circuit-grid ${
        isDark
          ? 'bg-[#060714] border-violet-500/20'
          : 'bg-slate-50 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* PART 1: PRIZES & RECOGNITION */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="text-xs font-mono font-semibold tracking-wider text-amber-400">
              10. REWARDS &amp; HONORS
            </div>
            <h2
              className={`font-display text-3xl sm:text-5xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              Prizes &amp; Recognition
            </h2>
          </div>

          {/* Total Prize Pool Hero Banner */}
          <div
            className={`mb-8 p-8 sm:p-10 rounded-3xl border text-center relative overflow-hidden ${
              isDark
                ? 'bg-gradient-to-r from-[#140F38] via-[#1B1245] to-[#140F38] border-amber-400/60 shadow-2xl shadow-amber-500/10'
                : 'bg-gradient-to-r from-amber-50 via-white to-amber-50 border-amber-400 shadow-lg'
            }`}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-400/20 border border-amber-400/50 text-amber-400 mb-4">
              <Trophy className="w-7 h-7" />
            </div>
            <p className="text-xs sm:text-sm font-mono font-bold tracking-widest text-amber-400">
              🏆 TOTAL PRIZE POOL
            </p>
            <div
              className={`font-mono tabular-nums text-5xl sm:text-7xl font-extrabold tracking-tight mt-2 ${
                isDark ? 'text-poster-gold' : 'text-slate-950'
              }`}
            >
              {EVENT_CONFIG.prizePool}
            </div>
            <p
              className={`text-sm sm:text-base mt-3 max-w-xl mx-auto ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              Cash prizes, special category honors, and official certificates for every participating student.
            </p>
          </div>

          {/* 3 Award Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRIZE_CATEGORIES.map((prize, idx) => (
              <div
                key={prize.title}
                className={`p-6 sm:p-8 rounded-2xl border flex flex-col justify-between ${
                  prize.featured
                    ? isDark
                      ? 'bg-[#121034] border-amber-400/60 shadow-lg shadow-amber-500/10'
                      : 'bg-amber-50/60 border-amber-400 shadow-md'
                    : isDark
                    ? 'bg-[#0C0F26] border-violet-500/25'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-bold ${
                        prize.featured ? 'text-amber-400' : 'text-sky-400'
                      }`}
                    >
                      {prize.badge}
                    </span>
                    {idx === 0 ? (
                      <Trophy className="w-5 h-5 text-amber-400" />
                    ) : idx === 1 ? (
                      <Sparkles className="w-5 h-5 text-violet-400" />
                    ) : (
                      <Palette className="w-5 h-5 text-sky-400" />
                    )}
                  </div>

                  <div>
                    <h3
                      className={`font-display text-2xl font-extrabold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {prize.title}
                    </h3>
                    <p className="text-sm font-mono font-bold text-amber-400 mt-1">
                      {prize.subtitle}
                    </p>
                  </div>

                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {prize.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Certificates for All Participants Banner */}
          <div
            className={`mt-6 p-5 sm:p-6 rounded-2xl border flex flex-col sm:flex-row items-center justify-between gap-4 ${
              isDark
                ? 'bg-[#0C102B] border-violet-500/30 text-white'
                : 'bg-white border-slate-200 text-slate-900'
            }`}
          >
            <div className="flex items-center gap-3.5">
              <div className="p-3 rounded-xl bg-violet-500/20 border border-violet-400/40 text-violet-300 shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold">
                  📜 Certificates for All Participants
                </h4>
                <p
                  className={`text-xs sm:text-sm ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  Every registered participant who attends and submits a project receives an official Certificate of Participation from PCE ACM &amp; ACM-W Student Chapters.
                </p>
              </div>
            </div>
            <a
              href={EVENT_CONFIG.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold bg-amber-400 hover:bg-amber-300 text-slate-950 whitespace-nowrap shrink-0"
            >
              <span>REGISTER NOW</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* PART 2: WHY PARTICIPATE? (9 Cards) */}
        <div>
          <div className="max-w-3xl mb-10 space-y-2">
            <div className="text-xs font-mono font-semibold tracking-wider text-sky-400">
              11. STUDENT ADVANTAGES
            </div>
            <h2
              className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              Why Participate?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {WHY_PARTICIPATE_ITEMS.map((item, idx) => (
              <div
                key={item.title}
                className={`p-5 sm:p-6 rounded-2xl border transition-colors ${
                  isDark
                    ? 'bg-[#0C0F26]/90 border-violet-500/20 hover:border-violet-400/50'
                    : 'bg-white border-slate-200 hover:border-violet-400'
                }`}
              >
                <div className="text-xs font-mono font-bold text-amber-400 mb-2">
                  0{idx + 1}
                </div>
                <h3
                  className={`font-display text-lg font-bold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-xs sm:text-sm mt-1.5 leading-relaxed ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PART 3: OPEN FOR SPONSORSHIP & COLLABORATION */}
        <div
          id="sponsorship"
          className={`rounded-3xl border p-6 sm:p-10 lg:p-12 ${
            isDark
              ? 'bg-gradient-to-br from-[#121036] via-[#0C102B] to-[#080B1E] border-amber-400/50 shadow-2xl shadow-violet-950/50'
              : 'bg-gradient-to-br from-amber-50/80 via-white to-violet-50 border-amber-400 shadow-lg'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
                <Handshake className="w-4 h-4" />
                <span>INDUSTRY &amp; COMMUNITY PARTNERSHIPS</span>
              </div>

              <h2
                className={`font-display text-2xl sm:text-4xl font-extrabold tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}
              >
                Open for Sponsorship &amp; Collaboration
              </h2>

              <p
                className={`text-sm sm:text-base leading-relaxed max-w-2xl ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                We welcome technology companies, startups, developer platforms, tech communities, and educational brands to sponsor or collaborate with{' '}
                <strong className={isDark ? 'text-white' : 'text-slate-900'}>
                  NATIONAL LEVEL AI-FUSION 2026
                </strong>{' '}
                at Priyadarshini College of Engineering, Nagpur. Connect your brand with top student developers and AI builders from across the region.
              </p>

              <div
                className={`flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs font-mono ${
                  isDark ? 'text-amber-300' : 'text-violet-800'
                }`}
              >
                <span>✓ Title &amp; Co-Sponsorship</span>
                <span>·</span>
                <span>✓ Tech &amp; AI Tool Partners</span>
                <span>·</span>
                <span>✓ Community &amp; Media Collaboration</span>
                <span>·</span>
                <span>✓ Swag, Goodies &amp; Special Track Sponsors</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={`https://wa.me/918552035048?text=${encodeURIComponent(
                  'Hello AI-FUSION 2026 Team! We are interested in Sponsorship / Collaboration opportunities for National Level AI-FUSION 2026 at PCE Nagpur.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-xs sm:text-sm font-extrabold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Inquire on WhatsApp (Sponsorship)</span>
              </a>

              <a
                href="#contact"
                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold border transition-colors ${
                  isDark
                    ? 'border-white/15 text-slate-200 hover:bg-white/5'
                    : 'border-slate-300 text-slate-800 hover:bg-slate-100'
                }`}
              >
                <span>View Organizing Team Contacts</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

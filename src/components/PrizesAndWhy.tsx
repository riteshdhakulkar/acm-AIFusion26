import React from 'react';
import {
  Trophy,
  Sparkles,
  Palette,
  Award,
  Handshake,
  MessageSquare,
} from 'lucide-react';
import {
  PRIZE_CATEGORIES,
  EVENT_CONFIG,
} from '../data/eventData';

interface PrizesAndWhyProps {
  isDark: boolean;
}

export const PrizesAndWhy: React.FC<PrizesAndWhyProps> = ({ isDark }) => {
  return (
    <section
      className={`py-12 lg:py-16 border-t bg-circuit-grid ${
        isDark
          ? 'bg-[#060714] border-violet-500/20'
          : 'bg-slate-50 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* PART 1: PRIZES & RECOGNITION */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <div className="text-xs font-mono font-semibold tracking-wider text-amber-400">
                06. REWARDS &amp; HONORS
              </div>
              <h2
                className={`font-display text-2xl sm:text-4xl font-extrabold tracking-tight mt-1 ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}
              >
                Prizes &amp; Recognition — {EVENT_CONFIG.prizePool} Pool
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-semibold text-violet-300">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Certificates Provided for All Participants</span>
            </div>
          </div>

          {/* 3 Award Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {PRIZE_CATEGORIES.map((prize, idx) => (
              <div
                key={prize.title}
                className={`p-6 rounded-2xl border flex flex-col justify-between ${
                  prize.featured
                    ? isDark
                      ? 'bg-[#121034] border-amber-400/60 shadow-lg shadow-amber-500/10'
                      : 'bg-amber-50/60 border-amber-400 shadow-md'
                    : isDark
                    ? 'bg-[#0C0F26] border-violet-500/25'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="space-y-3">
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
                      className={`font-display text-xl font-extrabold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {prize.title}
                    </h3>
                    <p className="text-xs font-mono font-bold text-amber-400 mt-0.5">
                      {prize.subtitle}
                    </p>
                  </div>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {prize.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 2: OPEN FOR SPONSORSHIP & COLLABORATION */}
        <div
          id="sponsorship"
          className={`rounded-3xl border p-6 sm:p-8 ${
            isDark
              ? 'bg-gradient-to-br from-[#121036] via-[#0C102B] to-[#080B1E] border-amber-400/50 shadow-xl'
              : 'bg-gradient-to-br from-amber-50/80 via-white to-violet-50 border-amber-400 shadow-md'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2.5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
                <Handshake className="w-4 h-4" />
                <span>INDUSTRY &amp; COMMUNITY PARTNERSHIPS</span>
              </div>

              <h3
                className={`font-display text-xl sm:text-3xl font-extrabold tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}
              >
                Open for Sponsorship &amp; Collaboration
              </h3>

              <p
                className={`text-xs sm:text-sm leading-relaxed max-w-2xl ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                We welcome tech companies, startups, developer platforms, and communities to sponsor or collaborate with{' '}
                <strong className={isDark ? 'text-white' : 'text-slate-900'}>
                  NATIONAL LEVEL AI-FUSION 2026
                </strong>{' '}
                at Priyadarshini College of Engineering, Nagpur.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5">
              <a
                href={`https://wa.me/919356802767?text=${encodeURIComponent(
                  'Hello Tejas! We are interested in Sponsorship / Collaboration opportunities for National Level AI-FUSION 2026 at PCE Nagpur.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Sponsor / Collaborate on WhatsApp</span>
              </a>
              <div
                className={`text-center text-xs font-mono ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Contact: <strong className={isDark ? 'text-white' : 'text-slate-900'}>Tejas Choudhary</strong> (+91 93568 02767)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

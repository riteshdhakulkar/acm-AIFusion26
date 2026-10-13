import React from 'react';
import {
  Trophy,
  Sparkles,
  Award,
  Handshake,
  MessageSquare,
  PhoneCall,
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
      id="prizes"
      className={`py-14 lg:py-20 border-t ${
        isDark
          ? 'bg-[#060714] border-white/10'
          : 'bg-slate-50 border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Prize Pool Header + 3 Award Cards */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                // 06 · REWARDS &amp; RECOGNITION
              </span>
              <h2
                className={`font-display text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                ₹10,000 Prize Pool &amp; Special Awards
              </h2>
            </div>

            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl border text-xs font-semibold ${
                isDark
                  ? 'bg-[#0C1029] border-emerald-500/30 text-emerald-300'
                  : 'bg-emerald-50 border-emerald-200 text-emerald-900'
              }`}
            >
              <Award className="w-4 h-4 text-emerald-400" />
              <span>Official Participation Certificate for Every Participant</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PRIZE_CATEGORIES.map((prize, idx) => {
              const isWinner = prize.featured;
              return (
                <div
                  key={prize.title}
                  className={`p-5 sm:p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                    isWinner
                      ? isDark
                        ? 'bg-gradient-to-b from-amber-500/15 via-[#0F1333] to-[#0C1029] border-amber-400/50 shadow-xl shadow-amber-950/20'
                        : 'bg-amber-50/80 border-amber-400 shadow-md'
                      : isDark
                      ? 'bg-[#0C1029] border-white/10'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                          isWinner
                            ? 'bg-amber-400 text-slate-950'
                            : isDark
                            ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                            : 'bg-violet-100 text-violet-800'
                        }`}
                      >
                        {prize.badge}
                      </span>
                      {idx === 0 ? (
                        <Trophy className="w-5 h-5 text-amber-400" />
                      ) : (
                        <Sparkles className="w-5 h-5 text-sky-400" />
                      )}
                    </div>

                    <h3
                      className={`font-display text-xl font-extrabold ${
                        isWinner
                          ? 'text-amber-400'
                          : isDark
                          ? 'text-white'
                          : 'text-slate-900'
                      }`}
                    >
                      {prize.title}
                    </h3>

                    <div
                      className={`text-xs font-mono font-semibold ${
                        isDark ? 'text-sky-300' : 'text-sky-700'
                      }`}
                    >
                      {prize.subtitle}
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
              );
            })}
          </div>
        </div>

        {/* Open for Sponsorship & Industry Collaboration Banner */}
        <div
          id="sponsorship"
          className={`p-5 sm:p-6 rounded-2xl border-l-4 border-l-emerald-400 border ${
            isDark
              ? 'bg-[#0C1029] border-white/10'
              : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-5">
            <div className="space-y-1.5 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-400">
                <Handshake className="w-4 h-4" />
                <span>Open for Sponsorship &amp; Community Partners</span>
              </div>
              <h3
                className={`font-display text-lg sm:text-xl font-extrabold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Partner With National Level AI-FUSION 2026 at PCE Nagpur
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                We welcome tech companies, developer platforms, startups, and
                educational partners to collaborate with the Department of
                Computer Technology, PCE ACM &amp; PCE ACM-W Student Chapters
                through prize sponsorships, API credits, or mentorship.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={EVENT_CONFIG.whatsappGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold bg-emerald-400 hover:bg-emerald-300 text-slate-950 transition-all"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Connect on WhatsApp</span>
              </a>
              <a
                href="#contact"
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold border transition-colors ${
                  isDark
                    ? 'border-white/15 bg-white/5 text-white hover:bg-white/10'
                    : 'border-slate-300 bg-slate-50 text-slate-900 hover:bg-slate-100'
                }`}
              >
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span>Contact Organizers</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

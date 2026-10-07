import React, { useState } from 'react';
import {
  Lock,
  CalendarClock,
  ArrowUpRight,
  CheckCircle2,
  X,
  ExternalLink,
  Terminal,
} from 'lucide-react';
import { CHALLENGE_DOMAINS, ChallengeDomain, EVENT_CONFIG } from '../data/eventData';

interface ChallengeDomainsProps {
  isDark: boolean;
  selectedDomainId: string;
  onSelectDomain: (domainId: string) => void;
}

export const ChallengeDomains: React.FC<ChallengeDomainsProps> = ({
  isDark,
  selectedDomainId,
  onSelectDomain,
}) => {
  const [activeModalDomain, setActiveModalDomain] = useState<ChallengeDomain | null>(
    null
  );

  return (
    <section
      id="challenges"
      className={`py-20 lg:py-28 border-t ${
        isDark
          ? 'bg-[#080A1E] border-violet-500/20'
          : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10 space-y-3">
          <div className="text-xs font-mono font-semibold tracking-wider text-sky-400">
            03. PROBLEM STATEMENTS
          </div>
          <h2
            className={`font-display text-3xl sm:text-5xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}
          >
            PROBLEM STATEMENTS WILL BE DISPLAYED ON EVENT DAY
          </h2>
          <p
            className={`text-base sm:text-lg ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            To ensure a fair and exciting competition for every team, the official problem statements are kept confidential and{' '}
            <strong className="text-amber-400">
              will be displayed live at the venue on 22 October 2026
            </strong>
            . Participants will be able to choose <strong className="text-sky-400">ANY ONE</strong> of the four revealed problem statements on the spot.
          </p>
        </div>

        {/* Highlighted On-Site Reveal Banner */}
        <div
          className={`mb-10 p-6 sm:p-8 rounded-3xl border flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 ${
            isDark
              ? 'bg-gradient-to-r from-[#140F38] via-[#0E1230] to-[#0B0E24] border-amber-400/50 shadow-xl shadow-violet-950/40'
              : 'bg-amber-50/90 border-amber-400 shadow-md'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-amber-400/20 border border-amber-400/40 text-amber-400 shrink-0 mt-0.5">
              <CalendarClock className="w-7 h-7" />
            </div>
            <div className="space-y-1.5">
              <div className="text-xs font-mono font-bold text-amber-400">
                ON-SITE LIVE REVEAL · 22 OCTOBER 2026
              </div>
              <h3
                className={`font-display text-xl sm:text-2xl font-extrabold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                All Problem Statements Will Be Displayed Live on Event Day
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed max-w-2xl ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                No pre-built projects are allowed. All teams will receive the problem statements simultaneously during the morning orientation at the Computer Laboratory, IT Building, PCE Nagpur, followed immediately by 4 hours of coding with AI tools.
              </p>
            </div>
          </div>

          <a
            href={EVENT_CONFIG.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold bg-amber-400 hover:bg-amber-300 text-slate-950 whitespace-nowrap shrink-0"
          >
            <span>REGISTER NOW</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* 4 Confidential Challenge Track Slots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CHALLENGE_DOMAINS.map((domain) => {
            const isSelected = selectedDomainId === domain.id;
            return (
              <article
                key={domain.id}
                className={`rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${
                  isSelected
                    ? isDark
                      ? 'bg-[#12163A] border-amber-400/70 shadow-xl shadow-amber-500/10'
                      : 'bg-amber-50/40 border-amber-500 shadow-md'
                    : isDark
                    ? 'bg-[#0C0F26] border-violet-500/25 hover:border-violet-400/60'
                    : 'bg-slate-50 border-slate-200 hover:border-violet-400'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Row: Track Number + Lock Icon */}
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-3 rounded-xl border ${
                          isDark
                            ? 'bg-violet-500/15 border-violet-400/30 text-amber-400'
                            : 'bg-white border-slate-200 text-violet-700'
                        }`}
                      >
                        <Lock className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-mono font-semibold text-sky-400">
                          PROBLEM STATEMENT {domain.number}
                        </span>
                        <h3
                          className={`font-display text-xl sm:text-2xl font-bold tracking-tight ${
                            isDark ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {domain.title}
                        </h3>
                      </div>
                    </div>

                    <span className="text-xs font-mono font-bold text-amber-400">
                      🔒 Event Day Reveal
                    </span>
                  </div>

                  {/* Short Description */}
                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {domain.shortDescription}
                  </p>

                  {/* Official Status Box */}
                  <div
                    className={`p-4 rounded-xl border ${
                      isDark
                        ? 'bg-[#070918] border-violet-500/20'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 mb-1.5">
                      <Terminal className="w-3.5 h-3.5" />
                      <span>STATUS: DISPLAYED ON 22 OCTOBER 2026</span>
                    </div>
                    <p
                      className={`text-sm leading-relaxed font-medium ${
                        isDark ? 'text-slate-100' : 'text-slate-800'
                      }`}
                    >
                      {domain.problemStatement}
                    </p>
                  </div>
                </div>

                {/* Card Footer Buttons */}
                <div className="pt-6 mt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModalDomain(domain)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-colors whitespace-nowrap ${
                      isDark
                        ? 'border-violet-400/40 bg-violet-950/50 text-violet-200 hover:bg-violet-900/60'
                        : 'border-violet-300 bg-white text-violet-900 hover:bg-violet-50'
                    }`}
                  >
                    <span>View Track Format</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectDomain(domain.id)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-colors whitespace-nowrap ${
                      isSelected
                        ? 'bg-amber-400 text-slate-950'
                        : isDark
                        ? 'text-slate-300 hover:text-white hover:bg-white/5'
                        : 'text-slate-700 hover:text-slate-950 hover:bg-slate-200/60'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>{isSelected ? 'Slot Marked' : 'Mark Slot'}</span>
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Interactive Modal */}
      {activeModalDomain && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="challenge-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveModalDomain(null)}
        >
          <div
            className={`max-w-2xl w-full rounded-2xl border p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto ${
              isDark
                ? 'bg-[#0C0F26] border-violet-500/40 text-slate-100'
                : 'bg-white border-slate-200 text-slate-900'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400">
                  ON-SITE PROBLEM STATEMENT {activeModalDomain.number}
                </span>
                <h3
                  id="challenge-modal-title"
                  className="font-display text-2xl sm:text-3xl font-extrabold mt-1"
                >
                  {activeModalDomain.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalDomain(null)}
                aria-label="Close modal"
                className="p-2 rounded-lg border border-white/15 hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div
              className={`p-4 rounded-xl border ${
                isDark
                  ? 'bg-[#070918] border-violet-500/25'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <p className="text-xs font-mono font-bold text-sky-400 mb-1">
                EVENT DAY REVEAL POLICY
              </p>
              <p className="text-sm sm:text-base leading-relaxed">
                {activeModalDomain.problemStatement}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <h4 className="text-xs font-mono font-bold text-violet-400 mb-2">
                  WHAT TO EXPECT ON EVENT DAY
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {activeModalDomain.keyFocusAreas.map((area) => (
                    <li key={area} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">→</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono font-bold text-emerald-400 mb-2">
                  HOW YOU CAN USE AI
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {activeModalDomain.suggestedAiCapabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setActiveModalDomain(null)}
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-violet-600 hover:bg-violet-500 text-white"
              >
                Got It
              </button>
              <a
                href={EVENT_CONFIG.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold bg-amber-400 hover:bg-amber-300 text-slate-950"
              >
                <span>Register Now</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

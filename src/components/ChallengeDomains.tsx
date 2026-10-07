import React from 'react';
import {
  CalendarClock,
  Cpu,
  Check,
  Layers,
  ExternalLink,
} from 'lucide-react';
import {
  EVENT_CONFIG,
  WHAT_TO_BUILD_REQUIREMENTS,
  PERMITTED_TECH_STACKS,
  AI_TOOL_EXAMPLES,
} from '../data/eventData';

interface ChallengeDomainsProps {
  isDark: boolean;
}

export const ChallengeDomains: React.FC<ChallengeDomainsProps> = ({
  isDark,
}) => {
  return (
    <section
      id="challenges"
      className={`py-12 lg:py-16 border-t ${
        isDark
          ? 'bg-[#080A1E] border-violet-500/20'
          : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Top Banner: Problem Statements Revealed on Event Day */}
        <div
          className={`p-6 sm:p-8 rounded-3xl border flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 ${
            isDark
              ? 'bg-gradient-to-r from-[#140F38] via-[#0E1230] to-[#0B0E24] border-amber-400/50 shadow-xl shadow-violet-950/40'
              : 'bg-amber-50/90 border-amber-400 shadow-md'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="p-3.5 rounded-2xl bg-amber-400/20 border border-amber-400/40 text-amber-400 shrink-0 mt-0.5">
              <CalendarClock className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <div className="text-[11px] font-mono font-semibold text-amber-400">
                03. PROBLEM STATEMENTS · LIVE REVEAL
              </div>
              <h2
                className={`font-display text-xl sm:text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Problem Statements Displayed on Event Day (22 Oct 2026)
              </h2>
              <p
                className={`text-xs leading-relaxed max-w-2xl ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                4 problem statements will be revealed on-site during orientation. Teams choose{' '}
                <strong className="text-amber-400">ANY ONE</strong> to build in 4 hours.
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

        {/* Compact 2-Column Grid: What You Build + AI Tools Allowed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: What You Build & Tech Stack Freedom */}
          <div
            className={`lg:col-span-6 p-6 sm:p-7 rounded-2xl border flex flex-col justify-between space-y-5 ${
              isDark
                ? 'bg-[#0C0F26] border-violet-500/25'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-sky-400">
                WHAT YOU ARE EXPECTED TO BUILD
              </span>
              <h3
                className={`font-display text-xl sm:text-2xl font-extrabold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Functional AI-Powered Website / Web App
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {WHAT_TO_BUILD_REQUIREMENTS.map((req) => (
                  <div
                    key={req}
                    className="flex items-center gap-2 text-xs sm:text-sm font-medium"
                  >
                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className={isDark ? 'text-slate-200' : 'text-slate-700'}>
                      {req}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`pt-4 border-t text-xs ${
                isDark ? 'border-white/10 text-slate-300' : 'border-slate-200 text-slate-600'
              }`}
            >
              <div className="flex items-center gap-1.5 font-mono font-bold text-amber-400 mb-1.5">
                <Layers className="w-3.5 h-3.5" />
                <span>ANY WEB TECH STACK ALLOWED:</span>
              </div>
              <p className="font-mono text-xs text-sky-400">
                {PERMITTED_TECH_STACKS.join(' · ')}
              </p>
            </div>
          </div>

          {/* Right: AI IS ALLOWED 🚀 */}
          <div
            className={`lg:col-span-6 p-6 sm:p-7 rounded-2xl border flex flex-col justify-between space-y-5 ${
              isDark
                ? 'bg-gradient-to-br from-[#120E36] to-[#0C0F28] border-violet-400/40'
                : 'bg-violet-50/70 border-violet-300'
            }`}
          >
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
                <Cpu className="w-4 h-4" />
                <span>OFFICIAL AI POLICY</span>
              </div>
              <h3
                className={`font-display text-xl sm:text-2xl font-extrabold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                AI IS ALLOWED 🚀
              </h3>
              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-slate-200' : 'text-slate-700'
                }`}
              >
                Participants are free to use AI tools for brainstorming, research, UI/code generation, debugging, and documentation:
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {AI_TOOL_EXAMPLES.map((tool) => (
                  <span
                    key={tool}
                    className={`px-3 py-1.5 rounded-lg border font-mono text-xs font-semibold ${
                      isDark
                        ? 'bg-[#070919] border-white/10 text-emerald-300'
                        : 'bg-white border-slate-200 text-slate-800'
                    }`}
                  >
                    ✓ {tool}
                  </span>
                ))}
              </div>
            </div>

            <div
              className={`p-4 rounded-xl border-l-4 border-amber-400 ${
                isDark
                  ? 'bg-amber-400/10 text-white'
                  : 'bg-amber-50 text-slate-900'
              }`}
            >
              <p className="font-display text-sm sm:text-base font-extrabold text-amber-400">
                “AI can help you build it. You must be able to explain it.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

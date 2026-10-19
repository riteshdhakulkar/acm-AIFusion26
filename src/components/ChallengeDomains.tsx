import React from 'react';
import {
  Lock,
  Sparkles,
  CheckCircle2,
  Calendar,
  Cpu,
  Code2,
  ExternalLink,
} from 'lucide-react';
import {
  EVENT_CONFIG,
  WHAT_TO_BUILD_REQUIREMENTS,
  PERMITTED_TECH_STACKS,
  AI_TOOL_EXAMPLES,
  CHALLENGE_DOMAINS,
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
      className={`py-14 lg:py-20 border-t ${
        isDark
          ? 'bg-[#080B1E] border-white/10'
          : 'bg-white border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              // 03 · CHALLENGE PROBLEM STATEMENTS &amp; BUILD RULES
            </span>
            <h2
              className={`font-display text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Problem Statements &amp; AI Tool Guidelines
            </h2>
          </div>

          <a
            href={EVENT_CONFIG.registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold bg-amber-400 hover:bg-amber-300 text-slate-950 transition-all self-start md:self-auto"
          >
            <span>Register Your Team</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Official Event-Day Reveal Banner */}
        <div
          className={`p-6 sm:p-8 rounded-2xl border-l-4 border-l-amber-400 border ${
            isDark
              ? 'bg-gradient-to-r from-amber-500/10 via-[#0C1029] to-[#0C1029] border-white/10'
              : 'bg-amber-50/70 border-slate-200'
          }`}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2.5 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30">
                <Lock className="w-3.5 h-3.5 text-amber-400" />
                <span>On-Site Reveal Only · No Pre-Revealed Domains</span>
              </div>

              <h3
                className={`font-display text-xl sm:text-2xl font-extrabold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                2 Problem Statements Will Be Displayed Live on Event Day
              </h3>

              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-700'
                }`}
              >
                To ensure a fair and exciting 4-hour sprint for every team,
                problem statements are{' '}
                <strong className="text-amber-400">
                  not disclosed in advance
                </strong>
                . Exactly{' '}
                <strong className="text-sky-400">
                  2 official problem statements
                </strong>{' '}
                will be displayed on-site on{' '}
                <strong className={isDark ? 'text-white' : 'text-slate-900'}>
                  22 October 2026
                </strong>{' '}
                during the morning briefing (11:00 AM), and each team will choose{' '}
                <strong className="text-amber-400">any ONE</strong> problem
                statement to build and deploy.
              </p>
            </div>

            <div
              className={`p-4 sm:p-5 rounded-xl border shrink-0 lg:w-72 space-y-2 ${
                isDark
                  ? 'bg-[#070A1C] border-white/10'
                  : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400">
                <Calendar className="w-4 h-4 text-amber-400" />
                <span>EVENT-DAY FORMAT</span>
              </div>
              <ul
                className={`text-xs space-y-1.5 ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                <li>• Reporting time: 10:00 AM at CT Dept (1st Floor)</li>
                <li>• Exactly 2 problem statements revealed at 11:00 AM</li>
                <li>• Choose ANY 1 problem statement with your team</li>
                <li>• 4 Hours of hands-on AI-assisted coding sprint</li>
                <li>• Deploy live URL + push to GitHub</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2 Problem Statements Cards Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
              // 2 OFFICIAL CHALLENGE TRACKS (PICK ANY 1)
            </span>
            <span
              className={`text-xs font-mono ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Revealed Live on 22 October 2026
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CHALLENGE_DOMAINS.map((domain) => (
              <div
                key={domain.id}
                className={`p-6 rounded-2xl border transition-all flex flex-col justify-between relative overflow-hidden ${
                  isDark
                    ? 'bg-[#0C1029] border-white/10 hover:border-amber-400/50'
                    : 'bg-slate-50 border-slate-200 hover:border-amber-400'
                }`}
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-amber-400/15 text-amber-300 border border-amber-400/30 flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 text-amber-400" />
                      <span>{domain.title}</span>
                    </span>
                    <span className="text-[11px] font-mono text-sky-400 font-semibold">
                      Live Reveal @ 11:00 AM
                    </span>
                  </div>

                  <h4
                    className={`font-display text-base sm:text-lg font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Track {domain.number} · Event-Day Challenge
                  </h4>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {domain.shortDescription}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-white/10">
                    <div className="text-[11px] font-mono uppercase text-amber-400 font-bold">
                      Key Deliverables
                    </div>
                    <ul
                      className={`text-xs space-y-1.5 ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      {domain.keyFocusAreas.map((focus, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{focus}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div
                  className={`mt-4 pt-3 border-t text-[11px] font-mono flex items-center justify-between ${
                    isDark
                      ? 'border-white/10 text-slate-400'
                      : 'border-slate-200 text-slate-600'
                  }`}
                >
                  <span>Coding Duration: 4 Hours</span>
                  <span className="text-emerald-400 font-semibold">
                    Pick Either Track 01 or 02
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compact 2-Column Build & AI Guidelines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Column 1: What Teams Need to Build + Tech Stack */}
          <div
            className={`p-5 sm:p-6 rounded-2xl border space-y-5 ${
              isDark
                ? 'bg-[#0C1029] border-white/10'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center gap-2.5">
              <Code2 className="w-5 h-5 text-sky-400 shrink-0" />
              <h3
                className={`font-display text-lg font-extrabold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                What Participants Need to Build
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {WHAT_TO_BUILD_REQUIREMENTS.map((req) => (
                <div
                  key={req}
                  className={`p-3 rounded-xl border flex items-center gap-2 text-xs font-medium ${
                    isDark
                      ? 'bg-[#07091A] border-white/10 text-slate-200'
                      : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{req}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-white/10">
              <div className="text-[11px] font-mono uppercase tracking-wider text-sky-400 font-semibold mb-2">
                Permitted Web / App Tech Stacks (Any Modern Stack)
              </div>
              <div className="flex flex-wrap gap-1.5">
                {PERMITTED_TECH_STACKS.map((stack) => (
                  <span
                    key={stack}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono border ${
                      isDark
                        ? 'bg-[#07091A] border-white/10 text-slate-300'
                        : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    {stack}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: AI Tools Policy */}
          <div
            className={`p-5 sm:p-6 rounded-2xl border space-y-5 ${
              isDark
                ? 'bg-[#0C1029] border-violet-500/30'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <Cpu className="w-5 h-5 text-amber-400 shrink-0" />
                <h3
                  className={`font-display text-lg font-extrabold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  AI Tool Usage Guidelines
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                100% Permitted
              </span>
            </div>

            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Participants are encouraged to use AI tools for ideation, UI
              generation, coding, and debugging:
            </p>

            <div className="flex flex-wrap gap-2">
              {AI_TOOL_EXAMPLES.map((tool) => (
                <span
                  key={tool}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-semibold border ${
                    isDark
                      ? 'bg-[#07091A] border-violet-500/30 text-violet-200'
                      : 'bg-white border-violet-200 text-violet-900'
                  }`}
                >
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>{tool}</span>
                </span>
              ))}
            </div>

            <div
              className={`p-4 rounded-xl border-l-4 border-l-amber-400 border ${
                isDark
                  ? 'bg-amber-500/10 border-white/10 text-slate-200'
                  : 'bg-amber-50 border-amber-200 text-slate-800'
              }`}
            >
              <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold mb-1">
                Mandatory Rule
              </div>
              <p className="text-xs sm:text-sm font-semibold leading-snug">
                “Participants must understand and explain their code,
                architecture, and project flow during judging.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

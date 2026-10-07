import React from 'react';
import {
  Check,
  Code2,
  Cpu,
  TerminalSquare,
  Layers,
} from 'lucide-react';
import {
  WHAT_TO_BUILD_REQUIREMENTS,
  PERMITTED_TECH_STACKS,
  AI_ALLOWED_USES,
  AI_TOOL_EXAMPLES,
} from '../data/eventData';

interface WhatToBuildAndAIProps {
  isDark: boolean;
}

export const WhatToBuildAndAI: React.FC<WhatToBuildAndAIProps> = ({ isDark }) => {
  return (
    <section
      className={`py-20 lg:py-28 border-t ${
        isDark
          ? 'bg-[#080B20] border-violet-500/20'
          : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* PART 1: WHAT ARE YOU EXPECTED TO BUILD? */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono font-semibold tracking-wider text-sky-400">
              05. DELIVERABLE SPECIFICATIONS
            </div>
            <h2
              className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
              style={{ textWrap: 'balance' }}
            >
              WHAT ARE YOU EXPECTED TO BUILD?
            </h2>
            <p
              className={`text-base leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Participants must build a{' '}
              <strong className={isDark ? 'text-white' : 'text-slate-900'}>
                functional AI-powered website or web application
              </strong>{' '}
              addressing one of the selected challenge problems within the 4-hour coding window.
            </p>

            {/* Technology Stack Freedom Card */}
            <div
              className={`p-6 rounded-2xl border space-y-3 ${
                isDark
                  ? 'bg-[#0C102B] border-violet-500/30'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center gap-2 text-sm font-bold text-amber-400">
                <Layers className="w-4 h-4" />
                <span>Complete Technology Stack Freedom</span>
              </div>
              <p
                className={`text-xs sm:text-sm ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                We do not force a particular framework. Participants are free to choose any modern web stack they are most productive with:
              </p>
              <div
                className={`flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs sm:text-sm font-mono font-semibold pt-1 ${
                  isDark ? 'text-sky-300' : 'text-violet-800'
                }`}
              >
                {PERMITTED_TECH_STACKS.map((tech, i) => (
                  <React.Fragment key={tech}>
                    <span>{tech}</span>
                    {i < PERMITTED_TECH_STACKS.length - 1 && (
                      <span aria-hidden="true" className="text-slate-500">
                        ·
                      </span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* 8 Core Project Requirements Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHAT_TO_BUILD_REQUIREMENTS.map((req, index) => (
              <div
                key={req}
                className={`p-5 rounded-2xl border flex items-start gap-3.5 ${
                  isDark
                    ? 'bg-[#0C0F26] border-violet-500/25'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400">
                    REQ {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3
                    className={`text-sm sm:text-base font-bold mt-0.5 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {req}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 2: AI USAGE POLICY ("AI IS ALLOWED 🚀") */}
        <div
          className={`rounded-3xl border p-6 sm:p-10 lg:p-12 relative overflow-hidden ${
            isDark
              ? 'bg-gradient-to-br from-[#120E36] via-[#0C0F28] to-[#080B1E] border-violet-400/40 shadow-2xl shadow-violet-950/40'
              : 'bg-gradient-to-br from-violet-50 via-white to-sky-50 border-violet-300 shadow-lg'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-400">
                <Cpu className="w-4 h-4" />
                <span>OFFICIAL AI USAGE POLICY</span>
              </div>

              <h2
                className={`font-display text-3xl sm:text-5xl font-extrabold tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}
              >
                AI IS ALLOWED 🚀
              </h2>

              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  isDark ? 'text-slate-200' : 'text-slate-700'
                }`}
              >
                Participants are free to use AI tools during the webathon. We encourage developers to harness modern AI platforms to prototype faster, write cleaner code, and solve harder problems in 4 hours.
              </p>

              {/* Permitted AI Uses */}
              <div>
                <h3
                  className={`text-xs font-mono font-bold uppercase tracking-wider mb-3 ${
                    isDark ? 'text-sky-400' : 'text-sky-700'
                  }`}
                >
                  AI May Be Used For:
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {AI_ALLOWED_USES.map((useItem) => (
                    <div
                      key={useItem}
                      className={`px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-semibold flex items-center gap-2 ${
                        isDark
                          ? 'bg-[#080A1C]/80 border-white/10 text-slate-100'
                          : 'bg-white border-slate-200 text-slate-800'
                      }`}
                    >
                      <Code2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                      <span className="truncate">{useItem}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mandatory Highlighted Statement */}
              <div
                className={`p-5 rounded-2xl border-l-4 border-amber-400 ${
                  isDark
                    ? 'bg-amber-400/10 border-y border-r border-amber-400/30 text-white'
                    : 'bg-amber-50 border-y border-r border-amber-300 text-slate-900'
                }`}
              >
                <p className="font-display text-lg sm:text-2xl font-extrabold tracking-tight text-amber-400">
                  “AI can help you build it. You must be able to explain it.”
                </p>
                <p
                  className={`text-xs sm:text-sm mt-1 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  Participants must understand and be able to explain their submitted project architecture, code, and decisions during judging.
                </p>
              </div>
            </div>

            {/* Right Column: Examples of Permitted AI Tools */}
            <div className="lg:col-span-5">
              <div
                className={`p-6 rounded-2xl border space-y-4 ${
                  isDark
                    ? 'bg-[#070919]/95 border-violet-500/30'
                    : 'bg-white border-slate-200 shadow-sm'
                }`}
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <TerminalSquare className="w-4 h-4 text-sky-400" />
                    <span
                      className={`font-mono text-xs font-bold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      PERMITTED AI TOOLS &amp; ASSISTANTS
                    </span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-semibold">
                    Unrestricted
                  </span>
                </div>

                <div className="space-y-2.5">
                  {AI_TOOL_EXAMPLES.map((tool, idx) => (
                    <div
                      key={tool}
                      className={`px-4 py-3 rounded-xl border flex items-center justify-between ${
                        isDark
                          ? 'bg-[#0D1029] border-white/10 text-slate-100'
                          : 'bg-slate-50 border-slate-200 text-slate-900'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-violet-400 font-bold">
                          0{idx + 1}
                        </span>
                        <span className="text-sm font-bold">{tool}</span>
                      </div>
                      <span className="text-xs font-mono text-emerald-400">
                        Allowed ✓
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

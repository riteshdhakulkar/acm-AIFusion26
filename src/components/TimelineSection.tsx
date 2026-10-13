import React from 'react';
import { TIMELINE_STEPS } from '../data/eventData';

interface TimelineSectionProps {
  isDark: boolean;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ isDark }) => {
  return (
    <section
      id="timeline"
      className={`py-14 lg:py-20 border-t ${
        isDark
          ? 'bg-[#060714] border-white/10'
          : 'bg-slate-50 border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              // 02 · COMPETITION WORKFLOW (9 STAGES)
            </span>
            <h2
              className={`font-display text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              How the 6-Hour Event Works
            </h2>
          </div>

          <div
            className={`inline-flex items-center gap-3 px-4 py-2 rounded-xl border text-xs font-mono ${
              isDark
                ? 'bg-[#0C1029] border-violet-500/30 text-slate-300'
                : 'bg-white border-slate-200 text-slate-700'
            }`}
          >
            <span>
              Total: <strong className="text-amber-400">6 Hours</strong>
            </span>
            <span>·</span>
            <span>
              Coding: <strong className="text-sky-400">4 Hours</strong>
            </span>
            <span>·</span>
            <span>
              Pitch: <strong className="text-emerald-400">4–5m + 2m Q&amp;A</strong>
            </span>
          </div>
        </div>

        {/* Compact 3x3 Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {TIMELINE_STEPS.map((step) => {
            const isCodingSprint = step.step === 'STEP 05';
            return (
              <div
                key={step.step}
                className={`p-4 sm:p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                  isCodingSprint
                    ? isDark
                      ? 'bg-gradient-to-br from-amber-500/15 via-[#101538] to-[#0C1029] border-amber-400/50'
                      : 'bg-amber-50/70 border-amber-300'
                    : isDark
                    ? 'bg-[#0C1029]/90 border-white/10 hover:border-violet-500/40'
                    : 'bg-white border-slate-200 hover:border-violet-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider ${
                        isCodingSprint
                          ? 'bg-amber-400 text-slate-950'
                          : isDark
                          ? 'bg-violet-500/20 text-violet-300 border border-violet-500/30'
                          : 'bg-violet-100 text-violet-800'
                      }`}
                    >
                      {step.step}
                    </span>
                    <span
                      className={`text-[11px] font-mono font-semibold ${
                        isCodingSprint
                          ? 'text-amber-400'
                          : isDark
                          ? 'text-sky-400'
                          : 'text-sky-700'
                      }`}
                    >
                      {step.subtitle}
                    </span>
                  </div>

                  <h3
                    className={`font-display text-base sm:text-lg font-extrabold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {step.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm mt-1 leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { TIMELINE_STEPS } from '../data/eventData';

interface TimelineSectionProps {
  isDark: boolean;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ isDark }) => {
  return (
    <section
      id="timeline"
      className={`py-12 lg:py-16 border-t bg-circuit-grid ${
        isDark
          ? 'bg-[#060714] border-violet-500/20'
          : 'bg-slate-50 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-8">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-amber-400">
              02. STEP-BY-STEP WORKFLOW
            </div>
            <h2
              className={`font-display text-2xl sm:text-4xl font-extrabold tracking-tight mt-1 ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              How the Webathon Works
            </h2>
          </div>
          <p
            className={`text-xs sm:text-sm font-mono ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            6 Hours Total · <strong className="text-sky-400">4 Hours Coding</strong> · 9 Milestones
          </p>
        </div>

        {/* Compact 9-Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TIMELINE_STEPS.map((item) => {
            const isBuildStep = item.step === 'STEP 05';

            return (
              <div
                key={item.step}
                className={`p-4 sm:p-5 rounded-2xl border ${
                  isBuildStep
                    ? isDark
                      ? 'bg-gradient-to-br from-violet-950/80 via-[#0E1230] to-[#0B0E26] border-amber-400/70'
                      : 'bg-amber-50/70 border-amber-400'
                    : isDark
                    ? 'bg-[#0B0E24]/90 border-violet-500/20'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span
                    className={`font-mono text-xs font-extrabold ${
                      isBuildStep ? 'text-amber-400' : 'text-sky-400'
                    }`}
                  >
                    {item.step}
                  </span>
                  <span
                    className={`font-mono text-[11px] ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3
                  className={`font-display text-base sm:text-lg font-extrabold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {item.title}
                </h3>

                <p
                  className={`text-xs leading-relaxed mt-1 ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

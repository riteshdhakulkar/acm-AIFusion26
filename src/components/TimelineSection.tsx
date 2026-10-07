import React, { useState } from 'react';
import { TIMELINE_STEPS } from '../data/eventData';
import { CheckCircle2, ChevronRight } from 'lucide-react';

interface TimelineSectionProps {
  isDark: boolean;
}

export const TimelineSection: React.FC<TimelineSectionProps> = ({ isDark }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(4); // Default highlight on STEP 05 BUILD WITH AI

  return (
    <section
      id="timeline"
      className={`py-20 lg:py-28 border-t bg-circuit-grid ${
        isDark
          ? 'bg-[#060714] border-violet-500/20'
          : 'bg-slate-50 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-amber-400">
              04. STEP-BY-STEP WORKFLOW
            </div>
            <h2
              className={`font-display text-3xl sm:text-5xl font-extrabold tracking-tight mt-1 ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              How the Webathon Works
            </h2>
          </div>
          <p
            className={`text-sm font-mono ${
              isDark ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            6 Hours Total Duration · <strong className="text-sky-400">4 Hours Actual Coding</strong> · 9 Structured Milestones
          </p>
        </div>

        {/* Interactive Step Selector Bar for quick jump */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {TIMELINE_STEPS.map((item, idx) => {
            const active = activeStepIndex === idx;
            return (
              <button
                key={item.step}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`px-3.5 py-2 rounded-xl font-mono text-xs font-bold transition-colors whitespace-nowrap shrink-0 border ${
                  active
                    ? 'bg-violet-600 text-white border-violet-400 shadow-md shadow-violet-600/25'
                    : isDark
                    ? 'bg-[#0C0F26] text-slate-300 border-white/10 hover:border-violet-400/50'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-violet-400'
                }`}
              >
                {item.step}: {item.title}
              </button>
            );
          })}
        </div>

        {/* Complete 9-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TIMELINE_STEPS.map((item, idx) => {
            const isSelected = activeStepIndex === idx;
            const isBuildStep = item.step === 'STEP 05';

            return (
              <div
                key={item.step}
                onClick={() => setActiveStepIndex(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveStepIndex(idx);
                  }
                }}
                className={`p-6 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isBuildStep
                    ? isDark
                      ? 'bg-gradient-to-br from-violet-950/80 via-[#0E1230] to-[#0B0E26] border-amber-400/70 shadow-xl shadow-violet-950/30'
                      : 'bg-amber-50/70 border-amber-400 shadow-md'
                    : isSelected
                    ? isDark
                      ? 'bg-[#111536] border-sky-400/60'
                      : 'bg-white border-violet-500 shadow-md'
                    : isDark
                    ? 'bg-[#0B0E24]/90 border-violet-500/20 hover:border-violet-400/40'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`font-mono text-xs font-extrabold tracking-wider ${
                        isBuildStep
                          ? 'text-amber-400'
                          : 'text-sky-400'
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
                    className={`font-display text-xl font-extrabold tracking-tight ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`text-xs font-mono font-semibold ${
                      isBuildStep
                        ? 'text-amber-300'
                        : isDark
                        ? 'text-violet-300'
                        : 'text-violet-700'
                    }`}
                  >
                    {item.subtitle}
                  </p>

                  <p
                    className={`text-sm leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {item.description}
                  </p>

                  {item.highlights && (
                    <div
                      className={`mt-3 pt-3 border-t ${
                        isDark ? 'border-white/10' : 'border-slate-200'
                      }`}
                    >
                      <p className="text-[11px] font-mono font-bold text-amber-400 mb-2">
                        PERMITTED AI TOOLS INCLUDE:
                      </p>
                      <div className="grid grid-cols-2 gap-1.5 text-xs">
                        {item.highlights.map((tool) => (
                          <div
                            key={tool}
                            className="flex items-center gap-1.5 font-medium"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span className="truncate">{tool}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>Phase {idx + 1} of 9</span>
                  <ChevronRight className="w-4 h-4 text-violet-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import {
  JUDGING_CRITERIA,
  PRESENTATION_STRUCTURE,
} from '../data/eventData';
import { Award } from 'lucide-react';

interface JudgingAndPresentationProps {
  isDark: boolean;
}

export const JudgingAndPresentation: React.FC<JudgingAndPresentationProps> = ({
  isDark,
}) => {
  return (
    <section
      id="judging"
      className={`py-12 lg:py-16 border-t ${
        isDark
          ? 'bg-[#080B1F] border-violet-500/20'
          : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-amber-400">
              06. EVALUATION &amp; PITCH FORMAT
            </div>
            <h2
              className={`font-display text-2xl sm:text-4xl font-extrabold tracking-tight mt-1 ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              Judging Criteria &amp; Your 7-Minute Pitch
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-bold text-emerald-400">
            <Award className="w-4 h-4" />
            <span>Pre-Judging → Live Demo (4–5m) → Q&amp;A (2m) → Final Results</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: 100% Judging Rubric in One Compact Card */}
          <div
            className={`lg:col-span-7 p-6 rounded-2xl border space-y-4 ${
              isDark
                ? 'bg-[#0C0F26] border-violet-500/25'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3
                className={`font-display text-lg sm:text-xl font-bold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                100-Point Evaluation Rubric
              </h3>
              <span className="font-mono text-xs font-bold text-amber-400">
                TOTAL = 100%
              </span>
            </div>

            <div className="space-y-3.5">
              {JUDGING_CRITERIA.map((criterion) => (
                <div key={criterion.id} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span
                      className={`font-bold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {criterion.title}
                    </span>
                    <span className="font-mono tabular-nums font-extrabold text-amber-400">
                      {criterion.percentage}%
                    </span>
                  </div>
                  <div
                    className={`h-2 w-full rounded-full overflow-hidden ${
                      isDark ? 'bg-white/10' : 'bg-slate-200'
                    }`}
                  >
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 via-sky-400 to-amber-400"
                      style={{
                        width: `${criterion.percentage * 3.6}%`,
                        maxWidth: '100%',
                      }}
                    />
                  </div>
                  <p
                    className={`text-xs ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {criterion.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Your 7 Minutes Breakdown */}
          <div
            className={`lg:col-span-5 p-6 rounded-2xl border space-y-5 ${
              isDark
                ? 'bg-[#0C102B] border-violet-500/35'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div>
              <span className="text-xs font-mono font-bold text-sky-400">
                FINAL PRESENTATION FORMAT
              </span>
              <h3
                className={`font-display text-xl sm:text-2xl font-extrabold mt-0.5 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                YOUR 7 MINUTES
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div
                className={`p-3.5 rounded-xl border text-center ${
                  isDark
                    ? 'bg-[#07091A] border-violet-500/30'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="font-mono tabular-nums text-xl sm:text-2xl font-extrabold text-sky-400">
                  4–5 MIN
                </div>
                <div className="text-[11px] font-mono font-bold mt-0.5">
                  PRESENTATION + LIVE DEMO
                </div>
              </div>

              <div
                className={`p-3.5 rounded-xl border text-center ${
                  isDark
                    ? 'bg-[#07091A] border-amber-400/30'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="font-mono tabular-nums text-xl sm:text-2xl font-extrabold text-amber-400">
                  + 2 MIN
                </div>
                <div className="text-[11px] font-mono font-bold mt-0.5">
                  JUDGES&apos; Q&amp;A
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-mono font-bold text-violet-300">
                SUGGESTED PITCH FLOW (01–07):
              </p>
              <div className="grid grid-cols-1 gap-1.5 text-xs">
                {PRESENTATION_STRUCTURE.map((item) => (
                  <div
                    key={item.step}
                    className={`px-3 py-2 rounded-lg border flex items-center gap-2.5 ${
                      isDark
                        ? 'bg-[#080A1C] border-white/10 text-slate-200'
                        : 'bg-white border-slate-200 text-slate-800'
                    }`}
                  >
                    <span className="font-mono font-extrabold text-amber-400 shrink-0">
                      {item.step}
                    </span>
                    <span className="font-bold">{item.title}:</span>
                    <span className="text-slate-400 truncate">{item.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

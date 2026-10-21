import React from 'react';
import {
  Award,
  Presentation,
  Clock,
  HelpCircle,
} from 'lucide-react';
import {
  JUDGING_CRITERIA,
  PRESENTATION_STRUCTURE,
} from '../data/eventData';

interface JudgingAndPresentationProps {
  isDark: boolean;
}

export const JudgingAndPresentation: React.FC<JudgingAndPresentationProps> = ({
  isDark,
}) => {
  const totalPercentage = JUDGING_CRITERIA.reduce(
    (sum, item) => sum + item.percentage,
    0
  );

  return (
    <section
      id="judging"
      className={`py-14 lg:py-20 border-t ${
        isDark
          ? 'bg-[#080B1E] border-white/10'
          : 'bg-white border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              // 05 · EVALUATION &amp; PITCH FORMAT
            </span>
            <h2
              className={`font-display text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Judging Criteria &amp; Final Presentation
            </h2>
          </div>

          <div
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-mono font-bold ${
              isDark
                ? 'bg-[#0C1029] border-amber-400/30 text-amber-300'
                : 'bg-amber-50 border-amber-200 text-amber-900'
            }`}
          >
            <Award className="w-4 h-4 text-amber-400" />
            <span>Total Evaluation Weight: {totalPercentage}%</span>
          </div>
        </div>

        {/* 2-Column Split: Left = 100-Point Rubric Bars, Right = Pitch Format */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left 7 Cols: Judging Criteria Progress Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {JUDGING_CRITERIA.map((criterion, index) => {
              const barColors = [
                'from-amber-400 to-amber-500',
                'from-sky-400 to-sky-500',
                'from-violet-400 to-violet-500',
                'from-emerald-400 to-emerald-500',
                'from-amber-400 to-sky-400',
                'from-sky-400 to-violet-400',
              ];
              const barGradient = barColors[index % barColors.length];

              return (
                <div
                  key={criterion.id}
                  className={`p-4 rounded-2xl border flex flex-col justify-between ${
                    isDark
                      ? 'bg-[#0C1029] border-white/10'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3
                        className={`font-display text-sm sm:text-base font-extrabold ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {criterion.title}
                      </h3>
                      <span className="font-mono text-base font-extrabold text-amber-400 shrink-0">
                        {criterion.percentage}%
                      </span>
                    </div>

                    <div
                      className={`w-full h-2 rounded-full overflow-hidden mb-2.5 ${
                        isDark ? 'bg-[#070919]' : 'bg-slate-200'
                      }`}
                    >
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${barGradient}`}
                        style={{ width: `${criterion.percentage * 3.5}%` }}
                      />
                    </div>

                    <p
                      className={`text-xs leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {criterion.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right 5 Cols: Final Presentation Format (4–5m + 2m Q&A) */}
          <div className="lg:col-span-5">
            <div
              className={`p-5 sm:p-6 rounded-2xl border space-y-5 ${
                isDark
                  ? 'bg-[#0C1029] border-violet-500/30'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Presentation className="w-5 h-5 text-amber-400" />
                  <h3
                    className={`font-display text-lg font-extrabold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Final Pitch Format (7 Mins)
                  </h3>
                </div>
              </div>

              {/* Timing Split Pills */}
              <div className="grid grid-cols-2 gap-2.5">
                <div
                  className={`p-3 rounded-xl border ${
                    isDark
                      ? 'bg-[#07091A] border-amber-400/30'
                      : 'bg-white border-amber-300'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-amber-400 font-bold">
                    <Clock className="w-3.5 h-3.5" />
                    <span>LIVE DEMO</span>
                  </div>
                  <div
                    className={`font-display text-base font-extrabold mt-0.5 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    4–5 Minutes
                  </div>
                </div>

                <div
                  className={`p-3 rounded-xl border ${
                    isDark
                      ? 'bg-[#07091A] border-sky-400/30'
                      : 'bg-white border-sky-300'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-sky-400 font-bold">
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>JUDGES Q&amp;A</span>
                  </div>
                  <div
                    className={`font-display text-base font-extrabold mt-0.5 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    2 Minutes
                  </div>
                </div>
              </div>

              {/* 7-Point Pitch Flow */}
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                  Recommended 7-Point Demo Flow:
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {PRESENTATION_STRUCTURE.map((item) => (
                    <div
                      key={item.step}
                      className={`px-3 py-2 rounded-xl border text-xs flex items-center gap-2 ${
                        item.step === '07' ? 'col-span-2' : ''
                      } ${
                        isDark
                          ? 'bg-[#07091A] border-white/10 text-slate-200'
                          : 'bg-white border-slate-200 text-slate-800'
                      }`}
                    >
                      <span className="font-mono text-[10px] font-bold text-amber-400">
                        {item.step}.
                      </span>
                      <span className="font-bold">{item.title}</span>
                      <span
                        className={`text-[11px] truncate ${
                          isDark ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        — {item.detail}
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

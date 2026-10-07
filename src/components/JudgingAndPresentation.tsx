import React, { useState, useEffect } from 'react';
import {
  JUDGING_STAGES,
  JUDGING_CRITERIA,
  PRESENTATION_STRUCTURE,
} from '../data/eventData';
import { Play, Pause, RotateCcw, Clock, Award } from 'lucide-react';

interface JudgingAndPresentationProps {
  isDark: boolean;
}

export const JudgingAndPresentation: React.FC<JudgingAndPresentationProps> = ({
  isDark,
}) => {
  // Interactive 7-Minute Pitch Practice Timer (420 seconds = 5m Presentation + 2m Q&A)
  const TOTAL_SECONDS = 420;
  const [secondsLeft, setSecondsLeft] = useState(TOTAL_SECONDS);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    if (!timerRunning) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setTimerRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timerRunning]);

  const formatTimer = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const elapsed = TOTAL_SECONDS - secondsLeft;
  const currentPhase =
    elapsed < 300
      ? 'Phase 1: Project Presentation + Live Demo (First 5 Mins)'
      : 'Phase 2: Judges Q&A Session (Final 2 Mins)';

  const totalWeight = JUDGING_CRITERIA.reduce(
    (acc, item) => acc + item.percentage,
    0
  );

  return (
    <section
      id="judging"
      className={`py-20 lg:py-28 border-t ${
        isDark
          ? 'bg-[#080B1F] border-violet-500/20'
          : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        {/* PART 1: 4-STAGE JUDGING PROCESS */}
        <div>
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="text-xs font-mono font-semibold tracking-wider text-sky-400">
              07. EVALUATION WORKFLOW
            </div>
            <h2
              className={`font-display text-3xl sm:text-5xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              Judging Process
            </h2>
            <p
              className={`text-base sm:text-lg ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Every submitted project undergoes a transparent, four-stage evaluation conducted by the judging panel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {JUDGING_STAGES.map((stage) => (
              <div
                key={stage.stage}
                className={`p-6 rounded-2xl border flex flex-col justify-between ${
                  isDark
                    ? 'bg-[#0C0F26] border-violet-500/25'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-amber-400 font-bold">{stage.stage}</span>
                    <span className="text-sky-400">{stage.duration}</span>
                  </div>

                  <h3
                    className={`font-display text-xl font-extrabold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {stage.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {stage.description}
                  </p>

                  <ul className="pt-2 space-y-1.5 text-xs sm:text-sm">
                    {stage.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2">
                        <span className="text-violet-400 font-bold">•</span>
                        <span className={isDark ? 'text-slate-200' : 'text-slate-700'}>
                          {pt}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 2: JUDGING CRITERIA (100% RUBRIC) */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-mono font-semibold tracking-wider text-amber-400">
                08. WEIGHTED SCORING RUBRIC
              </div>
              <h2
                className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}
              >
                Judging Criteria
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 font-mono text-sm font-bold text-emerald-400">
              <Award className="w-4 h-4" />
              <span>Total Evaluation Weight = {totalWeight}%</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {JUDGING_CRITERIA.map((criterion, idx) => (
              <div
                key={criterion.id}
                className={`p-6 rounded-2xl border flex flex-col justify-between ${
                  isDark
                    ? 'bg-[#0C0F26] border-violet-500/25'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-xs font-mono text-slate-400">
                        CRITERION 0{idx + 1}
                      </span>
                      <h3
                        className={`font-display text-lg sm:text-xl font-bold mt-0.5 ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {criterion.title}
                      </h3>
                    </div>
                    <span className="font-mono tabular-nums text-2xl sm:text-3xl font-extrabold text-amber-400 shrink-0">
                      {criterion.percentage}%
                    </span>
                  </div>

                  {/* Animated Weight Bar */}
                  <div
                    className={`h-2 w-full rounded-full overflow-hidden ${
                      isDark ? 'bg-white/10' : 'bg-slate-200'
                    }`}
                  >
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-violet-500 via-sky-400 to-amber-400"
                      style={{ width: `${criterion.percentage * 3.5}%`, maxWidth: '100%' }}
                    />
                  </div>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {criterion.description}
                  </p>
                </div>

                <div
                  className={`mt-4 pt-3 border-t text-xs space-y-1 ${
                    isDark
                      ? 'border-white/10 text-slate-400'
                      : 'border-slate-200 text-slate-500'
                  }`}
                >
                  {criterion.keyQuestions.map((q) => (
                    <p key={q}>• {q}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PART 3: PRESENTATION FORMAT ("YOUR 7 MINUTES") */}
        <div
          className={`rounded-3xl border p-6 sm:p-10 lg:p-12 ${
            isDark
              ? 'bg-[#0C102B] border-violet-500/35'
              : 'bg-slate-50 border-slate-200 shadow-sm'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Visual Timer Breakdown & Rehearsal Tool */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400">
                  09. FINAL STAGE PRESENTATION FORMAT
                </span>
                <h2
                  className={`font-display text-3xl sm:text-5xl font-extrabold tracking-tight mt-1 ${
                    isDark ? 'text-white' : 'text-slate-950'
                  }`}
                >
                  YOUR 7 MINUTES
                </h2>
                <p
                  className={`text-sm sm:text-base mt-2 ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  Total: Approximately <strong className="text-amber-400">6–7 minutes per team</strong>. Make every minute count with a crisp live demonstration.
                </p>
              </div>

              {/* Visual Breakdown Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-11 gap-3 items-center">
                <div
                  className={`sm:col-span-5 p-4 rounded-2xl border text-center ${
                    isDark
                      ? 'bg-[#07091A] border-violet-500/30'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="font-mono tabular-nums text-2xl sm:text-3xl font-extrabold text-sky-400">
                    4–5 MIN
                  </div>
                  <div
                    className={`text-xs font-mono font-bold mt-1 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    PROJECT PRESENTATION + LIVE DEMO
                  </div>
                </div>

                <div className="sm:col-span-1 text-center font-mono text-2xl font-extrabold text-amber-400">
                  +
                </div>

                <div
                  className={`sm:col-span-5 p-4 rounded-2xl border text-center ${
                    isDark
                      ? 'bg-[#07091A] border-amber-400/30'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <div className="font-mono tabular-nums text-2xl sm:text-3xl font-extrabold text-amber-400">
                    2 MIN
                  </div>
                  <div
                    className={`text-xs font-mono font-bold mt-1 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    JUDGES&apos; Q&amp;A
                  </div>
                </div>
              </div>

              {/* Interactive Pitch Rehearsal Timer */}
              <div
                className={`p-5 rounded-2xl border space-y-3 ${
                  isDark
                    ? 'bg-[#07091A] border-sky-500/30'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-400">
                    <Clock className="w-4 h-4" />
                    <span>LIVE PITCH PRACTICE TIMER</span>
                  </div>
                  <span className="font-mono tabular-nums text-2xl font-extrabold text-amber-400">
                    {formatTimer(secondsLeft)}
                  </span>
                </div>
                <p
                  className={`text-xs font-mono ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {currentPhase}
                </p>
                <div className="flex items-center gap-2 pt-1">
                  <button
                    type="button"
                    onClick={() => setTimerRunning((r) => !r)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold bg-violet-600 hover:bg-violet-500 text-white"
                  >
                    {timerRunning ? (
                      <>
                        <Pause className="w-3.5 h-3.5" />
                        <span>Pause Rehearsal</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5" />
                        <span>Start 7-Min Rehearsal</span>
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTimerRunning(false);
                      setSecondsLeft(TOTAL_SECONDS);
                    }}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border ${
                      isDark
                        ? 'border-white/15 text-slate-300 hover:bg-white/5'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Suggested 7-Step Presentation Structure */}
            <div className="lg:col-span-7 space-y-4">
              <h3
                className={`text-sm font-mono font-bold uppercase tracking-wider ${
                  isDark ? 'text-violet-300' : 'text-violet-800'
                }`}
              >
                Suggested Presentation Structure (01 — 07):
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {PRESENTATION_STRUCTURE.map((item) => (
                  <div
                    key={item.step}
                    className={`p-4 rounded-xl border flex items-start gap-3.5 ${
                      item.step === '06'
                        ? isDark
                          ? 'bg-amber-400/10 border-amber-400/40 sm:col-span-2'
                          : 'bg-amber-50 border-amber-300 sm:col-span-2'
                        : isDark
                        ? 'bg-[#080A1C] border-white/10'
                        : 'bg-white border-slate-200'
                    }`}
                  >
                    <span className="font-mono text-sm font-extrabold text-amber-400 shrink-0 mt-0.5">
                      {item.step} —
                    </span>
                    <div>
                      <h4
                        className={`text-sm sm:text-base font-bold ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {item.title}
                      </h4>
                      <p
                        className={`text-xs mt-0.5 ${
                          isDark ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        {item.detail}
                      </p>
                    </div>
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

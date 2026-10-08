import React from 'react';
import { EVENT_AT_A_GLANCE } from '../data/eventData';
import { PceAcmLogo, PceAcmWLogo } from './BrandLogos';

interface AboutAndStatsProps {
  isDark: boolean;
}

const ENCOURAGED_PILLARS = [
  'Creativity',
  'Innovation',
  'Problem solving',
  'AI-assisted development',
  'Modern web development',
  'UI/UX excellence',
  'Team collaboration',
];

export const AboutAndStats: React.FC<AboutAndStatsProps> = ({ isDark }) => {
  return (
    <section
      id="about"
      className={`py-12 lg:py-16 border-t ${
        isDark
          ? 'bg-[#07091B] border-violet-500/15'
          : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Top Row: About Narrative + Organizing Chapters Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono font-semibold tracking-wider text-sky-400">
              01. ABOUT THE EVENT
            </div>

            <h2
              className={`font-display text-xl sm:text-3xl font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              About AI-FUSION 2026
            </h2>

            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              An offline national challenge where teams of 1–3 students receive on-site problem statements, build a working web app using AI tools in 4 hours, deploy live, and present to judges.
            </p>

            <div
              className={`p-3.5 rounded-xl border-l-4 border-amber-400 ${
                isDark
                  ? 'bg-violet-950/30 border-y border-r border-violet-500/25 text-white'
                  : 'bg-amber-50/70 border-y border-r border-amber-200 text-slate-900'
              }`}
            >
              <p className="font-display text-sm sm:text-base font-semibold">
                “Build something useful. Build something innovative. Build it with AI.”
              </p>
            </div>

            <div
              className={`flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs sm:text-sm font-medium ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              {ENCOURAGED_PILLARS.map((pillar, idx) => (
                <React.Fragment key={pillar}>
                  <span>{pillar}</span>
                  {idx < ENCOURAGED_PILLARS.length - 1 && (
                    <span aria-hidden="true" className="text-violet-400 font-bold">
                      ·
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Compact Organizing Chapters & Quick Facts Card */}
          <div className="lg:col-span-5">
            <div
              className={`rounded-2xl border p-5 sm:p-6 space-y-4 ${
                isDark
                  ? 'bg-[#0C0F26] border-violet-500/30'
                  : 'bg-slate-50 border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <PceAcmLogo className="w-11 h-11 shrink-0" />
                  <div>
                    <p
                      className={`text-xs font-bold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      Department of Computer Technology
                    </p>
                    <p
                      className={`text-[11px] ${
                        isDark ? 'text-slate-400' : 'text-slate-600'
                      }`}
                    >
                      PCE ACM &amp; PCE ACM-W Student Chapters
                    </p>
                  </div>
                </div>
                <PceAcmWLogo className="w-16 h-11 shrink-0" />
              </div>

              <div
                className={`pt-3 border-t text-xs space-y-2 ${
                  isDark
                    ? 'border-white/10 text-slate-300'
                    : 'border-slate-200 text-slate-600'
                }`}
              >
                <div className="flex justify-between">
                  <span>Venue:</span>
                  <span className="font-semibold text-sky-400">
                    Computer Lab, IT Building, PCE Nagpur
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Format &amp; Eligibility:</span>
                  <span className="font-semibold">
                    Offline · All Colleges &amp; Branches
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Perks Included:</span>
                  <span className="font-semibold text-emerald-400">
                    Brunch Included + Certificates for All
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Event at a Glance Grid */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-bold text-amber-400">
              EVENT AT A GLANCE
            </span>
            <span
              className={`text-xs font-mono ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Deadline: <strong className="text-amber-400">20 Oct 2026</strong>
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {EVENT_AT_A_GLANCE.map((item) => (
              <div
                key={item.id}
                className={`p-3.5 rounded-xl border ${
                  item.id === 'prize-pool'
                    ? isDark
                      ? 'bg-amber-500/10 border-amber-400/50'
                      : 'bg-amber-50 border-amber-300'
                    : isDark
                    ? 'bg-[#0C0F26]/90 border-violet-500/20'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div
                  className={`text-[10px] font-mono font-bold ${
                    item.id === 'prize-pool' ? 'text-amber-400' : 'text-sky-400'
                  }`}
                >
                  {item.label}
                </div>
                <div
                  className={`font-mono text-base sm:text-lg font-extrabold mt-0.5 ${
                    item.id === 'prize-pool'
                      ? 'text-amber-400'
                      : isDark
                      ? 'text-white'
                      : 'text-slate-900'
                  }`}
                >
                  {item.value}
                </div>
                <p
                  className={`text-[11px] mt-0.5 truncate ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

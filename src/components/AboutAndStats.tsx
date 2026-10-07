import React, { useEffect, useRef, useState } from 'react';
import { EVENT_AT_A_GLANCE, EVENT_CONFIG } from '../data/eventData';
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

function AnimatedCounter({
  target,
  prefix = '',
  suffix = '',
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 900;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(target);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref} className="font-mono tabular-nums">
      {prefix}
      {count.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

export const AboutAndStats: React.FC<AboutAndStatsProps> = ({ isDark }) => {
  return (
    <>
      {/* ABOUT THE WEBATHON */}
      <section
        id="about"
        className={`py-20 lg:py-28 border-t ${
          isDark
            ? 'bg-[#07091B] border-violet-500/15'
            : 'bg-white border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs font-mono font-semibold tracking-wider text-sky-400">
                01. ABOUT THE COMPETITION
              </div>

              <h2
                className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}
                style={{ textWrap: 'balance' }}
              >
                About AI-FUSION 2026
              </h2>

              <div
                className={`space-y-4 text-base sm:text-lg leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                <p>
                  <strong className={isDark ? 'text-white' : 'text-slate-900'}>
                    National Level AI-Fusion 2026
                  </strong>{' '}
                  is an offline web development challenge where students come together to solve real-world problems using modern web technologies and AI-powered development tools.
                </p>
                <p>
                  Participants will receive a problem challenge and will have limited development time to understand the problem, plan their solution, build a functional website/web application, deploy it, and present their solution to the judges.
                </p>
              </div>

              {/* Highlighted Core Motto Box */}
              <div
                className={`p-5 sm:p-6 rounded-2xl border-l-4 border-amber-400 ${
                  isDark
                    ? 'bg-violet-950/30 border-y border-r border-violet-500/25 text-white'
                    : 'bg-amber-50/70 border-y border-r border-amber-200 text-slate-900'
                }`}
              >
                <p className="font-display text-lg sm:text-xl font-bold tracking-tight">
                  “Build something useful. Build something innovative. Build it with AI.”
                </p>
              </div>

              {/* The Event Encourages */}
              <div className="pt-2">
                <h3
                  className={`text-sm font-mono font-semibold mb-3 ${
                    isDark ? 'text-violet-300' : 'text-violet-800'
                  }`}
                >
                  Core Pillars Emphasized During Evaluation:
                </h3>
                <div
                  className={`flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium ${
                    isDark ? 'text-slate-200' : 'text-slate-700'
                  }`}
                >
                  {ENCOURAGED_PILLARS.map((pillar, idx) => (
                    <React.Fragment key={pillar}>
                      <span>{pillar}</span>
                      {idx < ENCOURAGED_PILLARS.length - 1 && (
                        <span
                          aria-hidden="true"
                          className="text-violet-400 font-bold"
                        >
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Visual & Institutional Showcase Card */}
            <div className="lg:col-span-5">
              <div
                className={`rounded-2xl border overflow-hidden ${
                  isDark
                    ? 'bg-[#0C0F26] border-violet-500/30'
                    : 'bg-slate-50 border-slate-200 shadow-lg'
                }`}
              >
                <div className="relative aspect-4/3 overflow-hidden bg-slate-900">
                  <img
                    src={EVENT_CONFIG.GeneratedAssets.cyberLaptop}
                    alt="AI-Assisted Web Development Workstation"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F26] via-[#0C0F26]/30 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-mono text-amber-300 font-semibold">
                        HOSTED ON-SITE AT PCE NAGPUR
                      </p>
                      <p className="text-base font-bold text-white">
                        Department of Computer Technology
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <PceAcmLogo className="w-11 h-11 shrink-0" />
                      <div>
                        <p
                          className={`text-xs font-bold ${
                            isDark ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          PCE ACM Student Chapter
                        </p>
                        <p
                          className={`text-xs ${
                            isDark ? 'text-slate-400' : 'text-slate-600'
                          }`}
                        >
                          Official Organizing Partner
                        </p>
                      </div>
                    </div>
                    <PceAcmWLogo className="w-16 h-11 shrink-0" />
                  </div>

                  <div
                    className={`pt-4 border-t text-xs space-y-1.5 ${
                      isDark
                        ? 'border-white/10 text-slate-300'
                        : 'border-slate-200 text-slate-600'
                    }`}
                  >
                    <div className="flex justify-between">
                      <span>Venue Location:</span>
                      <span className="font-semibold text-sky-400">
                        Computer Lab, IT Building
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Format:</span>
                      <span className="font-semibold">Offline / On-site Webathon</span>
                    </div>
                    <div className="flex justify-between">
                      <span>AI Tools Policy:</span>
                      <span className="font-semibold text-emerald-400">
                        100% Permitted During Coding
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENT AT A GLANCE */}
      <section
        className={`py-20 lg:py-24 border-t bg-circuit-grid ${
          isDark
            ? 'bg-[#060714] border-violet-500/15'
            : 'bg-slate-50 border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-mono font-semibold tracking-wider text-amber-400">
                02. KEY SPECIFICATIONS
              </div>
              <h2
                className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}
              >
                Event at a Glance
              </h2>
            </div>
            <p
              className={`text-sm font-mono ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Registration Deadline: <strong className="text-amber-400">15 October 2026</strong> · Entry Fee: <strong className="text-sky-400">₹100 / Member</strong>
            </p>
          </div>

          {/* 10 Technical Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {EVENT_AT_A_GLANCE.map((item, idx) => (
              <div
                key={item.id}
                className={`p-5 rounded-2xl border transition-transform duration-150 hover:-translate-y-0.5 ${
                  item.id === 'prize-pool'
                    ? isDark
                      ? 'bg-gradient-to-br from-amber-500/15 to-violet-950/40 border-amber-400/50'
                      : 'bg-amber-50 border-amber-300'
                    : isDark
                    ? 'bg-[#0C0F26]/90 border-violet-500/25 hover:border-sky-400/50'
                    : 'bg-white border-slate-200 hover:border-violet-400 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-3">
                  <span>{String(idx + 1).padStart(2, '0')}</span>
                  <span
                    className={
                      item.id === 'prize-pool'
                        ? 'text-amber-400 font-bold'
                        : 'text-sky-400 font-semibold'
                    }
                  >
                    {item.label}
                  </span>
                </div>

                <div
                  className={`text-xl sm:text-2xl font-extrabold tracking-tight ${
                    item.id === 'prize-pool'
                      ? 'text-amber-400'
                      : isDark
                      ? 'text-white'
                      : 'text-slate-900'
                  }`}
                >
                  {item.numericTarget ? (
                    <AnimatedCounter
                      target={item.numericTarget}
                      prefix={item.prefix}
                      suffix={item.suffix}
                    />
                  ) : (
                    <span className="font-mono tabular-nums">{item.value}</span>
                  )}
                </div>

                <p
                  className={`text-xs mt-2 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

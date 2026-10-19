import React, { useEffect, useRef, useState } from 'react';
import {
  Sparkles,
  CheckCircle2,
  Cpu,
  Layers,
  Globe,
  ShieldCheck,
} from 'lucide-react';
import { EVENT_AT_A_GLANCE } from '../data/eventData';
import { PceAcmLogo, PceAcmWLogo } from './BrandLogos';

interface AboutAndStatsProps {
  isDark: boolean;
}

const ENCOURAGED_PILLARS = [
  'Creativity',
  'Innovation',
  'Problem-Solving',
  'UI/UX Design',
  'AI Utilization',
  'Deployment Readiness',
  'Presentation Skills',
];

const AnimatedStatValue: React.FC<{
  value: string;
  numericTarget?: number;
  prefix?: string;
  suffix?: string;
}> = ({ value, numericTarget, prefix = '', suffix = '' }) => {
  const [displayNum, setDisplayNum] = useState<number>(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof numericTarget !== 'number') return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 900;
          const startTime = performance.now();

          const tick = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayNum(Math.round(numericTarget * eased));
            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [numericTarget, hasAnimated]);

  if (typeof numericTarget !== 'number') {
    return <span>{value}</span>;
  }

  return (
    <span ref={ref}>
      {prefix}
      {hasAnimated
        ? displayNum.toLocaleString('en-IN')
        : numericTarget.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
};

export const AboutAndStats: React.FC<AboutAndStatsProps> = ({ isDark }) => {
  return (
    <section
      id="about"
      className={`py-14 lg:py-20 border-t ${
        isDark
          ? 'bg-[#080B1E] border-white/10'
          : 'bg-white border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {/* About the Event Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              <span>// 01 · ABOUT THE COMPETITION</span>
            </div>

            <h2
              className={`font-display text-2xl sm:text-3xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Where Student Engineering Meets Modern AI Velocity
            </h2>

            <p
              className={`text-sm sm:text-base leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              <strong className={isDark ? 'text-white' : 'text-slate-900'}>
                NATIONAL LEVEL AI-FUSION 2026
              </strong>{' '}
              is an on-site AI-powered web and app building competition where
              students solve real-world problem statements announced on the
              event day. Over a focused{' '}
              <strong className="text-amber-400">6-hour total schedule</strong>{' '}
              (featuring <strong className="text-sky-400">4 hours</strong> of
              hands-on coding and development), teams design, build, deploy, and
              present a working application using modern AI tools.
            </p>

            {/* Core Pillars */}
            <div className="pt-1">
              <div
                className={`text-xs font-mono uppercase tracking-wider mb-2.5 ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Core Competition Pillars:
              </div>
              <div className="flex flex-wrap gap-2">
                {ENCOURAGED_PILLARS.map((pillar) => (
                  <span
                    key={pillar}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border ${
                      isDark
                        ? 'bg-slate-900 border-slate-800 text-slate-200'
                        : 'bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{pillar}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Institutional & Format Summary Card */}
          <div className="lg:col-span-5">
            <div
              className={`p-5 sm:p-6 rounded-2xl border space-y-4 ${
                isDark
                  ? 'bg-[#0F172A] border-slate-800'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between gap-3 pb-3 border-b border-white/10">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
                    Organized By
                  </div>
                  <div
                    className={`font-display text-sm sm:text-base font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Department of Computer Technology
                  </div>
                  <div
                    className={`text-xs ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    PCE ACM &amp; PCE ACM-W Student Chapters
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <PceAcmLogo className="w-9 h-9" />
                  <PceAcmWLogo className="w-11 h-9" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5 text-xs">
                <div
                  className={`p-3 rounded-xl border ${
                    isDark
                      ? 'bg-[#070A1C] border-white/10'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <Cpu className="w-4 h-4 text-amber-400 mb-1" />
                  <div
                    className={`font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    AI Tools Allowed
                  </div>
                  <div className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                    AI Studio, Gemini, ChatGPT, Cursor, Copilot
                  </div>
                </div>

                <div
                  className={`p-3 rounded-xl border ${
                    isDark
                      ? 'bg-[#070A1C] border-white/10'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <Layers className="w-4 h-4 text-sky-400 mb-1" />
                  <div
                    className={`font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Any Web Stack
                  </div>
                  <div className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                    React, Next.js, Vue, Node, HTML/CSS/JS
                  </div>
                </div>

                <div
                  className={`p-3 rounded-xl border ${
                    isDark
                      ? 'bg-[#070A1C] border-white/10'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <Globe className="w-4 h-4 text-emerald-400 mb-1" />
                  <div
                    className={`font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Live Deployment
                  </div>
                  <div className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                    Working URL + GitHub Repo
                  </div>
                </div>

                <div
                  className={`p-3 rounded-xl border ${
                    isDark
                      ? 'bg-slate-900 border-slate-800'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4 text-sky-400 mb-1" />
                  <div
                    className={`font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    All Branches Open
                  </div>
                  <div className={isDark ? 'text-slate-400' : 'text-slate-500'}>
                    Open to all colleges &amp; streams
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event at a Glance 10-Card Grid */}
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-sky-400 font-semibold">
                // QUICK SPECIFICATIONS
              </span>
              <h3
                className={`font-display text-xl sm:text-2xl font-extrabold mt-0.5 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Event at a Glance
              </h3>
            </div>
            <span
              className={`text-xs font-mono ${
                isDark ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
               Priyadarshini College of Engineering, Nagpur
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {EVENT_AT_A_GLANCE.map((item) => (
              <div
                key={item.id}
                className={`p-4 rounded-xl border transition-all ${
                  isDark
                    ? 'bg-[#0F172A] border-slate-800 hover:border-slate-700'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between gap-1 mb-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-semibold">
                    {item.label}
                  </span>
                  <Sparkles className="w-3 h-3 text-sky-400/70 shrink-0" />
                </div>
                <div
                  className={`font-display text-base sm:text-lg font-extrabold leading-snug ${
                    item.id === 'prize-pool'
                      ? 'text-amber-400'
                      : isDark
                      ? 'text-white'
                      : 'text-slate-900'
                  }`}
                >
                  <AnimatedStatValue
                    value={item.value}
                    numericTarget={item.numericTarget}
                    prefix={item.prefix}
                    suffix={item.suffix}
                  />
                </div>
                <p
                  className={`text-xs mt-1 leading-snug ${
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

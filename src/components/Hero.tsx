import React, { useState, useEffect } from 'react';
import {
  Calendar,
  MapPin,
  Clock,
  ExternalLink,
  Terminal,
  ArrowDownRight,
} from 'lucide-react';
import { EVENT_CONFIG, HERO_COMPACT_STATS } from '../data/eventData';
import { PceAcmLogo, PceAcmWLogo } from './BrandLogos';

interface HeroProps {
  isDark: boolean;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isLive: boolean;
}

function calculateTimeLeft(): TimeLeft {
  const target = new Date(EVENT_CONFIG.eventDateISO).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isLive: true };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / 1000 / 60) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isLive: false,
  };
}

export const Hero: React.FC<HeroProps> = ({ isDark }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <section
      id="home"
      className="relative pt-24 pb-12 lg:pt-28 lg:pb-16 overflow-hidden bg-tech-grid"
    >
      {/* Background Visual Layer */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <img
          src={EVENT_CONFIG.GeneratedAssets.heroBackdrop}
          alt="Futuristic AI & Web Engineering Competition Arena"
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-center ${
            isDark ? 'opacity-20' : 'opacity-10'
          }`}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
        />
        <div
          className={`absolute inset-0 ${
            isDark
              ? 'bg-gradient-to-b from-[#060714]/90 via-[#060714]/80 to-[#060714]'
              : 'bg-gradient-to-b from-slate-50/90 via-white/85 to-slate-50'
          }`}
        />
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-sky-500/15 blur-3xl" />
      </div>

      {/* Subtle Floating Code Watermarks */}
      <div
        aria-hidden="true"
        className="hidden xl:block absolute top-28 right-12 font-mono text-xs text-violet-400/20 select-none pointer-events-none"
      >
        {'{ ai: "fusion_2026", mode: "offline_build" }'}
      </div>
      <div
        aria-hidden="true"
        className="hidden xl:block absolute bottom-20 left-10 font-mono text-2xl font-bold text-sky-400/15 select-none pointer-events-none"
      >
        &lt;/&gt;
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Institutional Header Lockup (ACM on Left, 4 Compact Single Lines Center, ACM-W on Right) */}
        <div
          className={`mb-7 px-2.5 py-2.5 sm:px-6 sm:py-4 rounded-2xl border flex items-center justify-between gap-1.5 sm:gap-4 ${
            isDark
              ? 'bg-[#0B0F26]/90 border-violet-500/25 shadow-lg shadow-black/25'
              : 'bg-white/95 border-slate-200 shadow-sm'
          }`}
        >
          {/* Left Logo: PCE ACM Student Chapter */}
          <div className="shrink-0 flex items-center">
            <PceAcmLogo className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20" />
          </div>

          {/* Center Institution & Chapter Titles (Each on 1 Single Line) */}
          <div className="flex-1 min-w-0 text-center px-0.5 space-y-0.5 leading-tight">
            <p className="text-[7.5px] sm:text-[11px] md:text-xs font-mono font-bold tracking-tight sm:tracking-wider text-amber-400 uppercase whitespace-nowrap truncate">
              LOKMANYA TILAK JANKALYAN SHIKSHAN SANSTHA&apos;S
            </p>
            <p
              className={`font-display text-[8px] sm:text-sm md:text-lg font-extrabold tracking-tight uppercase whitespace-nowrap truncate ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              PRIYADARSHINI COLLEGE OF ENGINEERING, NAGPUR
            </p>
            <p
              className={`text-[9px] sm:text-xs md:text-sm font-bold whitespace-nowrap truncate ${
                isDark ? 'text-sky-300' : 'text-sky-700'
              }`}
            >
              Department of Computer Technology
            </p>
            <p
              className={`text-[8.5px] sm:text-xs font-semibold whitespace-nowrap truncate ${
                isDark ? 'text-violet-300' : 'text-violet-700'
              }`}
            >
              PCE ACM &amp; PCE ACM-W Student Chapters
            </p>
          </div>

          {/* Right Logo: PCE ACM-W Student Chapter */}
          <div className="shrink-0 flex items-center justify-end">
            <PceAcmWLogo className="w-12 h-10 sm:w-24 sm:h-16 md:w-28 md:h-20" />
          </div>
        </div>

        {/* Main 2-Column Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Event Title, Taglines, Meta, CTAs */}
          <div className="lg:col-span-7 space-y-5 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-wider uppercase text-amber-400">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>
                National Level AI-Powered Web / App Building Challenge
              </span>
            </div>

            <div className="space-y-2">
              <h1
                style={{ textWrap: 'balance' } as React.CSSProperties}
                className={`font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.08] ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}
              >
                National Level{' '}
                <span className="bg-gradient-to-r from-amber-300 via-sky-300 to-violet-400 bg-clip-text text-transparent">
                  AI-FUSION 2026
                </span>
              </h1>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <span className="font-display text-lg sm:text-2xl font-bold text-amber-400">
                  {EVENT_CONFIG.tagline}
                </span>
                <span
                  className={`text-sm sm:text-base font-medium ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  — “{EVENT_CONFIG.secondaryTagline}”
                </span>
              </div>
            </div>

            <p
              className={`text-sm sm:text-base max-w-2xl leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              An intensive 6-hour on-site AI-powered web and app building
              competition where teams of 1–3 students solve live problem
              statements, build and deploy a working product in 4 hours using AI
              tools, and pitch to judges.
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              <a
                href={EVENT_CONFIG.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-extrabold tracking-wide bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-xl shadow-amber-500/20 transition-all hover:-translate-y-0.5"
              >
                <span>Register Now</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="#challenges"
                className={`inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-bold border transition-all ${
                  isDark
                    ? 'border-violet-400/40 bg-violet-950/40 text-white hover:bg-violet-900/50'
                    : 'border-slate-300 bg-white text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>Problem Statement Info</span>
                <ArrowDownRight className="w-4 h-4 text-sky-400" />
              </a>
            </div>

            {/* Key Event Metadata Row */}
            <div
              className={`pt-2 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm font-medium ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
                <span>22 October 2026</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
                <span>CT Dept (First Floor), Rajiv Gandhi IT Complex, PCE Nagpur</span>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-violet-400 shrink-0" />
                <span>Reporting: 10:00 AM · Problem Reveal: 11:00 AM</span>
              </span>
            </div>
          </div>

          {/* Right Column: Live Countdown + AI-Fusion Terminal Card */}
          <div className="lg:col-span-5 space-y-4">
            {/* Live Countdown Module */}
            <div
              className={`p-5 sm:p-6 rounded-2xl border backdrop-blur-xl ${
                isDark
                  ? 'bg-[#0C1029]/90 border-violet-500/30 shadow-2xl shadow-violet-950/30'
                  : 'bg-white border-slate-200 shadow-lg'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 block font-semibold">
                    {timeLeft.isLive
                      ? '// COMPETITION LIVE NOW'
                      : '// COUNTDOWN TO REPORTING'}
                  </span>
                  <h2
                    className={`font-display text-sm sm:text-base font-bold mt-0.5 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    22 October 2026 · 10:00 AM IST
                  </h2>
                </div>
                <a
                  href="#timeline"
                  className="text-xs font-mono font-semibold text-sky-400 hover:underline whitespace-nowrap"
                >
                  View Schedule →
                </a>
              </div>

              <div className="grid grid-cols-4 gap-2.5 text-center">
                {[
                  { label: 'DAYS', value: pad(timeLeft.days) },
                  { label: 'HOURS', value: pad(timeLeft.hours) },
                  { label: 'MINS', value: pad(timeLeft.minutes) },
                  { label: 'SECS', value: pad(timeLeft.seconds) },
                ].map((unit) => (
                  <div
                    key={unit.label}
                    className={`py-3 px-2 rounded-xl border ${
                      isDark
                        ? 'bg-[#07091A] border-white/10 text-white'
                        : 'bg-slate-50 border-slate-200 text-slate-900'
                    }`}
                  >
                    <div className="font-mono text-2xl sm:text-3xl font-bold tracking-tight text-amber-400">
                      {unit.value}
                    </div>
                    <div
                      className={`text-[10px] font-mono tracking-widest mt-1 ${
                        isDark ? 'text-slate-400' : 'text-slate-500'
                      }`}
                    >
                      {unit.label}
                    </div>
                  </div>
                ))}
              </div>

              <div
                className={`mt-4 pt-3.5 border-t flex items-center justify-between text-xs ${
                  isDark
                    ? 'border-white/10 text-slate-300'
                    : 'border-slate-200 text-slate-600'
                }`}
              >
                <span>Registration Deadline:</span>
                <strong className="font-mono text-amber-400">
                  20 October 2026
                </strong>
              </div>
            </div>

            {/* AI-Assisted Build Terminal Preview */}
            <div
              className={`rounded-2xl border overflow-hidden font-mono text-xs ${
                isDark
                  ? 'bg-[#070918]/95 border-sky-500/25 text-slate-300'
                  : 'bg-slate-900 border-slate-800 text-slate-200'
              }`}
            >
              <div className="px-4 py-2.5 bg-white/5 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 text-[11px] text-slate-400">
                    ai-fusion-2026.config.ts
                  </span>
                </div>
                <Terminal className="w-3.5 h-3.5 text-sky-400" />
              </div>
              <div className="p-4 space-y-1.5 leading-relaxed">
                <div>
                  <span className="text-violet-400">const</span>{' '}
                  <span className="text-sky-300">challenge</span> = {'{'}
                </div>
                <div className="pl-4">
                  mode: <span className="text-amber-300">&apos;On-Site Offline Build&apos;</span>,
                </div>
                <div className="pl-4">
                  aiTools:{' '}
                  <span className="text-emerald-400">
                    [&apos;AI Studio&apos;, &apos;ChatGPT&apos;, &apos;Gemini&apos;, &apos;Cursor&apos;]
                  </span>
                  ,
                </div>
                <div className="pl-4">
                  deliverables:{' '}
                  <span className="text-amber-300">
                    &apos;Live URL + GitHub Repo + 7m Pitch&apos;
                  </span>
                </div>
                <div>{'}'};</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Compact Key Info Bar */}
        <div
          className={`mt-8 lg:mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 p-3.5 rounded-2xl border ${
            isDark
              ? 'bg-[#0C1029]/80 border-white/10'
              : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          {HERO_COMPACT_STATS.map((stat) => (
            <div
              key={stat.label}
              className={`px-3.5 py-2.5 rounded-xl border ${
                isDark
                  ? 'bg-[#070919]/80 border-white/5'
                  : 'bg-slate-50 border-slate-200/70'
              }`}
            >
              <div
                className={`text-[10px] font-mono uppercase tracking-wider ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {stat.label}
              </div>
              <div
                className={`font-display text-sm sm:text-base font-extrabold mt-0.5 ${
                  stat.value.includes('₹10,000')
                    ? 'text-amber-400'
                    : isDark
                    ? 'text-white'
                    : 'text-slate-900'
                }`}
              >
                {stat.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

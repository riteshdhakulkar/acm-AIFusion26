import React, { useState, useEffect } from 'react';
import { ExternalLink, ArrowDownRight, Terminal, Calendar, MapPin } from 'lucide-react';
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
      className="relative min-h-screen pt-28 pb-16 lg:pt-32 lg:pb-24 overflow-hidden flex items-center bg-circuit-grid"
    >
      {/* Background Backdrop Image with Measured Contrast Scrim */}
      <div className="absolute inset-0 -z-20 pointer-events-none">
        <img
          src={EVENT_CONFIG.GeneratedAssets.heroBackdrop}
          alt="AI-FUSION 2026 Futuristic Coding Arena Backdrop"
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
              ? 'bg-gradient-to-b from-[#060714]/90 via-[#060714]/85 to-[#060714]'
              : 'bg-gradient-to-b from-slate-50/95 via-white/90 to-slate-50'
          }`}
        />
      </div>

      {/* Subtle Ambient Circuit / Glow Nodes & Floating </> Symbols */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 pointer-events-none overflow-hidden"
      >
        <div className="absolute -top-24 left-1/4 w-96 h-96 rounded-full bg-violet-600/20 blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/3 right-10 w-80 h-80 rounded-full bg-sky-500/15 blur-3xl animate-pulse-glow" />

        {/* Subtle Floating Code Symbols */}
        <span
          className={`hidden md:block absolute top-32 left-10 font-mono text-2xl font-bold select-none animate-float-slow ${
            isDark ? 'text-violet-400/20' : 'text-violet-600/15'
          }`}
        >
          &lt;/&gt;
        </span>
        <span
          className={`hidden md:block absolute bottom-28 left-1/3 font-mono text-xl font-bold select-none animate-float-slow ${
            isDark ? 'text-sky-400/20' : 'text-sky-600/15'
          }`}
        >
          {'{ ai: "fusion_2026" }'}
        </span>
        <span
          className={`hidden lg:block absolute top-40 right-16 font-mono text-xl font-bold select-none animate-float-slow ${
            isDark ? 'text-amber-400/20' : 'text-amber-600/15'
          }`}
        >
          &lt;BuildWithAI /&gt;
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Institutional & ACM / ACM-W Chapter Lockup (ACM on Left, Institution Center, ACM-W on Exact Right) */}
        <div
          className={`mb-6 sm:mb-8 px-2.5 py-2.5 sm:px-6 sm:py-4 rounded-2xl border backdrop-blur-md flex items-center justify-between gap-1.5 sm:gap-4 ${
            isDark
              ? 'bg-[#0C0E24]/85 border-violet-500/25'
              : 'bg-white/95 border-slate-200 shadow-sm'
          }`}
        >
          {/* Left Logo: PCE ACM Student Chapter */}
          <div className="shrink-0 flex items-center">
            <PceAcmLogo className="w-10 h-10 sm:w-16 sm:h-16 md:w-20 md:h-20" />
          </div>

          {/* Center Institution & Chapter Titles (Exact 4 Single Lines) */}
          <div className="flex-1 min-w-0 text-center px-1 space-y-0.5 leading-tight">
            <p
              className={`text-[7.5px] sm:text-[11px] md:text-xs font-medium tracking-tight sm:tracking-wider whitespace-nowrap truncate ${
                isDark ? 'text-amber-300/90' : 'text-amber-700'
              }`}
            >
              LOKMANYA TILAK JANKALYAN SHIKSHAN SANSTHA&apos;S
            </p>
            <p
              className={`text-[8px] sm:text-sm md:text-lg font-extrabold tracking-tight whitespace-nowrap truncate ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              PRIYADARSHINI COLLEGE OF ENGINEERING, NAGPUR
            </p>
            <p className="text-[9px] sm:text-xs md:text-sm font-semibold text-sky-400 whitespace-nowrap truncate">
              Department of Computer Technology
            </p>
            <p
              className={`text-[8.5px] sm:text-xs font-medium whitespace-nowrap truncate ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              PCE ACM &amp; PCE ACM-W Student Chapters
            </p>
          </div>

          {/* Exact Right Logo: PCE ACM-W Student Chapter */}
          <div className="shrink-0 flex items-center justify-end">
            <PceAcmWLogo className="w-12 h-10 sm:w-24 sm:h-16 md:w-28 md:h-20" />
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Primary Event Identity & CTAs */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium tracking-wider text-sky-400">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              <span>// NATIONAL LEVEL · ON-SITE CODING CHALLENGE</span>
            </div>

            <div className="space-y-1.5">
              <p
                className={`font-display text-base sm:text-xl font-bold tracking-wider ${
                  isDark ? 'text-amber-300' : 'text-amber-600'
                }`}
              >
                NATIONAL LEVEL
              </p>
              <h1
                className={`font-display text-3xl sm:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.06] ${
                  isDark ? 'text-poster-gold' : 'text-slate-950'
                }`}
              >
                AI-FUSION 2026
              </h1>
              <p
                className={`font-display text-xl sm:text-2xl font-semibold tracking-wide pt-0.5 ${
                  isDark ? 'text-white' : 'text-violet-900'
                }`}
              >
                BUILD WITH AI
              </p>
              <p
                className={`text-sm sm:text-base italic ${
                  isDark ? 'text-violet-200' : 'text-slate-700'
                }`}
              >
                “Turn Your Ideas Into Impact”
              </p>
            </div>

            <p
              className={`text-xs sm:text-sm max-w-xl mx-auto lg:mx-0 leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              A 6-hour on-site challenge (4 hours coding) at{' '}
              <span className={isDark ? 'text-white font-medium' : 'text-slate-900 font-medium'}>
                PCE Nagpur
              </span>
              . Build, deploy, and pitch an AI-powered web app for a{' '}
              <span className="text-amber-400 font-semibold">₹10,000 Prize Pool</span>.
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={EVENT_CONFIG.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl text-sm sm:text-base font-extrabold bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg shadow-amber-500/25 transition-transform active:scale-95 whitespace-nowrap"
              >
                <span>REGISTER NOW</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href="#about"
                className={`inline-flex items-center gap-2 px-6 py-4 rounded-xl text-sm sm:text-base font-bold border transition-colors whitespace-nowrap ${
                  isDark
                    ? 'border-violet-400/40 bg-violet-950/40 text-white hover:bg-violet-900/50'
                    : 'border-slate-300 bg-white text-slate-900 hover:bg-slate-100'
                }`}
              >
                <span>EXPLORE EVENT</span>
                <ArrowDownRight className="w-4 h-4 text-sky-400" />
              </a>
            </div>

            {/* Key Location, Deadline & Sponsorship Metadata Line */}
            <div
              className={`pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-1.5 text-xs sm:text-sm ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-amber-400" />
                <span>Deadline: 20 Oct 2026</span>
              </span>
              <span aria-hidden="true">·</span>
              <span>Entry: ₹100 / Member</span>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>Computer Lab, IT Building, PCE Nagpur</span>
              </span>
              <span aria-hidden="true">·</span>
              <a
                href="#sponsorship"
                className="font-semibold text-emerald-400 hover:underline"
              >
                Open for Sponsorship &amp; Collaboration →
              </a>
            </div>
          </div>

          {/* Right Column: Live Countdown Timer & Terminal Preview Card */}
          <div className="lg:col-span-5 space-y-5">
            {/* Live Countdown Card linking directly to Registration */}
            <div
              className={`p-6 rounded-2xl border backdrop-blur-md ${
                isDark
                  ? 'bg-[#0D1028]/90 border-violet-500/35 shadow-2xl shadow-violet-950/40'
                  : 'bg-white border-slate-200 shadow-xl'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-4">
                <div>
                  <p className="text-xs font-mono font-semibold text-amber-400">
                    COUNTDOWN TO KICKOFF
                  </p>
                  <p
                    className={`text-sm font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    22 October 2026 · 09:00 AM IST
                  </p>
                </div>
                <a
                  href="#register-section"
                  className="text-xs font-mono font-semibold text-sky-400 hover:underline whitespace-nowrap"
                >
                  Reserve Slot →
                </a>
              </div>

              <div className="grid grid-cols-4 gap-2.5 sm:gap-3 text-center">
                {[
                  { label: 'DAYS', value: pad(timeLeft.days) },
                  { label: 'HOURS', value: pad(timeLeft.hours) },
                  { label: 'MINUTES', value: pad(timeLeft.minutes) },
                  { label: 'SECONDS', value: pad(timeLeft.seconds) },
                ].map((unit) => (
                  <div
                    key={unit.label}
                    className={`py-3 px-2 rounded-xl border ${
                      isDark
                        ? 'bg-[#070818] border-violet-500/25'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div
                      className={`font-mono tabular-nums text-2xl sm:text-3xl font-extrabold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {unit.value}
                    </div>
                    <div
                      className={`text-[10px] font-mono tracking-wider mt-1 ${
                        isDark ? 'text-violet-300' : 'text-slate-500'
                      }`}
                    >
                      {unit.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className={isDark ? 'text-slate-300' : 'text-slate-600'}>
                  Registration closes <strong className="text-amber-400">20 October 2026</strong>
                </span>
                <a
                  href={EVENT_CONFIG.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-amber-400 hover:text-amber-300 whitespace-nowrap"
                >
                  Google Form ↗
                </a>
              </div>
            </div>

            {/* Subtle Terminal-Style Code Snippet Window */}
            <div
              className={`rounded-2xl border overflow-hidden font-mono text-xs ${
                isDark
                  ? 'bg-[#080A1A]/95 border-sky-500/25 text-slate-200'
                  : 'bg-slate-900 border-slate-800 text-slate-100'
              }`}
            >
              <div className="px-4 py-2.5 bg-white/5 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span className="text-slate-300 font-semibold">ai-fusion-2026.config.ts</span>
                </div>
                <span className="text-[11px] text-emerald-400">AI Tools: PERMITTED</span>
              </div>
              <div className="p-4 space-y-1.5 leading-relaxed">
                <div>
                  <span className="text-violet-400">const</span>{' '}
                  <span className="text-sky-300">aiFusion</span> = {'{'}
                </div>
                <div className="pl-4">
                  host: <span className="text-amber-300">&apos;CT Dept, PCE Nagpur (ACM &amp; ACM-W)&apos;</span>,
                </div>
                <div className="pl-4">
                  duration: <span className="text-emerald-300">&apos;6 Hours (4 Hours Coding)&apos;</span>,
                </div>
                <div className="pl-4">
                  aiToolsAllowed: [<span className="text-amber-300">&apos;AI Studio&apos;</span>, <span className="text-amber-300">&apos;Gemini&apos;</span>, <span className="text-amber-300">&apos;ChatGPT&apos;</span>, <span className="text-amber-300">&apos;Cursor&apos;</span>],
                </div>
                <div className="pl-4">
                  deliverables: [<span className="text-sky-300">&apos;Live Deployed URL&apos;</span>, <span className="text-sky-300">&apos;GitHub Repo&apos;</span>],
                </div>
                <div>{'}'};</div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact Event Stats Strip */}
        <div
          className={`mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl border ${
            isDark
              ? 'bg-[#0B0D22]/90 border-violet-500/25'
              : 'bg-white border-slate-200 shadow-sm'
          }`}
        >
          {HERO_COMPACT_STATS.map((stat, idx) => (
            <div
              key={stat.label}
              className={`px-3 py-2 text-center lg:text-left ${
                idx !== 0 ? 'sm:border-l sm:border-white/10 sm:pl-4' : ''
              }`}
            >
              <p
                className={`text-[11px] font-mono tracking-wider ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                {stat.label}
              </p>
              <p
                className={`font-mono tabular-nums text-sm sm:text-base font-extrabold mt-0.5 ${
                  stat.value.includes('₹10,000')
                    ? 'text-amber-400'
                    : isDark
                    ? 'text-white'
                    : 'text-slate-900'
                }`}
              >
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

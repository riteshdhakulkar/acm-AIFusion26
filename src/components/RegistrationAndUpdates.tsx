import React, { useState } from 'react';
import {
  ExternalLink,
  CheckCircle2,
  Users,
  BookOpen,
  Share2,
  X,
} from 'lucide-react';
import {
  EVENT_CONFIG,
  CHALLENGE_DOMAINS,
  COMMUNITY_BLOG_UPDATES,
  BlogPost,
} from '../data/eventData';

export interface TeamRegistrationRecord {
  teamName: string;
  leadName: string;
  leadEmail: string;
  leadPhone: string;
  membersList: string;
  collegeName: string;
  branch: string;
  teamSize: number;
  selectedDomainId: string;
  registeredAt: string;
}

interface RegistrationAndUpdatesProps {
  isDark: boolean;
  selectedDomainId: string;
  onSaveTeamRegistration: (record: TeamRegistrationRecord) => void;
}

export const RegistrationAndUpdates: React.FC<RegistrationAndUpdatesProps> = ({
  isDark,
  selectedDomainId,
  onSaveTeamRegistration,
}) => {
  const [teamName, setTeamName] = useState('');
  const [leadName, setLeadName] = useState('');
  const [leadEmail, setLeadEmail] = useState('');
  const [leadPhone, setLeadPhone] = useState('');
  const [membersList, setMembersList] = useState('');
  const [collegeName, setCollegeName] = useState(
    'Priyadarshini College of Engineering, Nagpur'
  );
  const [branch, setBranch] = useState('Computer Technology');
  const [teamSize, setTeamSize] = useState<number>(3);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccessUrl, setFormSuccessUrl] = useState<string | null>(null);

  const [activeBlogPost, setActiveBlogPost] = useState<BlogPost | null>(null);

  const handlePreRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (!teamName.trim() || !leadName.trim()) {
      setFormError('Please enter your Team Name (teamname) and Lead Name (leadname).');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(leadEmail.trim())) {
      setFormError('Please enter a valid Email address (email).');
      return;
    }
    const phoneDigits = leadPhone.replace(/\D/g, '');
    if (phoneDigits.length < 10) {
      setFormError('Please enter a valid 10-digit Mobile number (mobile).');
      return;
    }

    const record: TeamRegistrationRecord = {
      teamName: teamName.trim(),
      leadName: leadName.trim(),
      leadEmail: leadEmail.trim(),
      leadPhone: leadPhone.trim(),
      membersList: membersList.trim() || `${teamSize} Member(s)`,
      collegeName: collegeName.trim(),
      branch: branch.trim(),
      teamSize,
      selectedDomainId: selectedDomainId || CHALLENGE_DOMAINS[0].id,
      registeredAt: new Date().toLocaleString('en-IN'),
    };

    onSaveTeamRegistration(record);

    const waMessage = [
      `*AI-FUSION 2026 — Team Portal Registration*`,
      `• *teamname:* ${record.teamName}`,
      `• *leadname:* ${record.leadName}`,
      `• *mobile:* ${record.leadPhone}`,
      `• *email:* ${record.leadEmail}`,
      `• *memeber:* ${record.membersList} (${record.teamSize} Members · Fee: ₹${record.teamSize * 100})`,
      `• *college:* ${record.collegeName} (${record.branch})`,
    ].join('\n');

    const whatsappUrl = `https://wa.me/918552035048?text=${encodeURIComponent(
      waMessage
    )}`;
    setFormSuccessUrl(whatsappUrl);

    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* REGISTRATION CTA & INTEGRATED TEAM FORM SECTION */}
      <section
        id="register-section"
        className={`py-20 lg:py-28 border-t bg-circuit-grid ${
          isDark
            ? 'bg-[#060714] border-violet-500/20'
            : 'bg-slate-50 border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`rounded-3xl border p-6 sm:p-10 lg:p-14 ${
              isDark
                ? 'bg-gradient-to-br from-[#130E36] via-[#0B0E26] to-[#080A1A] border-amber-400/50 shadow-2xl shadow-violet-950/60'
                : 'bg-white border-amber-400 shadow-xl'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
              {/* Left Column: READY TO BUILD WITH AI? CTA */}
              <div className="lg:col-span-6 space-y-6">
                <div className="text-xs font-mono font-bold tracking-wider text-amber-400">
                  13. OFFICIAL ENROLLMENT · LIMITED SLOTS
                </div>

                <h2
                  className={`font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight ${
                    isDark ? 'text-white' : 'text-slate-950'
                  }`}
                >
                  READY TO BUILD WITH AI?
                </h2>

                <div
                  className={`space-y-1.5 font-display text-lg sm:text-xl font-bold ${
                    isDark ? 'text-violet-200' : 'text-slate-700'
                  }`}
                >
                  <p>Form your team.</p>
                  <p>Choose your challenge.</p>
                  <p>Build your solution.</p>
                  <p>Deploy it.</p>
                  <p>Present it.</p>
                  <p className="text-amber-400">Compete nationally.</p>
                </div>

                {/* Key Registration Details */}
                <div
                  className={`grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-2xl border ${
                    isDark
                      ? 'bg-[#070919]/90 border-white/10'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div>
                    <span className="text-[11px] font-mono text-slate-400">
                      REGISTRATION FEE
                    </span>
                    <p
                      className={`font-mono text-base font-extrabold mt-0.5 ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      ₹100 per member
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400">
                      TEAM SIZE
                    </span>
                    <p
                      className={`font-mono text-base font-extrabold mt-0.5 ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      1–3 Members
                    </p>
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400">
                      LAST DATE
                    </span>
                    <p className="font-mono text-base font-extrabold text-amber-400 mt-0.5">
                      15 October 2026
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href={EVENT_CONFIG.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-extrabold bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-xl shadow-amber-500/25 transition-transform active:scale-95"
                  >
                    <span>REGISTER NOW</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <p
                    className={`text-xs font-mono ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    Official Registration Link:{' '}
                    <a
                      href={EVENT_CONFIG.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sky-400 underline break-all"
                    >
                      {EVENT_CONFIG.registrationUrl}
                    </a>{' '}
                    · Slots are limited.
                  </p>
                </div>
              </div>

              {/* Right Column: Integrated Team Readiness & Fee Calculator Form */}
              <div className="lg:col-span-6">
                <form
                  onSubmit={handlePreRegisterSubmit}
                  noValidate
                  className={`p-6 sm:p-8 rounded-2xl border space-y-4 ${
                    isDark
                      ? 'bg-[#07091A]/95 border-violet-500/35'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-sky-400" />
                      <h3
                        className={`font-display text-lg font-extrabold ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        Team Readiness &amp; Profile Builder
                      </h3>
                    </div>
                    <span className="font-mono text-xs font-bold text-amber-400">
                      Total: ₹{teamSize * 100}
                    </span>
                  </div>

                  {formError && (
                    <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs font-medium">
                      {formError}
                    </div>
                  )}

                  {formSuccessUrl && (
                    <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-xs space-y-2">
                      <div className="flex items-center gap-2 font-bold text-sm">
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>Team Details Sent to WhatsApp &amp; Saved in Team Portal!</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <a
                          href={formSuccessUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-extrabold bg-emerald-500 text-slate-950"
                        >
                          <span>Re-open WhatsApp Message ↗</span>
                        </a>
                        <a
                          href={EVENT_CONFIG.registrationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-extrabold bg-amber-400 text-slate-950"
                        >
                          <span>Official Google Form</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1 text-slate-400">
                        TEAM NAME (teamname) *
                      </label>
                      <input
                        type="text"
                        required
                        value={teamName}
                        onChange={(e) => setTeamName(e.target.value)}
                        placeholder="e.g., Neural Alchemists"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-violet-400 ${
                          isDark
                            ? 'bg-[#0C1029] border-white/15 text-white'
                            : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1 text-slate-400">
                        TEAM LEAD NAME (leadname) *
                      </label>
                      <input
                        type="text"
                        required
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                        placeholder="Your full name"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-violet-400 ${
                          isDark
                            ? 'bg-[#0C1029] border-white/15 text-white'
                            : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1 text-slate-400">
                        MOBILE / WHATSAPP (mobile) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={leadPhone}
                        onChange={(e) => setLeadPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-violet-400 ${
                          isDark
                            ? 'bg-[#0C1029] border-white/15 text-white'
                            : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1 text-slate-400">
                        EMAIL ADDRESS (email) *
                      </label>
                      <input
                        type="email"
                        required
                        value={leadEmail}
                        onChange={(e) => setLeadEmail(e.target.value)}
                        placeholder="student@college.edu"
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-violet-400 ${
                          isDark
                            ? 'bg-[#0C1029] border-white/15 text-white'
                            : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold mb-1 text-slate-400">
                      TEAM MEMBERS (memeber) — NAMES / COUNT
                    </label>
                    <input
                      type="text"
                      value={membersList}
                      onChange={(e) => setMembersList(e.target.value)}
                      placeholder="e.g., Member 1, Member 2, Member 3"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-violet-400 ${
                        isDark
                          ? 'bg-[#0C1029] border-white/15 text-white'
                          : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1 text-slate-400">
                        TEAM SIZE (1–3 MEMBERS)
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3].map((num) => (
                          <button
                            key={num}
                            type="button"
                            onClick={() => setTeamSize(num)}
                            className={`py-2 rounded-xl font-mono text-xs font-bold border transition-colors ${
                              teamSize === num
                                ? 'bg-violet-600 text-white border-violet-400'
                                : isDark
                                ? 'bg-[#0C1029] text-slate-300 border-white/10'
                                : 'bg-white text-slate-700 border-slate-300'
                            }`}
                          >
                            {num} {num === 1 ? 'Member' : 'Members'} (₹{num * 100})
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1 text-slate-400">
                        PROBLEM STATEMENT SELECTION
                      </label>
                      <div
                        className={`w-full px-3.5 py-2.5 rounded-xl border text-xs font-mono font-semibold ${
                          isDark
                            ? 'bg-[#0C1029] border-amber-400/30 text-amber-300'
                            : 'bg-amber-50 border-amber-300 text-amber-900'
                        }`}
                      >
                        🔒 Displayed on Event Day (22 Oct 2026)
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1 text-slate-400">
                        COLLEGE / INSTITUTION
                      </label>
                      <input
                        type="text"
                        value={collegeName}
                        onChange={(e) => setCollegeName(e.target.value)}
                        className={`w-full px-3.5 py-2 rounded-xl border text-xs sm:text-sm ${
                          isDark
                            ? 'bg-[#0C1029] border-white/15 text-white'
                            : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-semibold mb-1 text-slate-400">
                        BRANCH / DEPARTMENT
                      </label>
                      <input
                        type="text"
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                        className={`w-full px-3.5 py-2 rounded-xl border text-xs sm:text-sm ${
                          isDark
                            ? 'bg-[#0C1029] border-white/15 text-white'
                            : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors"
                    >
                      Send Team Details on WhatsApp
                    </button>
                    <a
                      href={EVENT_CONFIG.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 py-3 px-5 rounded-xl text-xs sm:text-sm font-extrabold bg-amber-400 hover:bg-amber-300 text-slate-950 whitespace-nowrap"
                    >
                      <span>Official Form</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG / COMMUNITY UPDATES & CHAPTER FEED SECTION */}
      <section
        className={`py-20 border-t ${
          isDark
            ? 'bg-[#080B1E] border-violet-500/20'
            : 'bg-white border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="text-xs font-mono font-semibold tracking-wider text-sky-400">
                14. WEBATHON BRIEFINGS &amp; CHAPTER DISPATCH
              </div>
              <h2
                className={`font-display text-3xl sm:text-4xl font-extrabold tracking-tight mt-1 ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}
              >
                Participant Guides &amp; Community Updates
              </h2>
            </div>
            <p
              className={`text-xs sm:text-sm font-mono ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              Published by PCE ACM &amp; PCE ACM-W Student Chapters
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {COMMUNITY_BLOG_UPDATES.map((post) => (
              <article
                key={post.id}
                className={`p-6 rounded-2xl border flex flex-col justify-between ${
                  isDark
                    ? 'bg-[#0C0F26] border-violet-500/25 hover:border-violet-400/50'
                    : 'bg-slate-50 border-slate-200 hover:border-violet-400'
                }`}
              >
                <div className="space-y-3">
                  {/* Unboxed Metadata with Typographic Separators */}
                  <div
                    className={`flex items-center gap-2 text-xs font-mono ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    <span className="text-amber-400 font-semibold">
                      {post.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{post.date}</span>
                    <span aria-hidden="true">·</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3
                    className={`font-display text-lg sm:text-xl font-bold leading-snug ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {post.title}
                  </h3>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-5 mt-5 border-t border-white/10 flex items-center justify-between">
                  <span
                    className={`text-xs font-medium ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {post.author}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActiveBlogPost(post)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-sky-400 hover:underline"
                  >
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Read Guide →</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Blog Article Modal */}
        {activeBlogPost && (
          <div
            role="dialog"
            aria-modal="true"
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setActiveBlogPost(null)}
          >
            <div
              className={`max-w-2xl w-full rounded-2xl border p-6 sm:p-8 space-y-5 max-h-[85vh] overflow-y-auto ${
                isDark
                  ? 'bg-[#0C0F26] border-violet-500/40 text-slate-100'
                  : 'bg-white border-slate-200 text-slate-900'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                    <span>{activeBlogPost.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeBlogPost.date}</span>
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-extrabold mt-1">
                    {activeBlogPost.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveBlogPost(null)}
                  className="p-2 rounded-lg border border-white/15"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3 text-sm sm:text-base leading-relaxed">
                {activeBlogPost.content.map((para, i) => (
                  <p
                    key={i}
                    className={`p-3.5 rounded-xl border ${
                      isDark
                        ? 'bg-[#070918] border-white/10 text-slate-200'
                        : 'bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    {para}
                  </p>
                ))}
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs font-mono text-slate-400">
                  By {activeBlogPost.author}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveBlogPost(null)}
                  className="px-4 py-2 rounded-lg text-xs font-bold bg-violet-600 text-white"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
};

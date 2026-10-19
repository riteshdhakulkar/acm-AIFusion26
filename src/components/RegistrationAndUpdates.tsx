import React, { useState } from 'react';
import {
  ExternalLink,
  MessageSquare,
  Users,
  CheckCircle2,
  Sparkles,
  Calendar,
  MapPin,
} from 'lucide-react';
import {
  EVENT_CONFIG,
  CHALLENGE_DOMAINS,
} from '../data/eventData';

export interface TeamRegistrationRecord {
  teamName: string;
  leadName: string;
  leadEmail: string;
  leadPhone: string;
  college: string;
  branchAndYear: string;
  teamSize: number;
  member2Name?: string;
  member3Name?: string;
  preferredDomain: string;
  registeredAt: string;
}

interface RegistrationAndUpdatesProps {
  isDark: boolean;
  selectedDomainId: string;
  onSaveTeamRegistration: (record: TeamRegistrationRecord | null) => void;
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
  const [college, setCollege] = useState(
    'Priyadarshini College of Engineering, Nagpur'
  );
  const [branchAndYear, setBranchAndYear] = useState(
    'Computer Technology · 3rd Year'
  );
  const [teamSize, setTeamSize] = useState<number>(2);
  const [member2Name, setMember2Name] = useState('');
  const [member3Name, setMember3Name] = useState('');
  const [preferredDomain, setPreferredDomain] = useState(
    CHALLENGE_DOMAINS.find((d) => d.id === selectedDomainId)?.title ||
      CHALLENGE_DOMAINS[0].title
  );
  const [formSavedBanner, setFormSavedBanner] = useState(false);

  const totalFee = teamSize * EVENT_CONFIG.registrationFeePerMember;

  const handleQuickPreRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName.trim() || !leadName.trim() || !leadPhone.trim()) return;

    const record: TeamRegistrationRecord = {
      teamName: teamName.trim(),
      leadName: leadName.trim(),
      leadEmail: leadEmail.trim(),
      leadPhone: leadPhone.trim(),
      college: college.trim(),
      branchAndYear: branchAndYear.trim(),
      teamSize,
      member2Name: teamSize >= 2 ? member2Name.trim() : undefined,
      member3Name: teamSize === 3 ? member3Name.trim() : undefined,
      preferredDomain,
      registeredAt: new Date().toLocaleString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    onSaveTeamRegistration(record);
    setFormSavedBanner(true);

    // Format registration message and copy to clipboard so participant can paste directly in the official WhatsApp group
    const membersSummary = [
      `1) ${record.leadName} (Lead - ${record.leadPhone})`,
      record.teamSize >= 2 && record.member2Name
        ? `2) ${record.member2Name}`
        : null,
      record.teamSize === 3 && record.member3Name
        ? `3) ${record.member3Name}`
        : null,
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappRegistrationMsg =
      `*AI-FUSION 2026 — TEAM REGISTRATION DETAILS*\n` +
      `• *Team Name:* ${record.teamName}\n` +
      `• *College:* ${record.college}\n` +
      `• *Branch & Year:* ${record.branchAndYear}\n` +
      `• *Team Size:* ${record.teamSize} Member(s) (Fee: ₹${
        record.teamSize * EVENT_CONFIG.registrationFeePerMember
      })\n` +
      `• *Members:*\n${membersSummary}`;

    navigator.clipboard?.writeText(whatsappRegistrationMsg).catch(() => {});

    // Directly jump to the official WhatsApp Group link in a new tab
    const a = document.createElement('a');
    a.href = EVENT_CONFIG.whatsappGroupUrl;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section
      id="register"
      className={`py-14 lg:py-20 border-t ${
        isDark
          ? 'bg-[#080B1E] border-white/10'
          : 'bg-white border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              // 07 · OFFICIAL REGISTRATION &amp; WHATSAPP COMMUNITY
            </span>
            <h2
              className={`font-display text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Register Your Team for AI-FUSION 2026
            </h2>
          </div>

          <div
            className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-mono ${
              isDark
                ? 'bg-[#0F172A] border-slate-800 text-amber-300'
                : 'bg-amber-50 border-amber-200 text-amber-900'
            }`}
          >
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>Registration Deadline: 20 October 2026</span>
          </div>
        </div>

        {/* Main 2-Column Registration Hub */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left 7 Cols: Official Google Form + WhatsApp Community */}
          <div
            className={`lg:col-span-7 p-6 sm:p-8 rounded-2xl border space-y-6 ${
              isDark
                ? 'bg-[#0F172A] border-slate-800'
                : 'bg-slate-50 border-slate-200 shadow-sm'
            }`}
          >
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase bg-amber-400/20 text-amber-300 border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Step 1 · Complete Google Form &amp; Join WhatsApp</span>
              </div>

              <h3
                className={`font-display text-xl sm:text-2xl font-extrabold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Confirm Your Slot on the Official Registration Form
              </h3>

              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Open to students from{' '}
                <strong className={isDark ? 'text-white' : 'text-slate-900'}>
                  all colleges and all branches
                </strong>
                . Submit the official Google Form and join the WhatsApp
                participants group for reporting instructions and updates.
              </p>
            </div>

            {/* Fee & Team Size Summary Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div
                className={`p-3.5 rounded-xl border ${
                  isDark
                    ? 'bg-[#07091A] border-white/10'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="text-[10px] font-mono uppercase text-slate-400">
                  ENTRY FEE
                </div>
                <div className="font-display text-base sm:text-lg font-extrabold text-amber-400 mt-0.5">
                  ₹100 / Member
                </div>
              </div>

              <div
                className={`p-3.5 rounded-xl border ${
                  isDark
                    ? 'bg-[#07091A] border-white/10'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="text-[10px] font-mono uppercase text-slate-400">
                  TEAM SIZE
                </div>
                <div
                  className={`font-display text-base sm:text-lg font-extrabold mt-0.5 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  1–3 Members
                </div>
              </div>

              <div
                className={`p-3.5 rounded-xl border col-span-2 sm:col-span-1 ${
                  isDark
                    ? 'bg-[#07091A] border-white/10'
                    : 'bg-white border-slate-200'
                }`}
              >
                <div className="text-[10px] font-mono uppercase text-slate-400">
                  PERKS INCLUDED
                </div>
                <div className="font-display text-sm sm:text-base font-extrabold text-emerald-400 mt-0.5">
                  Brunch + Certificate
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <a
                href={EVENT_CONFIG.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-extrabold bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg shadow-amber-500/20 transition-all"
              >
                <span>Fill Official Google Form</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={EVENT_CONFIG.whatsappGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-sm font-extrabold bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 shadow-lg shadow-emerald-500/20 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Join Official WhatsApp Group</span>
              </a>
            </div>

            <div
              className={`pt-3 border-t flex items-center gap-2 text-xs ${
                isDark
                  ? 'border-white/10 text-slate-400'
                  : 'border-slate-200 text-slate-600'
              }`}
            >
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span>
                Venue: {EVENT_CONFIG.venue}
              </span>
            </div>
          </div>

          {/* Right 5 Cols: Team Fee Calculator & Team Pass Saver */}
          <div
            className={`lg:col-span-5 p-5 sm:p-6 rounded-2xl border space-y-4 ${
              isDark
                ? 'bg-[#0F172A] border-slate-800'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-sky-400" />
                <h3
                  className={`font-display text-base sm:text-lg font-extrabold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Team Pass &amp; Fee Calculator
                </h3>
              </div>
              <span className="font-mono text-xs font-bold text-amber-400">
                Total: ₹{totalFee}
              </span>
            </div>

            <form onSubmit={handleQuickPreRegister} className="space-y-3">
              {/* Team Size Selector */}
              <div>
                <label
                  className={`block text-[11px] font-mono uppercase mb-1.5 ${
                    isDark ? 'text-slate-300' : 'text-slate-700'
                  }`}
                >
                  Select Team Size (₹100 / Member)
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setTeamSize(size)}
                      className={`py-2 px-3 rounded-xl font-mono text-xs font-bold border transition-all ${
                        teamSize === size
                          ? 'bg-amber-400 text-slate-950 border-amber-400'
                          : isDark
                          ? 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                          : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {size} {size === 1 ? 'Member' : 'Members'} (₹{size * 100})
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label
                    className={`block text-[11px] font-mono uppercase mb-1 ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Team Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    placeholder="e.g., Neural Ninjas"
                    className={`w-full px-3 py-2 rounded-xl border text-xs focus:outline-none ${
                      isDark
                        ? 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-400'
                        : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-blue-600'
                    }`}
                  />
                </div>

                <div>
                  <label
                    className={`block text-[11px] font-mono uppercase mb-1 ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    Team Lead Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={leadName}
                    onChange={(e) => setLeadName(e.target.value)}
                    placeholder="Your full name"
                    className={`w-full px-3 py-2 rounded-xl border text-xs focus:outline-none ${
                      isDark
                        ? 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-400'
                        : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-blue-600'
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label
                    className={`block text-[11px] font-mono uppercase mb-1 ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    WhatsApp Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={leadPhone}
                    onChange={(e) => setLeadPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className={`w-full px-3 py-2 rounded-xl border text-xs focus:outline-none ${
                      isDark
                        ? 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-400'
                        : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-blue-600'
                    }`}
                  />
                </div>

                <div>
                  <label
                    className={`block text-[11px] font-mono uppercase mb-1 ${
                      isDark ? 'text-slate-300' : 'text-slate-700'
                    }`}
                  >
                    College / Institute
                  </label>
                  <input
                    type="text"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                    placeholder="College Name"
                    className={`w-full px-3 py-2 rounded-xl border text-xs focus:outline-none ${
                      isDark
                        ? 'bg-slate-900 border-slate-700 text-white placeholder:text-slate-500 focus:border-amber-400'
                        : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-blue-600'
                    }`}
                  />
                </div>
              </div>

              {teamSize >= 2 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label
                      className={`block text-[11px] font-mono uppercase mb-1 ${
                        isDark ? 'text-slate-300' : 'text-slate-700'
                      }`}
                    >
                      Member 2 Name
                    </label>
                    <input
                      type="text"
                      value={member2Name}
                      onChange={(e) => setMember2Name(e.target.value)}
                      placeholder="Second member name"
                      className={`w-full px-3 py-2 rounded-xl border text-xs focus:outline-none ${
                        isDark
                          ? 'bg-[#07091A] border-white/15 text-white placeholder:text-slate-500'
                          : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  {teamSize === 3 && (
                    <div>
                      <label
                        className={`block text-[11px] font-mono uppercase mb-1 ${
                          isDark ? 'text-slate-300' : 'text-slate-700'
                        }`}
                      >
                        Member 3 Name
                      </label>
                      <input
                        type="text"
                        value={member3Name}
                        onChange={(e) => setMember3Name(e.target.value)}
                        placeholder="Third member name"
                        className={`w-full px-3 py-2 rounded-xl border text-xs focus:outline-none ${
                          isDark
                            ? 'bg-[#07091A] border-white/15 text-white placeholder:text-slate-500'
                            : 'bg-white border-slate-300 text-slate-900'
                        }`}
                      />
                    </div>
                  )}
                </div>
              )}

              {/* Hidden/kept state helpers so existing props stay clean */}
              <input type="hidden" value={leadEmail} onChange={(e) => setLeadEmail(e.target.value)} />
              <input type="hidden" value={branchAndYear} onChange={(e) => setBranchAndYear(e.target.value)} />
              <input type="hidden" value={preferredDomain} onChange={(e) => setPreferredDomain(e.target.value)} />

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 transition-all shadow-md shadow-emerald-500/20 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Team Details &amp; Join WhatsApp Group</span>
              </button>
            </form>

            {formSavedBanner && (
              <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-xs text-emerald-300 flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>
                    Team details copied! Opening WhatsApp Group — paste your registration message there.
                  </span>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

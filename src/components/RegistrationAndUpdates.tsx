import React, { useState } from 'react';
import {
  ExternalLink,
  CheckCircle2,
  Users,
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
  const [teamSize, setTeamSize] = useState<number>(3);
  const [formError, setFormError] = useState<string | null>(null);
  const [formSuccessUrl, setFormSuccessUrl] = useState<string | null>(null);

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
      collegeName: 'Priyadarshini College of Engineering, Nagpur',
      branch: 'Computer Technology',
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
    <section
      id="register-section"
      className={`py-12 lg:py-16 border-t bg-circuit-grid ${
        isDark
          ? 'bg-[#060714] border-violet-500/20'
          : 'bg-slate-50 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`rounded-2xl border p-6 sm:p-8 ${
            isDark
              ? 'bg-[#0A0D20] border-white/15'
              : 'bg-white border-slate-300 shadow-lg'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: READY TO BUILD WITH AI? CTA */}
            <div className="lg:col-span-6 space-y-5">
              <div className="text-xs font-mono font-semibold tracking-wider text-amber-400">
                07. OFFICIAL ENROLLMENT
              </div>

              <h2
                className={`font-display text-2xl sm:text-3xl font-bold tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}
              >
                Ready to Build with AI?
              </h2>

              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Form a 1–3 member team and register by 15 Oct 2026 to compete for the ₹10,000 prize pool.
              </p>

              {/* Key Registration Details */}
              <div
                className={`grid grid-cols-3 gap-3 p-4 rounded-2xl border ${
                  isDark
                    ? 'bg-[#070919]/90 border-white/10'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div>
                  <span className="text-[10px] font-mono text-slate-400">
                    ENTRY FEE
                  </span>
                  <p
                    className={`font-mono text-sm sm:text-base font-extrabold mt-0.5 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    ₹100 / Member
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400">
                    TEAM SIZE
                  </span>
                  <p
                    className={`font-mono text-sm sm:text-base font-extrabold mt-0.5 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    1–3 Members
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400">
                    DEADLINE
                  </span>
                  <p className="font-mono text-sm sm:text-base font-extrabold text-amber-400 mt-0.5">
                    15 Oct 2026
                  </p>
                </div>
              </div>

              <div className="pt-1">
                <a
                  href={EVENT_CONFIG.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl text-sm sm:text-base font-extrabold bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-xl shadow-amber-500/25 transition-transform active:scale-95"
                >
                  <span>REGISTER NOW (GOOGLE FORM)</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Compact WhatsApp Team Portal Form */}
            <div className="lg:col-span-6">
              <form
                onSubmit={handlePreRegisterSubmit}
                noValidate
                className={`p-5 sm:p-6 rounded-2xl border space-y-3.5 ${
                  isDark
                    ? 'bg-[#07091A]/95 border-violet-500/35'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between gap-2 border-b border-white/10 pb-2.5">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-sky-400" />
                    <h3
                      className={`font-display text-base sm:text-lg font-extrabold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      Quick Team Registration (WhatsApp)
                    </h3>
                  </div>
                  <span className="font-mono text-xs font-bold text-amber-400">
                    Fee: ₹{teamSize * 100}
                  </span>
                </div>

                {formError && (
                  <div className="p-2.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs">
                    {formError}
                  </div>
                )}

                {formSuccessUrl && (
                  <div className="p-3 rounded-xl bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-xs flex items-center justify-between gap-2">
                    <span className="flex items-center gap-1.5 font-bold">
                      <CheckCircle2 className="w-4 h-4 shrink-0" />
                      Sent to WhatsApp!
                    </span>
                    <a
                      href={formSuccessUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-bold"
                    >
                      Re-open WhatsApp ↗
                    </a>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">
                      TEAM NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={teamName}
                      onChange={(e) => setTeamName(e.target.value)}
                      placeholder="e.g. ByteBuilders"
                      className={`w-full px-3 py-2 rounded-lg border text-xs sm:text-sm ${
                        isDark
                          ? 'bg-[#0C1029] border-white/15 text-white'
                          : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">
                      TEAM LEAD NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={leadName}
                      onChange={(e) => setLeadName(e.target.value)}
                      placeholder="Lead full name"
                      className={`w-full px-3 py-2 rounded-lg border text-xs sm:text-sm ${
                        isDark
                          ? 'bg-[#0C1029] border-white/15 text-white'
                          : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">
                      WHATSAPP / MOBILE *
                    </label>
                    <input
                      type="tel"
                      required
                      value={leadPhone}
                      onChange={(e) => setLeadPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className={`w-full px-3 py-2 rounded-lg border text-xs sm:text-sm ${
                        isDark
                          ? 'bg-[#0C1029] border-white/15 text-white'
                          : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={leadEmail}
                      onChange={(e) => setLeadEmail(e.target.value)}
                      placeholder="you@college.edu"
                      className={`w-full px-3 py-2 rounded-lg border text-xs sm:text-sm ${
                        isDark
                          ? 'bg-[#0C1029] border-white/15 text-white'
                          : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">
                      TEAM MEMBERS
                    </label>
                    <input
                      type="text"
                      value={membersList}
                      onChange={(e) => setMembersList(e.target.value)}
                      placeholder="Member 2, Member 3"
                      className={`w-full px-3 py-2 rounded-lg border text-xs sm:text-sm ${
                        isDark
                          ? 'bg-[#0C1029] border-white/15 text-white'
                          : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-slate-400 mb-1">
                      TEAM SIZE (1–3)
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {[1, 2, 3].map((num) => (
                        <button
                          key={num}
                          type="button"
                          onClick={() => setTeamSize(num)}
                          className={`py-2 rounded-xl font-mono text-xs font-bold border ${
                            teamSize === num
                              ? 'bg-violet-600 text-white border-violet-400'
                              : isDark
                              ? 'bg-[#0C1029] text-slate-300 border-white/10'
                              : 'bg-white text-slate-700 border-slate-300'
                          }`}
                        >
                          {num} (₹{num * 100})
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-extrabold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors"
                >
                  Send Team Details on WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

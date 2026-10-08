import React, { useState } from 'react';
import {
  X,
  User,
  CheckCircle2,
  Clock,
  ExternalLink,
  LogOut,
  MessageSquare,
} from 'lucide-react';
import {
  SUBMISSION_CHECKLIST,
  EVENT_CONFIG,
  STUDENT_CONTACTS,
} from '../data/eventData';
import { TeamRegistrationRecord } from './RegistrationAndUpdates';

export interface ActivityLogItem {
  id: string;
  action: string;
  timestamp: string;
}

interface ParticipantDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  teamRecord: TeamRegistrationRecord | null;
  onUpdateTeamRecord: (record: TeamRegistrationRecord | null) => void;
  selectedDomainId: string;
  onSelectDomain: (id: string) => void;
  checkedSubmissionItems: string[];
  onToggleChecklistItem: (num: string) => void;
  activityLog: ActivityLogItem[];
}

export const ParticipantDashboardModal: React.FC<
  ParticipantDashboardModalProps
> = ({
  isOpen,
  onClose,
  isDark,
  teamRecord,
  onUpdateTeamRecord,
  selectedDomainId,
  checkedSubmissionItems,
  onToggleChecklistItem,
  activityLog,
}) => {
  const [quickTeam, setQuickTeam] = useState(teamRecord?.teamName || '');
  const [quickName, setQuickName] = useState(teamRecord?.leadName || '');
  const [quickMobile, setQuickMobile] = useState(teamRecord?.leadPhone || '');
  const [quickEmail, setQuickEmail] = useState(teamRecord?.leadEmail || '');
  const [quickMember, setQuickMember] = useState(teamRecord?.membersList || '');
  const [quickSize, setQuickSize] = useState<number>(teamRecord?.teamSize || 3);
  const [coordinatorPhone, setCoordinatorPhone] = useState<string>('917774860589'); // Prem Rahangdale
  const [portalError, setPortalError] = useState<string | null>(null);

  if (!isOpen) return null;

  const buildWhatsAppUrl = (rec: TeamRegistrationRecord, phone: string) => {
    const text = [
      `*AI-FUSION 2026 — Team Portal Details*`,
      `• *teamname:* ${rec.teamName}`,
      `• *leadname:* ${rec.leadName}`,
      `• *mobile:* ${rec.leadPhone}`,
      `• *email:* ${rec.leadEmail}`,
      `• *memeber:* ${rec.membersList} (${rec.teamSize} Member(s) · Fee: ₹${rec.teamSize * 100})`,
    ].join('\n');
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
  };

  const handleQuickSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setPortalError(null);
    if (!quickTeam.trim() || !quickName.trim() || !quickMobile.trim() || !quickEmail.trim()) {
      setPortalError('Please fill in teamname, leadname, mobile, and email.');
      return;
    }

    const newRecord: TeamRegistrationRecord = {
      teamName: quickTeam.trim(),
      leadName: quickName.trim(),
      leadPhone: quickMobile.trim(),
      leadEmail: quickEmail.trim(),
      membersList: quickMember.trim() || `${quickSize} Member(s)`,
      collegeName:
        teamRecord?.collegeName ||
        'Priyadarshini College of Engineering, Nagpur',
      branch: teamRecord?.branch || 'Computer Technology',
      teamSize: quickSize,
      selectedDomainId,
      registeredAt: new Date().toLocaleString('en-IN'),
    };

    onUpdateTeamRecord(newRecord);

    const waUrl = buildWhatsAppUrl(newRecord, coordinatorPhone);
    const link = document.createElement('a');
    link.href = waUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Participant Team Portal and Activity Dashboard"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className={`max-w-3xl w-full rounded-3xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6 ${
          isDark
            ? 'bg-[#0B0E26] border-violet-500/40 text-slate-100'
            : 'bg-white border-slate-200 text-slate-900'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-violet-600/20 border border-violet-400/40 flex items-center justify-center text-violet-300">
              <User className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-amber-400">
                AI-FUSION 2026 TEAM PORTAL (WHATSAPP)
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-extrabold">
                {teamRecord
                  ? `${teamRecord.teamName} — Team Portal`
                  : 'Team Portal Registration (WhatsApp)'}
              </h2>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close portal"
            className="p-2 rounded-lg border border-white/15 hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sign-in / Profile Creation or Active Profile Summary */}
        {!teamRecord ? (
          <form
            onSubmit={handleQuickSignIn}
            noValidate
            className={`p-5 rounded-2xl border space-y-4 ${
              isDark
                ? 'bg-[#070919] border-violet-500/30'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400">
              <MessageSquare className="w-4 h-4" />
              <span>SUBMIT TEAM DETAILS DIRECTLY ON WHATSAPP</span>
            </div>

            {portalError && (
              <div className="p-3 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs">
                {portalError}
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  TEAM NAME (teamname) *
                </label>
                <input
                  type="text"
                  required
                  value={quickTeam}
                  onChange={(e) => setQuickTeam(e.target.value)}
                  placeholder="Enter teamname"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm ${
                    isDark
                      ? 'bg-[#0C1029] border-white/15 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  TEAM LEAD NAME (leadname) *
                </label>
                <input
                  type="text"
                  required
                  value={quickName}
                  onChange={(e) => setQuickName(e.target.value)}
                  placeholder="Enter leadname"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm ${
                    isDark
                      ? 'bg-[#0C1029] border-white/15 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  MOBILE NUMBER (mobile) *
                </label>
                <input
                  type="tel"
                  required
                  value={quickMobile}
                  onChange={(e) => setQuickMobile(e.target.value)}
                  placeholder="+91 98765 43210"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm ${
                    isDark
                      ? 'bg-[#0C1029] border-white/15 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  EMAIL ADDRESS (email) *
                </label>
                <input
                  type="email"
                  required
                  value={quickEmail}
                  onChange={(e) => setQuickEmail(e.target.value)}
                  placeholder="Enter email"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm ${
                    isDark
                      ? 'bg-[#0C1029] border-white/15 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  TEAM MEMBERS (memeber) *
                </label>
                <input
                  type="text"
                  value={quickMember}
                  onChange={(e) => setQuickMember(e.target.value)}
                  placeholder="Member names (1–3 members)"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-sm ${
                    isDark
                      ? 'bg-[#0C1029] border-white/15 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                />
              </div>
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-1">
                  SEND WHATSAPP TO COORDINATOR
                </label>
                <select
                  value={coordinatorPhone}
                  onChange={(e) => setCoordinatorPhone(e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-medium ${
                    isDark
                      ? 'bg-[#0C1029] border-white/15 text-white'
                      : 'bg-white border-slate-300 text-slate-900'
                  }`}
                >
                  {STUDENT_CONTACTS.map((c) => (
                    <option
                      key={c.cleanPhone}
                      value={c.cleanPhone.replace('+', '')}
                    >
                      {c.name} ({c.phone})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono">
                <span>Team Size:</span>
                {[1, 2, 3].map((n) => (
                  <button
                    key={n}
                    type="button"
                    onClick={() => setQuickSize(n)}
                    className={`px-2.5 py-1 rounded-lg border font-bold ${
                      quickSize === n
                        ? 'bg-violet-600 text-white border-violet-400'
                        : 'border-white/15 text-slate-400'
                    }`}
                  >
                    {n} (₹{n * 100})
                  </button>
                ))}
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-extrabold bg-emerald-500 hover:bg-emerald-400 text-slate-950"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Save &amp; Send on WhatsApp</span>
              </button>
            </div>
          </form>
        ) : (
          <div
            className={`p-5 rounded-2xl border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
              isDark
                ? 'bg-[#070919] border-emerald-400/40'
                : 'bg-emerald-50/70 border-emerald-300'
            }`}
          >
            <div className="space-y-1 text-xs sm:text-sm font-mono">
              <div className="text-xs font-bold text-emerald-400">
                ACTIVE TEAM PORTAL · {teamRecord.teamSize} MEMBERS (FEE: ₹
                {teamRecord.teamSize * 100})
              </div>
              <div>
                <strong>teamname:</strong> {teamRecord.teamName} ·{' '}
                <strong>leadname:</strong> {teamRecord.leadName}
              </div>
              <div>
                <strong>mobile:</strong> {teamRecord.leadPhone} ·{' '}
                <strong>email:</strong> {teamRecord.leadEmail}
              </div>
              <div>
                <strong>memeber:</strong> {teamRecord.membersList}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2 shrink-0">
              <a
                href={buildWhatsAppUrl(teamRecord, coordinatorPhone)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-extrabold bg-emerald-500 text-slate-950"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Send on WhatsApp</span>
              </a>
              <a
                href={EVENT_CONFIG.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-extrabold bg-amber-400 text-slate-950"
              >
                <span>Google Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => onUpdateTeamRecord(null)}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold border border-rose-500/40 text-rose-300 hover:bg-rose-500/10"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Edit / Reset</span>
              </button>
            </div>
          </div>
        )}

        {/* Dashboard Grid: Event-Day Problem Statements Notice & Submission Checklist Progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Problem Statement Policy */}
          <div
            className={`p-5 rounded-2xl border space-y-3 ${
              isDark
                ? 'bg-[#070919] border-white/10'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <span className="text-xs font-mono font-bold text-amber-400">
              PROBLEM STATEMENTS POLICY
            </span>
            <h3 className="font-display text-lg font-bold">
              Displayed Live on Event Day (22 October 2026)
            </h3>
            <p
              className={`text-xs leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Problem statements will be displayed at the venue during the morning orientation. Teams will choose ANY ONE of the four revealed problem statements on the spot and get 4 hours of coding time with AI tools permitted.
            </p>
          </div>

          {/* Submission Checklist Progress */}
          <div
            className={`p-5 rounded-2xl border space-y-3 ${
              isDark
                ? 'bg-[#070919] border-white/10'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-amber-400">
                SUBMISSION READINESS
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400">
                {checkedSubmissionItems.length}/5 Ready
              </span>
            </div>
            <div className="space-y-2">
              {SUBMISSION_CHECKLIST.map((item) => {
                const done = checkedSubmissionItems.includes(item.number);
                return (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => onToggleChecklistItem(item.number)}
                    className={`w-full text-left px-3 py-2 rounded-xl border text-xs flex items-center justify-between ${
                      done
                        ? 'bg-emerald-500/15 border-emerald-400/40 text-emerald-300 font-semibold'
                        : isDark
                        ? 'bg-[#0C1029] border-white/10 text-slate-300'
                        : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    <span className="truncate">
                      {item.number}. {item.title}
                    </span>
                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 ${
                        done ? 'text-emerald-400' : 'opacity-30'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Activity History Log */}
        <div
          className={`p-5 rounded-2xl border space-y-3 ${
            isDark
              ? 'bg-[#070919] border-white/10'
              : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-violet-400">
            <Clock className="w-4 h-4" />
            <span>RECENT ACTIVITY HISTORY</span>
          </div>
          {activityLog.length === 0 ? (
            <p className="text-xs text-slate-400">
              No actions recorded yet.
            </p>
          ) : (
            <ul className="space-y-1.5 max-h-36 overflow-y-auto text-xs font-mono">
              {activityLog.map((entry) => (
                <li
                  key={entry.id}
                  className="flex items-center justify-between gap-2 py-1 border-b border-white/5"
                >
                  <span className={isDark ? 'text-slate-200' : 'text-slate-700'}>
                    {entry.action}
                  </span>
                  <span className="text-slate-400 shrink-0">
                    {entry.timestamp}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

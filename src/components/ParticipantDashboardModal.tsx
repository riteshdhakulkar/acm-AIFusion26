import React, { useState } from 'react';
import {
  X,
  User,
  GitBranch,
  Globe,
  CheckCircle2,
  Clock,
  ExternalLink,
  LogOut,
  Sparkles,
  MessageSquare,
} from 'lucide-react';
import {
  CHALLENGE_DOMAINS,
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
  onSelectDomain: (domainId: string) => void;
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
  checkedSubmissionItems,
  onToggleChecklistItem,
  activityLog,
}) => {
  const [teamName, setTeamName] = useState(teamRecord?.teamName || '');
  const [leadName, setLeadName] = useState(teamRecord?.leadName || '');
  const [leadEmail, setLeadEmail] = useState(teamRecord?.leadEmail || '');
  const [leadPhone, setLeadPhone] = useState(teamRecord?.leadPhone || '');
  const [college, setCollege] = useState(
    teamRecord?.college || 'Priyadarshini College of Engineering, Nagpur'
  );
  const [branchAndYear, setBranchAndYear] = useState(
    teamRecord?.branchAndYear || 'Computer Technology · 3rd Year'
  );
  const [teamSize, setTeamSize] = useState<number>(teamRecord?.teamSize || 2);
  const [preferredDomain, setPreferredDomain] = useState(
    teamRecord?.preferredDomain || CHALLENGE_DOMAINS[0].title
  );

  // Submission Sandbox Links (saved in localStorage for event day readiness)
  const [githubRepoUrl, setGithubRepoUrl] = useState(
    () => localStorage.getItem('aifusion_repo_url') || ''
  );
  const [liveDeployUrl, setLiveDeployUrl] = useState(
    () => localStorage.getItem('aifusion_deploy_url') || ''
  );
  const [selectedChallengeTrack, setSelectedChallengeTrack] = useState(
    () => localStorage.getItem('aifusion_selected_track') || 'Track 01 (Event-Day Problem Statement)'
  );
  const [projectSummary, setProjectSummary] = useState(
    () => localStorage.getItem('aifusion_summary') || ''
  );
  const [collaboratorAdded, setCollaboratorAdded] = useState(
    () => localStorage.getItem('aifusion_collab') === 'true'
  );
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleCreateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    if (!teamName.trim() || !leadName.trim()) return;
    onUpdateTeamRecord({
      teamName: teamName.trim(),
      leadName: leadName.trim(),
      leadEmail: leadEmail.trim(),
      leadPhone: leadPhone.trim(),
      college: college.trim(),
      branchAndYear: branchAndYear.trim(),
      teamSize,
      preferredDomain,
      registeredAt: new Date().toLocaleString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }),
    });
  };

  const handleSaveSubmissionDraft = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('aifusion_repo_url', githubRepoUrl);
    localStorage.setItem('aifusion_deploy_url', liveDeployUrl);
    localStorage.setItem('aifusion_selected_track', selectedChallengeTrack);
    localStorage.setItem('aifusion_summary', projectSummary);
    localStorage.setItem('aifusion_collab', String(collaboratorAdded));
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  };

  const handleSendSubmissionViaWhatsApp = () => {
    if (!teamRecord) return;
    localStorage.setItem('aifusion_repo_url', githubRepoUrl);
    localStorage.setItem('aifusion_deploy_url', liveDeployUrl);
    localStorage.setItem('aifusion_selected_track', selectedChallengeTrack);
    localStorage.setItem('aifusion_summary', projectSummary);
    localStorage.setItem('aifusion_collab', String(collaboratorAdded));

    const text =
      `*AI-FUSION 2026 — PROJECT SUBMISSION*\n` +
      `• *Team Name:* ${teamRecord.teamName}\n` +
      `• *Team Lead:* ${teamRecord.leadName} (${teamRecord.leadPhone})\n` +
      `• *College:* ${teamRecord.college}\n` +
      `• *Selected Track:* ${selectedChallengeTrack}\n` +
      `• *GitHub Repo:* ${githubRepoUrl || 'Pending'}\n` +
      `• *Live Deployed URL:* ${liveDeployUrl || 'Pending'}\n` +
      `• *ACM Collaborator Added:* ${collaboratorAdded ? 'Yes' : 'Pending'}\n` +
      `• *Project Summary:* ${projectSummary || 'N/A'}`;

    const coordinatorPhone = STUDENT_CONTACTS[0].cleanPhone.replace(
      /[^0-9]/g,
      ''
    );
    const waUrl = `https://wa.me/${coordinatorPhone}?text=${encodeURIComponent(
      text
    )}`;
    const a = document.createElement('a');
    a.href = waUrl;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portal-modal-title"
    >
      <div
        className={`relative w-full max-w-3xl rounded-3xl border p-6 sm:p-8 my-8 max-h-[90vh] overflow-y-auto ${
          isDark
            ? 'bg-[#0B0F27] border-violet-500/40 text-slate-100 shadow-2xl shadow-black'
            : 'bg-white border-slate-200 text-slate-900 shadow-2xl'
        }`}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>AI-FUSION 2026 · PARTICIPANT WORKSPACE</span>
            </div>
            <h2
              id="portal-modal-title"
              className="font-display text-xl sm:text-2xl font-extrabold mt-1"
            >
              {teamRecord
                ? `Team Pass: ${teamRecord.teamName}`
                : 'Participant Team Portal & Submission Readiness'}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className={`p-2 rounded-xl border transition-colors ${
              isDark
                ? 'border-white/10 text-slate-400 hover:text-white hover:bg-white/5'
                : 'border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!teamRecord ? (
          /* Create Local Team Pass View */
          <form onSubmit={handleCreateProfile} className="space-y-4 pt-6">
            <p
              className={`text-xs sm:text-sm ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Set up your local Team Workspace to track your 4-hour sprint
              deliverables, GitHub repository link, and live deployment URL
              before submitting to the judges.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-mono uppercase mb-1 text-amber-400">
                  Team Name *
                </label>
                <input
                  type="text"
                  required
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder="e.g., Code Titans"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm ${
                    isDark
                      ? 'bg-[#07091A] border-white/15 text-white'
                      : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase mb-1 text-amber-400">
                  Team Lead Name *
                </label>
                <input
                  type="text"
                  required
                  value={leadName}
                  onChange={(e) => setLeadName(e.target.value)}
                  placeholder="Your Full Name"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm ${
                    isDark
                      ? 'bg-[#07091A] border-white/15 text-white'
                      : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={leadEmail}
                  onChange={(e) => setLeadEmail(e.target.value)}
                  placeholder="lead@college.edu"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm ${
                    isDark
                      ? 'bg-[#07091A] border-white/15 text-white'
                      : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase mb-1">
                  WhatsApp Phone
                </label>
                <input
                  type="tel"
                  value={leadPhone}
                  onChange={(e) => setLeadPhone(e.target.value)}
                  placeholder="+91 98765 43210"
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm ${
                    isDark
                      ? 'bg-[#07091A] border-white/15 text-white'
                      : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase mb-1">
                  College Name
                </label>
                <input
                  type="text"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm ${
                    isDark
                      ? 'bg-[#07091A] border-white/15 text-white'
                      : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase mb-1">
                  Team Size (1–3 Members)
                </label>
                <select
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm ${
                    isDark
                      ? 'bg-[#07091A] border-white/15 text-white'
                      : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                >
                  <option value={1}>1 Member (₹100)</option>
                  <option value={2}>2 Members (₹200)</option>
                  <option value={3}>3 Members (₹300)</option>
                </select>
              </div>
            </div>

            <input
              type="hidden"
              value={branchAndYear}
              onChange={(e) => setBranchAndYear(e.target.value)}
            />
            <input
              type="hidden"
              value={preferredDomain}
              onChange={(e) => setPreferredDomain(e.target.value)}
            />

            <div className="pt-3 flex flex-wrap items-center justify-between gap-3">
              <button
                type="submit"
                className="px-6 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-amber-400 hover:bg-amber-300 text-slate-950 transition-all"
              >
                Initialize Team Workspace
              </button>

              <a
                href={EVENT_CONFIG.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-sky-400 hover:underline"
              >
                <span>Open Official Google Form</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </form>
        ) : (
          /* Active Team Pass & Event-Day Submission Readiness Tracker */
          <div className="space-y-6 pt-6">
            {/* Top Summary Banner */}
            <div
              className={`p-4 rounded-2xl border flex flex-wrap items-center justify-between gap-4 ${
                isDark
                  ? 'bg-[#07091A] border-white/10'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-amber-400" />
                  <span className="font-display font-bold text-sm">
                    Lead: {teamRecord.leadName}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-violet-500/20 text-violet-300">
                    {teamRecord.teamSize}{' '}
                    {teamRecord.teamSize === 1 ? 'Member' : 'Members'} · ₹
                    {teamRecord.teamSize * 100}
                  </span>
                </div>
                <div className="text-xs text-slate-400">
                  {teamRecord.college} · Problem Statement: Revealed on Event Day
                  (22 Oct 2026)
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={EVENT_CONFIG.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-extrabold bg-amber-400 text-slate-950"
                >
                  <span>Google Form</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  type="button"
                  onClick={() => onUpdateTeamRecord(null)}
                  className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-mono text-rose-400 border border-rose-500/30 hover:bg-rose-500/10"
                >
                  <LogOut className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Event-Day Submission Preparation Form */}
            <form onSubmit={handleSaveSubmissionDraft} className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-base font-extrabold flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-400" />
                  <span>4-Hour Sprint Submission Draft</span>
                </h3>
                <span className="text-[11px] font-mono text-slate-400">
                  Auto-saved locally in browser
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-xs font-mono uppercase mb-1 flex items-center gap-1.5">
                    <span>Event-Day Track</span>
                  </label>
                  <select
                    value={selectedChallengeTrack}
                    onChange={(e) => setSelectedChallengeTrack(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${
                      isDark
                        ? 'bg-[#07091A] border-white/15 text-white'
                        : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  >
                    <option value="Track 01 (Event-Day Problem Statement)">
                      Track 01 (Event-Day Reveal)
                    </option>
                    <option value="Track 02 (Event-Day Problem Statement)">
                      Track 02 (Event-Day Reveal)
                    </option>
                    <option value="Track 03 (Event-Day Problem Statement)">
                      Track 03 (Event-Day Reveal)
                    </option>
                    <option value="Track 04 (Event-Day Problem Statement)">
                      Track 04 (Event-Day Reveal)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase mb-1 flex items-center gap-1.5">
                    <GitBranch className="w-3.5 h-3.5 text-violet-400" />
                    <span>GitHub Repository URL</span>
                  </label>
                  <input
                    type="url"
                    value={githubRepoUrl}
                    onChange={(e) => setGithubRepoUrl(e.target.value)}
                    placeholder="https://github.com/your-team/ai-fusion-app"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${
                      isDark
                        ? 'bg-[#07091A] border-white/15 text-white'
                        : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase mb-1 flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Live Deployed Website URL</span>
                  </label>
                  <input
                    type="url"
                    value={liveDeployUrl}
                    onChange={(e) => setLiveDeployUrl(e.target.value)}
                    placeholder="https://your-project.vercel.app"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs ${
                      isDark
                        ? 'bg-[#07091A] border-white/15 text-white'
                        : 'bg-slate-50 border-slate-300 text-slate-900'
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase mb-1">
                  Short Project Summary &amp; AI Tools Used
                </label>
                <textarea
                  rows={2}
                  value={projectSummary}
                  onChange={(e) => setProjectSummary(e.target.value)}
                  placeholder="Describe the problem solved, tech stack, and how AI tools were utilized..."
                  className={`w-full px-3.5 py-2 rounded-xl border text-xs ${
                    isDark
                      ? 'bg-[#07091A] border-white/15 text-white'
                      : 'bg-slate-50 border-slate-300 text-slate-900'
                  }`}
                />
              </div>

              <label className="flex items-center gap-2.5 text-xs cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={collaboratorAdded}
                  onChange={(e) => setCollaboratorAdded(e.target.checked)}
                  className="rounded accent-amber-400 w-4 h-4"
                />
                <span>
                  We have added{' '}
                  <strong className="font-mono text-amber-400">
                    {EVENT_CONFIG.acmGithubPlaceholder}
                  </strong>{' '}
                  as a GitHub repository collaborator.
                </span>
              </label>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-violet-600 hover:bg-violet-500 text-white transition-all"
                >
                  Save Submission Draft
                </button>

                <button
                  type="button"
                  onClick={handleSendSubmissionViaWhatsApp}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 transition-all"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Send Project Links via WhatsApp</span>
                </button>

                {savedNotice && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Draft saved locally!</span>
                  </span>
                )}
              </div>
            </form>

            {/* Quick Checklist Reference */}
            <div className="pt-4 border-t border-white/10">
              <div className="text-xs font-mono uppercase text-slate-400 mb-2">
                5 Mandatory Final Deliverables ({checkedSubmissionItems.length}/
                {SUBMISSION_CHECKLIST.length} Checked):
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {SUBMISSION_CHECKLIST.map((item) => {
                  const isDone = checkedSubmissionItems.includes(item.number);
                  return (
                    <button
                      key={item.number}
                      type="button"
                      onClick={() => onToggleChecklistItem(item.number)}
                      className={`p-2.5 rounded-xl border text-xs flex items-center gap-2 text-left transition-colors ${
                        isDone
                          ? isDark
                            ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
                            : 'bg-emerald-50 border-emerald-300 text-emerald-900'
                          : isDark
                          ? 'bg-[#07091A] border-white/10 text-slate-300'
                          : 'bg-slate-50 border-slate-200 text-slate-700'
                      }`}
                    >
                      <CheckCircle2
                        className={`w-3.5 h-3.5 shrink-0 ${
                          isDone ? 'text-emerald-400' : 'text-amber-400'
                        }`}
                      />
                      <span className="font-semibold">{item.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {activityLog.length > 0 && (
              <div className="pt-3 border-t border-white/10">
                <div className="text-[11px] font-mono uppercase text-slate-400 mb-1.5">
                  Recent Portal Activity:
                </div>
                <div className="space-y-1 max-h-24 overflow-y-auto text-[11px] font-mono text-slate-400">
                  {activityLog.slice(0, 4).map((entry) => (
                    <div
                      key={entry.id}
                      className="flex items-center justify-between gap-2"
                    >
                      <span className="truncate">{entry.action}</span>
                      <span className="text-slate-500 shrink-0">
                        {entry.timestamp}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

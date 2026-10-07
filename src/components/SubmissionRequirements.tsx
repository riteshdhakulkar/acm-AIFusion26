import React, { useState } from 'react';
import {
  CheckSquare,
  Square,
  GitBranch,
  Copy,
  Check,
  AlertCircle,
} from 'lucide-react';
import { SUBMISSION_CHECKLIST, EVENT_CONFIG } from '../data/eventData';

interface SubmissionRequirementsProps {
  isDark: boolean;
  checkedItems: string[];
  onToggleChecklistItem: (num: string) => void;
}

export const SubmissionRequirements: React.FC<SubmissionRequirementsProps> = ({
  isDark,
  checkedItems,
  onToggleChecklistItem,
}) => {
  const [copiedPlaceholder, setCopiedPlaceholder] = useState(false);

  const handleCopyPlaceholder = () => {
    navigator.clipboard?.writeText(EVENT_CONFIG.acmGithubPlaceholder);
    setCopiedPlaceholder(true);
    setTimeout(() => setCopiedPlaceholder(false), 2000);
  };

  return (
    <section
      id="submission"
      className={`py-20 lg:py-28 border-t bg-circuit-grid ${
        isDark
          ? 'bg-[#060714] border-violet-500/20'
          : 'bg-slate-50 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="text-xs font-mono font-semibold tracking-wider text-amber-400">
            06. MANDATORY DELIVERABLES
          </div>
          <h2
            className={`font-display text-3xl sm:text-5xl font-extrabold tracking-tight ${
              isDark ? 'text-white' : 'text-slate-950'
            }`}
          >
            Submission Requirements
          </h2>
          <p
            className={`text-base sm:text-lg ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            Before final submission at the end of the 4-hour coding window, every team must provide the following 5 deliverables. Click any item below to track your team&apos;s readiness.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: 5-Item Interactive Submission Checklist */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between text-xs font-mono mb-2">
              <span className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                INTERACTIVE TEAM SUBMISSION CHECKLIST
              </span>
              <span className="font-bold text-emerald-400">
                {checkedItems.length} / {SUBMISSION_CHECKLIST.length} Completed
              </span>
            </div>

            {SUBMISSION_CHECKLIST.map((item) => {
              const isChecked = checkedItems.includes(item.number);
              return (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => onToggleChecklistItem(item.number)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all flex items-start gap-4 ${
                    isChecked
                      ? isDark
                        ? 'bg-emerald-950/30 border-emerald-400/50'
                        : 'bg-emerald-50 border-emerald-400'
                      : isDark
                      ? 'bg-[#0C0F26] border-violet-500/25 hover:border-violet-400/50'
                      : 'bg-white border-slate-200 hover:border-violet-400 shadow-xs'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 text-emerald-400" />
                    ) : (
                      <Square className="w-5 h-5 text-violet-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-bold text-amber-400">
                        ITEM {item.number}
                      </span>
                      <span className="font-mono text-[11px] text-slate-400">
                        {isChecked ? 'Ready ✓' : 'Required'}
                      </span>
                    </div>
                    <h3
                      className={`text-base sm:text-lg font-bold mt-0.5 ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-xs sm:text-sm mt-1 leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Highlighted GitHub Collaboration Requirement Card */}
          <div className="lg:col-span-5">
            <div
              className={`rounded-2xl border p-6 sm:p-8 space-y-5 ${
                isDark
                  ? 'bg-gradient-to-b from-[#151136] to-[#0B0E24] border-amber-400/60 shadow-xl shadow-amber-500/5'
                  : 'bg-amber-50/70 border-amber-400 shadow-md'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-amber-400/20 border border-amber-400/40 text-amber-400">
                  <GitBranch className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-amber-400">
                    MANDATORY REPOSITORY ACCESS
                  </span>
                  <h3
                    className={`font-display text-xl sm:text-2xl font-extrabold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    GitHub Collaboration Requirement
                  </h3>
                </div>
              </div>

              <p
                className={`text-sm sm:text-base leading-relaxed font-medium ${
                  isDark ? 'text-slate-200' : 'text-slate-800'
                }`}
              >
                Participants must push their complete source code to GitHub. They should{' '}
                <strong className="text-amber-400">
                  ADD THE OFFICIAL ACM ACCOUNT AS A COLLABORATOR
                </strong>{' '}
                to their GitHub repository as instructed by the organizers.
              </p>

              <div
                className={`p-4 rounded-xl border ${
                  isDark
                    ? 'bg-[#070918] border-violet-500/30 text-slate-200'
                    : 'bg-white border-amber-300 text-slate-800'
                }`}
              >
                <p className="text-xs sm:text-sm leading-relaxed">
                  “After creating your repository, add the official ACM account provided by the organizers as a collaborator so that the organizing team can access and evaluate your repository.”
                </p>
              </div>

              {/* Official Placeholder Box */}
              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold text-sky-400">
                  OFFICIAL ACM GITHUB COLLABORATOR ACCOUNT:
                </label>
                <div
                  className={`p-3.5 rounded-xl border font-mono text-xs sm:text-sm flex items-center justify-between gap-2 ${
                    isDark
                      ? 'bg-black/60 border-amber-400/40 text-amber-300'
                      : 'bg-slate-900 border-slate-800 text-amber-300'
                  }`}
                >
                  <span className="break-all font-bold">
                    {EVENT_CONFIG.acmGithubPlaceholder}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyPlaceholder}
                    aria-label="Copy placeholder"
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white shrink-0 transition-colors"
                  >
                    {copiedPlaceholder ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Quick GitHub Steps */}
              <div
                className={`pt-4 border-t text-xs space-y-2 ${
                  isDark
                    ? 'border-white/10 text-slate-300'
                    : 'border-amber-200 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-1.5 font-mono font-bold text-violet-400">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>HOW TO ADD COLLABORATOR ON GITHUB:</span>
                </div>
                <ol className="list-decimal list-inside space-y-1 font-mono text-[11px] sm:text-xs">
                  <li>Open your project repository on GitHub</li>
                  <li>Go to Settings → Collaborators → Add people</li>
                  <li>Enter the official ACM GitHub username announced on-site</li>
                  <li>Send invitation &amp; include your repo URL in submission</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import {
  CheckSquare,
  Square,
  GitBranch,
  Copy,
  Check,
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
      className={`py-12 lg:py-16 border-t bg-circuit-grid ${
        isDark
          ? 'bg-[#060714] border-violet-500/20'
          : 'bg-slate-50 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-8">
          <div>
            <div className="text-xs font-mono font-semibold tracking-wider text-amber-400">
              04. MANDATORY DELIVERABLES
            </div>
            <h2
              className={`font-display text-2xl sm:text-4xl font-extrabold tracking-tight mt-1 ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              Submission Requirements
            </h2>
          </div>
          <span className="font-mono text-xs font-bold text-emerald-400">
            Checklist: {checkedItems.length} / {SUBMISSION_CHECKLIST.length} Ready
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left Column: Compact 5-Item Checklist */}
          <div className="lg:col-span-7 space-y-2.5">
            {SUBMISSION_CHECKLIST.map((item) => {
              const isChecked = checkedItems.includes(item.number);
              return (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => onToggleChecklistItem(item.number)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                    isChecked
                      ? isDark
                        ? 'bg-emerald-950/30 border-emerald-400/50'
                        : 'bg-emerald-50 border-emerald-400'
                      : isDark
                      ? 'bg-[#0C0F26] border-violet-500/25 hover:border-violet-400/50'
                      : 'bg-white border-slate-200 hover:border-violet-400'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Square className="w-4 h-4 text-violet-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3
                        className={`text-sm sm:text-base font-bold ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {item.number}. {item.title}
                      </h3>
                      <span className="font-mono text-[11px] text-amber-400 shrink-0">
                        {isChecked ? 'Ready ✓' : 'Required'}
                      </span>
                    </div>
                    <p
                      className={`text-xs mt-0.5 ${
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

          {/* Right Column: Compact GitHub Collaboration Requirement Card */}
          <div className="lg:col-span-5">
            <div
              className={`rounded-2xl border p-5 sm:p-6 space-y-4 ${
                isDark
                  ? 'bg-gradient-to-b from-[#151136] to-[#0B0E24] border-amber-400/60'
                  : 'bg-amber-50/70 border-amber-400'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-400/20 border border-amber-400/40 text-amber-400">
                  <GitBranch className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono font-bold text-amber-400">
                    MANDATORY REPOSITORY ACCESS
                  </span>
                  <h3
                    className={`font-display text-lg sm:text-xl font-extrabold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    GitHub Collaborator Rule
                  </h3>
                </div>
              </div>

              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-slate-200' : 'text-slate-800'
                }`}
              >
                Push your complete source code to GitHub and{' '}
                <strong className="text-amber-400">
                  add the official ACM account as a collaborator
                </strong>{' '}
                so judges can inspect and evaluate your repository.
              </p>

              <div className="space-y-1.5">
                <label className="block text-[11px] font-mono font-bold text-sky-400">
                  OFFICIAL ACM GITHUB ACCOUNT:
                </label>
                <div
                  className={`p-3 rounded-xl border font-mono text-xs flex items-center justify-between gap-2 ${
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
                    className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white shrink-0"
                  >
                    {copiedPlaceholder ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import {
  GitBranch,
  CheckSquare,
  Square,
  Copy,
  Check,
  ShieldAlert,
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

  const completedCount = checkedItems.length;

  return (
    <section
      id="submission"
      className={`py-14 lg:py-20 border-t ${
        isDark
          ? 'bg-[#060714] border-white/10'
          : 'bg-slate-50 border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              // 04 · MANDATORY DELIVERABLES &amp; GITHUB PROTOCOL
            </span>
            <h2
              className={`font-display text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Submission Requirements
            </h2>
          </div>

          <div
            className={`px-3.5 py-2 rounded-xl border text-xs font-mono font-semibold ${
              isDark
                ? 'bg-[#0C1029] border-white/10 text-emerald-400'
                : 'bg-white border-slate-200 text-emerald-700'
            }`}
          >
            Checklist Preview: {completedCount}/{SUBMISSION_CHECKLIST.length} Ready
          </div>
        </div>

        {/* Main 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left 7 Cols: Interactive 5-Item Checklist */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {SUBMISSION_CHECKLIST.map((item) => {
              const isChecked = checkedItems.includes(item.number);
              return (
                <div
                  key={item.number}
                  onClick={() => onToggleChecklistItem(item.number)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onToggleChecklistItem(item.number);
                    }
                  }}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer select-none ${
                    item.number === '05' ? 'sm:col-span-2' : ''
                  } ${
                    isChecked
                      ? isDark
                        ? 'bg-[#0F1538] border-emerald-500/40'
                        : 'bg-emerald-50/60 border-emerald-300'
                      : isDark
                      ? 'bg-[#0C1029] border-white/10 hover:border-violet-500/40'
                      : 'bg-white border-slate-200 hover:border-violet-300'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 text-amber-400 shrink-0">
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Square className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300">
                          #{item.number}
                        </span>
                        <h3
                          className={`font-display text-sm font-bold ${
                            isDark ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <p
                        className={`text-xs mt-1 leading-relaxed ${
                          isDark ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right 5 Cols: GitHub Collaborator Requirement Box */}
          <div className="lg:col-span-5">
            <div
              className={`p-5 sm:p-6 rounded-2xl border-l-4 border-l-amber-400 border space-y-4 ${
                isDark
                  ? 'bg-[#0C1029] border-white/10'
                  : 'bg-white border-slate-200 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-amber-400">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Mandatory GitHub Rule</span>
                </span>
                <GitBranch className="w-4 h-4 text-sky-400" />
              </div>

              <h3
                className={`font-display text-lg font-extrabold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Add Official ACM GitHub Collaborator
              </h3>

              <p
                className={`text-xs sm:text-sm leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                All teams must push their complete source code to a GitHub
                repository and invite the official ACM GitHub account as a{' '}
                <strong className={isDark ? 'text-white' : 'text-slate-900'}>
                  Collaborator
                </strong>{' '}
                (Settings → Collaborators → Add People) before final submission.
              </p>

              <div
                className={`p-3 rounded-xl border font-mono text-xs flex items-center justify-between gap-2 ${
                  isDark
                    ? 'bg-[#07091A] border-white/10 text-amber-300'
                    : 'bg-slate-900 border-slate-800 text-amber-300'
                }`}
              >
                <span className="truncate text-[11px]">
                  {EVENT_CONFIG.acmGithubPlaceholder}
                </span>
                <button
                  type="button"
                  onClick={handleCopyPlaceholder}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-white text-[10px] shrink-0 transition-colors"
                >
                  {copiedPlaceholder ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

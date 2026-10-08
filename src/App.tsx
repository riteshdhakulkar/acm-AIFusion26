import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutAndStats } from './components/AboutAndStats';
import { ChallengeDomains } from './components/ChallengeDomains';
import { TimelineSection } from './components/TimelineSection';
import { SubmissionRequirements } from './components/SubmissionRequirements';
import { JudgingAndPresentation } from './components/JudgingAndPresentation';
import { PrizesAndWhy } from './components/PrizesAndWhy';
import {
  RegistrationAndUpdates,
  TeamRegistrationRecord,
} from './components/RegistrationAndUpdates';
import { FAQAndOrganizers } from './components/FAQAndOrganizers';
import {
  ParticipantDashboardModal,
  ActivityLogItem,
} from './components/ParticipantDashboardModal';
import { Footer } from './components/Footer';
import { OFFICIAL_POSTER_DATA_URL } from './assets/officialPosterData';
import { CHALLENGE_DOMAINS, EVENT_CONFIG } from './data/eventData';
import { X } from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [posterPopupOpen, setPosterPopupOpen] = useState<boolean>(true);
  const [dashboardModalOpen, setDashboardModalOpen] = useState<boolean>(false);
  const [showWaPopup, setShowWaPopup] = useState<boolean>(true);

  const activePosterUrl = OFFICIAL_POSTER_DATA_URL;

  const [selectedDomainId, setSelectedDomainId] = useState<string>(() => {
    try {
      return (
        localStorage.getItem('aifusion_domain') || CHALLENGE_DOMAINS[0].id
      );
    } catch {
      return CHALLENGE_DOMAINS[0].id;
    }
  });

  const [checkedSubmissionItems, setCheckedSubmissionItems] = useState<
    string[]
  >(() => {
    try {
      const saved = localStorage.getItem('aifusion_checklist');
      return saved ? JSON.parse(saved) : ['01', '02'];
    } catch {
      return ['01', '02'];
    }
  });

  const [teamRecord, setTeamRecord] = useState<TeamRegistrationRecord | null>(
    () => {
      try {
        const saved = localStorage.getItem('aifusion_team');
        return saved ? JSON.parse(saved) : null;
      } catch {
        return null;
      }
    }
  );

  const [activityLog, setActivityLog] = useState<ActivityLogItem[]>(() => {
    try {
      const saved = localStorage.getItem('aifusion_activity');
      return saved
        ? JSON.parse(saved)
        : [
            {
              id: 'init-1',
              action: 'Visited National Level AI-FUSION 2026 Portal',
              timestamp: new Date().toLocaleTimeString('en-IN', {
                hour: '2-digit',
                minute: '2-digit',
              }),
            },
          ];
    } catch {
      return [];
    }
  });

  const logActivity = (action: string) => {
    const newEntry: ActivityLogItem = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
      action,
      timestamp: new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
      }),
    };
    setActivityLog((prev) => {
      const next = [newEntry, ...prev].slice(0, 15);
      try {
        localStorage.setItem('aifusion_activity', JSON.stringify(next));
      } catch {
        // Ignore storage quota errors
      }
      return next;
    });
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light-mode');
    } else {
      root.classList.remove('dark');
      root.classList.add('light-mode');
    }
  }, [isDark]);

  const handleSelectDomain = (domainId: string) => {
    setSelectedDomainId(domainId);
    try {
      localStorage.setItem('aifusion_domain', domainId);
    } catch {
      // Ignore storage error
    }
    const found = CHALLENGE_DOMAINS.find((d) => d.id === domainId);
    if (found) {
      logActivity(`Bookmarked Challenge Domain: ${found.title}`);
    }
  };

  const handleToggleChecklistItem = (num: string) => {
    setCheckedSubmissionItems((prev) => {
      const exists = prev.includes(num);
      const next = exists ? prev.filter((item) => item !== num) : [...prev, num];
      try {
        localStorage.setItem('aifusion_checklist', JSON.stringify(next));
      } catch {
        // Ignore storage error
      }
      logActivity(
        `${exists ? 'Unchecked' : 'Completed'} Submission Deliverable #${num}`
      );
      return next;
    });
  };

  const handleSaveTeamRegistration = (record: TeamRegistrationRecord | null) => {
    setTeamRecord(record);
    try {
      if (record) {
        localStorage.setItem('aifusion_team', JSON.stringify(record));
        logActivity(`Saved Team Profile: ${record.teamName}`);
      } else {
        localStorage.removeItem('aifusion_team');
        logActivity('Signed out of Team Profile');
      }
    } catch {
      // Ignore storage error
    }
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isDark
          ? 'bg-[#060714] text-slate-100'
          : 'bg-slate-50 text-slate-900'
      }`}
    >
      <Navbar
        isDark={isDark}
        onToggleTheme={() => {
          setIsDark((d) => !d);
          logActivity(`Switched to ${isDark ? 'Light' : 'Dark'} theme`);
        }}
        onOpenDashboard={() => setDashboardModalOpen(true)}
        participantName={teamRecord?.teamName || null}
      />

      <main>
        <Hero isDark={isDark} />

        <AboutAndStats isDark={isDark} />

        <TimelineSection isDark={isDark} />

        <ChallengeDomains isDark={isDark} />

        <SubmissionRequirements
          isDark={isDark}
          checkedItems={checkedSubmissionItems}
          onToggleChecklistItem={handleToggleChecklistItem}
        />

        <JudgingAndPresentation isDark={isDark} />

        <PrizesAndWhy isDark={isDark} />

        <RegistrationAndUpdates
          isDark={isDark}
          selectedDomainId={selectedDomainId}
          onSaveTeamRegistration={handleSaveTeamRegistration}
        />

        <FAQAndOrganizers
          isDark={isDark}
          onLogInquiry={(subject) => logActivity(subject)}
        />
      </main>

      <Footer isDark={isDark} />

      {/* Automatic Event Poster Popup on Website Open with One Cross Button */}
      {posterPopupOpen && activePosterUrl && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Official AI-FUSION 2026 Poster"
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
          onClick={() => setPosterPopupOpen(false)}
        >
          <div
            className="relative max-h-[92vh] max-w-[92vw] sm:max-w-lg w-auto flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPosterPopupOpen(false)}
              aria-label="Close poster popup"
              className="absolute -top-3 -right-3 z-20 w-9 h-9 rounded-full bg-slate-950 border-2 border-white/80 text-white hover:bg-rose-600 hover:border-rose-300 shadow-xl flex items-center justify-center transition-transform hover:scale-105"
            >
              <X className="w-5 h-5" />
            </button>

            <img
              src={activePosterUrl}
              alt="Official Poster — National Level AI-FUSION 2026"
              className="max-h-[88vh] w-auto rounded-xl border border-sky-400/50 shadow-2xl object-contain block select-none"
            />
          </div>
        </div>
      )}

      {/* Global Small Floating WhatsApp Logo Button + Dismissible "Join the Group" Popup */}
      <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5">
        {showWaPopup && (
          <div
            className={`flex items-center gap-2 pl-3.5 pr-2 py-2 rounded-xl border shadow-xl backdrop-blur-md ${
              isDark
                ? 'bg-[#0B0F26]/95 border-[#25D366]/50 text-white'
                : 'bg-white/95 border-[#25D366]/60 text-slate-900'
            }`}
          >
            <a
              href={EVENT_CONFIG.whatsappGroupUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-extrabold tracking-wide hover:text-[#25D366] transition-colors whitespace-nowrap"
            >
              Join the Group
            </a>
            <button
              type="button"
              onClick={() => setShowWaPopup(false)}
              aria-label="Close WhatsApp popup"
              className={`p-1 rounded-lg transition-colors ${
                isDark
                  ? 'text-slate-400 hover:text-white hover:bg-white/10'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        <a
          href={EVENT_CONFIG.whatsappGroupUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Join Official WhatsApp Group"
          aria-label="Join Official AI-FUSION 2026 WhatsApp Group"
          className="w-12 h-12 rounded-full bg-[#060714]/90 border border-[#25D366]/60 shadow-lg shadow-[#25D366]/25 flex items-center justify-center transition-transform duration-150 hover:scale-110 active:scale-95 shrink-0"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-7 h-7 fill-[#25D366]"
            aria-hidden="true"
          >
            <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.461 3.492 1.336 5.016L2 22l5.156-1.352a9.927 9.927 0 0 0 4.875 1.281h.004c5.512 0 9.965-4.453 9.965-9.969 0-2.664-1.035-5.168-2.918-7.051A9.907 9.907 0 0 0 12.031 2zm0 18.281h-.004a8.268 8.268 0 0 1-4.219-1.156l-.301-.18-3.141.824.84-3.063-.199-.313a8.257 8.257 0 0 1-1.277-4.426c0-4.578 3.727-8.305 8.305-8.305 2.219 0 4.301.863 5.867 2.434a8.248 8.248 0 0 1 2.43 5.871c0 4.582-3.723 8.314-8.301 8.314zm4.555-6.219c-.25-.125-1.477-.73-1.707-.813-.227-.082-.395-.125-.559.125-.168.25-.645.813-.789.98-.145.164-.289.188-.539.063-.25-.125-1.055-.387-2.008-1.238-.742-.66-1.242-1.48-1.387-1.73-.145-.25-.016-.383.109-.508.113-.113.25-.293.375-.438.125-.145.168-.25.25-.414.082-.168.043-.313-.02-.438-.063-.125-.559-1.352-.766-1.852-.203-.484-.41-.418-.559-.426l-.477-.008c-.168 0-.438.063-.668.313-.227.25-.875.855-.875 2.082s.895 2.418 1.02 2.582c.125.168 1.762 2.691 4.27 3.773.598.258 1.063.41 1.426.527.598.191 1.145.164 1.574.102.48-.07 1.477-.605 1.688-1.188.207-.586.207-1.086.145-1.188-.063-.105-.227-.168-.477-.293z" />
          </svg>
        </a>
      </div>

      <ParticipantDashboardModal
        isOpen={dashboardModalOpen}
        onClose={() => setDashboardModalOpen(false)}
        isDark={isDark}
        teamRecord={teamRecord}
        onUpdateTeamRecord={handleSaveTeamRegistration}
        selectedDomainId={selectedDomainId}
        onSelectDomain={handleSelectDomain}
        checkedSubmissionItems={checkedSubmissionItems}
        onToggleChecklistItem={handleToggleChecklistItem}
        activityLog={activityLog}
      />
    </div>
  );
}


import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutAndStats } from './components/AboutAndStats';
import { ChallengeDomains } from './components/ChallengeDomains';
import { TimelineSection } from './components/TimelineSection';
import { SubmissionRequirements } from './components/SubmissionRequirements';
import { JudgingAndPresentation } from './components/JudgingAndPresentation';
import { PrizesAndWhy } from './components/PrizesAndWhy';
import { PosterSection } from './components/PosterSection';
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
import { CHALLENGE_DOMAINS } from './data/eventData';

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [posterModalOpen, setPosterModalOpen] = useState<boolean>(false);
  const [dashboardModalOpen, setDashboardModalOpen] = useState<boolean>(false);

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
        <Hero
          isDark={isDark}
          onOpenPosterModal={() => {
            setPosterModalOpen(true);
            logActivity('Viewed Official Event Poster in Fullscreen');
          }}
        />

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

        <PosterSection
          isDark={isDark}
          isModalOpen={posterModalOpen}
          onOpenModal={() => {
            setPosterModalOpen(true);
            logActivity('Opened Official Event Poster Lightbox');
          }}
          onCloseModal={() => setPosterModalOpen(false)}
        />

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


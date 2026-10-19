import React, { useState } from 'react';
import {
  ChevronDown,
  Phone,
  MapPin,
  Users,
  GraduationCap,
  Send,
  CheckCircle2,
  Building2,
  MessageSquare,
  ExternalLink,
} from 'lucide-react';
import {
  FAQ_ITEMS,
  FACULTY_ORGANIZERS,
  STUDENT_CONTACTS,
  EVENT_CONFIG,
} from '../data/eventData';
import { PceAcmLogo, PceAcmWLogo } from './BrandLogos';

interface FAQAndOrganizersProps {
  isDark: boolean;
  onLogInquiry: (subject: string) => void;
}

export const FAQAndOrganizers: React.FC<FAQAndOrganizersProps> = ({
  isDark,
  onLogInquiry,
}) => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('q1');
  const [activeCategory, setActiveCategory] = useState<
    'all' | 'general' | 'technical' | 'submission' | 'judging'
  >('all');

  // Inquiry Form State
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderPhone, setSenderPhone] = useState('');
  const [selectedCoordinator, setSelectedCoordinator] = useState(
    STUDENT_CONTACTS[0].cleanPhone
  );
  const [inquiryTopic, setInquiryTopic] = useState('Registration & Team Size');
  const [inquiryMessage, setInquiryMessage] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const filteredFaqs =
    activeCategory === 'all'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === activeCategory);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderName.trim() || !inquiryMessage.trim()) return;
    setInquirySubmitted(true);
    onLogInquiry(`Sent WhatsApp Inquiry: ${inquiryTopic}`);

    // Format and open WhatsApp message to selected student coordinator
    const cleanTargetPhone = selectedCoordinator.replace(/[^0-9]/g, '');
    const text =
      `*AI-FUSION 2026 — PARTICIPANT INQUIRY*\n` +
      `• *Name:* ${senderName.trim()}\n` +
      (senderPhone.trim() ? `• *Phone:* ${senderPhone.trim()}\n` : '') +
      (senderEmail.trim() ? `• *Email:* ${senderEmail.trim()}\n` : '') +
      `• *Topic:* ${inquiryTopic}\n` +
      `• *Query:* ${inquiryMessage.trim()}`;

    const waUrl = `https://wa.me/${cleanTargetPhone}?text=${encodeURIComponent(
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
      className={`border-t ${
        isDark
          ? 'bg-[#060714] border-white/10'
          : 'bg-slate-50 border-slate-200/80'
      }`}
    >
      {/* PART A: 12-Item FAQ Accordion */}
      <section id="faq" className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              <span>// 08 · FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2
              className={`font-display text-2xl sm:text-4xl font-extrabold tracking-tight mt-2 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Everything You Need to Know
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1.5">
            {(
              [
                { id: 'all', label: 'All (12)' },
                { id: 'general', label: 'General' },
                { id: 'technical', label: 'AI & Coding' },
                { id: 'submission', label: 'Submission & GitHub' },
                { id: 'judging', label: 'Judging' },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold transition-all border ${
                  activeCategory === tab.id
                    ? 'bg-amber-400 text-slate-950 border-amber-400'
                    : isDark
                    ? 'bg-[#0C1029] text-slate-300 border-white/10 hover:bg-white/5'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all self-start ${
                  isOpen
                    ? isDark
                      ? 'bg-[#0F1436] border-violet-500/45 shadow-lg shadow-violet-950/20'
                      : 'bg-white border-violet-300 shadow-sm'
                    : isDark
                    ? 'bg-[#0B0F26]/90 border-white/10 hover:border-white/20'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-3"
                >
                  <span
                    className={`font-display text-sm sm:text-base font-bold ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'rotate-180 text-amber-400'
                        : isDark
                        ? 'text-slate-400'
                        : 'text-slate-500'
                    }`}
                  />
                </button>
                {isOpen && (
                  <div
                    className={`px-5 pb-4 pt-1 text-xs sm:text-sm leading-relaxed border-t ${
                      isDark
                        ? 'border-white/10 text-slate-300'
                        : 'border-slate-100 text-slate-600'
                    }`}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* PART B: Organizing Committee, Venue & Contact Coordinators */}
      <section
        id="contact"
        className={`py-16 lg:py-24 border-t ${
          isDark
            ? 'bg-[#080B1E] border-white/10'
            : 'bg-white border-slate-200/80'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              <span>// 09 · ORGANIZING COMMITTEE &amp; CONTACT</span>
            </div>
            <h2
              className={`font-display text-2xl sm:text-4xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}
            >
              Institutional Leadership &amp; Student Coordinators
            </h2>
            <p
              className={`text-sm sm:text-base ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Organized by the{' '}
              <strong className={isDark ? 'text-white' : 'text-slate-900'}>
                Department of Computer Technology
              </strong>{' '}
              in association with the{' '}
              <strong className="text-sky-400">PCE ACM Student Chapter</strong>{' '}
              and{' '}
              <strong className="text-violet-400">
                PCE ACM-W Student Chapter
              </strong>{' '}
              at Priyadarshini College of Engineering, Nagpur.
            </p>
          </div>

          {/* Faculty Organizers & Patrons Row */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-amber-400" />
              <h3
                className={`font-display text-lg font-extrabold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Faculty Organizers &amp; Institutional Leadership
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {FACULTY_ORGANIZERS.map((person) => (
                <div
                  key={person.name}
                  className={`p-5 rounded-2xl border flex flex-col justify-between ${
                    isDark
                      ? 'bg-[#0C1029] border-white/10 hover:border-violet-500/40'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-md text-[10px] font-mono uppercase tracking-wider bg-amber-400/15 text-amber-300 border border-amber-400/30 mb-3">
                      {person.role}
                    </span>
                    <h4
                      className={`font-display text-base font-extrabold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {person.name}
                    </h4>
                  </div>
                  <p
                    className={`text-xs mt-2 ${
                      isDark ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {person.department}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 3-Column Split: Student Coordinators + Campus Venue + Quick Inquiry */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 5 Cols: Student Coordinators */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-sky-400" />
                <h3
                  className={`font-display text-lg font-extrabold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Student Coordinators (Direct Call)
                </h3>
              </div>

              <div className="space-y-3">
                {STUDENT_CONTACTS.map((student) => (
                  <div
                    key={student.name}
                    className={`p-4 rounded-2xl border flex items-center justify-between gap-3 transition-all ${
                      isDark
                        ? 'bg-[#0C1029] border-white/10 hover:border-sky-400/40'
                        : 'bg-slate-50 border-slate-200 hover:border-sky-300'
                    }`}
                  >
                    <div>
                      <div
                        className={`font-display text-sm sm:text-base font-bold ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {student.name}
                      </div>
                      <div
                        className={`text-xs font-mono mt-0.5 ${
                          isDark ? 'text-slate-400' : 'text-slate-600'
                        }`}
                      >
                        {student.phone}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={`https://wa.me/${student.cleanPhone.replace(
                          /[^0-9]/g,
                          ''
                        )}?text=${encodeURIComponent(
                          `Hi ${student.name}, I have a query regarding National Level AI-FUSION 2026.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`WhatsApp ${student.name}`}
                        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-bold bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
                        <span>WhatsApp</span>
                      </a>

                      <a
                        href={`tel:${student.cleanPhone}`}
                        className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-mono font-bold transition-colors ${
                          isDark
                            ? 'bg-sky-500/15 text-sky-300 border border-sky-400/30 hover:bg-sky-500/25'
                            : 'bg-sky-100 text-sky-900 hover:bg-sky-200'
                        }`}
                      >
                        <Phone className="w-3.5 h-3.5" />
                        <span>Call</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right 7 Cols: Venue Card + Interactive Helpdesk Form */}
            <div className="lg:col-span-7 space-y-6">
              {/* Official Venue Card */}
              <div
                className={`p-6 rounded-2xl border overflow-hidden relative ${
                  isDark
                    ? 'bg-[#0C1029] border-violet-500/30'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>ON-SITE COMPETITION VENUE</span>
                    </div>
                    <h4
                      className={`font-display text-lg font-extrabold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      CT Department (First Floor), Rajiv Gandhi IT Complex
                    </h4>
                  </div>

                  <a
                    href={EVENT_CONFIG.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 transition-colors shrink-0 self-start sm:self-auto shadow-sm"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-4">
                  <div className="sm:col-span-8 space-y-2">
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      CT Department (First Floor), Rajiv Gandhi IT Complex,
                      Priyadarshini College of Engineering, Hingna Road, Digdoh
                      Hills, Nagpur, Maharashtra — 440019
                    </p>
                    <div className="pt-1 flex items-center gap-3">
                      <PceAcmLogo className="w-8 h-8" />
                      <PceAcmWLogo className="w-10 h-8" />
                      <span
                        className={`text-xs font-mono ${
                          isDark ? 'text-slate-400' : 'text-slate-600'
                        }`}
                      >
                        Offline Reporting: 10:00 AM · Problem Statements: 11:00 AM · 22 Oct 2026
                      </span>
                    </div>
                  </div>

                  <div className="sm:col-span-4">
                    <div className="rounded-xl overflow-hidden border border-white/10 h-24 sm:h-28 relative">
                      <img
                        src={EVENT_CONFIG.GeneratedAssets.campusLab}
                        alt="CT Department (First Floor), Rajiv Gandhi IT Complex at PCE Nagpur"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).style.display =
                            'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#060714]/80 via-transparent to-transparent flex items-end p-2">
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono text-white font-semibold">
                          <Building2 className="w-3 h-3 text-amber-400" />
                          <span>Rajiv Gandhi IT Complex · 1st Floor</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Exact Google Maps Interactive Embed */}
                <div className="rounded-xl overflow-hidden border border-white/15 h-64 sm:h-72 w-full relative shadow-inner">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.239305832655!2d79.00159627503362!3d21.103023480564886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4955ae1d75a6d%3A0x639a1ab160553db3!2sPriyadarshini%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1791989419109!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Priyadarshini College of Engineering Google Map"
                    className="w-full h-full border-0 block"
                  />
                </div>
              </div>

              {/* Quick Question / Coordinator Inquiry Box */}
              <div
                className={`p-6 rounded-2xl border ${
                  isDark
                    ? 'bg-[#0C1029] border-white/10'
                    : 'bg-slate-50 border-slate-200'
                }`}
              >
                <h4
                  className={`font-display text-base sm:text-lg font-extrabold mb-1 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Have a Question for the Organizing Team?
                </h4>
                <p
                  className={`text-xs mb-4 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}
                >
                  Send your query directly to a Student Coordinator on WhatsApp
                  with one click.
                </p>

                <form onSubmit={handleInquirySubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="Your Name *"
                      className={`px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none ${
                        isDark
                          ? 'bg-[#07091A] border-white/15 text-white placeholder:text-slate-500 focus:border-amber-400'
                          : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-violet-600'
                      }`}
                    />
                    <input
                      type="tel"
                      value={senderPhone}
                      onChange={(e) => setSenderPhone(e.target.value)}
                      placeholder="Your WhatsApp / Phone Number"
                      className={`px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none ${
                        isDark
                          ? 'bg-[#07091A] border-white/15 text-white placeholder:text-slate-500 focus:border-amber-400'
                          : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-violet-600'
                      }`}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <select
                      value={selectedCoordinator}
                      onChange={(e) => setSelectedCoordinator(e.target.value)}
                      aria-label="Select Student Coordinator"
                      className={`px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none ${
                        isDark
                          ? 'bg-[#07091A] border-white/15 text-white focus:border-amber-400'
                          : 'bg-white border-slate-300 text-slate-900 focus:border-violet-600'
                      }`}
                    >
                      {STUDENT_CONTACTS.map((c) => (
                        <option key={c.cleanPhone} value={c.cleanPhone}>
                          Send to: {c.name} ({c.phone})
                        </option>
                      ))}
                    </select>

                    <select
                      value={inquiryTopic}
                      onChange={(e) => setInquiryTopic(e.target.value)}
                      aria-label="Inquiry Topic"
                      className={`px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none ${
                        isDark
                          ? 'bg-[#07091A] border-white/15 text-white focus:border-amber-400'
                          : 'bg-white border-slate-300 text-slate-900 focus:border-violet-600'
                      }`}
                    >
                      <option value="Registration & Team Size">
                        Topic: Registration &amp; Team Size
                      </option>
                      <option value="On-Site Lab & Bring Your Own Laptop">
                        Topic: Lab Systems / Laptop Rules
                      </option>
                      <option value="GitHub Collaborator & Deployment">
                        Topic: GitHub &amp; Deployment
                      </option>
                      <option value="Other Competition Query">
                        Topic: Other Competition Query
                      </option>
                    </select>
                  </div>

                  {/* Keep optional email state available */}
                  <input
                    type="hidden"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                  />

                  <textarea
                    rows={2}
                    required
                    value={inquiryMessage}
                    onChange={(e) => setInquiryMessage(e.target.value)}
                    placeholder="Type your question regarding registration, laptops, internet access, or reporting time... *"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs focus:outline-none ${
                      isDark
                        ? 'bg-[#07091A] border-white/15 text-white placeholder:text-slate-500 focus:border-amber-400'
                        : 'bg-white border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-violet-600'
                    }`}
                  />

                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 transition-all shadow-md shadow-emerald-500/20"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Query on WhatsApp</span>
                    </button>

                    {inquirySubmitted && (
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Opening WhatsApp chat with coordinator!</span>
                      </span>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import React, { useState } from 'react';
import {
  ChevronDown,
  Phone,
  MapPin,
  CheckCircle2,
  Search,
  MessageSquare,
} from 'lucide-react';
import {
  FAQ_ITEMS,
  FACULTY_ORGANIZERS,
  STUDENT_CONTACTS,
  EVENT_CONFIG,
} from '../data/eventData';

interface FAQAndOrganizersProps {
  isDark: boolean;
  onLogInquiry: (subject: string) => void;
}

export const FAQAndOrganizers: React.FC<FAQAndOrganizersProps> = ({
  isDark,
  onLogInquiry,
}) => {
  const [openFaqId, setOpenFaqId] = useState<string>('q1');
  const [faqCategory, setFaqCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Contact Inquiry Form State (WhatsApp Only)
  const [inqName, setInqName] = useState('');
  const [inqPhone, setInqPhone] = useState('');
  const [selectedCoordinatorPhone, setSelectedCoordinatorPhone] =
    useState<string>('918552035048'); // Default: Ritesh Dhakulkar
  const [inqMessage, setInqMessage] = useState('');
  const [inqError, setInqError] = useState<string | null>(null);
  const [inqSubmitted, setInqSubmitted] = useState<{
    recipientName: string;
    whatsappUrl: string;
  } | null>(null);

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCat = faqCategory === 'all' || item.category === faqCategory;
    const matchesSearch =
      !searchQuery.trim() ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInqError(null);
    if (!inqName.trim() || !inqMessage.trim()) {
      setInqError('Please enter your name and message.');
      return;
    }

    const coordinator =
      STUDENT_CONTACTS.find(
        (c) => c.cleanPhone.replace('+', '') === selectedCoordinatorPhone
      ) || STUDENT_CONTACTS[0];

    const formattedText = [
      `*AI-FUSION 2026 — Event Inquiry*`,
      `• *Name:* ${inqName.trim()}`,
      inqPhone.trim() ? `• *Phone:* ${inqPhone.trim()}` : '',
      `• *Question:* ${inqMessage.trim()}`,
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/${selectedCoordinatorPhone}?text=${encodeURIComponent(
      formattedText
    )}`;

    onLogInquiry(`Inquiry sent to ${coordinator.name} via WhatsApp`);

    setInqSubmitted({
      recipientName: `${coordinator.name} (${coordinator.phone})`,
      whatsappUrl,
    });

    const link = document.createElement('a');
    link.href = whatsappUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* FAQ ACCORDION SECTION */}
      <section
        id="faq"
        className={`py-20 lg:py-28 border-t bg-circuit-grid ${
          isDark
            ? 'bg-[#060714] border-violet-500/20'
            : 'bg-slate-50 border-slate-200'
        }`}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
            <div className="text-xs font-mono font-semibold tracking-wider text-amber-400">
              15. FREQUENTLY ASKED QUESTIONS
            </div>
            <h2
              className={`font-display text-3xl sm:text-5xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              Everything You Need to Know
            </h2>
          </div>

          {/* Interactive Filter Tabs + Search Input */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div
              className={`flex items-center gap-1 p-1 rounded-xl border overflow-x-auto max-w-full ${
                isDark
                  ? 'bg-[#0C0F26] border-white/10'
                  : 'bg-white border-slate-200'
              }`}
            >
              {[
                { id: 'all', label: 'All (12)' },
                { id: 'general', label: 'General' },
                { id: 'technical', label: 'AI & Coding' },
                { id: 'submission', label: 'GitHub & Deploy' },
                { id: 'judging', label: 'Judging' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFaqCategory(tab.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors whitespace-nowrap ${
                    faqCategory === tab.id
                      ? 'bg-violet-600 text-white'
                      : isDark
                      ? 'text-slate-400 hover:text-white'
                      : 'text-slate-600 hover:text-slate-950'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions..."
                className={`w-full pl-9 pr-3.5 py-2 rounded-xl border text-xs sm:text-sm focus:outline-none focus:border-violet-400 ${
                  isDark
                    ? 'bg-[#0C0F26] border-white/15 text-white'
                    : 'bg-white border-slate-200 text-slate-900'
                }`}
              />
            </div>
          </div>

          {/* 12 Official FAQs Accordion */}
          <div className="space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl border overflow-hidden transition-colors ${
                    isOpen
                      ? isDark
                        ? 'bg-[#0E1230] border-violet-400/50'
                        : 'bg-white border-violet-400 shadow-sm'
                      : isDark
                      ? 'bg-[#0B0E24] border-white/10 hover:border-white/20'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                    aria-expanded={isOpen}
                    className="w-full px-5 sm:px-6 py-4 text-left flex items-center justify-between gap-4"
                  >
                    <span
                      className={`font-display text-base sm:text-lg font-bold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      className={`px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base leading-relaxed border-t ${
                        isDark
                          ? 'border-white/5 text-slate-300'
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
        </div>
      </section>

      {/* EVENT ORGANIZERS, CONTACT & VENUE MAP SECTION */}
      <section
        id="contact"
        className={`py-20 lg:py-28 border-t ${
          isDark
            ? 'bg-[#080B20] border-violet-500/20'
            : 'bg-white border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* PART 1: FACULTY & INSTITUTIONAL LEADERSHIP */}
          <div>
            <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
              <div className="text-xs font-mono font-semibold tracking-wider text-sky-400">
                16. ORGANIZING COMMITTEE &amp; PATRONS
              </div>
              <h2
                className={`font-display text-3xl sm:text-5xl font-extrabold tracking-tight ${
                  isDark ? 'text-white' : 'text-slate-950'
                }`}
              >
                Event Organizers
              </h2>
              <p
                className={`text-sm sm:text-base ${
                  isDark ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                Department of Computer Technology · Priyadarshini College of Engineering, Nagpur
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {FACULTY_ORGANIZERS.map((person) => (
                <div
                  key={person.name}
                  className={`p-5 rounded-2xl border text-center flex flex-col justify-between ${
                    isDark
                      ? 'bg-[#0C0F26] border-violet-500/30'
                      : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div>
                    <div className="w-10 h-10 mx-auto rounded-full bg-violet-500/15 border border-violet-400/30 flex items-center justify-center font-mono text-xs font-bold text-amber-400 mb-3">
                      PCE
                    </div>
                    <h3
                      className={`font-display text-base sm:text-lg font-extrabold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {person.name}
                    </h3>
                    <p className="text-xs sm:text-sm font-mono font-bold text-amber-400 mt-1">
                      {person.role}
                    </p>
                  </div>
                  <p
                    className={`text-[11px] mt-3 pt-2 border-t ${
                      isDark
                        ? 'border-white/10 text-slate-400'
                        : 'border-slate-200 text-slate-500'
                    }`}
                  >
                    {person.department}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PART 2: STUDENT COORDINATORS CONTACT (5 Coordinators including Ritesh Dhakulkar) */}
          <div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-mono font-bold text-amber-400">
                  ANY QUERIES? CONTACT US
                </span>
                <h3
                  className={`font-display text-2xl sm:text-3xl font-extrabold mt-1 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Student Coordinators
                </h3>
              </div>
              <p
                className={`text-xs font-mono ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Call or WhatsApp any coordinator directly for instant assistance
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {STUDENT_CONTACTS.map((contact) => {
                const waDigits = contact.cleanPhone.replace('+', '');
                return (
                  <div
                    key={contact.name}
                    className={`p-5 rounded-2xl border flex flex-col justify-between gap-4 transition-transform hover:-translate-y-0.5 ${
                      isDark
                        ? 'bg-[#0C0F26] border-violet-500/25 hover:border-amber-400/60'
                        : 'bg-slate-50 border-slate-200 hover:border-violet-400'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <h4
                          className={`font-display text-base font-bold truncate ${
                            isDark ? 'text-white' : 'text-slate-900'
                          }`}
                        >
                          {contact.name}
                        </h4>
                        <p className="text-[11px] font-mono text-slate-400">
                          {contact.role}
                        </p>
                        <p className="font-mono tabular-nums text-xs sm:text-sm font-bold text-amber-400 mt-1">
                          {contact.phone}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/10">
                      <a
                        href={`tel:${contact.cleanPhone}`}
                        className={`inline-flex items-center justify-center gap-1 py-1.5 px-2.5 rounded-lg text-xs font-mono font-bold border transition-colors whitespace-nowrap ${
                          isDark
                            ? 'border-white/15 text-slate-200 hover:bg-white/10'
                            : 'border-slate-300 text-slate-800 hover:bg-slate-200/70'
                        }`}
                      >
                        <Phone className="w-3 h-3 text-amber-400" />
                        <span>Call</span>
                      </a>
                      <a
                        href={`https://wa.me/${waDigits}?text=${encodeURIComponent(
                          `Hi ${contact.name}, I have a query regarding National Level AI-FUSION 2026.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1 py-1.5 px-2.5 rounded-lg text-xs font-mono font-bold bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 hover:bg-emerald-500/30 transition-colors whitespace-nowrap"
                      >
                        <MessageSquare className="w-3 h-3" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* PART 3: VENUE SHOWCASE, INTERACTIVE MAP & INQUIRY FORM */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Venue Card & Map */}
            <div
              className={`lg:col-span-7 rounded-2xl border overflow-hidden ${
                isDark
                  ? 'bg-[#0C0F26] border-violet-500/30'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2">
                <div className="p-6 space-y-3 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-sky-400">
                      <MapPin className="w-4 h-4" />
                      <span>ON-SITE VENUE LOCATION</span>
                    </div>
                    <h3
                      className={`font-display text-xl font-extrabold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      Computer Laboratory, IT Building
                    </h3>
                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}
                    >
                      Computer Technology Department,
                      <br />
                      Priyadarshini College of Engineering,
                      <br />
                      Hingna Road, Digdoh Hills, Nagpur, Maharashtra 440019
                    </p>
                  </div>

                  <div className="pt-3">
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Priyadarshini+College+of+Engineering+Nagpur"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 hover:underline"
                    >
                      <span>Open in Google Maps ↗</span>
                    </a>
                  </div>
                </div>

                <div className="relative min-h-[220px] bg-slate-900">
                  <img
                    src={EVENT_CONFIG.GeneratedAssets.campusLab}
                    alt="Computer Laboratory, IT Building, Priyadarshini College of Engineering, Nagpur"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>

              {/* Embedded Interactive Google Map Frame for Priyadarshini College of Engineering, Nagpur */}
              <div className="border-t border-white/10 h-64 w-full">
                <iframe
                  title="Priyadarshini College of Engineering, Nagpur Google Map"
                  src="https://maps.google.com/maps?q=Priyadarshini+College+of+Engineering,+Hingna+Road,+Nagpur&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Direct Coordinator Inquiry Form (WhatsApp Only) */}
            <div
              className={`lg:col-span-5 p-6 sm:p-8 rounded-2xl border ${
                isDark
                  ? 'bg-[#0C0F26] border-violet-500/30'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <h3
                className={`font-display text-xl font-extrabold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Send an Event Inquiry on WhatsApp
              </h3>
              <p
                className={`text-xs sm:text-sm mt-1 mb-4 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Your message is sent directly to the selected{' '}
                <strong className="text-emerald-400">
                  Student Coordinator&apos;s WhatsApp
                </strong>{' '}
                for instant reply.
              </p>

              {inqError && (
                <div className="mb-4 p-3 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs">
                  {inqError}
                </div>
              )}

              {inqSubmitted && (
                <div className="mb-4 p-4 rounded-xl bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-xs space-y-2">
                  <div className="flex items-start gap-2 font-bold">
                    <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                    <span>
                      WhatsApp chat opened for {inqSubmitted.recipientName}!
                    </span>
                  </div>
                  <div className="pt-1">
                    <a
                      href={inqSubmitted.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg font-bold bg-emerald-500 text-slate-950"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Click here if WhatsApp did not open ↗</span>
                    </a>
                  </div>
                </div>
              )}

              <form onSubmit={handleInquirySubmit} noValidate className="space-y-4">
                {/* Choose Coordinator Recipient */}
                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-400 mb-1">
                    SELECT STUDENT COORDINATOR (WHATSAPP)
                  </label>
                  <select
                    value={selectedCoordinatorPhone}
                    onChange={(e) => setSelectedCoordinatorPhone(e.target.value)}
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs sm:text-sm font-medium ${
                      isDark
                        ? 'bg-[#07091A] border-white/15 text-white'
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

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-400 mb-1">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    value={inqName}
                    onChange={(e) => setInqName(e.target.value)}
                    placeholder="Enter your full name"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm ${
                      isDark
                        ? 'bg-[#07091A] border-white/15 text-white'
                        : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-400 mb-1">
                    YOUR WHATSAPP / PHONE NUMBER (OPTIONAL)
                  </label>
                  <input
                    type="tel"
                    value={inqPhone}
                    onChange={(e) => setInqPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm ${
                      isDark
                        ? 'bg-[#07091A] border-white/15 text-white'
                        : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-semibold text-slate-400 mb-1">
                    QUESTION / MESSAGE *
                  </label>
                  <textarea
                    rows={3}
                    value={inqMessage}
                    onChange={(e) => setInqMessage(e.target.value)}
                    placeholder="Ask about registration, team size, on-site lab rules..."
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-sm ${
                      isDark
                        ? 'bg-[#07091A] border-white/15 text-white'
                        : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-xs sm:text-sm font-extrabold bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Inquiry on WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

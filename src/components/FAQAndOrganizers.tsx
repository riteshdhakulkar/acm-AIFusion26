import React, { useState } from 'react';
import {
  ChevronDown,
  Phone,
  MapPin,
  CheckCircle2,
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

  const essentialFaqs = FAQ_ITEMS.slice(0, 6);

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
      {/* COMPACT FAQ ACCORDION SECTION */}
      <section
        id="faq"
        className={`py-10 lg:py-14 border-t bg-circuit-grid ${
          isDark
            ? 'bg-[#060714] border-violet-500/20'
            : 'bg-slate-50 border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <div className="text-xs font-mono font-semibold tracking-wider text-amber-400">
              08. FREQUENTLY ASKED QUESTIONS
            </div>
            <h2
              className={`font-display text-2xl sm:text-3xl font-extrabold tracking-tight mt-0.5 ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              Quick Answers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {essentialFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className={`rounded-xl border overflow-hidden transition-colors self-start ${
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
                    className="w-full px-4 py-3 text-left flex items-center justify-between gap-3"
                  >
                    <span
                      className={`font-display text-xs sm:text-sm font-bold ${
                        isDark ? 'text-white' : 'text-slate-900'
                      }`}
                    >
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div
                      className={`px-4 pb-3.5 pt-1 text-xs leading-relaxed border-t ${
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
        className={`py-10 lg:py-14 border-t ${
          isDark
            ? 'bg-[#080B20] border-violet-500/20'
            : 'bg-white border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* PART 1: ULTRA-COMPACT EVENT ORGANIZERS STRIP */}
          <div
            className={`p-4 sm:p-5 rounded-2xl border ${
              isDark
                ? 'bg-[#0C0F26]/90 border-violet-500/25'
                : 'bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-mono font-bold text-sky-400">
                  09. ORGANIZING COMMITTEE &amp; PATRONS
                </span>
                <span className="text-slate-500">·</span>
                <h2
                  className={`font-display text-sm sm:text-base font-extrabold ${
                    isDark ? 'text-white' : 'text-slate-950'
                  }`}
                >
                  Event Organizers (PCE Nagpur)
                </h2>
              </div>
              <span
                className={`text-[11px] font-mono ${
                  isDark ? 'text-slate-400' : 'text-slate-500'
                }`}
              >
                Dept. of Computer Technology
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {FACULTY_ORGANIZERS.map((person) => (
                <div
                  key={person.name}
                  className={`px-3 py-2 rounded-xl border ${
                    isDark
                      ? 'bg-[#080A1C] border-white/10'
                      : 'bg-white border-slate-200'
                  }`}
                >
                  <p
                    className={`font-display text-xs sm:text-sm font-bold leading-snug ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    {person.name}
                  </p>
                  <p className="text-[11px] font-mono font-semibold text-amber-400 leading-tight mt-0.5">
                    {person.role}
                  </p>
                  <p
                    className={`text-[10px] truncate mt-0.5 ${
                      isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {person.department}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PART 2: COMPACT STUDENT COORDINATORS ROW */}
          <div>
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div>
                <span className="text-[11px] font-mono font-bold text-amber-400">
                  DIRECT WHATSAPP &amp; CALL SUPPORT
                </span>
                <h3
                  className={`font-display text-lg sm:text-xl font-extrabold ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  Student Coordinators
                </h3>
              </div>
              <a
                href={EVENT_CONFIG.whatsappGroupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-bold bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 hover:bg-emerald-500/30 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Join Official WhatsApp Group ↗</span>
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
              {STUDENT_CONTACTS.map((contact) => {
                const waDigits = contact.cleanPhone.replace('+', '');
                return (
                  <div
                    key={contact.name}
                    className={`p-3 rounded-xl border flex flex-col justify-between gap-2 ${
                      isDark
                        ? 'bg-[#0C0F26] border-violet-500/25'
                        : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div>
                      <h4
                        className={`font-display text-xs sm:text-sm font-bold truncate ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}
                      >
                        {contact.name}
                      </h4>
                      <p className="font-mono tabular-nums text-[11px] sm:text-xs font-bold text-amber-400 mt-0.5">
                        {contact.phone}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5 pt-1.5 border-t border-white/10">
                      <a
                        href={`tel:${contact.cleanPhone}`}
                        className={`inline-flex items-center justify-center gap-1 py-1 px-1.5 rounded-lg text-[11px] font-mono font-bold border transition-colors ${
                          isDark
                            ? 'border-white/15 text-slate-200 hover:bg-white/10'
                            : 'border-slate-300 text-slate-800 hover:bg-slate-200/70'
                        }`}
                      >
                        <Phone className="w-2.5 h-2.5 text-amber-400" />
                        <span>Call</span>
                      </a>
                      <a
                        href={`https://wa.me/${waDigits}?text=${encodeURIComponent(
                          `Hi ${contact.name}, I have a query regarding National Level AI-FUSION 2026.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1 py-1 px-1.5 rounded-lg text-[11px] font-mono font-bold bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 hover:bg-emerald-500/30 transition-colors"
                      >
                        <MessageSquare className="w-2.5 h-2.5" />
                        <span>Chat</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* PART 3: VENUE MAP & WHATSAPP INQUIRY FORM */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            {/* Venue Card & Embedded Google Map */}
            <div
              className={`lg:col-span-7 rounded-2xl border overflow-hidden ${
                isDark
                  ? 'bg-[#0C0F26] border-violet-500/30'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-sky-400">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>ON-SITE VENUE LOCATION</span>
                  </div>
                  <h3
                    className={`font-display text-base sm:text-lg font-extrabold mt-0.5 ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}
                  >
                    Computer Laboratory, IT Building — PCE Nagpur
                  </h3>
                  <p
                    className={`text-xs mt-0.5 ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    Priyadarshini College of Engineering, Hingna Road, Digdoh Hills, Nagpur 440019
                  </p>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Priyadarshini+College+of+Engineering+Nagpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono font-bold bg-amber-400 text-slate-950 shrink-0 self-start sm:self-center"
                >
                  <span>Open in Maps ↗</span>
                </a>
              </div>

              <div className="border-t border-white/10 h-60 w-full">
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
              className={`lg:col-span-5 p-4 sm:p-5 rounded-2xl border ${
                isDark
                  ? 'bg-[#0C0F26] border-violet-500/30'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <h3
                className={`font-display text-base sm:text-lg font-extrabold ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}
              >
                Send an Event Inquiry on WhatsApp
              </h3>
              <p
                className={`text-xs mt-0.5 mb-3 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}
              >
                Message any Student Coordinator directly on WhatsApp.
              </p>

              {inqError && (
                <div className="mb-3 p-2.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-rose-300 text-xs">
                  {inqError}
                </div>
              )}

              {inqSubmitted && (
                <div className="mb-3 p-2.5 rounded-xl bg-emerald-500/15 border border-emerald-400/40 text-emerald-300 text-xs flex items-center justify-between gap-2">
                  <span className="flex items-center gap-1.5 font-bold">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    Opened for {inqSubmitted.recipientName}
                  </span>
                  <a
                    href={inqSubmitted.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline font-bold shrink-0"
                  >
                    Re-open ↗
                  </a>
                </div>
              )}

              <form onSubmit={handleInquirySubmit} noValidate className="space-y-2.5">
                <div>
                  <label className="block text-[10px] font-mono font-semibold text-slate-400 mb-1">
                    COORDINATOR (WHATSAPP)
                  </label>
                  <select
                    value={selectedCoordinatorPhone}
                    onChange={(e) => setSelectedCoordinatorPhone(e.target.value)}
                    className={`w-full px-3 py-2 rounded-xl border text-xs font-medium ${
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

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[10px] font-mono font-semibold text-slate-400 mb-1">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      value={inqName}
                      onChange={(e) => setInqName(e.target.value)}
                      placeholder="Full name"
                      className={`w-full px-3 py-2 rounded-xl border text-xs ${
                        isDark
                          ? 'bg-[#07091A] border-white/15 text-white'
                          : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono font-semibold text-slate-400 mb-1">
                      PHONE (OPTIONAL)
                    </label>
                    <input
                      type="tel"
                      value={inqPhone}
                      onChange={(e) => setInqPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className={`w-full px-3 py-2 rounded-xl border text-xs ${
                        isDark
                          ? 'bg-[#07091A] border-white/15 text-white'
                          : 'bg-white border-slate-300 text-slate-900'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-semibold text-slate-400 mb-1">
                    QUESTION / MESSAGE *
                  </label>
                  <textarea
                    rows={2}
                    value={inqMessage}
                    onChange={(e) => setInqMessage(e.target.value)}
                    placeholder="Ask about registration, team size, rules..."
                    className={`w-full px-3 py-2 rounded-xl border text-xs ${
                      isDark
                        ? 'bg-[#07091A] border-white/15 text-white'
                        : 'bg-white border-slate-300 text-slate-900'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-extrabold bg-emerald-500 hover:bg-emerald-400 text-slate-950 transition-colors"
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

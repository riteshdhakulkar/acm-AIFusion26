import React, { useState } from 'react';
import {
  Maximize2,
  ExternalLink,
  X,
  Download,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';
import { EVENT_CONFIG } from '../data/eventData';
import { useOfficialPosterDataUrl } from './BrandLogos';

interface PosterSectionProps {
  isDark: boolean;
  isModalOpen: boolean;
  onOpenModal: () => void;
  onCloseModal: () => void;
}

export const PosterSection: React.FC<PosterSectionProps> = ({
  isDark,
  isModalOpen,
  onOpenModal,
  onCloseModal,
}) => {
  const posterDataUrl = useOfficialPosterDataUrl();
  const [zoom, setZoom] = useState(1);

  return (
    <section
      id="poster"
      className={`py-12 lg:py-16 border-t ${
        isDark
          ? 'bg-[#080B20] border-violet-500/20'
          : 'bg-white border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Details & Actions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-mono font-semibold tracking-wider text-amber-400">
              12. OFFICIAL MEDIA &amp; BROCHURE
            </div>

            <h2
              className={`font-display text-3xl sm:text-5xl font-extrabold tracking-tight ${
                isDark ? 'text-white' : 'text-slate-950'
              }`}
            >
              OFFICIAL EVENT POSTER
            </h2>

            <p
              className={`text-base sm:text-lg leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              Inspect or share the official poster for{' '}
              <strong className={isDark ? 'text-white' : 'text-slate-900'}>
                NATIONAL LEVEL AI-FUSION 2026
              </strong>{' '}
              presented by the Department of Computer Technology, Priyadarshini College of Engineering, Nagpur in association with PCE ACM Student Chapter &amp; PCE ACM-W Student Chapter.
            </p>

            <div
              className={`p-5 rounded-2xl border space-y-2 text-xs sm:text-sm ${
                isDark
                  ? 'bg-[#0C0F26] border-violet-500/30 text-slate-300'
                  : 'bg-slate-50 border-slate-200 text-slate-700'
              }`}
            >
              <div className="flex justify-between py-1 border-b border-white/10">
                <span>Event Date:</span>
                <strong className="text-amber-400">22nd October 2026</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-white/10">
                <span>Registration Deadline:</span>
                <strong className="text-sky-400">15th October 2026</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-white/10">
                <span>Entry Fee &amp; Max Team:</span>
                <strong>₹100 / Member · Max 3 Members</strong>
              </div>
              <div className="flex justify-between py-1">
                <span>Accommodation Note:</span>
                <span>On-site Day Event (No accommodation provided)</span>
              </div>
            </div>

            {/* Required Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenModal}
                className={`inline-flex items-center gap-2 px-6 py-4 rounded-xl text-sm font-extrabold border transition-colors whitespace-nowrap ${
                  isDark
                    ? 'border-violet-400/50 bg-violet-950/60 text-white hover:bg-violet-900/70'
                    : 'border-violet-300 bg-violet-50 text-violet-950 hover:bg-violet-100'
                }`}
              >
                <Maximize2 className="w-4 h-4 text-sky-400" />
                <span>VIEW FULL POSTER</span>
              </button>

              <a
                href={EVENT_CONFIG.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl text-sm font-extrabold bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-lg shadow-amber-500/20 transition-colors whitespace-nowrap"
              >
                <span>REGISTER NOW</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              {posterDataUrl && (
                <a
                  href={posterDataUrl}
                  download="AI-FUSION-2026-Official-Poster.png"
                  className={`inline-flex items-center gap-2 px-4 py-4 rounded-xl text-xs font-mono font-bold border transition-colors whitespace-nowrap ${
                    isDark
                      ? 'border-white/15 text-slate-300 hover:bg-white/5'
                      : 'border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Download className="w-4 h-4" />
                  <span>Download Poster</span>
                </a>
              )}
            </div>
          </div>

          {/* Right Column: Framed Glassmorphism Card with Uncropped Official Poster Image */}
          <div className="lg:col-span-6 flex justify-center">
            <div
              className={`p-3 sm:p-5 rounded-3xl border backdrop-blur-xl max-w-md w-full transition-transform duration-200 hover:scale-[1.01] ${
                isDark
                  ? 'bg-white/[0.04] border-violet-400/40 shadow-2xl shadow-violet-950/60'
                  : 'bg-slate-100/80 border-slate-300 shadow-xl'
              }`}
            >
              <div
                onClick={onOpenModal}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpenModal();
                  }
                }}
                className="relative rounded-2xl overflow-hidden cursor-pointer group bg-[#07051A]"
              >
                {posterDataUrl ? (
                  <img
                    src={posterDataUrl}
                    alt="Official Event Poster for National Level AI-FUSION 2026 — Build With AI at Priyadarshini College of Engineering, Nagpur"
                    referrerPolicy="no-referrer"
                    className="w-full h-auto block select-none"
                  />
                ) : (
                  <div className="aspect-[1080/1520] w-full flex items-center justify-center text-sm font-mono text-violet-300">
                    Rendering Official Poster...
                  </div>
                )}

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400 text-slate-950 font-extrabold text-sm shadow-lg">
                    <Maximize2 className="w-4 h-4" />
                    <span>Click to View Fullscreen</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Official Event Poster Fullscreen View"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col"
          onClick={onCloseModal}
        >
          {/* Top Lightbox Controls */}
          <div
            className="px-4 sm:px-8 py-4 border-b border-white/10 flex items-center justify-between bg-[#060714]/90"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-white font-display font-bold text-sm sm:text-base">
              NATIONAL LEVEL AI-FUSION 2026 — Official Event Poster
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setZoom((z) => Math.max(0.75, z - 0.25))}
                aria-label="Zoom out"
                className="p-2 rounded-lg border border-white/15 text-slate-200 hover:bg-white/10"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-slate-300 px-2">
                {Math.round(zoom * 100)}%
              </span>
              <button
                type="button"
                onClick={() => setZoom((z) => Math.min(2, z + 0.25))}
                aria-label="Zoom in"
                className="p-2 rounded-lg border border-white/15 text-slate-200 hover:bg-white/10"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              {posterDataUrl && (
                <a
                  href={posterDataUrl}
                  download="AI-FUSION-2026-Official-Poster.png"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold bg-amber-400 text-slate-950"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </a>
              )}
              <button
                type="button"
                onClick={onCloseModal}
                aria-label="Close fullscreen poster"
                className="p-2 rounded-lg border border-white/15 text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Scrollable Poster Canvas Container */}
          <div
            className="flex-1 overflow-auto p-4 sm:p-8 flex items-start justify-center"
            onClick={onCloseModal}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="transition-transform duration-150 origin-top"
              style={{ transform: `scale(${zoom})` }}
            >
              {posterDataUrl && (
                <img
                  src={posterDataUrl}
                  alt="Official Event Poster - National Level AI-FUSION 2026"
                  referrerPolicy="no-referrer"
                  className="max-h-[82vh] w-auto rounded-xl border border-violet-400/40 shadow-2xl"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

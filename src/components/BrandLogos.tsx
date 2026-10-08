import React from 'react';
import { OFFICIAL_POSTER_DATA_URL } from '../assets/officialPosterData';

export const PceAcmLogo: React.FC<{ className?: string }> = ({ className = 'w-12 h-12' }) => (
  <svg
    viewBox="0 0 200 200"
    className={className}
    role="img"
    aria-label="PCE ACM Student Chapter Logo"
  >
    <defs>
      <linearGradient id="acmDiamondGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#62B5E5" />
        <stop offset="55%" stopColor="#3B97D3" />
        <stop offset="100%" stopColor="#2678B2" />
      </linearGradient>
      <linearGradient id="pceBannerGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#4F97D1" />
        <stop offset="100%" stopColor="#5CA2DC" />
      </linearGradient>
    </defs>
    <polygon
      points="100,10 190,100 100,190 10,100"
      fill="url(#acmDiamondGrad)"
      stroke="#256B9E"
      strokeWidth="2"
    />
    <circle
      cx="100"
      cy="96"
      r="56"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="7"
    />
    <text
      x="100"
      y="98"
      textAnchor="middle"
      fill="#FFFFFF"
      fontFamily="Plus Jakarta Sans, Arial, sans-serif"
      fontWeight="800"
      fontSize="44"
      letterSpacing="-1.5"
    >
      acm
    </text>
    <text
      x="108"
      y="121"
      textAnchor="middle"
      fill="#FFFFFF"
      fontFamily="Plus Jakarta Sans, Arial, sans-serif"
      fontWeight="700"
      fontSize="13.5"
    >
      Student
    </text>
    <text
      x="108"
      y="136"
      textAnchor="middle"
      fill="#FFFFFF"
      fontFamily="Plus Jakarta Sans, Arial, sans-serif"
      fontWeight="700"
      fontSize="13.5"
    >
      Chapter
    </text>
    <path
      d="M 62,155 L 136,155 L 146,168 L 136,181 L 62,181 Z"
      fill="url(#pceBannerGrad)"
      stroke="#2B6DA0"
      strokeWidth="1.5"
    />
    <text
      x="101"
      y="174"
      textAnchor="middle"
      fill="#FFFFFF"
      fontFamily="Plus Jakarta Sans, Arial, sans-serif"
      fontWeight="800"
      fontSize="21"
      letterSpacing="1"
    >
      PCE
    </text>
  </svg>
);

export const PceAcmWLogo: React.FC<{ className?: string }> = ({ className = 'w-16 h-12' }) => (
  <svg
    viewBox="0 0 260 180"
    className={className}
    role="img"
    aria-label="PCE ACM-W Student Chapter Logo"
  >
    <path
      d="M 22,42 L 106,42 C 114,42 126,52 130,58 C 126,64 114,74 106,74 L 22,74 L 36,58 Z"
      fill="#2EA8E6"
    />
    <text
      x="78"
      y="66"
      textAnchor="middle"
      fill="#FFFFFF"
      fontFamily="Space Grotesk, Georgia, serif"
      fontWeight="700"
      fontSize="26"
      letterSpacing="1"
    >
      PCE
    </text>
    <polygon
      points="135,70 180,25 215,60 198,60 180,42 152,70"
      fill="#38B2EE"
    />
    <polygon
      points="206,68 223,68 252,97 215,134 198,134 235,97"
      fill="#0052E0"
    />
    <polygon
      points="142,136 159,136 180,157 201,136 218,136 180,174"
      fill="#38B2EE"
    />
    <text
      x="16"
      y="116"
      fill="#38B2EE"
      fontFamily="Plus Jakarta Sans, Arial, sans-serif"
      fontWeight="800"
      fontSize="50"
      letterSpacing="-1.5"
    >
      acm-
    </text>
    <text
      x="152"
      y="116"
      fill="#0052E0"
      fontFamily="Plus Jakarta Sans, Arial, sans-serif"
      fontWeight="800"
      fontSize="50"
    >
      w
    </text>
    <text
      x="20"
      y="138"
      fill="#0284C7"
      fontFamily="Plus Jakarta Sans, Arial, sans-serif"
      fontWeight="800"
      fontSize="12.5"
      letterSpacing="0.6"
    >
      STUDENT CHAPTER
    </text>
  </svg>
);

export function useOfficialPosterDataUrl(): string {
  return OFFICIAL_POSTER_DATA_URL;
}

import React, { useEffect, useState } from 'react';

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
    {/* Diamond Base */}
    <polygon
      points="100,10 190,100 100,190 10,100"
      fill="url(#acmDiamondGrad)"
      stroke="#256B9E"
      strokeWidth="2"
    />
    {/* Inner White Circle Ring */}
    <circle
      cx="100"
      cy="96"
      r="56"
      fill="none"
      stroke="#FFFFFF"
      strokeWidth="7"
    />
    {/* acm text */}
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
    {/* Student Chapter text */}
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
    {/* Bottom PCE Ribbon Banner */}
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
    {/* Top Left PCE Chevron Ribbon */}
    <path
      d="M 22,42 L 106,42 C 114,42 126,52 130,58 C 126,64 114,74 106,74 L 22,74 L 36,58 Z"
      fill="#2EA8E6"
    />
    <text
      x="78"
      y="66"
      textAnchor="middle"
      fill="#FFFFFF"
      fontFamily="Syne, Georgia, serif"
      fontWeight="800"
      fontSize="26"
      letterSpacing="1"
    >
      PCE
    </text>

    {/* Top Sky-Blue Diamond Corner */}
    <polygon
      points="135,70 180,25 215,60 198,60 180,42 152,70"
      fill="#38B2EE"
    />
    {/* Right Royal-Blue Diamond Corner */}
    <polygon
      points="206,68 223,68 252,97 215,134 198,134 235,97"
      fill="#0052E0"
    />
    {/* Bottom Sky-Blue Diamond Corner */}
    <polygon
      points="142,136 159,136 180,157 201,136 218,136 180,174"
      fill="#38B2EE"
    />

    {/* acm- text */}
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
    {/* w text */}
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

    {/* STUDENT CHAPTER subtitle */}
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

/**
 * Generates a high-resolution, non-distorted PNG data URL of the official
 * NATIONAL LEVEL AI-FUSION 2026 poster matching the uploaded official poster 1:1.
 */
export function useOfficialPosterDataUrl(): string {
  const [dataUrl, setDataUrl] = useState<string>('');

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const W = 1080;
    const H = 1520;
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 1. Deep Cosmic Navy & Violet Background
    const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
    bgGrad.addColorStop(0, '#07051A');
    bgGrad.addColorStop(0.28, '#140836');
    bgGrad.addColorStop(0.55, '#0B0624');
    bgGrad.addColorStop(0.85, '#120931');
    bgGrad.addColorStop(1, '#060414');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // Nebula glows
    const drawGlow = (cx: number, cy: number, r: number, color: string) => {
      const g = ctx.createRadialGradient(cx, cy, 10, cx, cy, r);
      g.addColorStop(0, color);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(cx - r, cy - r, r * 2, r * 2);
    };
    drawGlow(W * 0.5, 390, 460, 'rgba(139, 92, 246, 0.34)');
    drawGlow(W * 0.18, 310, 300, 'rgba(168, 85, 247, 0.25)');
    drawGlow(W * 0.82, 620, 340, 'rgba(124, 58, 237, 0.28)');
    drawGlow(W * 0.25, 1050, 320, 'rgba(59, 130, 246, 0.16)');

    // Subtle Circuit / Constellation Network Lines
    ctx.strokeStyle = 'rgba(167, 139, 250, 0.16)';
    ctx.lineWidth = 1.2;
    const nodes = [
      [80, 220], [210, 260], [150, 360], [60, 440], [260, 430],
      [960, 230], [850, 280], [930, 380], [1010, 470], [820, 450],
      [120, 740], [280, 780], [920, 760], [800, 810],
    ];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i][0] - nodes[j][0];
        const dy = nodes[i][1] - nodes[j][1];
        const dist = Math.hypot(dx, dy);
        if (dist < 220) {
          ctx.beginPath();
          ctx.moveTo(nodes[i][0], nodes[i][1]);
          ctx.lineTo(nodes[j][0], nodes[j][1]);
          ctx.stroke();
        }
      }
    }
    nodes.forEach(([nx, ny]) => {
      ctx.fillStyle = '#C4B5FD';
      ctx.beginPath();
      ctx.arc(nx, ny, 3, 0, Math.PI * 2);
      ctx.fill();
    });

    // Helper for Chamfered / Tech Box
    const drawTechBox = (
      x: number,
      y: number,
      w: number,
      h: number,
      cut = 18,
      strokeColor = '#8B5CF6',
      fillColor = 'rgba(14, 10, 38, 0.86)'
    ) => {
      ctx.beginPath();
      ctx.moveTo(x + cut, y);
      ctx.lineTo(x + w - cut, y);
      ctx.lineTo(x + w, y + cut);
      ctx.lineTo(x + w, y + h - cut);
      ctx.lineTo(x + w - cut, y + h);
      ctx.lineTo(x + cut, y + h);
      ctx.lineTo(x, y + h - cut);
      ctx.lineTo(x, y + cut);
      ctx.closePath();
      ctx.fillStyle = fillColor;
      ctx.fill();
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 2;
      ctx.stroke();
    };

    // 2. Top Institution Header
    ctx.fillStyle = '#E2E8F0';
    ctx.font = '600 17px "Plus Jakarta Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText("LOKMANYA TILAK JANKALYAN SHIKSHAN SANSTHA'S", W / 2, 36);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '800 29px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('PRIYADARSHINI COLLEGE OF ENGINEERING, NAGPUR', W / 2, 72);

    ctx.fillStyle = '#CBD5E1';
    ctx.font = '500 13.5px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(
      '(AN AUTONOMOUS INSTITUTE AFFILIATED TO RASHTRASANT TUKDOJI MAHARAJ NAGPUR UNIVERSITY)',
      W / 2,
      96
    );

    // Top-left LTJSS Emblem & Top-right PCE Emblem badges
    ctx.save();
    ctx.beginPath();
    ctx.arc(72, 58, 40, 0, Math.PI * 2);
    ctx.fillStyle = '#FFFBEB';
    ctx.fill();
    ctx.strokeStyle = '#D97706';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#92400E';
    ctx.font = '800 12px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('LTJSS', 72, 55);
    ctx.font = '700 10px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('NAGPUR', 72, 70);
    ctx.restore();

    ctx.save();
    ctx.beginPath();
    ctx.arc(W - 72, 58, 40, 0, Math.PI * 2);
    ctx.fillStyle = '#0284C7';
    ctx.fill();
    ctx.strokeStyle = '#38BDF8';
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '800 14px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('PCE', W - 72, 55);
    ctx.font = '700 10px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('NAGPUR', W - 72, 70);
    ctx.restore();

    // 3. PCE ACM & PCE ACM-W Chapter Lockup
    // Left ACM Diamond mini graphic
    ctx.save();
    ctx.translate(238, 152);
    ctx.beginPath();
    ctx.moveTo(0, -42);
    ctx.lineTo(42, 0);
    ctx.lineTo(0, 42);
    ctx.lineTo(-42, 0);
    ctx.closePath();
    ctx.fillStyle = '#3898D4';
    ctx.fill();
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(0, -2, 24, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '800 16px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('acm', 0, 2);
    ctx.fillStyle = '#2563EB';
    ctx.fillRect(-18, 22, 36, 14);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '800 10px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('PCE', 0, 33);
    ctx.restore();

    // Right ACM-W mini graphic
    ctx.save();
    ctx.translate(835, 150);
    ctx.fillStyle = '#38BDF8';
    ctx.font = '800 24px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('acm-w', 0, 4);
    ctx.fillStyle = '#7DD3FC';
    ctx.font = '700 10px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('STUDENT CHAPTER · PCE', 0, 20);
    ctx.restore();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '700 22px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('PCE  ACM  STUDENT  CHAPTER', W / 2, 134);
    ctx.font = '700 20px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('&', W / 2, 158);
    ctx.font = '700 22px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('PCE  ACM-W  STUDENT  CHAPTER', W / 2, 182);

    ctx.fillStyle = '#FBBF24';
    ctx.font = '700 16px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('✦   P R E S E N T S   ✦', W / 2, 212);

    // Horizontal decorative divider
    ctx.strokeStyle = 'rgba(251, 191, 36, 0.5)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(190, 207);
    ctx.lineTo(410, 207);
    ctx.moveTo(670, 207);
    ctx.lineTo(890, 207);
    ctx.stroke();

    // 4. </> Code Icon + NATIONAL LEVEL AI-FUSION
    ctx.fillStyle = '#E879F9';
    ctx.font = '800 54px "JetBrains Mono", monospace';
    ctx.fillText('</>', W / 2, 272);

    // Gold Gradient for Main Title
    const goldGrad = ctx.createLinearGradient(0, 290, 0, 515);
    goldGrad.addColorStop(0, '#FFF6B7');
    goldGrad.addColorStop(0.45, '#F5C451');
    goldGrad.addColorStop(0.8, '#D99B26');
    goldGrad.addColorStop(1, '#FDE68A');

    ctx.fillStyle = goldGrad;
    ctx.font = '800 54px "Syne", Georgia, serif';
    ctx.fillText('NATIONAL LEVEL', W / 2, 342);

    ctx.font = '800 112px "Syne", Georgia, serif';
    ctx.fillText('AI-FUSION', W / 2, 448);

    ctx.font = '800 42px "Syne", Georgia, serif';
    ctx.fillText('BUILD WITH AI', W / 2, 502);

    // Secondary Tagline
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'italic 700 33px Georgia, serif';
    ctx.fillText('Turn Your Ideas Into Impact', W / 2, 558);

    // 5. Prize Pool Card (Left) & Futuristic Code Laptop (Right)
    drawTechBox(56, 600, 540, 150, 22, '#A855F7', 'rgba(18, 12, 48, 0.9)');

    // Gold Trophy Icon
    ctx.save();
    ctx.translate(135, 675);
    ctx.fillStyle = '#F59E0B';
    ctx.beginPath();
    ctx.arc(0, -18, 30, 0, Math.PI, false);
    ctx.fill();
    ctx.fillRect(-28, -36, 56, 20);
    ctx.fillRect(-8, 10, 16, 24);
    ctx.fillRect(-26, 32, 52, 10);
    ctx.strokeStyle = '#FDE68A';
    ctx.lineWidth = 4;
    ctx.strokeRect(-28, -36, 56, 20);
    ctx.restore();

    ctx.textAlign = 'left';
    ctx.fillStyle = '#FBBF24';
    ctx.font = '700 28px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('PRIZE POOL', 225, 652);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '800 66px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('₹10,000', 225, 722);

    // Futuristic Laptop Illustration on Right
    ctx.save();
    drawTechBox(640, 585, 380, 175, 16, '#6366F1', 'rgba(15, 23, 42, 0.92)');
    // Code lines inside laptop screen
    const codeColors = ['#F472B6', '#38BDF8', '#A78BFA', '#34D399', '#FBBF24'];
    for (let r = 0; r < 8; r++) {
      ctx.fillStyle = codeColors[r % codeColors.length];
      ctx.fillRect(665, 608 + r * 16, 65 + ((r * 37) % 110), 7);
      ctx.fillStyle = 'rgba(148, 163, 184, 0.45)';
      ctx.fillRect(800, 608 + r * 16, 90, 7);
    }
    // Floating </> badge on right
    drawTechBox(905, 610, 95, 55, 8, '#A855F7', 'rgba(88, 28, 135, 0.85)');
    ctx.textAlign = 'center';
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '700 24px "JetBrains Mono", monospace';
    ctx.fillText('</>', 952, 646);
    ctx.restore();

    // 6. Four Key Metadata Columns Box
    drawTechBox(42, 785, W - 84, 152, 20, '#F59E0B', 'rgba(12, 9, 34, 0.92)');
    const cols = [
      { title: 'DATE', val: '22nd October 2026', icon: '📅' },
      { title: 'REGISTRATION FEES', val: '₹ 100 per member', icon: '₹' },
      { title: 'REGISTRATION DEADLINE', val: '15th October 2026', icon: '🕒' },
      { title: 'MAXIMUM TEAM SIZE', val: '3 Members', icon: '👥' },
    ];
    const colW = (W - 84) / 4;
    cols.forEach((c, idx) => {
      const cx = 42 + colW * idx + colW / 2;
      if (idx > 0) {
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.45)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(42 + colW * idx, 808);
        ctx.lineTo(42 + colW * idx, 916);
        ctx.stroke();
      }
      ctx.textAlign = 'center';
      ctx.fillStyle = '#F59E0B';
      ctx.font = '800 28px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(c.icon, cx, 832);

      ctx.fillStyle = '#FBBF24';
      ctx.font = '700 15.5px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(c.title, cx, 875);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'italic 700 21px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(c.val, cx, 908);
    });

    // 7. Three Middle Information Panels: WHY PARTICIPATE? | WHAT YOU SUBMIT | SCAN TO REGISTER
    // Panel 1: WHY PARTICIPATE?
    drawTechBox(42, 962, 345, 265, 16, '#8B5CF6', 'rgba(14, 10, 38, 0.9)');
    drawTechBox(62, 976, 305, 42, 10, '#A855F7', 'rgba(46, 16, 101, 0.85)');
    ctx.textAlign = 'center';
    ctx.fillStyle = '#FBBF24';
    ctx.font = '700 18px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('★  WHY PARTICIPATE?', 214, 1003);

    const whyList = [
      'Build innovative solutions using AI',
      'Explore Generative AI & modern AI tools',
      'Showcase your creativity & innovation',
      'Win exciting prizes & recognition',
      'Network and collaborate with AI enthusiasts',
    ];
    ctx.textAlign = 'left';
    whyList.forEach((item, i) => {
      const iy = 1048 + i * 34;
      ctx.fillStyle = '#C084FC';
      ctx.beginPath();
      ctx.arc(68, iy - 5, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '500 14.5px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(item, 86, iy);
    });

    // Panel 2: WHAT YOU SUBMIT
    drawTechBox(404, 962, 330, 265, 16, '#8B5CF6', 'rgba(14, 10, 38, 0.9)');
    drawTechBox(424, 976, 290, 42, 10, '#A855F7', 'rgba(46, 16, 101, 0.85)');
    ctx.textAlign = 'center';
    ctx.fillStyle = '#FBBF24';
    ctx.font = '700 18px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('</>  WHAT YOU SUBMIT', 569, 1003);

    const submitLines = [
      ['🌐', 'A live deployed AI-powered', 'website/web application'],
      ['🐙', 'GitHub repository with', 'source code'],
      ['🕒', '4–5 minute presentation / demo', '+ 2 minute Q&A session'],
    ];
    ctx.textAlign = 'left';
    submitLines.forEach(([ic, l1, l2], i) => {
      const sy = 1054 + i * 56;
      ctx.fillStyle = '#FBBF24';
      ctx.font = '700 20px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(ic, 428, sy + 8);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '600 15px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(l1, 464, sy);
      ctx.fillStyle = '#CBD5E1';
      ctx.font = '500 14.5px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(l2, 464, sy + 21);
    });

    // Panel 3: SCAN TO REGISTER
    drawTechBox(752, 962, 286, 265, 16, '#F59E0B', 'rgba(14, 10, 38, 0.9)');
    ctx.textAlign = 'left';
    ctx.fillStyle = '#FBBF24';
    ctx.font = '700 16px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('SCAN TO', 835, 994);
    ctx.fillText('REGISTER', 835, 1015);

    // Crisp QR Matrix representation
    const qrX = 805;
    const qrY = 1032;
    const qrSize = 180;
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(qrX, qrY, qrSize, qrSize);
    ctx.fillStyle = '#0F172A';
    const cells = 21;
    const cellS = (qrSize - 16) / cells;
    for (let r = 0; r < cells; r++) {
      for (let c = 0; c < cells; c++) {
        const isFinder =
          (r < 7 && c < 7) ||
          (r < 7 && c >= cells - 7) ||
          (r >= cells - 7 && c < 7);
        const isCenterLogo = r >= 8 && r <= 12 && c >= 8 && c <= 12;
        if (isCenterLogo) continue;
        if (isFinder) {
          const lr = r >= cells - 7 ? r - (cells - 7) : r;
          const lc = c >= cells - 7 ? c - (cells - 7) : c;
          if (
            lr === 0 ||
            lr === 6 ||
            lc === 0 ||
            lc === 6 ||
            (lr >= 2 && lr <= 4 && lc >= 2 && lc <= 4)
          ) {
            ctx.fillRect(qrX + 8 + c * cellS, qrY + 8 + r * cellS, cellS - 0.5, cellS - 0.5);
          }
        } else if ((r * 19 + c * 31 + r * c) % 3 === 0) {
          ctx.fillRect(qrX + 8 + c * cellS, qrY + 8 + r * cellS, cellS - 0.5, cellS - 0.5);
        }
      }
    }
    ctx.fillStyle = '#1E1B4B';
    ctx.fillRect(qrX + 68, qrY + 72, 44, 34);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#38BDF8';
    ctx.font = '700 16px "JetBrains Mono", monospace';
    ctx.fillText('</>', qrX + 90, qrY + 95);

    // 8. Three Pill Badges Row (Accommodation | Certificate | Coding Time)
    drawTechBox(42, 1248, 225, 56, 12, '#F59E0B', 'rgba(23, 15, 56, 0.92)');
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '700 13.5px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('No accommodation will be', 154, 1272);
    ctx.fillText('provided.', 154, 1291);

    drawTechBox(335, 1244, 410, 64, 14, '#F59E0B', 'rgba(23, 15, 56, 0.92)');
    ctx.fillStyle = '#E2E8F0';
    ctx.font = '600 18px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Each participant will get', 540, 1270);
    ctx.fillStyle = '#FBBF24';
    ctx.font = '800 22px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Certificate', 540, 1297);

    drawTechBox(813, 1248, 225, 56, 12, '#F59E0B', 'rgba(23, 15, 56, 0.92)');
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '700 15.5px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Coding Time:- 4 Hours', 925, 1282);

    // 9. Organizers Row
    const orgs = [
      ['Mrs. Priyanka Padmane', 'Event Co-Coordinator'],
      ['Dr. (Mrs.) R. A. Khan', 'Event Coordinator'],
      ['Dr. (Mrs.) A. V. Dehankar', 'HOD, Computer Technology'],
      ['Dr. G. M. Asutkar', 'Vice-Principal, PCE'],
      ['Dr. S. A. Dhale', 'Principal, PCE'],
    ];
    const orgW = (W - 60) / 5;
    orgs.forEach(([name, role], idx) => {
      const ox = 30 + orgW * idx + orgW / 2;
      if (idx > 0) {
        ctx.strokeStyle = 'rgba(139, 92, 246, 0.45)';
        ctx.beginPath();
        ctx.moveTo(30 + orgW * idx, 1335);
        ctx.lineTo(30 + orgW * idx, 1385);
        ctx.stroke();
      }
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '700 15px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(name, ox, 1354);
      ctx.fillStyle = '#CBD5E1';
      ctx.font = '500 13.5px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(role, ox, 1378);
    });

    // 10. Bottom Contact Strip
    drawTechBox(28, 1412, W - 56, 78, 16, '#6366F1', 'rgba(9, 7, 26, 0.95)');
    ctx.fillStyle = '#F59E0B';
    ctx.beginPath();
    ctx.roundRect(46, 1428, 134, 46, 23);
    ctx.fill();
    ctx.fillStyle = '#0F172A';
    ctx.font = '800 13px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Any Queries', 113, 1448);
    ctx.fillText('Contact Us :', 113, 1464);

    const contacts = [
      ['Prem Rahangdale', '+91 77748 60589'],
      ['Tejas Chaudhary', '+91 93568 02767'],
      ['Kunjal Pardhi', '+91 72498 15650'],
      ['Alisha Sheikh', '+91 77961 17495'],
    ];
    const contactW = (W - 230) / 4;
    contacts.forEach(([cname, cphone], idx) => {
      const cx = 200 + contactW * idx;
      ctx.fillStyle = '#F59E0B';
      ctx.beginPath();
      ctx.arc(cx + 18, 1451, 16, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#0F172A';
      ctx.font = '700 14px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('📞', cx + 18, 1456);

      ctx.textAlign = 'left';
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '700 14.5px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(cname, cx + 42, 1446);
      ctx.fillStyle = '#FDE68A';
      ctx.font = '600 13.5px "JetBrains Mono", monospace';
      ctx.fillText(cphone, cx + 42, 1468);
      ctx.textAlign = 'center';
    });

    setDataUrl(canvas.toDataURL('image/png'));
  }, []);

  return dataUrl;
}

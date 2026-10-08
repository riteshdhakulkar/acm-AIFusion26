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

/**
 * Generates an exact 1:1 high-resolution PNG representation of the official
 * NATIONAL LEVEL AI FUSION (BUILT WITH AI) poster.
 */
export function useOfficialPosterDataUrl(): string {
  const [dataUrl, setDataUrl] = useState<string>('');

  useEffect(() => {
    const canvas = document.createElement('canvas');
    const W = 1080;
    const H = 1580;
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // 1. Ice-Blue / Sky-Blue / White Cyber Background
    const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
    bgGrad.addColorStop(0, '#D7ECFF');
    bgGrad.addColorStop(0.14, '#EFF7FF');
    bgGrad.addColorStop(0.28, '#B8DFFF');
    bgGrad.addColorStop(0.45, '#E8F4FF');
    bgGrad.addColorStop(0.75, '#DDF0FF');
    bgGrad.addColorStop(0.865, '#CDE6FF');
    bgGrad.addColorStop(0.87, '#061539');
    bgGrad.addColorStop(1, '#040D26');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, W, H);

    // Diagonal light beams
    ctx.save();
    for (let i = -200; i < W + 400; i += 190) {
      const beamGrad = ctx.createLinearGradient(i, 0, i - 350, 850);
      beamGrad.addColorStop(0, 'rgba(255,255,255,0.65)');
      beamGrad.addColorStop(0.5, 'rgba(255,255,255,0.2)');
      beamGrad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.strokeStyle = beamGrad;
      ctx.lineWidth = 44;
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i - 420, 900);
      ctx.stroke();
    }
    ctx.restore();

    // Strong Radial Cyan-Blue Glow behind "AI FUSION"
    const centerGlow = ctx.createRadialGradient(W / 2, 395, 30, W / 2, 395, 490);
    centerGlow.addColorStop(0, 'rgba(3, 105, 161, 0.72)');
    centerGlow.addColorStop(0.45, 'rgba(14, 165, 233, 0.35)');
    centerGlow.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = centerGlow;
    ctx.fillRect(0, 140, W, 520);

    // Helper for Chamfered Navy Tech Panels with Double Glowing Border
    const drawChamferBox = (
      x: number,
      y: number,
      w: number,
      h: number,
      cut = 18,
      borderColor = '#38BDF8'
    ) => {
      const g = ctx.createLinearGradient(x, y, x + w, y + h);
      g.addColorStop(0, '#06173A');
      g.addColorStop(0.5, '#0D2E68');
      g.addColorStop(1, '#051331');

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
      ctx.fillStyle = g;
      ctx.fill();

      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 3;
      ctx.stroke();

      // Inner subtle highlight border
      ctx.strokeStyle = 'rgba(255,255,255,0.22)';
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    // 2. Top-Left LTJSS Pointed Oval Portrait Emblem
    ctx.save();
    ctx.translate(72, 62);
    ctx.beginPath();
    ctx.moveTo(0, -48);
    ctx.quadraticCurveTo(46, 0, 0, 48);
    ctx.quadraticCurveTo(-46, 0, 0, -48);
    ctx.closePath();
    ctx.fillStyle = '#FDF8F0';
    ctx.fill();
    ctx.strokeStyle = '#D97706';
    ctx.lineWidth = 2.5;
    ctx.stroke();
    // Turban & Portrait Silhouette inside LTJSS emblem
    ctx.fillStyle = '#B91C1C';
    ctx.beginPath();
    ctx.ellipse(0, -12, 13, 9, 0, Math.PI, 0, false);
    ctx.fill();
    ctx.fillStyle = '#D97706';
    ctx.beginPath();
    ctx.arc(0, -4, 9, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#78350F';
    ctx.fillRect(-12, 7, 24, 14);
    ctx.restore();

    // Top-Right PCE Nagpur Crest Emblem
    ctx.save();
    ctx.translate(W - 72, 60);
    ctx.beginPath();
    ctx.arc(0, -6, 34, 0, Math.PI * 2);
    ctx.fillStyle = '#0369A1';
    ctx.fill();
    ctx.strokeStyle = '#0284C7';
    ctx.lineWidth = 2.5;
    ctx.stroke();
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.arc(0, -6, 22, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#F59E0B';
    ctx.beginPath();
    ctx.arc(0, -4, 6, 0, Math.PI * 2);
    ctx.fill();
    // Blue ribbon bars below crest
    ctx.fillStyle = '#075985';
    ctx.fillRect(-44, 20, 88, 11);
    ctx.fillRect(-30, 33, 60, 10);
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.font = '700 6.5px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('PRIYADARSHINI COLLEGE OF ENGG.', 0, 28);
    ctx.font = '700 6.5px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('NAGPUR', 0, 40);
    ctx.restore();

    // Top Institution Text
    ctx.textAlign = 'center';
    ctx.fillStyle = '#0F172A';
    ctx.font = '600 17.5px "Plus Jakarta Sans", sans-serif';
    ctx.fillText("LOKMANYA TILAK JANKALYAN SHIKSHAN SANSTHA’S", W / 2, 34);

    ctx.fillStyle = '#020617';
    ctx.font = '800 32px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('PRIYADARSHINI COLLEGE OF ENGINEERING,NAGPUR', W / 2, 72);

    ctx.fillStyle = '#0F172A';
    ctx.font = '700 13.5px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(
      '(AN AUTONOMOUS INSTITUTE AFFILIATED TO RASHTRASANT TUKDOJI MAHARAJ NAGPUR UNIVERSITY)',
      W / 2,
      95
    );

    // 3. PCE ACM (Left) & PCE ACM-W (Right) Logos + Center Chapter Text
    // Left ACM Diamond
    ctx.save();
    ctx.translate(245, 155);
    ctx.beginPath();
    ctx.moveTo(0, -45);
    ctx.lineTo(45, 0);
    ctx.lineTo(0, 45);
    ctx.lineTo(-45, 0);
    ctx.closePath();
    ctx.fillStyle = '#4AA0D8';
    ctx.fill();
    ctx.strokeStyle = '#FFFFFF';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.arc(0, -2, 26, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '800 19px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('acm', 0, 1);
    ctx.font = '700 6.5px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Student', 4, 11);
    ctx.fillText('Chapter', 4, 18);
    ctx.fillStyle = '#3B82F6';
    ctx.fillRect(-20, 26, 40, 14);
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '800 10px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('PCE', 0, 36);
    ctx.restore();

    // Right ACM-W Logo with Right Chevron Diamond
    ctx.save();
    ctx.translate(825, 152);
    ctx.textAlign = 'left';
    ctx.fillStyle = '#38B2EE';
    ctx.font = '800 31px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('acm-', -40, 6);
    ctx.fillStyle = '#0284C7';
    ctx.fillText('w', 36, 6);
    // Blue diamond chevron on right
    ctx.strokeStyle = '#0284C7';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(42, -26);
    ctx.lineTo(78, 4);
    ctx.lineTo(42, 32);
    ctx.stroke();
    ctx.fillStyle = '#0369A1';
    ctx.font = '800 7.5px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('STUDENT CHAPTER', -38, 18);
    ctx.font = '800 14px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('PCE', -2, 32);
    ctx.restore();

    // Center Chapter Text
    ctx.textAlign = 'center';
    ctx.fillStyle = '#020617';
    ctx.font = '800 22px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('P C E   A C M   S T U D E N T   C H A P T E R', W / 2, 136);
    ctx.font = '800 21px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('&', W / 2, 162);
    ctx.font = '800 22px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('P C E   A C M - W   S T U D E N T   C H A P T E R', W / 2, 188);

    // PRESENTS divider
    ctx.fillStyle = '#0369A1';
    ctx.font = '700 17px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('P R E S E N T S', W / 2, 222);
    ctx.strokeStyle = '#0284C7';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(155, 216);
    ctx.lineTo(440, 216);
    ctx.moveTo(640, 216);
    ctx.lineTo(925, 216);
    ctx.stroke();

    // 4. </> Icon & Main 3D Metallic Titles
    ctx.save();
    ctx.fillStyle = '#E0F2FE';
    ctx.strokeStyle = '#0284C7';
    ctx.lineWidth = 3;
    ctx.font = '800 54px "JetBrains Mono", monospace';
    ctx.strokeText('</>', W / 2, 274);
    ctx.fillText('</>', W / 2, 274);
    ctx.restore();

    // NATIONAL LEVEL (3D White with Navy Extrusion)
    ctx.save();
    ctx.font = '800 62px "Space Grotesk", sans-serif';
    ctx.fillStyle = '#082F49';
    for (let d = 6; d >= 1; d--) {
      ctx.fillText('NATIONAL LEVEL', W / 2 + d * 0.5, 342 + d);
    }
    ctx.strokeStyle = '#082F49';
    ctx.lineWidth = 6;
    ctx.strokeText('NATIONAL LEVEL', W / 2, 342);
    ctx.fillStyle = '#F8FAFC';
    ctx.fillText('NATIONAL LEVEL', W / 2, 342);
    ctx.restore();

    // AI FUSION (3D Electric Cyan with Globe inside O)
    ctx.save();
    ctx.font = '800 138px "Space Grotesk", sans-serif';
    ctx.fillStyle = '#041E42';
    for (let d = 10; d >= 1; d--) {
      ctx.fillText('AI FUSION', W / 2 + d * 0.6, 464 + d);
    }
    ctx.strokeStyle = '#041E42';
    ctx.lineWidth = 10;
    ctx.strokeText('AI FUSION', W / 2, 464);

    const aiFusionGrad = ctx.createLinearGradient(0, 355, 0, 470);
    aiFusionGrad.addColorStop(0, '#FFFFFF');
    aiFusionGrad.addColorStop(0.25, '#7DD3FC');
    aiFusionGrad.addColorStop(0.65, '#0284C7');
    aiFusionGrad.addColorStop(1, '#0369A1');
    ctx.fillStyle = aiFusionGrad;
    ctx.fillText('AI FUSION', W / 2, 464);

    // Wireframe Globe inside the 'O' of FUSION
    const gx = 780;
    const gy = 415;
    const gr = 27;
    ctx.beginPath();
    ctx.arc(gx, gy, gr, 0, Math.PI * 2);
    ctx.fillStyle = '#072A58';
    ctx.fill();
    ctx.strokeStyle = '#BAE6FD';
    ctx.lineWidth = 2;
    ctx.stroke();
    // Globe latitude/longitude lines
    ctx.beginPath();
    ctx.ellipse(gx, gy, gr * 0.5, gr, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(gx - gr, gy);
    ctx.lineTo(gx + gr, gy);
    ctx.moveTo(gx - gr * 0.85, gy - gr * 0.5);
    ctx.lineTo(gx + gr * 0.85, gy - gr * 0.5);
    ctx.moveTo(gx - gr * 0.85, gy + gr * 0.5);
    ctx.lineTo(gx + gr * 0.85, gy + gr * 0.5);
    ctx.stroke();
    ctx.restore();

    // BUILT WITH AI
    ctx.save();
    ctx.font = '800 45px "Space Grotesk", sans-serif';
    ctx.fillStyle = '#082F49';
    for (let d = 5; d >= 1; d--) {
      ctx.fillText('BUILT WITH AI', W / 2 + d * 0.4, 520 + d);
    }
    ctx.strokeStyle = '#082F49';
    ctx.lineWidth = 5;
    ctx.strokeText('BUILT WITH AI', W / 2, 520);
    ctx.fillStyle = '#F8FAFC';
    ctx.fillText('BUILT WITH AI', W / 2, 520);
    ctx.restore();

    // Turn Your Ideas Into Impact
    ctx.fillStyle = '#0B192C';
    ctx.font = 'italic 700 36px Georgia, serif';
    ctx.fillText('Turn Your Ideas Into Impact', W / 2, 586);

    // 5. Prize Pool Panel (Left) & 3D Open Laptop with Floating UI Cards (Right)
    drawChamferBox(38, 632, 550, 148, 22, '#38BDF8');

    // Realistic Gold Trophy Cup
    ctx.save();
    ctx.translate(128, 706);
    const trophyGrad = ctx.createLinearGradient(-32, -45, 32, 35);
    trophyGrad.addColorStop(0, '#FEF08A');
    trophyGrad.addColorStop(0.4, '#F59E0B');
    trophyGrad.addColorStop(0.8, '#B45309');
    trophyGrad.addColorStop(1, '#FDE047');
    ctx.fillStyle = trophyGrad;
    // Cup bowl
    ctx.beginPath();
    ctx.moveTo(-30, -42);
    ctx.lineTo(30, -42);
    ctx.quadraticCurveTo(28, 4, 0, 10);
    ctx.quadraticCurveTo(-28, 4, -30, -42);
    ctx.fill();
    // Handles
    ctx.strokeStyle = trophyGrad;
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.arc(-28, -22, 12, Math.PI * 0.5, Math.PI * 1.5, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(28, -22, 12, -Math.PI * 0.5, Math.PI * 0.5, false);
    ctx.stroke();
    // Stem & Base
    ctx.fillRect(-7, 8, 14, 22);
    ctx.fillRect(-24, 28, 48, 9);
    ctx.fillStyle = '#78350F';
    ctx.fillRect(-28, 37, 56, 7);
    ctx.restore();

    ctx.textAlign = 'left';
    ctx.fillStyle = '#FBBF24';
    ctx.font = '800 28px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('PRIZE POOL', 222, 680);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = '800 68px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('₹10,000', 222, 750);

    // 3D Isometric Laptop + Floating UI Cards on Right
    ctx.save();
    // Floating UI cards behind/right of laptop
    drawChamferBox(865, 558, 120, 62, 8, '#60A5FA');
    drawChamferBox(960, 608, 86, 62, 8, '#38BDF8');
    ctx.textAlign = 'center';
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '700 26px "JetBrains Mono", monospace';
    ctx.fillText('</>', 1003, 648);
    drawChamferBox(955, 682, 105, 76, 8, '#60A5FA');

    // Laptop Screen (angled perspective)
    ctx.beginPath();
    ctx.moveTo(702, 600);
    ctx.lineTo(955, 628);
    ctx.lineTo(938, 762);
    ctx.lineTo(686, 730);
    ctx.closePath();
    ctx.fillStyle = '#09152E';
    ctx.fill();
    ctx.strokeStyle = '#38BDF8';
    ctx.lineWidth = 3;
    ctx.stroke();

    // Code lines on left half of laptop screen
    const cColors = ['#F472B6', '#38BDF8', '#FBBF24', '#34D399', '#A78BFA'];
    for (let r = 0; r < 9; r++) {
      ctx.fillStyle = cColors[r % cColors.length];
      ctx.fillRect(708, 620 + r * 11, 36 + ((r * 23) % 50), 4);
    }

    // White UI wireframe box on right half of laptop screen
    ctx.fillStyle = '#F8FAFC';
    ctx.fillRect(822, 646, 102, 86);
    ctx.fillStyle = '#0284C7';
    ctx.fillRect(830, 662, 34, 28);
    ctx.fillStyle = '#CBD5E1';
    ctx.fillRect(870, 664, 44, 6);
    ctx.fillRect(870, 676, 36, 6);
    ctx.fillStyle = '#6366F1';
    ctx.fillRect(830, 712, 42, 10);

    // Laptop Keyboard Base
    ctx.beginPath();
    ctx.moveTo(686, 730);
    ctx.lineTo(938, 762);
    ctx.lineTo(860, 795);
    ctx.lineTo(590, 756);
    ctx.closePath();
    ctx.fillStyle = '#94A3B8';
    ctx.fill();
    ctx.strokeStyle = '#1E293B';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.restore();

    // 6. Four Key Metadata Columns Box
    drawChamferBox(32, 804, W - 64, 148, 22, '#38BDF8');
    const cols = [
      { title: 'DATE', val: '22nd October 2026' },
      { title: 'REGISTRATION FEES', val: '₹ 100 per member' },
      { title: 'REGISTRATION DEADLINE', val: '20th October 2026' },
      { title: 'MAXIMUM TEAM SIZE', val: '3 Members' },
    ];
    const colW = (W - 64) / 4;
    cols.forEach((c, idx) => {
      const cx = 32 + colW * idx + colW / 2;
      if (idx > 0) {
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.5)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(32 + colW * idx, 826);
        ctx.lineTo(32 + colW * idx, 930);
        ctx.stroke();
      }

      // Draw crisp gold icon for each column
      ctx.save();
      ctx.translate(cx, 842);
      ctx.strokeStyle = '#FBBF24';
      ctx.fillStyle = '#FBBF24';
      ctx.lineWidth = 3;
      if (idx === 0) {
        // Calendar icon
        ctx.strokeRect(-20, -18, 40, 36);
        ctx.beginPath();
        ctx.moveTo(-20, -6);
        ctx.lineTo(20, -6);
        ctx.stroke();
      } else if (idx === 1) {
        // Rupee circle icon
        ctx.beginPath();
        ctx.arc(0, 0, 22, 0, Math.PI * 2);
        ctx.stroke();
        ctx.textAlign = 'center';
        ctx.font = '800 24px "Plus Jakarta Sans", sans-serif';
        ctx.fillText('₹', 0, 9);
      } else if (idx === 2) {
        // Clock circle icon
        ctx.beginPath();
        ctx.arc(0, 0, 22, 0, Math.PI * 2);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, -12);
        ctx.lineTo(0, 2);
        ctx.lineTo(10, 6);
        ctx.stroke();
      } else {
        // 3 Members group icon
        ctx.beginPath();
        ctx.arc(0, -10, 8, 0, Math.PI * 2);
        ctx.arc(-16, -6, 6, 0, Math.PI * 2);
        ctx.arc(16, -6, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillRect(-14, 2, 28, 14);
        ctx.fillRect(-26, 5, 10, 11);
        ctx.fillRect(16, 5, 10, 11);
      }
      ctx.restore();

      ctx.textAlign = 'center';
      ctx.fillStyle = '#FBBF24';
      ctx.font = '700 15px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(c.title, cx, 888);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'italic 700 21px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(c.val, cx, 922);
    });

    // 7. Three Middle Panels: WHY PARTICIPATE? | WHAT YOU SUBMIT? | SCAN TO REGISTER
    drawChamferBox(34, 976, 345, 252, 16, '#38BDF8');
    drawChamferBox(52, 990, 309, 38, 10, '#38BDF8');
    ctx.textAlign = 'center';
    ctx.fillStyle = '#FBBF24';
    ctx.font = '700 18px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('★   WHY PARTICIPATE?', 206, 1015);

    const whyList = [
      'Build innovative solutions using AI',
      'Explore Generative AI & modern AI tools',
      'Showcase your creativity & innovation',
      'Win exciting prizes & recognition',
      'Network & learn with like-minded peers',
    ];
    ctx.textAlign = 'left';
    whyList.forEach((item, i) => {
      const iy = 1058 + i * 33;
      ctx.fillStyle = '#38BDF8';
      ctx.beginPath();
      ctx.arc(66, iy - 5, 9, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#06173A';
      ctx.font = '800 11px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('✓', 61, iy - 1);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '500 14.5px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(item, 84, iy);
    });

    // Panel 2: WHAT YOU SUBMIT?
    drawChamferBox(398, 976, 336, 252, 16, '#38BDF8');
    drawChamferBox(416, 990, 300, 38, 10, '#38BDF8');
    ctx.textAlign = 'center';
    ctx.fillStyle = '#FBBF24';
    ctx.font = '700 18px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('</>   WHAT YOU SUBMIT?', 566, 1015);

    const submitLines = [
      ['🌐', 'A live deployed AI-powered', 'website/web application'],
      ['🐙', 'GitHub repository with', 'source code'],
      ['🕒', '4–5 minute presentation', '/ demo 2 minute Q&A session'],
    ];
    ctx.textAlign = 'left';
    submitLines.forEach(([ic, l1, l2], i) => {
      const sy = 1060 + i * 54;
      ctx.fillStyle = '#38BDF8';
      ctx.font = '700 21px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(ic, 424, sy + 8);
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '500 15px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(l1, 462, sy);
      ctx.fillStyle = '#E2E8F0';
      ctx.font = '500 14.5px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(l2, 462, sy + 20);
    });

    // Panel 3: SCAN TO REGISTER
    drawChamferBox(752, 976, 294, 252, 16, '#38BDF8');
    ctx.textAlign = 'left';
    ctx.fillStyle = '#FBBF24';
    ctx.font = '700 17px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('SCAN TO', 855, 1006);
    ctx.fillText('REGISTER', 855, 1026);

    const qrX = 812;
    const qrY = 1038;
    const qrSize = 172;
    ctx.fillStyle = '#FFFFFF';
    ctx.beginPath();
    ctx.roundRect(qrX, qrY, qrSize, qrSize, 10);
    ctx.fill();
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
    ctx.fillStyle = '#0F172A';
    ctx.fillRect(qrX + 66, qrY + 70, 40, 32);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#38BDF8';
    ctx.font = '700 15px "JetBrains Mono", monospace';
    ctx.fillText('</>', qrX + 86, qrY + 91);

    // 8. Three Bottom Pill Badges Row
    drawChamferBox(46, 1248, 232, 56, 14, '#38BDF8');
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '700 14px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('No accommodation', 162, 1272);
    ctx.fillText('will be provided', 162, 1291);

    drawChamferBox(335, 1244, 410, 62, 16, '#38BDF8');
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '600 17px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Each participant will get', 555, 1270);
    ctx.fillStyle = '#FBBF24';
    ctx.font = '800 19px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Certificate', 555, 1294);

    drawChamferBox(796, 1248, 250, 56, 14, '#38BDF8');
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '700 13.5px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('CODING TIME:- 4 HOURS', 921, 1271);
    ctx.fillText('EVALUATION TIME:- 2 HOURS', 921, 1291);

    // 9. Dark Navy Footer — Faculty Organizers Row
    const orgs = [
      ['Dr. (Mrs.) R. A. Khan', 'Event Coordinator'],
      ['Mrs. Priyanka Padmane', 'Event Co-Coordinator'],
      ['Dr. (Mrs.) A. V. Dehankar', 'HOD, Computer Technology'],
      ['Dr. G.M. Asutkar', 'Vice-Principal, PCE'],
      ['Dr. S. A. Dhale', 'Principal, PCE'],
    ];
    const orgW = (W - 40) / 5;
    orgs.forEach(([name, role], idx) => {
      const ox = 20 + orgW * idx + orgW / 2;
      if (idx > 0) {
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.5)';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(20 + orgW * idx, 1348);
        ctx.lineTo(20 + orgW * idx, 1400);
        ctx.stroke();
      }
      ctx.textAlign = 'center';
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '700 15px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(name, ox, 1368);
      ctx.fillStyle = '#E2E8F0';
      ctx.font = '500 13.5px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(role, ox, 1392);
    });

    ctx.strokeStyle = 'rgba(56, 189, 248, 0.35)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(24, 1420);
    ctx.lineTo(W - 24, 1420);
    ctx.stroke();

    // 10. Bottom Contact Strip (Prem, Tejas, Kunjal, Alisha, Ritesh)
    ctx.fillStyle = '#FBBF24';
    ctx.beginPath();
    ctx.roundRect(14, 1430, 108, 34, 17);
    ctx.fill();
    ctx.fillStyle = '#0F172A';
    ctx.textAlign = 'center';
    ctx.font = '800 10.5px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Any Queries', 68, 1445);
    ctx.fillText('Contact Us :', 68, 1458);

    const contacts = [
      ['Prem Rahangdale', '+91 77748 60589'],
      ['Tejas Choudhary', '+91 9356802767'],
      ['Kunjal Pardhi', '+91 7249815650'],
      ['Alisha Sheikh', '+91 7796117495'],
      ['Ritesh Dhakulkar', '+91 8552035048'],
    ];
    const contactW = (W - 70) / 5;
    contacts.forEach(([cname, cphone], idx) => {
      const cx = 46 + contactW * idx;
      if (idx > 0) {
        ctx.strokeStyle = 'rgba(251, 191, 36, 0.5)';
        ctx.beginPath();
        ctx.moveTo(cx - 8, 1474);
        ctx.lineTo(cx - 8, 1514);
        ctx.stroke();
      }
      ctx.fillStyle = '#FBBF24';
      ctx.beginPath();
      ctx.arc(cx + 14, 1494, 14, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#0F172A';
      ctx.textAlign = 'center';
      ctx.font = '700 12px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('📞', cx + 14, 1499);

      ctx.textAlign = 'left';
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '700 13.5px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(cname, cx + 34, 1489);
      ctx.fillStyle = '#F8FAFC';
      ctx.font = '700 13px "JetBrains Mono", monospace';
      ctx.fillText(cphone, cx + 34, 1509);
    });

    // Bottom Website URL
    ctx.textAlign = 'center';
    ctx.fillStyle = '#FFFFFF';
    ctx.font = '700 15px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(
      'For more information visit: https://acm-ai-fusion26.vercel.app/',
      W / 2,
      1552
    );

    setDataUrl(canvas.toDataURL('image/png'));
  }, []);

  return dataUrl;
}

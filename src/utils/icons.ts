import type { AssetItem } from '../data/assets';

export const ELEMENT_COLORS: Record<string, string> = {
  Cryo: '#7dd3fc',
  Ice: '#7dd3fc',
  Frost: '#60a5fa',
  Hydro: '#38bdf8',
  Pyro: '#fb7185',
  Fire: '#f87171',
  Electro: '#c084fc',
  Lightning: '#c084fc',
  Electric: '#60a5fa',
  Anemo: '#34d399',
  Wind: '#34d399',
  Geo: '#fbbf24',
  Imaginary: '#facc15',
  Dendro: '#4ade80',
  Physical: '#e2e8f0',
  Quantum: '#818cf8',
  Ether: '#e879f9',
  Abyss: '#60a5fa',
  Adepti: '#34d399',
};

const GI_ELEMENT_ICONS: Record<string, string> = {
  Anemo: '/assets/elements/Genshin%20Impact/Elements/anemo%20%C2%B7%20Genshin%20Impact.png',
  Cryo: '/assets/elements/Genshin%20Impact/Elements/cryo%20%C2%B7%20Genshin%20Impact.png',
  Dendro: '/assets/elements/Genshin%20Impact/Elements/dendro%20%C2%B7%20Genshin%20Impact.png',
  Electro: '/assets/elements/Genshin%20Impact/Elements/electro%20%C2%B7%20Genshin%20Impact.png',
  Geo: '/assets/elements/Genshin%20Impact/Elements/geo%20%C2%B7%20Genshin%20Impact.png',
  Hydro: '/assets/elements/Genshin%20Impact/Elements/hydro%20%C2%B7%20Genshin%20Impact.png',
  Pyro: '/assets/elements/Genshin%20Impact/Elements/pyro%20%C2%B7%20Genshin%20Impact.png',
};

export function getElementIconSvg(element: string, size = 14): string {
  const pngUrl = GI_ELEMENT_ICONS[element];
  if (pngUrl) {
    return `<img src="${pngUrl}" alt="${element}" style="width:${size + 2}px;height:${size + 2}px;object-fit:contain;display:block;" />`;
  }

  const color = ELEMENT_COLORS[element] ?? '#e2e8f0';
  const s = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`;

  switch (element) {
    case 'Cryo':
    case 'Ice':
    case 'Frost':
      return `<svg ${s}><path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07"/></svg>`;
    case 'Pyro':
    case 'Fire':
      return `<svg ${s}><path d="M12 2c1 4-3 6-3 10a5 5 0 0 0 10 0c0-3-2-5-3-7-1 2-2 3-3 3 0-2 1-4-1-6z" fill="${color}" fill-opacity="0.25"/></svg>`;
    case 'Hydro':
      return `<svg ${s}><path d="M12 2.5C12 2.5 6 9.5 6 14a6 6 0 0 0 12 0c0-4.5-6-11.5-6-11.5z" fill="${color}" fill-opacity="0.25"/></svg>`;
    case 'Electro':
    case 'Lightning':
    case 'Electric':
      return `<svg ${s}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" fill="${color}" fill-opacity="0.25"/></svg>`;
    case 'Anemo':
    case 'Wind':
      return `<svg ${s}><path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2M9.6 4.6A2 2 0 1 1 11 8H2M12.6 19.4A2 2 0 1 0 14 16H2"/></svg>`;
    case 'Geo':
    case 'Imaginary':
      return `<svg ${s}><polygon points="12 2 20 8 17 20 7 20 4 8 12 2" fill="${color}" fill-opacity="0.2"/></svg>`;
    case 'Dendro':
      return `<svg ${s}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>`;
    case 'Quantum':
    case 'Ether':
      return `<svg ${s}><circle cx="12" cy="12" r="5" fill="${color}" fill-opacity="0.25"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/></svg>`;
    default:
      return `<svg ${s}><circle cx="12" cy="12" r="7" fill="${color}" fill-opacity="0.2"/><path d="M12 5v14M5 12h14"/></svg>`;
  }
}

export function getWeaponOrPathIconSvg(wp: string, size = 14): string {
  const s = `width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="#e2e8f0" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"`;
  switch (wp) {
    case 'Sword':
    case 'Katana':
    case 'Destruction':
      return `<svg ${s}><path d="M14.5 17.5L3 6V3h3l11.5 11.5"/><path d="M13 19l6-6M16 16l4 4M19 21l2-2"/></svg>`;
    case 'Claymore':
    case 'Attack':
      return `<svg ${s}><path d="M20 4L8.5 15.5M16 4h4v4M4 20l4.5-4.5M7 13l4 4"/></svg>`;
    case 'Polearm':
    case 'The Hunt':
      return `<svg ${s}><path d="M4 20L19 5M15 4l5 1-1 5"/></svg>`;
    case 'Bow':
      return `<svg ${s}><path d="M5 19C5 11 11 5 19 5M5 19l14-14M15 5h4v4"/></svg>`;
    case 'Catalyst':
    case 'Erudition':
    case 'Remembrance':
      return `<svg ${s}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>`;
    case 'Preservation':
      return `<svg ${s}><path d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-4z"/></svg>`;
    case 'Harmony':
    case 'Support':
      return `<svg ${s}><circle cx="12" cy="12" r="8"/><path d="M12 8v8M8 12h8"/></svg>`;
    case 'Nihility':
    case 'Anomaly':
      return `<svg ${s}><circle cx="12" cy="12" r="9"/><path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0z"/></svg>`;
    case 'Abundance':
      return `<svg ${s}><path d="M12 21s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.5-7 10-7 10z"/></svg>`;
    default:
      return `<svg ${s}><polygon points="12 2 15 9 22 9 16.5 14 18.5 21 12 17 5.5 21 7.5 14 2 9 9 9 12 2"/></svg>`;
  }
}

export function generatePortraitSvg(
  name: string,
  palette: [string, string, string],
  element: string,
  category: string,
  hairStyle: AssetItem['hairStyle'] = 'long'
): string {
  const [light, mid, dark] = palette;
  const elColor = ELEMENT_COLORS[element] ?? light;
  const hash = name.split('').reduce((acc, c) => acc + c.charCodeAt(0) * 17, 0);
  const bgAngle = (hash % 60) + 120;
  const gradId = `g_${hash}_${category}`;
  const glowId = `glow_${hash}_${category}`;

  if (category !== 'characters') {
    // Stylized weapon / object / monster / lightcone emblem artwork
    return `
      <svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg" class="portrait-svg">
        <defs>
          <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${dark}" />
            <stop offset="55%" stop-color="${mid}" stop-opacity="0.45" />
            <stop offset="100%" stop-color="#0b0a14" />
          </linearGradient>
          <radialGradient id="${glowId}" cx="50%" cy="42%" r="48%">
            <stop offset="0%" stop-color="${light}" stop-opacity="0.7" />
            <stop offset="60%" stop-color="${mid}" stop-opacity="0.2" />
            <stop offset="100%" stop-color="transparent" />
          </radialGradient>
        </defs>
        <rect width="240" height="300" fill="url(#${gradId})" />
        <circle cx="120" cy="128" r="95" fill="url(#${glowId})" />
        <g transform="translate(120,126)" opacity="0.9">
          <polygon points="0,-68 48,-20 32,58 -32,58 -48,-20" fill="${dark}" stroke="${light}" stroke-width="2.5" />
          <polygon points="0,-46 28,-10 18,40 -18,40 -28,-10" fill="${mid}" fill-opacity="0.45" stroke="${elColor}" stroke-width="1.5" />
          <circle cx="0" cy="0" r="14" fill="${light}" fill-opacity="0.9" />
        </g>
        <circle cx="48" cy="60" r="3" fill="${light}" opacity="0.7" />
        <circle cx="192" cy="86" r="2.5" fill="${elColor}" opacity="0.8" />
        <circle cx="176" cy="200" r="3.5" fill="${light}" opacity="0.5" />
      </svg>
    `;
  }

  // Stylized anime character bust portrait
  const backHair =
    hairStyle === 'long'
      ? `<path d="M56 105 C42 155, 44 225, 62 270 L178 270 C196 225, 198 155, 184 105 C172 60, 68 60, 56 105 Z" fill="${mid}" />`
      : hairStyle === 'twin'
        ? `<path d="M58 100 C25 140, 22 220, 42 265 L75 255 C68 200, 70 140, 74 115 Z" fill="${mid}" />
           <path d="M182 100 C215 140, 218 220, 198 265 L165 255 C172 200, 170 140, 166 115 Z" fill="${mid}" />`
        : hairStyle === 'bob'
          ? `<path d="M62 102 C50 145, 56 190, 76 205 L164 205 C184 190, 190 145, 178 102 Z" fill="${mid}" />`
          : `<path d="M66 95 L50 135 L68 145 L172 145 L190 135 L174 95 Z" fill="${mid}" />`;

  const frontHair =
    hairStyle === 'spiky'
      ? `<path d="M68 112 L82 64 L104 92 L122 52 L140 90 L162 62 L174 114 C156 96, 138 110, 120 122 C102 110, 84 96, 68 112 Z" fill="${light}" />`
      : `<path d="M66 122 C66 68, 174 68, 174 122 C158 96, 140 108, 126 128 C118 108, 102 96, 86 126 C78 110, 70 112, 66 122 Z" fill="${light}" />`;

  return `
    <svg viewBox="0 0 240 300" xmlns="http://www.w3.org/2000/svg" class="portrait-svg">
      <defs>
        <linearGradient id="${gradId}" x1="0%" y1="0%" x2="100%" y2="100%" gradientTransform="rotate(${bgAngle})">
          <stop offset="0%" stop-color="${dark}" />
          <stop offset="52%" stop-color="${mid}" stop-opacity="0.55" />
          <stop offset="100%" stop-color="#0b0a14" />
        </linearGradient>
        <radialGradient id="${glowId}" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stop-color="${elColor}" stop-opacity="0.65" />
          <stop offset="65%" stop-color="${mid}" stop-opacity="0.2" />
          <stop offset="100%" stop-color="transparent" />
        </radialGradient>
        <linearGradient id="skin_${hash}" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fff4ed" />
          <stop offset="100%" stop-color="#f3d9ca" />
        </linearGradient>
      </defs>

      <!-- Cosmic backdrop -->
      <rect width="240" height="300" fill="url(#${gradId})" />
      <circle cx="120" cy="115" r="110" fill="url(#${glowId})" />
      <circle cx="120" cy="115" r="76" fill="none" stroke="${light}" stroke-opacity="0.16" stroke-width="1.5" stroke-dasharray="6 6" />

      <!-- Back hair -->
      ${backHair}

      <!-- Outfit / Shoulders -->
      <path d="M44 300 C48 228, 78 202, 120 202 C162 202, 192 228, 196 300 Z" fill="${dark}" stroke="${light}" stroke-opacity="0.35" stroke-width="1.5" />
      <path d="M84 206 L120 246 L156 206 L142 300 L98 300 Z" fill="${mid}" fill-opacity="0.7" />
      <polygon points="120,218 129,232 120,246 111,232" fill="${elColor}" />

      <!-- Neck & Face -->
      <rect x="108" y="168" width="24" height="40" rx="10" fill="url(#skin_${hash})" />
      <path d="M78 118 C78 82, 162 82, 162 118 C162 158, 140 184, 120 186 C100 184, 78 158, 78 118 Z" fill="url(#skin_${hash})" />

      <!-- Expressive Anime Eyes -->
      <ellipse cx="99" cy="134" rx="9" ry="11" fill="#18122b" />
      <ellipse cx="141" cy="134" rx="9" ry="11" fill="#18122b" />
      <ellipse cx="99" cy="135" rx="6.5" ry="8" fill="${elColor}" />
      <ellipse cx="141" cy="135" rx="6.5" ry="8" fill="${elColor}" />
      <circle cx="96.5" cy="130" r="2.8" fill="#ffffff" />
      <circle cx="138.5" cy="130" r="2.8" fill="#ffffff" />
      <circle cx="102" cy="139" r="1.4" fill="#ffffff" opacity="0.8" />
      <circle cx="144" cy="139" r="1.4" fill="#ffffff" opacity="0.8" />

      <!-- Subtle mouth -->
      <path d="M114 163 Q120 167 126 163" fill="none" stroke="#c08474" stroke-width="1.8" stroke-linecap="round" />

      <!-- Front Hair & Bangs -->
      ${frontHair}
      <path d="M70 118 C82 146, 80 176, 88 194 C72 174, 62 146, 70 118 Z" fill="${light}" opacity="0.9" />
      <path d="M170 118 C158 146, 160 176, 152 194 C168 174, 178 146, 170 118 Z" fill="${light}" opacity="0.9" />

      <!-- Elemental sparkles -->
      <circle cx="44" cy="68" r="3" fill="${light}" opacity="0.75" />
      <circle cx="196" cy="92" r="2.5" fill="${elColor}" opacity="0.85" />
      <circle cx="54" cy="196" r="2" fill="${elColor}" opacity="0.65" />
      <circle cx="188" cy="210" r="3" fill="${light}" opacity="0.55" />
    </svg>
  `;
}

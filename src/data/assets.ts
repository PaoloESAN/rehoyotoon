import { GI_CHARACTERS } from './giCharacters';
import { HSR_CHARACTERS } from './hsrCharacters';
import { DRIVE_ASSETS } from './driveAssets';

export type GameId = 'gi' | 'hsr' | 'zzz' | 'hi3';

export interface CategoryDef {
  id: string;
  label: string;
  searchPlaceholder: string;
}

export interface GameDef {
  id: GameId;
  shortName: string;
  name: string;
  accentColor: string;
  categories: CategoryDef[];
}

export interface AssetFile {
  name: string;
  type: 'model' | 'material' | 'texture';
  subtitle: string;
  size: string;
  ext: string;
}

export interface AssetFolder {
  name: string;
  items: AssetFile[];
}

export interface AssetVariant {
  id: string;
  name: string;
  label?: string;
  image?: string | null;
  downloadUrl?: string | null;
  palette: [string, string, string];
  folders: AssetFolder[];
  rootFiles: AssetFile[];
}

export interface AssetItem {
  id: number;
  game: GameId;
  category: string;
  name: string;
  rarity: 4 | 5;
  element: string;
  weaponOrPath: string;
  image?: string | null;
  downloadUrl?: string | null;
  palette: [string, string, string];
  hairStyle?: 'long' | 'short' | 'twin' | 'spiky' | 'bob';
  variants: AssetVariant[];
}

export const GAMES: GameDef[] = [
  {
    id: 'gi',
    shortName: 'GI',
    name: 'GENSHIN IMPACT',
    accentColor: '#e5b84b',
    categories: [
      { id: 'characters', label: 'Characters', searchPlaceholder: 'Search characters' },
      { id: 'weapons', label: 'Weapons', searchPlaceholder: 'Search weapons' },
      { id: 'monsters', label: 'Monsters', searchPlaceholder: 'Search monsters' },
      { id: 'npcs', label: 'NPCs', searchPlaceholder: 'Search NPCs' },
      { id: 'gadgets', label: 'Gadgets', searchPlaceholder: 'Search gadgets' },
      { id: 'objects', label: 'Objects', searchPlaceholder: 'Search objects' },
    ],
  },
  {
    id: 'hsr',
    shortName: 'HSR',
    name: 'HONKAI STAR RAIL',
    accentColor: '#e5b84b',
    categories: [
      { id: 'characters', label: 'Characters', searchPlaceholder: 'Search characters' },
      { id: 'monsters', label: 'Monsters', searchPlaceholder: 'Search monsters' },
    ],
  },
  {
    id: 'zzz',
    shortName: 'ZZZ',
    name: 'ZENLESS ZONE ZERO',
    accentColor: '#e5b84b',
    categories: [
      { id: 'characters', label: 'Agents', searchPlaceholder: 'Search agents' },
      { id: 'bangboos', label: 'Bangboos', searchPlaceholder: 'Search bangboos' },
      { id: 'monsters', label: 'Monsters', searchPlaceholder: 'Search monsters' },
      { id: 'wengines', label: 'W-Engines', searchPlaceholder: 'Search W-Engines' },
    ],
  },
  {
    id: 'hi3',
    shortName: 'HI3',
    name: 'HONKAI IMPACT 3RD',
    accentColor: '#e5b84b',
    categories: [
      { id: 'companions', label: 'Companions', searchPlaceholder: 'Search companions' },
      { id: 'chibis', label: 'Chibis', searchPlaceholder: 'Search chibis' },
      { id: 'monsters', label: 'Monsters', searchPlaceholder: 'Search monsters' },
      { id: 'weapons', label: 'Weapons', searchPlaceholder: 'Search weapons' },
    ],
  },
];

function createStandardVariant(
  code: string,
  variantName: string,
  palette: [string, string, string],
  label = 'VARIANT',
  image: string | null = null,
  downloadUrl: string | null = null
): AssetVariant {
  const cleanCode = code.replace(/[^a-zA-Z0-9]/g, '');
  return {
    id: cleanCode.toLowerCase(),
    name: variantName,
    label,
    image,
    downloadUrl,
    palette,
    folders: [
      {
        name: 'Materials',
        items: [
          { name: `Mat_EyeShadow_00.json`, type: 'material', subtitle: 'Materials', size: '1 KB', ext: 'json' },
          { name: `Mat_FaceMask_00.json`, type: 'material', subtitle: 'Materials', size: '1 KB', ext: 'json' },
          { name: `${cleanCode}_00_Mat_Body_A.json`, type: 'material', subtitle: 'Materials', size: '8 KB', ext: 'json' },
          { name: `${cleanCode}_00_Mat_Body_B.json`, type: 'material', subtitle: 'Materials', size: '8 KB', ext: 'json' },
          { name: `${cleanCode}_00_Mat_Body_C.json`, type: 'material', subtitle: 'Materials', size: '8 KB', ext: 'json' },
          { name: `${cleanCode}_00_Mat_Face.json`, type: 'material', subtitle: 'Materials', size: '4 KB', ext: 'json' },
        ],
      },
      {
        name: 'Textures',
        items: [
          { name: `${cleanCode}_00_Body_Color.png`, type: 'texture', subtitle: 'Textures', size: '2.4 MB', ext: 'png' },
          { name: `${cleanCode}_00_Body_LightMap.png`, type: 'texture', subtitle: 'Textures', size: '1.8 MB', ext: 'png' },
          { name: `${cleanCode}_00_Body_NormalMap.png`, type: 'texture', subtitle: 'Textures', size: '2.1 MB', ext: 'png' },
          { name: `${cleanCode}_00_Body_Ramp.png`, type: 'texture', subtitle: 'Textures', size: '128 KB', ext: 'png' },
          { name: `${cleanCode}_00_Hair_Color.png`, type: 'texture', subtitle: 'Textures', size: '1.9 MB', ext: 'png' },
          { name: `${cleanCode}_00_Hair_LightMap.png`, type: 'texture', subtitle: 'Textures', size: '1.4 MB', ext: 'png' },
          { name: `${cleanCode}_00_Hair_NormalMap.png`, type: 'texture', subtitle: 'Textures', size: '1.6 MB', ext: 'png' },
          { name: `${cleanCode}_00_Face_Color.png`, type: 'texture', subtitle: 'Textures', size: '1.1 MB', ext: 'png' },
          { name: `${cleanCode}_00_Face_Expression.png`, type: 'texture', subtitle: 'Textures', size: '840 KB', ext: 'png' },
          { name: `${cleanCode}_00_Eye_Color.png`, type: 'texture', subtitle: 'Textures', size: '512 KB', ext: 'png' },
          { name: `${cleanCode}_00_Weapon_Color.png`, type: 'texture', subtitle: 'Textures', size: '1.5 MB', ext: 'png' },
          { name: `${cleanCode}_00_Weapon_LightMap.png`, type: 'texture', subtitle: 'Textures', size: '1.2 MB', ext: 'png' },
          { name: `${cleanCode}_00_FX_GlowMask.png`, type: 'texture', subtitle: 'Textures', size: '640 KB', ext: 'png' },
          { name: `${cleanCode}_00_FX_Noise.png`, type: 'texture', subtitle: 'Textures', size: '420 KB', ext: 'png' },
          { name: `${cleanCode}_00_Stocking_Map.png`, type: 'texture', subtitle: 'Textures', size: '780 KB', ext: 'png' },
          { name: `${cleanCode}_00_Metal_MatCap.png`, type: 'texture', subtitle: 'Textures', size: '256 KB', ext: 'png' },
          { name: `${cleanCode}_00_Skin_Ramp.png`, type: 'texture', subtitle: 'Textures', size: '64 KB', ext: 'png' },
          { name: `${cleanCode}_00_Shadow_Ramp.png`, type: 'texture', subtitle: 'Textures', size: '64 KB', ext: 'png' },
          { name: `${cleanCode}_00_Emissive_Mask.png`, type: 'texture', subtitle: 'Textures', size: '512 KB', ext: 'png' },
          { name: `${cleanCode}_00_Detail_Line.png`, type: 'texture', subtitle: 'Textures', size: '920 KB', ext: 'png' },
          { name: `${cleanCode}_00_Avatar_Card.png`, type: 'texture', subtitle: 'Textures', size: '1.3 MB', ext: 'png' },
        ],
      },
    ],
    rootFiles: [
      { name: `Art_${cleanCode}_00.fbx`, type: 'model', subtitle: 'Model', size: '4.4 MB', ext: 'fbx' },
    ],
  };
}

const GI_ELEMENT_PALETTES: Record<string, [string, string, string]> = {
  Cryo: ['#7dd3fc', '#38bdf8', '#1e3a5f'],
  Pyro: ['#fdba74', '#ef4444', '#450a0a'],
  Hydro: ['#bae6fd', '#2563eb', '#082f49'],
  Electro: ['#e9d5ff', '#9333ea', '#1e1b4b'],
  Anemo: ['#6ee7b7', '#10b981', '#064e3b'],
  Geo: ['#fde68a', '#d97706', '#291506'],
  Dendro: ['#bbf7d0', '#16a34a', '#052e16'],
};

const GI_CHARACTER_ITEMS: AssetItem[] = GI_CHARACTERS.map((char) => {
  const palette = GI_ELEMENT_PALETTES[char.element] ?? ['#cbd5e1', '#64748b', '#0f172a'];
  return {
    id: char.id,
    game: 'gi',
    category: 'characters',
    name: char.name,
    rarity: char.rarity,
    element: char.element,
    weaponOrPath: char.weapon,
    image: char.image,
    downloadUrl: char.downloadUrl,
    palette,
    hairStyle: 'long',
    variants: char.variants.map((v, idx) =>
      createStandardVariant(
        `${char.name}_${idx}`,
        v.name,
        palette,
        'VARIANT',
        v.image,
        v.downloadUrl
      )
    ),
  };
});

const DEFAULT_PALETTE: [string, string, string] = ['#cbd5e1', '#64748b', '#0f172a'];

const HSR_CHARACTER_ITEMS: AssetItem[] = HSR_CHARACTERS.map((char) => {
  const image = char.file ? `/assets/hsr/${encodeURI(char.file)}` : null;
  return {
    id: char.id,
    game: 'hsr',
    category: 'characters',
    name: char.name,
    rarity: 5,
    element: 'Astral',
    weaponOrPath: 'Path',
    image,
    downloadUrl: char.downloadUrl,
    palette: DEFAULT_PALETTE,
    hairStyle: 'long',
    variants: char.variants.map((v, idx) =>
      createStandardVariant(
        `${char.name}_${idx}`,
        v.name,
        DEFAULT_PALETTE,
        'VARIANT',
        v.file ? `/assets/hsr/${encodeURI(v.file)}` : null,
        v.downloadUrl
      )
    ),
  };
});

const DRIVE_ASSET_ITEMS: AssetItem[] = DRIVE_ASSETS.map((item) => ({
  id: item.id,
  game: item.game,
  category: item.category,
  name: item.name,
  rarity: 4,
  element: 'Asset',
  weaponOrPath: item.category,
  image: null,
  downloadUrl: item.downloadUrl,
  palette: DEFAULT_PALETTE,
  hairStyle: 'long',
  variants: [
    createStandardVariant(
      `${item.name}_0`,
      item.name,
      DEFAULT_PALETTE,
      'ARCHIVE',
      null,
      item.downloadUrl
    ),
  ],
}));

export const ASSETS: AssetItem[] = [
  ...GI_CHARACTER_ITEMS,
  ...HSR_CHARACTER_ITEMS,
  ...DRIVE_ASSET_ITEMS,
];

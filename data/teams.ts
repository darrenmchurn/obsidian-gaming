export interface Player {
  name: string
  role: string
  country: string
  countryCode: string
}

export interface Team {
  slug: string
  game: string
  shortName: string
  fullName: string
  color: string
  description: string
  roster: Player[]
}

export const teams: Team[] = [
  {
    slug: 'valorant',
    game: 'Valorant',
    shortName: 'OBSN VAL',
    fullName: 'Obsidian Gaming Valorant',
    color: '#ff4655',
    description:
      'Our Valorant squad competes at the highest level of tactical FPS, bringing precision and strategy to every match.',
    roster: [
      { name: 'PhantomX', role: 'Duelist', country: 'United States', countryCode: 'US' },
      { name: 'ShadowVeil', role: 'Sentinel', country: 'Canada', countryCode: 'CA' },
      { name: 'AshFire', role: 'Controller', country: 'Brazil', countryCode: 'BR' },
      { name: 'NightBlade', role: 'Initiator', country: 'United Kingdom', countryCode: 'GB' },
      { name: 'EmberStrike', role: 'Flex', country: 'Germany', countryCode: 'DE' },
    ],
  },
  {
    slug: 'cs2',
    game: 'CS2',
    shortName: 'OBSN CS2',
    fullName: 'Obsidian Gaming CS2',
    color: '#f97316',
    description:
      'Elite riflers and AWPers trained to dominate the competitive CS2 scene with calculated aggression.',
    roster: [
      { name: 'IronSight', role: 'AWPer', country: 'Sweden', countryCode: 'SE' },
      { name: 'FlameRush', role: 'Entry Fragger', country: 'Denmark', countryCode: 'DK' },
      { name: 'VaultBreaker', role: 'IGL', country: 'France', countryCode: 'FR' },
      { name: 'CrimsonEdge', role: 'Lurker', country: 'Poland', countryCode: 'PL' },
      { name: 'SteelGhost', role: 'Support', country: 'Finland', countryCode: 'FI' },
    ],
  },
  {
    slug: 'apex',
    game: 'Apex Legends',
    shortName: 'OBSN APEX',
    fullName: 'Obsidian Gaming Apex Legends',
    color: '#cd4220',
    description:
      'Fast-paced and relentless, our Apex squad thrives in the chaos of the arena.',
    roster: [
      { name: 'VolcanoRift', role: 'Fragger', country: 'United States', countryCode: 'US' },
      { name: 'StormSeeker', role: 'Support', country: 'South Korea', countryCode: 'KR' },
      { name: 'DuskRunner', role: 'IGL', country: 'Australia', countryCode: 'AU' },
    ],
  },
  {
    slug: 'cod',
    game: 'Call of Duty',
    shortName: 'OBSN COD',
    fullName: 'Obsidian Gaming Call of Duty',
    color: '#8b5cf6',
    description:
      'Competing in CDL-format competitions, our CoD team brings military precision and explosive gunplay.',
    roster: [
      { name: 'BlazeKing', role: 'SMG', country: 'United States', countryCode: 'US' },
      { name: 'ForgeShot', role: 'AR', country: 'United Kingdom', countryCode: 'GB' },
      { name: 'VenomStrike', role: 'AR', country: 'Canada', countryCode: 'CA' },
      { name: 'NullZone', role: 'SMG', country: 'United States', countryCode: 'US' },
    ],
  },
  {
    slug: 'overwatch',
    game: 'Overwatch 2',
    shortName: 'OBSN OW',
    fullName: 'Obsidian Gaming Overwatch 2',
    color: '#f99e1a',
    description:
      'Team synergy and hero mastery define our Overwatch roster as they climb the competitive ladder.',
    roster: [
      { name: 'TitanShield', role: 'Tank', country: 'South Korea', countryCode: 'KR' },
      { name: 'CinderHeal', role: 'Support', country: 'Taiwan', countryCode: 'TW' },
      { name: 'PhoenixFlare', role: 'DPS', country: 'United States', countryCode: 'US' },
      { name: 'ArcLight', role: 'Support', country: 'Japan', countryCode: 'JP' },
      { name: 'ObsidianPeak', role: 'DPS', country: 'Brazil', countryCode: 'BR' },
    ],
  },
  {
    slug: 'rocket-league',
    game: 'Rocket League',
    shortName: 'OBSN RL',
    fullName: 'Obsidian Gaming Rocket League',
    color: '#06b6d4',
    description:
      'Mechanical skill and team rotation make our Rocket League squad a force on the pitch.',
    roster: [
      { name: 'HyperBoost', role: 'Striker', country: 'France', countryCode: 'FR' },
      { name: 'NitroFlame', role: 'Midfielder', country: 'Netherlands', countryCode: 'NL' },
      { name: 'AerialKing', role: 'Goalkeeper', country: 'Germany', countryCode: 'DE' },
    ],
  },
]

export function getTeamBySlug(slug: string): Team | undefined {
  return teams.find((t) => t.slug === slug)
}

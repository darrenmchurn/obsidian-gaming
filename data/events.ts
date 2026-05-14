export interface GameEvent {
  id: string
  name: string
  game: string
  teamSlug: string
  teamShortName: string
  date: string
  time: string
  type: 'tournament' | 'qualifier' | 'scrim' | 'league'
  tier: 'S' | 'A' | 'B'
  prizePool?: string
  status: 'upcoming' | 'live' | 'completed'
  result?: string
  opponent?: string
}

export const events: GameEvent[] = [
  {
    id: '1',
    name: 'Ignition Series Grand Finals',
    game: 'Valorant',
    teamSlug: 'valorant',
    teamShortName: 'OBSN VAL',
    date: '2026-05-20',
    time: '18:00 EST',
    type: 'tournament',
    tier: 'S',
    prizePool: '$50,000',
    status: 'upcoming',
    opponent: 'Inferno Esports',
  },
  {
    id: '2',
    name: 'CS2 Premier League — Week 8',
    game: 'CS2',
    teamSlug: 'cs2',
    teamShortName: 'OBSN CS2',
    date: '2026-05-22',
    time: '20:00 CET',
    type: 'league',
    tier: 'A',
    status: 'upcoming',
    opponent: 'Nordic Storm',
  },
  {
    id: '3',
    name: 'ALGS Pro League Split 2',
    game: 'Apex Legends',
    teamSlug: 'apex',
    teamShortName: 'OBSN APEX',
    date: '2026-05-25',
    time: '15:00 EST',
    type: 'league',
    tier: 'S',
    prizePool: '$500,000 pool',
    status: 'upcoming',
  },
  {
    id: '4',
    name: 'Rocket League Major Qualifier',
    game: 'Rocket League',
    teamSlug: 'rocket-league',
    teamShortName: 'OBSN RL',
    date: '2026-06-01',
    time: '14:00 EST',
    type: 'qualifier',
    tier: 'A',
    prizePool: '$10,000',
    status: 'upcoming',
    opponent: 'Orbital Clash',
  },
  {
    id: '5',
    name: 'CDL Major 3 — Open Bracket',
    game: 'Call of Duty',
    teamSlug: 'cod',
    teamShortName: 'OBSN COD',
    date: '2026-06-07',
    time: '12:00 EST',
    type: 'tournament',
    tier: 'S',
    prizePool: '$250,000',
    status: 'upcoming',
  },
  {
    id: '6',
    name: 'OWL Midseason Showdown',
    game: 'Overwatch 2',
    teamSlug: 'overwatch',
    teamShortName: 'OBSN OW',
    date: '2026-06-14',
    time: '17:00 EST',
    type: 'tournament',
    tier: 'S',
    prizePool: '$100,000',
    status: 'upcoming',
    opponent: 'Solar Flare',
  },
  {
    id: '7',
    name: 'Valorant Champions Tour Open',
    game: 'Valorant',
    teamSlug: 'valorant',
    teamShortName: 'OBSN VAL',
    date: '2026-04-30',
    time: '18:00 EST',
    type: 'tournament',
    tier: 'S',
    prizePool: '$75,000',
    status: 'completed',
    result: 'Top 4',
    opponent: 'Void Collective',
  },
  {
    id: '8',
    name: 'CS2 ESL Pro League S21',
    game: 'CS2',
    teamSlug: 'cs2',
    teamShortName: 'OBSN CS2',
    date: '2026-05-05',
    time: '20:00 CET',
    type: 'league',
    tier: 'S',
    prizePool: '$750,000 pool',
    status: 'completed',
    result: '5th–8th Place',
  },
]

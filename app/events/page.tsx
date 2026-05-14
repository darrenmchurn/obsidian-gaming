import type { Metadata } from 'next'
import EventCard from '@/components/EventCard'
import SectionHeader from '@/components/SectionHeader'
import { events } from '@/data/events'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Upcoming tournaments, matches, and competitive events for Obsidian Gaming across all titles.',
}

const games = ['All', 'Valorant', 'CS2', 'Apex Legends', 'Call of Duty', 'Overwatch 2', 'Rocket League']

export default function EventsPage() {
  const upcoming = events.filter((e) => e.status === 'upcoming' || e.status === 'live')
  const past = events.filter((e) => e.status === 'completed')

  return (
    <div className="min-h-screen">
      {/* Page hero */}
      <section className="relative py-24 bg-surface border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" aria-hidden="true" />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #f97316, transparent)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Schedule"
            title="Events & Matches"
            subtitle="Track Obsidian Gaming across all competitive events — from qualifier stages to grand finals."
          />
        </div>
      </section>

      {/* Game filter chips — visual only (no JS filtering for static export simplicity) */}
      <section className="py-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {games.map((game, i) => (
              <span
                key={game}
                className={`font-display font-semibold text-xs uppercase tracking-wider px-4 py-2 clip-angular-sm cursor-default ${
                  i === 0
                    ? 'bg-accent text-black'
                    : 'border border-white/10 text-muted hover:border-accent/50 hover:text-accent transition-colors'
                }`}
              >
                {game}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-white uppercase mb-8">
            Upcoming Events
            <span className="ml-3 text-accent text-2xl">({upcoming.length})</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {upcoming.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Past results */}
      {past.length > 0 && (
        <section className="py-20 bg-surface border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-3xl text-white uppercase mb-8">
              Recent Results
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {past.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}

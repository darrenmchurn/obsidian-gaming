import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { teams, getTeamBySlug } from '@/data/teams'
import { events } from '@/data/events'
import EventCard from '@/components/EventCard'

export function generateStaticParams() {
  return teams.map((team) => ({ slug: team.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const team = getTeamBySlug(params.slug)
  if (!team) return {}
  return {
    title: team.fullName,
    description: team.description,
  }
}

const flagEmoji = (code: string) => {
  return code
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)))
}

export default function TeamDetailPage({ params }: { params: { slug: string } }) {
  const team = getTeamBySlug(params.slug)
  if (!team) notFound()

  const teamEvents = events.filter((e) => e.teamSlug === team.slug)
  const upcomingEvents = teamEvents.filter((e) => e.status === 'upcoming')
  const pastEvents = teamEvents.filter((e) => e.status === 'completed')

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-obsidian" />
        <div
          className="absolute inset-0 bg-grid-pattern bg-grid opacity-40"
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: `radial-gradient(circle, ${team.color}15 0%, transparent 70%)` }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-8 text-sm">
            <Link href="/teams" className="text-muted hover:text-accent transition-colors">Teams</Link>
            <span className="text-muted">/</span>
            <span className="text-white">{team.shortName}</span>
          </div>

          {/* Game tag */}
          <span
            className="inline-block font-display font-bold text-sm tracking-widest uppercase mb-4 border px-3 py-1"
            style={{ color: team.color, borderColor: `${team.color}40`, background: `${team.color}10` }}
          >
            {team.game}
          </span>

          <h1
            className="font-display font-black text-6xl md:text-8xl uppercase leading-none mb-6"
            style={{ color: team.color }}
          >
            {team.shortName}
          </h1>
          <p className="text-muted text-lg max-w-xl leading-relaxed">{team.description}</p>
        </div>

        {/* Bottom line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{ background: `linear-gradient(90deg, ${team.color}60, transparent)` }}
          aria-hidden="true"
        />
      </section>

      {/* Roster */}
      <section className="py-20 bg-surface border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display font-bold text-3xl text-white uppercase mb-8">Roster</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {team.roster.map((player, i) => (
              <div
                key={player.name}
                className="bg-obsidian border border-white/5 clip-angular-sm p-5 hover:border-accent/30 transition-all group"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-muted text-xs font-display uppercase tracking-wider">
                    #{String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg" title={player.country}>
                    {flagEmoji(player.countryCode)}
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white uppercase mb-1 group-hover:text-accent transition-colors">
                  {player.name}
                </h3>
                <div className="flex items-center justify-between">
                  <span className="text-muted text-sm">{player.role}</span>
                  <span className="text-muted text-xs">{player.country}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      {(upcomingEvents.length > 0 || pastEvents.length > 0) && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {upcomingEvents.length > 0 && (
              <>
                <h2 className="font-display font-bold text-3xl text-white uppercase mb-8">Upcoming Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                  {upcomingEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </>
            )}
            {pastEvents.length > 0 && (
              <>
                <h2 className="font-display font-bold text-3xl text-white uppercase mb-8">Recent Results</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {pastEvents.map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      )}
    </div>
  )
}

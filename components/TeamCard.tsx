import Link from 'next/link'
import type { Team } from '@/data/teams'

export default function TeamCard({ team }: { team: Team }) {
  return (
    <Link href={`/teams/${team.slug}`} className="group block">
      <div
        className="relative bg-surface border border-white/5 clip-angular p-6 hover:border-accent/40 transition-all duration-300 hover:glow-accent-sm"
        style={{ '--team-color': team.color } as React.CSSProperties}
      >
        {/* Accent bar top */}
        <div
          className="absolute top-0 left-0 right-0 h-0.5"
          style={{ background: `linear-gradient(90deg, ${team.color}, transparent)` }}
        />

        {/* Game label */}
        <span
          className="inline-block font-display font-semibold text-xs tracking-widest uppercase mb-3"
          style={{ color: team.color }}
        >
          {team.game}
        </span>

        {/* Team name */}
        <h3 className="font-display font-bold text-2xl text-white uppercase mb-2 group-hover:text-accent transition-colors">
          {team.shortName}
        </h3>

        <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-2">{team.description}</p>

        {/* Roster preview */}
        <div className="space-y-1">
          {team.roster.slice(0, 2).map((player) => (
            <div key={player.name} className="flex items-center justify-between text-xs">
              <span className="text-white font-medium">{player.name}</span>
              <span className="text-muted">{player.role}</span>
            </div>
          ))}
          {team.roster.length > 2 && (
            <p className="text-muted text-xs">+{team.roster.length - 2} more</p>
          )}
        </div>

        {/* CTA */}
        <div className="mt-5 flex items-center gap-1 text-accent text-xs font-display font-semibold uppercase tracking-wider">
          View Roster
          <svg className="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  )
}

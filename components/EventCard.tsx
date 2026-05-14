import type { GameEvent } from '@/data/events'

const tierColors: Record<string, string> = {
  S: 'text-accent border-accent/40 bg-accent/10',
  A: 'text-blue-400 border-blue-400/40 bg-blue-400/10',
  B: 'text-muted border-muted/40 bg-muted/10',
}

const typeLabels: Record<string, string> = {
  tournament: 'Tournament',
  qualifier: 'Qualifier',
  scrim: 'Scrimmage',
  league: 'League Match',
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function EventCard({ event }: { event: GameEvent }) {
  const isCompleted = event.status === 'completed'
  const isLive = event.status === 'live'

  return (
    <div className={`bg-surface border clip-angular-sm p-5 transition-all duration-300 ${isCompleted ? 'border-white/5 opacity-70' : 'border-white/5 hover:border-accent/30 hover:glow-accent-sm'}`}>
      {/* Top row */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className={`text-xs font-display font-semibold uppercase tracking-wider border px-2 py-0.5 ${tierColors[event.tier]}`}>
            Tier {event.tier}
          </span>
          <span className="text-muted text-xs">{typeLabels[event.type]}</span>
        </div>
        {isLive && (
          <span className="flex items-center gap-1 text-accent-2 text-xs font-bold uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-2 animate-pulse" />
            Live
          </span>
        )}
        {isCompleted && (
          <span className="text-muted text-xs">Completed</span>
        )}
      </div>

      {/* Event name */}
      <h3 className="font-display font-bold text-lg text-white uppercase mb-1 leading-tight">{event.name}</h3>

      {/* Game + team */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-accent text-sm font-semibold">{event.game}</span>
        <span className="text-muted text-xs">·</span>
        <span className="text-muted text-sm">{event.teamShortName}</span>
      </div>

      {/* Details row */}
      <div className="flex flex-wrap gap-4 text-sm">
        <div>
          <span className="text-muted text-xs block uppercase tracking-wider">Date</span>
          <span className="text-white text-sm font-medium">{formatDate(event.date)}</span>
        </div>
        {!isCompleted && (
          <div>
            <span className="text-muted text-xs block uppercase tracking-wider">Time</span>
            <span className="text-white text-sm font-medium">{event.time}</span>
          </div>
        )}
        {event.opponent && (
          <div>
            <span className="text-muted text-xs block uppercase tracking-wider">vs.</span>
            <span className="text-white text-sm font-medium">{event.opponent}</span>
          </div>
        )}
        {event.prizePool && (
          <div>
            <span className="text-muted text-xs block uppercase tracking-wider">Prize</span>
            <span className="text-accent text-sm font-semibold">{event.prizePool}</span>
          </div>
        )}
        {event.result && (
          <div>
            <span className="text-muted text-xs block uppercase tracking-wider">Result</span>
            <span className="text-white text-sm font-medium">{event.result}</span>
          </div>
        )}
      </div>
    </div>
  )
}

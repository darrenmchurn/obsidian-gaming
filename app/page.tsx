import Link from 'next/link'
import HeroSection from '@/components/HeroSection'
import TeamCard from '@/components/TeamCard'
import EventCard from '@/components/EventCard'
import SectionHeader from '@/components/SectionHeader'
import { teams } from '@/data/teams'
import { events } from '@/data/events'

const socials = [
  { name: 'YouTube', href: 'https://youtube.com/@ObsidianGaming', label: 'Watch on YouTube' },
  { name: 'Twitch', href: 'https://twitch.tv/ObsidianGaming', label: 'Stream on Twitch' },
  { name: 'Instagram', href: 'https://instagram.com/ObsidianGaming', label: 'Follow on Instagram' },
  { name: 'TikTok', href: 'https://tiktok.com/@ObsidianGaming', label: 'Follow on TikTok' },
]

export default function HomePage() {
  const upcomingEvents = events.filter((e) => e.status === 'upcoming').slice(0, 3)

  return (
    <>
      <HeroSection />

      {/* About Strip */}
      <section className="py-20 bg-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-accent font-display font-semibold text-sm tracking-widest uppercase mb-3">
                Who We Are
              </span>
              <h2 className="font-display font-black text-4xl md:text-5xl text-white uppercase leading-tight mb-6">
                Built for the
                <br />
                <span className="text-accent">Long Game</span>
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                Obsidian Gaming was founded by gamers who refused to settle. We recruit the sharpest minds and fastest hands across six of the most competitive titles on the planet — then give them everything they need to win.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-accent font-display font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
              >
                Our Story
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Titles Competed', value: '6' },
                { label: 'Roster Size', value: '24+' },
                { label: 'Tournament Wins', value: '17' },
                { label: 'Prize Earnings', value: '$2M+' },
              ].map((item) => (
                <div key={item.label} className="bg-obsidian border border-white/5 clip-angular-sm p-6">
                  <div className="font-display font-black text-3xl text-accent mb-1">{item.value}</div>
                  <div className="text-muted text-sm uppercase tracking-wider">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Teams */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <SectionHeader label="Rosters" title="Our Teams" />
            <Link
              href="/teams"
              className="hidden md:flex items-center gap-2 text-accent font-display font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
            >
              All Teams
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team) => (
              <TeamCard key={team.slug} team={team} />
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 bg-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <SectionHeader label="Schedule" title="Upcoming Events" />
            <Link
              href="/events"
              className="hidden md:flex items-center gap-2 text-accent font-display font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all"
            >
              Full Schedule
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Social bar */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            label="Community"
            title="Follow the Journey"
            subtitle="Stay connected with live match coverage, behind-the-scenes content, and team updates across all our platforms."
            centered
          />
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {socials.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 hover:border-accent/50 hover:text-accent text-muted font-display font-semibold text-sm uppercase tracking-wider px-8 py-4 clip-angular-sm transition-all hover:glow-accent-sm"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

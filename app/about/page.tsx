import type { Metadata } from 'next'
import SectionHeader from '@/components/SectionHeader'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Obsidian Gaming — our founding story, mission, and the team behind the org.',
}

const staff = [
  {
    name: 'Marcus "Forge" Hale',
    role: 'Founder & CEO',
    bio: 'Former pro player turned org builder. Founded Obsidian Gaming to create an org he wished existed during his playing days.',
  },
  {
    name: 'Priya Nair',
    role: 'General Manager',
    bio: 'Operations expert with 8 years in competitive gaming management across NA and EU circuits.',
  },
  {
    name: 'Jordan "Spark" Wu',
    role: 'Head of Coaching',
    bio: 'Oversees coaching staff across all six rosters and leads the org-wide performance development program.',
  },
  {
    name: 'Casey Odom',
    role: 'Head of Content',
    bio: "Drives OBSN's social presence, stream production, and player storytelling across all platforms.",
  },
]

const values = [
  {
    title: 'Compete Without Compromise',
    body: 'We only field teams we believe can win. No filler, no half-measures. Every roster is built to be a contender.',
  },
  {
    title: 'Players First',
    body: "Salaries, health, mental wellness, equipment — we invest in our players beyond the game because that's what real orgs do.",
  },
  {
    title: 'Community Over Clout',
    body: 'Our fans are the reason we push harder. We show up for them with transparent content, real access, and a community worth being part of.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden bg-obsidian">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" aria-hidden="true" />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.07) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-block text-accent font-display font-semibold text-sm tracking-widest uppercase mb-4">
            Our Story
          </span>
          <h1 className="font-display font-black text-6xl md:text-8xl text-white uppercase leading-none mb-8">
            Forged in<br />
            <span className="text-accent text-glow">Fire</span>
          </h1>
          <p className="text-muted text-xl max-w-2xl leading-relaxed">
            Obsidian Gaming was born from a simple conviction: that players deserve an org that takes them as seriously as they take the game.
          </p>
        </div>
      </section>

      {/* Founding story */}
      <section className="py-20 bg-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader label="Origin" title="How We Started" />
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  In 2022, Marcus "Forge" Hale had just retired from five years of professional FPS play. He'd seen the best and worst of esports orgs — the broken promises, the short contracts, the players burned out with nothing to show for their peak years.
                </p>
                <p>
                  He started Obsidian Gaming with one Valorant team, a small budget, and a refusal to do things the old way. Two years later, we're across six titles, fielding some of the most promising rosters in competitive gaming.
                </p>
                <p>
                  The name is intentional. Obsidian is one of the sharpest naturally occurring materials on earth. We intend to cut just as deep.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-6">
              {[
                { year: '2022', event: 'Founded with OBSN Valorant roster' },
                { year: '2023', event: 'Expanded to CS2 and Rocket League' },
                { year: '2024', event: 'Added Apex Legends and Overwatch 2' },
                { year: '2025', event: 'Launched Call of Duty division & won first Tier-A title' },
                { year: '2026', event: 'Six-title roster, 24 active pros, full org infrastructure' },
              ].map((item) => (
                <div key={item.year} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 text-right">
                    <span className="font-display font-bold text-accent text-sm">{item.year}</span>
                  </div>
                  <div className="flex-shrink-0 mt-1.5 w-px h-full bg-accent/30 relative">
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <p className="text-muted text-sm leading-relaxed pt-0.5">{item.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Culture" title="What We Stand For" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-surface border border-white/5 clip-angular p-8 hover:border-accent/30 transition-all">
                <div className="w-8 h-0.5 bg-accent mb-6" />
                <h3 className="font-display font-bold text-xl text-white uppercase mb-3">{v.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff */}
      <section className="py-20 bg-surface border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Leadership" title="The Team Behind the Teams" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {staff.map((member) => (
              <div key={member.name} className="bg-obsidian border border-white/5 clip-angular p-6 hover:border-accent/30 transition-all group">
                {/* Avatar placeholder */}
                <div className="w-16 h-16 bg-surface-2 clip-angular-sm flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <span className="font-display font-black text-2xl text-accent">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-display font-bold text-lg text-white uppercase leading-tight mb-1">
                  {member.name}
                </h3>
                <span className="text-accent text-xs font-semibold uppercase tracking-wider">{member.role}</span>
                <p className="text-muted text-sm leading-relaxed mt-3">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeader
            label="Opportunities"
            title="Join Obsidian Gaming"
            subtitle="Whether you're a player, coach, analyst, or content creator — if you have what it takes, we want to hear from you."
            centered
          />
          <a
            href="mailto:contact@obsidiangaming.gg"
            className="inline-flex items-center gap-2 bg-accent text-black font-display font-bold text-sm uppercase tracking-wider px-8 py-4 clip-angular hover:bg-orange-400 active:scale-95 transition-all glow-accent-sm"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>
    </div>
  )
}

import type { Metadata } from 'next'
import TeamCard from '@/components/TeamCard'
import SectionHeader from '@/components/SectionHeader'
import { teams } from '@/data/teams'

export const metadata: Metadata = {
  title: 'Teams',
  description: 'Meet the Obsidian Gaming rosters competing across Valorant, CS2, Apex Legends, Call of Duty, Overwatch 2, and Rocket League.',
}

export default function TeamsPage() {
  return (
    <div className="min-h-screen">
      {/* Page hero */}
      <section className="relative py-24 bg-surface border-b border-white/5 overflow-hidden">
        <div
          className="absolute inset-0 bg-grid-pattern bg-grid opacity-50"
          aria-hidden="true"
        />
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, #f97316, transparent)' }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Rosters"
            title="Our Teams"
            subtitle="Six titles. One banner. Every player selected for their dedication, skill, and hunger to compete at the highest level."
          />
        </div>
      </section>

      {/* Teams grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teams.map((team) => (
              <TeamCard key={team.slug} team={team} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

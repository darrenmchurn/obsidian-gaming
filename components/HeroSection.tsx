import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-obsidian">
      {/* Background grid */}
      <div
        className="absolute inset-0 bg-grid-pattern bg-grid opacity-100"
        aria-hidden="true"
      />

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #080808)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span className="h-px w-8 bg-accent" />
          <span className="font-display font-semibold text-accent text-sm uppercase tracking-[0.3em]">
            Esports Organization
          </span>
          <span className="h-px w-8 bg-accent" />
        </div>

        {/* Main heading */}
        <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white uppercase leading-none mb-6">
          Obsidian
          <br />
          <span className="text-glow" style={{ color: '#f97316' }}>
            Gaming
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-muted text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Forged in fire. Competing across six titles at the highest level of professional esports.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/teams"
            className="bg-accent text-black font-display font-bold text-sm uppercase tracking-wider px-8 py-4 clip-angular hover:bg-orange-400 active:scale-95 transition-all glow-accent-sm"
          >
            Meet the Teams
          </Link>
          <Link
            href="/store"
            className="border border-accent/50 text-accent font-display font-bold text-sm uppercase tracking-wider px-8 py-4 clip-angular hover:bg-accent/10 active:scale-95 transition-all"
          >
            Shop Merch
          </Link>
        </div>

        {/* Stats strip */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { value: '6', label: 'Active Teams' },
            { value: '24', label: 'Pro Players' },
            { value: '3+', label: 'Years Competing' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display font-black text-4xl text-accent text-glow">{stat.value}</div>
              <div className="text-muted text-sm uppercase tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-muted text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-4 h-4 text-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

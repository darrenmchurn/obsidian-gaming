'use client'

import { useState } from 'react'
import ProductCard from '@/components/ProductCard'
import SectionHeader from '@/components/SectionHeader'
import { products } from '@/data/products'

const categories = ['All', 'jersey', 'hoodie', 'tshirt', 'hat', 'accessories'] as const
type Category = (typeof categories)[number]

const categoryLabels: Record<string, string> = {
  All: 'All',
  jersey: 'Jerseys',
  hoodie: 'Hoodies',
  tshirt: 'T-Shirts',
  hat: 'Headwear',
  accessories: 'Accessories',
}

export default function StorePage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [cart, setCart] = useState<Record<string, number>>({})

  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0)

  const filtered =
    activeCategory === 'All' ? products : products.filter((p) => p.category === activeCategory)

  function addToCart(id: string) {
    setCart((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }))
  }

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
          <div className="flex items-end justify-between">
            <SectionHeader
              label="Official Merch"
              title="OBG Store"
              subtitle="Represent the org. Built for fans who take it as seriously as we do."
            />
            {/* Cart indicator */}
            {cartCount > 0 && (
              <div className="hidden md:flex items-center gap-3 bg-accent/10 border border-accent/30 px-5 py-3 clip-angular-sm">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.4 6M17 13l1.4 6M9 19a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
                <span className="font-display font-bold text-accent">{cartCount} item{cartCount !== 1 ? 's' : ''} in cart</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Category filter */}
      <section className="py-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-display font-semibold text-xs uppercase tracking-wider px-4 py-2 clip-angular-sm transition-all ${
                  activeCategory === cat
                    ? 'bg-accent text-black'
                    : 'border border-white/10 text-muted hover:border-accent/50 hover:text-accent'
                }`}
              >
                {categoryLabels[cat]}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-muted text-xs text-center">
            This is a merchandise showcase. Checkout and payment functionality is coming soon. Contact us to pre-order.
          </p>
        </div>
      </section>
    </div>
  )
}

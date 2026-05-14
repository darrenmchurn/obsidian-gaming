'use client'

import type { Product } from '@/data/products'

const categoryIcons: Record<string, string> = {
  jersey: '👕',
  hoodie: '🧥',
  tshirt: '👔',
  hat: '🧢',
  accessories: '🎮',
}

export default function ProductCard({
  product,
  onAddToCart,
}: {
  product: Product
  onAddToCart: (id: string) => void
}) {
  return (
    <div className="group bg-surface border border-white/5 clip-angular hover:border-accent/30 transition-all duration-300 hover:glow-accent-sm flex flex-col">
      {/* Image placeholder */}
      <div className="relative aspect-square bg-surface-2 flex items-center justify-center overflow-hidden">
        <span className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
          {categoryIcons[product.category]}
        </span>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent" />

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-accent text-black text-xs font-display font-bold uppercase px-2 py-0.5 clip-angular-sm">
            {product.badge}
          </span>
        )}
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-muted text-xs uppercase tracking-wider font-display mb-1">{product.category}</span>
        <h3 className="font-display font-bold text-lg text-white uppercase leading-tight mb-2">{product.name}</h3>
        <p className="text-muted text-sm leading-relaxed mb-4 flex-1 line-clamp-2">{product.description}</p>

        {/* Sizes */}
        {product.sizes && (
          <div className="flex flex-wrap gap-1 mb-4">
            {product.sizes.map((size) => (
              <span
                key={size}
                className="text-xs border border-white/10 text-muted px-1.5 py-0.5 hover:border-accent/50 hover:text-accent cursor-pointer transition-colors"
              >
                {size}
              </span>
            ))}
          </div>
        )}

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-2xl text-white">
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => onAddToCart(product.id)}
            className="bg-accent text-black font-display font-bold text-sm uppercase tracking-wider px-4 py-2 clip-angular-sm hover:bg-orange-400 active:scale-95 transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

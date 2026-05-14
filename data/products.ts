export interface Product {
  id: string
  name: string
  price: number
  category: 'jersey' | 'hoodie' | 'tshirt' | 'accessories' | 'hat'
  description: string
  badge?: string
  sizes?: string[]
}

export const products: Product[] = [
  {
    id: '1',
    name: 'OBSN Pro Jersey 2026',
    price: 79.99,
    category: 'jersey',
    description: 'Official team jersey worn by our pros. Moisture-wicking performance fabric with full sublimation print.',
    badge: 'New',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: '2',
    name: 'Obsidian Hoodie — Ember Edition',
    price: 89.99,
    category: 'hoodie',
    description: 'Premium heavyweight hoodie with embroidered logo and flame-gradient print on the back.',
    badge: 'Bestseller',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: '3',
    name: 'OBSN Classic Tee',
    price: 34.99,
    category: 'tshirt',
    description: 'Clean, comfortable tee with the Obsidian Gaming wordmark. Available in black and charcoal.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: '4',
    name: 'Obsidian Snapback Cap',
    price: 39.99,
    category: 'hat',
    description: 'Structured snapback with embroidered OBSN logo and adjustable strap. One size fits most.',
  },
  {
    id: '5',
    name: 'Forge Mousepad XL',
    price: 29.99,
    category: 'accessories',
    description: 'Extended XL mousepad (900×400mm) with non-slip base and stitched edges.',
    badge: 'New',
  },
  {
    id: '6',
    name: 'OBSN Valorant Team Jersey',
    price: 74.99,
    category: 'jersey',
    description: 'Replica jersey for our Valorant roster. Lightweight, breathable, game-ready.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: '7',
    name: 'Obsidian Zip Hoodie',
    price: 94.99,
    category: 'hoodie',
    description: 'Full-zip fleece hoodie with dual pockets and woven OBSN patch on the chest.',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
  },
  {
    id: '8',
    name: 'Ember Beanie',
    price: 24.99,
    category: 'hat',
    description: 'Soft knit beanie with embroidered flame logo. Perfect for the off-season grind.',
  },
  {
    id: '9',
    name: 'OBSN Lanyard + ID Badge',
    price: 12.99,
    category: 'accessories',
    description: 'Woven lanyard with metal clip and a collectible OBSN ID badge holder.',
  },
]

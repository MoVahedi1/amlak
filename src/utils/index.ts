import { clsx, type ClassValue } from "clsx"

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

export function formatPrice(price: number, type: 'buy' | 'rent' = 'buy'): string {
  if (type === 'rent') {
    return `${price.toLocaleString('fa-IR')} تومان/ماه`
  }
  return `${price.toLocaleString('fa-IR')} تومان`
}

export function formatSize(size: number): string {
  return `${size} متر مربع`
}

export function formatDate(date: string): string {
  const options: Intl.DateTimeFormatOptions = { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  }
  return new Date(date).toLocaleDateString('fa-IR', options)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength).trim() + '...'
}

export function getAveragePrice(neighborhood: string, properties: any[]): number {
  const neighborhoodProperties = properties.filter(p => p.neighborhood === neighborhood)
  if (neighborhoodProperties.length === 0) return 0
  
  const total = neighborhoodProperties.reduce((sum, p) => sum + p.price, 0)
  return Math.round(total / neighborhoodProperties.length)
}

export function getPropertyUrl(id: number): string {
  return `/properties/${id}`
}

export function getNeighborhoodUrl(id: string): string {
  return `/neighborhoods/${id}`
}

export function getBlogUrl(id: number): string {
  return `/blog/${id}`
}
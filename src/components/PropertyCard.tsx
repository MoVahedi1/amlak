'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Heart, Bed, Bath, Square, MapPin, Home } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatPrice, formatSize, getPropertyUrl } from '@/utils'
import { useFavorites } from '@/hooks'

interface PropertyCardProps {
  property: {
    id: number
    title: string
    price: number
    type: 'buy' | 'rent'
    category: string
    neighborhood: string
    size: number
    rooms: number
    bedrooms: number
    bathrooms: number
    images: string[]
    featured?: boolean
  }
  showFavorite?: boolean
}

export default function PropertyCard({ property, showFavorite = true }: PropertyCardProps) {
  const { toggleFavorite, isFavorite } = useFavorites()

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault()
    toggleFavorite(property.id)
  }

  return (
    <Card className="group hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <Link href={getPropertyUrl(property.id)}>
          <div className="relative h-48 overflow-hidden">
            {/* Try local image first, fallback to Unsplash */}
            <Image
              src={
                property.images[0].includes('tehran') 
                  ? property.images[0] 
                  : property.images[0]
              }
              alt={property.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                // Fallback to Unsplash if local image fails
                const target = e.target as HTMLImageElement
                if (target.src.includes('tehran')) {
                  target.src = property.images[0].replace('public/images/tehran/', '/images/tehran/')
                }
              }}
            />
            {property.featured && (
              <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                ویژه
              </div>
            )}
            <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold">
              {property.type === 'buy' ? 'فروش' : 'اجاره'}
            </div>
          </div>
        </Link>
        {showFavorite && (
          <button
            onClick={handleFavoriteClick}
            className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-shadow"
          >
            <Heart
              className={`w-5 h-5 ${isFavorite(property.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
            />
          </button>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-500 flex items-center">
            <MapPin className="w-4 h-4 mr-1" />
            {property.neighborhood}
          </span>
          <span className="text-sm text-gray-500 flex items-center">
            <Home className="w-4 h-4 mr-1" />
            {property.category}
          </span>
        </div>
        
        <Link href={getPropertyUrl(property.id)}>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {property.title}
          </h3>
        </Link>
        
        <div className="text-2xl font-bold text-blue-600 mb-3">
          {formatPrice(property.price, property.type)}
        </div>
        
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <div className="flex items-center">
            <Bed className="w-4 h-4 mr-1" />
            <span>{property.bedrooms} beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="w-4 h-4 mr-1" />
            <span>{property.bathrooms} baths</span>
          </div>
          <div className="flex items-center">
            <Square className="w-4 h-4 mr-1" />
            <span>{formatSize(property.size)}</span>
          </div>
        </div>
        
        <Button variant="outline" className="w-full" asChild>
          <Link href={getPropertyUrl(property.id)}>
            View Details
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}
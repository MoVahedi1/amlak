'use client'

import { useState } from 'react'
import PropertyCard from '@/components/PropertyCard'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { Star, Filter, Grid, List } from 'lucide-react'
import propertiesData from '@/data/properties.json'

export default function FeaturedPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('featured')

  const featuredProperties = propertiesData.filter(property => property.featured)

  const sortedProperties = [...featuredProperties].sort((a, b) => {
    switch (sortBy) {
      case 'price-high':
        return b.price - a.price
      case 'price-low':
        return a.price - b.price
      case 'size-large':
        return b.size - a.size
      case 'size-small':
        return a.size - b.size
      case 'featured':
      default:
        return a.id - b.id
    }
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Featured Properties
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Handpicked premium properties in Tehran's most desirable locations
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Star className="w-6 h-6 mr-2 text-yellow-400 fill-current" />
                <span className="text-lg">Premium Selection</span>
              </div>
              <div className="flex items-center">
                <span className="text-lg">{featuredProperties.length} Properties</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured First</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="size-large">Size: Large to Small</SelectItem>
                    <SelectItem value="size-small">Size: Small to Large</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              Showing {sortedProperties.length} featured properties
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {sortedProperties.length > 0 ? (
            <div className={viewMode === 'grid' ? 
              "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : 
              "space-y-6"
            }>
              {sortedProperties.map((property) => (
                <div key={property.id} className={viewMode === 'list' ? 'w-full' : ''}>
                  <PropertyCard property={property} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Star className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold mb-2">No featured properties available</h3>
              <p className="text-gray-600 mb-4">
                Check back soon for new featured listings.
              </p>
              <Button asChild>
                <a href="/properties">Browse All Properties</a>
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Featured Properties?</h2>
            <p className="text-gray-600 text-lg">
              Our featured selection offers the best of Tehran's real estate market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Star className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                <h3 className="text-lg font-semibold mb-2">Premium Quality</h3>
                <p className="text-gray-600 text-sm">
                  Only the highest quality properties make it to our featured selection
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-blue-600 font-bold">📍</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Prime Locations</h3>
                <p className="text-gray-600 text-sm">
                  Located in Tehran's most desirable neighborhoods
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-green-600 font-bold">💎</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Exclusive Access</h3>
                <p className="text-gray-600 text-sm">
                  Many featured properties are exclusive listings not available elsewhere
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-purple-600 font-bold">🏆</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Expert Verified</h3>
                <p className="text-gray-600 text-sm">
                  Each property is carefully vetted by our expert team
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Finding the Perfect Property?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our expert agents are here to help you find the ideal featured property that meets your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="/agents">Find an Agent</a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
              <a href="/contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  MapPin, 
  Home, 
  TrendingUp, 
  Star,
  Search,
  Filter,
  Building,
  Car,
  School,
  ShoppingBag,
  Trees,
  Train
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { formatPrice } from '@/utils'
import neighborhoodsData from '@/data/neighborhoods.json'

export default function NeighborhoodsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [filterBy, setFilterBy] = useState('all')

  const filteredNeighborhoods = neighborhoodsData
    .filter(neighborhood => {
      const matchesSearch = neighborhood.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           neighborhood.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesFilter = filterBy === 'all' || 
                           (filterBy === 'luxury' && neighborhood.averagePrice > 1000000000) ||
                           (filterBy === 'affordable' && neighborhood.averagePrice < 800000000) ||
                           (filterBy === 'popular' && neighborhood.propertiesCount > 40)
      return matchesSearch && matchesFilter
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-high':
          return b.averagePrice - a.averagePrice
        case 'price-low':
          return a.averagePrice - b.averagePrice
        case 'properties':
          return b.propertiesCount - a.propertiesCount
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })

  const getNeighborhoodIcon = (feature: string) => {
    const icons: { [key: string]: any } = {
      'Shopping Centers': ShoppingBag,
      'Restaurants': Building,
      'Schools': School,
      'Parks': Trees,
      'Metro Access': Train,
      'Mountains': Trees,
      'Forest': Trees,
      'Luxury Villas': Home,
      'International Schools': School,
      'Ski Resort': Trees,
      'Golf Course': Trees,
      'Embassies': Building,
      'International Restaurants': Building,
      'Luxury Hotels': Building,
      'Art Galleries': Building,
      'Boutiques': ShoppingBag,
      'Cafes': Building,
      'Nightlife': Building,
      'Universities': School,
      'Hospitals': Building
    }
    return icons[feature] || Building
  }

  const getFilterLabel = (filter: string) => {
    switch (filter) {
      case 'luxury': return 'Luxury Areas'
      case 'affordable': return 'Affordable Areas'
      case 'popular': return 'Most Popular'
      default: return 'All Areas'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Explore Tehran's Neighborhoods
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Discover the perfect area for your lifestyle and budget
            </p>
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search neighborhoods..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-gray-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Filter by:</span>
                <Select value={filterBy} onValueChange={setFilterBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Areas</SelectItem>
                    <SelectItem value="luxury">Luxury Areas</SelectItem>
                    <SelectItem value="affordable">Affordable Areas</SelectItem>
                    <SelectItem value="popular">Most Popular</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="name">Name</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="properties">Most Properties</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              Showing {filteredNeighborhoods.length} neighborhoods
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhoods Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredNeighborhoods.map((neighborhood) => (
              <Card key={neighborhood.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={neighborhood.image}
                    alt={neighborhood.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{neighborhood.name}</h3>
                    <div className="flex items-center text-sm">
                      <Home className="w-4 h-4 mr-1" />
                      {neighborhood.propertiesCount} Properties
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {neighborhood.description}
                  </p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Avg. Price</span>
                      <span className="font-semibold text-blue-600">
                        {formatPrice(neighborhood.averagePrice)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Avg. Rent</span>
                      <span className="font-semibold text-green-600">
                        {formatPrice(neighborhood.averageRent, 'rent')}
                      </span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {neighborhood.features.slice(0, 3).map((feature, index) => {
                        const Icon = getNeighborhoodIcon(feature)
                        return (
                          <Badge key={index} variant="secondary" className="text-xs">
                            <Icon className="w-3 h-3 mr-1" />
                            {feature}
                          </Badge>
                        )
                      })}
                      {neighborhood.features.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{neighborhood.features.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  <Button className="w-full" asChild>
                    <Link href={`/neighborhoods/${neighborhood.id}`}>
                      Explore Area
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredNeighborhoods.length === 0 && (
            <div className="text-center py-12">
              <MapPin className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold mb-2">No neighborhoods found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or filters to find neighborhoods.
              </p>
              <Button onClick={() => {
                setSearchTerm('')
                setFilterBy('all')
              }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Area Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare Popular Areas</h2>
            <p className="text-gray-600 text-lg">
              Side-by-side comparison of Tehran's most sought-after neighborhoods
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full max-w-4xl mx-auto">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Neighborhood</th>
                  <th className="text-center py-3 px-4">Avg. Price</th>
                  <th className="text-center py-3 px-4">Avg. Rent</th>
                  <th className="text-center py-3 px-4">Properties</th>
                  <th className="text-center py-3 px-4">Vibe</th>
                </tr>
              </thead>
              <tbody>
                {neighborhoodsData.slice(0, 5).map((neighborhood) => (
                  <tr key={neighborhood.id} className="border-b hover:bg-gray-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-200 rounded mr-3 overflow-hidden">
                          <Image
                            src={neighborhood.image}
                            alt={neighborhood.name}
                            width={32}
                            height={32}
                            className="object-cover"
                          />
                        </div>
                        <span className="font-medium">{neighborhood.name}</span>
                      </div>
                    </td>
                    <td className="text-center py-3 px-4">
                      <span className="font-semibold text-blue-600">
                        {formatPrice(neighborhood.averagePrice)}
                      </span>
                    </td>
                    <td className="text-center py-3 px-4">
                      <span className="font-semibold text-green-600">
                        {formatPrice(neighborhood.averageRent, 'rent')}
                      </span>
                    </td>
                    <td className="text-center py-3 px-4">
                      {neighborhood.propertiesCount}
                    </td>
                    <td className="text-center py-3 px-4">
                      <Badge variant={neighborhood.averagePrice > 1000000000 ? 'default' : 'secondary'}>
                        {neighborhood.averagePrice > 1000000000 ? 'Luxury' : 'Standard'}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Help Choosing the Right Neighborhood?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Our local experts can help you find the perfect area based on your lifestyle, budget, and preferences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Talk to an Expert
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/properties">
                Browse Properties
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
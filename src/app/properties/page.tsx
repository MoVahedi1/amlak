'use client'

import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'next/navigation'
import PropertyCard from '@/components/PropertyCard'
import SearchBar from '@/components/SearchBar'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { Grid, List, SlidersHorizontal, ChevronDown } from 'lucide-react'
import propertiesData from '@/data/properties.json'

export default function PropertiesPage() {
  const searchParams = useSearchParams()
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [sortBy, setSortBy] = useState('newest')
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)

  const propertiesPerPage = 12

  const initialFilters = {
    type: searchParams.get('type') || 'all',
    category: searchParams.get('category') || 'all',
    neighborhood: searchParams.get('neighborhood') || '',
    search: searchParams.get('search') || '',
    minPrice: parseInt(searchParams.get('minPrice') || '0'),
    maxPrice: parseInt(searchParams.get('maxPrice') || '5000000000'),
    minSize: parseInt(searchParams.get('minSize') || '0'),
    maxSize: parseInt(searchParams.get('maxSize') || '500'),
    bedrooms: parseInt(searchParams.get('bedrooms') || '0'),
    bathrooms: parseInt(searchParams.get('bathrooms') || '0'),
    featured: searchParams.get('featured') === 'true'
  }

  const [filters, setFilters] = useState(initialFilters)

  const filteredAndSortedProperties = useMemo(() => {
    let filtered = propertiesData.filter(property => {
      // Type filter
      if (filters.type !== 'all' && property.type !== filters.type) return false
      
      // Category filter
      if (filters.category !== 'all' && property.category !== filters.category) return false
      
      // Neighborhood filter
      if (filters.neighborhood && property.neighborhood !== filters.neighborhood) return false
      
      // Search filter
      if (filters.search) {
        const searchTerm = filters.search.toLowerCase()
        if (!property.title.toLowerCase().includes(searchTerm) &&
            !property.description.toLowerCase().includes(searchTerm) &&
            !property.neighborhood.toLowerCase().includes(searchTerm)) {
          return false
        }
      }
      
      // Price filter
      if (property.price < filters.minPrice || property.price > filters.maxPrice) return false
      
      // Size filter
      if (property.size < filters.minSize || property.size > filters.maxSize) return false
      
      // Bedrooms filter
      if (filters.bedrooms > 0 && property.bedrooms < filters.bedrooms) return false
      
      // Bathrooms filter
      if (filters.bathrooms > 0 && property.bathrooms < filters.bathrooms) return false
      
      // Featured filter
      if (filters.featured && !property.featured) return false
      
      return true
    })

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price
        case 'price-high':
          return b.price - a.price
        case 'size-large':
          return b.size - a.size
        case 'size-small':
          return a.size - b.size
        case 'newest':
        default:
          return b.id - a.id
      }
    })

    return sorted
  }, [filters, sortBy])

  const totalPages = Math.ceil(filteredAndSortedProperties.length / propertiesPerPage)
  const startIndex = (currentPage - 1) * propertiesPerPage
  const endIndex = startIndex + propertiesPerPage
  const currentProperties = filteredAndSortedProperties.slice(startIndex, endIndex)

  useEffect(() => {
    setCurrentPage(1)
  }, [filters])

  const handleSearch = (newFilters: any) => {
    setFilters(newFilters)
  }

  const handleSortChange = (value: string) => {
    setSortBy(value)
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Properties in Tehran
          </h1>
          <p className="text-gray-600">
            Found {filteredAndSortedProperties.length} properties matching your criteria
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <SearchBar onSearch={handleSearch} initialFilters={filters} />
        </div>

        {/* Filters and Controls */}
        <Card className="mb-8">
          <CardContent className="p-4">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Sort by:</span>
                  <Select value={sortBy} onValueChange={handleSortChange}>
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="newest">Newest First</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
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
                Showing {startIndex + 1}-{Math.min(endIndex, filteredAndSortedProperties.length)} of {filteredAndSortedProperties.length} properties
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Properties Grid/List */}
        {currentProperties.length > 0 ? (
          <div className={viewMode === 'grid' ? 
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8" : 
            "space-y-4 mb-8"
          }>
            {currentProperties.map((property) => (
              <div key={property.id} className={viewMode === 'list' ? 'w-full' : ''}>
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
        ) : (
          <Card className="text-center py-12 mb-8">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">No properties found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search filters to find more properties.
              </p>
              <Button onClick={() => setFilters(initialFilters)}>
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Button
                    key={page}
                    variant={currentPage === page ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </Button>
                ))}
              </div>
              
              <Button
                variant="outline"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
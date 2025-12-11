'use client'

import { useState } from 'react'
import { Search, Filter, MapPin, Home, DollarSign, Square } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { Slider } from '@/components/ui/slider'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface SearchFiltersProps {
  onSearch: (filters: any) => void
  initialFilters?: any
}

export default function SearchBar({ onSearch, initialFilters = {} }: SearchFiltersProps) {
  const [filters, setFilters] = useState({
    type: initialFilters.type || 'all',
    category: initialFilters.category || 'all',
    neighborhood: initialFilters.neighborhood || '',
    minPrice: initialFilters.minPrice || 0,
    maxPrice: initialFilters.maxPrice || 5000000000,
    minSize: initialFilters.minSize || 0,
    maxSize: initialFilters.maxSize || 500,
    bedrooms: initialFilters.bedrooms || 0,
    bathrooms: initialFilters.bathrooms || 0,
    featured: initialFilters.featured || false,
    ...initialFilters
  })

  const [showAdvanced, setShowAdvanced] = useState(false)

  const handleFilterChange = (key: string, value: any) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    onSearch(newFilters)
  }

  const handleSearch = () => {
    onSearch(filters)
  }

  const resetFilters = () => {
    const defaultFilters = {
      type: 'all',
      category: 'all',
      neighborhood: '',
      minPrice: 0,
      maxPrice: 5000000000,
      minSize: 0,
      maxSize: 500,
      bedrooms: 0,
      bathrooms: 0,
      featured: false
    }
    setFilters(defaultFilters)
    onSearch(defaultFilters)
  }

  const neighborhoods = [
    'Saadat Abad',
    'Niavaran',
    'Tehranpars',
    'Lavasan',
    'Vanak',
    'Jordan',
    'Zaferanieh',
    'Elahieh',
    'Shahrak-e Gharb',
    'Darrous'
  ]

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Search className="w-5 h-5 mr-2" />
          Search Properties
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Basic Search */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Property Type</label>
            <Select value={filters.type} onValueChange={(value) => handleFilterChange('type', value)}>
              <SelectTrigger>
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="buy">For Sale</SelectItem>
                <SelectItem value="rent">For Rent</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <Select value={filters.category} onValueChange={(value) => handleFilterChange('category', value)}>
              <SelectTrigger>
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="villa">Villa</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
                <SelectItem value="land">Land</SelectItem>
                <SelectItem value="penthouse">Penthouse</SelectItem>
                <SelectItem value="duplex">Duplex</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Neighborhood</label>
            <Select value={filters.neighborhood} onValueChange={(value) => handleFilterChange('neighborhood', value)}>
              <SelectTrigger>
                <SelectValue placeholder="All Areas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Areas</SelectItem>
                {neighborhoods.map((neighborhood) => (
                  <SelectItem key={neighborhood} value={neighborhood}>
                    {neighborhood}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Search</label>
            <div className="relative">
              <Input
                placeholder="Search by title..."
                value={filters.search || ''}
                onChange={(e) => handleFilterChange('search', e.target.value)}
                className="pr-10"
              />
              <Search className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Advanced Filters Toggle */}
        <div className="flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => setShowAdvanced(!showAdvanced)}
            className="flex items-center"
          >
            <Filter className="w-4 h-4 mr-2" />
            {showAdvanced ? 'Hide' : 'Show'} Advanced Filters
          </Button>
          <div className="flex space-x-2">
            <Button variant="outline" onClick={resetFilters}>
              Reset
            </Button>
            <Button onClick={handleSearch}>
              Search Properties
            </Button>
          </div>
        </div>

        {/* Advanced Filters */}
        {showAdvanced && (
          <div className="border-t pt-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Price Range */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Price Range: {filters.minPrice.toLocaleString()} - {filters.maxPrice.toLocaleString()}
                </label>
                <div className="space-y-2">
                  <Slider
                    value={[filters.minPrice]}
                    onValueChange={(value) => handleFilterChange('minPrice', value[0])}
                    max={5000000000}
                    step={100000000}
                    className="w-full"
                  />
                  <Slider
                    value={[filters.maxPrice]}
                    onValueChange={(value) => handleFilterChange('maxPrice', value[0])}
                    max={5000000000}
                    step={100000000}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Size Range */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Size: {filters.minSize} - {filters.maxSize} m²
                </label>
                <div className="space-y-2">
                  <Slider
                    value={[filters.minSize]}
                    onValueChange={(value) => handleFilterChange('minSize', value[0])}
                    max={500}
                    step={10}
                    className="w-full"
                  />
                  <Slider
                    value={[filters.maxSize]}
                    onValueChange={(value) => handleFilterChange('maxSize', value[0])}
                    max={500}
                    step={10}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Rooms */}
              <div>
                <label className="block text-sm font-medium mb-2">Rooms</label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-gray-600">Bedrooms</label>
                    <Select value={filters.bedrooms.toString()} onValueChange={(value) => handleFilterChange('bedrooms', parseInt(value))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">Any</SelectItem>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                        <SelectItem value="5">5+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-xs text-gray-600">Bathrooms</label>
                    <Select value={filters.bathrooms.toString()} onValueChange={(value) => handleFilterChange('bathrooms', parseInt(value))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0">Any</SelectItem>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Options */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="featured"
                  checked={filters.featured}
                  onCheckedChange={(checked) => handleFilterChange('featured', checked)}
                />
                <label htmlFor="featured" className="text-sm font-medium">
                  Featured Properties Only
                </label>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
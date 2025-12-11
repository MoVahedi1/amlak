'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { 
  User, 
  Phone, 
  Mail, 
  Star, 
  MapPin, 
  Award, 
  Search,
  Filter,
  Calendar,
  Building,
  MessageSquare
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import agentsData from '@/data/agents.json'

export default function AgentsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('rating')
  const [filterBy, setFilterBy] = useState('all')

  const filteredAgents = agentsData
    .filter(agent => {
      const matchesSearch = agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           agent.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           agent.bio.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesFilter = filterBy === 'all' || 
                           (filterBy === 'top-rated' && agent.rating >= 4.8) ||
                           (filterBy === 'experienced' && agent.listingsCount > 20) ||
                           (filterBy === 'commercial' && agent.specialties.includes('Commercial Properties'))
      return matchesSearch && matchesFilter
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating
        case 'listings':
          return b.listingsCount - a.listingsCount
        case 'sold':
          return b.soldCount - a.soldCount
        case 'name':
        default:
          return a.name.localeCompare(b.name)
      }
    })

  const topAgents = agentsData.filter(agent => agent.rating >= 4.8).slice(0, 3)

  const getFilterLabel = (filter: string) => {
    switch (filter) {
      case 'top-rated': return 'Top Rated'
      case 'experienced': return 'Most Experienced'
      case 'commercial': return 'Commercial Specialists'
      default: return 'All Agents'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet Our Expert Agents
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Professional, experienced, and dedicated to helping you find your perfect property
            </p>
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search agents by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-gray-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Top Agents Banner */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Top Performing Agents</h2>
            <p className="text-gray-600 text-lg">
              Our highest-rated agents with exceptional track records
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topAgents.map((agent) => (
              <Card key={agent.id} className="relative overflow-hidden group">
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-yellow-500 text-white">
                    <Star className="w-3 h-3 mr-1 fill-current" />
                    Top Rated
                  </Badge>
                </div>
                <CardContent className="p-8 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <Image
                      src={agent.photo}
                      alt={agent.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{agent.name}</h3>
                  <p className="text-gray-600 mb-4">{agent.title}</p>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${i < Math.floor(agent.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="ml-2 text-gray-600">{agent.rating}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                    <div>
                      <div className="font-semibold text-lg">{agent.listingsCount}</div>
                      <div className="text-gray-600">Listings</div>
                    </div>
                    <div>
                      <div className="font-semibold text-lg">{agent.soldCount}</div>
                      <div className="text-gray-600">Sold</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 justify-center mb-6">
                    {agent.specialties.slice(0, 2).map((specialty) => (
                      <Badge key={specialty} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <Button variant="outline" className="w-full" asChild>
                      <a href={`tel:${agent.phone}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        {agent.phone}
                      </a>
                    </Button>
                    <Button className="w-full" asChild>
                      <Link href={`/contact?agent=${agent.id}`}>
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Contact Agent
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-100 border-y">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Filter by:</span>
                <Select value={filterBy} onValueChange={setFilterBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Agents</SelectItem>
                    <SelectItem value="top-rated">Top Rated</SelectItem>
                    <SelectItem value="experienced">Most Experienced</SelectItem>
                    <SelectItem value="commercial">Commercial Specialists</SelectItem>
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
                    <SelectItem value="rating">Rating</SelectItem>
                    <SelectItem value="listings">Listings</SelectItem>
                    <SelectItem value="sold">Properties Sold</SelectItem>
                    <SelectItem value="name">Name</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="text-sm text-gray-600">
              Showing {filteredAgents.length} agents
            </div>
          </div>
        </div>
      </section>

      {/* All Agents Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAgents.map((agent) => (
              <Card key={agent.id} className="group hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="relative w-20 h-20 flex-shrink-0">
                      <Image
                        src={agent.photo}
                        alt={agent.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1 group-hover:text-blue-600 transition-colors">
                        {agent.name}
                      </h3>
                      <p className="text-gray-600 text-sm mb-2">{agent.title}</p>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < Math.floor(agent.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="ml-2 text-sm text-gray-600">{agent.rating}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {agent.bio}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <div className="font-semibold">{agent.listingsCount}</div>
                      <div className="text-gray-600">Listings</div>
                    </div>
                    <div>
                      <div className="font-semibold">{agent.soldCount}</div>
                      <div className="text-gray-600">Properties Sold</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {agent.specialties.slice(0, 3).map((specialty) => (
                      <Badge key={specialty} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                    {agent.specialties.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{agent.specialties.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Phone className="w-4 h-4 mr-2" />
                      {agent.phone}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Mail className="w-4 h-4 mr-2" />
                      {agent.email}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="w-4 h-4 mr-2" />
                      Languages: {agent.languages.join(', ')}
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={`tel:${agent.phone}`}>
                        <Phone className="w-4 h-4 mr-1" />
                        Call
                      </a>
                    </Button>
                    <Button size="sm" className="flex-1" asChild>
                      <Link href={`/contact?agent=${agent.id}`}>
                        <MessageSquare className="w-4 h-4 mr-1" />
                        Message
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredAgents.length === 0 && (
            <div className="text-center py-12">
              <User className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-xl font-semibold mb-2">No agents found</h3>
              <p className="text-gray-600 mb-4">
                Try adjusting your search or filters to find agents.
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

      {/* Why Choose Our Agents */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Agents?</h2>
            <p className="text-gray-600 text-lg">
              Our team brings unparalleled expertise and dedication to every client
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg font-semibold mb-2">Expert Certified</h3>
                <p className="text-gray-600 text-sm">
                  All agents are fully licensed and continuously trained
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Building className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-lg font-semibold mb-2">Local Knowledge</h3>
                <p className="text-gray-600 text-sm">
                  Deep understanding of Tehran's neighborhoods and market trends
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Star className="w-12 h-12 mx-auto mb-4 text-yellow-500" />
                <h3 className="text-lg font-semibold mb-2">Top Rated</h3>
                <p className="text-gray-600 text-sm">
                  Consistently high ratings from satisfied clients
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Calendar className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-sm">
                  Always available to assist with your real estate needs
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to Join Our Team?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            We're always looking for talented real estate professionals to join our growing team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              View Open Positions
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Learn About Careers
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
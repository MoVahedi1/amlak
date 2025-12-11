'use client'

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { 
  MapPin, 
  Bed, 
  Bath, 
  Square, 
  Calendar, 
  Phone, 
  Mail, 
  Share2, 
  Heart,
  Home,
  Car,
  Shield,
  Wind,
  Droplets,
  Zap,
  Check,
  Star,
  User
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import ImageCarousel from '@/components/ImageCarousel'
import PropertyCard from '@/components/PropertyCard'
import { formatPrice, formatSize, formatDate } from '@/utils'
import { useFavorites } from '@/hooks'
import propertiesData from '@/data/properties.json'

export default function PropertyDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { toggleFavorite, isFavorite } = useFavorites()
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const propertyId = parseInt(params.id as string)
  const property = propertiesData.find(p => p.id === propertyId)

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Property Not Found</h1>
          <p className="text-gray-600 mb-4">The property you're looking for doesn't exist.</p>
          <Button onClick={() => router.push('/properties')}>
            Back to Properties
          </Button>
        </div>
      </div>
    )
  }

  const similarProperties = propertiesData
    .filter(p => p.id !== propertyId && p.neighborhood === property.neighborhood)
    .slice(0, 3)

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    alert('Thank you for your inquiry. We will contact you soon!')
    setContactForm({ name: '', email: '', phone: '', message: '' })
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: property.description,
        url: window.location.href
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  const amenityIcons: { [key: string]: any } = {
    'Parking': Car,
    'Elevator': Zap,
    'Storage': Home,
    'Balcony': Wind,
    'Central Heating': Droplets,
    'Air Conditioning': Wind,
    'Security': Shield,
    'Garden': Home,
    'Pool': Droplets,
    'Gym': Home,
    'Fireplace': Wind,
    'Wine Cellar': Home,
    'Sauna': Droplets,
    'Smart Home': Zap,
    'Rooftop Terrace': Wind,
    'Jacuzzi': Droplets,
    'Wine Cooler': Home,
    'Private Elevator': Zap,
    'Wine Cellar': Home,
    'Reception Area': Home,
    'Meeting Rooms': Home,
    'Water Connection': Droplets,
    'Electricity': Zap,
    'Gas Connection': Wind
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <span className="text-gray-400">/</span>
            <Link href="/properties" className="text-gray-600 hover:text-blue-600">Properties</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900">{property.title}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Carousel */}
            <div className="mb-8">
              <ImageCarousel images={property.images} title={property.title} />
            </div>

            {/* Property Header */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                  <div className="flex items-center text-gray-600 mb-2">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{property.neighborhood}, Tehran</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 mt-4 md:mt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => toggleFavorite(property.id)}
                  >
                    <Heart className={`w-4 h-4 mr-2 ${isFavorite(property.id) ? 'fill-red-500 text-red-500' : ''}`} />
                    {isFavorite(property.id) ? 'Saved' : 'Save'}
                  </Button>
                  <Button variant="outline" size="sm" onClick={handleShare}>
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mb-4">
                <Badge variant={property.type === 'buy' ? 'default' : 'secondary'}>
                  {property.type === 'buy' ? 'For Sale' : 'For Rent'}
                </Badge>
                <Badge variant="outline">{property.category}</Badge>
                {property.featured && (
                  <Badge className="bg-blue-600">Featured</Badge>
                )}
              </div>

              <div className="text-3xl font-bold text-blue-600 mb-4">
                {formatPrice(property.price, property.type)}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center">
                  <Bed className="w-5 h-5 mr-2 text-gray-600" />
                  <span>{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center">
                  <Bath className="w-5 h-5 mr-2 text-gray-600" />
                  <span>{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center">
                  <Square className="w-5 h-5 mr-2 text-gray-600" />
                  <span>{formatSize(property.size)}</span>
                </div>
                <div className="flex items-center">
                  <Home className="w-5 h-5 mr-2 text-gray-600" />
                  <span>{property.rooms} Rooms</span>
                </div>
              </div>

              <Separator className="mb-6" />

              {/* Description */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed">
                  {property.description}
                </p>
              </div>

              <Separator className="my-6" />

              {/* Amenities */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity, index) => {
                    const Icon = amenityIcons[amenity] || Check
                    return (
                      <div key={index} className="flex items-center">
                        <Icon className="w-5 h-5 mr-2 text-blue-600" />
                        <span>{amenity}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <Separator className="my-6" />

              {/* Additional Details */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Property Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property Type:</span>
                    <span className="font-medium">{property.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Listed Date:</span>
                    <span className="font-medium">{formatDate('2024-01-15')}</span>
                  </div>
                  {property.yearBuilt && (
                    <div className="flex justify-between">
                      <span className="text-gray-600">Year Built:</span>
                      <span className="font-medium">{property.yearBuilt}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-gray-600">Property ID:</span>
                    <span className="font-medium">TP-{property.id.toString().padStart(4, '0')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-white rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Location</h2>
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 mx-auto mb-2 text-gray-600" />
                  <p className="text-gray-600">Interactive Map</p>
                  <p className="text-sm text-gray-500">{property.neighborhood}, Tehran</p>
                </div>
              </div>
            </div>

            {/* Similar Properties */}
            {similarProperties.length > 0 && (
              <div className="bg-white rounded-lg p-6">
                <h2 className="text-xl font-semibold mb-4">Similar Properties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {similarProperties.map((similarProperty) => (
                    <PropertyCard key={similarProperty.id} property={similarProperty} />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Contact Agent */}
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  Contact Agent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <h3 className="font-semibold">{property.agent.name}</h3>
                      <p className="text-sm text-gray-600">Senior Real Estate Agent</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-600" />
                      <span>{property.agent.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-gray-600" />
                      <span>{property.agent.email}</span>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <Input
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    required
                  />
                  <Input
                    type="tel"
                    placeholder="Your Phone"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                  />
                  <Textarea
                    placeholder="Your Message"
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    required
                  />
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>

                <div className="mt-4 pt-4 border-t text-center">
                  <p className="text-sm text-gray-600 mb-2">Or call directly</p>
                  <Button variant="outline" className="w-full" asChild>
                    <a href={`tel:${property.agent.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      {property.agent.phone}
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
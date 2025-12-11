'use client'

import { useState } from 'react'
import { 
  Home, 
  DollarSign, 
  MapPin, 
  Square, 
  Calendar,
  CheckCircle,
  Calculator,
  FileText,
  Phone,
  Mail,
  User
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Badge } from '@/components/ui/badge'

export default function ValuationPage() {
  const [formData, setFormData] = useState({
    propertyType: '',
    neighborhood: '',
    size: '',
    bedrooms: '',
    bathrooms: '',
    yearBuilt: '',
    condition: '',
    parking: false,
    elevator: false,
    storage: false,
    balcony: false,
    heating: false,
    cooling: false,
    security: false,
    name: '',
    email: '',
    phone: '',
    preferredContact: 'email',
    additionalInfo: '',
    agreeToTerms: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showResults, setShowResults] = useState(false)

  const propertyTypes = [
    { value: 'apartment', label: 'Apartment' },
    { value: 'house', label: 'House' },
    { value: 'villa', label: 'Villa' },
    { value: 'commercial', label: 'Commercial' },
    { value: 'land', label: 'Land' },
    { value: 'penthouse', label: 'Penthouse' },
    { value: 'duplex', label: 'Duplex' }
  ]

  const neighborhoods = [
    'Saadat Abad', 'Niavaran', 'Tehranpars', 'Lavasan', 'Vanak',
    'Jordan', 'Zaferanieh', 'Elahieh', 'Shahrak-e Gharb', 'Darrous'
  ]

  const conditions = [
    { value: 'excellent', label: 'Excellent - Like New' },
    { value: 'good', label: 'Good - Well Maintained' },
    { value: 'fair', label: 'Fair - Needs Some Updates' },
    { value: 'poor', label: 'Poor - Needs Major Renovation' }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }))
  }

  const calculateEstimate = () => {
    // Simple estimation logic for demonstration
    const basePrice = {
      'Saadat Abad': 7500000,
      'Niavaran': 12000000,
      'Tehranpars': 4500000,
      'Lavasan': 25000000,
      'Vanak': 6800000,
      'Jordan': 18000000,
      'Zaferanieh': 15000000,
      'Elahieh': 9500000,
      'Shahrak-e Gharb': 6500000,
      'Darrous': 5500000
    }

    const conditionMultiplier = {
      'excellent': 1.2,
      'good': 1.0,
      'fair': 0.8,
      'poor': 0.6
    }

    const typeMultiplier = {
      'apartment': 1.0,
      'house': 1.2,
      'villa': 1.5,
      'commercial': 1.3,
      'land': 0.8,
      'penthouse': 1.8,
      'duplex': 1.4
    }

    const base = basePrice[formData.neighborhood as keyof typeof basePrice] || 5000000
    const condition = conditionMultiplier[formData.condition as keyof typeof conditionMultiplier] || 1.0
    const type = typeMultiplier[formData.propertyType as keyof typeof typeMultiplier] || 1.0
    const size = parseInt(formData.size) || 100

    let estimate = base * size * condition * type

    // Add amenity bonuses
    if (formData.parking) estimate *= 1.05
    if (formData.elevator) estimate *= 1.03
    if (formData.storage) estimate *= 1.02
    if (formData.balcony) estimate *= 1.02
    if (formData.heating) estimate *= 1.01
    if (formData.cooling) estimate *= 1.01
    if (formData.security) estimate *= 1.02

    return Math.round(estimate)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.agreeToTerms) {
      alert('Please agree to the terms and conditions.')
      return
    }

    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setShowResults(true)
    setIsSubmitting(false)
  }

  const estimate = showResults ? calculateEstimate() : 0

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Free Property Valuation
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Get an instant estimate of your property's value from Tehran's real estate experts
            </p>
            <div className="flex items-center gap-6">
              <div className="flex items-center">
                <Calculator className="w-6 h-6 mr-2" />
                <span>Instant Estimates</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 mr-2" />
                <span>Expert Analysis</span>
              </div>
              <div className="flex items-center">
                <FileText className="w-6 h-6 mr-2" />
                <span>Detailed Reports</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valuation Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Property Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">Property Type *</label>
                          <Select value={formData.propertyType} onValueChange={(value) => handleSelectChange('propertyType', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              {propertyTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Neighborhood *</label>
                          <Select value={formData.neighborhood} onValueChange={(value) => handleSelectChange('neighborhood', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select area" />
                            </SelectTrigger>
                            <SelectContent>
                              {neighborhoods.map((neighborhood) => (
                                <SelectItem key={neighborhood} value={neighborhood}>
                                  {neighborhood}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">Size (m²) *</label>
                          <Input
                            name="size"
                            type="number"
                            value={formData.size}
                            onChange={handleInputChange}
                            placeholder="e.g., 120"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Bedrooms *</label>
                          <Input
                            name="bedrooms"
                            type="number"
                            value={formData.bedrooms}
                            onChange={handleInputChange}
                            placeholder="e.g., 2"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Bathrooms *</label>
                          <Input
                            name="bathrooms"
                            type="number"
                            value={formData.bathrooms}
                            onChange={handleInputChange}
                            placeholder="e.g., 2"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium mb-2">Year Built</label>
                          <Input
                            name="yearBuilt"
                            type="number"
                            value={formData.yearBuilt}
                            onChange={handleInputChange}
                            placeholder="e.g., 2018"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Condition *</label>
                          <Select value={formData.condition} onValueChange={(value) => handleSelectChange('condition', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select condition" />
                            </SelectTrigger>
                            <SelectContent>
                              {conditions.map((condition) => (
                                <SelectItem key={condition.value} value={condition.value}>
                                  {condition.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-4">Features & Amenities</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          {[
                            { key: 'parking', label: 'Parking' },
                            { key: 'elevator', label: 'Elevator' },
                            { key: 'storage', label: 'Storage' },
                            { key: 'balcony', label: 'Balcony' },
                            { key: 'heating', label: 'Central Heating' },
                            { key: 'cooling', label: 'Air Conditioning' },
                            { key: 'security', label: 'Security System' }
                          ].map((feature) => (
                            <div key={feature.key} className="flex items-center space-x-2">
                              <Checkbox
                                id={feature.key}
                                checked={formData[feature.key as keyof typeof formData] as boolean}
                                onCheckedChange={(checked) => handleCheckboxChange(feature.key, checked as boolean)}
                              />
                              <label htmlFor={feature.key} className="text-sm">{feature.label}</label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-2">Additional Information</label>
                        <Textarea
                          name="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={handleInputChange}
                          rows={4}
                          placeholder="Any additional features, recent renovations, or special characteristics..."
                        />
                      </div>

                      {/* Contact Information */}
                      <div className="border-t pt-6">
                        <h3 className="text-lg font-semibold mb-4">Your Contact Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-sm font-medium mb-2">Name *</label>
                            <Input
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="Your full name"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Email *</label>
                            <Input
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="your@email.com"
                              required
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                          <div>
                            <label className="block text-sm font-medium mb-2">Phone *</label>
                            <Input
                              name="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="+98-21-XXXXXXX"
                              required
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium mb-2">Preferred Contact</label>
                            <Select value={formData.preferredContact} onValueChange={(value) => handleSelectChange('preferredContact', value)}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="email">Email</SelectItem>
                                <SelectItem value="phone">Phone</SelectItem>
                                <SelectItem value="whatsapp">WhatsApp</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start space-x-2">
                        <Checkbox
                          id="terms"
                          checked={formData.agreeToTerms}
                          onCheckedChange={(checked) => handleCheckboxChange('agreeToTerms', checked as boolean)}
                        />
                        <label htmlFor="terms" className="text-sm">
                          I agree to the terms and conditions and understand this is an automated estimate. 
                          A professional valuation may vary based on market conditions and property inspection.
                        </label>
                      </div>

                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? 'Calculating...' : 'Get Free Valuation'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Results Sidebar */}
              <div className="lg:col-span-1">
                {showResults && (
                  <Card className="sticky top-4">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <DollarSign className="w-5 h-5 mr-2" />
                        Estimated Value
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center mb-6">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          {estimate.toLocaleString('fa-IR')} تومان
                        </div>
                        <p className="text-sm text-gray-600">
                          Automated estimate based on provided information
                        </p>
                      </div>

                      <div className="space-y-3 mb-6">
                        <div className="flex justify-between text-sm">
                          <span>Property Type:</span>
                          <span className="font-medium">{formData.propertyType}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Neighborhood:</span>
                          <span className="font-medium">{formData.neighborhood}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Size:</span>
                          <span className="font-medium">{formData.size} m²</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span>Condition:</span>
                          <span className="font-medium">{formData.condition}</span>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg mb-6">
                        <h4 className="font-semibold mb-2">Next Steps</h4>
                        <p className="text-sm text-gray-700 mb-3">
                          For a detailed professional valuation, contact our experts for an on-site inspection.
                        </p>
                        <Button size="sm" className="w-full" asChild>
                          <a href="/contact">Schedule Professional Valuation</a>
                        </Button>
                      </div>

                      <div className="text-xs text-gray-500">
                        <p>* This is an automated estimate and may not reflect the actual market value.</p>
                        <p>* Final valuation requires professional inspection and market analysis.</p>
                      </div>
                    </CardContent>
                  </Card>
                )}

                {!showResults && (
                  <Card className="sticky top-4">
                    <CardHeader>
                      <CardTitle>How It Works</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                            <span className="text-blue-600 font-bold">1</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">Enter Property Details</h4>
                            <p className="text-sm text-gray-600">Provide accurate information about your property</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                            <span className="text-blue-600 font-bold">2</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">Get Instant Estimate</h4>
                            <p className="text-sm text-gray-600">Receive an automated valuation based on market data</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                            <span className="text-blue-600 font-bold">3</span>
                          </div>
                          <div>
                            <h4 className="font-semibold">Professional Valuation</h4>
                            <p className="text-sm text-gray-600">Schedule an expert inspection for detailed analysis</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Get Professional Valuation?</h2>
            <p className="text-gray-600 text-lg">
              The benefits of expert property valuation services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <DollarSign className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-lg font-semibold mb-2">Accurate Pricing</h3>
                <p className="text-gray-600 text-sm">
                  Get the right price for selling or renting your property
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Calculator className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg font-semibold mb-2">Market Insights</h3>
                <p className="text-gray-600 text-sm">
                  Understand current market trends and property values
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <FileText className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-lg font-semibold mb-2">Detailed Reports</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive valuation reports for legal and financial purposes
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Home className="w-12 h-12 mx-auto mb-4 text-orange-600" />
                <h3 className="text-lg font-semibold mb-2">Investment Advice</h3>
                <p className="text-gray-600 text-sm">
                  Expert guidance on property investment opportunities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
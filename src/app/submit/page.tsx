'use client'

import { useState } from 'react'
import { 
  Home, 
  MapPin, 
  DollarSign, 
  Square, 
  Bed, 
  Bath, 
  Camera, 
  Upload,
  CheckCircle,
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

export default function SubmitPropertyPage() {
  const [formData, setFormData] = useState({
    // Property Details
    title: '',
    type: 'buy',
    category: 'apartment',
    neighborhood: '',
    address: '',
    price: '',
    rentPrice: '',
    size: '',
    rooms: '',
    bedrooms: '',
    bathrooms: '',
    yearBuilt: '',
    description: '',
    
    // Owner Information
    ownerName: '',
    ownerEmail: '',
    ownerPhone: '',
    preferredContact: 'email',
    
    // Additional Features
    amenities: [] as string[],
    features: [] as string[],
    
    // Files
    images: [] as File[],
    documents: [] as File[],
    
    // Agreement
    agreeToTerms: false,
    agreeToMarketing: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStep, setSubmitStep] = useState(1)

  const propertyTypes = [
    { value: 'buy', label: 'For Sale' },
    { value: 'rent', label: 'For Rent' }
  ]

  const categories = [
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

  const amenities = [
    'Parking', 'Elevator', 'Storage', 'Balcony', 'Central Heating',
    'Air Conditioning', 'Security', 'Garden', 'Pool', 'Gym',
    'Fireplace', 'Wine Cellar', 'Sauna', 'Smart Home', 'Rooftop Terrace'
  ]

  const features = [
    'New Construction', 'Renovated', 'Furnished', 'Pet Friendly',
    'Sea View', 'Mountain View', 'City View', 'Quiet Area',
    'Close to Metro', 'Close to Schools', 'Close to Shopping', 'Close to Parks'
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (amenity: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      amenities: checked 
        ? [...prev.amenities, amenity]
        : prev.amenities.filter(a => a !== amenity)
    }))
  }

  const handleFeatureChange = (feature: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      features: checked 
        ? [...prev.features, feature]
        : prev.features.filter(f => f !== feature)
    }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setFormData(prev => ({
      ...prev,
      images: [...prev.images, ...files].slice(0, 10) // Limit to 10 images
    }))
  }

  const handleDocumentUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setFormData(prev => ({
      ...prev,
      documents: [...prev.documents, ...files].slice(0, 5) // Limit to 5 documents
    }))
  }

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }))
  }

  const removeDocument = (index: number) => {
    setFormData(prev => ({
      ...prev,
      documents: prev.documents.filter((_, i) => i !== index)
    }))
  }

  const validateStep = (step: number) => {
    switch (step) {
      case 1:
        return formData.title && formData.category && formData.neighborhood && 
               (formData.type === 'buy' ? formData.price : formData.rentPrice)
      case 2:
        return formData.size && formData.bedrooms && formData.bathrooms
      case 3:
        return formData.ownerName && formData.ownerEmail && formData.ownerPhone
      case 4:
        return formData.images.length > 0
      default:
        return true
    }
  }

  const nextStep = () => {
    if (validateStep(submitStep)) {
      setSubmitStep(prev => Math.min(prev + 1, 5))
    }
  }

  const prevStep = () => {
    setSubmitStep(prev => Math.max(prev - 1, 1))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateStep(4) || !formData.agreeToTerms) {
      alert('Please complete all required fields and agree to the terms.')
      return
    }

    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    alert('Property submitted successfully! Our team will review and contact you within 24 hours.')
    setIsSubmitting(false)
    setSubmitStep(5)
  }

  const renderStepContent = () => {
    switch (submitStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Property Title *</label>
                <Input
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Modern Apartment in Saadat Abad"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Listing Type *</label>
                <Select value={formData.type} onValueChange={(value) => handleSelectChange('type', value)}>
                  <SelectTrigger>
                    <SelectValue />
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
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Category *</label>
                <Select value={formData.category} onValueChange={(value) => handleSelectChange('category', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Neighborhood *</label>
                <Select value={formData.neighborhood} onValueChange={(value) => handleSelectChange('neighborhood', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select neighborhood" />
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

            <div>
              <label className="block text-sm font-medium mb-2">Address</label>
              <Input
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Full property address"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  {formData.type === 'buy' ? 'Sale Price *' : 'Rent Price *'}
                </label>
                <Input
                  name={formData.type === 'buy' ? 'price' : 'rentPrice'}
                  type="number"
                  value={formData.type === 'buy' ? formData.price : formData.rentPrice}
                  onChange={handleInputChange}
                  placeholder={formData.type === 'buy' ? 'e.g., 850000000' : 'e.g., 2500000'}
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  {formData.type === 'buy' ? 'Price in Tomans' : 'Monthly rent in Tomans'}
                </p>
              </div>
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
            </div>
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                <label className="block text-sm font-medium mb-2">Total Rooms *</label>
                <Input
                  name="rooms"
                  type="number"
                  value={formData.rooms}
                  onChange={handleInputChange}
                  placeholder="e.g., 4"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

            <div>
              <label className="block text-sm font-medium mb-2">Description *</label>
              <Textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={6}
                placeholder="Describe your property in detail. Include information about location, condition, nearby amenities, etc."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-4">Amenities</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {amenities.map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-2">
                    <Checkbox
                      id={amenity}
                      checked={formData.amenities.includes(amenity)}
                      onCheckedChange={(checked) => handleCheckboxChange(amenity, checked as boolean)}
                    />
                    <label htmlFor={amenity} className="text-sm">{amenity}</label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-4">Additional Features</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <Checkbox
                      id={feature}
                      checked={formData.features.includes(feature)}
                      onCheckedChange={(checked) => handleFeatureChange(feature, checked as boolean)}
                    />
                    <label htmlFor={feature} className="text-sm">{feature}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )

      case 3:
        return (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Your Name *</label>
                <Input
                  name="ownerName"
                  value={formData.ownerName}
                  onChange={handleInputChange}
                  placeholder="Full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address *</label>
                <Input
                  name="ownerEmail"
                  type="email"
                  value={formData.ownerEmail}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone Number *</label>
              <Input
                name="ownerPhone"
                type="tel"
                value={formData.ownerPhone}
                onChange={handleInputChange}
                placeholder="+98-21-XXXXXXX"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Preferred Contact Method</label>
              <Select value={formData.preferredContact} onValueChange={(value) => handleSelectChange('preferredContact', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="phone">Phone</SelectItem>
                  <SelectItem value="whatsapp">WhatsApp</SelectItem>
                  <SelectItem value="any">Any Method</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )

      case 4:
        return (
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-4">Property Images *</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <Camera className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600 mb-4">
                  Upload high-quality photos of your property (up to 10 images)
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <Button variant="outline" onClick={() => document.getElementById('image-upload')?.click()}>
                  <Upload className="w-4 h-4 mr-2" />
                  Choose Images
                </Button>
              </div>

              {formData.images.length > 0 && (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {formData.images.map((image, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Property image ${index + 1}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                      <button
                        onClick={() => removeImage(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-4">Supporting Documents</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <FileText className="w-12 h-12 mx-auto mb-4 text-gray-400" />
                <p className="text-gray-600 mb-4">
                  Upload property documents, title deeds, etc. (up to 5 files)
                </p>
                <input
                  type="file"
                  multiple
                  accept=".pdf,.doc,.docx,.jpg,.png"
                  onChange={handleDocumentUpload}
                  className="hidden"
                  id="document-upload"
                />
                <Button variant="outline" onClick={() => document.getElementById('document-upload')?.click()}>
                  <Upload className="w-4 h-4 mr-2" />
                  Choose Documents
                </Button>
              </div>

              {formData.documents.length > 0 && (
                <div className="mt-4 space-y-2">
                  {formData.documents.map((doc, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm">{doc.name}</span>
                      <button
                        onClick={() => removeDocument(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )

      case 5:
        return (
          <div className="text-center py-8">
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-500" />
            <h3 className="text-2xl font-bold mb-4">Property Submitted Successfully!</h3>
            <p className="text-gray-600 mb-8">
              Thank you for submitting your property. Our team will review your submission and contact you within 24 hours.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold mb-2">What happens next?</h4>
                <ul className="text-left text-sm text-gray-600 space-y-1">
                  <li>• Our team will review your property details</li>
                  <li>• We'll contact you to verify information</li>
                  <li>• Professional photos may be scheduled</li>
                  <li>• Your property will be listed on our platform</li>
                </ul>
              </div>
              <Button onClick={() => window.location.href = '/properties'}>
                View Other Properties
              </Button>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Submit Your Property
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              List your property with Tehran's leading real estate agency
            </p>
          </div>
        </div>
      </section>

      {/* Progress Bar */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step <= submitStep ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 4 && (
                  <div className={`w-full h-1 mx-4 ${
                    step < submitStep ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between max-w-3xl mx-auto mt-2 text-sm">
            <span className="text-gray-600">Basic Info</span>
            <span className="text-gray-600">Details</span>
            <span className="text-gray-600">Contact</span>
            <span className="text-gray-600">Photos</span>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>
                  {submitStep === 1 && 'Basic Property Information'}
                  {submitStep === 2 && 'Property Details & Features'}
                  {submitStep === 3 && 'Owner Information'}
                  {submitStep === 4 && 'Photos & Documents'}
                  {submitStep === 5 && 'Submission Complete'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {submitStep < 5 && (
                  <form onSubmit={handleSubmit}>
                    {renderStepContent()}

                    {submitStep === 4 && (
                      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                        <h4 className="font-semibold mb-3">Terms and Conditions</h4>
                        <div className="space-y-2">
                          <div className="flex items-start space-x-2">
                            <Checkbox
                              id="terms"
                              checked={formData.agreeToTerms}
                              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeToTerms: checked as boolean }))}
                            />
                            <label htmlFor="terms" className="text-sm">
                              I agree to the terms and conditions and privacy policy
                            </label>
                          </div>
                          <div className="flex items-start space-x-2">
                            <Checkbox
                              id="marketing"
                              checked={formData.agreeToMarketing}
                              onCheckedChange={(checked) => setFormData(prev => ({ ...prev, agreeToMarketing: checked as boolean }))}
                            />
                            <label htmlFor="marketing" className="text-sm">
                              I agree to receive marketing communications from Tehran Properties
                            </label>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between mt-8">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                        disabled={submitStep === 1}
                      >
                        Previous
                      </Button>
                      
                      {submitStep < 4 ? (
                        <Button type="button" onClick={nextStep}>
                          Next
                        </Button>
                      ) : submitStep === 4 ? (
                        <Button type="submit" disabled={isSubmitting}>
                          {isSubmitting ? 'Submitting...' : 'Submit Property'}
                        </Button>
                      ) : null}
                    </div>
                  </form>
                )}

                {submitStep === 5 && renderStepContent()}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why List With Us?</h2>
            <p className="text-gray-600 text-lg">
              The benefits of working with Tehran's leading real estate agency
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Home className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-lg font-semibold mb-2">Wide Exposure</h3>
                <p className="text-gray-600 text-sm">
                  Reach thousands of potential buyers and renters
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <DollarSign className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-lg font-semibold mb-2">Best Price</h3>
                <p className="text-gray-600 text-sm">
                  Our experts help you get the best market price
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Camera className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-lg font-semibold mb-2">Professional Photos</h3>
                <p className="text-gray-600 text-sm">
                  Free professional photography and virtual tours
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <User className="w-12 h-12 mx-auto mb-4 text-orange-600" />
                <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
                <p className="text-gray-600 text-sm">
                  Dedicated agent support throughout the process
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
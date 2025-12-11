'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      inquiryType: value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    alert('Thank you for your message! We will get back to you within 24 hours.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      inquiryType: 'general'
    })
    setIsSubmitting(false)
  }

  const offices = [
    {
      name: "Head Office - Valiasr Street",
      address: "No. 123, Valiasr Street, Tehran, Iran",
      phone: "+98-21-88765432",
      email: "info@tehranproperties.com",
      hours: "Saturday - Thursday: 9:00 AM - 6:00 PM",
      coordinates: { lat: 35.7219, lng: 51.4310 }
    },
    {
      name: "Northern Tehran Office",
      address: "No. 45, Niavaran Street, Tehran, Iran",
      phone: "+98-21-88765433",
      email: "north@tehranproperties.com",
      hours: "Saturday - Thursday: 9:00 AM - 6:00 PM",
      coordinates: { lat: 35.8221, lng: 51.4297 }
    },
    {
      name: "Eastern Tehran Office",
      address: "No. 78, Tehranpars Main Street, Tehran, Iran",
      phone: "+98-21-88765434",
      email: "east@tehranproperties.com",
      hours: "Saturday - Thursday: 9:00 AM - 6:00 PM",
      coordinates: { lat: 35.7165, lng: 51.4524 }
    }
  ]

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'buy', label: 'I want to buy a property' },
    { value: 'sell', label: 'I want to sell a property' },
    { value: 'rent', label: 'I want to rent a property' },
    { value: 'investment', label: 'Investment consultation' },
    { value: 'valuation', label: 'Property valuation' },
    { value: 'complaint', label: 'Complaint' },
    { value: 'partnership', label: 'Business partnership' }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Get in touch with our expert team. We're here to help you find your perfect property.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Offices */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Inquiry Type *
                      </label>
                      <Select value={formData.inquiryType} onValueChange={handleSelectChange}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select inquiry type" />
                        </SelectTrigger>
                        <SelectContent>
                          {inquiryTypes.map((type) => (
                            <SelectItem key={type.value} value={type.value}>
                              {type.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Email Address *
                        </label>
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

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+98-21-XXXXXXX"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Subject *
                        </label>
                        <Input
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Brief subject"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        placeholder="Tell us more about your inquiry..."
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Quick Contact Info */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3 text-blue-600" />
                      <div>
                        <div className="font-semibold">Phone</div>
                        <div className="text-gray-600">+98-21-88765432</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-3 text-blue-600" />
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-gray-600">info@tehranproperties.com</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Offices */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Offices</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4">{office.name}</h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <MapPin className="w-5 h-5 mr-3 text-gray-600 mt-0.5" />
                          <span className="text-gray-700">{office.address}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <Phone className="w-5 h-5 mr-3 text-gray-600" />
                          <span className="text-gray-700">{office.phone}</span>
                        </div>
                        
                        <div className="flex items-center">
                          <Mail className="w-5 h-5 mr-3 text-gray-600" />
                          <span className="text-gray-700">{office.email}</span>
                        </div>
                        
                        <div className="flex items-start">
                          <Clock className="w-5 h-5 mr-3 text-gray-600 mt-0.5" />
                          <span className="text-gray-700">{office.hours}</span>
                        </div>
                      </div>

                      {/* Map Placeholder */}
                      <div className="mt-4 bg-gray-200 h-48 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <MapPin className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                          <p className="text-gray-600 text-sm">Interactive Map</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 text-lg">
                Quick answers to common questions about our services
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    How quickly can I expect a response to my inquiry?
                  </h3>
                  <p className="text-gray-700">
                    We strive to respond to all inquiries within 24 hours during business days. For urgent matters, please call our main office directly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Do you charge for property valuations?
                  </h3>
                  <p className="text-gray-700">
                    We offer free basic property valuations. For comprehensive investment analysis and detailed valuation reports, we have competitive pricing packages.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    Can you help with property financing?
                  </h3>
                  <p className="text-gray-700">
                    While we don't provide direct financing, we work closely with trusted banking partners and can connect you with mortgage specialists who can help secure financing.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    What areas do you cover in Tehran?
                  </h3>
                  <p className="text-gray-700">
                    We cover all areas of Tehran, from the northern luxury neighborhoods to eastern residential areas. Our three offices ensure we can serve clients throughout the city.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-red-50 border-y border-red-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-red-800">Emergency Contact</h2>
            <p className="text-red-700 mb-6">
              For urgent property matters or emergencies, please call our 24/7 hotline:
            </p>
            <div className="flex justify-center">
              <Button variant="destructive" size="lg" asChild>
                <a href="tel:+98-21-88765499">
                  <Phone className="w-4 h-4 mr-2" />
                  +98-21-88765499
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
'use client'

import { useState } from 'react'
import { 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  Search,
  Home,
  DollarSign,
  FileText,
  Users,
  Building,
  Clock,
  TrendingUp
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

export default function FAQPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedItems, setExpandedItems] = useState<number[]>([])

  const faqData = [
    {
      category: "General",
      icon: HelpCircle,
      questions: [
        {
          question: "What services does Tehran Properties offer?",
          answer: "Tehran Properties offers comprehensive real estate services including property buying, selling, renting, property management, investment consultation, market analysis, and property valuation. We work with residential, commercial, and luxury properties across all Tehran neighborhoods."
        },
        {
          question: "How long have you been in business?",
          answer: "Tehran Properties has been serving the Tehran real estate market for over 15 years, establishing ourselves as one of the most trusted and successful real estate agencies in the city."
        },
        {
          question: "Do you charge fees for buyers?",
          answer: "Typically, buyers do not pay commission fees when working with Tehran Properties. Our commission is usually paid by the seller. However, certain specialized services like property valuation or investment consultation may have separate fees."
        },
        {
          question: "What areas do you cover?",
          answer: "We cover all areas of Tehran, from northern luxury neighborhoods like Niavaran and Zaferanieh to eastern areas like Tehranpars, as well as central and western districts. We have three offices strategically located to serve clients throughout the city."
        }
      ]
    },
    {
      category: "Buying Property",
      icon: Home,
      questions: [
        {
          question: "How do I start the buying process?",
          answer: "Start by browsing our online listings or contacting one of our agents. We'll help you identify your needs, arrange property viewings, assist with negotiations, handle paperwork, and guide you through the entire closing process."
        },
        {
          question: "Can foreigners buy property in Iran?",
          answer: "Yes, foreigners can buy property in Iran, but there are certain restrictions and requirements. They need to obtain special permits and should work with qualified legal counsel. Our team can connect you with experienced real estate lawyers who specialize in foreign investments."
        },
        {
          question: "What documents do I need to buy property?",
          answer: "Typically, you'll need a valid national ID card, proof of income, bank statements, and for foreign buyers, a valid passport and residence permit. Our agents will provide you with a complete checklist based on your specific situation."
        },
        {
          question: "How long does the buying process take?",
          answer: "The buying process in Tehran typically takes 30-60 days from offer acceptance to closing, depending on various factors like property type, financing requirements, and documentation completeness."
        }
      ]
    },
    {
      category: "Selling Property",
      icon: DollarSign,
      questions: [
        {
          question: "How do you determine the value of my property?",
          answer: "We use a comprehensive valuation approach considering recent comparable sales, current market trends, property condition, location, amenities, and unique features. We provide free basic valuations and detailed paid valuation reports for investment purposes."
        },
        {
          question: "What commission do you charge?",
          answer: "Our commission rates are competitive and typically range from 1-2% of the sale price, depending on the property type, location, and services required. We offer different service packages to suit various needs and budgets."
        },
        {
          question: "How long does it take to sell a property?",
          answer: "The average time to sell a property in Tehran is 42 days, but this varies significantly based on price, location, condition, and market conditions. Properties priced correctly and in desirable areas typically sell faster."
        },
        {
          question: "Do you provide professional photography?",
          answer: "Yes, we offer professional photography, virtual tours, and drone footage as part of our premium listing services. High-quality visuals significantly increase buyer interest and can lead to faster sales at better prices."
        }
      ]
    },
    {
      category: "Renting",
      icon: Building,
      questions: [
        {
          question: "What are the typical rental terms in Tehran?",
          answer: "Standard rental agreements in Tehran are typically for one year with options to renew. Security deposits usually equal 2-3 months' rent, and rent is paid quarterly or semi-annually in advance."
        },
        {
          question: "Do you help with rental agreements?",
          answer: "Yes, we prepare legally compliant rental agreements, explain all terms and conditions, and ensure both landlord and tenant rights are protected. We also handle the entire rental process from property listing to key handover."
        },
        {
          question: "What documents do I need to rent a property?",
          answer: "Tenants typically need a national ID card, proof of employment or income, and sometimes a guarantor. For expatriates, a valid passport, residence permit, and work visa are required."
        },
        {
          question: "Can you help with property management?",
          answer: "Yes, we offer comprehensive property management services including tenant screening, rent collection, maintenance coordination, regular inspections, and financial reporting for landlords who prefer hands-off management."
        }
      ]
    },
    {
      category: "Legal & Documentation",
      icon: FileText,
      questions: [
        {
          question: "What legal documents are involved in property transactions?",
          answer: "Key documents include the title deed (سند), property tax clearance, municipal certificates, and the sale agreement. Our team ensures all documents are properly prepared and verified before closing."
        },
        {
          question: "Do you provide legal assistance?",
          answer: "While we are not lawyers, we work closely with experienced real estate attorneys and can connect you with qualified legal professionals. We ensure all documentation complies with Iranian property laws and regulations."
        },
        {
          question: "What taxes are involved in property transactions?",
          answer: "Property transactions in Iran may involve stamp duty, registration fees, and potentially capital gains tax if the property is sold within 5 years of purchase. We provide detailed tax breakdowns for all transactions."
        },
        {
          question: "How is property ownership transferred?",
          answer: "Property ownership is transferred through the official registration office (دفترخانه اسناد رسمی). Both parties must be present, or have legal representatives, to sign the transfer deed in the presence of an official notary."
        }
      ]
    },
    {
      category: "Investment",
      icon: TrendingUp,
      questions: [
        {
          question: "Is Tehran real estate a good investment?",
          answer: "Tehran real estate has historically shown strong appreciation, particularly in prime northern areas. The city offers diverse investment opportunities from residential rentals to commercial properties. Our investment specialists can provide detailed market analysis and ROI projections."
        },
        {
          question: "What are the best areas for investment?",
          answer: "Currently, areas like Saadat Abad, Niavaran, and Lavasan show strong appreciation potential, while eastern areas like Tehranpars offer attractive rental yields. The best investment depends on your budget, timeline, and investment goals."
        },
        {
          question: "Do you offer investment consultation?",
          answer: "Yes, we have dedicated investment specialists who provide market analysis, ROI calculations, risk assessment, and portfolio recommendations. We also offer ongoing investment advisory services for our clients."
        },
        {
          question: "Can foreigners invest in Tehran real estate?",
          answer: "Foreigners can invest in Tehran real estate, though there are some restrictions on agricultural land and certain sensitive areas. We have extensive experience helping international investors navigate the legal requirements and find suitable investment opportunities."
        }
      ]
    }
  ]

  const toggleExpanded = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const filteredFAQs = faqData.map(category => ({
    ...category,
    questions: category.questions.filter(q => 
      q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(category => category.questions.length > 0)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Find answers to common questions about Tehran real estate
            </p>
            <div className="relative max-w-2xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                placeholder="Search FAQ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-gray-900"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <div className="flex items-center mb-6">
                  <category.icon className="w-8 h-8 mr-3 text-blue-600" />
                  <h2 className="text-2xl font-bold">{category.category}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const itemIndex = categoryIndex * 100 + faqIndex
                    const isExpanded = expandedItems.includes(itemIndex)
                    
                    return (
                      <Card key={faqIndex} className="overflow-hidden">
                        <CardContent className="p-0">
                          <button
                            onClick={() => toggleExpanded(itemIndex)}
                            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          >
                            <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                            )}
                          </button>
                          {isExpanded && (
                            <div className="px-6 pb-4 border-t">
                              <p className="text-gray-700 leading-relaxed mt-4">{faq.answer}</p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </div>
            ))}

            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <h3 className="text-xl font-semibold mb-2">No FAQs found</h3>
                <p className="text-gray-600 mb-4">
                  Try adjusting your search terms or browse all categories.
                </p>
                <Button onClick={() => setSearchTerm('')}>
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our expert team is here to help you with any additional questions
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-lg font-semibold mb-2">Talk to an Agent</h3>
                  <p className="text-gray-600 mb-4">Get personalized answers from our experienced agents</p>
                  <Button variant="outline" asChild>
                    <a href="/agents">Find Agents</a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-green-600" />
                  <h3 className="text-lg font-semibold mb-2">Property Valuation</h3>
                  <p className="text-gray-600 mb-4">Free property valuation and market analysis</p>
                  <Button variant="outline" asChild>
                    <a href="/valuation">Get Valuation</a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Building className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                  <h3 className="text-lg font-semibold mb-2">Browse Properties</h3>
                  <p className="text-gray-600 mb-4">Explore our extensive property listings</p>
                  <Button variant="outline" asChild>
                    <a href="/properties">View Properties</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h3>
              <p className="text-gray-700 mb-6">
                Call our hotline for immediate support from our customer service team
              </p>
              <Button size="lg" asChild>
                <a href="tel:+98-21-88765432">
                  Call Now: +98-21-88765432
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
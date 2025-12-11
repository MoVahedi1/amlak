'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  Users, 
  Award, 
  Building, 
  TrendingUp, 
  CheckCircle, 
  Star,
  Target,
  Heart,
  Shield,
  Zap
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import agentsData from '@/data/agents.json'

export default function AboutPage() {
  const stats = [
    { icon: Building, label: "Properties Sold", value: "2,500+" },
    { icon: Users, label: "Happy Clients", value: "3,500+" },
    { icon: Award, label: "Years of Experience", value: "15+" },
    { icon: TrendingUp, label: "Market Share", value: "25%" }
  ]

  const values = [
    {
      icon: Heart,
      title: "Client-First Approach",
      description: "We prioritize our clients' needs and work tirelessly to exceed their expectations."
    },
    {
      icon: Shield,
      title: "Integrity & Trust",
      description: "We conduct business with the highest ethical standards and complete transparency."
    },
    {
      icon: Zap,
      title: "Innovation & Technology",
      description: "We leverage cutting-edge technology to provide the best real estate experience."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering exceptional results and achieving our clients' goals."
    }
  ]

  const milestones = [
    { year: "2009", title: "Founded", description: "Tehran Properties was established with a vision to revolutionize real estate in Iran." },
    { year: "2012", title: "Expansion", description: "Opened our second office in northern Tehran to better serve our growing client base." },
    { year: "2015", title: "Technology Integration", description: "Launched our digital platform with advanced property search and virtual tours." },
    { year: "2018", title: "Market Leader", description: "Became the leading real estate agency in Tehran with over 1,000 properties sold." },
    { year: "2021", title: "International Recognition", description: "Received international awards for excellence in real estate services." },
    { year: "2024", title: "Innovation Hub", description: "Launched AI-powered property valuation and investment analysis tools." }
  ]

  const featuredAgents = agentsData.slice(0, 3)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Tehran Properties
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Your trusted partner in Tehran's real estate market for over 15 years
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
                <Link href="/agents">
                  Meet Our Team
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 text-lg">
                From a small startup to Tehran's leading real estate agency
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Founded in 2009, Tehran Properties began as a small team of passionate real estate professionals with a simple mission: to provide exceptional service and expert guidance to clients navigating Tehran's complex property market.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Over the years, we've grown into Tehran's most trusted real estate agency, helping thousands of families, investors, and businesses find their perfect properties. Our success is built on a foundation of integrity, expertise, and an unwavering commitment to our clients' success.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Today, we continue to innovate and lead the industry, combining traditional real estate wisdom with cutting-edge technology to deliver unparalleled service and results.
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                  alt="Tehran Properties Office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg">
              Key milestones in our growth story
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
              
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 pr-8 text-right">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                      <div className="text-blue-600 font-bold mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-blue-600 rounded-full border-4 border-white z-10"></div>
                  <div className="w-1/2 pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 text-lg mb-8">
              The talented professionals behind our success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {featuredAgents.map((agent) => (
              <Card key={agent.id} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <Image
                      src={agent.photo}
                      alt={agent.name}
                      width={96}
                      height={96}
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{agent.name}</h3>
                  <p className="text-gray-600 mb-4">{agent.title}</p>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{agent.listingsCount} Properties Listed</p>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={`/agents#${agent.id}`}>
                      View Profile
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/agents">
                View All Team Members
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work with Tehran's Best?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of satisfied clients who have found their perfect properties through our expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                Get Started
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

      {/* Licenses & Certifications */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Licenses & Certifications</h2>
            <p className="text-gray-600 text-lg">
              Fully licensed and certified to operate in Tehran and throughout Iran
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="p-6">
                <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-600" />
                <h3 className="text-xl font-semibold mb-2">Real Estate License</h3>
                <p className="text-gray-600">Licensed by the Ministry of Roads and Urban Development</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Award className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-semibold mb-2">ISO Certified</h3>
                <p className="text-gray-600">ISO 9001:2015 certified for quality management</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <Shield className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-xl font-semibold mb-2">Insured & Bonded</h3>
                <p className="text-gray-600">Fully insured and bonded for client protection</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
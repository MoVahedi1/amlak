'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Search, Phone, Mail } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TP</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Tehran Properties</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1">
                <span>Buy</span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/properties?type=buy&category=apartment" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                  Apartments
                </Link>
                <Link href="/properties?type=buy&category=villa" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                  Villas
                </Link>
                <Link href="/properties?type=buy&category=house" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                  Houses
                </Link>
                <Link href="/properties?type=buy&category=commercial" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                  Commercial
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1">
                <span>Rent</span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/properties?type=rent&category=apartment" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                  Apartments
                </Link>
                <Link href="/properties?type=rent&category=house" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                  Houses
                </Link>
                <Link href="/properties?type=rent&category=commercial" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                  Commercial
                </Link>
              </div>
            </div>
            <Link href="/featured" className="text-gray-700 hover:text-blue-600 transition-colors">
              Featured
            </Link>
            <Link href="/neighborhoods" className="text-gray-700 hover:text-blue-600 transition-colors">
              Neighborhoods
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <Link href="/agents" className="text-gray-700 hover:text-blue-600 transition-colors">
              Agents
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1">
                <span>More</span>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/about" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                  About Us
                </Link>
                <Link href="/contact" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                  Contact
                </Link>
                <Link href="/market" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                  Market Stats
                </Link>
                <Link href="/submit" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                  Submit Property
                </Link>
                <Link href="/valuation" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                  Request Valuation
                </Link>
                <Link href="/faq" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">
                  FAQ
                </Link>
              </div>
            </div>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/contact">
                <Phone className="w-4 h-4 mr-2" />
                Contact
              </Link>
            </Button>
            <Button size="sm" asChild>
              <Link href="/submit">List Property</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <div>
                <Link href="/properties?type=buy" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Buy
                </Link>
                <div className="pl-4 mt-2 space-y-2">
                  <Link href="/properties?type=buy&category=apartment" className="block text-sm text-gray-600 hover:text-blue-600">
                    Apartments
                  </Link>
                  <Link href="/properties?type=buy&category=villa" className="block text-sm text-gray-600 hover:text-blue-600">
                    Villas
                  </Link>
                  <Link href="/properties?type=buy&category=house" className="block text-sm text-gray-600 hover:text-blue-600">
                    Houses
                  </Link>
                  <Link href="/properties?type=buy&category=commercial" className="block text-sm text-gray-600 hover:text-blue-600">
                    Commercial
                  </Link>
                </div>
              </div>
              <div>
                <Link href="/properties?type=rent" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Rent
                </Link>
                <div className="pl-4 mt-2 space-y-2">
                  <Link href="/properties?type=rent&category=apartment" className="block text-sm text-gray-600 hover:text-blue-600">
                    Apartments
                  </Link>
                  <Link href="/properties?type=rent&category=house" className="block text-sm text-gray-600 hover:text-blue-600">
                    Houses
                  </Link>
                  <Link href="/properties?type=rent&category=commercial" className="block text-sm text-gray-600 hover:text-blue-600">
                    Commercial
                  </Link>
                </div>
              </div>
              <Link href="/featured" className="text-gray-700 hover:text-blue-600 transition-colors">
                Featured
              </Link>
              <Link href="/neighborhoods" className="text-gray-700 hover:text-blue-600 transition-colors">
                Neighborhoods
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
                Blog
              </Link>
              <Link href="/agents" className="text-gray-700 hover:text-blue-600 transition-colors">
                Agents
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              <Link href="/market" className="text-gray-700 hover:text-blue-600 transition-colors">
                Market Stats
              </Link>
              <Link href="/submit" className="text-gray-700 hover:text-blue-600 transition-colors">
                Submit Property
              </Link>
              <div className="pt-4 border-t flex flex-col space-y-2">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/contact">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact
                  </Link>
                </Button>
                <Button size="sm" asChild>
                  <Link href="/submit">List Property</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
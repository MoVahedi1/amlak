import Link from 'next/link'
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">TP</span>
              </div>
              <span className="text-xl font-bold">Tehran Properties</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for real estate in Tehran. We help you find the perfect property to buy, rent, or invest in.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/properties?type=buy" className="text-gray-400 hover:text-white transition-colors">
                  Buy Property
                </Link>
              </li>
              <li>
                <Link href="/properties?type=rent" className="text-gray-400 hover:text-white transition-colors">
                  Rent Property
                </Link>
              </li>
              <li>
                <Link href="/featured" className="text-gray-400 hover:text-white transition-colors">
                  Featured Listings
                </Link>
              </li>
              <li>
                <Link href="/submit" className="text-gray-400 hover:text-white transition-colors">
                  Submit Property
                </Link>
              </li>
              <li>
                <Link href="/valuation" className="text-gray-400 hover:text-white transition-colors">
                  Property Valuation
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Areas */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/neighborhoods/saadat-abad" className="text-gray-400 hover:text-white transition-colors">
                  Saadat Abad
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods/niavaran" className="text-gray-400 hover:text-white transition-colors">
                  Niavaran
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods/tehranpars" className="text-gray-400 hover:text-white transition-colors">
                  Tehranpars
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods/lavasan" className="text-gray-400 hover:text-white transition-colors">
                  Lavasan
                </Link>
              </li>
              <li>
                <Link href="/neighborhoods/vanak" className="text-gray-400 hover:text-white transition-colors">
                  Vanak
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">
                  Valiasr Street, Tehran, Iran
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">+98-21-88765432</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="text-gray-400">info@tehranproperties.com</span>
              </div>
            </div>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Office Hours</h4>
              <p className="text-gray-400 text-sm">
                Saturday - Thursday: 9:00 AM - 6:00 PM
              </p>
              <p className="text-gray-400 text-sm">
                Friday: Closed
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Tehran Properties. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
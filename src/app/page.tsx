'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation' //
import { Search, MapPin, Home, TrendingUp, Users, Star, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent } from '@/components/ui/card'
import PropertyCard from '@/components/PropertyCard'
import { formatPrice } from '@/utils'
import propertiesData from '@/data/properties.json'

// تعریف اینترفیس برای استیت جستجو
interface SearchState {
  type: string;
  category: string;
  neighborhood: string;
  minPrice?: string | number; // اضافه کردن فیلد قیمت
}

export default function HomePage() {
  const router = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // مقداردهی اولیه اصلاح شده
  const [searchData, setSearchData] = useState<SearchState>({
    type: 'buy',
    category: 'all',
    neighborhood: '',
    minPrice: '' 
  })

  const featuredProperties = propertiesData.filter(property => property.featured).slice(0, 3)
  const recentProperties = propertiesData.slice(0, 6)

  const heroSlides = [
    {
      title: "ملک رویایی خود را در تهران پیدا کنید",
      subtitle: "املاک برتر در محله‌های مورد نظر تهران را کشف کنید",
      image: "/images/tehran/luxury-apartment-1.jpg",
      cta: "مشاهده املاک"
    },
    {
      title: "زندگی لوکس در شمال تهران",
      subtitle: "تجربه بهترین زندگی با چشم‌انداز‌های خیره‌کننده از کوه‌ها و امکانات رفاهی",
      image: "/images/tehran/modern-villa-1.jpg",
      cta: "مشاهده املاک لوکس"
    },
    {
      title: "فرصت‌های سرمایه‌گذاری هوشمند",
      subtitle: "با ثروت خود در بازار املاک تهران، ثروت کنید",
      image: "/images/tehran/tehran-view-1.jpg",
      cta: "همین حالا سرمایه‌گذاری کنید"
    }
  ]

  // اصلاح آرایه محله‌ها با اضافه کردن نام انگلیسی برای لینک‌دهی
  const neighborhoods = [
    { name: "سعاد آباد", englishName: "Saadat Abad", avgPrice: 750000000, properties: 45 },
    { name: "نیاوران", englishName: "Niavaran", avgPrice: 1200000000, properties: 32 },
    { name: "تهران‌پارس", englishName: "Tehranpars", avgPrice: 450000000, properties: 78 },
    { name: "لواسان", englishName: "Lavasan", avgPrice: 2500000000, properties: 28 }
  ]

  const stats = [
    { icon: Home, label: "املاک‌های فروخته", value: "1,250+" },
    { icon: Users, label: "مشتریان راضی", value: "3,500+" },
    { icon: TrendingUp, label: "سال‌ها تجربه", value: "15+" },
    { icon: Star, label: "امتیاز مشتریان", value: "4.9/5" }
  ]

  const testimonials = [
    {
      name: "محمد رضایی",
      role: "سرمایه‌گذار املاک",
      content: "املاک تهران به من کمک کرد تا ملک سرمایه‌گذاری مناسب را پیدا کنم. تخصص و حرفه‌ای‌گری ایشان کل فرآیند را روان و کارآمد کرد.",
      rating: 5
    },
    {
      name: "سارا کاظمی",
      role: "صاحب‌خانه",
      content: "آپارتمان رویایی خود را از طریق تهران_properties پیدا کرد. کارشناسان در مورد محله‌های مختلف آگاهی کامل داشتند و به من در تصمیم‌گیری کمک کردند.",
      rating: 5
    },
    {
      name: "احمد حسینی",
      role: "توسعه‌دهنده املاک",
      content: "با تخصص در تحلیل بازار، تهران_properties به من کمک کرد تا بهترین فرصت‌های سرمایه‌گذاری را پیدا کنم. تحلیل‌های ایشان بسیار دقیق و کاربردی بود.",
      rating: 5
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  // تابع جستجوی اصلاح شده با استفاده از router.push
  const handleSearch = () => {
    const params = new URLSearchParams()
    if (searchData.type !== 'all') params.append('type', searchData.type)
    if (searchData.category !== 'all') params.append('category', searchData.category)
    if (searchData.neighborhood && searchData.neighborhood !== 'all') params.append('neighborhood', searchData.neighborhood)
    
    // اصلاح باگ مقدار 0: بررسی می‌کنیم که مقدار خالی یا undefined نباشد (0 مجاز است)
    if (searchData.minPrice !== '' && searchData.minPrice !== undefined) {
       params.append('minPrice', searchData.minPrice.toString())
    }
    
    router.push(`/properties?${params.toString()}`)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {heroSlides[currentSlide].subtitle}
            </p>
            <Button size="lg" asChild>
              <Link href="/properties">
                {heroSlides[currentSlide].cta}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-12' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Quick Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6 text-center">Quick Property Search</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                <Select value={searchData.type} onValueChange={(value) => setSearchData({...searchData, type: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Property Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buy">For Sale</SelectItem>
                    <SelectItem value="rent">For Rent</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={searchData.category} onValueChange={(value) => setSearchData({...searchData, category: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={searchData.neighborhood} onValueChange={(value) => setSearchData({...searchData, neighborhood: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Neighborhood" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Areas</SelectItem>
                    <SelectItem value="Saadat Abad">Saadat Abad</SelectItem>
                    <SelectItem value="Niavaran">Niavaran</SelectItem>
                    <SelectItem value="Tehranpars">Tehranpars</SelectItem>
                    <SelectItem value="Lavasan">Lavasan</SelectItem>
                  </SelectContent>
                </Select>

                <div className="relative">
                  <Input
                    placeholder="Min Price"
                    type="number"
                    // استفاده از ?? برای هندل کردن صحیح مقادیر
                    value={searchData.minPrice ?? ''}
                    onChange={(e) => setSearchData({...searchData, minPrice: e.target.value})}
                  />
                </div>

                <Button onClick={handleSearch} className="w-full">
                  <Search className="w-4 h-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our handpicked selection of premium properties in Tehran's most desirable locations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className="text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/featured">
                View All Featured Properties
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Neighborhoods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Neighborhoods</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore Tehran's most sought-after residential areas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {neighborhoods.map((neighborhood, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{neighborhood.name}</h3>
                  <div className="text-2xl font-bold text-blue-600 mb-2">
                    {formatPrice(neighborhood.avgPrice)}
                  </div>
                  <div className="text-gray-600 mb-4">
                    {neighborhood.properties} Properties
                  </div>
                  {/* لینک اصلاح شده: استفاده از نام انگلیسی در کوئری استرینگ */}
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href={`/properties?neighborhood=${neighborhood.englishName}`}>
                      Explore Area
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Properties */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Properties</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The latest additions to our property portfolio
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {recentProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className="text-center">
            <Button size="lg" asChild>
              <Link href="/properties">
                View All Properties
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">نظرات مشتریان</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              تجربه مشتریان راضی از خدمات ما
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Dream Property?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            به تیم متخصص ما کمک کنید تا با اعتماد کامل در بازار املاک تهران حرکت کنید
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contact">
                تماس با مشاور
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/submit">
                ثبت املاک
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

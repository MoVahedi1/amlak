'use client'

import { useState } from 'react'
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Home, 
  BarChart3, 
  Calendar,
  Download,
  Filter,
  Eye
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { formatPrice } from '@/utils'
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

export default function MarketPage() {
  const [timeRange, setTimeRange] = useState('year')
  const [propertyType, setPropertyType] = useState('all')
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('all')

  // Mock data for charts
  const priceTrendData = [
    { month: 'Jan', average: 680000000, volume: 245 },
    { month: 'Feb', average: 695000000, volume: 267 },
    { month: 'Mar', average: 710000000, volume: 289 },
    { month: 'Apr', average: 725000000, volume: 312 },
    { month: 'May', average: 740000000, volume: 298 },
    { month: 'Jun', average: 755000000, volume: 324 },
    { month: 'Jul', average: 770000000, volume: 341 },
    { month: 'Aug', average: 785000000, volume: 356 },
    { month: 'Sep', average: 800000000, volume: 338 },
    { month: 'Oct', average: 815000000, volume: 362 },
    { month: 'Nov', average: 830000000, volume: 375 },
    { month: 'Dec', average: 845000000, volume: 389 }
  ]

  const neighborhoodComparison = [
    { name: 'Saadat Abad', avgPrice: 750000000, growth: 12.5, properties: 45 },
    { name: 'Niavaran', avgPrice: 1200000000, growth: 15.8, properties: 32 },
    { name: 'Tehranpars', avgPrice: 450000000, growth: 8.3, properties: 78 },
    { name: 'Lavasan', avgPrice: 2500000000, growth: 18.2, properties: 28 },
    { name: 'Vanak', avgPrice: 680000000, growth: 10.7, properties: 56 },
    { name: 'Jordan', avgPrice: 1800000000, growth: 14.3, properties: 24 }
  ]

  const propertyTypeDistribution = [
    { name: 'Apartments', value: 65, color: '#3B82F6' },
    { name: 'Houses', value: 20, color: '#10B981' },
    { name: 'Villas', value: 8, color: '#F59E0B' },
    { name: 'Commercial', value: 5, color: '#EF4444' },
    { name: 'Land', value: 2, color: '#8B5CF6' }
  ]

  const marketIndicators = [
    {
      title: 'Average Property Price',
      value: formatPrice(845000000),
      change: '+5.2%',
      trend: 'up',
      icon: DollarSign,
      description: 'Compared to last month'
    },
    {
      title: 'Properties Sold',
      value: '389',
      change: '+12.8%',
      trend: 'up',
      icon: Home,
      description: 'This month'
    },
    {
      title: 'Market Volume',
      value: '3.2B T',
      change: '+8.4%',
      trend: 'up',
      icon: BarChart3,
      description: 'Total transaction value'
    },
    {
      title: 'Days on Market',
      value: '42',
      change: '-3.2%',
      trend: 'down',
      icon: Calendar,
      description: 'Average time to sell'
    }
  ]

  const monthlyData = [
    { month: 'Jan', sales: 245, newListings: 312, avgPrice: 680000000 },
    { month: 'Feb', sales: 267, newListings: 298, avgPrice: 695000000 },
    { month: 'Mar', sales: 289, newListings: 324, avgPrice: 710000000 },
    { month: 'Apr', sales: 312, newListings: 341, avgPrice: 725000000 },
    { month: 'May', sales: 298, newListings: 356, avgPrice: 740000000 },
    { month: 'Jun', sales: 324, newListings: 338, avgPrice: 755000000 }
  ]

  const getTrendIcon = (trend: 'up' | 'down') => {
    return trend === 'up' ? 
      <TrendingUp className="w-4 h-4 text-green-600" /> : 
      <TrendingDown className="w-4 h-4 text-red-600" />
  }

  const getTrendColor = (trend: 'up' | 'down') => {
    return trend === 'up' ? 'text-green-600' : 'text-red-600'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tehran Real Estate Market
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              Comprehensive market analysis, trends, and insights for informed investment decisions
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary">
                <Download className="w-4 h-4 mr-2" />
                Download Report
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
                <Eye className="w-4 h-4 mr-2" />
                View Live Data
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Indicators */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Market Overview</h2>
            <p className="text-gray-600 text-lg">
              Key performance indicators for Tehran's real estate market
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketIndicators.map((indicator, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <indicator.icon className="w-8 h-8 text-blue-600" />
                    <div className="flex items-center">
                      {getTrendIcon(indicator.trend)}
                      <span className={`ml-1 font-semibold ${getTrendColor(indicator.trend)}`}>
                        {indicator.change}
                      </span>
                    </div>
                  </div>
                  <div className="text-2xl font-bold mb-2">{indicator.value}</div>
                  <div className="text-sm text-gray-600">{indicator.title}</div>
                  <div className="text-xs text-gray-500 mt-1">{indicator.description}</div>
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
                <span className="text-sm text-gray-600">Time Range:</span>
                <Select value={timeRange} onValueChange={setTimeRange}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="month">Last Month</SelectItem>
                    <SelectItem value="quarter">Last Quarter</SelectItem>
                    <SelectItem value="year">Last Year</SelectItem>
                    <SelectItem value="all">All Time</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Property Type:</span>
                <Select value={propertyType} onValueChange={setPropertyType}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="apartment">Apartments</SelectItem>
                    <SelectItem value="house">Houses</SelectItem>
                    <SelectItem value="villa">Villas</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Neighborhood:</span>
                <Select value={selectedNeighborhood} onValueChange={setSelectedNeighborhood}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Areas</SelectItem>
                    <SelectItem value="saadat-abad">Saadat Abad</SelectItem>
                    <SelectItem value="niavaran">Niavaran</SelectItem>
                    <SelectItem value="tehranpars">Tehranpars</SelectItem>
                    <SelectItem value="lavasan">Lavasan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Advanced Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Price Trends Chart */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Price Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={priceTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`} />
                    <Tooltip 
                      formatter={(value: any) => [formatPrice(value), 'Average Price']}
                      labelFormatter={(label) => `Month: ${label}`}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="average" 
                      stroke="#3B82F6" 
                      strokeWidth={2}
                      name="Average Price"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sales Volume</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={priceTrendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value: any) => [value, 'Properties Sold']}
                      labelFormatter={(label) => `Month: ${label}`}
                    />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="volume" 
                      stroke="#10B981" 
                      fill="#10B981"
                      fillOpacity={0.6}
                      name="Properties Sold"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Neighborhood Comparison */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Neighborhood Comparison</h2>
            <p className="text-gray-600 text-lg">
              Compare average prices and growth rates across Tehran's top neighborhoods
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={neighborhoodComparison} layout="horizontal">
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" tickFormatter={(value) => `${(value / 1000000).toFixed(0)}M`} />
                  <YAxis dataKey="name" type="category" width={100} />
                  <Tooltip 
                    formatter={(value: any, name: string) => {
                      if (name === 'avgPrice') return [formatPrice(value), 'Average Price']
                      if (name === 'growth') return [`${value}%`, 'Growth Rate']
                      return [value, name]
                    }}
                  />
                  <Legend />
                  <Bar dataKey="avgPrice" fill="#3B82F6" name="Average Price" />
                  <Bar dataKey="growth" fill="#10B981" name="Growth Rate (%)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {neighborhoodComparison.map((neighborhood, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">{neighborhood.name}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Avg. Price:</span>
                      <span className="font-semibold">{formatPrice(neighborhood.avgPrice)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Growth:</span>
                      <Badge variant={neighborhood.growth > 12 ? 'default' : 'secondary'}>
                        +{neighborhood.growth}%
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Properties:</span>
                      <span>{neighborhood.properties}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Property Type Distribution */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Property Type Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={propertyTypeDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {propertyTypeDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={monthlyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sales" fill="#3B82F6" name="Properties Sold" />
                    <Bar dataKey="newListings" fill="#F59E0B" name="New Listings" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Market Insights</h2>
            <p className="text-gray-600 text-lg">
              Important trends and observations from our market analysis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Strong Growth in Northern Areas</h3>
                <p className="text-gray-600">
                  Properties in northern Tehran show 15-18% annual growth, outperforming other areas by 5-7%.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">High Demand for Apartments</h3>
                <p className="text-gray-600">
                  Apartments represent 65% of all transactions, with average selling time of 42 days.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Investment Opportunities</h3>
                <p className="text-gray-600">
                  Eastern Tehran offers attractive rental yields of 6-8%, ideal for investment properties.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Need Detailed Market Analysis?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Get personalized insights and investment recommendations from our market experts
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Schedule Consultation
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              <Download className="w-4 h-4 mr-2" />
              Download Full Report
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, Eye, Lock, Database } from 'lucide-react'

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-6 h-6 mr-2 text-blue-600" />
                    Last Updated: January 15, 2024
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    At Tehran Properties, we are committed to protecting your privacy and ensuring the security of your personal information. 
                    This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our website, 
                    mobile applications, and real estate services.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Eye className="w-6 h-6 mr-2 text-blue-600" />
                    Information We Collect
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
                      <p className="text-gray-700">
                        We collect information you provide directly to us, such as when you create an account, 
                        contact us, submit a property, or use our services. This may include:
                      </p>
                      <ul className="list-disc pl-6 mt-2 text-gray-700">
                        <li>Name, email address, phone number</li>
                        <li>Physical address and location data</li>
                        <li>Property preferences and search criteria</li>
                        <li>Financial information for qualification purposes</li>
                        <li>Government-issued identification (when required)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Automatically Collected Information</h3>
                      <p className="text-gray-700">
                        When you access our website or use our services, we automatically collect certain information:
                      </p>
                      <ul className="list-disc pl-6 mt-2 text-gray-700">
                        <li>IP address and device information</li>
                        <li>Browser type and operating system</li>
                        <li>Pages visited and time spent on our site</li>
                        <li>Search queries and property interactions</li>
                        <li>Cookies and similar tracking technologies</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2">Property Information</h3>
                      <p className="text-gray-700">
                        When you list a property with us, we collect detailed information about the property, 
                        including photos, videos, specifications, and location data.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="w-6 h-6 mr-2 text-blue-600" />
                    How We Use Your Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      We use the information we collect for various purposes, including:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li><strong>Service Provision:</strong> To provide real estate services, connect buyers and sellers, and facilitate property transactions</li>
                      <li><strong>Personalization:</strong> To customize your experience and provide relevant property recommendations</li>
                      <li><strong>Communication:</strong> To respond to inquiries, send updates, and provide customer support</li>
                      <li><strong>Marketing:</strong> To send promotional materials (with your consent)</li>
                      <li><strong>Analytics:</strong> To analyze usage patterns and improve our services</li>
                      <li><strong>Legal Compliance:</strong> To comply with legal obligations and protect our rights</li>
                      <li><strong>Safety:</strong> To ensure the security of our platform and prevent fraud</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="w-6 h-6 mr-2 text-blue-600" />
                    Information Sharing and Disclosure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      We may share your information under certain circumstances:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li><strong>With Other Users:</strong> When you list a property or inquire about one, relevant information is shared with interested parties</li>
                      <li><strong>Service Providers:</strong> With third-party service providers who assist in operating our business (e.g., payment processors, analytics providers)</li>
                      <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
                      <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or sales of assets</li>
                      <li><strong>Safety:</strong> To protect our rights, property, or safety, or that of our users or the public</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      We do not sell your personal information to third parties for their marketing purposes.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Data Security</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We implement appropriate technical and organizational measures to protect your personal information 
                    against unauthorized access, alteration, disclosure, or destruction. These include:
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-gray-700">
                    <li>SSL encryption for data transmission</li>
                    <li>Secure servers and database protection</li>
                    <li>Regular security audits and vulnerability assessments</li>
                    <li>Employee training on data protection practices</li>
                    <li>Access controls and authentication systems</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    However, no method of transmission over the internet or electronic storage is 100% secure. 
                    While we strive to use commercially acceptable means to protect your personal information, 
                    we cannot guarantee its absolute security.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Your Rights</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Depending on your location, you may have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li><strong>Access:</strong> Request access to your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                    <li><strong>Objection:</strong> Object to processing of your information</li>
                    <li><strong>Restriction:</strong> Request restriction of processing</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    To exercise these rights, please contact us using the information provided below.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Cookies and Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    We use cookies and similar tracking technologies to enhance your experience on our website:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                    <li><strong>Performance Cookies:</strong> Help us understand how our website is used</li>
                    <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                    <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    You can control cookie settings through your browser preferences. However, disabling cookies 
                    may affect your ability to use certain features of our website.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Third-Party Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Our website may contain links to third-party websites, services, or resources. 
                    We are not responsible for the privacy practices of these third parties. 
                    We encourage you to review the privacy policies of any third-party sites you visit.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Children's Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Our services are not intended for individuals under the age of 18. We do not knowingly 
                    collect personal information from children under 18. If you become aware that a child 
                    has provided us with personal information, please contact us immediately.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>International Data Transfers</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Your personal information may be transferred to and processed in countries other than 
                    your own. We ensure appropriate safeguards are in place to protect your information 
                    in accordance with applicable data protection laws.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Changes to This Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    We may update this Privacy Policy from time to time. We will notify you of any changes 
                    by posting the new policy on this page and updating the "Last Updated" date. 
                    We encourage you to review this policy periodically for any changes.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700"><strong>Email:</strong> privacy@tehranproperties.com</p>
                    <p className="text-gray-700"><strong>Phone:</strong> +98-21-88765432</p>
                    <p className="text-gray-700"><strong>Address:</strong> No. 123, Valiasr Street, Tehran, Iran</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
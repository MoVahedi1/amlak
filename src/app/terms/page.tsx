import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FileText, Scale, AlertCircle, Users } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-blue-100">
              Please read these terms carefully before using Tehran Properties services.
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-6 h-6 mr-2 text-blue-600" />
                    Last Updated: January 15, 2024
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    Welcome to Tehran Properties. These Terms of Service ("Terms") govern your use of our website, 
                    mobile applications, and real estate services (collectively, the "Services"). 
                    By accessing or using our Services, you agree to be bound by these Terms.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Scale className="w-6 h-6 mr-2 text-blue-600" />
                    1. Acceptance of Terms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    By accessing and using Tehran Properties' Services, you accept and agree to be bound by the terms 
                    and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>2. Description of Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Tehran Properties provides a comprehensive real estate platform that includes:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Property listings for sale and rent</li>
                    <li>Real estate agent services and consultations</li>
                    <li>Property valuation and market analysis</li>
                    <li>Property management services</li>
                    <li>Investment advisory services</li>
                    <li>Real estate news and market insights</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>3. User Accounts</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      To access certain features of our Services, you may be required to create an account. 
                      When you create an account, you agree to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Provide accurate, current, and complete information</li>
                      <li>Maintain and update your information promptly</li>
                      <li>Keep your password secure and confidential</li>
                      <li>Accept responsibility for all activities under your account</li>
                      <li>Notify us immediately of any unauthorized use</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      Tehran Properties reserves the right to suspend or terminate accounts that violate these Terms.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>4. Property Listings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Users who list properties on our platform agree to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Provide accurate and truthful property information</li>
                      <li>Ensure they have legal authority to list the property</li>
                      <li>Comply with all applicable laws and regulations</li>
                      <li>Not list prohibited or illegal properties</li>
                      <li>Respond promptly to legitimate inquiries</li>
                      <li>Update property information as needed</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      Tehran Properties reserves the right to remove any listing that violates these Terms or applicable laws.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>5. User Conduct</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    You agree not to use our Services to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Transmit harmful, offensive, or inappropriate content</li>
                    <li>Engage in fraudulent or deceptive practices</li>
                    <li>Interfere with or disrupt the Services</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Spam or harass other users</li>
                    <li>Use the Services for illegal purposes</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>6. Fees and Payments</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Certain services offered by Tehran Properties may require payment of fees. These may include:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Commission on property sales</li>
                      <li>Property management fees</li>
                      <li>Premium listing fees</li>
                      <li>Valuation and consultation fees</li>
                      <li>Marketing and advertising fees</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      All fees are clearly communicated before any service is rendered. Payment terms and conditions 
                      will be outlined in separate agreements for specific services.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>7. Intellectual Property</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    The content and materials on Tehran Properties' platform, including but not limited to text, 
                    graphics, logos, images, and software, are owned by or licensed to Tehran Properties and are 
                    protected by copyright, trademark, and other intellectual property laws.
                  </p>
                  <p className="text-gray-700">
                    Users may not use, copy, reproduce, distribute, or create derivative works of our content 
                    without our express written permission.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>8. Privacy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Your privacy is important to us. Please review our Privacy Policy, which explains how we 
                    collect, use, and protect your personal information. By using our Services, you consent 
                    to the collection and use of information as described in our Privacy Policy.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>9. Disclaimers and Warranties</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-gray-700">
                      Tehran Properties provides Services on an "as is" and "as available" basis. We make no warranties, 
                      express or implied, including but not limited to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700">
                      <li>Accuracy or completeness of property information</li>
                      <li>Availability or suitability of properties</li>
                      <li>Uninterrupted or error-free operation of Services</li>
                      <li>Results obtained from using our Services</li>
                    </ul>
                    <p className="text-gray-700 mt-4">
                      Users are encouraged to conduct their own due diligence and consult with qualified professionals 
                      before making real estate decisions.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertCircle className="w-6 h-6 mr-2 text-blue-600" />
                    10. Limitation of Liability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    To the maximum extent permitted by law, Tehran Properties shall not be liable for any indirect, 
                    incidental, special, consequential, or punitive damages, including but not limited to loss of 
                    profits, data, use, or other intangible losses, resulting from your use of the Services.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>11. Indemnification</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    You agree to indemnify and hold Tehran Properties, its affiliates, officers, directors, employees, 
                    and agents harmless from any claims, liabilities, damages, losses, and expenses, including reasonable 
                    attorneys' fees, arising from your use of the Services or violation of these Terms.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>12. Termination</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Tehran Properties may terminate or suspend your access to the Services immediately, without prior 
                    notice or liability, for any reason, including if you breach the Terms. Upon termination, your 
                    right to use the Services will cease immediately.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>13. Dispute Resolution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Any disputes arising from or relating to these Terms or the Services shall be resolved as follows:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700">
                    <li>First, through good faith negotiations between the parties</li>
                    <li>If unresolved, through mediation in Tehran, Iran</li>
                    <li>Finally, through binding arbitration under Iranian law</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>14. Governing Law</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    These Terms shall be governed by and construed in accordance with the laws of the Islamic 
                    Republic of Iran, without regard to its conflict of law provisions.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>15. Changes to Terms</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Tehran Properties reserves the right to modify these Terms at any time. We will notify users 
                    of any changes by posting the updated Terms on our website. Your continued use of the Services 
                    after such changes constitutes acceptance of the new Terms.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-6 h-6 mr-2 text-blue-600" />
                    16. Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-700"><strong>Email:</strong> legal@tehranproperties.com</p>
                    <p className="text-gray-700"><strong>Phone:</strong> +98-21-88765432</p>
                    <p className="text-gray-700"><strong>Address:</strong> No. 123, Valiasr Street, Tehran, Iran</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>17. Severability</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    If any provision of these Terms is found to be unenforceable or invalid, that provision will 
                    be limited or eliminated to the minimum extent necessary so that the remaining Terms will 
                    remain in full force and effect.
                  </p>
                </CardContent>
              </Card>

              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>18. Entire Agreement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    These Terms constitute the entire agreement between you and Tehran Properties regarding the 
                    use of our Services and supersede all prior or contemporaneous communications and proposals, 
                    whether electronic, oral, or written, between you and Tehran Properties.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
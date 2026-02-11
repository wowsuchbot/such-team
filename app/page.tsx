export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Such Team</div>
            <div className="hidden md:flex space-x-8">
              <a href="#services" className="hover:text-gray-600">Services</a>
              <a href="#examples" className="hover:text-gray-600">Examples</a>
              <a href="#contact" className="hover:text-gray-600">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Websites in Days, Not Months.<br />
            <span className="text-blue-600">Professional Quality, Zero Compromise.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Built for small business owners ready to grow. Get enterprise features at startup costs - 4x faster than traditional agencies.
          </p>
          
          {/* Value Props */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">4x</div>
              <div className="text-gray-700">Faster Delivery</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">24hr</div>
              <div className="text-gray-700">Bug Fixes Guaranteed</div>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">$500K</div>
              <div className="text-gray-700">Features, Now Accessible</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Start Your Project
            </a>
            <a
              href="#services"
              className="border border-gray-300 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>

      {/* Services/Pricing Section */}
      <section id="services" className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4 text-white">Simple, Transparent Pricing</h2>
          <p className="text-xl text-center text-white/90 mb-16 max-w-2xl mx-auto">
            Choose the package that fits your business. All projects include modern design, mobile optimization, and 24-hour bug fix guarantee.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Landing Page */}
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-2">Landing Page</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">$2,500</div>
              <div className="text-gray-600 mb-6">1 week delivery</div>
              
              <p className="text-gray-600 mb-4">
                Perfect for launching products, services, or capturing leads fast.
              </p>
              
              <ul className="text-gray-600 space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Single-page design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Mobile responsive</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Contact form integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>SEO basics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Fast hosting included</span>
                </li>
              </ul>
              
              <a href="#contact" className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Get Started
              </a>
            </div>

            {/* Business Website */}
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-lg border-2 border-blue-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold mb-2">Business Website</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">$6,500</div>
              <div className="text-gray-600 mb-6">2-3 weeks delivery</div>
              
              <p className="text-gray-600 mb-4">
                Full website for established businesses ready to scale online.
              </p>
              
              <ul className="text-gray-600 space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Up to 8 pages</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Custom design system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>CMS integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Advanced SEO</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Analytics & tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Performance optimization</span>
                </li>
              </ul>
              
              <a href="#contact" className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Get Started
              </a>
            </div>

            {/* Enterprise Automation */}
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-2">Enterprise Automation</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">$10K+</div>
              <div className="text-gray-600 mb-6">Custom timeline</div>
              
              <p className="text-gray-600 mb-4">
                Advanced systems that used to cost $500K, now accessible to small businesses.
              </p>
              
              <ul className="text-gray-600 space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>AI chatbot systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Inventory sync automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Marketing automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Custom booking platforms</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>API integrations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>24/7 support & monitoring</span>
                </li>
              </ul>
              
              <a href="#contact" className="block text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies / Examples Section */}
      <section id="examples" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Enterprise Features for Small Business</h2>
          <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
            These capabilities used to require Fortune 500 budgets. Now they're accessible to growing businesses.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* AI Chatbot */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-start mb-4">
                <div className="text-4xl mr-4">💬</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">AI Customer Support Chatbot</h3>
                  <p className="text-gray-600 mb-4">
                    24/7 intelligent chat assistant that handles FAQs, qualifies leads, and schedules appointments automatically. Learns from your business documents and adapts to customer needs.
                  </p>
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold">Traditional cost:</span> $50K-150K development + $10K/month maintenance
                  </div>
                  <div className="text-sm text-blue-600 font-semibold">
                    Our price: Starting at $12K
                  </div>
                </div>
              </div>
            </div>

            {/* Inventory Sync */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-start mb-4">
                <div className="text-4xl mr-4">📦</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Real-Time Inventory Sync</h3>
                  <p className="text-gray-600 mb-4">
                    Automatically sync inventory across your website, point-of-sale system, and marketplaces. No more overselling or manual updates. Updates in seconds, not hours.
                  </p>
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold">Traditional cost:</span> $80K-200K custom integration
                  </div>
                  <div className="text-sm text-blue-600 font-semibold">
                    Our price: Starting at $15K
                  </div>
                </div>
              </div>
            </div>

            {/* Marketing Automation */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-start mb-4">
                <div className="text-4xl mr-4">📧</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Smart Marketing Automation</h3>
                  <p className="text-gray-600 mb-4">
                    Trigger personalized email campaigns, SMS follow-ups, and social media posts based on customer behavior. Nurture leads while you sleep.
                  </p>
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold">Traditional cost:</span> $40K-100K + ongoing fees
                  </div>
                  <div className="text-sm text-blue-600 font-semibold">
                    Our price: Starting at $10K
                  </div>
                </div>
              </div>
            </div>

            {/* Custom Booking */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-start mb-4">
                <div className="text-4xl mr-4">📅</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Custom Booking Platform</h3>
                  <p className="text-gray-600 mb-4">
                    Build a tailored booking system for appointments, rentals, or events. Integrates with your calendar, sends reminders, handles payments, and manages cancellations.
                  </p>
                  <div className="text-sm text-gray-500">
                    <span className="font-semibold">Traditional cost:</span> $60K-150K custom build
                  </div>
                  <div className="text-sm text-blue-600 font-semibold">
                    Our price: Starting at $18K
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Ready to bring enterprise-grade automation to your business?
            </p>
            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Schedule a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="gradient-bg py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/95 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl">
            <h2 className="text-3xl font-bold text-center mb-4">Ready to Get Started?</h2>
            <p className="text-center text-gray-600 mb-8">
              Tell us about your project and we'll get back to you within 24 hours with a detailed proposal.
            </p>
            
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">What are you looking for?</label>
                <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500">
                  <option>Landing Page ($2,500)</option>
                  <option>Business Website ($6,500)</option>
                  <option>Enterprise Automation ($10K+)</option>
                  <option>Not sure - let's discuss</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Project Details</label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 h-32"
                  placeholder="Tell us about your business and what you're hoping to achieve..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
            
            <div className="mt-8 text-center text-sm text-gray-600">
              <p>Or email us directly at: <a href="mailto:hello@suchteam.dev" className="text-blue-600 hover:underline">hello@suchteam.dev</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>&copy; 2024 Such Team. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

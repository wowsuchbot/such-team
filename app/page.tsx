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
              <a href="#about" className="hover:text-gray-600">About</a>
              <a href="#contact" className="hover:text-gray-600">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Web Development +<br />
            <span className="text-blue-600">AI Agent Cloud Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We build modern websites and deploy intelligent AI agents that automate your business operations 24/7.
          </p>
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
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-600 mb-4">
                Modern, responsive websites built with Next.js, React, and Tailwind CSS. Optimized for performance and SEO.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Landing Pages</li>
                <li>• E-commerce Sites</li>
                <li>• Business Websites</li>
                <li>• Web Applications</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">AI Agent Cloud</h3>
              <p className="text-gray-600 mb-4">
                Custom AI agents that handle repetitive tasks, customer support, data processing, and business automation.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Form Processing Automation</li>
                <li>• Customer Support Bots</li>
                <li>• Content Management</li>
                <li>• Data Integration</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="text-3xl mb-4">🔧</div>
              <h3 className="text-2xl font-bold mb-4">Ongoing Support</h3>
              <p className="text-gray-600 mb-4">
                Monthly retainers for maintenance, updates, and continuous optimization of your digital infrastructure.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Website Maintenance</li>
                <li>• Agent Management</li>
                <li>• Performance Monitoring</li>
                <li>• Feature Updates</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-8">Why Choose Such Team?</h2>
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              We're not just building websites—we're delivering intelligent systems that work around the clock.
              Our unique combination of modern web development and AI automation means your business gets both a
              beautiful online presence and powerful backend automation.
            </p>
            <p>
              Every project is custom-tailored to your needs, with transparent pricing and clear deliverables.
              We focus on high-value automation that saves you thousands in operational costs while providing
              a premium user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Let's discuss how we can build your next project and automate your business operations.
          </p>
          <a
            href="mailto:hello@suchteam.dev"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p>&copy; 2026 Such Team. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
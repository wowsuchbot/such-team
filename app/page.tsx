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
      <section id="services" className="gradient-bg py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-lg">
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

            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-2xl font-bold mb-4">AI Agent Cloud</h3>
              <p className="text-gray-600 mb-4">
                Deploy intelligent AI agents that handle customer support, data processing, and workflow automation.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• 24/7 Automation</li>
                <li>• Custom Workflows</li>
                <li>• Scalable Infrastructure</li>
                <li>• API Integrations</li>
              </ul>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-lg shadow-lg">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Business Automation</h3>
              <p className="text-gray-600 mb-4">
                Streamline repetitive tasks with custom automation solutions that save time and reduce errors.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Data Processing</li>
                <li>• Email Automation</li>
                <li>• Report Generation</li>
                <li>• Custom Integrations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About Such Team</h2>
            <p className="text-xl text-gray-600 mb-6">
              We are a premium web development agency specializing in modern web technologies and AI-powered automation.
            </p>
            <p className="text-xl text-gray-600 mb-6">
              Our mission is to help businesses leverage cutting-edge technology to automate operations,
              improve efficiency, and deliver exceptional digital experiences.
            </p>
            <p className="text-xl text-gray-600">
              With expertise in Next.js, React, and cloud infrastructure, we build solutions that scale.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-50 py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">
              Ready to transform your business with modern web solutions and AI automation?
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <div className="space-y-6 text-center">
              <div>
                <p className="text-sm text-gray-600 mb-2">Email us at</p>
                <a
                  href="mailto:suchteam.dev@gmail.com"
                  className="text-xl font-semibold text-blue-600 hover:text-blue-700"
                >
                  suchteam.dev@gmail.com
                </a>
              </div>
              <div className="border-t pt-6">
                <p className="text-gray-600">
                  We typically respond within 24 hours. Let us know about your project and we'll schedule a discovery call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>&copy; {<new Date().getFullYear()} Such Team. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

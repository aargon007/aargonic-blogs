import { Button } from '../ui';
import { SITE_CONFIG } from '../../lib/constants';

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Welcome to{' '}
                <span className="text-blue-600">{SITE_CONFIG.name}</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {SITE_CONFIG.description}. Stay ahead with our expert insights and analysis.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                size="lg"
                onClick={() => window.location.href = '/blog'}
                className="text-base"
              >
                Explore Articles
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = '/about'}
                className="text-base"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50+</div>
                <div className="text-sm text-gray-600">Expert Articles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">10K+</div>
                <div className="text-sm text-gray-600">Monthly Readers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">6</div>
                <div className="text-sm text-gray-600">Categories</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl flex items-center justify-center">
              <img 
                src="/images/hero/hero-illustration.svg" 
                alt="Technology and Innovation"
                className="w-full h-full object-cover rounded-3xl"
                onError={(e) => {
                  // Fallback to a placeholder if image doesn't exist
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <p>Innovation Starts Here</p>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-80 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full opacity-60 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
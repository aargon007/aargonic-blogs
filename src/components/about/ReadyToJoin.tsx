import React from 'react';
import { SITE_CONFIG } from '../../lib/constants';

const ReadyToJoin = () => {
    return (
        <section className="py-20" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))' }}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-fade-in-up">
                    <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 text-white">
                        Ready to Explore?
                    </h2>
                    <p className="text-xl leading-relaxed mb-12 text-white opacity-90">
                        Join thousands of readers who trust {SITE_CONFIG.name} for expert insights and innovative solutions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="/blogs"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-white text-gray-900 hover:bg-gray-100 hover:transform hover:scale-105 shadow-lg"
                        >
                            Explore Articles
                            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                        <a
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 border-2 border-white text-white hover:bg-white hover:text-gray-900 hover:transform hover:scale-105"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReadyToJoin;
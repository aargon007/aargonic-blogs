import React from 'react';
import { SITE_CONFIG } from '../../lib/constants';

const AboutHero = () => {
    return (
        <section
            className="relative py-24 overflow-hidden"
            style={{
                background: `linear-gradient(135deg, var(--color-background) 0%, var(--color-surface-elevated) 50%, var(--color-primary-light) 100%)`,
            }}
        >
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-16 left-16 w-64 h-64 rounded-full bg-primary opacity-30" />
                <div className="absolute bottom-16 right-16 w-80 h-80 rounded-full bg-accent opacity-20" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
                    <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-8 text-balance text-text-primary">
                        About <span className="gradient-text">{SITE_CONFIG.name}</span>
                    </h1>
                    <p className="text-xl lg:text-2xl leading-relaxed mb-12 text-pretty text-text-secondary">
                        We are passionate technology experts dedicated to bringing you cutting-edge insights,
                        in-depth analysis, and innovative solutions across the digital landscape.
                    </p>

                    <div className="flex justify-center">
                        <div className="bg-surface border border-border rounded-2xl p-8 max-w-md">
                            <div className="text-4xl mb-4">🚀</div>
                            <h3 className="text-2xl font-display font-bold mb-2 text-text-primary">Our Mission</h3>
                            <p className='text-text-secondary'>
                                Empowering individuals and businesses with expert knowledge and innovative solutions
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutHero;
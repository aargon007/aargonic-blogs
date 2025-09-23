import React from 'react';
import { SITE_CONFIG } from '../../lib/constants';

const StorySection = () => {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8 animate-fade-in-up">
                        <h2 className="text-4xl lg:text-5xl text-text-primary font-display font-bold">
                            Our Story
                        </h2>
                        <div className="space-y-6 text-lg leading-relaxed text-text-secondary">
                            <p>
                                Founded with a vision to bridge the gap between complex technology and practical understanding,
                                {SITE_CONFIG.name} has become a trusted source for industry insights and expert analysis.
                            </p>
                            <p>
                                Our team of experienced professionals brings decades of combined expertise in technology,
                                financial technology, IoT, artificial intelligence, and cybersecurity. We believe in making
                                complex topics accessible without compromising depth or accuracy.
                            </p>
                            <p>
                                From startup innovations to enterprise solutions, we cover the full spectrum of technological
                                advancement, helping our readers stay ahead in an ever-evolving digital world.
                            </p>
                        </div>
                    </div>

                    <div className="relative animate-fade-in">
                        <div
                            className="aspect-square rounded-3xl overflow-hidden shadow-xl "
                            style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))' }}
                        >
                            <img
                                src="https://cdn.pixabay.com/photo/2024/01/10/16/22/team-8499960_1280.jpg"
                                alt="Team collaboration and innovation"
                                onError={(e) => (e.currentTarget.style.display = 'none')}
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                            <div className="w-full h-full hidden items-center justify-center text-white">
                                <div className="text-center">
                                    <div
                                        className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center"
                                        style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                                    >
                                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-2xl font-display font-bold">
                                        Excellence in Innovation
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full animate-pulse bg-accent opacity-60" />
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full animate-bounce bg-success opacity-40" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StorySection;
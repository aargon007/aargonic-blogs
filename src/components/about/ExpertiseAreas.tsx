import React from 'react';
import { BLOG_CATEGORIES } from '../../lib/constants';

const ExpertiseAreas = () => {
    return (
        <section className="py-20 bg-surface-elevated">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-4xl lg:text-5xl text-text-primary font-display font-bold mb-8">
                        Our Expertise
                    </h2>
                    <p className="text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto">
                        We specialize in cutting-edge technologies and industry trends that shape the future
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {BLOG_CATEGORIES.map((category, index) => (
                        <div
                            className="card-hover p-8 text-center group animate-scale-in bg-surface border border-border"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="mb-6">
                                <div
                                    className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 transition-transform duration-300"
                                >
                                    <div className="text-2xl">
                                        {category.id === 'technology' && '💻'}
                                        {category.id === 'fintech' && '💰'}
                                        {category.id === 'iot' && '🌐'}
                                        {category.id === 'security' && '🔒'}
                                        {category.id === 'acquisition' && '🤝'}
                                        {category.id === 'ai' && '🤖'}
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-2xl text-text-primary font-display font-bold mb-4">
                                {category.name}
                            </h3>
                            <p className='text-text-secondary'>
                                {category.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertiseAreas;
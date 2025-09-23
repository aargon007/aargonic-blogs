import React from 'react';

const Values = () => {
    return (
        <section className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-4xl lg:text-5xl font-display font-bold mb-8 text-text-primary">
                        Our Values
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {[
                        {
                            icon: '🎯',
                            title: 'Precision',
                            description: 'We deliver accurate, well-researched content that you can trust and rely on for critical decisions.'
                        },
                        {
                            icon: '🚀',
                            title: 'Innovation',
                            description: 'We stay ahead of technological trends to bring you the latest insights and emerging opportunities.'
                        },
                        {
                            icon: '🤝',
                            title: 'Community',
                            description: 'We believe in fostering a community of learners, experts, and innovators working together.'
                        }
                    ].map((value, index) => (
                        <div
                            className="text-center group animate-fade-in-up"
                            key={index} 
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="mb-6">
                                <div
                                    className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl transition-transform duration-300 group-hover:scale-110"
                                    style={{ background: 'linear-gradient(135deg, var(--color-primary-light), var(--color-accent-light))' }}
                                >
                                    {value.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-display font-bold mb-4 text-text-primary">
                                {value.title}
                            </h3>
                            <p className="text-lg leading-relaxed text-text-secondary">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Values;
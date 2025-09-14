import { SITE_CONFIG } from '../../lib/constants';

export function Hero() {
    return (
        <section
            className="relative py-24 overflow-hidden"
            style={{
                background: `linear-gradient(135deg, var(--color-background) 0%, var(--color-surface-elevated) 50%, var(--color-primary-light) 100%)`,
            }}
        >
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 left-10 bg-primary w-72 h-72 rounded-full opacity-20" />
                <div className="absolute bottom-20 right-10 bg-accent w-96 h-96 rounded-full opacity-10" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="space-y-10 animate-fade-in-up">
                        <div className="space-y-6">
                            <h1 className="text-text-primary text-5xl lg:text-7xl font-display font-bold leading-tight text-balance">
                                Welcome to{' '}
                                <span className="gradient-text">
                                    {SITE_CONFIG.name}
                                </span>
                            </h1>
                            <p className="text-text-secondary text-xl lg:text-2xl leading-relaxed text-pretty">
                                {SITE_CONFIG.description}. Stay ahead with our
                                expert insights and cutting-edge analysis.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <a
                                href="/blog"
                                className="btn-primary px-8 py-4 text-lg font-semibold inline-flex items-center justify-center"
                            >
                                Explore Articles
                                <svg
                                    className="ml-2 w-5 h-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                                    />
                                </svg>
                            </a>
                            <a
                                href="/about"
                                className="btn-secondary px-8 py-4 text-lg font-semibold inline-flex items-center justify-center"
                            >
                                Learn More
                            </a>
                        </div>

                        <div className="grid grid-cols-3 gap-6 pt-12">
                            {[
                                {
                                    value: '50+',
                                    label: 'Expert Articles',
                                    color: 'var(--color-primary)',
                                },
                                {
                                    value: '10K+',
                                    label: 'Monthly Readers',
                                    color: 'var(--color-success)',
                                },
                                {
                                    value: '6',
                                    label: 'Categories',
                                    color: 'var(--color-accent)',
                                },
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 animate-scale-in bg-surface border border-border shadow-sm"
                                    style={{
                                        animationDelay: `${index * 0.1}s`,
                                    }}
                                >
                                    <div
                                        className="text-4xl font-display font-bold mb-2"
                                        style={{
                                            color: stat.color,
                                        }}
                                    >
                                        {stat.value}
                                    </div>
                                    <div className="text-sm font-medium text-text-secondary">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative animate-fade-in">
                        <div
                            className="aspect-square shadow-xl rounded-3xl flex items-center justify-center relative overflow-hidden"
                            style={{
                                background: `linear-gradient(135deg, var(--color-primary), var(--color-accent))`,
                            }}
                        >
                            <img
                                src="/images/hero/technology.jpg"
                                alt="Technology and Innovation"
                                className="w-full h-full object-cover rounded-3xl transition-transform duration-700 hover:scale-110"
                                onError={e => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove(
                                        'hidden'
                                    );
                                }}
                            />
                            <div className="w-full h-full hidden items-center justify-center text-white">
                                <div className="text-center">
                                    <div
                                        className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center"
                                        style={{
                                            backgroundColor:
                                                'rgba(255, 255, 255, 0.2)',
                                        }}
                                    >
                                        <svg
                                            className="w-16 h-16"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <p className="text-2xl font-display font-bold">
                                        Innovation Starts Here
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -top-6 -right-6 bg-accent w-32 h-32 rounded-full opacity-60 animate-pulse"></div>
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full opacity-40 animate-bounce bg-success"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

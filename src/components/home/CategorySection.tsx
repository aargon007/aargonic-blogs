import { Card, CardContent } from '../ui';
import { BLOG_CATEGORIES } from '../../lib/constants';

export function CategorySection() {
    return (
        <section className="py-16 bg-[var(--color-background)]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-[var(--color-text-primary)] mb-4">
                        Explore Categories
                    </h2>
                    <p className="text-[var(--color-text-secondary)] max-w-2xl mx-auto">
                        Dive deep into the topics that matter most in today's
                        technology landscape.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {BLOG_CATEGORIES.map(category => (
                        <Card key={category.id} hover>
                            <CardContent className="p-6">
                                <a
                                    href={`/blog/category/${category.id}`}
                                    className="block group"
                                >
                                    <div className="space-y-4">
                                        {/* Category Icon */}
                                        <div
                                            className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors`}
                                            style={{
                                                backgroundColor: `var(--color-${category.color}-light)`,
                                            }}
                                        >
                                            <CategoryIcon
                                                category={category.id}
                                                className={`w-6 h-6`}
                                                style={{
                                                    color: `var(--color-${category.color})`,
                                                }}
                                            />
                                        </div>

                                        {/* Category Info */}
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2 transition-colors group-hover:text-[var(--color-primary)]">
                                                {category.name}
                                            </h3>
                                            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                                                {category.description}
                                            </p>
                                        </div>

                                        {/* Arrow Icon */}
                                        <div className="flex items-center text-sm font-medium transition-colors group-hover:text-[var(--color-primary)]">
                                            <span>Explore articles</span>
                                            <svg
                                                className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Updated CategoryIcon to use theme colors
function CategoryIcon({
    category,
    className,
    style,
}: {
    category: string;
    className: string;
    style?: React.CSSProperties;
}) {
    const icons = {
        technology: (
            <svg
                className={className}
                style={style}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
            </svg>
        ),
        fintech: (
            <svg
                className={className}
                style={style}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
            </svg>
        ),
        iot: (
            <svg
                className={className}
                style={style}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                />
            </svg>
        ),
        security: (
            <svg
                className={className}
                style={style}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
            </svg>
        ),
        acquisition: (
            <svg
                className={className}
                style={style}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
            </svg>
        ),
        ai: (
            <svg
                className={className}
                style={style}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
            </svg>
        ),
    };

    return icons[category as keyof typeof icons] || icons.technology;
}

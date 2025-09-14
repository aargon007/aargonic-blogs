import { Card, CardContent } from '../ui';
import { BLOG_CATEGORIES } from '../../lib/constants';
// Updated CategoryIcon to use theme colors
import {
    ComputerDesktopIcon,
    CurrencyDollarIcon,
    WifiIcon,
    ShieldCheckIcon,
    BuildingStorefrontIcon,
    CpuChipIcon,
} from '@heroicons/react/24/outline';
import type { JSX } from 'react';

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
                                        <div className='mt-4'>
                                            <CategoryIcon category={category.id} className='w-6 h-6 text-text-primary' />
                                        </div>

                                        {/* Category Info */}
                                        <div>
                                            <h3 className="text-xl font-semibold mb-2">
                                                {category.name}
                                            </h3>
                                            <p className="text-text-secondary text-sm leading-relaxed">
                                                {category.description}
                                            </p>
                                        </div>

                                        {/* Arrow Icon */}
                                        <div className="flex items-center text-sm font-medium transition-colors group-hover:text-primary">
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

interface CategoryIconProps {
    category: string;
    className?: string;
}

export function CategoryIcon({ category, className = '' }: CategoryIconProps) {
    const icons: Record<string, JSX.Element> = {
        technology: <ComputerDesktopIcon className={className} />,
        fintech: <CurrencyDollarIcon className={className} />,
        iot: <WifiIcon className={className} />,
        security: <ShieldCheckIcon className={className} />,
        acquisition: <BuildingStorefrontIcon className={className} />,
        ai: <CpuChipIcon className={className} />,
    };

    return icons[category] || icons.technology;
}

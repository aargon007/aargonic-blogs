import { useState } from 'react';
import { BLOG_CATEGORIES } from '../../lib/constants';

interface CategoryFilterProps {
    selectedCategory?: string;
    onCategoryChange: (category: string | undefined) => void;
}

export function CategoryFilter({
    selectedCategory,
    onCategoryChange,
}: CategoryFilterProps) {
    const [isOpen, setIsOpen] = useState(false);

    const handleCategoryClick = (categoryId: string | undefined) => {
        onCategoryChange(categoryId);
        setIsOpen(false);
    };

    return (
        <div className="relative">
            {/* Desktop Filter */}
            <div className="hidden md:flex flex-wrap gap-3">
                <button
                    onClick={() => handleCategoryClick(undefined)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        !selectedCategory
                            ? 'bg-primary text-white'
                            : 'bg-surface-elevated text-text-secondary hover:bg-primary-light hover:text-text-primary'
                    }`}
                >
                    All Categories
                </button>

                {BLOG_CATEGORIES.map(category => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                            selectedCategory === category.id
                                ? 'bg-primary text-white'
                                : 'bg-surface-elevated text-text-secondary hover:bg-primary-light hover:text-text-primary'
                        }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Mobile Dropdown */}
            <div className="md:hidden">
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full px-4 py-2 text-left bg-surface border border-border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary"
                >
                    <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-text-primary">
                            {selectedCategory
                                ? BLOG_CATEGORIES.find(
                                      cat => cat.id === selectedCategory
                                  )?.name
                                : 'All Categories'}
                        </span>
                        <svg
                            className={`w-5 h-5 transition-transform ${
                                isOpen ? 'rotate-180' : ''
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>
                </button>

                {isOpen && (
                    <div className="absolute z-50 w-full mt-1 bg-surface border border-border rounded-md shadow-lg">
                        <div className="py-1">
                            <button
                                onClick={() => handleCategoryClick(undefined)}
                                className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                                    !selectedCategory
                                        ? 'bg-primary-light text-primary'
                                        : 'text-text-secondary hover:bg-primary-light hover:text-text-primary'
                                }`}
                            >
                                All Categories
                            </button>

                            {BLOG_CATEGORIES.map(category => (
                                <button
                                    key={category.id}
                                    onClick={() =>
                                        handleCategoryClick(category.id)
                                    }
                                    className={`w-full px-4 py-2 text-left text-sm transition-colors ${
                                        selectedCategory === category.id
                                            ? 'bg-primary-light text-primary'
                                            : 'text-text-secondary hover:bg-primary-light hover:text-text-primary'
                                    }`}
                                >
                                    <div className="flex items-center justify-between">
                                        <span>{category.name}</span>
                                        {selectedCategory === category.id && (
                                            <svg
                                                className="w-4 h-4"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        )}
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

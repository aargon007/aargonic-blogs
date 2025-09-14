import { useState, useRef } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface SearchBarProps {
    onSearch: (query: string) => void;
    placeholder?: string;
    initialValue?: string;
}

export function SearchBar({
    onSearch,
    placeholder = 'Search articles...',
    initialValue = '',
}: SearchBarProps) {
    const [query, setQuery] = useState(initialValue);
    const [isFocused, setIsFocused] = useState(false);
    const containerRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query.trim());
    };

    const handleClear = () => {
        setQuery('');
        onSearch('');
    };

    // Close dropdown if click outside
    const handleClickOutside = (e: MouseEvent) => {
        if (
            containerRef.current &&
            !containerRef.current.contains(e.target as Node)
        ) {
            setIsFocused(false);
        }
    };

    // Attach click listener to close dropdown
    useState(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () =>
            document.removeEventListener('mousedown', handleClickOutside);
    });

    const popularTerms = ['AI', 'Fintech', 'Security', 'IoT', 'Blockchain'];

    return (
        <form ref={containerRef} onSubmit={handleSubmit} className="relative">
            <div className="relative transition-all duration-200">
                {/* Search icon */}
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-text-secondary" />
                </div>

                <input
                    type="text"
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    placeholder={placeholder}
                    className="block w-full pl-10 pr-12 py-3 border border-border rounded-lg 
                               bg-surface text-text-primary placeholder-text-secondary 
                               focus:outline-none focus:ring-0 focus:border-border sm:text-sm"
                />

                {query && (
                    <button
                        type="button"
                        onClick={handleClear}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center 
                                   text-text-secondary hover:text-text-primary transition-colors"
                    >
                        <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                )}
            </div>

            {/* Popular searches dropdown */}
            {isFocused && !query && (
                <div className="absolute z-50 w-full mt-1 bg-surface border border-border rounded-lg shadow-lg">
                    <div className="p-4">
                        <div className="text-sm text-text-secondary mb-2">
                            Popular searches:
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {popularTerms.map(term => (
                                <button
                                    key={term}
                                    type="button"
                                    onClick={() => {
                                        setQuery(term);
                                        onSearch(term);
                                        setIsFocused(false); // close dropdown after selecting
                                    }}
                                    className="px-3 py-1 text-xs rounded-full 
                                               bg-surface-elevated text-text-secondary 
                                               hover:bg-surface-hover hover:text-text-primary 
                                               transition-colors"
                                >
                                    {term}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </form>
    );
}

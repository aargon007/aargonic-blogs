import { useState } from 'react';
import { BlogCard } from './BlogCard';
import { Button } from '../ui';
import type { Blog, BlogListResponse } from '../../types/blog';

interface BlogListProps {
    initialData: BlogListResponse;
    layout?: 'grid' | 'list';
}

export function BlogList({ initialData, layout = 'grid' }: BlogListProps) {
    const [blogs, setBlogs] = useState(initialData.blogs);
    const [pagination, setPagination] = useState(initialData.pagination);
    const [loading, setLoading] = useState(false);
    const [currentLayout, setCurrentLayout] = useState(layout);

    const loadMore = async () => {
        if (!pagination.hasNextPage || loading) return;

        setLoading(true);
        try {
            const response = await fetch(
                `/api/blog?page=${pagination.currentPage + 1}`
            );
            const data: BlogListResponse = await response.json();

            setBlogs(prev => [...prev, ...data.blogs]);
            setPagination(data.pagination);
        } catch (error) {
            console.error('Failed to load more posts:', error);
        } finally {
            setLoading(false);
        }
    };

    if (!blogs.length) {
        return (
            <div className="text-center py-16">
                <div className="max-w-md mx-auto">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                        <svg
                            className="w-12 h-12 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                            />
                        </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        No posts found
                    </h3>
                    <p className="text-gray-600">
                        We're working on creating amazing content for you. Check
                        back soon!
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            {/* Layout Toggle */}
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-600">
                        Showing {blogs.length} of {pagination.totalBlogs} posts
                    </span>
                </div>

                <div className="flex items-center space-x-2">
                    <button
                        onClick={() => setCurrentLayout('grid')}
                        className={`p-2 rounded-md transition-colors ${
                            currentLayout === 'grid'
                                ? 'bg-blue-100 text-blue-600'
                                : 'text-gray-400 hover:text-gray-600'
                        }`}
                        aria-label="Grid view"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                            />
                        </svg>
                    </button>

                    <button
                        onClick={() => setCurrentLayout('list')}
                        className={`p-2 rounded-md transition-colors ${
                            currentLayout === 'list'
                                ? 'bg-blue-100 text-blue-600'
                                : 'text-gray-400 hover:text-gray-600'
                        }`}
                        aria-label="List view"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 10h16M4 14h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Blog Posts */}
            <div
                className={
                    currentLayout === 'grid'
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
                        : 'space-y-6'
                }
            >
                {blogs.map(post => (
                    <BlogCard
                        key={post._id.toString()}
                        post={post}
                        layout={currentLayout}
                    />
                ))}
            </div>

            {/* Load More Button */}
            {pagination.hasNextPage && (
                <div className="text-center pt-8">
                    <Button
                        onClick={loadMore}
                        disabled={loading}
                        variant="outline"
                        size="lg"
                    >
                        {loading ? (
                            <div className="flex items-center">
                                <svg
                                    className="animate-spin -ml-1 mr-3 h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <circle
                                        className="opacity-25"
                                        cx="12"
                                        cy="12"
                                        r="10"
                                        stroke="currentColor"
                                        strokeWidth="4"
                                    />
                                    <path
                                        className="opacity-75"
                                        fill="currentColor"
                                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                    />
                                </svg>
                                Loading...
                            </div>
                        ) : (
                            `Load More (${pagination.totalPages - pagination.currentPage} pages remaining)`
                        )}
                    </Button>
                </div>
            )}

            {/* Pagination Info */}
            <div className="text-center text-sm text-gray-500">
                Page {pagination.currentPage} of {pagination.totalPages}
            </div>
        </div>
    );
}

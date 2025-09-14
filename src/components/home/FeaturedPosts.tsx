import { Card, CardContent, Badge } from '../ui';
import { formatDate, truncateText } from '../../utils/format';
import type { Blog } from '../../types/blog';

interface FeaturedPostsProps {
    posts: Blog[];
}

export function FeaturedPosts({ posts }: FeaturedPostsProps) {
    if (!posts.length) {
        return (
            <section className="py-16 bg-background">
                <div className="container text-center">
                    <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4 text-text-primary">
                        Featured Articles
                    </h2>
                    <p className="text-lg text-text-secondary">
                        Coming soon – exciting content is on the way!
                    </p>
                </div>
            </section>
        );
    }

    const [mainPost, ...sidePosts] = posts.slice(0, 3);

    return (
        <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-display font-bold mb-4 text-text-primary">
                        Featured Articles
                    </h2>
                    <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
                        Discover our latest insights and expert analysis on technology, fintech, IoT, and more.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Main Featured Post */}
                    <div className="lg:col-span-2">
                        <div className="h-full bg-surface rounded-lg shadow-md border border-border transition-all duration-200 animate-fade-in-up">
                            <div className="h-[228px] w-full relative overflow-hidden rounded-t-xl">
                                <img
                                    src={mainPost.featuredImage || '/images/placeholder-blog.jpg'}
                                    alt={mainPost.title}
                                    className="w-full h-full transition-transform duration-300 hover:scale-105"
                                />
                            </div>

                            <div className="pt-8">
                                <h3 className="text-2xl lg:text-3xl font-display font-bold mb-2 hover:text-[var(--color-primary-hover)] transition-colors line-clamp-2">
                                    <a href={`/blog/${mainPost.slug}`}>{mainPost.title}</a>
                                </h3>
                                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed mb-4">
                                    {truncateText(mainPost.excerpt || '', 150)}
                                </p>
                                <div className="flex items-center text-sm text-[var(--color-text-muted)] space-x-4">
                                    <span>{formatDate(mainPost.publishedAt || mainPost.createdAt)}</span>
                                    <span>•</span>
                                    <span>{mainPost.readingTime} min read</span>
                                    <span>•</span>
                                    <span>{mainPost.views} views</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Side Posts */}
                    <div className="space-y-6">
                        {sidePosts.map((post) => (
                            <Card key={post._id.toString()} hover className="animate-fade-in">
                                <CardContent className="p-4">
                                    <div className="flex space-x-4">
                                        <div className="flex-shrink-0 w-24 h-24 overflow-hidden rounded-lg">
                                            <img
                                                src={post.featuredImage || '/images/placeholder-blog.jpg'}
                                                alt={post.title}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="flex-grow min-w-0">
                                            <Badge
                                                variant={getCategoryColor(post.category)}
                                                size="sm"
                                                className="mb-2"
                                            >
                                                {post.category}
                                            </Badge>
                                            <h4 className="text-lg font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-primary-hover)] transition-colors line-clamp-2">
                                                <a href={`/blog/${post.slug}`}>{post.title}</a>
                                            </h4>
                                            <p className="text-sm text-[var(--color-text-secondary)] line-clamp-2 mb-2">
                                                {truncateText(post.excerpt || '', 80)}
                                            </p>
                                            <div className="flex items-center text-xs text-[var(--color-text-muted)] space-x-2">
                                                <span>{formatDate(post.publishedAt || post.createdAt, 'short')}</span>
                                                <span>•</span>
                                                <span>{post.readingTime} min read</span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* View All Posts Button */}
                <div className="text-center mt-12">
                    <a
                        href="/blog"
                        className="inline-flex items-center px-6 py-3 rounded-xl font-medium text-white bg-primary hover:bg-primary-hover transition-colors shadow-md hover:shadow-lg"
                    >
                        View All Articles
                        <svg
                            className="ml-2 w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

// Helper function to get category color
function getCategoryColor(
    category: string
): 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'indigo' | 'gray' {
    const colorMap: Record<string, 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'indigo' | 'gray'> = {
        technology: 'blue',
        fintech: 'green',
        iot: 'purple',
        security: 'red',
        acquisition: 'yellow',
        ai: 'indigo',
    };
    return colorMap[category] || 'gray';
}

import { Card, CardContent, Badge } from '../ui';
import { formatDate, truncateText } from '../../utils/format';
import type { Blog } from '../../types/blog';

interface FeaturedPostsProps {
    posts: Blog[];
}

export function FeaturedPosts({ posts }: FeaturedPostsProps) {
    if (!posts.length) {
        return (
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
                        <p className="text-gray-600">Coming soon - exciting content is on the way!</p>
                    </div>
                </div>
            </section>
        );
    }

    const [mainPost, ...sidePosts] = posts.slice(0, 4);

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Discover our latest insights and expert analysis on technology, fintech, IoT, and more.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Featured Post */}
                    <div className="lg:col-span-2">
                        <Card hover className="h-full">
                            <div className="aspect-video relative overflow-hidden rounded-t-lg">
                                <img
                                    src={mainPost.featuredImage || '/images/placeholder-blog.jpg'}
                                    alt={mainPost.title}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-4 left-4">
                                    <Badge variant={getCategoryColor(mainPost.category)}>
                                        {mainPost.category}
                                    </Badge>
                                </div>
                            </div>
                            <CardContent className="p-6">
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                                        <a href={`/blog/${mainPost.slug}`}>
                                            {mainPost.title}
                                        </a>
                                    </h3>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {truncateText(mainPost.excerpt || '', 150)}
                                    </p>
                                    <div className="flex items-center text-sm text-gray-500 space-x-4">
                                        <span>{formatDate(mainPost.publishedAt || mainPost.createdAt)}</span>
                                        <span>•</span>
                                        <span>{mainPost.readingTime} min read</span>
                                        <span>•</span>
                                        <span>{mainPost.views} views</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Side Posts */}
                    <div className="space-y-6">
                        {sidePosts.map((post) => (
                            <Card key={post._id.toString()} hover>
                                <CardContent className="p-6">
                                    <div className="flex space-x-4">
                                        <div className="flex-shrink-0">
                                            <img
                                                src={post.featuredImage || '/images/placeholder-blog.jpg'}
                                                alt={post.title}
                                                className="w-20 h-20 object-cover rounded-lg"
                                            />
                                        </div>
                                        <div className="flex-grow min-w-0">
                                            <div className="space-y-2">
                                                <Badge variant={getCategoryColor(post.category)} size="sm">
                                                    {post.category}
                                                </Badge>
                                                <h4 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
                                                    <a href={`/blog/${post.slug}`}>
                                                        {post.title}
                                                    </a>
                                                </h4>
                                                <p className="text-gray-600 text-sm line-clamp-2">
                                                    {truncateText(post.excerpt || '', 80)}
                                                </p>
                                                <div className="flex items-center text-xs text-gray-500 space-x-2">
                                                    <span>{formatDate(post.publishedAt || post.createdAt, 'short')}</span>
                                                    <span>•</span>
                                                    <span>{post.readingTime} min</span>
                                                </div>
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
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                        View All Articles
                        <svg className="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}

// Helper function to get category color
function getCategoryColor(category: string): 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'indigo' {
    const colorMap: Record<string, 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'indigo'> = {
        technology: 'blue',
        fintech: 'green',
        iot: 'purple',
        security: 'red',
        acquisition: 'yellow',
        ai: 'indigo',
    };
    return colorMap[category] || 'blue';
}
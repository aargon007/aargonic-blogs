import { Card, CardContent, Badge } from '../ui';
import { formatDate, truncateText } from '../../utils/format';
import type { Blog } from '../../types/blog';

interface BlogCardProps {
    post: Blog;
    layout?: 'grid' | 'list';
}

export function BlogCard({ post, layout = 'grid' }: BlogCardProps) {
    const categoryColors = {
        technology: 'blue',
        fintech: 'green',
        iot: 'purple',
        security: 'red',
        acquisition: 'yellow',
        ai: 'indigo',
    } as const;

    if (layout === 'list') {
        return (
            <Card hover className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3">
                        <div className="aspect-video md:aspect-square md:h-full relative overflow-hidden">
                            <img
                                src={
                                    post.featuredImage ||
                                    '/images/placeholder-blog.jpg'
                                }
                                alt={post.title}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                    <div className="md:w-2/3">
                        <CardContent className="p-6 h-full flex flex-col justify-between">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <Badge
                                        variant={
                                            categoryColors[
                                                post.category as keyof typeof categoryColors
                                            ] || 'blue'
                                        }
                                    >
                                        {post.category}
                                    </Badge>
                                    <span className="text-sm text-gray-500">
                                        {formatDate(
                                            post.publishedAt || post.createdAt,
                                            'short'
                                        )}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
                                    <a href={`/blog/${post.slug}`}>
                                        {post.title}
                                    </a>
                                </h3>

                                <p className="text-gray-600 line-clamp-2">
                                    {truncateText(post.excerpt || '', 120)}
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                                <div className="flex items-center text-sm text-gray-500 space-x-3">
                                    <span>{post.readingTime} min read</span>
                                    <span>•</span>
                                    <span>{post.views} views</span>
                                </div>

                                <a
                                    href={`/blog/${post.slug}`}
                                    className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors"
                                >
                                    Read more →
                                </a>
                            </div>
                        </CardContent>
                    </div>
                </div>
            </Card>
        );
    }

    return (
        <Card hover className="h-full overflow-hidden">
            <div className="aspect-video relative overflow-hidden">
                <img
                    src={post.featuredImage || '/images/placeholder-blog.jpg'}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                    <Badge
                        variant={
                            categoryColors[
                                post.category as keyof typeof categoryColors
                            ] || 'blue'
                        }
                    >
                        {post.category}
                    </Badge>
                </div>
            </div>

            <CardContent className="p-6">
                <div className="space-y-4">
                    <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors line-clamp-2">
                        <a href={`/blog/${post.slug}`}>{post.title}</a>
                    </h3>

                    <p className="text-gray-600 line-clamp-3">
                        {truncateText(post.excerpt || '', 120)}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>
                            {formatDate(
                                post.publishedAt || post.createdAt,
                                'short'
                            )}
                        </span>
                        <div className="flex items-center space-x-2">
                            <span>{post.readingTime} min read</span>
                            <span>•</span>
                            <span>{post.views} views</span>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}

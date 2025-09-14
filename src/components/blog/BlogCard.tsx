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
            <div className="animate-fade-in">
                <div className="flex gap-x-6 w-full h-full">
                    <div className="w-1/2 h-[240px] overflow-hidden">
                        <img
                            src={
                                post.featuredImage ||
                                '/images/placeholder-blog.jpg'
                            }
                            alt={post.title}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            decoding="async"
                            loading="lazy"
                            fetchPriority="auto"
                        />
                    </div>

                    <div className="w-1/2 min-w-0 h-full">
                        <div className="flex items-center text-xs text-text-muted space-x-2">
                            <span>
                                {formatDate(
                                    post.publishedAt || post.createdAt,
                                    'short'
                                )}
                            </span>
                            <span>•</span>
                            <span>{post.readingTime} min read</span>
                        </div>

                        <h4 className="text-lg  line-clamp-2 mt-3 mb-2">
                            <a
                                className="font-semibold text-text-primary"
                                href={`/blogs/${post.slug}`}
                            >
                                {post.title}
                            </a>
                        </h4>
                        <p className="text-base font-normal text-text-secondary line-clamp-2 mb-2">
                            {truncateText(post.excerpt || '', 80)}
                        </p>

                        <Badge variant="primary" size="sm" className="mb-2">
                            {post.category}
                        </Badge>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="animate-fade-in">
            <div className="flex flex-col gap-y-6 w-full h-full">
                <div className="w-full h-[240px] overflow-hidden">
                    <img
                        src={
                            post.featuredImage || '/images/placeholder-blog.jpg'
                        }
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        decoding="async"
                        loading="lazy"
                        fetchPriority="auto"
                    />
                </div>

                <div className="w-full min-w-0">
                    <div className="flex items-center text-xs text-text-muted space-x-2">
                        <span>
                            {formatDate(
                                post.publishedAt || post.createdAt,
                                'short'
                            )}
                        </span>
                        <span>•</span>
                        <span>{post.readingTime} min read</span>
                    </div>

                    <h4 className="text-lg  line-clamp-2 mt-3 mb-2">
                        <a
                            className="font-semibold text-text-primary"
                            href={`/blogs/${post.slug}`}
                        >
                            {post.title}
                        </a>
                    </h4>
                    <p className="text-base font-normal text-text-secondary line-clamp-2 mb-2">
                        {truncateText(post.excerpt || '', 80)}
                    </p>

                    <Badge variant="primary" size="sm" className="mb-2">
                        {post.category}
                    </Badge>
                </div>
            </div>
        </div>
    );
}

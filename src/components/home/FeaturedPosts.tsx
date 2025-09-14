import { Badge } from '../ui';
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
                        Discover our latest insights and expert analysis on
                        technology, fintech, IoT, and more.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Main Featured Post */}
                    <div className="lg:col-span-2 lg:row-span-2">
                        <div className="h-full animate-fade-in-up">
                            <div className="h-[228px] w-full relative overflow-hidden">
                                <img
                                    src={
                                        mainPost.featuredImage ||
                                        '/images/placeholder-blog.jpg'
                                    }
                                    alt={mainPost.title}
                                    className="w-full h-full transition-transform duration-300 hover:scale-105"
                                    decoding="async"
                                    loading="lazy"
                                    fetchPriority="auto"
                                    data-astro-image="constrained"
                                />
                            </div>

                            <div className="pt-8">
                                <h3 className="text-2xl font-display mb-3 hover:text-text-secondary transition-colors line-clamp-2">
                                    <a
                                        href={`/blogs/${mainPost.slug}`}
                                        className="text-text-primary font-semibold"
                                    >
                                        {mainPost.title}
                                    </a>
                                </h3>

                                <p className="text-text-secondary text-base leading-relaxed mb-6">
                                    {truncateText(mainPost.excerpt || '', 150)}
                                </p>

                                <div className="flex items-center text-sm text-text-muted space-x-4">
                                    <span>
                                        {formatDate(
                                            mainPost.publishedAt ||
                                                mainPost.createdAt
                                        )}
                                    </span>
                                    <span>•</span>
                                    <span>{mainPost.readingTime} min read</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Side Posts */}
                    {sidePosts.map(post => (
                        <div className="lg:col-span-2 animate-fade-in">
                            <div className="flex gap-x-6 w-full h-full">
                                <div className="w-1/2 overflow-hidden">
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
                                                post.publishedAt ||
                                                    post.createdAt,
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

                                    <Badge
                                        variant="primary"
                                        size="sm"
                                        className="mb-2"
                                    >
                                        {post.category}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Posts Button */}
                <div className="text-center mt-12">
                    <a
                        href="/blogs"
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

import { SITE_CONFIG } from '../../lib/constants';

interface MetaProps {
    title?: string;
    description?: string;
    keywords?: string[];
    image?: string;
    url?: string;
    type?: 'website' | 'article';
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
}

export function Meta({
    title,
    description = SITE_CONFIG.description,
    keywords = [],
    image = SITE_CONFIG.defaultImage,
    url = SITE_CONFIG.url,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    section,
    tags = [],
}: MetaProps) {
    const fullTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name;
    const fullImageUrl = image.startsWith('http') ? image : `${SITE_CONFIG.url}${image}`;
    const allKeywords = [...keywords, 'technology', 'fintech', 'iot', 'security', 'ai', 'acquisition'];

    return (
        <>
            {/* Basic Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {keywords.length > 0 && <meta name="keywords" content={allKeywords.join(', ')} />}
            <meta name="author" content={author || SITE_CONFIG.author} />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImageUrl} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content={type} />
            <meta property="og:site_name" content={SITE_CONFIG.name} />

            {/* Article specific Open Graph */}
            {type === 'article' && (
                <>
                    {publishedTime && <meta property="article:published_time" content={publishedTime} />}
                    {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
                    {author && <meta property="article:author" content={author} />}
                    {section && <meta property="article:section" content={section} />}
                    {tags.map((tag) => (
                        <meta key={tag} property="article:tag" content={tag} />
                    ))}
                </>
            )}

            {/* Twitter Card */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImageUrl} />

            {/* Additional SEO Meta Tags */}
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
            <link rel="canonical" href={url} />

            {/* Favicon */}
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

            {/* RSS Feed */}
            <link rel="alternate" type="application/rss+xml" title={`${SITE_CONFIG.name} RSS Feed`} href="/rss.xml" />
        </>
    );
}
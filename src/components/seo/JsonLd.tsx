import { SITE_CONFIG } from '../../lib/constants';

interface JsonLdProps {
    type: 'website' | 'article' | 'organization' | 'breadcrumbList';
    data: any;
}

export function JsonLd({ type, data }: JsonLdProps) {
    const generateSchema = () => {
        switch (type) {
            case 'website':
                return {
                    '@context': 'https://schema.org',
                    '@type': 'WebSite',
                    name: SITE_CONFIG.name,
                    description: SITE_CONFIG.description,
                    url: SITE_CONFIG.url,
                    potentialAction: {
                        '@type': 'SearchAction',
                        target: `${SITE_CONFIG.url}/blog?search={search_term_string}`,
                        'query-input': 'required name=search_term_string',
                    },
                    ...data,
                };

            case 'article':
                return {
                    '@context': 'https://schema.org',
                    '@type': 'Article',
                    headline: data.title,
                    description: data.description,
                    image: data.image,
                    datePublished: data.publishedTime,
                    dateModified: data.modifiedTime || data.publishedTime,
                    author: {
                        '@type': 'Person',
                        name: data.author,
                    },
                    publisher: {
                        '@type': 'Organization',
                        name: SITE_CONFIG.name,
                        logo: {
                            '@type': 'ImageObject',
                            url: `${SITE_CONFIG.url}/logo.png`,
                        },
                    },
                    mainEntityOfPage: {
                        '@type': 'WebPage',
                        '@id': data.url,
                    },
                    articleSection: data.category,
                    keywords: data.keywords?.join(', '),
                    ...data,
                };

            case 'organization':
                return {
                    '@context': 'https://schema.org',
                    '@type': 'Organization',
                    name: SITE_CONFIG.name,
                    description: SITE_CONFIG.description,
                    url: SITE_CONFIG.url,
                    logo: `${SITE_CONFIG.url}/logo.png`,
                    sameAs: [
                        // Add social media URLs here
                    ],
                    ...data,
                };

            case 'breadcrumbList':
                return {
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement: data.items.map((item: any, index: number) => ({
                        '@type': 'ListItem',
                        position: index + 1,
                        name: item.name,
                        item: item.url,
                    })),
                };

            default:
                return data;
        }
    };

    const schema = generateSchema();

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schema, null, 2),
            }}
        />
    );
}
import type { Blog } from "../types";

const featuredPosts: Blog[] = [
    {
        _id: "1",
        title: 'The Future of Fintech: How AI is Revolutionizing Financial Services',
        slug: 'future-of-fintech-ai-revolution',
        excerpt: 'Discover how artificial intelligence is transforming the financial industry, from automated trading to personalized banking experiences.',
        content: 'Full article content here...',
        featuredImage: '/images/posts/1.png',
        category: 'fintech',
        tags: ['ai', 'machine-learning', 'banking'],
        author: {
            name: "XX",
            email: "gg@gg.com"
        },
        status: 'published' as const,
        publishedAt: new Date('2024-01-15'),
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-01-15'),
        views: 1250,
        readingTime: 8,
        seo: {
            metaTitle: 'The Future of Fintech and AI Revolution',
            metaDescription: 'How AI is transforming financial services and what it means for the future.',
            keywords: ['fintech', 'ai', 'artificial intelligence', 'banking']
        }
    },
    {
        _id: "2",
        title: 'IoT Security Best Practices: Protecting Your Connected Devices',
        slug: 'iot-security-best-practices',
        excerpt: 'Learn essential security measures to protect your IoT devices from cyber threats and data breaches.',
        content: 'Full article content here...',
        featuredImage: '/images/posts/2.png',
        category: 'security',
        tags: ['iot', 'cybersecurity', 'privacy'],
        author: { toString: () => 'author2' },
        status: 'published' as const,
        publishedAt: new Date('2024-01-12'),
        createdAt: new Date('2024-01-12'),
        updatedAt: new Date('2024-01-12'),
        views: 890,
        readingTime: 6,
        seo: {
            metaTitle: 'IoT Security Best Practices Guide',
            metaDescription: 'Essential security measures for protecting IoT devices from cyber threats.',
            keywords: ['iot', 'security', 'cybersecurity', 'best practices']
        }
    },
    {
        _id: "3",
        title: 'Tech Acquisition Trends: What to Expect in 2024',
        slug: 'tech-acquisition-trends-2024',
        excerpt: 'Analysis of the latest merger and acquisition trends in the technology sector.',
        content: 'Full article content here...',
        featuredImage: '/images/posts/3.png',
        category: 'acquisition',
        tags: ['mergers', 'acquisitions', 'market-analysis'],
        author: { toString: () => 'author3' },
        status: 'published' as const,
        publishedAt: new Date('2024-01-10'),
        createdAt: new Date('2024-01-10'),
        updatedAt: new Date('2024-01-10'),
        views: 650,
        readingTime: 5,
        seo: {
            metaTitle: 'Tech Acquisition Trends 2024',
            metaDescription: 'Latest merger and acquisition trends in the technology sector.',
            keywords: ['acquisition', 'mergers', 'technology', 'trends']
        }
    },
    {
        _id: "4",
        title: 'Building Scalable AI Systems: Architecture and Best Practices',
        slug: 'building-scalable-ai-systems',
        excerpt: 'A comprehensive guide to designing and implementing scalable artificial intelligence systems.',
        content: 'Full article content here...',
        featuredImage: '/images/posts/4.png',
        category: 'ai',
        tags: ['ai', 'architecture', 'scalability'],
        author: 'author4',
        status: 'published' as const,
        publishedAt: new Date('2024-01-08'),
        createdAt: new Date('2024-01-08'),
        updatedAt: new Date('2024-01-08'),
        views: 1100,
        readingTime: 12,
        seo: {
            metaTitle: 'Building Scalable AI Systems',
            metaDescription: 'Comprehensive guide to designing scalable AI systems.',
            keywords: ['ai', 'artificial intelligence', 'architecture', 'scalability']
        }
    }
];

// Alternative image options for each category if you want to switch them:

const alternativeImages = {
    fintech: [
        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center&auto=format&q=80', // Banking/finance data visualization
        'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&h=600&fit=crop&crop=center&auto=format&q=80', // Financial charts
        'https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=600&fit=crop&crop=center&auto=format&q=80', // Digital banking
        'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=800&h=600&fit=crop&crop=center&auto=format&q=80'  // Credit cards/payment
    ],
    security: [
        'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=center&auto=format&q=80', // Cybersecurity/network
        'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=800&h=600&fit=crop&crop=center&auto=format&q=80', // Security lock
        'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop&crop=center&auto=format&q=80', // Digital security
        'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop&crop=center&auto=format&q=80'  // IoT devices
    ],
    acquisition: [
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=center&auto=format&q=80', // Business meeting/handshake
        'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop&crop=center&auto=format&q=80', // Business documents
        'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center&auto=format&q=80', // Team meeting
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center&auto=format&q=80'  // Business analytics
    ],
    ai: [
        'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center&auto=format&q=80', // AI/ML visualization
        'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop&crop=center&auto=format&q=80', // Neural network
        'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=600&fit=crop&crop=center&auto=format&q=80', // AI robot
        'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800&h=600&fit=crop&crop=center&auto=format&q=80'  // Technology circuit
    ]
};

export { featuredPosts, alternativeImages };
import type { Blog } from '../types';

const featuredPosts: Blog[] = [
    {
        _id: '1',
        title: 'The Future of Fintech: How AI is Revolutionizing Financial Services',
        slug: 'future-of-fintech-ai-revolution',
        excerpt:
            'Discover how artificial intelligence is transforming the financial industry, from automated trading to personalized banking experiences.',
        content: `
<h2>The Current Landscape</h2>
<p>The fintech sector is evolving rapidly with AI at the forefront. Banks and startups alike are integrating intelligent solutions to improve efficiency and customer experience.</p>

<h3>Key Areas of AI Impact</h3>
<ul>
  <li><strong>Automated Trading:</strong> AI analyzes market trends in real-time, enabling smarter investment decisions.</li>
  <li><strong>Risk Assessment:</strong> Machine learning enhances credit scoring accuracy for underbanked populations.</li>
  <li><strong>Fraud Detection:</strong> AI identifies suspicious transactions and reduces false positives.</li>
  <li><strong>Customer Service:</strong> Chatbots provide 24/7 support and personalized recommendations.</li>
</ul>

<h3>Challenges</h3>
<ul>
  <li>Data privacy and security concerns</li>
  <li>Regulatory compliance requirements</li>
  <li>Algorithmic bias</li>
  <li>Explainability of AI decisions</li>
</ul>

<p>The future of fintech is intelligent, inclusive, and increasingly automated.</p>
    `,
        featuredImage: '/images/posts/1.png',
        category: 'fintech',
        tags: ['ai', 'machine-learning', 'banking'],
        author: {
            name: 'Jane Doe',
            email: 'jane.doe@example.com',
            avatar: '/images/authors/jane.png',
        },
        status: 'published',
        publishedAt: new Date('2024-01-15'),
        createdAt: new Date('2024-01-15'),
        updatedAt: new Date('2024-01-15'),
        views: 1250,
        readingTime: 8,
        seo: {
            metaTitle: 'The Future of Fintech and AI Revolution',
            metaDescription:
                'How AI is transforming financial services and what it means for the future.',
            keywords: ['fintech', 'ai', 'artificial intelligence', 'banking'],
        },
    },
    {
        _id: '2',
        title: 'IoT Security Best Practices: Protecting Your Connected Devices',
        slug: 'iot-security-best-practices',
        excerpt:
            'Learn essential security measures to protect your IoT devices from cyber threats and data breaches.',
        content: `
<h2>Understanding IoT Risks</h2>
<p>IoT devices are increasingly targeted by cybercriminals. Security is critical to prevent data breaches and unauthorized access.</p>

<h3>Best Practices</h3>
<ol>
  <li>Change default passwords immediately.</li>
  <li>Keep firmware updated.</li>
  <li>Enable encryption for data transmission.</li>
  <li>Monitor device network activity regularly.</li>
</ol>

<h3>Advanced Tips</h3>
<pre><code class="language-js">
// Example: Validate incoming device requests
function validateRequest(req) {
    if (!req.headers.authorization) {
        throw new Error("Unauthorized");
    }
}
</code></pre>

<p>Following these steps reduces the risk of IoT vulnerabilities and enhances network security.</p>
    `,
        featuredImage: '/images/posts/2.png',
        category: 'security',
        tags: ['iot', 'cybersecurity', 'privacy'],
        author: {
            name: 'John Smith',
            email: 'john.smith@example.com',
            avatar: '/images/authors/john.png',
        },
        status: 'published',
        publishedAt: new Date('2024-01-12'),
        createdAt: new Date('2024-01-12'),
        updatedAt: new Date('2024-01-12'),
        views: 890,
        readingTime: 6,
        seo: {
            metaTitle: 'IoT Security Best Practices Guide',
            metaDescription:
                'Essential security measures for protecting IoT devices from cyber threats.',
            keywords: ['iot', 'security', 'cybersecurity', 'best practices'],
        },
    },
    {
        _id: '3',
        title: 'Tech Acquisition Trends: What to Expect in 2024',
        slug: 'tech-acquisition-trends-2024',
        excerpt:
            'Analysis of the latest merger and acquisition trends in the technology sector.',
        content: `
<h2>Market Overview</h2>
<p>The technology sector has seen an increase in mergers and acquisitions in 2024, driven by emerging technologies and strategic partnerships.</p>

<h3>Notable Trends</h3>
<ul>
  <li>AI startups are increasingly being acquired by large tech firms.</li>
  <li>Cloud service consolidation is accelerating.</li>
  <li>Focus on cross-border acquisitions for global expansion.</li>
</ul>

<p>Understanding these trends helps investors and companies make informed decisions.</p>
    `,
        featuredImage: '/images/posts/3.png',
        category: 'acquisition',
        tags: ['mergers', 'acquisitions', 'market-analysis'],
        author: {
            name: 'Alice Johnson',
            email: 'alice.johnson@example.com',
            avatar: '/images/authors/alice.png',
        },
        status: 'published',
        publishedAt: new Date('2024-01-10'),
        createdAt: new Date('2024-01-10'),
        updatedAt: new Date('2024-01-10'),
        views: 650,
        readingTime: 5,
        seo: {
            metaTitle: 'Tech Acquisition Trends 2024',
            metaDescription:
                'Latest merger and acquisition trends in the technology sector.',
            keywords: ['acquisition', 'mergers', 'technology', 'trends'],
        },
    },
];

export { featuredPosts };

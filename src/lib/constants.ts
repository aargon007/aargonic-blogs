// Site configuration constants
export const SITE_CONFIG = {
    name: 'Aargonic',
    description:
        'Technology, Fintech, IoT, AI and Security insights from industry experts',
    url: import.meta.env.SITE_URL || 'http://localhost:4321',
    author: 'Aargonic Team',
    defaultImage: 'icon.png',
} as const;

// Blog categories
export const BLOG_CATEGORIES = [
    {
        id: 'technology',
        name: 'Technology',
        description: 'Latest trends and innovations in technology',
        color: 'blue',
    },
    {
        id: 'fintech',
        name: 'Fintech',
        description: 'Financial technology and digital banking insights',
        color: 'green',
    },
    {
        id: 'iot',
        name: 'IoT',
        description: 'Internet of Things and connected devices',
        color: 'purple',
    },
    {
        id: 'security',
        name: 'Hacking/Security',
        description: 'Cybersecurity, ethical hacking, and data protection',
        color: 'red',
    },
    {
        id: 'acquisition',
        name: 'Acquisition',
        description: 'Mergers, acquisitions, and business strategies',
        color: 'yellow',
    },
    {
        id: 'ai',
        name: 'AI',
        description: 'Artificial Intelligence and machine learning',
        color: 'indigo',
    },
] as const;

// User roles
export const USER_ROLES = {
    ADMIN: 'admin',
    EDITOR: 'editor',
} as const;

// Blog status
export const BLOG_STATUS = {
    DRAFT: 'draft',
    PUBLISHED: 'published',
    ARCHIVED: 'archived',
} as const;

// API endpoints
export const API_ENDPOINTS = {
    AUTH: {
        LOGIN: '/api/auth/login',
        LOGOUT: '/api/auth/logout',
        VERIFY: '/api/auth/verify',
    },
    BLOG: {
        LIST: '/api/blog',
        CREATE: '/api/blog',
        UPDATE: (id: string) => `/api/blog/${id}`,
        DELETE: (id: string) => `/api/blog/${id}`,
        SEARCH: '/api/blog/search',
    },
    CATEGORIES: {
        LIST: '/api/categories',
        CREATE: '/api/categories',
        UPDATE: (id: string) => `/api/categories/${id}`,
        DELETE: (id: string) => `/api/categories/${id}`,
    },
    MEDIA: {
        UPLOAD: '/api/media/upload',
        LIST: '/api/media',
    },
} as const;

// Pagination constants
export const PAGINATION = {
    DEFAULT_PAGE_SIZE: 12,
    MAX_PAGE_SIZE: 50,
} as const;

// Date format
export const DATE_FORMAT = 'MMMM dd, yyyy';

// Reading time words per minute
export const WORDS_PER_MINUTE = 200;

// Contact information
export const CONTACT_INFO = [
    {
        title: 'Email',
        text: 'hello@aargonic.com',
        href: 'mailto:hello@aargonic.com',
        bg: 'var(--color-primary-light)',
        color: 'var(--color-primary)',
    },
    {
        title: 'Location',
        text: 'Global Remote Team\nServing clients worldwide',
        bg: 'var(--color-accent-light)',
        color: 'var(--color-accent)',
    },
    {
        title: 'Response Time',
        text: 'Within 24 hours\nduring business days',
        bg: 'rgba(34,197,94,0.1)',
        color: 'var(--color-success)',
    },
] as const;

// Contact form subjects
export const CONTACT_SUBJECTS = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'partnership', label: 'Partnership Opportunity' },
    { value: 'collaboration', label: 'Content Collaboration' },
    { value: 'feedback', label: 'Feedback' },
    { value: 'support', label: 'Technical Support' },
    { value: 'other', label: 'Other' },
] as const;

// Contact information for display
export const CONTACT_DISPLAY = {
    EMAIL: 'hello@aargonic.com',
    RESPONSE_TIME: 'Within 24 hours during business days',
    LOCATION: 'Global Remote Team - Serving clients worldwide',
} as const;


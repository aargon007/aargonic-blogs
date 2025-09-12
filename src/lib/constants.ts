// Site configuration constants
export const SITE_CONFIG = {
    name: 'Aargonic',
    description:
        'Technology, Fintech, IoT, and Security insights from industry experts',
    url: import.meta.env.SITE_URL || 'http://localhost:4321',
    author: 'Aargonic Team',
    defaultImage: '/images/og-image.png',
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

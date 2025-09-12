# Aargonic Blog Project Structure

## Directory Layout

```
aargonic-blogs/
├── README.md
├── REQUIREMENTS.md
├── package.json
├── tsconfig.json
├── astro.config.mjs
├── tailwind.config.mjs
├── .gitignore
├── .env.example
├── .eslintrc.js
├── .prettierrc
│
├── public/                          # Static assets served directly
│   ├── favicon.ico
│   ├── logo.png
│   ├── og-image.png
│   └── images/
│       ├── hero/
│       ├── categories/
│       └── authors/
│
├── src/
│   ├── components/                  # Reusable React components
│   │   ├── ui/                     # Base UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Modal.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Badge.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── layout/                 # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── blog/                   # Blog-specific components
│   │   │   ├── BlogCard.tsx
│   │   │   ├── BlogList.tsx
│   │   │   ├── BlogPost.tsx
│   │   │   ├── CategoryFilter.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   ├── RelatedPosts.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── dashboard/              # Dashboard components
│   │   │   ├── DashboardLayout.tsx
│   │   │   ├── BlogEditor.tsx
│   │   │   ├── MediaUploader.tsx
│   │   │   ├── CategoryManager.tsx
│   │   │   ├── Analytics.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── home/                   # Homepage components
│   │   │   ├── Hero.tsx
│   │   │   ├── FeaturedPosts.tsx
│   │   │   ├── CategorySection.tsx
│   │   │   ├── Newsletter.tsx
│   │   │   └── index.ts
│   │   │
│   │   └── seo/                    # SEO components
│   │       ├── Meta.tsx
│   │       ├── JsonLd.tsx
│   │       └── index.ts
│   │
│   ├── layouts/                     # Astro layouts
│   │   ├── BaseLayout.astro
│   │   ├── BlogLayout.astro
│   │   ├── DashboardLayout.astro
│   │   └── HomeLayout.astro
│   │
│   ├── pages/                       # File-based routing
│   │   ├── index.astro             # Homepage
│   │   ├── about.astro             # About page
│   │   ├── contact.astro           # Contact page
│   │   │
│   │   ├── blog/                   # Blog pages
│   │   │   ├── index.astro         # Blog listing
│   │   │   ├── [slug].astro        # Individual blog post
│   │   │   └── category/
│   │   │       └── [category].astro # Category pages
│   │   │
│   │   ├── dashboard/              # Admin dashboard
│   │   │   ├── index.astro         # Dashboard home
│   │   │   ├── login.astro         # Login page
│   │   │   ├── posts/
│   │   │   │   ├── index.astro     # Posts management
│   │   │   │   ├── new.astro       # Create new post
│   │   │   │   └── [id]/
│   │   │   │       ├── edit.astro  # Edit post
│   │   │   │       └── preview.astro # Preview post
│   │   │   ├── categories/
│   │   │   │   └── index.astro     # Category management
│   │   │   ├── media/
│   │   │   │   └── index.astro     # Media management
│   │   │   └── analytics/
│   │   │       └── index.astro     # Analytics page
│   │   │
│   │   ├── api/                    # API endpoints
│   │   │   ├── auth/
│   │   │   │   ├── login.ts
│   │   │   │   ├── logout.ts
│   │   │   │   └── verify.ts
│   │   │   ├── blog/
│   │   │   │   ├── index.ts        # GET all blogs, POST new blog
│   │   │   │   ├── [id].ts         # GET, PUT, DELETE specific blog
│   │   │   │   └── search.ts       # Search blogs
│   │   │   ├── categories/
│   │   │   │   └── index.ts        # Category CRUD
│   │   │   ├── media/
│   │   │   │   ├── upload.ts       # File upload
│   │   │   │   └── index.ts        # Media management
│   │   │   └── analytics/
│   │   │       └── index.ts        # Analytics data
│   │   │
│   │   ├── rss.xml.ts              # RSS feed generation
│   │   └── sitemap.xml.ts          # Sitemap generation
│   │
│   ├── styles/                      # Styles and CSS
│   │   ├── global.css              # Global styles and Tailwind imports
│   │   ├── components/             # Component-specific styles
│   │   └── utilities/              # Utility classes
│   │
│   ├── lib/                         # Library configurations
│   │   ├── database.ts             # MongoDB connection
│   │   ├── auth.ts                 # Authentication utilities
│   │   ├── seo.ts                  # SEO utilities
│   │   ├── image.ts                # Image optimization
│   │   └── constants.ts            # App constants
│   │
│   ├── utils/                       # Utility functions
│   │   ├── format.ts               # Date/text formatting
│   │   ├── validation.ts           # Input validation
│   │   ├── slugify.ts              # URL slug generation
│   │   ├── readingTime.ts          # Reading time calculation
│   │   └── api.ts                  # API helpers
│   │
│   ├── types/                       # TypeScript definitions
│   │   ├── blog.ts                 # Blog-related types
│   │   ├── user.ts                 # User types
│   │   ├── api.ts                  # API response types
│   │   └── index.ts                # Export all types
│   │
│   ├── models/                      # Mongoose models
│   │   ├── Blog.ts                 # Blog model
│   │   ├── Category.ts             # Category model
│   │   ├── User.ts                 # User model
│   │   └── index.ts                # Export all models
│   │
│   ├── hooks/                       # Custom React hooks
│   │   ├── useAuth.ts              # Authentication hook
│   │   ├── useBlog.ts              # Blog data hook
│   │   └── useLocalStorage.ts      # Local storage hook
│   │
│   ├── contexts/                    # React contexts
│   │   ├── AuthContext.tsx         # Authentication context
│   │   └── ThemeContext.tsx        # Theme context
│   │
│   └── env.d.ts                     # Environment type definitions
│
├── scripts/                         # Build and utility scripts
│   ├── seed-database.ts            # Database seeding
│   └── generate-sitemap.ts         # Sitemap generation
│
└── docs/                           # Documentation
    ├── API.md                      # API documentation
    ├── DEPLOYMENT.md               # Deployment guide
    └── CONTRIBUTING.md             # Contribution guidelines
```

## Key Design Decisions

### 1. Astro + React Hybrid Architecture

- **Astro pages**: For static content and SEO-optimized pages
- **React components**: For interactive dashboard and dynamic features
- **Islands Architecture**: Only hydrate interactive components

### 2. File-based Routing

- Leverages Astro's built-in routing system
- Clear URL structure for SEO
- Organized by feature areas

### 3. Component Organization

- **Atomic Design Principles**: Base UI components in `/ui/`
- **Feature-based Grouping**: Components grouped by functionality
- **Index Files**: Clean imports with barrel exports

### 4. API Structure

- RESTful design principles
- Organized by resource type
- Consistent naming conventions

### 5. Type Safety

- Comprehensive TypeScript coverage
- Shared types across frontend/backend
- Strong typing for API responses

### 6. SEO Optimization

- Dedicated SEO components
- Automatic sitemap and RSS generation
- Meta tag management per page

### 7. Development Experience

- Hot reloading with Astro dev server
- Component-scoped styles with Tailwind
- Linting and formatting automation

## Naming Conventions

### Files & Directories

- **Components**: PascalCase (e.g., `BlogCard.tsx`)
- **Pages**: kebab-case (e.g., `blog-post.astro`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Constants**: SCREAMING_SNAKE_CASE
- **Directories**: lowercase with hyphens

### Code

- **Variables/Functions**: camelCase
- **Components**: PascalCase
- **Types/Interfaces**: PascalCase with descriptive names
- **Constants**: SCREAMING_SNAKE_CASE

## Environment Variables

```bash
# Database
MONGODB_URI=mongodb://localhost:27017/aargonic-blog
MONGODB_DB_NAME=aargonic-blog

# Authentication
JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=7d

# Image Upload
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret

# Site Configuration
SITE_URL=https://aargonic.com
SITE_NAME=Aargonic
ADMIN_EMAIL=admin@aargonic.com
```

This structure provides a solid foundation for building a scalable, maintainable blog website with clear separation of concerns and modern development practices.

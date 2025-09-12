import type { ObjectId } from 'mongoose';
import type { User } from './user';

export interface Blog {
    _id: ObjectId;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    featuredImage?: string;
    category: string;
    tags: string[];
    author: ObjectId | User;
    status: 'draft' | 'published' | 'archived';
    publishedAt?: Date;
    createdAt: Date;
    updatedAt: Date;
    views: number;
    readingTime: number;
    seo: {
        metaTitle?: string;
        metaDescription?: string;
        keywords?: string[];
    };
}

export interface CreateBlogInput {
    title: string;
    content: string;
    excerpt?: string;
    featuredImage?: string;
    category: string;
    tags?: string[];
    status?: 'draft' | 'published';
    publishedAt?: Date;
    seo?: {
        metaTitle?: string;
        metaDescription?: string;
        keywords?: string[];
    };
}

export interface UpdateBlogInput {
    title?: string;
    content?: string;
    excerpt?: string;
    featuredImage?: string;
    category?: string;
    tags?: string[];
    status?: 'draft' | 'published' | 'archived';
    publishedAt?: Date;
    seo?: {
        metaTitle?: string;
        metaDescription?: string;
        keywords?: string[];
    };
}

export interface BlogListQuery {
    page?: number;
    limit?: number;
    category?: string;
    tag?: string;
    status?: 'draft' | 'published' | 'archived';
    search?: string;
    author?: string;
    sortBy?: 'createdAt' | 'publishedAt' | 'views' | 'title';
    sortOrder?: 'asc' | 'desc';
}

export interface BlogListResponse {
    blogs: Blog[];
    pagination: {
        currentPage: number;
        totalPages: number;
        totalBlogs: number;
        hasNextPage: boolean;
        hasPrevPage: boolean;
    };
}

export interface PopularBlog {
    _id: ObjectId;
    title: string;
    slug: string;
    views: number;
    publishedAt: Date;
}

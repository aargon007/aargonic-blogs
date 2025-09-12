import mongoose, { Schema, model } from 'mongoose';
import type { Blog } from '../types/blog';
import { BLOG_CATEGORIES, BLOG_STATUS } from '../lib/constants';

const blogSchema = new Schema<Blog>(
    {
        title: {
            type: String,
            required: [true, 'Title is required'],
            trim: true,
            maxlength: [100, 'Title must be less than 100 characters'],
        },
        slug: {
            type: String,
            required: [true, 'Slug is required'],
            unique: true,
            lowercase: true,
            trim: true,
        },
        content: {
            type: String,
            required: [true, 'Content is required'],
        },
        excerpt: {
            type: String,
            trim: true,
            maxlength: [300, 'Excerpt must be less than 300 characters'],
        },
        featuredImage: {
            type: String,
            default: null,
        },
        category: {
            type: String,
            required: [true, 'Category is required'],
            enum: BLOG_CATEGORIES.map(cat => cat.id),
        },
        tags: [
            {
                type: String,
                trim: true,
                lowercase: true,
            },
        ],
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: [true, 'Author is required'],
        },
        status: {
            type: String,
            enum: Object.values(BLOG_STATUS),
            default: BLOG_STATUS.DRAFT,
        },
        publishedAt: {
            type: Date,
            default: null,
        },
        views: {
            type: Number,
            default: 0,
            min: 0,
        },
        readingTime: {
            type: Number,
            default: 0,
            min: 0,
        },
        seo: {
            metaTitle: {
                type: String,
                trim: true,
                maxlength: [60, 'Meta title must be less than 60 characters'],
            },
            metaDescription: {
                type: String,
                trim: true,
                maxlength: [
                    160,
                    'Meta description must be less than 160 characters',
                ],
            },
            keywords: [
                {
                    type: String,
                    trim: true,
                    lowercase: true,
                },
            ],
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
);

// Indexes for better performance
blogSchema.index({ slug: 1 });
blogSchema.index({ status: 1, publishedAt: -1 });
blogSchema.index({ category: 1, status: 1 });
blogSchema.index({ tags: 1 });
blogSchema.index({ author: 1 });
blogSchema.index({ views: -1 });
blogSchema.index({ title: 'text', content: 'text', excerpt: 'text' });

// Pre-save middleware to set publishedAt date
blogSchema.pre('save', function (next) {
    if (this.status === BLOG_STATUS.PUBLISHED && !this.publishedAt) {
        this.publishedAt = new Date();
    }
    next();
});

// Virtual for formatted reading time
blogSchema.virtual('formattedReadingTime').get(function () {
    const minutes = Math.ceil(this.readingTime);
    return `${minutes} min read`;
});

export const BlogModel =
    mongoose.models.Blog || model<Blog>('Blog', blogSchema);

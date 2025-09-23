import mongoose, { Schema, model } from 'mongoose';
import type { Contact } from '../types';

const contactSchema = new Schema<Contact>(
    {
        fullName: {
            type: String,
            required: [true, 'Full name is required'],
            trim: true,
            maxlength: [100, 'Full name must be less than 100 characters'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
        },
        subject: {
            type: String,
            required: [true, 'Subject is required'],
            enum: ['general', 'partnership', 'collaboration', 'feedback', 'support', 'other'],
        },
        message: {
            type: String,
            required: [true, 'Message is required'],
            trim: true,
            maxlength: [2000, 'Message must be less than 2000 characters'],
            minlength: [10, 'Message must be at least 10 characters'],
        },
        newsletter: {
            type: Boolean,
            default: false,
        },
        status: {
            type: String,
            enum: ['pending', 'in-progress', 'resolved', 'closed'],
            default: 'pending',
        },
        adminNotes: {
            type: String,
            maxlength: [1000, 'Admin notes must be less than 1000 characters'],
        },
        ipAddress: {
            type: String,
        },
        userAgent: {
            type: String,
        },
    },
    {
        timestamps: true,
        toJSON: {
            transform: function (doc, ret) {
                // Remove sensitive information from JSON output
                delete ret.ipAddress;
                delete ret.userAgent;
                return ret;
            },
        },
    }
);

// Indexes for efficient queries
contactSchema.index({ email: 1 });
contactSchema.index({ status: 1 });
contactSchema.index({ subject: 1 });
contactSchema.index({ createdAt: -1 });

export const ContactModel =
    mongoose.models.Contact || model<Contact>('Contact', contactSchema);
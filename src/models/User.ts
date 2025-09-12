import mongoose, { Schema, model } from 'mongoose';
import type { User } from '../types/user';

const userSchema = new Schema<User>(
    {
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [8, 'Password must be at least 8 characters'],
        },
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
            maxlength: [50, 'Name must be less than 50 characters'],
        },
        role: {
            type: String,
            enum: ['admin', 'editor'],
            default: 'editor',
        },
        avatar: {
            type: String,
            default: null,
        },
        bio: {
            type: String,
            maxlength: [500, 'Bio must be less than 500 characters'],
        },
    },
    {
        timestamps: true,
        toJSON: {
            transform: function (doc, ret) {
                delete ret.password;
                return ret;
            },
        },
    }
);

// Index for email lookups
userSchema.index({ email: 1 });

export const UserModel =
    mongoose.models.User || model<User>('User', userSchema);

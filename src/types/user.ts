import type { ObjectId } from 'mongoose';

export interface User {
    _id: ObjectId;
    email: string;
    password: string;
    name: string;
    role: 'admin' | 'editor';
    avatar?: string;
    bio?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateUserInput {
    email: string;
    password: string;
    name: string;
    role?: 'admin' | 'editor';
    avatar?: string;
    bio?: string;
}

export interface UpdateUserInput {
    email?: string;
    name?: string;
    avatar?: string;
    bio?: string;
}

export interface LoginInput {
    email: string;
    password: string;
}

export interface AuthResponse {
    user: Omit<User, 'password'>;
    token: string;
}
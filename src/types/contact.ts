export interface Contact {
    _id?: string;
    fullName: string;
    email: string;
    subject: 'general' | 'partnership' | 'collaboration' | 'feedback' | 'support' | 'other';
    message: string;
    newsletter: boolean;
    status: 'pending' | 'in-progress' | 'resolved' | 'closed';
    adminNotes?: string;
    ipAddress?: string;
    userAgent?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ContactFormData {
    fullName: string;
    email: string;
    subject: string;
    message: string;
    newsletter: boolean;
}
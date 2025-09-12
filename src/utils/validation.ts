// Email validation
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email.trim());
}

// Password validation
export function isValidPassword(password: string): {
    isValid: boolean;
    errors: string[];
} {
    const errors: string[] = [];

    if (password.length < 8) {
        errors.push('Password must be at least 8 characters long');
    }

    if (!/[a-z]/.test(password)) {
        errors.push('Password must contain at least one lowercase letter');
    }

    if (!/[A-Z]/.test(password)) {
        errors.push('Password must contain at least one uppercase letter');
    }

    if (!/\d/.test(password)) {
        errors.push('Password must contain at least one number');
    }

    return {
        isValid: errors.length === 0,
        errors,
    };
}

// Blog title validation
export function isValidBlogTitle(title: string): {
    isValid: boolean;
    error?: string;
} {
    const trimmedTitle = title.trim();

    if (trimmedTitle.length === 0) {
        return { isValid: false, error: 'Title is required' };
    }

    if (trimmedTitle.length > 100) {
        return {
            isValid: false,
            error: 'Title must be less than 100 characters',
        };
    }

    return { isValid: true };
}

// Blog content validation
export function isValidBlogContent(content: string): {
    isValid: boolean;
    error?: string;
} {
    const trimmedContent = content.trim();

    if (trimmedContent.length === 0) {
        return { isValid: false, error: 'Content is required' };
    }

    if (trimmedContent.length < 100) {
        return {
            isValid: false,
            error: 'Content must be at least 100 characters',
        };
    }

    return { isValid: true };
}

// Sanitize input to prevent XSS
export function sanitizeInput(input: string): string {
    return input
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
}

// Validate tag format
export function isValidTag(tag: string): boolean {
    const trimmedTag = tag.trim();
    return (
        trimmedTag.length > 0 &&
        trimmedTag.length <= 30 &&
        /^[a-zA-Z0-9\s-]+$/.test(trimmedTag)
    );
}

// Validate array of tags
export function validateTags(tags: string[]): {
    isValid: boolean;
    validTags: string[];
    errors: string[];
} {
    const validTags: string[] = [];
    const errors: string[] = [];

    for (const tag of tags) {
        if (isValidTag(tag)) {
            const cleanTag = tag.trim().toLowerCase();
            if (!validTags.includes(cleanTag)) {
                validTags.push(cleanTag);
            }
        } else {
            errors.push(`Invalid tag: ${tag}`);
        }
    }

    if (validTags.length > 10) {
        errors.push('Maximum 10 tags allowed');
        validTags.splice(10);
    }

    return {
        isValid: errors.length === 0,
        validTags,
        errors,
    };
}

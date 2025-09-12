// Convert text to URL-friendly slug
export function slugify(text: string): string {
    return text
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special characters
        .replace(/[\s_-]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
}

// Generate unique slug by adding number suffix if needed
export function generateUniqueSlug(
    baseSlug: string,
    existingSlugs: string[]
): string {
    let slug = slugify(baseSlug);
    let counter = 1;
    const originalSlug = slug;

    while (existingSlugs.includes(slug)) {
        slug = `${originalSlug}-${counter}`;
        counter++;
    }

    return slug;
}

// Validate slug format
export function isValidSlug(slug: string): boolean {
    const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
    return slugRegex.test(slug);
}

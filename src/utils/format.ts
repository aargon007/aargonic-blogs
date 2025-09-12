// Format date to readable string
export function formatDate(
    date: Date | string,
    format: 'short' | 'long' | 'relative' = 'long'
): string {
    const dateObj = typeof date === 'string' ? new Date(date) : date;

    if (format === 'relative') {
        return getRelativeTime(dateObj);
    }

    const options: Intl.DateTimeFormatOptions =
        format === 'short'
            ? { year: 'numeric', month: 'short', day: 'numeric' }
            : { year: 'numeric', month: 'long', day: 'numeric' };

    return dateObj.toLocaleDateString('en-US', options);
}

// Get relative time (e.g., "2 days ago")
function getRelativeTime(date: Date): string {
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInSecs = Math.floor(diffInMs / 1000);
    const diffInMins = Math.floor(diffInSecs / 60);
    const diffInHours = Math.floor(diffInMins / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInSecs < 60) return 'Just now';
    if (diffInMins < 60)
        return `${diffInMins} minute${diffInMins > 1 ? 's' : ''} ago`;
    if (diffInHours < 24)
        return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
    if (diffInDays < 7)
        return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;

    return formatDate(date, 'short');
}

// Truncate text to specified length
export function truncateText(text: string, maxLength: number = 100): string {
    if (text.length <= maxLength) return text;

    const truncated = text.slice(0, maxLength);
    const lastSpaceIndex = truncated.lastIndexOf(' ');

    if (lastSpaceIndex === -1) return truncated + '...';

    return truncated.slice(0, lastSpaceIndex) + '...';
}

// Capitalize first letter of each word
export function capitalizeWords(text: string): string {
    return text.replace(/\b\w/g, letter => letter.toUpperCase());
}

// Remove HTML tags from string
export function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '');
}

// Extract plain text from markdown/html content
export function extractPlainText(content: string): string {
    // Remove markdown formatting
    let plainText = content
        .replace(/#{1,6}\s+/g, '') // Headers
        .replace(/\*\*(.*?)\*\*/g, '$1') // Bold
        .replace(/\*(.*?)\*/g, '$1') // Italic
        .replace(/\[(.*?)\]\(.*?\)/g, '$1') // Links
        .replace(/`(.*?)`/g, '$1') // Inline code
        .replace(/```[\s\S]*?```/g, '') // Code blocks
        .replace(/>\s+/g, '') // Blockquotes
        .replace(/[-*+]\s+/g, '') // Lists
        .replace(/\n{2,}/g, '\n') // Multiple newlines
        .trim();

    // Remove any remaining HTML tags
    return stripHtml(plainText);
}

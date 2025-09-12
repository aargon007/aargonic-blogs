import { WORDS_PER_MINUTE } from '../lib/constants';
import { extractPlainText } from './format';

// Calculate reading time based on word count
export function calculateReadingTime(content: string): number {
    const plainText = extractPlainText(content);
    const wordCount = countWords(plainText);
    const readingTimeMinutes = Math.ceil(wordCount / WORDS_PER_MINUTE);

    return Math.max(1, readingTimeMinutes); // Minimum 1 minute
}

// Count words in text
function countWords(text: string): number {
    // Remove extra whitespace and split by word boundaries
    const words = text
        .trim()
        .replace(/\s+/g, ' ')
        .split(' ')
        .filter(word => word.length > 0);

    return words.length;
}

// Format reading time for display
export function formatReadingTime(minutes: number): string {
    if (minutes === 1) {
        return '1 min read';
    }
    return `${minutes} min read`;
}
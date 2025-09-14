import type { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
    const baseClasses = `bg-surface rounded-lg shadow-md border border-border transition-all duration-200`;

    const hoverClasses = hover
        ? 'hover:shadow-lg hover:translate-y-[-2px]'
        : '';

    const classes = `${baseClasses} ${hoverClasses} ${className}`;

    return <div className={classes}>{children}</div>;
}

interface CardHeaderProps {
    children: ReactNode;
    className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
    return <div className={`p-6 pb-4 ${className}`}>{children}</div>;
}

interface CardContentProps {
    children: ReactNode;
    className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
    return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
}

interface CardFooterProps {
    children: ReactNode;
    className?: string;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
    return (
        <div
            className={`p-6 pt-4 border-t border-border-subtle ${className}`}
        >
            {children}
        </div>
    );
}

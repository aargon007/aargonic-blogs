interface BadgeProps {
    children: React.ReactNode;
    variant?: 'primary' | 'accent' | 'success' | 'warning' | 'error' | 'neutral';
    size?: 'sm' | 'md';
    className?: string;
}

export function Badge({
    children,
    variant = 'primary',
    size = 'sm',
    className = '',
}: BadgeProps) {
    const baseClasses = `
        inline-flex items-center font-medium rounded-full
        transition-colors duration-300
        font-sans
    `;

    const variantClasses: Record<string, string> = {
        primary: 'bg-primary-light text-primary',
        accent: 'bg-accent-light text-accent',
        success: 'bg-success/20 text-success',
        warning: 'bg-warning/20 text-warning',
        error: 'bg-error/20 text-error',
        neutral: 'bg-surface-elevated text-text-secondary',
    };

    const sizeClasses: Record<string, string> = {
        sm: 'px-2 py-1 text-xs',
        md: 'px-3 py-1 text-sm',
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return <span className={classes}>{children}</span>;
}

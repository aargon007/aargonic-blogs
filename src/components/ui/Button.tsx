import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: ReactNode;
    className?: string;
}

export function Button({
    variant = 'primary',
    size = 'md',
    children,
    className = '',
    ...props
}: ButtonProps) {
    const baseClasses = `
        inline-flex items-center justify-center
        font-medium rounded-xl
        transition-all duration-300
        focus:outline-none cursor-pointer
        disabled:opacity-50 disabled:pointer-events-none
        font-sans
    `;

    const variantClasses: Record<string, string> = {
        primary: `
            bg-primary
            text-white 
            hover:bg-primary-hover
            focus:ring-primary-light
        `,
        secondary: `
            bg-surface 
            text-text-primary
            border border-border
            hover:bg-surface-elevated
            focus:ring-primary-light
        `,
        outline: `
            bg-background
            border border-border
            text-text-primary
            hover:bg-surface-elevated
            focus:ring-primary-light
        `,
        ghost: `
            bg-transparent
            text-text-secondary
            hover:bg-surface-elevated
            focus:ring-primary-light
        `,
    };

    const sizeClasses: Record<string, string> = {
        sm: 'px-3 py-2 text-sm',
        md: 'px-4 py-2 text-sm',
        lg: 'px-6 py-3 text-base',
    };

    const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}

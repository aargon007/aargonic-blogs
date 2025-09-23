import React from 'react';

interface CheckboxFieldProps {
    id: string;
    name: string;
    label: string;
    checked?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    className?: string;
    'aria-describedby'?: string;
    error?: string;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({
    id,
    name,
    label,
    checked = false,
    onChange,
    onBlur,
    disabled = false,
    className = '',
    'aria-describedby': ariaDescribedBy,
    error,
}) => {
    const checkboxId = id;
    const errorId = error ? `${checkboxId}-error` : undefined;
    const describedBy = [ariaDescribedBy, errorId].filter(Boolean).join(' ') || undefined;

    return (
        <div className={`form-field flex items-start space-x-3 ${className}`}>
            <input
                type="checkbox"
                id={checkboxId}
                name={name}
                checked={checked}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
                className="mt-1 h-4 w-4 rounded focus-ring"
                style={{ accentColor: 'var(--color-primary)' }}
                aria-describedby={describedBy}
                aria-invalid={error ? 'true' : 'false'}
            />
            <div className="flex-1">
                <label
                    htmlFor={checkboxId}
                    className="text-sm leading-6 cursor-pointer"
                    style={{ color: 'var(--color-text-secondary)' }}
                >
                    {label}
                </label>
                {error && (
                    <p
                        id={errorId}
                        className="mt-1 text-sm"
                        style={{ color: 'var(--color-error)' }}
                        role="alert"
                    >
                        {error}
                    </p>
                )}
            </div>
        </div>
    );
};

export default CheckboxField;
import React from 'react';

interface TextAreaFieldProps {
    id: string;
    name: string;
    label: string;
    placeholder?: string;
    required?: boolean;
    className?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    disabled?: boolean;
    rows?: number;
    cols?: number;
    maxLength?: number;
    'aria-describedby'?: string;
    error?: string;
    resize?: boolean;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
    id,
    name,
    label,
    placeholder,
    required = false,
    className = '',
    value,
    onChange,
    onBlur,
    disabled = false,
    rows = 4,
    cols,
    maxLength,
    'aria-describedby': ariaDescribedBy,
    error,
    resize = false,
}) => {
    const textareaId = id;
    const errorId = error ? `${textareaId}-error` : undefined;
    const describedBy = [ariaDescribedBy, errorId].filter(Boolean).join(' ') || undefined;

    return (
        <div className={`form-field ${className}`}>
            <label
                htmlFor={textareaId}
                className="block text-sm font-semibold mb-2 text-text-primary"
            >
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <textarea
                id={textareaId}
                name={name}
                required={required}
                className={`form-input ${resize ? '' : 'resize-none'} ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
                rows={rows}
                cols={cols}
                maxLength={maxLength}
                aria-describedby={describedBy}
                aria-invalid={error ? 'true' : 'false'}
            />
            {error && (
                <p
                    id={errorId}
                    className="mt-1 text-sm text-error"
                    role="alert"
                >
                    {error}
                </p>
            )}
        </div>
    );
};

export default TextAreaField;
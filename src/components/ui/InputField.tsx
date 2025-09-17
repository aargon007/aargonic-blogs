import React from 'react';

interface InputFieldProps {
    id: string;
    name: string;
    label: string;
    type?: 'text' | 'email' | 'tel' | 'password';
    placeholder?: string;
    required?: boolean;
    className?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    autoComplete?: string;
    'aria-describedby'?: string;
    error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
    id,
    name,
    label,
    type = 'text',
    placeholder,
    required = false,
    className = '',
    value,
    onChange,
    onBlur,
    disabled = false,
    autoComplete,
    'aria-describedby': ariaDescribedBy,
    error,
}) => {
    const inputId = id;
    const errorId = error ? `${inputId}-error` : undefined;
    const describedBy = [ariaDescribedBy, errorId].filter(Boolean).join(' ') || undefined;

    return (
        <div className={`form-field ${className}`}>
            <label
                htmlFor={inputId}
                className="block text-sm font-semibold mb-2 text-text-primary"
            >
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <input
                type={type}
                id={inputId}
                name={name}
                required={required}
                className={`form-input ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
                autoComplete={autoComplete}
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

export default InputField;
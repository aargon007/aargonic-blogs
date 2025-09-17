import React from 'react';

interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}

interface SelectFieldProps {
    id: string;
    name: string;
    label: string;
    options: readonly SelectOption[];
    required?: boolean;
    className?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
    disabled?: boolean;
    placeholder?: string;
    'aria-describedby'?: string;
    error?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
    id,
    name,
    label,
    options,
    required = false,
    className = '',
    value,
    onChange,
    onBlur,
    disabled = false,
    placeholder = 'Select an option',
    'aria-describedby': ariaDescribedBy,
    error,
}) => {
    const selectId = id;
    const errorId = error ? `${selectId}-error` : undefined;
    const describedBy = [ariaDescribedBy, errorId].filter(Boolean).join(' ') || undefined;

    return (
        <div className={`form-field ${className}`}>
            <label
                htmlFor={selectId}
                className="block text-sm font-semibold mb-2 text-text-primary"
            >
                {label}
                {required && <span className="text-red-500 ml-1">*</span>}
            </label>
            <select
                id={selectId}
                name={name}
                required={required}
                className={`form-input ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''}`}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                disabled={disabled}
                aria-describedby={describedBy}
                aria-invalid={error ? 'true' : 'false'}
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option
                        key={option.value}
                        value={option.value}
                        disabled={option.disabled}
                    >
                        {option.label}
                    </option>
                ))}
            </select>
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

export default SelectField;
import './ContactFormInfo.css';
import React, { useState } from 'react';
import './ContactFormInfo.css';
import { InputField, TextAreaField, SelectField, CheckboxField } from '../ui';
import { CONTACT_SUBJECTS } from '../../lib/constants';
import type { ContactFormData } from '../../types/contact';

const ContactFormInfo = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        fullName: '',
        email: '',
        subject: '',
        message: '',
        newsletter: false,
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({ type: null, message: '' });
    const [errors, setErrors] = useState<Partial<ContactFormData>>({});

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));

        // Clear error when user starts typing
        if (errors[name as keyof ContactFormData]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const validateForm = (): boolean => {
        const newErrors: Partial<ContactFormData> = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = 'Full name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.subject) {
            newErrors.subject = 'Please select a subject';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters long';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const formDataToSend = new FormData();
            formDataToSend.append('fullName', formData.fullName);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('subject', formData.subject);
            formDataToSend.append('message', formData.message);
            formDataToSend.append('newsletter', formData.newsletter.toString());

            const response = await fetch('/api/contact', {
                method: 'POST',
                body: formDataToSend,
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus({
                    type: 'success',
                    message: result.message || 'Thank you for your message! We will get back to you soon.',
                });
                // Reset form
                setFormData({
                    fullName: '',
                    email: '',
                    subject: '',
                    message: '',
                    newsletter: false,
                });
            } else {
                setSubmitStatus({
                    type: 'error',
                    message: result.error || 'Something went wrong. Please try again.',
                });
            }
        } catch (error) {
            console.error('Submit error:', error);
            setSubmitStatus({
                type: 'error',
                message: 'Network error. Please check your connection and try again.',
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Form */}
                    <div className="contact-form-container">
                        <div className="px-10 pb-10 pt-0">
                            <h2 className="text-3xl font-display font-bold mb-8 text-text-primary">
                                Send us a Message
                            </h2>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                {submitStatus.type && (
                                    <div
                                        className={`form-field p-4 rounded-xl ${submitStatus.type === 'success'
                                                ? 'bg-green-50 border border-green-200 text-green-800'
                                                : 'bg-red-50 border border-red-200 text-red-800'
                                            }`}
                                        role="alert"
                                        aria-live="polite"
                                    >
                                        <div className="flex items-center">
                                            <svg
                                                className={`w-5 h-5 mr-2 ${submitStatus.type === 'success' ? 'text-green-500' : 'text-red-500'
                                                    }`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                {submitStatus.type === 'success' ? (
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                        clipRule="evenodd"
                                                    />
                                                ) : (
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                                        clipRule="evenodd"
                                                    />
                                                )}
                                            </svg>
                                            <span className="text-sm font-medium">{submitStatus.message}</span>
                                        </div>
                                    </div>
                                )}
                                
                                <InputField
                                    id="fullName"
                                    name="fullName"
                                    label="Full Name"
                                    placeholder="Your full name"
                                    required
                                    value={formData.fullName}
                                    onChange={handleInputChange}
                                    error={errors.fullName}
                                    disabled={isSubmitting}
                                />

                                <InputField
                                    id="email"
                                    name="email"
                                    label="Email Address"
                                    type="email"
                                    placeholder="your@email.com"
                                    required
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    error={errors.email}
                                    disabled={isSubmitting}
                                />

                                <SelectField
                                    id="subject"
                                    name="subject"
                                    label="Subject"
                                    options={CONTACT_SUBJECTS}
                                    placeholder="Select a subject"
                                    required
                                    value={formData.subject}
                                    onChange={handleInputChange}
                                    error={errors.subject}
                                    disabled={isSubmitting}
                                />

                                <TextAreaField
                                    id="message"
                                    name="message"
                                    label="Message"
                                    placeholder="Tell us more about your inquiry..."
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    error={errors.message}
                                    disabled={isSubmitting}
                                />

                                <CheckboxField
                                    id="newsletter"
                                    name="newsletter"
                                    label="Subscribe to our newsletter for the latest insights and updates"
                                    checked={formData.newsletter}
                                    onChange={handleInputChange}
                                    disabled={isSubmitting}
                                />

                                {/* Submit */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="form-field submit-button btn-primary w-full px-8 py-4 text-lg font-semibold inline-flex items-center justify-center group rounded-lg shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg
                                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <svg
                                                className="icon ml-2 w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                                />
                                            </svg>
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Info Column */}
                    <div className="contact-info-container space-y-10">
                        {/* Contact Info */}
                        <div className="info-card contact-info bg-surface border border-border p-8 rounded-2xl shadow-sm">
                            <h3 className="text-lg font-display font-bold mb-4 text-text-primary">
                                Contact Information
                            </h3>

                            <div className="space-y-4">
                                {[
                                    {
                                        title: 'Email',
                                        text: 'hello@aargonic.com',
                                        href: 'mailto:hello@aargonic.com',
                                        icon: (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                            />
                                        ),
                                        bg: 'var(--color-primary-light)',
                                        color: 'var(--color-primary)',
                                    },
                                    {
                                        title: 'Location',
                                        text: 'Global Remote Team\nServing clients worldwide',
                                        icon: (
                                            <>
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </>
                                        ),
                                        bg: 'var(--color-accent-light)',
                                        color: 'var(--color-accent)',
                                    },
                                    {
                                        title: 'Response Time',
                                        text: 'Within 24 hours\nduring business days',
                                        icon: (
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        ),
                                        bg: 'rgba(34,197,94,0.1)',
                                        color: 'var(--color-success)',
                                    },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start space-x-3">
                                        <div
                                            className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                                            style={{ backgroundColor: item.bg }}
                                        >
                                            <svg
                                                className="w-5 h-5"
                                                style={{ color: item.color }}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                {item.icon}
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold mb-1 text-text-primary">
                                                {item.title}
                                            </h4>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="text-sm hover:underline text-text-secondary"
                                                >
                                                    {item.text}
                                                </a>
                                            ) : (
                                                <p className="text-sm whitespace-pre-line text-text-secondary">
                                                    {item.text}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Collaboration */}
                        <div className="info-card collaboration bg-surface border border-border p-8 rounded-2xl shadow-sm">
                            <h3 className="text-lg font-display font-bold mb-4 text-text-primary">
                                Collaboration Opportunities
                            </h3>
                            <div className="space-y-3">
                                {[
                                    { color: 'var(--color-primary)', text: 'Guest writing and expert contributions' },
                                    { color: 'var(--color-accent)', text: 'Technology partnerships and integrations' },
                                    { color: 'var(--color-success)', text: 'Speaking engagements and conferences' },
                                    { color: 'var(--color-warning)', text: 'Media interviews and expert commentary' },
                                ].map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="collaboration-item flex items-center space-x-3"
                                    >
                                        <div
                                            className="bullet w-2 h-2 rounded-full"
                                            style={{ backgroundColor: item.color }}
                                        ></div>
                                        <span className="text-sm text-text-secondary">
                                            {item.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ContactFormInfo;

import './ContactFormInfo.css';
import React from 'react';
import './ContactFormInfo.css';
import { InputField, TextAreaField, SelectField } from '../ui';
import { CONTACT_SUBJECTS } from '../../lib/constants';

const ContactFormInfo = () => {

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

                            <form className="space-y-6" action="/api/contact" method="POST">
                                <InputField
                                    id="fullName"
                                    name="fullName"
                                    label="Full Name"
                                    placeholder="Your full name"
                                    required
                                />

                                <InputField
                                    id="email"
                                    name="email"
                                    label="Email Address"
                                    type="email"
                                    placeholder="your@email.com"
                                    required
                                    autoComplete="email"
                                />

                                <SelectField
                                    id="subject"
                                    name="subject"
                                    label="Subject"
                                    options={CONTACT_SUBJECTS}
                                    placeholder="Select a subject"
                                    required
                                />

                                <TextAreaField
                                    id="message"
                                    name="message"
                                    label="Message"
                                    placeholder="Tell us more about your inquiry..."
                                    rows={4}
                                    required
                                />

                                {/* Newsletter */}
                                <div className="form-field flex items-start space-x-3">
                                    <input
                                        type="checkbox"
                                        id="newsletter"
                                        name="newsletter"
                                        className="mt-1 h-4 w-4 rounded focus:outline-none"
                                    />
                                    <label
                                        htmlFor="newsletter"
                                        className="text-sm leading-6 text-text-secondary"
                                    >
                                        Subscribe to our newsletter for the latest insights and
                                        updates
                                    </label>
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="form-field submit-button btn-primary w-full px-8 py-4 text-lg font-semibold inline-flex items-center justify-center group rounded-lg shadow-sm"
                                >
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

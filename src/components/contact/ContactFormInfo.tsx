import React from 'react';
import { motion } from 'framer-motion';

const ContactFormInfo = () => {
    return (
        <section className="py-16 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="p-10">
                            <h2 className="text-3xl font-display font-bold mb-8 text-text-primary">
                                Send us a Message
                            </h2>

                            <form className="space-y-6" action="/api/contact" method="POST">
                                {/* Full Name */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1, duration: 0.5 }}
                                >
                                    <label
                                        htmlFor="fullName"
                                        className="block text-sm font-semibold mb-2"
                                        style={{ color: 'var(--color-text-primary)' }}
                                    >
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="fullName"
                                        name="fullName"
                                        required
                                        className="form-input"
                                        placeholder="Your full name"
                                    />
                                </motion.div>

                                {/* Email */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-semibold mb-2"
                                        style={{ color: 'var(--color-text-primary)' }}
                                    >
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        className="form-input"
                                        placeholder="your@email.com"
                                    />
                                </motion.div>

                                {/* Subject */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-semibold mb-2"
                                        style={{ color: 'var(--color-text-primary)' }}
                                    >
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        required
                                        className="form-input"
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="general">General Inquiry</option>
                                        <option value="partnership">Partnership Opportunity</option>
                                        <option value="collaboration">Content Collaboration</option>
                                        <option value="feedback">Feedback</option>
                                        <option value="support">Technical Support</option>
                                        <option value="other">Other</option>
                                    </select>
                                </motion.div>

                                {/* Message */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4, duration: 0.5 }}
                                >
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-semibold mb-2"
                                        style={{ color: 'var(--color-text-primary)' }}
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        required
                                        className="form-input resize-none"
                                        placeholder="Tell us more about your inquiry..."
                                    ></textarea>
                                </motion.div>

                                {/* Newsletter */}
                                <motion.div
                                    className="flex items-start space-x-3"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    <input
                                        type="checkbox"
                                        id="newsletter"
                                        name="newsletter"
                                        className="mt-1 h-4 w-4 rounded focus-ring"
                                        style={{ accentColor: 'var(--color-primary)' }}
                                    />
                                    <label
                                        htmlFor="newsletter"
                                        className="text-sm leading-6"
                                        style={{ color: 'var(--color-text-secondary)' }}
                                    >
                                        Subscribe to our newsletter for the latest insights and
                                        updates
                                    </label>
                                </motion.div>

                                {/* Submit */}
                                <motion.button
                                    type="submit"
                                    className="btn-primary w-full px-8 py-4 text-lg font-semibold inline-flex items-center justify-center group rounded-lg shadow-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    Send Message
                                    <motion.svg
                                        className="ml-2 w-5 h-5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        whileHover={{ x: 5 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                        />
                                    </motion.svg>
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Info Column */}
                    <motion.div
                        className="space-y-10"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Contact Info */}
                        <motion.div
                            className="p-8 rounded-2xl shadow-sm"
                            style={{
                                backgroundColor: 'var(--color-surface)',
                                border: '1px solid var(--color-border)',
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                transition: { duration: 0.2 }
                            }}
                        >
                            <h3
                                className="text-2xl font-display font-bold mb-6"
                                style={{ color: 'var(--color-text-primary)' }}
                            >
                                Contact Information
                            </h3>

                            <div className="space-y-6">
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
                                        text: 'We typically respond within 24 hours\nduring business days',
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
                                    <div key={idx} className="flex items-start space-x-4">
                                        <div
                                            className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                                            style={{ backgroundColor: item.bg }}
                                        >
                                            <svg
                                                className="w-6 h-6"
                                                style={{ color: item.color }}
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                {item.icon}
                                            </svg>
                                        </div>
                                        <div>
                                            <h4
                                                className="font-semibold mb-1"
                                                style={{ color: 'var(--color-text-primary)' }}
                                            >
                                                {item.title}
                                            </h4>
                                            {item.href ? (
                                                <a
                                                    href={item.href}
                                                    className="hover:underline"
                                                    style={{ color: 'var(--color-text-secondary)' }}
                                                >
                                                    {item.text}
                                                </a>
                                            ) : (
                                                <p
                                                    style={{ color: 'var(--color-text-secondary)' }}
                                                    className="whitespace-pre-line"
                                                >
                                                    {item.text}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Collaboration */}
                        <motion.div
                            className="p-8 rounded-2xl shadow-sm"
                            style={{
                                backgroundColor: 'var(--color-surface)',
                                border: '1px solid var(--color-border)',
                            }}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            whileHover={{
                                scale: 1.02,
                                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                transition: { duration: 0.2 }
                            }}
                        >
                            <h3
                                className="text-2xl font-display font-bold mb-6"
                                style={{ color: 'var(--color-text-primary)' }}
                            >
                                Collaboration Opportunities
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { color: 'var(--color-primary)', text: 'Guest writing and expert contributions' },
                                    { color: 'var(--color-accent)', text: 'Technology partnerships and integrations' },
                                    { color: 'var(--color-success)', text: 'Speaking engagements and conferences' },
                                    { color: 'var(--color-warning)', text: 'Media interviews and expert commentary' },
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        className="flex items-center space-x-3"
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.5 + idx * 0.1, duration: 0.4 }}
                                    >
                                        <motion.div
                                            className="w-2 h-2 rounded-full"
                                            style={{ backgroundColor: item.color }}
                                            whileHover={{ scale: 1.5 }}
                                            transition={{ duration: 0.2 }}
                                        ></motion.div>
                                        <span style={{ color: 'var(--color-text-secondary)' }}>
                                            {item.text}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section >
    );
};

export default ContactFormInfo;

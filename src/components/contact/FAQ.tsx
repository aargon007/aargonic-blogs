import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqData: FAQItem[] = [
        {
            question: "How can I contribute to Aargonic?",
            answer: "We welcome expert contributors! You can submit guest articles, participate in expert interviews, or propose collaboration ideas through our contact form. Our editorial team reviews all submissions and provides feedback within 5-7 business days. We particularly value insights from industry professionals who can share practical experience and cutting-edge knowledge."
        },
        {
            question: "Do you offer consulting services?",
            answer: "Yes, our team provides consulting services in technology strategy, fintech solutions, IoT implementations, and cybersecurity. We work with startups, enterprises, and government organizations to deliver tailored solutions. Our consultants have extensive experience across multiple industries and can help with digital transformation, security audits, and technology roadmap planning."
        },
        {
            question: "Can I republish your content?",
            answer: "We're open to content syndication and republishing agreements. Please reach out with details about your publication, intended use, and audience. We typically require proper attribution and may have specific guidelines depending on the content type. We're especially interested in partnerships that help us reach new audiences in the tech community."
        },
        {
            question: "How often do you publish new content?",
            answer: "We publish new articles weekly across our six core categories: Technology, Fintech, IoT, AI, Hacking/Security, and Acquisition. Premium subscribers get early access to content and exclusive deep-dive analyses. Our editorial calendar is planned months in advance to ensure consistent, high-quality coverage of emerging trends and technologies."
        },
        {
            question: "Do you accept sponsored content?",
            answer: "We maintain editorial independence while selectively partnering with relevant technology companies. All sponsored content is clearly marked and must meet our quality standards. We only promote products and services that align with our readers' interests and our editorial values. Our sponsored content focuses on educational value rather than direct promotion."
        },
        {
            question: "How can I stay updated with your latest content?",
            answer: "You can subscribe to our newsletter, follow us on social media platforms, or enable browser notifications. We also offer RSS feeds for each category, allowing you to customize your content consumption based on your interests. Our newsletter includes exclusive insights, early access to articles, and curated technology news from across the industry."
        }
    ];

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };



    return (
        <section className="py-20 bg-surface">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl lg:text-5xl text-text-primary font-display font-bold mb-8">
                        Frequently Asked Questions
                    </h2>
                    <motion.p
                        className="text-lg text-text-secondary"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        Find answers to common questions about our services, content, and collaboration opportunities.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, staggerChildren: 0.1 }}
                >
                    {faqData.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.3 }}
                            className="overflow-hidden transition-all duration-300"
                            style={{
                                backgroundColor: 'var(--color-surface)',
                                border: '1px solid var(--color-border)',
                                borderRadius: '12px',
                            }}
                        >
                            <AnimatePresence>
                                <motion.button
                                    key="question"
                                    className="w-full p-6 text-left flex items-center justify-between focus:outline-none rounded-t-xl transition-all duration-300"
                                    onClick={() => toggleFAQ(index)}
                                    style={{
                                        backgroundColor: 'var(--color-surface-elevated)',
                                    }}
                                >
                                    <motion.h3
                                        className="text-lg lg:text-xl font-display font-bold pr-4 transition-colors duration-300"
                                        style={{
                                            color: openIndex === index ? 'var(--color-primary)' : 'var(--color-text-primary)'
                                        }}
                                    >
                                        {faq.question}
                                    </motion.h3>

                                    <motion.div
                                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                                        style={{
                                            backgroundColor: openIndex === index ? 'var(--color-primary)' : 'var(--color-primary-light)'
                                        }}
                                        animate={{
                                            rotate: openIndex === index ? 180 : 0
                                        }}
                                        transition={{ duration: 0.3 }}
                                        whileHover={{ scale: 1.1 }}
                                    >
                                        <svg
                                            className="w-4 h-4 transition-colors duration-300"
                                            style={{ color: openIndex === index ? 'white' : 'var(--color-primary)' }}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2.5}
                                                d="M19 9l-7 7-7-7"
                                            />
                                        </svg>
                                    </motion.div>
                                </motion.button>

                                {openIndex === index && (
                                    <motion.div
                                        key="answer"
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{
                                            opacity: 1,
                                            height: 'auto',
                                            transition: {
                                                height: { duration: 0.4 },
                                                opacity: { delay: 0.1, duration: 0.3 }
                                            }
                                        }}
                                        exit={{
                                            opacity: 0,
                                            height: 0,
                                            transition: {
                                                height: { delay: 0.1, duration: 0.3 },
                                                opacity: { duration: 0.2 }
                                            }
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <motion.div
                                            className="pb-6"
                                            style={{
                                                background: 'linear-gradient(180deg, var(--color-surface) 0%, var(--color-surface-elevated) 100%)'
                                            }}
                                            initial={{ y: -10 }}
                                            animate={{ y: 0 }}
                                            transition={{ delay: 0.2, duration: 0.3 }}
                                        >
                                            <motion.div
                                                className="w-full h-px mb-4 rounded"
                                                style={{
                                                    background: 'linear-gradient(90deg, var(--color-primary), var(--color-accent))'
                                                }}
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                transition={{ delay: 0.3, duration: 0.4 }}
                                            />

                                            <motion.p
                                                className="px-4 text-text-secondary text-base leading-relaxed"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4, duration: 0.4 }}
                                            >
                                                {faq.answer}
                                            </motion.p>
                                        </motion.div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <motion.div
                        className="inline-block p-8 rounded-2xl relative overflow-hidden"
                        style={{
                            background: 'linear-gradient(135deg, var(--color-surface), var(--color-surface-elevated))',
                            border: '1px solid var(--color-border)',
                        }}
                    >
                        <motion.p
                            className="text-lg mb-6"
                            style={{ color: 'var(--color-text-secondary)' }}
                        >
                            Still have questions? We're here to help!
                        </motion.p>

                        <a
                            href="#contact-form"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-xl transition-all duration-300"
                            style={{
                                background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
                                color: 'white',
                            }}
                            onClick={(e) => {
                                e.preventDefault();
                                const contactForm = document.querySelector('input[name="firstName"]') as HTMLInputElement;
                                if (contactForm) {
                                    contactForm.scrollIntoView({ behavior: 'smooth' });
                                    setTimeout(() => contactForm.focus(), 500);
                                }
                            }}
                        >
                            <span className="mr-2">
                                Contact Us
                            </span>
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                            </svg>
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;
import React from 'react';

const ContactHero = () => {
    return (
        <section
            className="relative py-24 overflow-hidden"
            style={{
                background: `linear-gradient(135deg, var(--color-background) 0%, var(--color-surface-elevated) 50%, var(--color-accent-light) 100%)`,
            }}
        >
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-56 h-56 bg-accent opacity-30 rounded-full" />
                <div className="absolute bottom-20 right-20 w-72 h-72 bg-primary rounded-full opacity-20"/>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
                    <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-8 text-balance text-text-primary">
                        Get in <span className="gradient-text">Touch</span>
                    </h1>
                    <p className="text-xl mb-12 text-pretty text-text-secondary">
                        Have a question, partnership idea, or just want to say hello?
                        We'd love to hear from you and explore how we can work together.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ContactHero;
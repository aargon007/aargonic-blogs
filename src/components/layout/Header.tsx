"use client"

import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { SITE_CONFIG } from "../../lib/constants"
import ThemeToggle from "../ui/ThemeToggle"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");

    const navigation = [
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog" },
        { name: "Categories", href: "/blog/categories" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className="bg-surface border-border shadow-sm backdrop-blur-md border-b transition-all duration-300"
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center group">
                            <img
                                className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                                src={theme === "light" ? "/logo-dark.png" : "/logo.png"}
                                alt={SITE_CONFIG.name}
                                onError={(e) => {
                                    e.currentTarget.style.display = "none"
                                    e.currentTarget.nextElementSibling?.classList.remove("hidden")
                                }}
                            />
                            <span
                                className="hidden ml-3 text-2xl text-text-primary font-display font-bold transition-colors duration-300"
                            >
                                {SITE_CONFIG.name}
                            </span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navigation.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="px-4 py-2 bg-transparent hover:bg-surface-elevated text-text-secondary hover:text-text-primary text-sm font-medium rounded-xl transition-all duration-300 hover:scale-105"
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="ml-4">
                            <ThemeToggle
                                theme={theme}
                                setTheme={setTheme}
                            />
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <ThemeToggle
                            theme={theme}
                            setTheme={setTheme}
                        />
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="bg-surface-elevated text-text-secondary p-2 rounded-xl transition-all duration-300 focus:outline-none"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? (
                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden animate-fade-in">
                        <div
                            className="bg-surface-elevated border border-border px-2 pt-2 pb-6 space-y-2 rounded-2xl mt-4 mb-4"
                        >
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block px-4 py-3 bg-transparent hover:bg-primary-light text-text-secondary hover:text-text-primary text-base font-medium rounded-xl transition-all duration-300"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}

"use client"

import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"
import { SITE_CONFIG } from "../../lib/constants"
import ThemeToggle from "../ui/ThemeToggle"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const system =
        typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light"

    const navigation = [
        { name: "Home", href: "/" },
        { name: "Blog", href: "/blog" },
        { name: "Categories", href: "/blog/categories" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ]

    console.log(system);
    

    return (
        <header
            className="backdrop-blur-md border-b transition-all duration-300"
            style={{
                backgroundColor: "var(--color-surface)",
                borderColor: "var(--color-border)",
                boxShadow: "var(--shadow-sm)",
            }}
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center group">
                            <img
                                className="h-10 hidden dark:block w-auto transition-transform duration-300 group-hover:scale-105"
                                src="/logo.png"
                                alt={SITE_CONFIG.name}
                                onError={(e) => {
                                    e.currentTarget.style.display = "none"
                                    e.currentTarget.nextElementSibling?.classList.remove("hidden")
                                }}
                            />
                            <img
                                className="h-10 dark:hidden w-auto transition-transform duration-300 group-hover:scale-105"
                                src="/logo-dark.png"
                                alt={SITE_CONFIG.name}
                                onError={(e) => {
                                    e.currentTarget.style.display = "none"
                                    e.currentTarget.nextElementSibling?.classList.remove("hidden")
                                }}
                            />
                            <span
                                className="hidden ml-3 text-2xl font-bold transition-colors duration-300"
                                style={{
                                    fontFamily: "var(--font-display)",
                                    color: "var(--color-text-primary)",
                                }}
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
                                className="px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 hover:scale-105"
                                style={{
                                    color: "var(--color-text-secondary)",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = "var(--color-surface-elevated)"
                                    e.currentTarget.style.color = "var(--color-text-primary)"
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = "transparent"
                                    e.currentTarget.style.color = "var(--color-text-secondary)"
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="ml-4">
                            <ThemeToggle />
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <ThemeToggle />
                        <button
                            type="button"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
                            style={{
                                color: "var(--color-text-secondary)",
                                backgroundColor: "var(--color-surface-elevated)",
                            }}
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
                            className="px-2 pt-2 pb-6 space-y-2 rounded-2xl mt-4 mb-4"
                            style={{
                                backgroundColor: "var(--color-surface-elevated)",
                                border: "1px solid var(--color-border)",
                            }}
                        >
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300"
                                    style={{ color: "var(--color-text-secondary)" }}
                                    onClick={() => setIsMenuOpen(false)}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = "var(--color-primary-light)"
                                        e.currentTarget.style.color = "var(--color-primary)"
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = "transparent"
                                        e.currentTarget.style.color = "var(--color-text-secondary)"
                                    }}
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

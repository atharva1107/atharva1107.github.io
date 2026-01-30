import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const navLinks = [
        { name: 'Home', id: 'hero' },
        { name: 'Experience', id: 'experience' },
        { name: 'Skills', id: 'skills' },
        { name: 'Education', id: 'education' },
        { name: 'Certifications', id: 'certifications' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    padding: scrolled ? '1rem 2rem' : '2rem',
                    backgroundColor: scrolled ? 'var(--nav-bg-scrolled)' : 'transparent',
                    backdropFilter: scrolled ? 'blur(10px)' : 'none',
                    borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    transition: 'all 0.3s'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    {/* Desktop Links */}
                    <div className="desktop-links" style={{ display: 'flex', gap: '1.5rem' }}>
                        {navLinks.map((link) => (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.id)}
                                style={{
                                    color: 'var(--text-secondary)',
                                    fontSize: '0.95rem',
                                    fontWeight: '500',
                                    transition: 'color 0.3s',
                                    cursor: 'pointer'
                                }}
                                onMouseOver={(e) => e.target.style.color = 'var(--accent-primary)'}
                                onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    <ThemeToggle />

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        style={{
                            display: 'none',
                            color: 'var(--text-primary)',
                            zIndex: 60,
                            position: 'relative'
                        }}
                    >
                        <div style={{
                            width: '24px',
                            height: '2px',
                            backgroundColor: 'currentColor',
                            marginBottom: '6px',
                            transition: 'all 0.3s',
                            transform: isMenuOpen ? 'rotate(45deg) translate(5px, 6px)' : 'none'
                        }} />
                        <div style={{
                            width: '24px',
                            height: '2px',
                            backgroundColor: 'currentColor',
                            marginBottom: '6px',
                            opacity: isMenuOpen ? 0 : 1,
                            transition: 'all 0.3s'
                        }} />
                        <div style={{
                            width: '24px',
                            height: '2px',
                            backgroundColor: 'currentColor',
                            transition: 'all 0.3s',
                            transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -6px)' : 'none'
                        }} />
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Portal */}
            {createPortal(
                <AnimatePresence>
                    {isMenuOpen && (
                        <>
                            {/* Backdrop Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    position: 'fixed',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                    backdropFilter: 'blur(4px)',
                                    zIndex: 98
                                }}
                            />

                            {/* Drawer */}
                            <motion.div
                                initial={{ opacity: 0, x: '100%' }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: '100%' }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                style={{
                                    position: 'fixed',
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    width: '75%',
                                    maxWidth: '300px',
                                    backgroundColor: 'var(--nav-bg-scrolled)',
                                    backdropFilter: 'blur(10px)',
                                    padding: '6rem 2rem 2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '2rem',
                                    boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
                                    zIndex: 99,
                                    borderLeft: '1px solid rgba(255,255,255,0.05)',
                                    overflowY: 'auto'
                                }}
                            >
                                {navLinks.map((link) => (
                                    <button
                                        key={link.name}
                                        onClick={() => scrollToSection(link.id)}
                                        style={{
                                            color: 'var(--text-primary)',
                                            fontSize: '1.25rem',
                                            fontWeight: '600',
                                            textAlign: 'left',
                                            padding: '0.5rem 0',
                                            borderBottom: '1px solid rgba(255,255,255,0.05)'
                                        }}
                                    >
                                        {link.name}
                                    </button>
                                ))}
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
};

export default Navbar;

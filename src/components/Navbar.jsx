import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
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

            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
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
                        className="nav-link"
                        onMouseOver={(e) => e.target.style.color = 'var(--accent-primary)'}
                        onMouseOut={(e) => e.target.style.color = 'var(--text-secondary)'}
                    >
                        {link.name}
                    </button>
                ))}
                <ThemeToggle />
            </div>
        </motion.nav>
    );
};

export default Navbar;

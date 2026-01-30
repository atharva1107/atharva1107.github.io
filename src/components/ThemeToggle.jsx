import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const ThemeToggle = ({ style }) => {
    const [isDark, setIsDark] = useState(true);

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (savedTheme === 'light' || (!savedTheme && !prefersDark)) {
            setIsDark(false);
            document.documentElement.classList.add('light-mode');
        } else {
            setIsDark(true);
            document.documentElement.classList.remove('light-mode');
        }
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);

        if (newIsDark) {
            document.documentElement.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                backgroundColor: 'transparent',
                border: '1px solid var(--text-secondary)',
                color: 'var(--text-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                ...style
            }}
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: isDark ? 0 : 180 }}
                transition={{ duration: 0.3 }}
            >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </motion.div>
        </motion.button>
    );
};

export default ThemeToggle;

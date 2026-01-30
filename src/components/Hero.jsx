import { motion } from 'framer-motion';
import { ArrowDown, Linkedin, Instagram } from 'lucide-react';

const XIcon = () => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
    </svg>
);

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: '4rem 2rem',
            position: 'relative'
        }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                style={{ marginBottom: '2rem' }}
            >
                <div style={{
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '4px solid var(--accent-secondary)',
                    boxShadow: '0 0 20px rgba(129, 140, 248, 0.3)'
                }}>
                    <img
                        src="/profile.jpg"
                        alt="Atharva Raibagi"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <h1 style={{
                    fontSize: 'clamp(3rem, 10vw, 6rem)',
                    fontWeight: '900',
                    background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '1rem'
                }}>
                    Hi, I'm Atharva.
                </h1>
                <h2 style={{
                    fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                    color: 'var(--text-secondary)',
                    marginBottom: '2rem'
                }}>
                    I work on AI.
                </h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    style={{
                        display: 'flex',
                        gap: '1.5rem',
                        justifyContent: 'center',
                        marginBottom: '3rem'
                    }}
                >
                    <a href="https://www.linkedin.com/in/atharvaraibagi/" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
                        <Linkedin size={28} />
                    </a>
                    <a href="https://www.instagram.com/atharvaraibagi/?hl=en" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
                        <Instagram size={28} />
                    </a>
                    <a href="https://x.com/AtharvaRaibagi" target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
                        <XIcon />
                    </a>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                    style={{
                        maxWidth: '600px',
                        margin: '0 auto',
                        fontSize: '1.2rem',
                        lineHeight: '1.6',
                        color: 'var(--text-primary)'
                    }}
                >
                    Welcome to my personal website. Scroll down to see my experience and skills.
                </motion.p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                    color: 'var(--text-secondary)'
                }}
            >
                <span>Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <ArrowDown />
                </motion.div>
            </motion.div>
        </section>
    );
};

const socialLinkStyle = {
    color: 'var(--text-secondary)',
    transition: 'all 0.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0.5rem',
    borderRadius: '50%',
    backgroundColor: 'rgba(255,255,255,0.05)'
};

export default Hero;

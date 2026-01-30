import { motion } from 'framer-motion';

const Background = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            overflow: 'hidden',
            background: 'var(--bg-color)'
        }}>
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 90, 0]
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    top: '-10%',
                    left: '-10%',
                    width: '50vw',
                    height: '50vw',
                    background: 'radial-gradient(circle, var(--accent-primary) 0%, transparent 70%)',
                    filter: 'blur(80px)',
                    opacity: 0.3
                }}
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, 100, 0]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '-10%',
                    width: '40vw',
                    height: '40vw',
                    background: 'radial-gradient(circle, var(--accent-secondary) 0%, transparent 70%)',
                    filter: 'blur(100px)',
                    opacity: 0.2
                }}
            />
        </div>
    );
};

export default Background;

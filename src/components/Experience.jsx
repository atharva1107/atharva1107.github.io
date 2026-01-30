import { motion } from 'framer-motion';

const Experience = ({ data }) => {
    return (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem' }}>
            <h2 style={{
                fontSize: 'clamp(2rem, 5vw, 2.5rem)',
                marginBottom: '3rem',
                textAlign: 'center',
                color: 'var(--accent-primary)'
            }}>
                Experience
            </h2>

            <div style={{ position: 'relative', borderLeft: '2px solid var(--text-secondary)', paddingLeft: '2rem' }}>
                {data.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        style={{ marginBottom: '4rem', position: 'relative' }}
                    >
                        {/* Dot on timeline */}
                        <div style={{
                            position: 'absolute',
                            left: '-2.6rem',
                            top: '0.5rem',
                            width: '1rem',
                            height: '1rem',
                            borderRadius: '50%',
                            backgroundColor: 'var(--accent-secondary)'
                        }} />

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1rem' }}>
                            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{item.role}</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                                <h4 style={{ color: 'var(--accent-primary)', fontWeight: '600' }}>{item.company}</h4>
                                <span style={{ color: 'var(--text-secondary)' }}>•</span>
                                <span style={{ color: 'var(--text-secondary)' }}>{item.location}</span>
                            </div>
                            <span style={{
                                display: 'inline-block',
                                padding: '0.25rem 0.75rem',
                                backgroundColor: 'rgba(56, 189, 248, 0.1)',
                                color: 'var(--accent-primary)',
                                borderRadius: '1rem',
                                fontSize: '0.875rem',
                                width: 'fit-content'
                            }}>
                                {item.period}
                            </span>
                        </div>

                        <ul style={{
                            listStyle: 'none',
                            color: 'var(--text-secondary)',
                            lineHeight: '1.7',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '0.75rem'
                        }}>
                            {Array.isArray(item.description) ? item.description.map((desc, i) => (
                                <li key={i} style={{ display: 'flex', gap: '0.75rem' }}>
                                    <span style={{ color: 'var(--accent-secondary)', marginTop: '0.4rem' }}>▹</span>
                                    <span>{desc}</span>
                                </li>
                            )) : (
                                <li>{item.description}</li>
                            )}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Experience;

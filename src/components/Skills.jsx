import { motion } from 'framer-motion';

const Skills = ({ data }) => {
    return (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem' }}>
            <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '4rem',
                textAlign: 'center',
                color: 'var(--accent-primary)'
            }}>
                Skills
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                {data.map((categoryGroup, index) => (
                    <motion.div
                        key={categoryGroup.category}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 style={{
                            fontSize: '1.5rem',
                            marginBottom: '1.5rem',
                            color: 'var(--text-primary)',
                            borderBottom: '1px solid var(--text-secondary)',
                            paddingBottom: '0.5rem',
                            display: 'inline-block'
                        }}>
                            {categoryGroup.category}
                        </h3>

                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '1rem',
                        }}>
                            {categoryGroup.items.map((skill, i) => (
                                <motion.div
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    whileHover={{ scale: 1.05, backgroundColor: 'var(--accent-primary)', color: '#0f172a' }}
                                    style={{
                                        padding: '0.6rem 1.2rem',
                                        border: '1px solid var(--accent-secondary)',
                                        borderRadius: '2rem',
                                        cursor: 'default',
                                        fontWeight: '500',
                                        transition: 'all 0.3s',
                                        fontSize: '0.95rem'
                                    }}
                                >
                                    {skill}
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;

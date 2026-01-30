import { motion } from 'framer-motion';

const Education = ({ data }) => {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
            <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '3rem',
                textAlign: 'center',
                color: 'var(--accent-primary)'
            }}>
                Education
            </h2>

            <div style={{ display: 'grid', gap: '2rem' }}>
                {data.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        style={{
                            padding: '2rem',
                            backgroundColor: 'rgba(255,255,255,0.03)',
                            borderRadius: '1rem',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}
                    >
                        <div style={{ marginBottom: '0.5rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{item.degree}</h3>
                            {item.honors && (
                                <div style={{
                                    fontSize: '0.9rem',
                                    color: 'var(--accent-primary)',
                                    fontStyle: 'italic',
                                    fontWeight: '500'
                                }}>
                                    {item.honors}
                                </div>
                            )}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
                            <h4 style={{ color: 'var(--accent-secondary)' }}>{item.school}</h4>
                            <span style={{ color: 'var(--text-secondary)' }}>{item.location}</span>
                        </div>
                        <span style={{ color: 'var(--text-secondary)', marginTop: '0.5rem', display: 'block' }}>{item.year}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Education;

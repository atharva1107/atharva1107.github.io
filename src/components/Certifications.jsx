import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = ({ data }) => {
    return (
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '4rem 2rem' }}>
            <h2 style={{
                fontSize: '2.5rem',
                marginBottom: '4rem',
                textAlign: 'center',
                color: 'var(--accent-primary)'
            }}>
                Certifications
            </h2>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '2rem'
            }}>
                {data.map((cert, index) => (
                    <motion.a
                        key={cert.name}
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        whileHover={{ scale: 1.05, translateY: -5 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            padding: '2rem',
                            backgroundColor: 'rgba(255,255,255,0.03)',
                            borderRadius: '1rem',
                            border: '1px solid rgba(255,255,255,0.05)',
                            textDecoration: 'none',
                            textAlign: 'center',
                            gap: '1rem',
                            transition: 'all 0.3s'
                        }}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            backgroundColor: 'rgba(56, 189, 248, 0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--accent-primary)',
                            marginBottom: '0.5rem'
                        }}>
                            <Award size={32} />
                        </div>

                        <h3 style={{
                            fontSize: '1.1rem',
                            color: 'var(--text-primary)',
                            fontWeight: '600',
                            lineHeight: '1.4'
                        }}>
                            {cert.name}
                        </h3>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            fontSize: '0.875rem',
                            color: 'var(--text-secondary)',
                            marginTop: 'auto'
                        }}>
                            <span>{cert.platform}</span>
                            <ExternalLink size={14} />
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Certifications;

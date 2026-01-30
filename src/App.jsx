import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import ThemeToggle from './components/ThemeToggle';
import { experience, skills, education, certifications } from './data';

function App() {
  return (
    <div className="app-container">
      <ThemeToggle />
      <main>
        <Hero />
        <Experience data={experience} />
        <Skills data={skills} />
        <Education data={education} />
        <Certifications data={certifications} />

        {/* Footer */}

        <footer style={{
          textAlign: 'center',
          padding: '4rem 2rem 2rem',
          color: 'var(--text-secondary)',
          fontSize: '0.875rem',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          marginTop: '4rem'
        }}>
          <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:atharvaraibagi@gmail.com" style={{ color: 'var(--accent-primary)' }}>atharvaraibagi@gmail.com</a>
            <span>•</span>
            <a href="https://linkedin.com/in/atharvaraibagi" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-primary)' }}>LinkedIn</a>
            <span>•</span>
            <span>Austin, TX</span>
          </div>
          <p>&copy; {new Date().getFullYear()} Atharva Raibagi.</p>
        </footer>
      </main>
    </div>
  )
}

export default App

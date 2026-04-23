import FadeIn from './FadeIn';
import {info} from '../lib/data';

export default function Stack() {
  return (
    <section
      id="stack"
      className="section-pad section-pad-top"
      style={{padding: '100px 24px 80px', maxWidth: 1000, margin: '0 auto'}}>
      <FadeIn>
        <div className="section-label" style={{marginBottom: 16}}>
          Tech Stack
        </div>
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            lineHeight: 1.15,
            color: 'var(--text)',
            marginBottom: 36,
          }}>
          Tools I work with
        </h2>
      </FadeIn>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: 12,
        }}>
        {Object.entries(info.techStack).map(([category, skills], i) => (
          <FadeIn key={category} delay={i * 0.07}>
            <div className="card" style={{padding: '20px 24px', height: '100%'}}>
              <div
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent)',
                  marginBottom: 12,
                }}>
                {category}
              </div>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: 6}}>
                {skills.map((skill: string) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

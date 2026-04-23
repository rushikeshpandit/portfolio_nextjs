import FadeIn from './FadeIn';
import {info} from '../lib/data';

export default function About() {
  return (
    <section
      id="about"
      className="section-pad section-pad-top"
      style={{padding: '100px 24px 80px', maxWidth: 1000, margin: '0 auto'}}>
      <FadeIn>
        <div className="section-label" style={{marginBottom: 16}}>
          About
        </div>
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            lineHeight: 1.15,
            color: 'var(--text)',
            marginBottom: 24,
            maxWidth: 600,
          }}>
          Building mobile experiences that matter
        </h2>
        <p
          style={{
            color: 'var(--text-muted)',
            lineHeight: 1.85,
            fontSize: '0.9375rem',
            maxWidth: 680,
          }}>
          {info.bio}
        </p>
      </FadeIn>
    </section>
  );
}

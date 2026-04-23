'use client';

import {useRef, useState} from 'react';
import FadeIn from './FadeIn';
import {info} from '../lib/data';

type WorkEntry = {
  id: number;
  isWork: true;
  company: string;
  designation: string;
  location: string;
  duration: string;
  responsibilities: string[];
  award?: string;
};

type EduEntry = {
  id: number;
  isWork: false;
  degree: string;
  college: string;
  university: string;
  duration: string;
  achievements: string[];
};

type Entry = WorkEntry | EduEntry;

/* ── Animated accordion card ── */
function WorkCard({entry, index}: {entry: WorkEntry; index: number}) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  const toggle = () => {
    const body = bodyRef.current;
    if (!body) return;

    if (!open) {
      // expanding: set max-height to scrollHeight so CSS transition can animate
      body.style.maxHeight = body.scrollHeight + 'px';
    } else {
      // collapsing: snap back to scrollHeight first (in case it was "none"), then 0
      body.style.maxHeight = body.scrollHeight + 'px';
      // force reflow so transition fires
      void body.offsetHeight;
      body.style.maxHeight = '0px';
    }
    setOpen(v => !v);
  };

  return (
    <FadeIn delay={index * 0.05}>
      <div className="card" style={{overflow: 'hidden'}}>
        {/* ── Header (always visible) ── */}
        <div
          className="exp-card__header"
          onClick={toggle}
          role="button"
          aria-expanded={open}
          tabIndex={0}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggle();
            }
          }}>
          {/* Left: company + role */}
          <div
            className="exp-meta"
            style={{display: 'flex', alignItems: 'flex-start', gap: 16, flex: 1, flexWrap: 'wrap'}}>
            <div style={{flex: 1, minWidth: 0}}>
              <div
                className="font-display"
                style={{
                  fontSize: '1.0625rem',
                  fontWeight: 700,
                  color: 'var(--text)',
                  letterSpacing: '-0.01em',
                  marginBottom: 2,
                }}>
                {entry.company}
              </div>
              <div style={{fontSize: '0.875rem', color: 'var(--accent)', fontWeight: 500}}>{entry.designation}</div>
            </div>

            {/* Right: duration + location */}
            <div className="exp-meta-right" style={{textAlign: 'right', flexShrink: 0}}>
              <div style={{fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: 2}}>{entry.duration}</div>
              <div style={{fontSize: '0.75rem', color: 'var(--text-dim)'}}>{entry.location}</div>
            </div>
          </div>

          {/* Chevron */}
          <div className={open ? 'exp-card__chevron exp-card__chevron--open' : 'exp-card__chevron'} aria-hidden="true">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </div>
        </div>

        {/* ── Body (collapsible) ── */}
        <div
          ref={bodyRef}
          className={open ? 'exp-card__body exp-card__body--open' : 'exp-card__body'}
          style={{maxHeight: 0}}
          aria-hidden={!open}>
          <div className="exp-card__body-inner">
            <ul style={{listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10, paddingTop: 4}}>
              {entry.responsibilities.map((r, ri) => (
                <li
                  key={ri}
                  style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'flex-start',
                    fontSize: '0.875rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.65,
                  }}>
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: '50%',
                      background: 'var(--accent)',
                      marginTop: 8,
                      flexShrink: 0,
                    }}
                  />
                  {r}
                </li>
              ))}
            </ul>

            {entry.award && (
              <div
                style={{
                  marginTop: 16,
                  padding: '10px 14px',
                  borderRadius: 8,
                  background: 'oklch(76% 0.177 163.223 / 0.06)',
                  border: '1px solid oklch(76% 0.177 163.223 / 0.2)',
                  fontSize: '0.8125rem',
                  color: 'var(--green)',
                  display: 'flex',
                  gap: 8,
                  alignItems: 'flex-start',
                }}>
                <span>🏆</span>
                {entry.award}
              </div>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

/* ── Main section ── */
export default function Experience() {
  const experience = info.experience as Entry[];

  const workEntries = experience.filter((e): e is WorkEntry => e.isWork);
  const eduEntries = experience.filter((e): e is EduEntry => !e.isWork);

  return (
    <section
      id="experience"
      className="section-pad section-pad-top"
      style={{padding: '100px 24px', maxWidth: 1000, margin: '0 auto'}}>
      {/* Heading */}
      <FadeIn>
        <div className="section-label" style={{marginBottom: 16}}>
          Experience
        </div>
        <h2
          className="font-display"
          style={{
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            lineHeight: 1.15,
            color: 'var(--text)',
            marginBottom: 48,
          }}>
          Where I&apos;ve worked
        </h2>
      </FadeIn>

      {/* Work cards */}
      <div style={{display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 64}}>
        {workEntries.map((entry, i) => (
          <WorkCard key={entry.id} entry={entry} index={i} />
        ))}
      </div>

      {/* Education */}
      <FadeIn>
        <div className="section-label" style={{marginBottom: 24}}>
          Education
        </div>
      </FadeIn>
      <div className="edu-grid" style={{display: 'flex', gap: 14, flexWrap: 'wrap'}}>
        {eduEntries.map((entry, i) => (
          <FadeIn key={entry.degree} delay={i * 0.08}>
            <div className="card" style={{padding: '24px 28px', flex: 1, minWidth: 260}}>
              <div
                className="font-display"
                style={{fontSize: '0.9375rem', fontWeight: 700, color: 'var(--text)', marginBottom: 4}}>
                {entry.degree}
              </div>
              <div style={{fontSize: '0.8125rem', color: 'var(--accent)', marginBottom: 2}}>{entry.college}</div>
              <div style={{fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: 16}}>
                {entry.university} · {entry.duration}
              </div>
              {entry.achievements.map((a, ai) => (
                <div
                  key={ai}
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--text-muted)',
                    display: 'flex',
                    gap: 8,
                    alignItems: 'flex-start',
                    marginBottom: 6,
                  }}>
                  <span style={{color: 'var(--accent)'}}>✦</span>
                  {a}
                </div>
              ))}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

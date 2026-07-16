import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import styles from './index.module.css';

// The landing hub. This is a HUB, not a book: it presents every course as an
// equal peer. The card list is DERIVED from `customFields.courses` in
// docusaurus.config.ts (the same COURSES source of truth the navbar and search
// use) — add a course there and a card appears here automatically, no edit
// needed in this file.
//
// Internal `to` links are baseUrl- AND locale-aware (Docusaurus prefixes the
// active locale onto baseUrl), so `/rag-agents/` resolves to `/ru/rag-agents/`
// on the Russian landing page, `/sk/rag-agents/` on the Slovak one, etc. The
// landing COPY itself is English for now (i18n of the hub prose is a follow-up).
type LandingCourse = {
  basePath: string;
  label: string;
  blurb: string;
  languages: string[];
  live: boolean;
};

function CourseCard({course}: {course: LandingCourse}): ReactNode {
  const href = `${course.basePath}/`;
  const body = (
    <>
      <div className={styles.cardHead}>
        <h2 className={styles.cardTitle}>{course.label}</h2>
        <span
          className={course.live ? styles.badgeLive : styles.badgeSoon}
          aria-label={course.live ? 'Available now' : 'In progress'}>
          {course.live ? 'Live' : 'In progress'}
        </span>
      </div>
      <p className={styles.cardBlurb}>{course.blurb}</p>
      <div className={styles.cardMeta}>
        <span className={styles.langs}>{course.languages.join(' · ')}</span>
        {course.live && <span className={styles.cta}>Open course →</span>}
      </div>
    </>
  );

  // Live courses are clickable cards; an in-progress course is shown as a
  // non-interactive card (its content is a placeholder) so the hub never sends a
  // reader to an empty page.
  return course.live ? (
    <Link to={href} className={`${styles.card} ${styles.cardLive}`}>
      {body}
    </Link>
  ) : (
    <div className={`${styles.card} ${styles.cardSoon}`} aria-disabled="true">
      {body}
    </div>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const courses = (siteConfig.customFields?.courses ?? []) as LandingCourse[];

  return (
    <Layout
      title="AI Engineering Handbook"
      description="A hub of first-principles courses on production AI engineering — RAG, agents, and the AI-assisted software development lifecycle.">
      <main className={styles.hub}>
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>AI Engineering Handbook</h1>
          <p className={styles.heroTagline}>
            First-principles courses on building AI systems that hold up in
            production — the <em>why</em> and the failure modes, not just a
            feature list.
          </p>
        </header>

        <section className={styles.courseGrid} aria-label="Courses">
          {courses.map((course) => (
            <CourseCard key={course.basePath} course={course} />
          ))}
        </section>
      </main>
    </Layout>
  );
}

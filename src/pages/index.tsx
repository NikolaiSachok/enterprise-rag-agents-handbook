import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Translate, {translate} from '@docusaurus/Translate';
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
// on the Russian landing page, `/sk/rag-agents/` on the Slovak one, etc.
//
// The hub COPY is localized: static strings via <Translate>/translate(), and
// the per-course badge, CTA, and blurb via translate() keyed by an explicit id.
// The blurb id is derived from the course basePath (`landing.course.<slug>.blurb`)
// so a new course in COURSES only needs its blurb string added to each locale's
// code.json — matching the "one source of truth" spirit of the card list. A
// course LABEL stays as-authored (product names like "RAG & Agents" / "AI SDLC"
// are proper nouns, not translated); the LANGUAGES list uses each language's own
// endonym, which reads correctly in every locale, so it isn't translated either.
type LandingCourse = {
  basePath: string;
  label: string;
  blurb: string;
  languages: string[];
  live: boolean;
};

function CourseCard({course}: {course: LandingCourse}): ReactNode {
  const href = `${course.basePath}/`;
  const slug = course.basePath.replace(/^\//, '');

  const badgeLabel = course.live
    ? translate({id: 'landing.badge.live', message: 'Live'})
    : translate({id: 'landing.badge.inProgress', message: 'In progress'});
  const badgeAria = course.live
    ? translate({id: 'landing.badge.live.aria', message: 'Available now'})
    : translate({id: 'landing.badge.inProgress.aria', message: 'In progress'});
  const cta = course.live
    ? translate({id: 'landing.cta.open', message: 'Open course →'})
    : translate({id: 'landing.cta.plan', message: 'View the plan →'});
  // Blurb id is derived from the course slug so each course carries its own key
  // in the per-locale code.json; the English default lives in the config.
  const blurb = translate(
    {id: `landing.course.${slug}.blurb`, message: course.blurb},
  );

  const body = (
    <>
      <div className={styles.cardHead}>
        <h2 className={styles.cardTitle}>{course.label}</h2>
        <span
          className={course.live ? styles.badgeLive : styles.badgeSoon}
          aria-label={badgeAria}>
          {badgeLabel}
        </span>
      </div>
      <p className={styles.cardBlurb}>{blurb}</p>
      <div className={styles.cardMeta}>
        <span className={styles.langs}>{course.languages.join(' · ')}</span>
        <span className={styles.cta}>{cta}</span>
      </div>
    </>
  );

  // Every course card is clickable. A course in progress still has a real
  // syllabus — lesson titles plus what each one covers — worth reading. The badge
  // (Live vs In progress) is what tells the reader how complete it is.
  return (
    <Link to={href} className={styles.card}>
      {body}
    </Link>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const courses = (siteConfig.customFields?.courses ?? []) as LandingCourse[];

  return (
    <Layout
      title="AI Engineering Handbook"
      description={translate({
        id: 'landing.meta.description',
        message:
          'A hub of first-principles courses on production AI engineering — RAG, agents, and the AI-assisted software development lifecycle.',
      })}>
      <main className={styles.hub}>
        <header className={styles.hero}>
          <h1 className={styles.heroTitle}>AI Engineering Handbook</h1>
          <p className={styles.heroTagline}>
            <Translate
              id="landing.hero.tagline"
              values={{
                why: (
                  <em>
                    <Translate id="landing.hero.tagline.why">why</Translate>
                  </em>
                ),
              }}>
              {
                'First-principles courses on building AI systems that hold up in production — the {why} and the failure modes, not just a feature list.'
              }
            </Translate>
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

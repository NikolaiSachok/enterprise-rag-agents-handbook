/**
 * Swizzled (ejected) BlogListPage.
 *
 * Identical to the theme-classic original, with ONE addition: a standing,
 * always-present note at the top of the blog index that states plainly why the
 * "Field notes" blog is English-only. The curriculum ships in EN/RU/SK, but this
 * informal, first-person register is exactly where automated translation shows its
 * seams worst — and that limitation is itself one of the things the blog is about.
 * We turn the constraint into credibility instead of hiding or over-apologising for
 * it (see the making-of brief §3).
 *
 * The note renders only on the FIRST page of the list (metadata.page === 1) so it
 * doesn't repeat on paginated pages. It lives inside <BlogLayout> so it sits in the
 * content column, below the navbar — a plain wrapper of the original renders a full
 * page and would push content above the chrome.
 *
 * Kept deliberately minimal so it survives Docusaurus upgrades: if the upstream
 * component changes, only this thin content function needs reconciling.
 */
import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import BlogPostItems from '@theme/BlogPostItems';
import BlogListPageStructuredData from '@theme/BlogListPage/StructuredData';
import Admonition from '@theme/Admonition';
import type {Props} from '@theme/BlogListPage';

function BlogListPageMetadata(props: Props): ReactNode {
  const {metadata} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function EnglishOnlyNote(): ReactNode {
  return (
    <Admonition type="note" title="These field notes are English-only — on purpose">
      <p>
        The handbook's lessons ship in English, Russian and Slovak. These field notes
        don't. I haven't yet gotten automated translation of <em>informal</em> prose to
        a bar I'd publish under my name, and this loose, first-person register is exactly
        where machine translation shows its seams worst — the calques, the flattened
        idioms, the disclaimers that stop making sense in another language. Getting that
        bar right is one of the things this blog is about. Until it clears, the field
        notes stay in one language.
      </p>
    </Admonition>
  );
}

function BlogListPageContent(props: Props): ReactNode {
  const {metadata, items, sidebar} = props;
  const isFirstPage = (metadata.page ?? 1) === 1;
  return (
    <BlogLayout sidebar={sidebar}>
      {isFirstPage && <EnglishOnlyNote />}
      <BlogPostItems items={items} />
      <BlogListPaginator metadata={metadata} />
    </BlogLayout>
  );
}

export default function BlogListPage(props: Props): ReactNode {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageStructuredData {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}

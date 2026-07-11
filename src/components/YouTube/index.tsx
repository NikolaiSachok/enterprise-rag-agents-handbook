import React from 'react';
import styles from './styles.module.css';

type YouTubeProps = {
  /** YouTube video id — the part after `v=`, e.g. "wgfSDrqYMJ4". */
  id: string;
  /** Accessible title, announced to screen readers. */
  title?: string;
};

/**
 * Inline, privacy-friendly YouTube player used across the handbook.
 *
 * - `youtube-nocookie.com`: no tracking cookies are set until the reader hits play.
 * - `loading="lazy"`: the iframe is fetched only when scrolled near the viewport,
 *   so several videos on one page don't slow down the initial load.
 * - responsive 16:9 wrapper so it never breaks the mobile layout.
 */
export default function YouTube({id, title = 'YouTube video'}: YouTubeProps): React.JSX.Element {
  return (
    <div className={styles.wrapper}>
      <iframe
        className={styles.iframe}
        src={`https://www.youtube-nocookie.com/embed/${id}`}
        title={title}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}

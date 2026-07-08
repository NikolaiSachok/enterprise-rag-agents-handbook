import MDXComponents from '@theme-original/MDXComponents';
import YouTube from '@site/src/components/YouTube';

// Register components globally so any .md/.mdx page can use them without an import.
export default {
  ...MDXComponents,
  YouTube,
};

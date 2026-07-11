/**
 * Root wrapper (swizzled @theme/Root).
 *
 * A locale switch is a full page navigation, so this component mounts fresh on
 * the destination page. On mount we restore the reader's structural reading
 * position if the locale dropdown stored one for this path (see
 * src/lib/localeScrollPosition.ts). It is a no-op on every ordinary page load —
 * there's simply no record to consume — so nothing else is affected.
 */

import React, {type ReactNode, useEffect} from 'react';
import {restorePosition} from '@site/src/lib/localeScrollPosition';

export default function Root({children}: {children: ReactNode}): ReactNode {
  useEffect(() => {
    restorePosition(window.location.pathname);
  }, []);

  return <>{children}</>;
}

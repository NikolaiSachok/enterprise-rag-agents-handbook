/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * ---------------------------------------------------------------------------
 * Swizzled (ejected) from @docusaurus/theme-classic.
 *
 * The only change from the upstream component is in the per-locale item map:
 *
 *  1. On click of a *cross-locale* item we capture the reader's structural
 *     position (see src/lib/localeScrollPosition.ts) keyed by the destination
 *     pathname, so the position can be restored after the full-page navigation.
 *
 *  2. We strip the current `#hash` from the cross-locale target URL. Anchor ids
 *     are localized, so carrying the source-locale hash to the other locale
 *     points at an anchor that doesn't exist (and is what caused the reader to
 *     be dumped at the top). Structural restore replaces it.
 *
 * Everything else — labels, active-class logic, query-string merging, the
 * dropdown itself — is verbatim upstream, so normal dropdown behavior, in-page
 * anchor links, and the TOC are unaffected.
 * ---------------------------------------------------------------------------
 */

import React, {type ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useAlternatePageUtils} from '@docusaurus/theme-common/internal';
import {translate} from '@docusaurus/Translate';
import {mergeSearchStrings, useHistorySelector} from '@docusaurus/theme-common';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import IconLanguage from '@theme/Icon/Language';
import type {LinkLikeNavbarItemProps} from '@theme/NavbarItem';
import type {Props} from '@theme/NavbarItem/LocaleDropdownNavbarItem';

import {capturePosition} from '@site/src/lib/localeScrollPosition';

import styles from './styles.module.css';

/** Extract a bare pathname from a locale-dropdown `to` value, e.g.
 *  `pathname:///base/en/foo/?q=1#hash` -> `/base/en/foo/`. This matches what
 *  `window.location.pathname` will be on the destination page. */
function pathnameFromTo(to: string): string {
  return to
    .replace(/^pathname:\/\//, '')
    .replace(/[?#].*$/, '');
}

function useLocaleDropdownUtils() {
  const {
    siteConfig,
    i18n: {localeConfigs},
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();
  const search = useHistorySelector((history) => history.location.search);
  const hash = useHistorySelector((history) => history.location.hash);

  const getLocaleConfig = (locale: string) => {
    const localeConfig = localeConfigs[locale];
    if (!localeConfig) {
      throw new Error(
        `Docusaurus bug, no locale config found for locale=${locale}`,
      );
    }
    return localeConfig;
  };

  const getBaseURLForLocale = (locale: string) => {
    const localeConfig = getLocaleConfig(locale);
    const isSameDomain = localeConfig.url === siteConfig.url;
    if (isSameDomain) {
      // Shorter paths if localized sites are hosted on the same domain
      // This reduces HTML size a bit
      return `pathname://${alternatePageUtils.createUrl({
        locale,
        fullyQualified: false,
      })}`;
    }
    return alternatePageUtils.createUrl({
      locale,
      fullyQualified: true,
    });
  };

  return {
    // `keepHash: false` drops the source-locale hash (anchor ids are localized).
    getURL: (
      locale: string,
      options: {queryString: string | undefined; keepHash: boolean},
    ) => {
      // We have 2 query strings because
      // - there's the current one
      // - there's one user can provide through navbar config
      // see https://github.com/facebook/docusaurus/pull/8915
      const finalSearch = mergeSearchStrings(
        [search, options.queryString],
        'append',
      );
      const finalHash = options.keepHash ? hash : '';
      return `${getBaseURLForLocale(locale)}${finalSearch}${finalHash}`;
    },
    getLabel: (locale: string) => {
      return getLocaleConfig(locale).label;
    },
    getLang: (locale: string) => {
      return getLocaleConfig(locale).htmlLang;
    },
  };
}

export default function LocaleDropdownNavbarItem({
  mobile,
  dropdownItemsBefore,
  dropdownItemsAfter,
  queryString,
  ...props
}: Props): ReactNode {
  const utils = useLocaleDropdownUtils();

  const {
    i18n: {currentLocale, locales},
  } = useDocusaurusContext();
  const localeItems = locales.map((locale): LinkLikeNavbarItemProps => {
    const isCurrent = locale === currentLocale;
    // Keep the hash only when staying in the current locale; drop it when
    // crossing locales (the localized anchor id won't exist on the other side).
    const to = utils.getURL(locale, {queryString, keepHash: isCurrent});
    return {
      label: utils.getLabel(locale),
      lang: utils.getLang(locale),
      to,
      target: '_self',
      autoAddBaseUrl: false,
      // Capture the reader's position just before the full-page locale switch.
      ...(isCurrent
        ? {}
        : {
            onClick: () => capturePosition(pathnameFromTo(to)),
          }),
      className:
        // eslint-disable-next-line no-nested-ternary
        isCurrent
          ? // Similar idea as DefaultNavbarItem: select the right Infima active
            // class name. This cannot be substituted with isActive, because the
            // target URLs contain `pathname://` and therefore are not NavLinks!
            mobile
            ? 'menu__link--active'
            : 'dropdown__link--active'
          : '',
    };
  });

  const items = [...dropdownItemsBefore, ...localeItems, ...dropdownItemsAfter];

  // Mobile is handled a bit differently
  const dropdownLabel = mobile
    ? translate({
        message: 'Languages',
        id: 'theme.navbar.mobileLanguageDropdown.label',
        description: 'The label for the mobile language switcher dropdown',
      })
    : utils.getLabel(currentLocale);

  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={
        <>
          <IconLanguage className={styles.iconLanguage} />
          {dropdownLabel}
        </>
      }
      items={items}
    />
  );
}

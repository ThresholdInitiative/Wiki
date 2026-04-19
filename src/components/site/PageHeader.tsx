// src/components/site/PageHeader.tsx

import React from 'react'
import type { AccentColor } from './types'

interface PageHeaderProps {
  /** 顶部小字分类行，如 "THE ADMINISTRATION · ARCHIVAL DIVISION · LEVEL 4 RESTRICTED" */
  eyebrow?: string
  /** 主标题 */
  title: string
  /** 副标题（中英文） */
  subtitle?: string
  /** 引言 */
  quote?: string
  /** 引言中文翻译 */
  quoteZh?: string
  /** 主题色 */
  accent?: AccentColor
  className?: string
}

const accentMap: Record<AccentColor, string> = {
  gray:   'page-header',
  red:    'page-header page-header--red',
  gold:   'page-header page-header--gold',
  blue:   'page-header page-header--blue',
  purple: 'page-header page-header--purple',
  green:  'page-header',
  orange: 'page-header',
  black:  'page-header',
}

const titleAccentMap: Record<AccentColor, string> = {
  gray:   '',
  red:    'page-header__title--red',
  gold:   'page-header__title--gold',
  blue:   'page-header__title--blue',
  purple: '',
  green:  '',
  orange: '',
  black:  '',
}

const dividerAccentMap: Record<AccentColor, string> = {
  gray:   'page-header__divider',
  red:    'page-header__divider page-header__divider--red',
  gold:   'page-header__divider page-header__divider--gold',
  blue:   'page-header__divider page-header__divider--blue',
  purple: 'page-header__divider',
  green:  'page-header__divider',
  orange: 'page-header__divider',
  black:  'page-header__divider',
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  quote,
  quoteZh,
  accent = 'gray',
  className = '',
}: PageHeaderProps) {
  const wrapperClass = `${accentMap[accent]} ${className}`.trim()
  const titleClass   = `page-header__title ${titleAccentMap[accent]}`.trim()
  const dividerClass = dividerAccentMap[accent]

  return (
    <div className={wrapperClass}>
      {eyebrow && (
        <p className="page-header__eyebrow">{eyebrow}</p>
      )}

      <h1 className={titleClass}>{title}</h1>

      {subtitle && (
        <p className="page-header__subtitle">{subtitle}</p>
      )}

      <div className={dividerClass} />

      {(quote || quoteZh) && (
        <div className="page-header__quote">
          {quote   && <p style={{ margin: '0 0 6px' }}>{quote}</p>}
          {quoteZh && (
            <p style={{ margin: 0, fontSize: '0.6875rem', color: '#444444' }}>
              {quoteZh}
            </p>
          )}
        </div>
      )}
    </div>
  )
}
// src/components/site/SectionHeader.tsx

import React from 'react'
import type { AccentColor } from './types'

interface SectionHeaderProps {
  /** 编号或图标，如 "I"、"II"、"→"、"⊕" */
  index?: string
  title: string
  /** 右侧小字标签，如 "设施状态代码" */
  tag?: string
  accent?: AccentColor
  className?: string
}

const badgeAccentMap: Record<AccentColor, string> = {
  gray:   'section-header__badge',
  red:    'section-header__badge section-header__badge--red',
  gold:   'section-header__badge section-header__badge--gold',
  blue:   'section-header__badge section-header__badge--blue',
  purple: 'section-header__badge section-header__badge--purple',
  green:  'section-header__badge',
  orange: 'section-header__badge',
  black:  'section-header__badge',
}

export function SectionHeader({
  index,
  title,
  tag,
  accent = 'gray',
  className = '',
}: SectionHeaderProps) {
  return (
    <div className={`section-header ${className}`.trim()}>
      {index && (
        <span className={badgeAccentMap[accent]}>{index}</span>
      )}

      <h2 className="section-header__title">{title}</h2>

      <div className="section-header__line" />

      {tag && (
        <span className="section-header__tag">{tag}</span>
      )}
    </div>
  )
}
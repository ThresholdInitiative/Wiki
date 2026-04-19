// src/components/site/ArchiveBlock.tsx

import React from 'react'
import type { AccentColor, ArchiveBlockMeta } from './types'

interface ArchiveBlockProps {
  meta?: ArchiveBlockMeta
  accent?: AccentColor
  children: React.ReactNode
  className?: string
}

const headerAccentMap: Record<AccentColor, string> = {
  gray:   'archive-block__header',
  red:    'archive-block__header archive-block__header--red',
  gold:   'archive-block__header archive-block__header--gold',
  blue:   'archive-block__header archive-block__header--blue',
  purple: 'archive-block__header archive-block__header--purple',
  green:  'archive-block__header',
  orange: 'archive-block__header',
  black:  'archive-block__header',
}

const bodyAccentMap: Record<AccentColor, string> = {
  gray:   'archive-block__body',
  red:    'archive-block__body archive-block__body--red',
  gold:   'archive-block__body archive-block__body--gold',
  blue:   'archive-block__body archive-block__body--blue',
  purple: 'archive-block__body archive-block__body--purple',
  green:  'archive-block__body',
  orange: 'archive-block__body',
  black:  'archive-block__body',
}

function buildHeaderLabel(meta: ArchiveBlockMeta): string {
  const parts: string[] = []
  if (meta.id)             parts.push(`ARCHIVE — ${meta.id}`)
  if (meta.classification) parts.push(`Classification: ${meta.classification}`)
  if (meta.date)           parts.push(`Date: ${meta.date}`)
  if (meta.author)         parts.push(`Author: ${meta.author}`)
  return parts.length ? parts.join(' · ') : 'ARCHIVE'
}

export function ArchiveBlock({
  meta,
  accent = 'gray',
  children,
  className = '',
}: ArchiveBlockProps) {
  const headerLabel = meta ? buildHeaderLabel(meta) : 'ARCHIVE'

  return (
    <div className={`archive-block ${className}`.trim()}>
      <div className={headerAccentMap[accent]}>
        {headerLabel}
      </div>

      <div className={bodyAccentMap[accent]}>
        {children}
      </div>

      {meta?.note && (
        <div className="archive-block__meta">
          <span>{meta.note}</span>
        </div>
      )}
    </div>
  )
}
// src/components/site/compound/StatBlock.tsx

import React from 'react'
import type { StatConfig } from './types'

/* ── 单个统计块 ──────────────────────────────────────────── */

interface StatBlockProps extends StatConfig {
  className?: string
}

const VALUE_COLOR = {
  default: '#e0e0e0',
  green:   '#88cc88',
  red:     '#cc4444',
  gold:    '#daa520',
}

export function StatBlock({
  label,
  value,
  sub,
  accent    = 'default',
  className = '',
}: StatBlockProps) {
  return (
    <div
      className={`stat-block ${className}`.trim()}
      style={{
        padding:    '0.875rem 1rem',
        background: '#161616',
        border:     '1px solid #1a1a1a',
        textAlign:  'center',
      }}
    >
      <p
        style={{
          fontFamily:    'var(--ifm-font-family-monospace)',
          fontSize:      '0.5rem',
          letterSpacing: '0.2em',
          color:         '#444444',
          margin:        '0 0 4px',
          textTransform: 'uppercase',
        }}
      >
        {label}
      </p>
      <p
        style={{
          fontFamily: 'var(--ifm-font-family-monospace)',
          fontSize:   '2rem',
          fontWeight: 900,
          color:      VALUE_COLOR[accent ?? 'default'],
          margin:     '0 0 4px',
          lineHeight: 1,
        }}
      >
        {value}
      </p>
      {sub && (
        <p
          style={{
            fontFamily:    'var(--ifm-font-family-monospace)',
            fontSize:      '0.5rem',
            letterSpacing: '0.2em',
            color:         '#444444',
            margin:        0,
            textTransform: 'uppercase',
          }}
        >
          {sub}
        </p>
      )}
    </div>
  )
}

/* ── StatRow ─────────────────────────────────────────────── */

interface StatRowProps {
  stats:      StatConfig[]
  className?: string
}

export function StatRow({ stats, className = '' }: StatRowProps) {
  return (
    <div
      className={className}
      style={{
        display:             'grid',
        gridTemplateColumns: `repeat(${stats.length}, 1fr)`,
        gap:                 2,
      }}
    >
      {stats.map((s, i) => (
        <StatBlock key={i} {...s} />
      ))}
    </div>
  )
}
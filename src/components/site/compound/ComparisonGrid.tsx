// src/components/site/compound/ComparisonGrid.tsx

import React from 'react'
import type { ComparisonCell, AccentColor } from './types'

const CELL_BG: Record<AccentColor, string> = {
  gray:   '#161616',
  red:    '#1a0000',
  gold:   '#1a1400',
  blue:   '#0a0f1a',
  purple: '#150a20',
  green:  '#0a1a0a',
  orange: '#1a0e00',
  black:  '#0d0d0d',
}

const CELL_LABEL: Record<AccentColor, string> = {
  gray:   '#555555',
  red:    '#662222',
  gold:   '#665500',
  blue:   '#1a2a6a',
  purple: '#331155',
  green:  '#1a5500',
  orange: '#553300',
  black:  '#333333',
}

interface ComparisonGridProps {
  cells:      ComparisonCell[]
  className?: string
}

export function ComparisonGrid({ cells, className = '' }: ComparisonGridProps) {
  return (
    <div
      className={className}
      style={{
        display:             'grid',
        gridTemplateColumns: `repeat(${Math.min(cells.length, 3)}, 1fr)`,
        gap:                 2,
        margin:              '1.25rem 0',
      }}
    >
      {cells.map((cell, i) => {
        const acc = cell.accent ?? 'gray'
        return (
          <div
            key={i}
            style={{
              padding:    '0.875rem 1rem',
              background: CELL_BG[acc],
              border:     '1px solid #1a1a1a',
            }}
          >
            <div
              style={{
                fontFamily:    'var(--ifm-font-family-monospace)',
                fontSize:      '0.5625rem',
                letterSpacing: '0.2em',
                color:         cell.labelColor ?? CELL_LABEL[acc],
                marginBottom:  '0.5rem',
                textTransform: 'uppercase',
              }}
            >
              {cell.label}
            </div>
            <div
              style={{
                fontSize:   '0.75rem',
                color:      '#999999',
                lineHeight: 1.8,
                fontStyle:  'italic',
              }}
            >
              {cell.body}
            </div>
          </div>
        )
      })}
    </div>
  )
}
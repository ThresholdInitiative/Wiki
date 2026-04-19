// src/components/site/compound/MysteryList.tsx

import React from 'react'

interface MysteryListProps {
  items:      string[]
  preamble?:  string
  closing?:   string
  className?: string
}

export function MysteryList({
  items,
  preamble  = 'Not every lore page should answer a question. Some should preserve one.',
  closing   = 'A world becomes smaller when every mystery is solved.',
  className = '',
}: MysteryListProps) {
  return (
    <div
      className={className}
      style={{
        padding:    '1.25rem 1.5rem',
        background: '#0a0a0a',
        border:     '1px solid #1a1a1a',
      }}
    >
      {preamble && (
        <p
          style={{
            fontSize:   '0.75rem',
            color:      '#555555',
            fontStyle:  'italic',
            lineHeight: 2,
            margin:     '0 0 1rem',
          }}
        >
          {preamble}
        </p>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {items.map((item, i) => (
          <div
            key={i}
            style={{
              padding:    '0.375rem 0.75rem',
              background: '#0d0d0d',
              borderLeft: '2px solid #1a1a1a',
              fontFamily: 'var(--ifm-font-family-monospace)',
              fontSize:   '0.6875rem',
              color:      '#333333',
              lineHeight: 1.8,
            }}
          >
            {item}
          </div>
        ))}
      </div>

      {closing && (
        <div
          style={{
            marginTop:  '1rem',
            padding:    '0.625rem 0.875rem',
            background: '#0d0d0d',
            border:     '1px solid #111111',
            textAlign:  'center',
            fontFamily: 'var(--ifm-font-family-monospace)',
            fontSize:   '0.6875rem',
            color:      '#2a2a2a',
            fontStyle:  'italic',
          }}
        >
          {closing}
        </div>
      )}
    </div>
  )
}
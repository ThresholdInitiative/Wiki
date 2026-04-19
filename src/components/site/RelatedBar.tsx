// src/components/site/RelatedBar.tsx

import React from 'react'

interface RelatedLink {
  label: string
  href:  string
}

interface RelatedBarProps {
  label?:     string
  links:      RelatedLink[]
  quote?:     string
  className?: string
}

export function RelatedBar({
  label     = 'RELATED RECORDS',
  links,
  quote,
  className = '',
}: RelatedBarProps) {
  return (
    <div
      className={className}
      style={{
        background:   '#0a0a0a',
        border:       '1px solid #1a1a1a',
        borderTop:    '2px solid #888888',
        padding:      '1rem 1.5rem',
        textAlign:    'center',
        fontFamily:   'var(--ifm-font-family-monospace)',
        fontSize:     '0.6875rem',
      }}
    >
      <p
        style={{
          margin:        '0 0 0.5rem',
          color:         '#444444',
          letterSpacing: '0.25em',
          fontSize:      '0.5625rem',
        }}
      >
        {label}
      </p>

      <p style={{ margin: quote ? '0 0 0.75rem' : 0, color: '#888888' }}>
        {links.map((link, i) => (
          <React.Fragment key={link.href}>
            <a
              href={link.href}
              style={{ color: '#888888', textDecoration: 'none' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#e0e0e0')}
              onMouseLeave={e => (e.currentTarget.style.color = '#888888')}
            >
              {link.label}
            </a>
            {i < links.length - 1 && (
              <span style={{ color: '#333333', margin: '0 0.75rem' }}>·</span>
            )}
          </React.Fragment>
        ))}
      </p>

      {quote && (
        <p
          style={{
            margin:    0,
            color:     '#333333',
            fontStyle: 'italic',
            fontSize:  '0.5625rem',
          }}
        >
          "{quote}"
        </p>
      )}
    </div>
  )
}
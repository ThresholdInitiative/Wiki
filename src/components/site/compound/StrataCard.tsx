// src/components/site/compound/StrataCard.tsx

import React from 'react'
import type { StrataConfig } from './types'

/* ── 单个层级卡片 ────────────────────────────────────────── */

interface StrataCardProps extends StrataConfig {
  isLast?:    boolean
  className?: string
}

export function StrataCard({
  stripeColor,
  label,
  sublabel,
  body,
  isLast    = false,
  className = '',
}: StrataCardProps) {
  return (
    <div
      className={`strata-card ${className}`.trim()}
      style={{
        display:      'flex',
        alignItems:   'stretch',
        borderBottom: isLast ? 'none' : '1px solid #1a1a1a',
      }}
    >
      {/* 彩条 */}
      <div style={{ width: 6, flexShrink: 0, background: stripeColor }} />

      {/* 标签 */}
      <div
        style={{
          padding:        '0.875rem 1rem',
          background:     '#161616',
          width:          160,
          flexShrink:     0,
          borderRight:    '1px solid #1a1a1a',
          display:        'flex',
          flexDirection:  'column',
          alignItems:     'center',
          justifyContent: 'center',
          textAlign:      'center',
          gap:            4,
        }}
      >
        <span
          style={{
            fontFamily:  'var(--ifm-font-family-monospace)',
            fontSize:    '0.6875rem',
            fontWeight:  700,
            color:       '#aaaaaa',
            letterSpacing:'0.08em',
            lineHeight:  1.4,
          }}
        >
          {label}
        </span>
        {sublabel && (
          <span
            style={{
              fontFamily:    'var(--ifm-font-family-monospace)',
              fontSize:      '0.5rem',
              color:         '#333333',
              letterSpacing: '0.15em',
            }}
          >
            {sublabel}
          </span>
        )}
      </div>

      {/* 内容 */}
      <div
        style={{
          padding:    '0.875rem 1.125rem',
          color:      '#999999',
          fontSize:   '0.75rem',
          lineHeight: 1.9,
          flex:       1,
          background: '#111111',
        }}
      >
        {body}
      </div>
    </div>
  )
}

/* ── StrataDeck ─────────────────────────────────────────── */

interface StrataDeckProps {
  items:      StrataConfig[]
  footnote?:  React.ReactNode
  className?: string
}

export function StrataDeck({ items, footnote, className = '' }: StrataDeckProps) {
  return (
    <div
      className={className}
      style={{ border: '1px solid #1a1a1a', overflow: 'hidden' }}
    >
      {items.map((item, i) => (
        <StrataCard
          key={item.label}
          {...item}
          isLast={i === items.length - 1 && !footnote}
        />
      ))}
      {footnote && (
        <div
          style={{
            padding:    '1rem 1.25rem',
            background: '#0d0d0d',
            borderTop:  '1px solid #1a1a1a',
            fontSize:   '0.75rem',
            color:      '#555555',
            lineHeight: 2,
            fontStyle:  'italic',
          }}
        >
          {footnote}
        </div>
      )}
    </div>
  )
}
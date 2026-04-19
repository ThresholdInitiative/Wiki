// src/components/site/compound/PLCard.tsx

import React from 'react'
import type { PLLevel } from '../types'
import type { PLCardConfig } from './types'

/* ── 颜色配置表 ─────────────────────────────────────────── */

interface PLTheme {
  stripe:  string
  labelBg: string
  code:    string
  dim:     string
  special?: React.CSSProperties
}

const PL_THEME: Record<PLLevel, PLTheme> = {
  1: { stripe: '#ffd700', labelBg: '#1a1400', code: '#ffd700', dim: '#665500' },
  2: { stripe: '#32cd32', labelBg: '#0a1a0a', code: '#32cd32', dim: '#1a5500' },
  3: { stripe: '#4169e1', labelBg: '#050a18', code: '#4169e1', dim: '#1a2a6a' },
  4: { stripe: '#8b0000', labelBg: '#1a0000', code: '#cc2222', dim: '#4a0000' },
  5: {
    stripe:  '#e0e0e0',
    labelBg: '#1a1a1a',
    code:    '#ffffff',
    dim:     '#888888',
    special: { textShadow: '0 0 20px rgba(255,255,255,0.3)' },
  },
  x: { stripe: '#333333', labelBg: '#0a0a0a', code: '#333333', dim: '#111111' },
}

/* ── PLCard ─────────────────────────────────────────────── */

interface PLCardProps extends PLCardConfig {
  className?: string
}

export function PLCard({
  level,
  name,
  exposure,
  exposureColor,
  description,
  className = '',
}: PLCardProps) {
  const theme = PL_THEME[level]

  return (
    <div
      className={`pl-card pl-card--${level} ${className}`.trim()}
      style={{ display: 'flex', alignItems: 'stretch', marginBottom: 2 }}
    >
      {/* 彩条 */}
      <div style={{ width: 6, flexShrink: 0, background: theme.stripe }} />

      {/* 等级标签 */}
      <div
        style={{
          padding:        '1.125rem 1.25rem',
          minWidth:       130,
          flexShrink:     0,
          background:     theme.labelBg,
          borderRight:    '1px solid #1a1a1a',
          display:        'flex',
          flexDirection:  'column',
          alignItems:     'center',
          justifyContent: 'center',
          textAlign:      'center',
          gap:            6,
        }}
      >
        <span
          style={{
            fontFamily:    'var(--ifm-font-family-monospace)',
            fontSize:      '1.375rem',
            fontWeight:    900,
            letterSpacing: '0.1em',
            color:         theme.code,
            lineHeight:    1,
            ...(theme.special ?? {}),
          }}
        >
          PL-{level === 'x' ? 'X' : level}
        </span>
        <span
          style={{
            fontFamily:    'var(--ifm-font-family-monospace)',
            fontSize:      '0.5rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color:         theme.dim,
          }}
        >
          {name}
        </span>
      </div>

      {/* 右侧内容 */}
      <div style={{ flex: 1, background: '#111111', border: '1px solid #1a1a1a', borderLeft: 'none' }}>

        {/* 威胁暴露行 */}
        <div
          style={{
            display:      'flex',
            alignItems:   'center',
            gap:          '0.625rem',
            padding:      '0.625rem 1rem',
            borderBottom: '1px solid #1a1a1a',
          }}
        >
          <span
            style={{
              fontFamily:    'var(--ifm-font-family-monospace)',
              fontSize:      '0.5rem',
              letterSpacing: '0.2em',
              color:         theme.dim,
            }}
          >
            THREAT EXPOSURE:
          </span>
          <span
            style={{
              fontFamily:    'var(--ifm-font-family-monospace)',
              fontSize:      '0.625rem',
              fontWeight:    700,
              letterSpacing: '0.15em',
              color:         exposureColor ?? theme.code,
            }}
          >
            {level === 'x' ? '████████' : exposure}
          </span>
        </div>

        {/* 描述 */}
        <div
          style={{
            padding:    '0.75rem 1rem',
            fontSize:   '0.75rem',
            color:      level === 'x' ? '#222222' : '#999999',
            lineHeight: 1.9,
            fontFamily: level === 'x' ? 'var(--ifm-font-family-monospace)' : undefined,
          }}
        >
          {description}
        </div>
      </div>
    </div>
  )
}

/* ── PLDeck ─────────────────────────────────────────────── */

interface PLDeckProps {
  items:       PLCardConfig[]
  footnote?:   string
  className?:  string
}

export function PLDeck({ items, footnote, className = '' }: PLDeckProps) {
  return (
    <div className={className}>
      {items.map(item => (
        <PLCard key={item.level} {...item} />
      ))}
      {footnote && (
        <div
          style={{
            padding:       '0.625rem 1rem',
            background:    '#0a0a0a',
            border:        '1px solid #1a1a1a',
            fontFamily:    'var(--ifm-font-family-monospace)',
            fontSize:      '0.5625rem',
            color:         '#333333',
            textAlign:     'center',
            fontStyle:     'italic',
            lineHeight:    1.8,
            marginTop:     2,
          }}
        >
          {footnote}
        </div>
      )}
    </div>
  )
}
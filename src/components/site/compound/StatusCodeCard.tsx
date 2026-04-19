// src/components/site/compound/StatusCodeCard.tsx

import React from 'react'
import type { StatusCodeConfig, StatusCode } from './types'

/* ── 颜色配置表 ─────────────────────────────────────────── */

interface StatusTheme {
  stripe:     string
  headerBg:   string
  codeColor:  string
  nameDim:    string
  noteBorder: string
}

const STATUS_THEME: Record<StatusCode, StatusTheme> = {
  'GREEN':   {
    stripe:     '#00cc00',
    headerBg:   '#0a1a0a',
    codeColor:  '#00ff00',
    nameDim:    '#1a6600',
    noteBorder: '#1a6600',
  },
  'YELLOW':  {
    stripe:     '#cccc00',
    headerBg:   '#1a1a00',
    codeColor:  '#ffff00',
    nameDim:    '#666600',
    noteBorder: '#555500',
  },
  'ORANGE':  {
    stripe:     '#cc6600',
    headerBg:   '#1a0e00',
    codeColor:  '#ff8c00',
    nameDim:    '#663300',
    noteBorder: '#553300',
  },
  'RED':     {
    stripe:     '#cc0000',
    headerBg:   '#1a0000',
    codeColor:  '#ff0000',
    nameDim:    '#660000',
    noteBorder: '#660000',
  },
  'RED-BIO': {
    stripe:     '#880044',
    headerBg:   '#150010',
    codeColor:  '#ff2266',
    nameDim:    '#550033',
    noteBorder: '#440033',
  },
  'BLACK':   {
    stripe:     '#444444',
    headerBg:   '#111111',
    codeColor:  '#e0e0e0',
    nameDim:    '#444444',
    noteBorder: '#333333',
  },
}

/* ── StatusCodeCard ─────────────────────────────────────── */

interface StatusCodeCardProps extends StatusCodeConfig {
  className?: string
}

export function StatusCodeCard({
  code,
  label,
  authority,
  body,
  note,
  className = '',
}: StatusCodeCardProps) {
  const theme = STATUS_THEME[code]

  return (
    <div
      className={`status-card status-code-card ${className}`.trim()}
      style={{ display: 'flex', alignItems: 'stretch', marginBottom: 2 }}
    >
      {/* 左侧彩条 */}
      <div style={{ width: 8, flexShrink: 0, background: theme.stripe, opacity: 0.8 }} />

      {/* 主体 */}
      <div style={{ flex: 1, background: '#111111', border: '1px solid #1a1a1a', borderLeft: 'none' }}>

        {/* Header */}
        <div
          style={{
            padding:       '0.875rem 1.25rem',
            background:    theme.headerBg,
            borderBottom:  '1px solid #1a1a1a',
            display:       'flex',
            alignItems:    'center',
            gap:           '1.25rem',
            flexWrap:      'wrap',
          }}
        >
          <span
            style={{
              fontFamily:  'var(--ifm-font-family-monospace)',
              fontSize:    '1.25rem',
              fontWeight:  900,
              letterSpacing: '0.1em',
              color:       theme.codeColor,
              lineHeight:  1,
              ...(code === 'BLACK' ? {
                textShadow: '0 0 20px rgba(255,255,255,0.15)',
              } : {}),
            }}
          >
            {code}
          </span>

          <span
            style={{
              fontFamily:  'var(--ifm-font-family-monospace)',
              fontSize:    '0.5625rem',
              letterSpacing: '0.2em',
              color:       theme.nameDim,
              textTransform: 'uppercase',
            }}
          >
            {label}
          </span>

          <span
            style={{
              marginLeft:  'auto',
              fontFamily:  'var(--ifm-font-family-monospace)',
              fontSize:    '0.5rem',
              color:       '#333333',
              letterSpacing: '0.1em',
            }}
          >
            Authority: {authority}
          </span>
        </div>

        {/* Body */}
        <div
          style={{
            padding:    '0.875rem 1.125rem',
            fontSize:   '0.75rem',
            color:      '#999999',
            lineHeight: 1.9,
          }}
        >
          {body}
        </div>

        {/* Note */}
        {note && (
          <div
            style={{
              margin:       '0 0.875rem 0.875rem',
              padding:      '0.5rem 0.75rem',
              borderLeft:   `2px solid ${theme.noteBorder}`,
              fontSize:     '0.6875rem',
              fontStyle:    'italic',
              color:        '#555555',
              lineHeight:   1.8,
            }}
          >
            {note}
          </div>
        )}
      </div>
    </div>
  )
}

/* ── StatusCodeDeck ─────────────────────────────────────── */

interface StatusCodeDeckProps {
  items:      StatusCodeConfig[]
  preamble?:  React.ReactNode
  className?: string
}

export function StatusCodeDeck({ items, preamble, className = '' }: StatusCodeDeckProps) {
  return (
    <div className={className}>
      {preamble && (
        <div
          style={{
            padding:      '0.625rem 1rem',
            background:   '#161616',
            border:       '1px solid #1a1a1a',
            borderBottom: 'none',
            fontSize:     '0.75rem',
            color:        '#555555',
            lineHeight:   1.8,
          }}
        >
          {preamble}
        </div>
      )}
      {items.map(item => (
        <StatusCodeCard key={item.code} {...item} />
      ))}
    </div>
  )
}
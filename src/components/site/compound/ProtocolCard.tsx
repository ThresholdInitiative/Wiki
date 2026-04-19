// src/components/site/compound/ProtocolCard.tsx

import React from 'react'
import type { AccentColor } from '../types'

/* ── 单个协议行（安全/生物/人事协议表中的行） ─────────── */

interface ProtocolRowProps {
  name:        string
  description: string
  authority?:  string
  lead?:       string
  accent?:     AccentColor
  className?:  string
}

const ACCENT_LEFT: Record<AccentColor, string> = {
  gray:   '#555555',
  red:    '#882222',
  gold:   '#886600',
  blue:   '#2a4a8a',
  purple: '#442266',
  green:  '#1a6600',
  orange: '#664400',
  black:  '#222222',
}

const ACCENT_NAME: Record<AccentColor, string> = {
  gray:   '#aaaaaa',
  red:    '#cc4444',
  gold:   '#cc8800',
  blue:   '#4a708b',
  purple: '#9966cc',
  green:  '#2e8b57',
  orange: '#ff8c00',
  black:  '#666666',
}

export function ProtocolRow({
  name,
  description,
  authority,
  lead,
  accent    = 'gray',
  className = '',
}: ProtocolRowProps) {
  return (
    <div
      className={`${className}`.trim()}
      style={{
        display:     'flex',
        alignItems:  'stretch',
        borderBottom:'1px solid #1a1a1a',
      }}
    >
      {/* 左侧标签列 */}
      <div
        style={{
          padding:       '0.875rem 1rem',
          background:    '#161616',
          width:         200,
          flexShrink:    0,
          borderRight:   '1px solid #1a1a1a',
          borderLeft:    `2px solid ${ACCENT_LEFT[accent]}`,
          display:       'flex',
          flexDirection: 'column',
          gap:           4,
        }}
      >
        <span
          style={{
            fontFamily:    'var(--ifm-font-family-monospace)',
            fontSize:      '0.6875rem',
            fontWeight:    700,
            color:         ACCENT_NAME[accent],
            letterSpacing: '0.05em',
          }}
        >
          {name}
        </span>
        {authority && (
          <span
            style={{
              fontFamily:    'var(--ifm-font-family-monospace)',
              fontSize:      '0.5rem',
              color:         '#333333',
              letterSpacing: '0.1em',
            }}
          >
            Auth: {authority}
          </span>
        )}
        {lead && (
          <span
            style={{
              fontFamily:    'var(--ifm-font-family-monospace)',
              fontSize:      '0.5rem',
              color:         '#333333',
              letterSpacing: '0.1em',
            }}
          >
            Lead: {lead}
          </span>
        )}
      </div>

      {/* 描述 */}
      <div
        style={{
          padding:    '0.875rem 1rem',
          color:      '#888888',
          fontSize:   '0.75rem',
          lineHeight: 1.9,
          flex:       1,
          background: '#111111',
        }}
      >
        {description}
      </div>
    </div>
  )
}

/* ── ProtocolCard ───────────────────────────────────────── */
// 用于协议页面的完整协议块（含 Header + Rows）

interface ProtocolCardProps {
  name:        string
  trigger?:    string
  lead?:       string
  priority?:   string
  special?:    string
  accent?:     AccentColor
  phases?:     { id: string; name: string; body: React.ReactNode }[]
  criticalNote?: React.ReactNode
  className?:  string
}

export function ProtocolCard({
  name,
  trigger,
  lead,
  priority,
  special,
  accent    = 'gray',
  phases,
  criticalNote,
  className = '',
}: ProtocolCardProps) {
  const leftColor   = ACCENT_LEFT[accent]
  const nameColor   = ACCENT_NAME[accent]

  return (
    <div
      className={className}
      style={{
        background:  '#111111',
        border:      '1px solid #1a1a1a',
        borderTop:   `2px solid ${leftColor}`,
        marginBottom: 8,
        overflow:    'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding:      '0.875rem 1.25rem',
          background:   '#161616',
          borderBottom: '1px solid #1a1a1a',
          display:      'flex',
          alignItems:   'center',
          gap:          '1rem',
          flexWrap:     'wrap',
        }}
      >
        <span
          style={{
            fontFamily:    'var(--ifm-font-family-monospace)',
            fontSize:      '0.875rem',
            fontWeight:    900,
            letterSpacing: '0.2em',
            color:         nameColor,
          }}
        >
          PROTOCOL: {name}
        </span>
        <span
          style={{
            marginLeft:    'auto',
            fontFamily:    'var(--ifm-font-family-monospace)',
            fontSize:      '0.5rem',
            color:         '#333333',
            letterSpacing: '0.1em',
          }}
        >
          Lead: {lead}
        </span>
      </div>

      {/* Meta rows */}
      {trigger && (
        <div
          style={{
            display:      'flex',
            borderBottom: '1px solid #1a1a1a',
          }}
        >
          <div
            style={{
              padding:      '0.5rem 1rem',
              background:   '#161616',
              width:        100,
              flexShrink:   0,
              borderRight:  '1px solid #1a1a1a',
              fontFamily:   'var(--ifm-font-family-monospace)',
              fontSize:     '0.5rem',
              color:        '#444444',
              letterSpacing:'0.15em',
              display:      'flex',
              alignItems:   'center',
            }}
          >
            TRIGGER
          </div>
          <div
            style={{
              padding:    '0.5rem 1rem',
              flex:       1,
              fontSize:   '0.75rem',
              color:      '#888888',
              lineHeight: 1.8,
            }}
          >
            {trigger}
          </div>
        </div>
      )}

      {priority && (
        <div
          style={{
            padding:      '0.5rem 1.25rem',
            background:   '#0d0d0d',
            borderBottom: '1px solid #1a1a1a',
            fontFamily:   'var(--ifm-font-family-monospace)',
            fontSize:     '0.5625rem',
            letterSpacing:'0.06em',
            color:        `${leftColor}99`,
          }}
        >
          PRIORITY: {priority}
        </div>
      )}

      {special && (
        <div
          style={{
            padding:      '0.5rem 1.25rem',
            background:   '#161605',
            borderBottom: '1px solid #1a1a1a',
            fontFamily:   'var(--ifm-font-family-monospace)',
            fontSize:     '0.5625rem',
            color:        '#776600',
          }}
        >
          ⚑ SPECIAL: {special}
        </div>
      )}

      {/* Phase rows */}
      {phases && (
        <div>
          {phases.map((phase, i) => (
            <PhaseRow
              key={phase.id}
              {...phase}
              idColor={leftColor}
              isLast={i === phases.length - 1 && !criticalNote}
            />
          ))}
        </div>
      )}

      {/* Critical note */}
      {criticalNote && (
        <div
          style={{
            padding:    '0.625rem 1.25rem',
            background: '#0a0a0a',
            borderTop:  `1px solid ${leftColor}22`,
            fontSize:   '0.6875rem',
            fontStyle:  'italic',
            color:      `${leftColor}99`,
            lineHeight: 1.8,
          }}
        >
          ⚠ CRITICAL: {criticalNote}
        </div>
      )}
    </div>
  )
}

// 复用 PhaseRow，从 PhaseRow 文件导入
import { PhaseRow } from './PhaseRow'
// src/components/site/compound/PhaseRow.tsx

import React from 'react'
import type { PhaseConfig } from './types'

/* ── PhaseRow ───────────────────────────────────────────── */

interface PhaseRowProps extends PhaseConfig {
  idColor?: string
  isLast?:  boolean
  className?: string
}

export function PhaseRow({
  id,
  name,
  body,
  idColor   = '#444444',
  isLast    = false,
  className = '',
}: PhaseRowProps) {
  return (
    <div
      className={`phase-row ${className}`.trim()}
      style={{
        display:      'flex',
        alignItems:   'stretch',
        borderBottom: isLast ? 'none' : '1px solid #1a1a1a',
      }}
    >
      {/* 左侧标签 */}
      <div
        style={{
          padding:       '0.75rem 1rem',
          background:    '#161616',
          width:         170,
          flexShrink:    0,
          borderRight:   '1px solid #1a1a1a',
          display:       'flex',
          flexDirection: 'column',
          gap:           4,
        }}
      >
        <span
          style={{
            fontFamily:    'var(--ifm-font-family-monospace)',
            fontSize:      '0.5625rem',
            letterSpacing: '0.15em',
            fontWeight:    700,
            color:         idColor,
          }}
        >
          {id}
        </span>
        <span
          style={{
            fontSize: '0.6875rem',
            color:    '#777777',
          }}
        >
          {name}
        </span>
      </div>

      {/* 内容 */}
      <div
        style={{
          padding:    '0.75rem 1rem',
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

/* ── PhaseBlock ─────────────────────────────────────────── */
// 独立使用的协议阶段容器（不在 FactionCard 内时）

interface PhaseBlockProps {
  phases:      PhaseConfig[]
  idColor?:    string
  preamble?:   React.ReactNode
  criticalNote?: React.ReactNode
  criticalBg?:  string
  criticalBd?:  string
  criticalTx?:  string
  className?:  string
}

export function PhaseBlock({
  phases,
  idColor       = '#444444',
  preamble,
  criticalNote,
  criticalBg    = '#0d0d0d',
  criticalBd    = '#2a2a2a',
  criticalTx    = '#555555',
  className     = '',
}: PhaseBlockProps) {
  return (
    <div
      className={className}
      style={{ border: '1px solid #1a1a1a', overflow: 'hidden' }}
    >
      {preamble && (
        <div
          style={{
            padding:       '0.625rem 1rem',
            background:    '#161616',
            borderBottom:  '1px solid #1a1a1a',
            fontSize:      '0.75rem',
            color:         '#555555',
            lineHeight:    1.8,
          }}
        >
          {preamble}
        </div>
      )}

      {phases.map((phase, i) => (
        <PhaseRow
          key={phase.id}
          {...phase}
          idColor={idColor}
          isLast={i === phases.length - 1 && !criticalNote}
        />
      ))}

      {criticalNote && (
        <div
          style={{
            padding:    '0.625rem 1rem',
            background: criticalBg,
            border:     `1px solid ${criticalBd}`,
            borderTop:  `1px solid ${criticalBd}`,
            fontSize:   '0.6875rem',
            fontStyle:  'italic',
            color:      criticalTx,
            lineHeight: 1.8,
          }}
        >
          ⚠ CRITICAL: {criticalNote}
        </div>
      )}
    </div>
  )
}
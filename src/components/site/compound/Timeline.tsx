// src/components/site/compound/Timeline.tsx

import React from 'react'
import type { TimelineStepConfig } from './types'

/* ── 颜色递进表 ─────────────────────────────────────────── */

const STEP_COLORS = [
  { bg: '#1a0000', color: '#882222' },  // 1 — 深红
  { bg: '#150a00', color: '#774400' },  // 2 — 橙
  { bg: '#111500', color: '#666600' },  // 3 — 黄
  { bg: '#111111', color: '#555555' },  // 4 — 灰
  { bg: '#0f0f0f', color: '#444444' },  // 5 — 深灰
]

/* ── TimelineStep ────────────────────────────────────────── */

interface TimelineStepProps extends TimelineStepConfig {
  isLast?:    boolean
  className?: string
}

export function TimelineStep({
  step,
  label,
  href,
  reason,
  isLast    = false,
  className = '',
}: TimelineStepProps) {
  const theme = STEP_COLORS[Math.min(step - 1, STEP_COLORS.length - 1)]

  return (
    <div
      className={`timeline-step timeline-step--${step} ${className}`.trim()}
      style={{
        display:      'flex',
        alignItems:   'stretch',
        borderBottom: isLast ? 'none' : '1px solid #1a1a1a',
      }}
    >
      {/* 步骤编号 */}
      <div
        style={{
          width:          50,
          flexShrink:     0,
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          fontFamily:     'var(--ifm-font-family-monospace)',
          fontSize:       '1.375rem',
          fontWeight:     900,
          color:          theme.color,
          background:     theme.bg,
          borderRight:    '1px solid #1a1a1a',
        }}
      >
        {step}
      </div>

      {/* 内容 */}
      <div
        style={{
          padding:    '0.875rem 1.125rem',
          flex:       1,
          background: '#111111',
        }}
      >
        
          href={href}
          style={{
            display:        'block',
            fontSize:       '0.875rem',
            fontWeight:     700,
            color:          '#e0e0e0',
            textDecoration: 'none',
            marginBottom:   4,
            transition:     'color 200ms ease',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
          onMouseLeave={e => (e.currentTarget.style.color = '#e0e0e0')}
        >
          {label}
        </a>
        <div
          style={{
            fontSize:   '0.75rem',
            color:      '#777777',
            lineHeight: 1.75,
          }}
        >
          {reason}
        </div>
      </div>
    </div>
  )
}

/* ── TimelineDeck ────────────────────────────────────────── */

interface TimelineDeckProps {
  steps:      TimelineStepConfig[]
  preamble?:  string
  className?: string
}

export function TimelineDeck({ steps, preamble, className = '' }: TimelineDeckProps) {
  return (
    <div
      className={className}
      style={{ border: '1px solid #1a1a1a', overflow: 'hidden' }}
    >
      {preamble && (
        <div
          style={{
            padding:      '0.625rem 1rem',
            background:   '#161616',
            borderBottom: '1px solid #1a1a1a',
            fontSize:     '0.75rem',
            color:        '#555555',
            lineHeight:   1.8,
          }}
        >
          {preamble}
        </div>
      )}
      {steps.map((step, i) => (
        <TimelineStep
          key={step.step}
          {...step}
          isLast={i === steps.length - 1}
        />
      ))}
    </div>
  )
}
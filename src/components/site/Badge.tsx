// src/components/site/Badge.tsx

import React from 'react'
import type { BadgeVariant, StatusDotVariant, PLLevel } from './types'

/* ── Badge ─────────────────────────────────────────────── */

interface BadgeProps {
  variant?: BadgeVariant
  /** 自定义文字，不传则使用 variant 默认文字 */
  label?: string
  className?: string
}

const variantDefaults: Record<BadgeVariant, string> = {
  complete: 'COMPLETE',
  pending:  'PENDING',
  active:   'ACTIVE',
  vacant:   'VACANT',
  official: 'OFFICIAL',
  redacted: '███████',
}

export function Badge({
  variant   = 'pending',
  label,
  className = '',
}: BadgeProps) {
  const text = label ?? variantDefaults[variant]

  return (
    <span className={`badge badge--${variant} ${className}`.trim()}>
      {text}
    </span>
  )
}

/* ── PLBadge ────────────────────────────────────────────── */

interface PLBadgeProps {
  level: PLLevel
  className?: string
}

const plLabels: Record<PLLevel, string> = {
  1: 'PL-1',
  2: 'PL-2',
  3: 'PL-3',
  4: 'PL-4',
  5: 'PL-5',
  x: 'PL-X',
}

export function PLBadge({ level, className = '' }: PLBadgeProps) {
  return (
    <span className={`badge badge--pl-${level} ${className}`.trim()}>
      {plLabels[level]}
    </span>
  )
}

/* ── StatusDot ──────────────────────────────────────────── */

interface StatusDotProps {
  variant?: StatusDotVariant
  label?: string
  className?: string
}

const dotLabels: Record<StatusDotVariant, string> = {
  active:  '● ACTIVE',
  vacant:  '● VACANT',
  pending: '● PENDING',
  offline: '● OFFLINE',
}

export function StatusDot({
  variant   = 'active',
  label,
  className = '',
}: StatusDotProps) {
  const displayLabel = label ?? dotLabels[variant]

  return (
    <span
      className={`status-dot status-dot--${variant} ${className}`.trim()}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
    >
      <span className={`status-dot status-dot--${variant}`} />
      <span
        style={{
          fontFamily: 'var(--ifm-font-family-monospace)',
          fontSize:   '0.6875rem',
          fontWeight: 700,
          color:
            variant === 'active'  ? '#44cc44' :
            variant === 'vacant'  ? '#444444' :
            variant === 'pending' ? '#886600' :
                                    '#882222',
        }}
      >
        {displayLabel}
      </span>
    </span>
  )
}
// src/components/site/compound/PersonnelTable.tsx

import React from 'react'
import type { PersonnelRow as PersonnelRowType, PersonnelStatus } from './types'
import type { AccentColor } from '../types'

/* ── 单行 ───────────────────────────────────────────────── */

interface PersonnelRowProps extends PersonnelRowType {
  accent?: AccentColor
}

const STATUS_COLOR: Record<PersonnelStatus, string> = {
  active:   '#44cc44',
  vacant:   '#555555',
  redacted: '#222222',
}

const STATUS_LABEL: Record<PersonnelStatus, string> = {
  active:   '● ACTIVE',
  vacant:   '● VACANT',
  redacted: '██████',
}

export function PersonnelRow({
  operativeId,
  designation,
  clearance,
  status,
  accent = 'gray',
}: PersonnelRowProps) {
  return (
    <tr style={{ background: '#111111' }}>
      <td
        style={{
          padding:    '0.625rem 0.75rem',
          fontFamily: 'var(--ifm-font-family-monospace)',
          fontSize:   '0.75rem',
          color:      '#888888',
          borderBottom: '1px solid #1a1a1a',
        }}
      >
        {operativeId}
      </td>
      <td
        style={{
          padding:    '0.625rem 0.75rem',
          fontSize:   '0.75rem',
          color:      '#aaaaaa',
          borderBottom: '1px solid #1a1a1a',
        }}
      >
        {designation}
      </td>
      <td
        style={{
          padding:    '0.625rem 0.75rem',
          fontFamily: 'var(--ifm-font-family-monospace)',
          fontSize:   '0.6875rem',
          color:      '#666666',
          borderBottom: '1px solid #1a1a1a',
          textAlign:  'center',
        }}
      >
        {clearance}
      </td>
      <td
        style={{
          padding:    '0.625rem 0.75rem',
          fontFamily: 'var(--ifm-font-family-monospace)',
          fontSize:   '0.6875rem',
          fontWeight: 700,
          color:      STATUS_COLOR[status],
          borderBottom: '1px solid #1a1a1a',
          textAlign:  'center',
        }}
      >
        {STATUS_LABEL[status]}
      </td>
    </tr>
  )
}

/* ── Table ──────────────────────────────────────────────── */

interface PersonnelTableProps {
  rows:       PersonnelRowType[]
  accent?:    AccentColor
  className?: string
}

const HEADER_COLOR: Record<AccentColor, string> = {
  gray:   '#555555',
  red:    '#550000',
  gold:   '#554400',
  blue:   '#152040',
  purple: '#301550',
  green:  '#1a4a2a',
  orange: '#442200',
  black:  '#222222',
}

const HEADER_BG: Record<AccentColor, string> = {
  gray:   '#161616',
  red:    '#150000',
  gold:   '#151000',
  blue:   '#080d18',
  purple: '#0d0515',
  green:  '#061006',
  orange: '#100900',
  black:  '#0d0d0d',
}

export function PersonnelTable({ rows, accent = 'gray', className = '' }: PersonnelTableProps) {
  return (
    <table
      className={className}
      style={{
        width:          '100%',
        borderCollapse: 'collapse',
        fontFamily:     'var(--ifm-font-family-monospace)',
        fontSize:       '0.6875rem',
        border:         '1px solid #1a1a1a',
      }}
    >
      <thead>
        <tr style={{ background: HEADER_BG[accent] }}>
          {['OPERATIVE ID', 'DESIGNATION', 'CLEARANCE', 'STATUS'].map(col => (
            <th
              key={col}
              style={{
                padding:       '0.5rem 0.75rem',
                color:         HEADER_COLOR[accent],
                fontWeight:    700,
                letterSpacing: '0.15em',
                fontSize:      '0.5rem',
                borderBottom:  '1px solid #1a1a1a',
                textAlign:     col === 'STATUS' || col === 'CLEARANCE' ? 'center' : 'left',
              }}
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <PersonnelRow key={row.operativeId} {...row} accent={accent} />
        ))}
      </tbody>
    </table>
  )
}
// src/components/site/compound/FactionCard.tsx

import React from 'react'
import type { AccentColor } from '../types'
import type { FactionCardConfig, PhaseConfig } from './types'
import { PhaseRow } from './PhaseRow'

/* ── 颜色配置表 ─────────────────────────────────────────── */

interface FactionTheme {
  topBorder:  string
  headerBg:   string
  nameColor:  string
  subtitleDim:string
  clearanceBg:string
  clearanceBd:string
  clearanceTx:string
  priorityBg: string
  priorityTx: string
  phaseIdColor: string
  noteBorder: string
  noteTx:     string
}

const FACTION_THEME: Record<AccentColor, FactionTheme> = {
  red: {
    topBorder:   '#8b0000',
    headerBg:    '#1a0000',
    nameColor:   '#cc2222',
    subtitleDim: '#550000',
    clearanceBg: '#220000',
    clearanceBd: '#440000',
    clearanceTx: '#882222',
    priorityBg:  '#0f0000',
    priorityTx:  '#773333',
    phaseIdColor:'#660000',
    noteBorder:  '#1a0000',
    noteTx:      '#773333',
  },
  blue: {
    topBorder:   '#4a708b',
    headerBg:    '#0a1520',
    nameColor:   '#4a708b',
    subtitleDim: '#152040',
    clearanceBg: '#060d14',
    clearanceBd: '#1a2a4a',
    clearanceTx: '#2a4a8a',
    priorityBg:  '#060f18',
    priorityTx:  '#2a5070',
    phaseIdColor:'#1a3a5a',
    noteBorder:  '#0a1520',
    noteTx:      '#2a5070',
  },
  purple: {
    topBorder:   '#6b3fa0',
    headerBg:    '#150a20',
    nameColor:   '#9966cc',
    subtitleDim: '#301550',
    clearanceBg: '#0d0615',
    clearanceBd: '#2a1040',
    clearanceTx: '#442266',
    priorityBg:  '#0d0615',
    priorityTx:  '#442266',
    phaseIdColor:'#331155',
    noteBorder:  '#150a20',
    noteTx:      '#442266',
  },
  gold: {
    topBorder:   '#b8860b',
    headerBg:    '#1a1200',
    nameColor:   '#daa520',
    subtitleDim: '#554400',
    clearanceBg: '#1a1000',
    clearanceBd: '#332200',
    clearanceTx: '#886600',
    priorityBg:  '#100e00',
    priorityTx:  '#665500',
    phaseIdColor:'#553300',
    noteBorder:  '#1a1200',
    noteTx:      '#665500',
  },
  gray: {
    topBorder:   '#555555',
    headerBg:    '#161616',
    nameColor:   '#aaaaaa',
    subtitleDim: '#444444',
    clearanceBg: '#0a0a0a',
    clearanceBd: '#222222',
    clearanceTx: '#666666',
    priorityBg:  '#111111',
    priorityTx:  '#555555',
    phaseIdColor:'#444444',
    noteBorder:  '#1a1a1a',
    noteTx:      '#555555',
  },
  green: {
    topBorder:   '#2e8b57',
    headerBg:    '#0a1a0a',
    nameColor:   '#2e8b57',
    subtitleDim: '#1a4a2a',
    clearanceBg: '#061006',
    clearanceBd: '#1a3a1a',
    clearanceTx: '#1a6600',
    priorityBg:  '#061006',
    priorityTx:  '#1a5500',
    phaseIdColor:'#1a4a1a',
    noteBorder:  '#0a1a0a',
    noteTx:      '#1a5500',
  },
  orange: {
    topBorder:   '#cc6600',
    headerBg:    '#1a0e00',
    nameColor:   '#ff8c00',
    subtitleDim: '#553300',
    clearanceBg: '#100900',
    clearanceBd: '#331800',
    clearanceTx: '#774400',
    priorityBg:  '#100900',
    priorityTx:  '#663300',
    phaseIdColor:'#442200',
    noteBorder:  '#1a0e00',
    noteTx:      '#663300',
  },
  black: {
    topBorder:   '#333333',
    headerBg:    '#0d0d0d',
    nameColor:   '#888888',
    subtitleDim: '#333333',
    clearanceBg: '#080808',
    clearanceBd: '#1a1a1a',
    clearanceTx: '#444444',
    priorityBg:  '#0a0a0a',
    priorityTx:  '#333333',
    phaseIdColor:'#2a2a2a',
    noteBorder:  '#111111',
    noteTx:      '#333333',
  },
}

/* ── FactionCard ────────────────────────────────────────── */

interface FactionCardProps extends FactionCardConfig {
  className?: string
}

export function FactionCard({
  name,
  subtitle,
  clearance,
  priority,
  accent,
  phases,
  note,
  className = '',
}: FactionCardProps) {
  const theme = FACTION_THEME[accent]

  return (
    <div
      className={`faction-card faction-card--${accent} ${className}`.trim()}
      style={{
        background:  '#111111',
        border:      '1px solid #1a1a1a',
        borderTop:   `2px solid ${theme.topBorder}`,
        marginBottom: 2,
        overflow:    'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding:       '0.875rem 1.25rem',
          background:    theme.headerBg,
          borderBottom:  '1px solid #1a1a1a',
          display:       'flex',
          alignItems:    'center',
          gap:           '1rem',
          flexWrap:      'wrap',
        }}
      >
        <span
          style={{
            fontFamily:    'var(--ifm-font-family-monospace)',
            fontSize:      '0.875rem',
            fontWeight:    900,
            letterSpacing: '0.2em',
            color:         theme.nameColor,
          }}
        >
          {name}
        </span>

        {subtitle && (
          <span
            style={{
              fontFamily:    'var(--ifm-font-family-monospace)',
              fontSize:      '0.5625rem',
              letterSpacing: '0.2em',
              color:         theme.subtitleDim,
            }}
          >
            {subtitle}
          </span>
        )}

        {clearance && (
          <span
            style={{
              marginLeft:  'auto',
              fontFamily:  'var(--ifm-font-family-monospace)',
              fontSize:    '0.5625rem',
              padding:     '3px 10px',
              background:  theme.clearanceBg,
              border:      `1px solid ${theme.clearanceBd}`,
              color:       theme.clearanceTx,
            }}
          >
            {clearance}
          </span>
        )}
      </div>

      {/* Priority bar */}
      {priority && (
        <div
          style={{
            padding:       '0.625rem 1.25rem',
            background:    theme.priorityBg,
            borderBottom:  '1px solid #1a1a1a',
            fontFamily:    'var(--ifm-font-family-monospace)',
            fontSize:      '0.5625rem',
            letterSpacing: '0.06em',
            color:         theme.priorityTx,
          }}
        >
          PRIORITY: {priority}
        </div>
      )}

      {/* Phases */}
      {phases && phases.length > 0 && (
        <div>
          {phases.map((phase, i) => (
            <PhaseRow
              key={phase.id}
              {...phase}
              idColor={theme.phaseIdColor}
              isLast={i === phases.length - 1}
            />
          ))}
        </div>
      )}

      {/* Note */}
      {note && (
        <div
          style={{
            padding:    '0.625rem 1.25rem',
            background: theme.noteBorder,
            borderTop:  '1px solid #1a1a1a',
            fontSize:   '0.6875rem',
            fontStyle:  'italic',
            color:      theme.noteTx,
            lineHeight: 1.8,
          }}
        >
          {note}
        </div>
      )}
    </div>
  )
}
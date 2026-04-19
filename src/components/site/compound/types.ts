// src/components/site/compound/types.ts

import type { AccentColor } from '../types'

/* ── StatusCodeCard ─────────────────────────────────────── */

export type StatusCode =
  | 'GREEN'
  | 'YELLOW'
  | 'ORANGE'
  | 'RED'
  | 'RED-BIO'
  | 'BLACK'

export interface StatusCodeConfig {
  code:       StatusCode
  label:      string       // e.g. "Normal"
  authority:  string       // e.g. "Automatic"
  body:       React.ReactNode
  note?:      string
}

/* ── PLCard ─────────────────────────────────────────────── */

import type { PLLevel } from '../types'

export interface PLCardConfig {
  level:       PLLevel
  name:        string       // e.g. "RESTRICTED"
  exposure:    string       // e.g. "LOW"
  exposureColor?: string
  description: React.ReactNode
}

/* ── FactionCard ────────────────────────────────────────── */

export interface FactionCardConfig {
  name:        string
  subtitle?:   string       // lore designation
  clearance?:  string       // e.g. "LEVEL 5"
  priority?:   string       // 优先级/任务说明
  accent:      AccentColor
  phases?:     PhaseConfig[]
  note?:       React.ReactNode
}

/* ── PhaseRow ───────────────────────────────────────────── */

export interface PhaseConfig {
  id:    string             // e.g. "THREADBARE-1"
  name:  string             // e.g. "Observation"
  body:  React.ReactNode
}

/* ── StrataCard ─────────────────────────────────────────── */

export interface StrataConfig {
  stripeColor: string
  label:       string
  sublabel?:   string
  body:        React.ReactNode
}

/* ── ComparisonGrid ─────────────────────────────────────── */

export interface ComparisonCell {
  label:       string
  labelColor?: string
  body:        React.ReactNode
  accent?:     AccentColor
}

/* ── StatBlock ──────────────────────────────────────────── */

export interface StatConfig {
  label:      string
  value:      React.ReactNode
  sub?:       string
  accent?:    'default' | 'green' | 'red' | 'gold'
}

/* ── Timeline ───────────────────────────────────────────── */

export interface TimelineStepConfig {
  step:   number
  label:  string
  href:   string
  reason: React.ReactNode
}

/* ── PersonnelTable ─────────────────────────────────────── */

export type PersonnelStatus = 'active' | 'vacant' | 'redacted'

export interface PersonnelRow {
  operativeId:  string
  designation:  string
  clearance:    string
  status:       PersonnelStatus
}
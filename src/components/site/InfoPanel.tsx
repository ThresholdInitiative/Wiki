// src/components/site/InfoPanel.tsx

import React from 'react'
import type { AccentColor } from './types'

interface InfoPanelProps {
  accent?: AccentColor
  children: React.ReactNode
  className?: string
}

const accentClassMap: Record<AccentColor, string> = {
  gray:   'info-panel',
  red:    'info-panel info-panel--red',
  gold:   'info-panel info-panel--gold',
  blue:   'info-panel info-panel--blue',
  purple: 'info-panel info-panel--purple',
  green:  'info-panel info-panel--green',
  orange: 'info-panel',
  black:  'info-panel',
}

export function InfoPanel({
  accent    = 'gray',
  children,
  className = '',
}: InfoPanelProps) {
  return (
    <div className={`${accentClassMap[accent]} ${className}`.trim()}>
      {children}
    </div>
  )
}
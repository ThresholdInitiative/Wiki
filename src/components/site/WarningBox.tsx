// src/components/site/WarningBox.tsx

import React from 'react'
import type { AccentColor } from './types'

type WarningAccent =
  | AccentColor
  | 'yellow'
  | 'orange'

interface WarningBoxProps {
  accent?: WarningAccent
  children: React.ReactNode
  className?: string
}

const accentClassMap: Record<WarningAccent, string> = {
  gray:   'warning-box warning-box--gray',
  red:    'warning-box warning-box--red',
  orange: 'warning-box warning-box--orange',
  yellow: 'warning-box warning-box--yellow',
  gold:   'warning-box warning-box--gold',
  blue:   'warning-box warning-box--blue',
  purple: 'warning-box warning-box--purple',
  green:  'warning-box warning-box--green',
  black:  'warning-box warning-box--black',
}

export function WarningBox({
  accent    = 'gray',
  children,
  className = '',
}: WarningBoxProps) {
  return (
    <div className={`${accentClassMap[accent]} ${className}`.trim()}>
      {children}
    </div>
  )
}
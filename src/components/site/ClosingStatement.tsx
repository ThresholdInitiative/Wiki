// src/components/site/ClosingStatement.tsx

import React from 'react'
import type { AccentColor } from './types'

interface ClosingStatementProps {
  eyebrow?:  string
  children:  React.ReactNode
  quote?:    string
  accent?:   AccentColor
  className?: string
}

const borderMap: Record<AccentColor, string> = {
  gray:   '#888888',
  red:    '#882222',
  gold:   '#886600',
  blue:   '#4169e1',
  purple: '#442266',
  green:  '#1a6600',
  orange: '#884400',
  black:  '#333333',
}

export function ClosingStatement({
  eyebrow  = '— ARCHIVAL DIVISION · CLOSING STATEMENT —',
  children,
  quote,
  accent   = 'gray',
  className = '',
}: ClosingStatementProps) {
  return (
    <div
      className={`closing-statement ${className}`.trim()}
      style={{ borderTopColor: borderMap[accent] }}
    >
      <p className="closing-statement__eyebrow">{eyebrow}</p>

      <div className="closing-statement__main">
        {children}
      </div>

      {quote && (
        <>
          <div className="closing-statement__divider" />
          <blockquote className="closing-statement__quote">
            "{quote}"
          </blockquote>
        </>
      )}
    </div>
  )
}
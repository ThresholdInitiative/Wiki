// src/components/site/QuoteBlock.tsx

import React from 'react'

interface QuoteBlockProps {
  /** 引言内容 */
  children: React.ReactNode
  /** 来源说明 */
  attribution?: string
  /** 居中样式（用于页面内重要语句） */
  center?: boolean
  /** 高亮句（用于放大字号的核心语句） */
  highlight?: boolean
  className?: string
}

export function QuoteBlock({
  children,
  attribution,
  center      = false,
  highlight   = false,
  className   = '',
}: QuoteBlockProps) {
  const baseClass = center
    ? 'quote-block quote-block--center'
    : 'quote-block'

  return (
    <blockquote
      className={`${baseClass} ${className}`.trim()}
      style={highlight ? { fontSize: '0.9375rem', color: '#cccccc' } : undefined}
    >
      {children}

      {attribution && (
        <footer className="quote-block__attribution">
          — {attribution}
        </footer>
      )}
    </blockquote>
  )
}
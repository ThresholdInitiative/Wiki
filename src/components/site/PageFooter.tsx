// src/components/site/PageFooter.tsx

import React from 'react'

interface PageFooterProps {
  /** 文档编号，如 "LORE-ORIGIN-001" */
  docId?:         string
  revision?:      string
  classification?: string
  /** 正文说明 */
  description?:   string
  /** 底部引言 */
  quote?:         string
  quoteSource?:   string
}

export function PageFooter({
  docId,
  revision        = 'CURRENT',
  classification  = 'UNRESTRICTED',
  description,
  quote,
  quoteSource     = '— The Administration',
}: PageFooterProps) {
  return (
    <footer className="page-footer">
      {docId && (
        <p style={{ margin: '0 0 4px' }}>
          DOCUMENT: {docId} · REVISION: {revision} · CLASSIFICATION: {classification}
        </p>
      )}

      {description && (
        <p style={{ margin: '0 0 4px', color: '#222222' }}>{description}</p>
      )}

      {quote && (
        <>
          <p className="page-footer__quote" style={{ margin: '6px 0 2px' }}>
            "{quote}"
          </p>
          <p style={{ margin: 0, color: '#1a1a1a' }}>{quoteSource}</p>
        </>
      )}
    </footer>
  )
}
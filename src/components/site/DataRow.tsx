// src/components/site/DataRow.tsx
// 水平键值行，用于角色/职位信息表

import React from 'react'

interface DataRowProps {
  label:    string
  children: React.ReactNode
  accent?:  boolean
  className?: string
}

export function DataRow({
  label,
  children,
  accent    = false,
  className = '',
}: DataRowProps) {
  return (
    <div
      className={`data-row ${className}`.trim()}
      style={accent ? { background: '#161616' } : undefined}
    >
      <div className="data-row__label">{label}</div>
      <div className="data-row__value">{children}</div>
    </div>
  )
}

/* ── DataTable 容器 ─────────────────────────────────────── */

interface DataTableProps {
  children:  React.ReactNode
  className?: string
}

export function DataTable({ children, className = '' }: DataTableProps) {
  return (
    <div
      className={className}
      style={{
        border:       '1px solid #1a1a1a',
        overflow:     'hidden',
      }}
    >
      {children}
    </div>
  )
}
// src/components/site/types.ts
// 所有组件共享的类型定义

export type AccentColor =
  | 'gray'
  | 'red'
  | 'gold'
  | 'blue'
  | 'purple'
  | 'green'
  | 'orange'
  | 'black'

export type StatusColor =
  | 'green'
  | 'yellow'
  | 'orange'
  | 'red'
  | 'redbio'
  | 'black'

export type PLLevel = 1 | 2 | 3 | 4 | 5 | 'x'

export type BadgeVariant =
  | 'complete'
  | 'pending'
  | 'active'
  | 'vacant'
  | 'official'
  | 'redacted'

export type StatusDotVariant =
  | 'active'
  | 'vacant'
  | 'pending'
  | 'offline'

export interface ArchiveBlockMeta {
  id?:             string
  classification?: string
  date?:           string
  author?:         string
  note?:           string
}
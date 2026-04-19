// src/pages/index.tsx

import React from 'react'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import styles from './index.module.css'

/* ── 导航卡片数据 ─────────────────────────────────────────────── */

interface NavItem {
  label:    string
  category: string
  href:     string
  img:      string
  accent?:  string
}

const NAV_ITEMS: NavItem[] = [
  {
    label:    'Teams',
    category: 'DOSSIER',
    href:     '/docs/teams',
    img:      '/img/thumb-teams.png',
  },
  {
    label:    'Clearance Levels',
    category: 'ACCESS',
    href:     '/docs/clearance-levels',
    img:      '/img/thumb-levels.png',
  },
  {
    label:    'Faction',
    category: 'HOSTILE',
    href:     '/docs/faction',
    img:      '/img/thumb-faction.png',
  },
  {
    label:    'Rules',
    category: 'DIRECTIVE',
    href:     '/docs/rules',
    img:      '/img/thumb-rules.png',
    accent:   '#cc8800',
  },
  {
    label:    'Lore',
    category: 'ARCHIVE',
    href:     '/docs/lore',
    img:      '/img/thumb-lore.png',
  },
  {
    label:    'Staff',
    category: 'OVERSIGHT',
    href:     '/docs/staff',
    img:      '/img/thumb-staff.png',
  },
]

/* ── NavCard ──────────────────────────────────────────────────── */

function NavCard({ item }: { item: NavItem }) {
  return (
    <Link
      to={item.href}
      className={styles.navCard}
      style={item.accent ? { borderTopColor: item.accent } : undefined}
    >
      <img
        src={item.img}
        alt={item.label}
        className={styles.navCardImage}
        loading="lazy"
        onError={e => {
          const el = e.currentTarget as HTMLImageElement
          el.style.display = 'none'
          const placeholder = document.createElement('div')
          placeholder.style.cssText =
            'width:100%;aspect-ratio:16/9;background:#161616;display:flex;align-items:center;justify-content:center'
          placeholder.innerHTML =
            `<span style="font-family:monospace;font-size:0.5rem;color:#333;letter-spacing:0.2em">${item.category}</span>`
          el.parentElement?.insertBefore(placeholder, el)
        }}
      />
      <div className={styles.navCardFooter}>
        <p className={styles.navCardLabel}>{item.category}</p>
        <p className={styles.navCardTitle}>{item.label}</p>
      </div>
    </Link>
  )
}

/* ── Sidebar ──────────────────────────────────────────────────── */

function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      {/* About panel */}
      <div className={styles.sidePanel}>
        <div className={styles.sidePanelHeader}>
          <p className={styles.sidePanelHeaderEye}>ABOUT THIS GAME</p>
          <p className={styles.sidePanelHeaderTitle}>On-Site: Roleplay</p>
        </div>
        <div className={styles.sidePanelBody}>
          This is the official knowledge archive for{' '}
          <a
            href="https://www.roblox.com/games/135415882857772"
            target="_blank"
            rel="noopener noreferrer"
          >
            On-Site: Roleplay
          </a>
          , maintained by the official team.
        </div>

        <div className={styles.sidePanelRow}>
          <p className={styles.sidePanelRowLabel}>DEVELOPER</p>
          <p className={styles.sidePanelRowValue}>
            <a
              href="https://www.roblox.com/users/5252077194/profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              chuyuewei
            </a>
          </p>
        </div>

        <div className={styles.sidePanelRow}>
          <p className={styles.sidePanelRowLabel}>COMMUNITY</p>
          <p className={styles.sidePanelRowValue}>
            <a
              href="https://www.roblox.com/communities/1054225670/On-site-Roleplay-Community"
              target="_blank"
              rel="noopener noreferrer"
            >
              On-Site: Roleplay Community Group
            </a>
          </p>
        </div>

        <p className={styles.sideStatus}>
          ARCHIVE STATUS: OPEN · PUBLIC ACCESS
        </p>
      </div>

      {/* Discord Widget */}
      <div style={{ marginTop: '0.75rem' }}>
        <iframe
          src="https://discord.com/widget?id=1312447590700417057&theme=dark"
          width="100%"
          height="500"
          allowTransparency={true}
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          style={{
            borderRadius: '4px',
            border:       '1px solid #1a1a1a',
            display:      'block',
          }}
        />
      </div>

      {/* Quick links panel */}
      <div className={styles.sidePanel}>
        <div className={styles.sidePanelHeader}>
          <p className={styles.sidePanelHeaderEye}>QUICK ACCESS</p>
          <p className={styles.sidePanelHeaderTitle}>Frequently Referenced</p>
        </div>

        {[
          { label: 'Facility Protocols',  href: '/docs/facility-protocols' },
          { label: 'Warhead Initiative',  href: '/docs/lore/warhead-initiative' },
          { label: 'Chain of Oversight',  href: '/docs/staff' },
          { label: 'Community Factions',  href: '/docs/faction' },
          { label: 'Lore Archive',        href: '/docs/lore' },
        ].map(link => (
          <div
            key={link.href}
            className={styles.sidePanelRow}
            style={{ padding: '0.5rem 1rem' }}
          >
            <Link
              to={link.href}
              style={{
                fontFamily:     'var(--ifm-font-family-monospace)',
                fontSize:       '0.6875rem',
                color:          '#666666',
                textDecoration: 'none',
                letterSpacing:  '0.05em',
                display:        'flex',
                alignItems:     'center',
                gap:            '0.5rem',
                transition:     'color 200ms ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#aaaaaa')}
              onMouseLeave={e => (e.currentTarget.style.color = '#666666')}
            >
              <span style={{ color: '#333333' }}>→</span>
              {link.label}
            </Link>
          </div>
        ))}
      </div>

    </aside>
  )
}

/* ── Homepage ─────────────────────────────────────────────────── */

export default function Home(): React.ReactElement {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout
      title="On-Site: Roleplay Wiki"
      description="The official knowledge archive for On-Site: Roleplay — game settings, lore, rules, and guides."
    >
      <div className={styles.pageBody}>

        {/* Hero */}
        <header className={styles.heroBanner}>
          <p className={styles.heroEyebrow}>
            THE ADMINISTRATION · ARCHIVAL DIVISION · PUBLIC ACCESS TERMINAL
          </p>
          <h1 className={styles.heroTitle}>ON-SITE: ROLEPLAY</h1>
          <p className={styles.heroSubtitle}>
            WIKI · KNOWLEDGE ARCHIVE · ALL CLEARANCE LEVELS
          </p>
          <div className={styles.heroDivider} />
          <div className={styles.heroQuote}>
            <p style={{ margin: '0 0 4px' }}>
              Here are collected the most authoritative, detailed, and complete
              game settings and guides.
            </p>
          </div>
        </header>

        {/* Body */}
        <div className={styles.contentGrid}>

          {/* Left — nav grid */}
          <main className={styles.navSection}>
            <p className={styles.navSectionLabel}>CLASSIFIED ARCHIVE INDEX</p>
            <div className={styles.navGrid}>
              {NAV_ITEMS.map(item => (
                <NavCard key={item.href} item={item} />
              ))}
            </div>

            <div className={styles.footerBar}>
              ON-SITE: ROLEPLAY WIKI · PUBLIC KNOWLEDGE ARCHIVE · ALL CLEARANCE LEVELS
              <br />
              <span style={{ color: '#1a1a1a', fontStyle: 'italic' }}>
                "The facility does not benefit from ignorance. Read the archive. Know your post."
              </span>
            </div>
          </main>

          {/* Right — sidebar */}
          <Sidebar />
        </div>

      </div>
    </Layout>
  )
}
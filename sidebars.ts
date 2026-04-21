// sidebars.ts
import type { SidebarsConfig } from '@docusaurus/plugin-content-docs'

const sidebars: SidebarsConfig = {
  wikiSidebar: [
    {
      type:  'doc',
      id:    'intro',
      label: '← Back to Home',
    },

    // ── LORE ─────────────────────────────────────────────────────
    {
      type:      'category',
      label:     'Lore Archive',
      collapsed: false,
      items: [
        'lore/index',
        {
          type:  'category',
          label: 'Mainline',
          items: [
            'lore/origin',
            'lore/first-cataclysm',
            'lore/the-hostile-dawn',
          ],
        },
        {
          type:  'category',
          label: 'Institutional',
          items: [
            'lore/the-administration',
            'lore/the-facility',
            'lore/the-second-founding',
            'lore/the-protocol-age',
            'lore/the-warhead-initiative',
            'lore/the-administrative-liaison',
          ],
        },
        {
          type:  'category',
          label: 'External & Hostile',
          items: [
            'lore/the-perimeter',
            'lore/the-first-listener',
            'lore/the-board',
            'lore/the-buyers',
            'lore/the-purge-doctrine',
          ],
        },
      ],
    },

    // ── RULES & PROTOCOLS ────────────────────────────────────────
    {
      type:      'category',
      label:     'Rules & Protocols',
      collapsed: false,
      items: [
        'rules',
        'facility-protocols',
        'clearance-levels',
      ],
    },

    // ── TEAMS & FACTIONS ─────────────────────────────────────────
    {
      type:      'category',
      label:     'Teams & Factions',
      collapsed: false,
      items: [
        'teams',
        'faction',
      ],
    },

    // ── STAFF ────────────────────────────────────────────────────
    {
      type:  'doc',
      id:    'staff',
      label: 'Chain of Oversight',
    },
  ],
}

export default sidebars
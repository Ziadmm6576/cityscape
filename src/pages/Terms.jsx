import LegalLayout from './LegalLayout.jsx'

const SECTIONS = [
  {
    heading: 'Quotes',
    body: 'Every project starts with a free site visit and a fixed, itemised quote. Quotes are valid for 30 days and cover the scope described in writing.',
  },
  {
    heading: 'Scope changes',
    body: 'If you change the design or scope once work has started, we will agree any price or schedule adjustments with you in writing before continuing.',
  },
  {
    heading: 'Plant warranty',
    body: 'Trees, shrubs and perennials we install are covered by a 12-month replacement warranty, provided the agreed watering and care plan is followed.',
  },
  {
    heading: 'Workmanship',
    body: 'Hardscaping, irrigation and lighting installations carry a 5-year workmanship warranty. Damage from misuse, extreme weather or third-party work is excluded.',
  },
  {
    heading: 'Payment',
    body: 'Projects are invoiced in stages: a deposit on booking, a progress payment at the halfway mark and the balance on completion. Maintenance plans are billed monthly.',
  },
]

export default function Terms() {
  return (
    <LegalLayout
      eyebrow="Terms"
      title="Terms of service"
      updated="October 2026"
      sections={SECTIONS}
    />
  )
}

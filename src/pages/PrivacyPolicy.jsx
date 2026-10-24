import LegalLayout from './LegalLayout.jsx'

const SECTIONS = [
  {
    heading: 'What we collect',
    body: 'When you request a quote or site visit we collect the details you give us: your name, email address, phone number, postal code, a description of your project and any photos you attach.',
  },
  {
    heading: 'How we use it',
    body: 'We use your information only to respond to your enquiry, prepare a proposal, schedule work and provide aftercare. We do not sell your data or share it with third parties for marketing.',
  },
  {
    heading: 'Photos of your property',
    body: 'Photos you upload help us plan your project before we visit. They are stored securely and are never published without your written permission.',
  },
  {
    heading: 'Retention',
    body: 'Enquiries that do not lead to a project are deleted after 12 months. Records for completed projects are kept for as long as required for warranty and accounting purposes.',
  },
  {
    heading: 'Your rights',
    body: 'You can ask to see, correct or delete the personal information we hold about you at any time by emailing hello@cityscap.com.',
  },
]

export default function PrivacyPolicy() {
  return (
    <LegalLayout
      eyebrow="Privacy"
      title="Privacy policy"
      updated="October 2026"
      sections={SECTIONS}
    />
  )
}

import type { Metadata } from 'next'
import LegalPageLayout from '@/components/LegalPageLayout'

export const metadata: Metadata = {
  title: 'Privacy Policy | Rise Infotech',
  description: 'How Rise Infotech collects, uses, and protects your personal information.',
  alternates: { canonical: '/privacy-policy' },
}

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      lastUpdated="12 July 2026"
      intro={
        <>
          Rise Infotech ("we", "us", "our") provides SAP and Data Science training. This
          policy explains what information we collect when you use this website or enroll
          in a course, how we use it, and the choices you have.
        </>
      }
      sections={[
        {
          id: 'information-we-collect',
          title: 'Information We Collect',
          body: (
            <>
              <p>We collect information you provide directly to us, including:</p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Name, email address, and phone number when you enroll in a course or contact us</li>
                <li>Details you submit through enrollment or "Buy Now" forms on course and workshop pages</li>
                <li>Messages you send us via contact forms, email, or WhatsApp</li>
              </ul>
              <p>
                We also collect limited technical information automatically — such as browser
                type, device information, and pages visited — to help us understand how the
                site is used and to fix issues.
              </p>
            </>
          ),
        },
        {
          id: 'how-we-use-information',
          title: 'How We Use Your Information',
          body: (
            <ul className="list-disc space-y-1.5 pl-5">
              <li>To process course enrollments and respond to inquiries</li>
              <li>To contact you about batch schedules, course updates, or payment confirmation</li>
              <li>To improve our website, courses, and support</li>
              <li>To send occasional updates about new batches or courses, which you can opt out of at any time</li>
            </ul>
          ),
        },
        {
          id: 'payments',
          title: 'Payments',
          body: (
            <>
              <p>
                Course payments on this site are currently handled through a demo checkout
                flow for evaluation purposes and do not process real transactions. Once a
                live payment gateway is enabled, this section will be updated to describe how
                payment information is collected, processed, and secured by that provider —
                we do not store full card details on our own servers.
              </p>
            </>
          ),
        },
        {
          id: 'sharing',
          title: 'How We Share Information',
          body: (
            <>
              <p>
                We do not sell your personal information. We may share it with:
              </p>
              <ul className="list-disc space-y-1.5 pl-5">
                <li>Service providers who help us operate the site (e.g. hosting, email, and — once enabled — payment processing)</li>
                <li>Authorities, if required by law or to protect our legal rights</li>
              </ul>
            </>
          ),
        },
        {
          id: 'cookies',
          title: 'Cookies',
          body: (
            <p>
              We may use basic cookies or similar technologies to remember your preferences
              and understand site usage. You can disable cookies in your browser settings;
              some parts of the site may not function as intended if you do.
            </p>
          ),
        },
        {
          id: 'data-retention',
          title: 'Data Retention',
          body: (
            <p>
              We retain personal information for as long as needed to fulfill the purposes
              described in this policy, including maintaining records of course enrollment,
              or as required by applicable law.
            </p>
          ),
        },
        {
          id: 'your-rights',
          title: 'Your Rights',
          body: (
            <p>
              You can request access to, correction of, or deletion of your personal
              information by contacting us using the details below. We'll respond within a
              reasonable timeframe.
            </p>
          ),
        },
        {
          id: 'changes',
          title: 'Changes to This Policy',
          body: (
            <p>
              We may update this policy from time to time. We'll revise the "Last updated"
              date above when we do. Continued use of the site after changes means you accept
              the updated policy.
            </p>
          ),
        },
      ]}
    />
  )
}
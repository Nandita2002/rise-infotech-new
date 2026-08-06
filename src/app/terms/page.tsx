import type { Metadata } from 'next'
import LegalPageLayout from '@/components/LegalPageLayout'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Rise Infotech',
  description: 'The terms that govern your use of the Rise Infotech website and course enrollment.',
  alternates: { canonical: '/terms' },
}

export default function TermsPage() {
  return (
    <LegalPageLayout
      eyebrow="Legal"
      title="Terms & Conditions"
      lastUpdated="12 July 2026"
      intro={
        <>
          These terms govern your use of the Rise Infotech website and enrollment in any SAP
          or Data Science course or workshop we offer. By using this site or enrolling in a
          course, you agree to these terms.
        </>
      }
      sections={[
        {
          id: 'enrollment',
          title: 'Course Enrollment',
          body: (
            <>
              <p>
                Submitting an enrollment form or completing checkout reserves your seat in a
                batch, subject to availability. We may contact you to confirm your enrollment
                before it is finalized.
              </p>
              <p>
                Batch dates, timings, and trainers are provided as a guide and may change; we
                will notify enrolled students of any changes.
              </p>
            </>
          ),
        },
        {
          id: 'payments-refunds',
          title: 'Payments & Refunds',
          body: (
            <>
              <p>
                Course fees are as listed at the time of enrollment. Payment on this site is
                currently processed through a demo checkout for evaluation purposes only — no
                real payment is collected through it at this time. Once live payments are
                enabled, this section will set out accepted payment methods, refund
                eligibility, and cancellation timelines.
              </p>
              <p>
                Until then, any enrollment intent submitted through the site will be followed
                up manually by our team to arrange actual payment.
              </p>
            </>
          ),
        },
        {
          id: 'no-guarantee',
          title: 'No Guarantee of Outcomes',
          body: (
            <p>
              While we provide placement assistance, career guidance, and certification
              preparation support, we do not guarantee job placement, interview outcomes, or
              certification results. Outcomes depend on individual effort, market conditions,
              and factors outside our control.
            </p>
          ),
        },
        {
          id: 'conduct',
          title: 'Acceptable Use',
          body: (
            <ul className="list-disc space-y-1.5 pl-5">
              <li>Don't share your course access, materials, or recordings with anyone outside your enrollment</li>
              <li>Don't use the website or course systems in a way that disrupts other students or our infrastructure</li>
              <li>Don't misrepresent your identity or eligibility when enrolling</li>
            </ul>
          ),
        },
        {
          id: 'intellectual-property',
          title: 'Intellectual Property',
          body: (
            <p>
              Course materials, recordings, website content, and branding belong to Rise
              Infotech or our licensors. You may use course materials for your own learning
              but may not redistribute, resell, or publish them without our written
              permission.
            </p>
          ),
        },
        {
          id: 'liability',
          title: 'Limitation of Liability',
          body: (
            <p>
              Rise Infotech provides this website and its courses on an "as is" basis. To the
              extent permitted by law, we are not liable for indirect or consequential losses
              arising from your use of the site or enrollment in a course, including
              technical interruptions or third-party service outages.
            </p>
          ),
        },
        {
          id: 'governing-law',
          title: 'Governing Law',
          body: (
            <p>
              These terms are governed by the laws of India, and any disputes will be subject
              to the jurisdiction of the courts in Bangalore, Karnataka.
            </p>
          ),
        },
        {
          id: 'changes',
          title: 'Changes to These Terms',
          body: (
            <p>
              We may update these terms from time to time. We'll revise the "Last updated"
              date above when we do. Continued use of the site after changes means you accept
              the updated terms.
            </p>
          ),
        },
      ]}
    />
  )
}
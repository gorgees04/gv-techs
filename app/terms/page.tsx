import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Privacy Policy",
  description:
    "Terms & Conditions and Privacy Policy for G.V. TECHS — web design, development, and SEO services for Australian businesses.",
  robots: { index: true, follow: true },
};

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xl font-bold text-slate-900 mt-10 mb-3">{children}</h2>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return <p className="text-slate-600 text-sm leading-relaxed mb-3">{children}</p>;
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-none space-y-2 mb-3 pl-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function Divider() {
  return <hr className="my-12 border-slate-200" />;
}

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[#040D21] pt-32 pb-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <span className="text-blue-400 font-semibold text-sm tracking-widest uppercase">
            Legal
          </span>
          <h1 className="text-5xl font-bold text-white mt-3 mb-5">
            Terms &amp; Privacy
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">
            Our Terms &amp; Conditions and Privacy Policy — effective 28 April 2026.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">

        {/* Jump links */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-12 text-sm">
          <p className="font-semibold text-slate-900 mb-3">On this page</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#terms" className="text-blue-600 hover:underline">Terms &amp; Conditions of Service</a>
            <span className="hidden sm:block text-slate-300">·</span>
            <a href="#privacy" className="text-blue-600 hover:underline">Privacy Policy</a>
          </div>
        </div>

        {/* ── TERMS & CONDITIONS ── */}
        <section id="terms">
          <div className="bg-[#040D21] rounded-2xl px-8 py-7 mb-8">
            <h2 className="text-2xl font-bold text-white">Terms &amp; Conditions of Service</h2>
            <p className="text-slate-400 text-sm mt-1">ABN 46 646 695 688 · Effective 28 April 2026</p>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl px-6 py-5 mb-8 text-sm text-slate-700 leading-relaxed">
            These Terms &amp; Conditions (&lsquo;Terms&rsquo;) apply to all services provided by G.V. TECHS (ABN 46 646 695 688) to
            clients. By engaging G.V. TECHS or signing a Service Agreement, you agree to be bound by these Terms.
            Please read them carefully.
          </div>

          {/* Business info table */}
          <div className="mb-8">
            <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-3">Business Information</p>
            <div className="border border-slate-200 rounded-xl overflow-hidden text-sm divide-y divide-slate-100">
              {[
                ["Business Name", "G.V. TECHS"],
                ["ABN", "46 646 695 688"],
                ["Contact Person", "Gorgees Odisho"],
                ["Email", "info@gv-techs.com"],
                ["Phone", "+61 477 771 207"],
                ["Website", "gv-techs.com"],
                ["Location", "Melbourne, VIC, Australia"],
              ].map(([label, value]) => (
                <div key={label} className="flex">
                  <span className="w-40 shrink-0 px-5 py-3 text-slate-500 font-medium bg-slate-50">{label}</span>
                  <span className="px-5 py-3 text-slate-800">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <SectionHeader>1. Definitions</SectionHeader>
          <Body>&lsquo;Company&rsquo; refers to G.V. TECHS (ABN 46 646 695 688), its owner, employees, and contractors.</Body>
          <Body>&lsquo;Client&rsquo; refers to the individual or business entity that has engaged the Company for services.</Body>
          <Body>&lsquo;Services&rsquo; refers to any web design, web development, SEO, maintenance, or related digital services provided by the Company.</Body>
          <Body>&lsquo;Agreement&rsquo; refers to the signed Service Agreement or Proposal accepted by the Client.</Body>
          <Body>&lsquo;Deliverables&rsquo; refers to the completed work product(s) outlined in the Agreement.</Body>

          <SectionHeader>2. Engagement &amp; Acceptance</SectionHeader>
          <Body>
            These Terms apply from the moment the Client engages the Company by: (a) signing a Service Agreement or
            Proposal, (b) paying a deposit, or (c) providing written or verbal instruction to commence work.
          </Body>
          <Body>The Client confirms they have the authority to enter into this agreement on behalf of their business.</Body>

          <SectionHeader>3. Services &amp; Scope of Work</SectionHeader>
          <Body>
            The Company will provide the services outlined in the signed Agreement or Proposal. Any work requested beyond
            the agreed scope constitutes a variation and will be quoted separately.
          </Body>
          <Body>
            Variations must be approved in writing by the Client before the Company commences additional work. Verbal
            approvals are not binding.
          </Body>
          <Body>
            The Client is responsible for providing all necessary content, assets, credentials, and approvals in a timely
            manner. Delays caused by the Client may affect project timelines and the Company accepts no liability for such
            delays.
          </Body>

          <SectionHeader>4. Fees &amp; Payment</SectionHeader>
          <Body>All fees are quoted in Australian Dollars (AUD) and are exclusive of GST unless otherwise stated.</Body>
          <Body>
            For project-based work, a non-refundable deposit of 50% is required before work commences. The remaining 50%
            is due upon project completion prior to launch or file delivery.
          </Body>
          <Body>For monthly retainer services (SEO, Maintenance), payment is due on the 1st of each month in advance.</Body>
          <Body>
            Invoices not paid within 14 days of the due date are considered overdue and may attract a late payment fee of
            5% per month on the outstanding balance.
          </Body>
          <Body>The Company reserves the right to pause or suspend services on overdue accounts until payment is received.</Body>
          <Body>Accepted payment methods: Stripe (credit/debit card) and bank transfer.</Body>

          <SectionHeader>5. Revisions &amp; Amendments</SectionHeader>
          <Body>
            Website design and development projects include the number of revision rounds specified in the Agreement.
          </Body>
          <Body>
            A &lsquo;revision round&rsquo; is defined as a single, consolidated list of feedback submitted by the Client via email or
            agreed communication channel.
          </Body>
          <Body>Additional revision rounds beyond those included will be billed at $120 AUD per hour.</Body>
          <Body>
            Revision requests must be submitted within 7 business days of design or development delivery. Requests
            submitted after this period may be treated as new scope.
          </Body>

          <SectionHeader>6. Timelines &amp; Delivery</SectionHeader>
          <Body>
            The Company will provide an estimated project timeline upon commencement. All timelines are estimates and not
            guaranteed completion dates.
          </Body>
          <Body>
            Timelines may be impacted by: (a) delays in client feedback or content supply, (b) third-party service
            outages, (c) force majeure events.
          </Body>
          <Body>The Company will notify the Client promptly of any anticipated delays.</Body>
          <Body>
            Time-sensitive projects requiring guaranteed deadlines must be agreed in writing and may attract a priority
            surcharge.
          </Body>

          <SectionHeader>7. Client Responsibilities</SectionHeader>
          <Body>The Client agrees to:</Body>
          <BulletList items={[
            "Provide all required content (text, images, logos, brand guidelines) within 5 business days of project commencement",
            "Provide timely feedback and approvals to avoid project delays",
            "Ensure all content supplied is owned by the Client or properly licensed for use",
            "Provide accurate business information for use in deliverables",
            "Notify the Company of any changes that may affect the project scope",
          ]} />

          <SectionHeader>8. Intellectual Property</SectionHeader>
          <Body>
            Upon receipt of full payment, the Client owns all custom design and development work created specifically for
            their project.
          </Body>
          <Body>The Company retains ownership of all work until full payment has been received.</Body>
          <Body>
            The Company retains the right to display completed work in its portfolio and marketing materials unless the
            Client requests otherwise in writing prior to project commencement.
          </Body>
          <Body>
            Third-party assets including stock photography, fonts, plugins, and frameworks remain subject to their
            respective licences. The Client is responsible for ensuring ongoing licence compliance for third-party assets.
          </Body>
          <Body>
            The Company retains ownership of all source code, frameworks, tools, and methodologies developed
            independently of the Client&rsquo;s project.
          </Body>

          <SectionHeader>9. Confidentiality</SectionHeader>
          <Body>
            Both parties agree to keep confidential any proprietary or sensitive information shared during the
            engagement.
          </Body>
          <Body>
            The Company will not disclose client business information, strategies, or access credentials to any third
            party except where required to deliver the agreed services (e.g. hosting providers, platform integrations).
          </Body>
          <Body>This obligation of confidentiality survives the termination of this agreement.</Body>

          <SectionHeader>10. SEO Services Disclaimer</SectionHeader>
          <Body>
            Search engine optimisation (SEO) is provided based on current industry best practices. The Company makes no
            guarantee of specific search engine rankings, traffic volumes, lead generation, or revenue outcomes.
          </Body>
          <Body>
            Search engine algorithms are controlled by third parties (including Google and Bing) and are subject to
            change at any time without notice.
          </Body>
          <Body>
            Results from SEO activity typically become visible within 3–6 months. The Client acknowledges that SEO is a
            long-term strategy.
          </Body>
          <Body>
            The Company will not engage in black-hat, spammy, or unethical SEO practices. The Company is not liable for
            penalties imposed by search engines as a result of third-party actions or pre-existing issues on the
            Client&rsquo;s website.
          </Body>

          <SectionHeader>11. Cancellation &amp; Termination</SectionHeader>
          <Body>Either party may terminate this agreement with 14 days written notice.</Body>
          <Body>The initial deposit is non-refundable under all circumstances.</Body>
          <Body>
            If the Client cancels after work has commenced, the Client is liable for the value of work completed to the
            date of cancellation, calculated at the Company&rsquo;s standard hourly rate of $120/hour.
          </Body>
          <Body>
            For monthly retainer services, a minimum 3-month commitment applies from the commencement date. After the
            minimum term, cancellation requires 14 days written notice.
          </Body>
          <Body>
            The Company may terminate this agreement immediately if the Client: (a) fails to pay invoices, (b) acts
            abusively toward Company staff, or (c) requests work that violates applicable laws.
          </Body>

          <SectionHeader>12. Warranties &amp; Post-Launch Support</SectionHeader>
          <Body>
            The Company provides a 30-day warranty on all development work from the date of launch or delivery.
          </Body>
          <Body>
            During the warranty period, the Company will fix bugs or errors caused directly by its own work at no
            additional charge.
          </Body>
          <Body>
            The warranty does not cover: (a) issues caused by Client modifications, (b) third-party plugin or software
            updates, (c) hosting or server issues, (d) changes in browser standards.
          </Body>
          <Body>
            Ongoing website support and maintenance beyond the warranty period is available via the Company&rsquo;s
            maintenance plans.
          </Body>

          <SectionHeader>13. Limitation of Liability</SectionHeader>
          <Body>
            The Company&rsquo;s total liability to the Client under or in connection with this agreement is limited to the
            total fees paid by the Client to the Company in the 3 months preceding the claim.
          </Body>
          <Body>
            The Company is not liable for any indirect, incidental, special, consequential, or punitive damages
            including but not limited to loss of revenue, loss of profits, loss of data, or business interruption.
          </Body>
          <Body>
            The Company is not responsible for outages or failures of third-party services including hosting providers,
            domain registrars, payment gateways, or software platforms.
          </Body>
          <Body>Nothing in these Terms limits liability for fraud, death, or personal injury caused by negligence.</Body>

          <SectionHeader>14. Dispute Resolution</SectionHeader>
          <Body>
            In the event of a dispute, both parties agree to attempt resolution in good faith through direct negotiation
            before initiating formal proceedings.
          </Body>
          <Body>
            If the dispute cannot be resolved within 30 days of written notice, either party may refer the matter to
            mediation.
          </Body>
          <Body>
            These Terms are governed by the laws of Victoria, Australia. Any legal proceedings will be conducted in the
            courts of Victoria.
          </Body>

          <SectionHeader>15. Amendments to These Terms</SectionHeader>
          <Body>
            The Company reserves the right to update these Terms at any time. Updated Terms will be published on
            gv-techs.com and will apply to all new engagements from the date of publication.
          </Body>
          <Body>
            Continued engagement with the Company after an update constitutes acceptance of the revised Terms.
          </Body>
        </section>

        <Divider />

        {/* ── PRIVACY POLICY ── */}
        <section id="privacy">
          <div className="bg-[#040D21] rounded-2xl px-8 py-7 mb-8">
            <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
            <p className="text-slate-400 text-sm mt-1">ABN 46 646 695 688 · Effective 28 April 2026</p>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl px-6 py-5 mb-8 text-sm text-slate-700 leading-relaxed">
            G.V. TECHS (ABN 46 646 695 688) is committed to protecting your privacy in accordance with the Australian
            Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs). This policy explains how we collect,
            use, store, and disclose your personal information.
          </div>

          <SectionHeader>1. Who We Are</SectionHeader>
          <Body>
            G.V. TECHS is a web design, development, and SEO business based in Melbourne, Victoria, Australia. We
            operate the website gv-techs.com.
          </Body>
          <Body>
            If you have any questions about this Privacy Policy or how we handle your data, contact us at:{" "}
            <a href="mailto:info@gv-techs.com" className="text-blue-600 hover:underline">info@gv-techs.com</a> or +61 477 771 207.
          </Body>

          <SectionHeader>2. What Information We Collect</SectionHeader>
          <Body>We collect personal information that is necessary to provide our services. This may include:</Body>
          <BulletList items={[
            "Your full name and business name",
            "Email address and phone number",
            "Business address and website URL",
            "Payment information (processed securely via Stripe — we do not store card details)",
            "Login credentials for platforms we manage on your behalf (e.g. Google, hosting, CMS platforms)",
            "Information you provide via our website contact form or during consultations",
            "Usage data and analytics from our website (via cookies)",
          ]} />

          <SectionHeader>3. How We Collect Information</SectionHeader>
          <Body>We collect personal information through:</Body>
          <BulletList items={[
            "Direct enquiries via our website contact form, email, or phone",
            "Signed service agreements and proposals",
            "Payment processing via Stripe",
            "Onboarding forms and project briefings",
            "Cookies and analytics tools on our website (see Section 8)",
          ]} />

          <SectionHeader>4. How We Use Your Information</SectionHeader>
          <Body>We use your personal information to:</Body>
          <BulletList items={[
            "Provide, manage, and improve the services you have engaged us for",
            "Communicate with you about your project, invoices, and support",
            "Process payments and issue invoices",
            "Send you service updates, proposals, or relevant information",
            "Comply with legal obligations",
            "Improve our website and services through analytics",
          ]} />

          <SectionHeader>5. Disclosure of Your Information</SectionHeader>
          <Body>We do not sell, rent, or trade your personal information to third parties.</Body>
          <Body>
            We may share your information with trusted third-party service providers who assist us in delivering our
            services, including:
          </Body>
          <BulletList items={[
            "Stripe — payment processing (stripe.com/au/privacy)",
            "Google — analytics, Google Ads, Google Workspace",
            "Hosting providers — for websites we build and manage on your behalf",
            "Domain registrars — for domain management services",
            "Accounting software — for invoice and tax record management",
          ]} />
          <Body>
            All third-party providers are contractually required to handle your data securely and in compliance with
            applicable privacy laws.
          </Body>

          <SectionHeader>6. Data Storage &amp; Security</SectionHeader>
          <Body>
            Your personal information is stored securely on Australian or internationally recognised cloud
            infrastructure with appropriate security measures including encryption, access controls, and regular
            security reviews.
          </Body>
          <Body>
            We retain your information for as long as necessary to fulfil the purposes outlined in this policy, or as
            required by law (typically 7 years for financial records under Australian law).
          </Body>
          <Body>
            While we take reasonable steps to protect your data, no method of electronic transmission or storage is
            100% secure. We cannot guarantee absolute security.
          </Body>

          <SectionHeader>7. Your Rights</SectionHeader>
          <Body>Under the Australian Privacy Act, you have the right to:</Body>
          <BulletList items={[
            "Request access to the personal information we hold about you",
            "Request correction of inaccurate, incomplete, or out-of-date information",
            "Request deletion of your personal information (subject to legal obligations)",
            "Opt out of marketing communications at any time",
            "Lodge a complaint with the Office of the Australian Information Commissioner (OAIC) at oaic.gov.au",
          ]} />
          <Body>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:info@gv-techs.com" className="text-blue-600 hover:underline">info@gv-techs.com</a>.
            We will respond within 30 days.
          </Body>

          <SectionHeader>8. Cookies &amp; Website Analytics</SectionHeader>
          <Body>
            Our website (gv-techs.com) uses cookies and analytics tools to improve user experience and understand how
            visitors interact with our site.
          </Body>
          <Body>
            We may use tools such as Google Analytics to collect anonymised usage data including pages visited, time on
            site, and referral sources. This data does not identify you personally.
          </Body>
          <Body>
            You can disable cookies through your browser settings. Some features of our website may not function
            correctly if cookies are disabled.
          </Body>

          <SectionHeader>9. Marketing Communications</SectionHeader>
          <Body>
            We may contact you with information about our services, promotions, or relevant updates. You can opt out of
            marketing communications at any time by:
          </Body>
          <BulletList items={[
            "Emailing us at info@gv-techs.com with 'Unsubscribe' in the subject line",
            "Clicking the unsubscribe link in any marketing email",
          ]} />
          <Body>
            We comply with the Australian Spam Act 2003 and will not send unsolicited commercial electronic messages.
          </Body>

          <SectionHeader>10. Third-Party Links</SectionHeader>
          <Body>
            Our website may contain links to third-party websites. G.V. TECHS is not responsible for the privacy
            practices of those websites. We encourage you to review the privacy policies of any third-party sites you
            visit.
          </Body>

          <SectionHeader>11. Children&rsquo;s Privacy</SectionHeader>
          <Body>
            Our services are not directed at individuals under the age of 18. We do not knowingly collect personal
            information from minors. If you believe a minor has provided us with personal information, please contact
            us and we will delete it promptly.
          </Body>

          <SectionHeader>12. Changes to This Policy</SectionHeader>
          <Body>
            We may update this Privacy Policy from time to time. Changes will be published on gv-techs.com with an
            updated effective date. We encourage you to review this policy periodically.
          </Body>
          <Body>
            Continued use of our services after changes are posted constitutes acceptance of the updated policy.
          </Body>

          <SectionHeader>13. Contact &amp; Complaints</SectionHeader>
          <Body>
            If you have any questions, concerns, or complaints about this Privacy Policy or how we handle your personal
            information, please contact:
          </Body>
          <BulletList items={[
            "Name: Gorgees Odisho — G.V. TECHS",
            "Email: info@gv-techs.com",
            "Phone: +61 477 771 207",
            "Website: gv-techs.com",
          ]} />
          <Body>
            If you are not satisfied with our response, you may lodge a complaint with the Office of the Australian
            Information Commissioner (OAIC): oaic.gov.au · 1300 363 992.
          </Body>
        </section>

        {/* Footer note */}
        <div className="mt-12 border-t border-slate-200 pt-8 text-center text-xs text-slate-400 leading-relaxed">
          G.V. TECHS · ABN 46 646 695 688 · info@gv-techs.com · +61 477 771 207 · gv-techs.com · Melbourne, VIC,
          Australia · Last updated 28 April 2026 · Compliant with Australian Privacy Act 1988 &amp; Australian Privacy
          Principles
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-3 rounded-full transition-colors text-sm"
          >
            Questions? Contact us
          </Link>
        </div>
      </div>
    </>
  );
}

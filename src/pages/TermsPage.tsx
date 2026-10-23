import React from 'react';

export const TermsPage: React.FC = () => {
  return (
    <div className="page-wrapper legal-page">
      <section className="page-header-section">
        <div className="section-container">
          <div className="badge-wrapper">
            <span className="badge-cyan">Terms of Engagement</span>
          </div>
          <h1 className="page-title">Terms of Use</h1>
          <p className="page-lead">
            The rules, ethical boundaries, and authorized usage standards governing interaction
            with Foxbat Intelligence and our online platforms.
          </p>
        </div>
      </section>

      <section className="section legal-content-section">
        <div className="section-container">
          <div className="legal-document-card">
            <h2>1. Informational & Educational Scope</h2>
            <p>
              The content provided on Foxbat Intelligence—including Knowledge Center articles, checklists,
              and educational tutorials—is published exclusively for defensive, educational, and awareness
              purposes. Users are responsible for applying these concepts lawfully and ethically.
            </p>

            <h2>2. Strict Ethical Assessment Boundaries</h2>
            <p>
              Foxbat Intelligence operates strictly under defensive security principles. We do not engage
              in unauthorized penetration testing, port scanning, exploitation, or malicious disruption of
              external networks. Any future security assessment mandates verified ownership and explicit
              written consent prior to technical engagement.
            </p>

            <h2>3. Intellectual Property & Brand Assets</h2>
            <p>
              The Foxbat Intelligence name, crest emblem, graphic posters, website copy, and custom
              educational materials are protected intellectual assets. They may not be reproduced, altered,
              redrawn, or used commercially without express written authorization.
            </p>

            <h2>4. Disclaimer of Warranties</h2>
            <p>
              While we strive to provide accurate and actionable security advice, the rapidly evolving nature
              of cybersecurity threats means that no assessment or checklist can guarantee 100% protection
              against all vulnerabilities or future exploits. Information is provided &ldquo;as is&rdquo; without
              implied warranties of absolute immunity.
            </p>

            <h2>5. Revisions and Governance</h2>
            <p>
              These Terms of Use may be updated periodically to reflect ongoing development, legal standards,
              and service availability. Continued use of the website represents acceptance of the active terms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

import React from 'react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="page-wrapper legal-page">
      <section className="page-header-section">
        <div className="section-container">
          <div className="badge-wrapper">
            <span className="badge-cyan">Governance & Data Protection</span>
          </div>
          <h1 className="page-title">Privacy Policy</h1>
          <p className="page-lead">
            Foxbat Intelligence is committed to the highest standards of data integrity, confidentiality,
            and privacy across all student and technical operations.
          </p>
        </div>
      </section>

      <section className="section legal-content-section">
        <div className="section-container">
          <div className="legal-document-card">
            <h2>1. Ethical Commitment to Confidentiality</h2>
            <p>
              As a cybersecurity-focused entity, data confidentiality is foundational to our mission.
              Any information shared with Foxbat Intelligence, including inquiries, correspondence, or
              system technical details, is treated as strictly private.
            </p>

            <h2>2. Information Collection in Phase 1</h2>
            <p>
              During this demonstration and foundation phase, the public website operates primarily as a
              static informational platform. We do not track visitors with third-party advertising cookies,
              commercial telemetry beacons, or unauthorized behavioral profiling tools.
            </p>

            <h2>3. Security Assessment Deliverables</h2>
            <p>
              When formal security assessment services become active in future phases, all findings,
              technical vulnerability logs, proof-of-concept steps, and remediation advice will remain
              strictly confidential between the verified website owner and authorized team members.
              We will never publish, sell, or disclose private vulnerability data without explicit written consent.
            </p>

            <h2>4. Third-Party Services & Hosting</h2>
            <p>
              The static website assets are hosted via Cloudflare Pages. Cloudflare may process basic server
              logs (such as IP addresses and request headers) strictly for security protection, DDoS mitigation,
              and network delivery compliance.
            </p>

            <h2>5. Contact & Data Inquiries</h2>
            <p>
              For any questions regarding our privacy practices or data handling policies, please submit an
              inquiry via our general contact page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

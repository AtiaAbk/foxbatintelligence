import React from 'react';
import { Link } from '../context/RouterContext';

export const ServicesPage: React.FC = () => {
  const plannedServices = [
    {
      id: 'web-app-testing',
      title: 'Web Application Security Testing',
      status: 'Planning Draft',
      tag: 'Technical Assessment',
      icon: '🌐',
      description:
        'Methodical testing of client-side and server-side web applications to uncover common security flaws (OWASP Top 10 and beyond), including authentication bypasses, broken object-level authorization, and injection vulnerabilities.',
      deliverables: [
        'Input validation and sanitization evaluation',
        'Authentication and session lifecycle checks',
        'Business logic flow testing',
      ],
    },
    {
      id: 'vulnerability-assessment',
      title: 'Vulnerability Assessment',
      status: 'Planning Draft',
      tag: 'Risk Analysis',
      icon: '🛡️',
      description:
        'Comprehensive review of web infrastructure, exposed services, SSL/TLS configurations, and third-party dependencies to map attack surfaces and classify potential weaknesses before malicious actors exploit them.',
      deliverables: [
        'External attack surface discovery',
        'Security header and transport layer review',
        'Known dependency vulnerability auditing',
      ],
    },
    {
      id: 'technical-reporting',
      title: 'Technical Reporting',
      status: 'Planning Draft',
      tag: 'Actionable Deliverables',
      icon: '📄',
      description:
        'Structured, transparent documentation that bridges the gap between technical teams and leadership. Reports include executive summaries, CVSS severity ratings, detailed reproduction steps, and tailored remediation guidance.',
      deliverables: [
        'Executive summaries with risk prioritizations',
        'Proof-of-concept evidence for verified findings',
        'Specific, developer-friendly remediation instructions',
      ],
    },
    {
      id: 'consultation-guidance',
      title: 'Consultation & Guidance',
      status: 'Planning Draft',
      tag: 'Remediation Advisory',
      icon: '🤝',
      description:
        'Collaborative post-assessment advisory to help development teams correctly apply patches, verify security fixes, and integrate defensive security best practices into their ongoing development lifecycles.',
      deliverables: [
        'Patch verification and re-test advisory',
        'Secure coding fundamentals for developers',
        'Security policy and incident response basics',
      ],
    },
  ];

  return (
    <div className="page-wrapper services-page">
      {/* Page Header */}
      <section className="page-header-section">
        <div className="section-container">
          <div className="badge-wrapper">
            <span className="badge-warning">Planning Phase — Not Active</span>
          </div>
          <h1 className="page-title">Cybersecurity Services Overview</h1>
          <p className="page-lead">
            Foxbat Intelligence is designing a structured suite of technical security assessments.
            Review our planned scope, technical focus, and strict ethical authorization standards below.
          </p>

          {/* Mandatory Status Notice */}
          <div className="service-alert-banner" role="alert">
            <span className="alert-icon" aria-hidden="true">⚠️</span>
            <div className="alert-content">
              <strong>Planning Status & Operational Boundary:</strong>
              <p>
                The services described on this page are <strong>planning drafts only</strong>. Foxbat Intelligence
                does not currently offer active, commercial, or live scanning services. Online intake, service agreements,
                and eligibility terms are pending official owner approval and backend verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section services-grid-section">
        <div className="section-container">
          <div className="services-cards-grid">
            {plannedServices.map((service) => (
              <div key={service.id} className="service-detail-card">
                <div className="card-top-bar">
                  <span className="service-icon" aria-hidden="true">{service.icon}</span>
                  <span className="status-pill draft-pill">{service.status}</span>
                </div>
                <span className="service-category">{service.tag}</span>
                <h2 className="service-card-title">{service.title}</h2>
                <p className="service-card-desc">{service.description}</p>

                <div className="service-deliverables">
                  <h3 className="deliverables-heading">Planned Scope:</h3>
                  <ul className="deliverables-list">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx}>
                        <span className="bullet-cyan" aria-hidden="true">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal & Authorization Mandate */}
      <section className="section authorization-mandate-section">
        <div className="section-container">
          <div className="mandate-card">
            <div className="mandate-header">
              <span className="mandate-badge">Strict Requirement</span>
              <h2 className="mandate-title">Verified Authorization & Scope Mandatory</h2>
            </div>
            <p className="mandate-desc">
              In accordance with ethical cybersecurity practices and legal standards, Foxbat Intelligence
              strictly adheres to the following principles for any future engagement:
            </p>
            <div className="mandate-points-grid">
              <div className="mandate-point">
                <span className="point-number">01</span>
                <div>
                  <h4>Ownership Verification</h4>
                  <p>Target domains and infrastructure must be verifiably owned or controlled by the requesting party.</p>
                </div>
              </div>
              <div className="mandate-point">
                <span className="point-number">02</span>
                <div>
                  <h4>Written Consent</h4>
                  <p>Explicit written authorization defining IP ranges, testing windows, and allowed methodologies is legally binding.</p>
                </div>
              </div>
              <div className="mandate-point">
                <span className="point-number">03</span>
                <div>
                  <h4>No Unsolicited Scans</h4>
                  <p>Automated or unauthenticated vulnerability scanning against arbitrary external targets is strictly prohibited.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Unavailable State / Intake Notice */}
      <section className="section portal-status-section">
        <div className="section-container">
          <div className="intake-unavailable-box">
            <span className="unavailable-icon" aria-hidden="true">🔒</span>
            <div className="unavailable-text">
              <h3>Service Request Portal Currently Inactive</h3>
              <p>
                The authenticated Service Request Portal and report tracking system will be introduced in subsequent
                development phases following backend security implementation.
              </p>
            </div>
            <Link href="/contact" className="btn btn-secondary">
              General Inquiries
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

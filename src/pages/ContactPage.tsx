import React, { useState } from 'react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim()) {
      errs.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 15) {
      errs.message = 'Message must be at least 15 characters.';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <div className="page-wrapper contact-page">
      {/* Header */}
      <section className="page-header-section">
        <div className="section-container">
          <div className="badge-wrapper">
            <span className="badge-cyan">Public Communications</span>
          </div>
          <h1 className="page-title">General Inquiries & Community Contact</h1>
          <p className="page-lead">
            Have questions about our student initiative, educational workshops, or research collaboration?
            Send us a message using the form below.
          </p>

          {/* Scope Distinction Notice */}
          <div className="contact-scope-banner" role="note">
            <span className="scope-icon" aria-hidden="true">ℹ️</span>
            <div className="scope-text">
              <strong>Notice on Scope & Confidentiality:</strong>
              <p>
                This form is for <strong>general communication only</strong>. Do not submit sensitive vulnerability
                details, private passwords, or confidential system data through this form. Formal security assessment
                requests require verified target ownership and will be managed through the upcoming authenticated portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section contact-form-section">
        <div className="section-container">
          <div className="contact-layout-grid">
            {/* Form Column */}
            <div className="form-card">
              {submitted ? (
                <div className="submission-success-box" role="status">
                  <span className="success-icon" aria-hidden="true">✔</span>
                  <h2 className="success-title">Message Received (Preview Demonstration)</h2>
                  <p className="success-text">
                    Thank you for reaching out, <strong>{formData.name}</strong>.
                  </p>
                  <div className="preview-disclaimer-box">
                    <strong>Phase 1 Notice:</strong>
                    <p>
                      In this Phase 1 preview, backend database persistence and transactional email delivery
                      are intentionally disconnected until backend authorization is approved. Your form
                      input has been validated locally in your browser.
                    </p>
                  </div>
                  <button type="button" className="btn btn-secondary" onClick={handleReset}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="contact-form">
                  <div className="form-group">
                    <label htmlFor="contact-name" className="form-label">
                      Full Name <span className="required-star">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      className={`form-input ${errors.name ? 'input-error' : ''}`}
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                      required
                    />
                    {errors.name && <span id="name-error" className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-email" className="form-label">
                      Email Address <span className="required-star">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className={`form-input ${errors.email ? 'input-error' : ''}`}
                      placeholder="e.g. alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      required
                    />
                    {errors.email && <span id="email-error" className="error-message">{errors.email}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-subject" className="form-label">
                      Subject <span className="required-star">*</span>
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      className={`form-input ${errors.subject ? 'input-error' : ''}`}
                      placeholder="e.g. Student Workshop Collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      aria-invalid={Boolean(errors.subject)}
                      aria-describedby={errors.subject ? 'subject-error' : undefined}
                      required
                    />
                    {errors.subject && <span id="subject-error" className="error-message">{errors.subject}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="contact-message" className="form-label">
                      Message <span className="required-star">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      className={`form-textarea ${errors.message ? 'input-error' : ''}`}
                      placeholder="How can we collaborate or assist you?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      required
                    />
                    {errors.message && <span id="message-error" className="error-message">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn-primary submit-btn">
                    Send General Inquiry
                    <span className="btn-arrow" aria-hidden="true">→</span>
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar Information Column */}
            <div className="contact-info-card">
              <h3 className="info-heading">Communication Guidelines</h3>
              <p className="info-desc">
                Foxbat Intelligence is an independent, student-led organization. We prioritize ethical,
                responsible communication across all channels.
              </p>

              <div className="info-blocks">
                <div className="info-block">
                  <h4 className="info-title">🛡️ Responsible Disclosure</h4>
                  <p className="info-text">
                    If you believe you have discovered a vulnerability in an affiliated platform,
                    please wait for our formal disclosure portal or follow established safe-harbor standards.
                  </p>
                </div>

                <div className="info-block">
                  <h4 className="info-title">🎓 Student Engagement</h4>
                  <p className="info-text">
                    Students interested in collaborative cybersecurity learning or joining local chapter activities
                    are invited to reach out via community workshops.
                  </p>
                </div>

                <div className="info-block">
                  <h4 className="info-title">📍 Regional Base</h4>
                  <p className="info-text">
                    Bangladesh Initiative • Operating digitally across student and tech communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

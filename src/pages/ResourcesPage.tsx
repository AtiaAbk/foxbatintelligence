import React, { useState } from 'react';

interface ResourceItem {
  id: string;
  category: 'all' | 'web-security' | 'hygiene' | 'dev-guides' | 'checklists';
  categoryLabel: string;
  title: string;
  summary: string;
  readTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Essential';
  highlights: string[];
}

export const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const resources: ResourceItem[] = [
    {
      id: 'res-1',
      category: 'checklists',
      categoryLabel: 'Checklists',
      title: 'Website Owner Essential Security Checklist',
      summary:
        'A comprehensive practical checklist covering transport encryption (HTTPS), DNS record hardening, secure HTTP headers, automated backups, and credential management.',
      readTime: '6 min read',
      difficulty: 'Essential',
      highlights: [
        'Enforcing modern TLS 1.3 and HSTS policies',
        'Configuring SPF, DKIM, and DMARC for email domain protection',
        'Setting up automated, off-site database backups',
      ],
    },
    {
      id: 'res-2',
      category: 'web-security',
      categoryLabel: 'Web Security',
      title: 'Demystifying the OWASP Top 10 for Developers',
      summary:
        'A clear, plain-English breakdown of the ten most prevalent web application vulnerabilities, including broken access control, cryptographic failures, and injection attacks.',
      readTime: '10 min read',
      difficulty: 'Intermediate',
      highlights: [
        'Understanding how Broken Access Control occurs in APIs',
        'Protecting sensitive data at rest and in transit',
        'Parameterizing queries to eliminate SQL and command injection',
      ],
    },
    {
      id: 'res-3',
      category: 'hygiene',
      categoryLabel: 'Cyber Hygiene',
      title: 'Practical Password & Credential Hygiene for Teams',
      summary:
        'Actionable guidance for startup teams, students, and organizations on password managers, multi-factor authentication (MFA), and eliminating password re-use.',
      readTime: '5 min read',
      difficulty: 'Beginner',
      highlights: [
        'Why password complexity alone fails without MFA',
        'Hardware security keys vs authenticator apps',
        'Handling credential offboarding securely',
      ],
    },
    {
      id: 'res-4',
      category: 'dev-guides',
      categoryLabel: 'Developer Guides',
      title: 'Hardening Web Headers: CSP, CORS & Permissions Policy',
      summary:
        'Technical implementation tutorial for adding robust security headers in Nginx, Apache, Cloudflare, and modern Node/React hosting environments.',
      readTime: '8 min read',
      difficulty: 'Intermediate',
      highlights: [
        'Writing Content Security Policy (CSP) rules that prevent XSS',
        'Restricting cross-origin access using proper CORS headers',
        'Disabling unused browser APIs with Permissions-Policy',
      ],
    },
    {
      id: 'res-5',
      category: 'dev-guides',
      categoryLabel: 'Developer Guides',
      title: 'Preventing Accidental Secret Leaks in Git Repositories',
      summary:
        'Step-by-step practices for configuring .gitignore, using environment files safely, pre-commit secret scanning hooks, and rotating compromised API keys.',
      readTime: '7 min read',
      difficulty: 'Essential',
      highlights: [
        'Structuring .env and .env.example files properly',
        'Configuring pre-commit secret linters',
        'Emergency response steps if an API key is accidentally committed',
      ],
    },
    {
      id: 'res-6',
      category: 'web-security',
      categoryLabel: 'Web Security',
      title: 'Ethical Vulnerability Disclosure: Guidelines for Researchers',
      summary:
        'A primer on responsible bug reporting, ethical guidelines, scoping verification, and collaborating constructively with website owners without disrupting services.',
      readTime: '6 min read',
      difficulty: 'Beginner',
      highlights: [
        'Understanding safe harbors and written authorizations',
        'Structuring reproducible vulnerability reports',
        'Maintaining confidentiality while fixes are deployed',
      ],
    },
  ];

  const categories = [
    { key: 'all', label: 'All Resources' },
    { key: 'checklists', label: 'Checklists' },
    { key: 'web-security', label: 'Web Security' },
    { key: 'hygiene', label: 'Cyber Hygiene' },
    { key: 'dev-guides', label: 'Developer Guides' },
  ];

  const filteredResources =
    selectedCategory === 'all'
      ? resources
      : resources.filter((r) => r.category === selectedCategory);

  return (
    <div className="page-wrapper resources-page">
      {/* Header */}
      <section className="page-header-section">
        <div className="section-container">
          <div className="badge-wrapper">
            <span className="badge-cyan">Knowledge Center</span>
          </div>
          <h1 className="page-title">Technical Educational Resources</h1>
          <p className="page-lead">
            Curated guides, defensive checklists, and practical tutorials authored by Foxbat Intelligence
            to help website administrators, developers, and students build more secure platforms.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="section filter-section" aria-label="Resource Categories">
        <div className="section-container">
          <div className="category-tabs-wrapper" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat.key}
                role="tab"
                aria-selected={selectedCategory === cat.key}
                className={`category-tab-btn ${selectedCategory === cat.key ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Resources Grid */}
          <div className="resources-grid">
            {filteredResources.map((item) => (
              <article key={item.id} className="resource-card">
                <div className="resource-meta-bar">
                  <span className="resource-cat-pill">{item.categoryLabel}</span>
                  <div className="resource-meta-details">
                    <span className="read-time">{item.readTime}</span>
                    <span className={`difficulty-badge diff-${item.difficulty.toLowerCase()}`}>
                      {item.difficulty}
                    </span>
                  </div>
                </div>

                <h2 className="resource-title">{item.title}</h2>
                <p className="resource-summary">{item.summary}</p>

                <div className="resource-highlights">
                  <span className="highlights-label">Key Takeaways:</span>
                  <ul className="highlights-list">
                    {item.highlights.map((hl, idx) => (
                      <li key={idx}>
                        <span className="hl-bullet" aria-hidden="true">▸</span>
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="resource-card-footer">
                  <span className="article-note">Educational Guide</span>
                </div>
              </article>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="empty-state-box">
              <p>No resources found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

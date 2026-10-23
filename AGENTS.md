# Foxbat Intelligence — Core Project Instructions & Operational Rules

> **Applies to:** All development, planning, and maintenance sessions in `/Users/atiaoishi/Downloads/website_Foxbat_intelligence`.
> **Primary Rule:** Inspect existing code, package scripts, and Git status before proposing or executing changes. Never assume state from memory or past sessions; verify with actual evidence.

---

## 1. Project Identity & Public Brand (Confirmed Decision)

1. **Official Brand Name:** **Foxbat Intelligence**.
   - Must be used consistently across page titles, navigation bars, headers, and official copy.
   - Do not replace with "Team Foxbat" or "Team Foxbat Bangladesh" in primary site branding.
2. **Dual Product Scope:**
   - **Cybersecurity Services:** Technical website security assessments, technical reporting, and guidance.
   - **Community & Resources:** Student-driven cyber safety awareness, technical educational articles, and community updates.
   - *These two areas must remain separate and distinct in navigation and information architecture; do not merge them into a single generic offering list.*
3. **Regional Identity:**
   - Bangladesh context (from supplied reference artwork) may appear as an informational subtitle, mission badge, or community chapter, but not as the primary site brand name.

---

## 2. Technical Baseline & Verification Rule (Historical Audit Baseline)

1. **Current Codebase Reality:**
   - **Nature of Existing Code:** The current codebase is an early **React 19 + TypeScript + Vite 8 deployment demo**, created strictly to verify static build pipelines and hosting. It is **not** a completed, hardened, or production-ready website.
   - **Live Cloudflare Pages URL:** `https://foxbatintelligence.pages.dev/` serves the minimal demo test card. Live serving does **not** signify production readiness or feature completeness.
   - **Routing:** No client-side router is currently installed (single-page entrypoint only).
   - **Styling Baseline:** Vanilla CSS (`src/App.css`, `src/index.css`). Do not assume external CSS frameworks are required unless inspection demonstrates a concrete need and the owner explicitly approves.
   - **Backend SDK:** `@supabase/supabase-js` is installed with a safe fallback client (`src/lib/supabase.ts`), but no live database tables, active local `.env` files, or remote connections exist in the running demo.
2. **Mandatory Re-Verification Rule:**
   - Prior audit findings represent historical points in time. Every new task must start by inspecting live files, Git status, and `package.json` scripts rather than assuming past reports remain static.

---

## 3. Original Brand Asset Protection (Confirmed Decision)

1. **Immutable Root-Level Assets:**
   The three original media files in the repository root are strictly preserved in their current locations:
   - `image_foxbat_logo.png`
   - `facebook coverpage.png`
   - `services poster.jpg`
2. **Mandatory Restrictions:**
   - **Do not edit, rename, move, crop, recolor, compress, delete, or replace** any of these three files unless separately and explicitly approved by the owner.
   - **Do not propose moving or renaming them as an immediate prerequisite.** They remain in their original root locations.
   - **No generative redraws:** Never attempt to regenerate, vectorize with AI, or redraw the crest.
   - **Display rules:** The primary crest (`image_foxbat_logo.png`) has an opaque black background. When rendered in the UI, place it on an identical dark background (`#050811`) to preserve visual continuity without artificial or destructive cropping.

---

## 4. Visual Design System & UX Standards (Confirmed Decisions)

1. **Palette Direction (Premium Dark Cyberpunk / Modern SOC):**
   - **Obsidian / Base Canvas:** `#050811`
   - **Deep Navy / Secondary Surface:** `#0A0F1D`
   - **Card Surface:** `#0F172A`
   - **Electric Cyan (Primary Accent):** `#00E5FF` (hover: `#38BDF8`, active: `#0284C7`)
   - **Electric Blue (Secondary Accent):** `#2563EB` to `#1D4ED8`
   - **High-Contrast Text:** `#F8FAFC` (headings/white), `#94A3B8` (body copy/slate)
   - **Warning / Alert Accent:** `#EF4444` (strictly reserved for vulnerability indicators and security warnings)
2. **Typography & Content Hierarchy:**
   - Headings: Technical, geometric sans-serif.
   - Body/UI: Clean, readable sans-serif.
   - Code/Metrics: Monospace.
   - Prominence: Educational and learning resources must be prominently featured alongside service information.
3. **Accessibility & Restrained Motion:**
   - Layouts must be responsive and mobile-first, maintaining WCAG AA contrast ratios and visible keyboard focus states (`:focus-visible`).
   - UI motion must be subtle and functional (150–200ms ease-out transitions). Chaotic, looping, or flashing animations are prohibited.
   - Always honor `@media (prefers-reduced-motion: reduce)` by disabling non-essential transitions.

---

## 5. Account Roles, Permissions & Membership Lifecycle (Confirmed Decisions)

1. **Mandatory Registration Lifecycle:**
   ```text
   [User Registers] ──> [Mandatory Email Verification] ──> [Owner Approval] ──> [Approved Member Access]
   ```
   - Both email verification and subsequent Owner approval are mandatory before an account receives Approved Member privileges.
2. **Role Capability Boundaries:**
   - **Visitor:** Access to public pages and the public general contact form only.
   - **Pending Member:** Registered users whose email has been verified but are awaiting Owner approval. Access is strictly limited to viewing their own basic profile and approval status. They **cannot** submit service requests, access member-only educational resources, view other profiles, or access administrative tools.
   - **Approved Member:** Access to public pages, authorized member resources, and submission/tracking of their own service requests.
   - **Security Team:** Technical assessors whose access is **strictly restricted to assigned or explicitly authorized service requests**. Security Team members have zero visibility into unauthorized requests, foreign client data, or unrelated security findings.
   - **Admin (Content-Only):** Permitted to manage approved public website content, educational articles, community updates, team profiles, and service catalog descriptions.
     - **Explicit Prohibitions for Admin:** Admins **must not** have access to private service requests, confidential security assessment reports, account approval queues, role management, or security settings.
     - Admins cannot self-elevate, assign the Owner role, or appoint other Admins.
   - **Owner:** Top-level authority with:
     - Sole power to approve pending accounts into Approved Members.
     - Sole power to appoint or revoke Admins and assign roles.
     - Full oversight access to all service requests and security reports.
     - Sole authority over root administrative and security settings.
     - **Tamper-Resistant Audit Logging:** All sensitive access and operations by the Owner (e.g., viewing confidential assessment reports, modifying roles, approving accounts) must be recorded using an appropriately protected, tamper-resistant audit mechanism. *Documentation alone does not guarantee immutable logs; the technical implementation must enforce protection against tampering or deletion.*
3. **Enforcement Standard:**
   - Every permission must be enforced via server-side checks and database Row Level Security (RLS). Hiding UI components does not constitute access control.

---

## 6. Security-First Architecture & Supabase Rules (Confirmed Decisions)

1. **Production-Labelled Supabase Instance:**
   - The remote Supabase instance (`bgrmheiszigukdzhfzuj`) is tagged as **Production**.
   - **No database changes are permitted without an approved plan.**
   - Any future database change requires an approved, reproducible SQL migration file, accompanied by a documented rollback and recovery procedure.
   - Ad-hoc SQL execution and unversioned manual dashboard modifications are strictly forbidden.
2. **Row Level Security (RLS) & Least Privilege:**
   - Every future table in the `public` schema must enforce `ALTER TABLE ... ENABLE ROW LEVEL SECURITY;`.
   - Deny by default.
   - RLS policies must be designed, written, and tested **only for operations actually required by each table and role**. Do not enable unnecessary `INSERT`, `UPDATE`, `DELETE`, or `SELECT` permissions merely to satisfy a generic checklist (e.g., do not grant `UPDATE` or `DELETE` if an actor only requires `INSERT`).
3. **Secrets & Environment Hygiene:**
   - Only public variables (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`) may be exposed to the frontend.
   - Service-role keys, database passwords, and private tokens must **never** be placed in client-side code, committed to Git, or printed in logs.
   - All environment files (`.env`, `.env.*`) must remain excluded by `.gitignore`, while tracking `.env.example`.
4. **Confidentiality & Authorized Testing Scope:**
   - Security assessment reports, vulnerability findings, and request communications are strictly private.
   - **Written Authorization Mandatory:** Prior to any security assessment or penetration test, verified target ownership and explicit written consent must be confirmed and recorded.
   - Automated or unauthenticated port/vulnerability scanning against arbitrary external targets is strictly prohibited.

---

## 7. Public Claims & Service Descriptions (Confirmed Decisions)

1. **No False or Unverified Public Claims:**
   - The four planned services (*Web Application Security Testing, Vulnerability Assessment, Technical Reporting, Consultation & Guidance*) are **planning drafts only**.
   - Public copy must **never** claim that these services are currently active, live, free, paid, or guaranteed until explicitly approved by the owner.
2. **Factual Integrity:**
   - Do not invent partner endorsements, certifications, statistics, team qualifications, or client testimonials.
   - Unconfirmed copy must be explicitly marked as placeholder text.

---

## 8. Change-Control Lifecycle & Verification Honesty (Mandatory Rules)

1. **Standard Task Lifecycle:**
   ```text
   [1. Inspect] ──> [2. Propose Plan] ──> [3. Await User Approval] ──> [4. Implement Scope] ──> [5. Verify & Test] ──> [6. Report Evidence & Stop]
   ```
   - **Inspect First:** Check live files, `package.json` scripts, Git state, and recent history. Do not guess.
   - **Propose Plan:** Detail the exact files to be created or modified, rationale, and dependencies.
   - **Await Explicit Approval:** Stop and wait for user confirmation.
   - **Implement Scope Only:** Execute strictly what was approved. No unsolicited refactoring or architectural additions.
   - **Verify & Test:** Run actual build, lint, and security checks.
   - **Report Evidence & Stop:** Present exact terminal outputs, git diffs, and verification proof. Wait for the next instruction.
2. **Verification Honesty:**
   - Always inspect package scripts before executing commands.
   - **Every verification claim must be supported by actual evidence.**
   - If a test (e.g., in-browser visual inspection, responsive viewport check, end-to-end network verification) could not be executed during a terminal-only turn, **explicitly label it as unperformed/unverified** rather than assuming success.

---

## 9. Architectural & Dependency Change Controls (Approval Gates)

1. **Client-Side Routing Approval Gate:**
   - Client-side routing (e.g., `react-router-dom`) is a **planned architectural change**.
   - It requires explicit user approval before installing any package or implementing multi-page routes.
2. **Styling Approach:**
   - Retain the existing vanilla CSS setup unless a concrete, documented need arises and the owner explicitly approves an alternative.
3. **No Unapproved Packages:**
   - Do not run `npm install <package>` without specific prior approval.

---

## 10. Git Safety & Staging Safeguards (Mandatory Rules)

1. **Selective Staging Only:**
   - **Never** run `git add .` or `git add -A` during restricted or selective tasks.
   - Stage **only explicitly authorized, relevant file paths** after inspecting the actual changes.
   - Any file paths cited in workflow documentation or instructions are illustrative examples only (e.g., `git add src/App.tsx`); stage only the specific files approved for that turn.
2. **Commit & Push Control:**
   - Never commit or push to remote repositories without explicit user instruction.
   - Inspect `git status` and `git diff --staged` before every commit to ensure no secrets, generated files, or untracked root media assets are staged.
3. **Commit Messages:** Follow conventional commits (e.g., `feat: ...`, `fix: ...`, `chore: ...`).

---

## 11. Quality Gates & Verification Standards

Before any implementation task is reported as complete, the following gates must be verified:

| Verification Gate | Command / Criteria | Standard |
| :--- | :--- | :--- |
| **Linting** | `npm run lint` | Must exit with code `0` (0 errors, 0 warnings). |
| **Type Check & Build** | `npm run build` | `tsc -b && vite build` must compile with 0 errors. |
| **Sensitive Data Audit** | `git status` / `git diff --staged` | Verify zero credentials or secret tokens are present. |
| **Responsive Inspection** | Viewport check | Report actual rendered evidence or label as unperformed. |
| **Console / Runtime Check** | Error inspection | Check for uncaught runtime exceptions or label as unperformed. |

---

## 12. Reusable Task-Prompt Template

Use this standardized template for future task instructions:

```markdown
### Task: [Task Name]
**Task Mode:** [Planning-only | Documentation-only | Approved implementation]
**Context:** Working on Foxbat Intelligence in `/Users/atiaoishi/Downloads/website_Foxbat_intelligence`.
**Scope:** [Precise files, components, or documents to inspect or modify].
**Permitted Actions:** [Exact operations permitted in this turn].
**Prohibited Actions:** [Explicit boundaries: e.g., do not touch Supabase, do not commit, do not move root images, do not install dependencies].
**Approval Gates:** [Points requiring explicit user sign-off before proceeding].
**Verification Criteria:** [Commands and outputs required to prove correctness, e.g., npm run build passes with code 0].
**Deliverable & Evidence Report:** [Expected evidence: exact command outputs, staged diffs, list of unperformed checks, and next steps].
```

---

## 13. Genuinely Unresolved Decisions Blocking Implementation

The following decisions remain open and block their respective future implementation phases:

1. **Styling Direction Beyond the Demo (Blocks Phase 2 UI Build):**
   - *Decision Needed:* Continue building the full landing page using modular vanilla CSS (matching the current setup), or approve an external utility framework (e.g., Tailwind CSS)?
2. **Client-Side Routing Approval (Blocks Phase 2 Multi-Page Navigation):**
   - *Decision Needed:* When ready to create distinct URLs (`/services`, `/community`, `/contact`, `/login`, `/register`), does the owner approve installing `react-router-dom`?
3. **Transactional Email Provider Selection (Blocks Phase 3 Auth Setup):**
   - *Decision Needed:* Which email delivery provider should be planned, tested, and configured to handle mandatory email verification links and owner approval notifications?
   - *Note:* The email provider remains unconfigured and undecided until investigated and chosen.
4. **Service Scope, Pricing & Eligibility (Blocks Phase 2/4 Public Copy & Intake Forms):**
   - *Decision Needed:* What are the exact terms for the four planned security assessment services? Are any of them pro-bono community offerings for website owners, or will there be paid tiers? Who is eligible to request them?

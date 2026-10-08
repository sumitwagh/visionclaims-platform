# AdjudicationIQ prototype update plan

## Goal
Port the complete uploaded prototype into the current app, preserving its navy/teal visual language and workflows while aligning every screen to the latest 54-page scope, the supplied provider/contract data, and exactly three demo roles: Admin, Payer, and Provider.

## Data and content rules
- Replace the old payer, plan, member, provider, contract, fee, authorization, claim, user, and persona seeds.
- Seed only the supplied workbook data:
  - Four contract/plan columns: UDTOP, Gob/Mun/Unions, ELA, and CIPR.
  - All 18 supplied contract line items, grouped as Plan Parameters, Member Copay, and Vista Care Cost Per Unit.
  - Five supplied provider-location records, preserving accents and treating Contact ID `100432` as one provider with two locations/Optical Provider numbers.
- Do not infer payer names, members, claims, NPIs, addresses, statuses, effective dates, or provider-to-plan relationships that the files do not provide.
- Screens without supplied transactional data start with a clear empty state and populate from actions taken during the demo session, such as a Provider submitting a claim or an Admin adding a record.
- Keep data in app state for this prototype so CRUD and workflow changes update all related screens immediately without requiring a backend.

## Sign-in and role experience
- Replace the existing named-persona login with a branded sign-in screen using the supplied Pearle Vision logo.
- Provide exactly three role choices: Admin, Payer, Provider.
- Show predefined, read-only demo credentials/identity fields and require only role selection plus Login.
- Remove Dana Whitmore, Marcus Bell, Priya Raghunathan, Elliot Vance, Renata Alvarez, and all old role labels/references.
- After login, open the correct role dashboard with no unavailable page selected.
- Show the active role in the application shell and provide working sign-out.

## Role-specific navigation and scope
### Admin
- Dashboard with clickable summary cards for configured plans, provider contacts/locations, rules, alerts, and system activity.
- Master configuration: adjudication rules, vision services, CARC/RARC references, utilization/frequency limits, and benefit limits.
- Payer management: payer, plans, networks, contract rates, member/benefit areas, and claim-activity areas; no invented seed records where the workbooks provide none.
- Provider management: provider directory, locations, credentials, payer mapping area, and provider activity/fraud areas.
- AI intelligence, reports, audit logs, notifications, profile/password policy, user management, and application settings as specified in scope.

### Payer
- Dashboard, claims work queue, manual review and exceptions, fraud/anomaly review, AI intelligence, payment/remittance, reports/analytics, notifications, and profile.
- Claim-review actions update claim status, notes, financial fields, alert status, audit activity, and related summaries during the session.

### Provider
- Dashboard, provider participation/credential summary, member eligibility and benefits lookup, claim submission, claim management/detail, notifications, and profile.
- New claim submission creates the claim used by Payer/Admin queues and dashboards; no preloaded fictional claims or members.

## CRUD coverage
- Add, view, edit, and delete for logical management/configuration areas, including payers, plans, networks, providers/locations, credentials, users, adjudication rules, vision services, CARC/RARC references, utilization limits, benefit limits, and contract rate values.
- Preserve source-backed rows initially; edits remain session-local and are clearly part of the interactive prototype.
- Use consistently sized dialogs/drawers, validated required fields, read-only detail views, and explicit delete confirmations.
- Keep transactional workflow modules action-based rather than forcing inappropriate CRUD onto dashboards, reports, audit logs, notifications, claim adjudication, or payment processing.

## Dashboards, reports, and drill-downs
- Derive every KPI and chart from current in-app records; with no claims, show zero values rather than fabricated metrics.
- Make KPI cards, contract comparison bars, provider summaries, status charts, denial/pend summaries, and report rows interactive.
- Open a consistent detail drawer containing the exact filtered records behind the selected card, chart segment, bar, or report row.
- Add report filters and export of the currently displayed records where the scope calls for export.
- Use the supplied rate table for meaningful plan comparison visualizations; do not create unsupported time-series data.

## Visual implementation
- Recreate the uploaded prototype's compact enterprise UI: ink/navy shell, teal actions, Inter typography, dense tables, compact badges, mobile drawer, and restrained motion.
- Use the official uploaded logo on sign-in, desktop/mobile shell branding, and suitable branded empty/profile locations.
- Build reusable application shell, table, dialog, drawer, form, status badge, KPI, and chart-detail components so behavior is consistent across modules.
- Keep the experience responsive, keyboard accessible, and free from overlapping or clipped content.

## Technical structure
- Implement the experience in the current TanStack Start app, with the sign-in page at `/` and a role-aware workspace after login.
- Use typed domain models and centralized supplied seed data instead of string-based role/status checks.
- Keep prototype session state in React; do not introduce real authentication or cloud persistence because the request is for predefined one-click demo roles.
- Add route metadata for every content route and update the global visual tokens to match the uploaded prototype.
- Store the uploaded logo through the project asset flow and reference that asset throughout the app.

## Verification
- Test Admin, Payer, and Provider login/logout end to end.
- Exercise every navigation item for every role and confirm there are no blank screens or broken destinations.
- Test representative Add/View/Edit/Delete flows across each management category, including validation and delete confirmation.
- Submit a Provider claim and confirm it appears in Payer/Admin queues, dashboard summaries, reports, review actions, payment readiness, notifications, and audit activity as applicable.
- Test KPI, chart, and report drill-downs with both empty and populated session states.
- Verify all supplied plan values and all five provider-location rows against the workbooks.
- Confirm the official logo renders correctly and no former persona names, roles, or mock datasets remain.
- Check desktop and mobile layouts, current preview runtime errors, automated tests, and the final production build signal.

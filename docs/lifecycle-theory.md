# Lifecycle Theory

Every asset has a lifecycle.

Lifecycle defines how an asset moves from creation to review, approval, operation, deprecation, archival, and retirement.

## Standard Lifecycle States

- Draft
- Review
- Approved
- Active
- Deprecated
- Archived
- Retired

## Lifecycle Requirements

Every lifecycle transition should capture:

- Previous state
- New state
- Actor
- Reason
- Timestamp
- Evidence
- Approval status

## No Silent Deletion

Open-LMX prefers lifecycle transitions over deletion.

Assets may be retired or archived, but governed systems should avoid destroying operational history.

## Lifecycle Rule

No asset should be used in production unless it is approved or active.

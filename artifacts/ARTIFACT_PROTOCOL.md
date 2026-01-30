# Artifact Awareness Protocol (P0-Delegated, Optimized Storage)

## Scope

Applies to ALL agents, ALL skills, ALL modes (ask / plan / edit).

---

## Pre-Task (MANDATORY)

Before executing any non-trivial task:

* Read if exists:
  * `implementation_plans.md`
  * `tasks.md`
  * `walkthroughs.md`
  * Optional: `changes.log`, `errors.md`, `test-results.md`
* Goal:

  * Understand project state
  * Avoid duplicate or conflicting work

---

## Post-Task (MANDATORY)

After completing any task that changes project state:

* Update relevant artifacts **immediately**
* Save artifacts **delta-only** (differences from previous state)
* Optional: upload large artifacts to external storage (S3/GCS/Azure)
* Update metadata: task ID, timestamp, affected files

---

## Update Rules (Token Efficient)

* Write **deltas only**
* No explanations
* No restating context
* Prefer bullets, ≤ 1 line per item
* For large code or config changes, store **diff/patch** or snapshot in artifact storage

---

## File Responsibilities

### implementation_plans.md

* Update ONLY if:
  * Plan changed
  * Phase advanced
* Format: short bullets, delta-only
* Optional: store previous snapshot in `artifacts/` if phase critical

### tasks.md

* Update status (todo / doing / done)
* Add new critical subtasks only
* Delta-only; avoid repeating completed tasks

### walkthroughs.md

* What was done
* Key decisions
* Max 3–5 bullets
* Keep concise; do NOT restate context

### Optional artifacts

* `changes.log` → record code/config deltas per task
* `errors.md` → record runtime or AI-agent issues
* `test-results.md` → record test outcomes, coverage, pass/fail
* `dependencies.md` → track added/updated libraries
* Use bullet/delta format; store full logs in external storage if large

---

## Storage Guidelines

* Prefer **local repo** for small md files or short logs
* Prefer **external storage** for:

  * Large generated code
  * Full test results
  * Full runtime logs
* Always maintain **metadata**: timestamp, task ID, affected files

---

## Enforcement

❌ Task is incomplete if:

* Artifact updates are required but missing
* Metadata for changes or deltas is missing

✅ Task is complete only if **delta updates + optional external artifacts** are logged properly

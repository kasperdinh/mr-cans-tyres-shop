# Artifact Awareness Protocol (P0-Delegated)

## Scope

Applies to ALL agents, ALL skills, ALL modes (ask / plan / edit).

---

## Pre-Task (MANDATORY)

Before executing any non-trivial task:

- Read if exists:
  - implementation_plans.md
  - tasks.md
  - walkthroughs.md
- Goal:
  - Understand project state
  - Avoid duplicate or conflicting work

---

## Post-Task (MANDATORY)

After completing any task that changes project state:

Update relevant artifacts.

---

## Update Rules (Token Efficient)

- Write deltas only
- No explanations
- No restating context
- Prefer bullets, ≤ 1 line per item

---

## File Responsibilities

### implementation_plans.md

- Update ONLY if:
  - Plan changed
  - Phase advanced
- Format: short bullets

### tasks.md

- Update status (todo / doing / done)
- Add new critical subtasks only

### walkthroughs.md

- What was done
- Key decisions
- Max 3–5 bullets

---

## Enforcement

❌ Task is incomplete if artifact updates are required but missing.

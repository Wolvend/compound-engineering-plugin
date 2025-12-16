# typescript-dev

TypeScript/JavaScript development and code review.

## Installation

```bash
# Install with core (recommended)
claude /plugin install compound-engineering-core typescript-dev

# Add design tools for frontend work
claude /plugin install compound-engineering-core typescript-dev frontend-design workflow-automation
```

## What's Included

### Agents (2)

- `kieran-typescript-reviewer` - Opinionated TypeScript code review
- `julik-frontend-races-reviewer` - Frontend race condition detection

## Usage

The TypeScript reviewers integrate with `/workflows:review` from core:

```bash
claude /workflows:review 123
```

### Race Condition Detection

The `julik-frontend-races-reviewer` specifically looks for:

- Stale closure bugs
- Race conditions in async operations
- Event handler timing issues
- State update races

## Works Best With

| Plugin | Why |
|--------|-----|
| `compound-engineering-core` | Required for `/workflows:review` |
| `frontend-design` | Design iteration with Playwright |
| `workflow-automation` | Batch PR resolution |

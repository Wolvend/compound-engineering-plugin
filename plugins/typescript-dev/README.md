# typescript-dev

TypeScript/JavaScript development and code review.

## Installation

```bash
# Requires core plugin
claude /plugin install compound-engineering-core

# Install TypeScript tools
claude /plugin install typescript-dev
```

## What's Included

### Agents (2)

- `kieran-typescript-reviewer` - Opinionated TypeScript code review
- `julik-frontend-races-reviewer` - Frontend race condition detection

## Usage

The TypeScript reviewers are automatically used by `/workflows:review` when reviewing TypeScript/JavaScript code:

```bash
claude /workflows:review 123
```

### Race Condition Detection

The `julik-frontend-races-reviewer` specifically looks for:

- Stale closure bugs
- Race conditions in async operations
- Event handler timing issues
- State update races

# compound-engineering-core

The essential workflow cycle: **plan → review → work → compound**.

## Installation

```bash
claude /plugin install compound-engineering-core
```

> **Get the full experience:** Core provides the foundation, but the real power comes from combining plugins. See [Recommended Combinations](#recommended-combinations) below.

## What's Included

### Commands (4)

The core workflow cycle:

- `/workflows:plan` - Create implementation plans
- `/workflows:review` - Comprehensive code review with 14 specialized agents
- `/workflows:work` - Execute plans systematically
- `/workflows:compound` - Document solutions for future reference

### Agents (14)

**Research agents** for understanding codebases:
- `repo-research-analyst`, `best-practices-researcher`, `framework-docs-researcher`
- `spec-flow-analyzer`, `git-history-analyzer`

**Review agents** for code quality:
- `code-simplicity-reviewer`, `pattern-recognition-specialist`, `architecture-strategist`
- `performance-oracle`, `security-sentinel`, `data-integrity-guardian`
- `data-migration-expert`, `deployment-verification-agent`, `agent-native-reviewer`

### Skills (5)

- `compound-docs` - Document solutions with YAML frontmatter
- `file-todos` - File-based todo tracking
- `git-worktree` - Git worktree management
- `gemini-imagegen` - Image generation with Gemini
- `agent-native-architecture` - Build agent-native features

### MCP Servers

- **context7** - Library documentation lookup

## Usage

```bash
# Plan a feature
claude /workflows:plan "Add user authentication"

# Review a PR
claude /workflows:review 123

# Execute a plan
claude /workflows:work plans/my-plan.md

# Document what you learned
claude /workflows:compound
```

## Recommended Combinations

Core is just the beginning. Install additional plugins based on your stack:

### For Rails Developers
```bash
claude /plugin install compound-engineering-core rails-dev workflow-automation
```
Adds DHH/37signals style guides, Rails-specific reviewers, and automation helpers.

### For Full-Stack (Rails + TypeScript)
```bash
claude /plugin install compound-engineering-core rails-dev typescript-dev frontend-design workflow-automation
```
Complete coverage for Rails backends with TypeScript frontends and design tools.

### For Python Developers
```bash
claude /plugin install compound-engineering-core python-dev workflow-automation
```

### For Plugin Developers
```bash
claude /plugin install compound-engineering-core plugin-dev
```
Add tools for creating your own commands and skills.

### Everything (Meta-Package)
```bash
claude /plugin install compound-engineering
```
Installs all plugins at once.

## Related Plugins

| Plugin | What it adds |
|--------|--------------|
| `rails-dev` | DHH/37signals style, Rails reviewers |
| `python-dev` | Python code review |
| `typescript-dev` | TypeScript/JS review, race condition detection |
| `frontend-design` | Figma sync, design iteration, Playwright |
| `workflow-automation` | PR resolution, batch operations, changelog |
| `plugin-dev` | Create your own commands and skills |

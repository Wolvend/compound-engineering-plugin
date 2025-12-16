# workflow-automation

Automation helpers for batch operations, PR resolution, and utility tasks.

## Installation

```bash
# Install with core (recommended)
claude /plugin install compound-engineering-core workflow-automation
```

## What's Included

### Commands (7)

- `/resolve_pr_parallel` - Resolve PR comments in parallel
- `/plan_review` - Review plans with multiple agents
- `/resolve_parallel` - Resolve TODOs in parallel
- `/resolve_todo_parallel` - Resolve CLI todos in parallel
- `/reproduce-bug` - Reproduce and validate bugs
- `/triage` - Triage findings by severity
- `/changelog` - Generate changelogs from commits

### Agents (3)

- `bug-reproduction-validator` - Validate bug reports
- `pr-comment-resolver` - Resolve PR comments
- `every-style-editor` - Style editing

### Skills (1)

- `every-style-editor` - Every style guide for writing

## Usage

```bash
# After /workflows:review finds issues, resolve them in parallel
claude /resolve_pr_parallel 123

# Review a plan with multiple specialized agents
claude /plan_review plans/my-feature.md

# Generate a weekly changelog
claude /changelog weekly

# Triage findings by severity
claude /triage
```

## Works Best With

| Plugin | Why |
|--------|-----|
| `compound-engineering-core` | Required - provides the base workflow |
| `rails-dev` / `python-dev` / `typescript-dev` | Framework-specific reviewers |

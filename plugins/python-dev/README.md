# python-dev

Python development and code review.

## Installation

```bash
# Install with core (recommended)
claude /plugin install compound-engineering-core python-dev

# Add automation for the full experience
claude /plugin install compound-engineering-core python-dev workflow-automation
```

## What's Included

### Agents (1)

- `kieran-python-reviewer` - Opinionated Python code review

## Usage

The Python reviewer integrates with `/workflows:review` from core:

```bash
claude /workflows:review 123
```

## Future Additions

This plugin is small but growing. Planned additions:

- Python style skills
- FastAPI/Django patterns
- Type hint reviewer
- Testing patterns

## Works Best With

| Plugin | Why |
|--------|-----|
| `compound-engineering-core` | Required for `/workflows:review` |
| `workflow-automation` | Batch PR resolution |

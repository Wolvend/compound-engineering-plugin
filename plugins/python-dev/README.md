# python-dev

Python development and code review.

## Installation

```bash
# Requires core plugin
claude /plugin install compound-engineering-core

# Install Python tools
claude /plugin install python-dev
```

## What's Included

### Agents (1)

- `kieran-python-reviewer` - Opinionated Python code review

## Usage

The Python reviewer is automatically used by `/workflows:review` when reviewing Python code:

```bash
claude /workflows:review 123
```

## Future Additions

This plugin is small but growing. Planned additions:

- Python style skills
- FastAPI/Django patterns
- Type hint reviewer
- Testing patterns

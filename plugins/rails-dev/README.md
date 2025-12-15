# rails-dev

Ruby/Rails development with DHH/37signals style conventions.

## Installation

```bash
# Requires core plugin
claude /plugin install compound-engineering-core

# Install Rails tools
claude /plugin install rails-dev
```

## What's Included

### Agents (4)

- `kieran-rails-reviewer` - Opinionated Rails code review
- `dhh-rails-reviewer` - DHH-style Rails review (brutal honesty)
- `ankane-readme-writer` - Ankane-style README generation
- `lint` - Ruby/Rails linting

### Skills (4)

- `dhh-rails-style` - 37signals Rails conventions (from Fizzy/Campfire analysis)
- `dhh-ruby-style` - DHH Ruby style guide
- `andrew-kane-gem-writer` - Gem writing patterns
- `dspy-ruby` - DSPy for Ruby

## Usage

### Code Review

The Rails reviewers are automatically used by `/workflows:review` when reviewing Rails code:

```bash
claude /workflows:review 123
```

### Style Skills

Invoke skills directly for style guidance:

```bash
# Get DHH Rails style advice
claude skill dhh-rails-style

# Write a gem in Ankane style
claude skill andrew-kane-gem-writer
```

## Philosophy

This plugin embodies the 37signals approach:

- **Vanilla Rails is plenty** - Rich domain models over service objects
- **CRUD controllers** - Map everything to REST resources
- **Concerns for sharing** - Horizontal code reuse
- **Records as state** - Not boolean columns
- **Database-backed** - No Redis, use Solid Queue/Cache/Cable
- **Build before gem** - Understand your code

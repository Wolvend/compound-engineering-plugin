# plugin-dev

Tools for developing Claude Code plugins, commands, and skills.

## Installation

```bash
# Install with core (recommended)
claude /plugin install compound-engineering-core plugin-dev
```

## What's Included

### Commands (3)

- `/generate_command` - Create new slash commands
- `/heal-skill` - Fix broken or outdated skills
- `/create-agent-skill` - Create new skills with guidance

### Skills (2)

- `skill-creator` - Comprehensive skill creation guide
- `create-agent-skills` - Agent-assisted skill creation

## Usage

```bash
# Create a new command
claude /generate_command "deploy to staging"

# Fix a broken skill
claude /heal-skill my-skill

# Create a new skill with expert guidance
claude /create-agent-skill "Rails testing patterns"
```

## Works Best With

| Plugin | Why |
|--------|-----|
| `compound-engineering-core` | Base workflow for planning and documenting |

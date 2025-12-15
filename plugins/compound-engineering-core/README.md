# compound-engineering-core

Core compounding engineering workflow. Framework-agnostic foundation for AI-powered development.

## Installation

```bash
claude /plugin install compound-engineering-core
```

## What's Included

### Commands (14)

**Workflow Commands:**
- `/workflows:plan` - Create implementation plans
- `/workflows:review` - Comprehensive code review
- `/workflows:work` - Execute work items
- `/workflows:compound` - Document solved problems

**Review Commands:**
- `/plan_review` - Review plans with multiple agents
- `/resolve_pr_parallel` - Resolve PR comments in parallel

**Automation Commands:**
- `/resolve_parallel` - Resolve TODOs in parallel
- `/resolve_todo_parallel` - Resolve CLI todos in parallel
- `/reproduce-bug` - Reproduce and validate bugs
- `/triage` - Triage findings
- `/changelog` - Generate changelogs

**Plugin Development:**
- `/generate_command` - Create new commands
- `/heal-skill` - Fix broken skills
- `/create-agent-skill` - Create new skills

### Agents (17)

**Research:**
- `repo-research-analyst` - Analyze repositories
- `best-practices-researcher` - Research best practices
- `framework-docs-researcher` - Research framework docs
- `spec-flow-analyzer` - Analyze specifications
- `git-history-analyzer` - Analyze git history

**Review:**
- `code-simplicity-reviewer` - Review for simplicity
- `pattern-recognition-specialist` - Identify patterns
- `architecture-strategist` - Review architecture
- `performance-oracle` - Review performance
- `security-sentinel` - Security review
- `data-integrity-guardian` - Data integrity review
- `data-migration-expert` - Migration review
- `deployment-verification-agent` - Deployment verification
- `agent-native-reviewer` - Agent accessibility review

**Workflow:**
- `bug-reproduction-validator` - Validate bug reports
- `pr-comment-resolver` - Resolve PR comments
- `every-style-editor` - Style editing

### Skills (8)

- `compound-docs` - Document solutions
- `file-todos` - File-based todo tracking
- `git-worktree` - Git worktree management
- `skill-creator` - Create new skills
- `create-agent-skills` - Agent skill creation
- `gemini-imagegen` - Gemini image generation
- `agent-native-architecture` - Agent-native patterns
- `every-style-editor` - Every style guide

### MCP Servers

- **context7** - Library documentation lookup

## Usage

After installing, use the workflow commands:

```bash
# Plan a feature
claude /workflows:plan "Add user authentication"

# Review a PR
claude /workflows:review 123

# Execute a plan
claude /workflows:work plans/my-plan.md

# Document a solution
claude /workflows:compound
```

## Related Plugins

For framework-specific tools, install additional plugins:

- `rails-dev` - Ruby/Rails style and review
- `python-dev` - Python review
- `typescript-dev` - TypeScript/JS review
- `frontend-design` - Design tools with Playwright

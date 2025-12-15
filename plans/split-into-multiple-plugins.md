# Split compound-engineering into Multiple Plugins

**Issue:** [#20](https://github.com/EveryInc/compound-engineering-plugin/issues/20)
**Type:** Enhancement / Refactor
**Date:** 2025-12-15

## Overview

Split the monolithic `compound-engineering` plugin (27 agents, 17 commands, 13 skills) into focused, composable plugins following Anthropic's plugin organization pattern.

## Current State

```
compound-engineering/
├── agents/
│   ├── design/      (3 agents)
│   ├── docs/        (1 agent)
│   ├── research/    (4 agents)
│   ├── review/      (14 agents)
│   └── workflow/    (5 agents)
├── commands/        (17 commands)
├── skills/          (13 skills)
└── mcp-servers/     (2: playwright, context7)
```

## Proposed Split

### Core Plugin: `compound-engineering-core`

**Philosophy:** The foundational workflow that makes engineering compound. Includes all agents referenced by core commands.

| Component | Items |
|-----------|-------|
| **Commands** | `workflows:plan`, `workflows:review`, `workflows:work`, `workflows:compound`, `resolve_pr_parallel`, `plan_review`, `generate_command`, `heal-skill`, `report-bug`, `release-docs`, `deploy-docs`, `resolve_parallel`, `resolve_todo_parallel`, `reproduce-bug`, `triage`, `changelog` |
| **Skills** | `compound-docs`, `file-todos`, `git-worktree`, `skill-creator`, `create-agent-skills`, `gemini-imagegen`, `agent-native-architecture`, `every-style-editor` |
| **Agents** | `repo-research-analyst`, `best-practices-researcher`, `framework-docs-researcher`, `spec-flow-analyzer`, `git-history-analyzer`, `code-simplicity-reviewer`, `pattern-recognition-specialist`, `architecture-strategist`, `performance-oracle`, `security-sentinel`, `data-integrity-guardian`, `data-migration-expert`, `deployment-verification-agent`, `agent-native-reviewer`, `bug-reproduction-validator`, `pr-comment-resolver`, `every-style-editor` |
| **MCP** | `context7` |

**Rationale:** Everything needed for the core workflow. `/workflows:review` references these review agents, so they must be in core. Plugin dev tools included for self-improvement.

---

### Plugin: `rails-dev`

**Focus:** Ruby/Rails development with DHH/37signals style.

| Component | Items |
|-----------|-------|
| **Skills** | `dhh-rails-style`, `dhh-ruby-style`, `andrew-kane-gem-writer`, `dspy-ruby` |
| **Agents** | `kieran-rails-reviewer`, `dhh-rails-reviewer`, `ankane-readme-writer`, `lint` |

**Rationale:** Everything Ruby/Rails in one place. Install this if you're a Rails dev.

---

### Plugin: `python-dev`

**Focus:** Python development and review.

| Component | Items |
|-----------|-------|
| **Agents** | `kieran-python-reviewer` |

**Rationale:** Python-specific tooling. Small now, can grow.

---

### Plugin: `typescript-dev`

**Focus:** TypeScript/JavaScript development and review.

| Component | Items |
|-----------|-------|
| **Agents** | `kieran-typescript-reviewer`, `julik-frontend-races-reviewer` |

**Rationale:** TypeScript/JS-specific tooling.

---

### Plugin: `frontend-design`

**Focus:** Design implementation, iteration, and Figma sync.

| Component | Items |
|-----------|-------|
| **Agents** | `figma-design-sync`, `design-iterator`, `design-implementation-reviewer` |
| **Skills** | `frontend-design` |
| **MCP** | `playwright` |

**Rationale:** Design-focused tooling that requires Playwright for screenshots.

---

## Summary Table

| Plugin | Agents | Commands | Skills | MCP | Framework |
|--------|--------|----------|--------|-----|-----------|
| `compound-engineering-core` | 17 | 14 | 8 | 1 | Any |
| `rails-dev` | 4 | 0 | 4 | 0 | Ruby/Rails |
| `python-dev` | 1 | 0 | 0 | 0 | Python |
| `typescript-dev` | 2 | 0 | 0 | 0 | TS/JS |
| `frontend-design` | 3 | 0 | 1 | 1 | Any |
| `compound-engineering` (meta) | 0 | 3 | 0 | 0 | N/A |
| **Total** | **27** | **17** | **13** | **2** | |

## Benefits

1. **Composability** - Users install only what they need
2. **Clarity** - Clear purpose for each plugin
3. **Maintainability** - Smaller, focused codebases
4. **Discoverability** - Easier to find relevant tools
5. **Alignment** - Matches Anthropic's official plugin structure

---

## Migration Guide

### For Existing Users

**Before (single plugin):**
```bash
claude /plugin install compound-engineering
```

**After (choose what you need):**
```bash
# Everyone needs core
claude /plugin install compound-engineering-core

# Add framework-specific plugins as needed
claude /plugin install rails-dev        # Ruby/Rails developers
claude /plugin install python-dev       # Python developers
claude /plugin install typescript-dev   # TypeScript/JS developers
claude /plugin install frontend-design  # Design-focused work
```

**Install everything at once:**
```bash
# One-liner to install all plugins
claude /plugin install compound-engineering-core rails-dev python-dev typescript-dev frontend-design
```

**Or keep the original plugin as a meta-package:**
```bash
# Install the meta-package (installs all 5 automatically)
claude /plugin install compound-engineering
```

### Migration Scenarios

| If you used... | Install these plugins |
|----------------|----------------------|
| Just the workflow commands | `compound-engineering-core` |
| Rails code review | `compound-engineering-core` + `rails-dev` |
| Python code review | `compound-engineering-core` + `python-dev` |
| TypeScript code review | `compound-engineering-core` + `typescript-dev` |
| Design iteration/Figma | `compound-engineering-core` + `frontend-design` |
| Everything | All 5 plugins |

### What Moves Where

#### compound-engineering-core (install first, always)

**Commands (14):**
- `workflows:plan`, `workflows:review`, `workflows:work`, `workflows:compound`
- `resolve_pr_parallel`, `plan_review`
- `generate_command`, `heal-skill`, `create-agent-skill`
- `resolve_parallel`, `resolve_todo_parallel`, `reproduce-bug`, `triage`, `changelog`

*Note: `report-bug`, `release-docs`, `deploy-docs` stay in the meta-package for project-level management.*

**Skills:**
- `compound-docs`, `file-todos`, `git-worktree`
- `skill-creator`, `create-agent-skills`
- `gemini-imagegen`, `agent-native-architecture`
- `every-style-editor`

**Agents:**
- Research: `repo-research-analyst`, `best-practices-researcher`, `framework-docs-researcher`, `spec-flow-analyzer`, `git-history-analyzer`
- Review: `code-simplicity-reviewer`, `pattern-recognition-specialist`, `architecture-strategist`, `performance-oracle`, `security-sentinel`, `data-integrity-guardian`, `data-migration-expert`, `deployment-verification-agent`, `agent-native-reviewer`
- Workflow: `bug-reproduction-validator`, `pr-comment-resolver`, `every-style-editor`

**MCP Servers:** `context7`

---

#### rails-dev (Ruby/Rails developers)

**Skills:**
- `dhh-rails-style` - 37signals Rails conventions
- `dhh-ruby-style` - DHH Ruby style
- `andrew-kane-gem-writer` - Gem writing patterns
- `dspy-ruby` - DSPy for Ruby

**Agents:**
- `kieran-rails-reviewer` - Opinionated Rails review
- `dhh-rails-reviewer` - DHH-style Rails review
- `ankane-readme-writer` - Ankane-style READMEs
- `lint` - Ruby/Rails linting

---

#### python-dev (Python developers)

**Agents:**
- `kieran-python-reviewer` - Opinionated Python review

---

#### typescript-dev (TypeScript/JS developers)

**Agents:**
- `kieran-typescript-reviewer` - Opinionated TypeScript review
- `julik-frontend-races-reviewer` - Frontend race condition review

---

#### frontend-design (Design work)

**Skills:**
- `frontend-design` - Frontend design patterns

**Agents:**
- `figma-design-sync` - Sync with Figma designs
- `design-iterator` - Iterative design improvement
- `design-implementation-reviewer` - Design implementation review

**MCP Servers:** `playwright` (for screenshots)

---

## Implementation Steps

### Phase 1: Repository Structure

- [ ] Create new plugin directories in marketplace root:
  ```
  plugins/
  ├── compound-engineering-core/
  ├── rails-dev/
  ├── python-dev/
  ├── typescript-dev/
  └── frontend-design/
  ```
- [ ] Each plugin gets standard structure:
  ```
  plugin-name/
  ├── .claude-plugin/
  │   └── plugin.json
  ├── agents/
  ├── commands/
  ├── skills/
  ├── mcp-servers/  (if applicable)
  ├── CHANGELOG.md
  └── README.md
  ```

### Phase 2: Move Components

- [ ] Copy agents to appropriate plugin directories
- [ ] Copy commands to appropriate plugin directories
- [ ] Copy skills to appropriate plugin directories
- [ ] Copy MCP server configs

### Phase 3: Update Metadata

- [ ] Create plugin.json for each new plugin
- [ ] Update marketplace.json with all 5 plugins
- [ ] Write README.md for each plugin
- [ ] Create CHANGELOG.md for each plugin

### Phase 4: Documentation

- [ ] Update docs site with new plugin structure
- [ ] Create migration guide page
- [ ] Update getting-started with new install instructions
- [ ] Add "which plugins do I need?" decision tree

### Phase 5: Testing

- [ ] Test each plugin installs independently
- [ ] Test core plugin works standalone
- [ ] Test framework plugins work with core
- [ ] Verify no broken agent references

### Phase 6: Release

- [ ] Deprecate old `compound-engineering` plugin (keep for 30 days)
- [ ] Release all 5 new plugins
- [ ] Announce migration path
- [ ] Update issue #20

---

## Backward Compatibility

**Recommendation: Keep `compound-engineering` as meta-package**

The original `compound-engineering` plugin becomes a thin wrapper that installs all 5 plugins:

```json
{
  "name": "compound-engineering",
  "version": "3.0.0",
  "description": "Meta-package: installs all compound-engineering plugins (core, rails-dev, python-dev, typescript-dev, frontend-design)",
  "dependencies": [
    "compound-engineering-core",
    "rails-dev",
    "python-dev",
    "typescript-dev",
    "frontend-design"
  ]
}
```

**Benefits:**
- Existing users run `claude /plugin update compound-engineering` and get the new structure
- New users can still install everything with one command
- No breaking change for current users
- Clear path to selective installation if desired

---

## References

- Anthropic's plugin structure: https://github.com/anthropics/claude-code/tree/main/plugins
- Current plugin: `/plugins/compound-engineering/`
- Issue: #20

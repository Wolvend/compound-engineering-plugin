# frontend-design

Design implementation, iteration, and Figma sync.

## Installation

```bash
# Install with core (recommended)
claude /plugin install compound-engineering-core frontend-design

# Full frontend stack
claude /plugin install compound-engineering-core typescript-dev frontend-design workflow-automation
```

## What's Included

### Agents (3)

- `figma-design-sync` - Sync implementation with Figma designs
- `design-iterator` - Iterative design improvement (5x, 10x iterations)
- `design-implementation-reviewer` - Review design implementation accuracy

### Skills (1)

- `frontend-design` - Frontend design patterns and best practices

### MCP Servers

- **playwright** - Browser automation for screenshots and visual comparison

## Usage

### Figma Sync

Compare your implementation with a Figma design:

```bash
# Claude will take screenshots and compare with Figma
claude "Sync this component with the Figma design at [figma-url]"
```

### Design Iteration

When design isn't coming together, use iterative refinement:

```bash
# Run 10 iterations of design improvement
claude "Iterate on the hero section 10 times to improve the visual balance"
```

### Design Review

After implementing a design, verify it matches specs:

```bash
claude "Review if this implementation matches the Figma design"
```

## Requirements

- Node.js (for Playwright MCP)
- Playwright is installed automatically via `npx`

## Works Best With

| Plugin | Why |
|--------|-----|
| `compound-engineering-core` | Base workflow |
| `typescript-dev` | TypeScript/JS review for frontend code |
| `workflow-automation` | Batch operations |

---
name: writing:skill
description: Create new writing skills (voice, domain, format) with automatic research
argument-hint: "create [voice|domain|format] \"name\" [samples or description]"
---

# Writing Skill Command

Create new writing skills with automatic research, pattern matching, and documentation.

## Input

<skill_input> #$ARGUMENTS </skill_input>

**Usage:**
- `create voice "kieran-blog" samples/*.md` → Create voice from writing samples
- `create voice "startup-founder" "direct, data-driven, builds in public"` → Create voice from description
- `create domain "saas-metrics" "MRR, churn, CAC/LTV"` → Create "10 Books Expert" domain skill
- `create format "linkedin" ` → Create platform-specific format skill

---

## Step 1: Parse Input

```
Extract:
- action: "create" (only action for now)
- type: "voice" | "domain" | "format"
- name: Skill name (kebab-case)
- source: File paths OR description text
```

---

## Step 2: Load Existing Patterns

Before creating, read existing skills as templates:

```
For voice skills:
  Read: skills/voice/pragmatic-writing/SKILL.md
  Read: skills/voice/dhh-writing/SKILL.md
  Read: skills/voice/every-essay-guide/SKILL.md
  Extract: Common structure, sections, frontmatter

For domain skills:
  Read: docs/WRITING-ARCHITECTURE.md (10 Books Expert pattern)
  Extract: Core texts, secondary texts, frameworks, reasoning patterns

For format skills:
  Read: docs/WRITING-ARCHITECTURE.md (Format Skills section)
  Extract: Platform constraints, key elements
```

---

## Step 3: Research Phase (Parallel Sub-Agents)

### For Voice Skills

```
If source is file paths:
  Load skill: voice-capture

  Task voice-analyzer: "Analyze these writing samples to extract voice patterns.
  Samples: [file contents]
  Return:
  - Vocabulary patterns (technical level, formality, distinctive words)
  - Sentence rhythm (avg length, patterns, constructions)
  - Tone markers (emotional register, personality, direct address)
  - Anti-patterns (what this voice avoids)
  - Example excerpts that exemplify the voice"

If source is description:
  Task voice-researcher: "Research and expand this voice description into a full profile.
  Description: [user description]

  Use WebSearch to find:
  - Writers with similar styles
  - Techniques that match this voice
  - Examples of this voice in action

  Return: Full voice profile with traits, patterns, examples"
```

### For Domain Skills

```
Task domain-researcher: "Research this domain to create a '10 Books Expert' skill.
Domain: [domain name]
Context: [user description if provided]

Research:
1. Identify 5 foundational books/sources for this domain
2. Identify 5 secondary/supporting sources
3. Extract key frameworks and mental models
4. Find common reasoning patterns
5. Identify domain-specific vocabulary
6. Find example applications

Use WebSearch and Context7 for:
- Authoritative sources
- Key thought leaders
- Standard frameworks
- Best practices

Return: Complete domain expertise profile"
```

### For Format Skills

```
Task format-researcher: "Research platform-specific writing constraints and best practices.
Platform: [platform name]

Research:
1. Character/word limits
2. Formatting constraints (headers, lists, links)
3. Optimal structure patterns
4. Engagement best practices
5. Example high-performing content
6. Common mistakes to avoid

Use WebSearch for:
- Platform documentation
- Creator guides
- Performance studies
- Expert recommendations

Return: Complete format constraints and templates"
```

**Wait for all research to complete.**

---

## Step 4: Review Research (BRAINSTORM)

```
Use AskUserQuestion:

Question: "Research complete for [type] skill '[name]'. Here's what I found:

[Summary of key findings]

Does this look right?"

Options:
1. **Looks good** - Proceed with skill creation
2. **Add more** - Include additional elements
3. **Adjust focus** - Change emphasis
4. **Research more** - Dig deeper on specific areas
```

---

## Step 5: Generate Skill Files

### Voice Skill Structure

Create `skills/voice/[name]/`:

```markdown
# SKILL.md
---
name: [name]
description: [When to use this voice - be specific about triggers]
---

# [Name] Voice

[One paragraph describing this voice's essence]

## When to Use This Skill

Use this skill when:
- [Trigger 1]
- [Trigger 2]
- [Trigger 3]

## Voice Profile

### Core Traits
- **Tone**: [warm/neutral/intense/etc.]
- **Formality**: [casual/professional/academic]
- **Personality**: [high/medium/low]
- **Technical Level**: [accessible/moderate/expert]

### Vocabulary Patterns

**Distinctive words/phrases:**
- [word/phrase 1]
- [word/phrase 2]

**Prohibited words:**
- [word 1] - because: [reason]
- [word 2] - because: [reason]

### Sentence Rhythm

- **Average length**: [X] words
- **Pattern**: [description]
- **Constructions**: [distinctive patterns]

### Signature Techniques

1. **[Technique 1]**: [Description]
2. **[Technique 2]**: [Description]

## Writing Rules

1. [Rule 1]
2. [Rule 2]
3. [Rule 3]

## Anti-Patterns

| Avoid | Because | Instead |
|-------|---------|---------|
| [pattern] | [reason] | [alternative] |

## Examples

### Before (Generic)
> [Generic version]

### After ([Name] Voice)
> [Transformed version]

## Integration

Works well with:
- `[other voice]` for [reason]
- `[editing skill]` for [reason]
```

Create supporting files if needed:
- `references/examples.md` - Extended examples
- `references/techniques.md` - Deep dive on techniques

### Domain Skill Structure

Create `skills/domain/[name]/`:

```markdown
# SKILL.md
---
name: domain-[name]
description: Deep expertise in [domain] - the "10 Books Expert" for [topic]
---

# [Domain] Expertise

[One paragraph on what this domain covers and why it matters]

## When to Use This Skill

Use this skill when writing about:
- [Topic 1]
- [Topic 2]
- [Topic 3]

## Core Knowledge Base

### Foundational Works (The 5 Core Books)

1. **[Book/Source 1]** by [Author]
   - Key insight: [insight]
   - Use when: [context]

2. **[Book/Source 2]** by [Author]
   - Key insight: [insight]
   - Use when: [context]

[... 3-5 total]

### Supporting Works (5 Secondary Sources)

1. **[Source 1]**: [What it adds]
2. **[Source 2]**: [What it adds]

[... 3-5 total]

## Key Frameworks

### [Framework 1 Name]
[Description and how to apply]

### [Framework 2 Name]
[Description and how to apply]

## Domain Vocabulary

| Term | Definition | Usage |
|------|------------|-------|
| [term] | [definition] | [when to use] |

## Reasoning Patterns

When writing about [domain], apply these thinking patterns:

1. **[Pattern 1]**: [How to reason about X]
2. **[Pattern 2]**: [How to reason about Y]

## Common Mistakes

| Mistake | Why It's Wrong | Correct Approach |
|---------|----------------|------------------|
| [mistake] | [reason] | [fix] |

## Example Applications

### Topic: [Example Topic 1]
**Approach**: [How to apply domain knowledge]
**Key points**: [What to emphasize]
```

### Format Skill Structure

Create `skills/format/[name]/`:

```markdown
# SKILL.md
---
name: format-[name]
description: Optimize content for [platform] - constraints, templates, and best practices
---

# [Platform] Format

[One paragraph on this platform and its unique requirements]

## When to Use This Skill

Use when:
- Adapting content for [platform]
- Writing native [platform] content
- Optimizing for [platform] engagement

## Platform Constraints

| Element | Constraint |
|---------|-----------|
| Character limit | [X chars] |
| Optimal length | [range] |
| Headers | [allowed/not] |
| Links | [how they work] |
| Images | [specs] |
| Hashtags | [best practice] |

## Optimal Structure

### Template 1: [Type]
```
[Structure with placeholders]
```

### Template 2: [Type]
```
[Structure with placeholders]
```

## Best Practices

1. **[Practice 1]**: [Why and how]
2. **[Practice 2]**: [Why and how]

## Hooks That Work

| Hook Type | Example |
|-----------|---------|
| [type] | "[example]" |

## Common Mistakes

| Mistake | Fix |
|---------|-----|
| [mistake] | [solution] |

## Examples

### High-Performing [Platform] Post
```
[Actual example with annotations]
```
```

---

## Step 6: Update Documentation

```
Update plugins/compound-writing/CLAUDE.md:
- Add new skill to appropriate table
- Update skill count

Update plugins/compound-writing/README.md:
- Add new skill to skills list
- Update count in description
```

---

## Step 7: Commit

```bash
git add plugins/compound-writing/skills/[type]/[name]/
git add plugins/compound-writing/CLAUDE.md
git add plugins/compound-writing/README.md

git commit -m "feat(compound-writing): Add [name] [type] skill

[Brief description of the skill]

- [Key feature 1]
- [Key feature 2]
- [Key feature 3]

Co-Authored-By: Claude <noreply@anthropic.com>"
```

---

## Step 8: Confirm Creation

```markdown
✓ Created [type] skill: [name]

**Location**: skills/[type]/[name]/
**Files**:
- SKILL.md (main skill definition)
- references/[files] (supporting materials)

**Research sources used**:
- [source 1]
- [source 2]

**Ready to use**:
- Voice selection in `/writing:plan`
- Layering with other voices

**Next steps**:
1. Review the generated skill
2. Add personal examples if desired
3. Test with `/writing:draft`
```

---

## Step 9: Post-Creation Options (BRAINSTORM)

```
Use AskUserQuestion:

Question: "Skill '[name]' created and committed. What next?"

Options:
1. **View skill** - Open the SKILL.md file
2. **Test it** - Run /writing:plan with this voice
3. **Refine** - Edit or expand the skill
4. **Create another** - Make another skill
5. **Done** - Finished for now
```

---

## Quality Checklist

Before completing:
- [ ] Input correctly parsed (type, name, source)
- [ ] Existing skills read as patterns
- [ ] Research sub-agents completed
- [ ] User approved research findings
- [ ] Skill files created in correct location
- [ ] SKILL.md has valid frontmatter
- [ ] References files created if needed
- [ ] Documentation updated (CLAUDE.md, README.md)
- [ ] Changes committed with descriptive message
- [ ] User shown confirmation with next steps

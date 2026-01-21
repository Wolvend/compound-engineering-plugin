import path from "path"
import { copyDir, ensureDir, writeJson, writeText } from "../utils/files"
import type { OpenCodeBundle } from "../types/opencode"

export async function writeOpenCodeBundle(outputRoot: string, bundle: OpenCodeBundle): Promise<void> {
  await ensureDir(outputRoot)
  await writeJson(path.join(outputRoot, "opencode.json"), bundle.config)

  const agentsDir = path.join(outputRoot, ".opencode", "agents")
  for (const agent of bundle.agents) {
    await writeText(path.join(agentsDir, `${agent.name}.md`), agent.content + "\n")
  }

  if (bundle.plugins.length > 0) {
    const pluginsDir = path.join(outputRoot, ".opencode", "plugins")
    for (const plugin of bundle.plugins) {
      await writeText(path.join(pluginsDir, plugin.name), plugin.content + "\n")
    }
  }

  if (bundle.skillDirs.length > 0) {
    const skillsRoot = path.join(outputRoot, ".opencode", "skills")
    for (const skill of bundle.skillDirs) {
      await copyDir(skill.sourceDir, path.join(skillsRoot, skill.name))
    }
  }
}

# Chaos Drops — Minecraft Bedrock Add-on

A Minecraft Bedrock Edition add-on that makes every kill and block break chaotic:
- **Killing mobs** drops a random amount of XP, random item drops, and spawns an additional random mob.
- **Breaking blocks** gives random XP, random item drops, and has a chance to spawn a random mob at the break location.

Built for **Minecraft Bedrock 1.20.60+** using the Script API (`@minecraft/server`).

## Features

### Killing a mob
- Random XP orb amount (0–70 XP).
- Random item drops from a built-in loot table.
- A random mob spawns at the killed mob's location.

### Breaking a block
- Random XP gain (0–30 XP).
- Random item drops (chance based).
- A random mob spawns at the block break location (chance based).

Both features are fully configurable in `scripts/config.js` — you can add/remove items, mobs, and tune probabilities.

## Installation

1. Install **Minecraft Bedrock Edition** on Windows, Android, iOS, or a supporting console/dev environment (and enable **Creator** / **Beta APIs** worlds for Script API).
2. Place this add-on's `.mcaddon` (a zip of `behavior_pack` + `resource_pack`) in the `resource_packs` / `behavior_packs` folders, or import it into the game via the `.mcaddon` file.
3. When creating or editing a world, enable the behavior pack and resource pack.
4. **Important:** For Script API to run, the world must have **Beta APIs** enabled (`/scripting` or the world `Experiments` → `Beta APIs`) and you need `allowlist` verified via creator tools for script-enabled worlds.

## Building the .mcaddon

The add-on ships as two folders:
- `behavior_pack/` — scripts, manifest, and behavior JSON.
- `resource_pack/` — pack icon and manifest.

To make a shareable `.mcaddon`, zip the two folders together and rename the archive to `ChaosDrops.mcaddon`:

```
zip -r ChaosDrops.mcaddon behavior_pack resource_pack
```

Then double-click `ChaosDrops.mcaddon` to import it into Minecraft Bedrock.

> **Optional:** Add a `pack_icon.png` (a square PNG) to the root of each pack folder to show a custom icon in-game. Without it, Minecraft shows a default icon.

## Configuration

All randomness lives in `behavior_pack/scripts/config.js`:

| Setting | Purpose |
| --- | --- |
| `xpMin` / `xpMax` | Random XP range on kill |
| `blockXpMin` / `blockXpMax` | Random XP range on block break |
| `killDropsChance` | Chance (0–1) a random item drops on kill |
| `blockDropChance` | Chance a random item drops on block break |
| `mobSpawnChance` | Chance a mob spawns on breaking a block |
| `itemPool` | List of random items that can drop |
| `mobPool` | List of random mobs that can spawn |

## Commands / Notes

- This add-on needs no manual commands — it works automatically via the Script API.
- Requires a world with **Beta APIs** enabled to run scripts.

---

More Minecraft mod projects by EnderDevelopment: https://github.com/EnderDevelopment

Project page: https://dash.enderdevelopment.com/community/afc1c12a-ba6c-43c3-93cf-e8edd545b66f?utm_source=github&utm_medium=readme&utm_campaign=auto_publish&utm_content=afc1c12a-ba6c-43c3-93cf-e8edd545b66f

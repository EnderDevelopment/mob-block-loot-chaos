// Chaos Drops configuration.
// Edit these values to tune the randomness of the add-on.

export const config = {
  // XP range given when a player kills a mob.
  xpMin: 0,
  xpMax: 70,

  // XP range given when a player breaks a block.
  blockXpMin: 0,
  blockXpMax: 30,

  // Chance (0 to 1) that a random item drops when killing a mob.
  killDropsChance: 1.0,

  // Chance (0 to 1) that a random item drops when breaking a block.
  blockDropChance: 0.5,

  // Chance (0 to 1) that a random mob spawns when breaking a block.
  mobSpawnChance: 0.25,

  // Chat feedback to the player (set to false to disable chat messages).
  chatFeedback: true,

  // Random items that can drop. Each entry is [itemId, stackSize].
  itemPool: [
    ["minecraft:diamond", 3],
    ["minecraft:emerald", 5],
    ["minecraft:gold_ingot", 8],
    ["minecraft:iron_ingot", 12],
    ["minecraft:apple", 6],
    ["minecraft:golden_apple", 1],
    ["minecraft:bone", 10],
    ["minecraft:gunpowder", 7],
    ["minecraft:arrow", 16],
    ["minecraft:amethyst_shard", 9],
    ["minecraft:quartz", 8],
    ["minecraft:ender_pearl", 2],
    ["minecraft:blaze_rod", 3],
    ["minecraft:phantom_membrane", 2],
    ["minecraft:scute", 4],
    ["minecraft:slime_ball", 6],
    ["minecraft:egg", 4],
    ["minecraft:feather", 9]
  ],

  // Random mobs that can spawn.
  mobPool: [
    "minecraft:zombie",
    "minecraft:skeleton",
    "minecraft:spider",
    "minecraft:enderman",
    "minecraft:creeper",
    "minecraft:wolf",
    "minecraft:cat",
    "minecraft:chicken",
    "minecraft:sheep",
    "minecraft:cow",
    "minecraft:pig",
    "minecraft:cod",
    "minecraft:salmon",
    "minecraft:cave_spider",
    "minecraft:slime",
    "minecraft:witch",
    "minecraft:villager_v2",
    "minecraft:rabbit",
    "minecraft:fox",
    "minecraft:llama"
  ]
};

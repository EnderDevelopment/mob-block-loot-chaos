// Chaos Drops — main script.
// Listens for entity deaths and block destruction events and applies
// random XP, item drops, and mob spawns.

import { world, ItemStack } from "@minecraft/server";
import { config } from "./config.js";

// Returns a random integer between min and max (inclusive).
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Picks a random element from an array.
function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// Adds XP to a player.
function giveXp(player, amount) {
  if (amount <= 0) return;
  try {
    player.addExperience(amount);
  } catch (error) {
    // XP could not be added; ignore silently.
  }
}

// Drops a random item from the pool at the given location.
function dropRandomItem(dimension, location) {
  if (config.itemPool.length === 0) return;
  const [itemId, amount] = pickRandom(config.itemPool);
  try {
    dimension.spawnItem(new ItemStack(itemId, amount), location);
  } catch (error) {
    // Invalid item id; skip.
  }
}

// Spawns a random mob from the pool at the given location.
function spawnRandomMob(dimension, location) {
  if (config.mobPool.length === 0) return;
  const mobId = pickRandom(config.mobPool);
  try {
    dimension.spawnEntity(mobId, location);
    return mobId;
  } catch (error) {
    // Invalid mob id; skip.
    return null;
  }
}

// Chat feedback helper.
function sendFeedback(player, message) {
  if (config.chatFeedback && player) {
    try {
      player.sendMessage(message);
    } catch (error) {
      // Ignore send errors.
    }
  }
}

// Handle a mob being killed by a player.
function handleMobKilled(event) {
  const dead = event.deadEntity;
  if (!dead || dead.typeId === "minecraft:player") return;

  const killer = event.damageSource?.damagingEntity;
  if (!killer || killer.typeId !== "minecraft:player") return;

  const location = dead.location;
  const dimension = dead.dimension;

  // Random XP.
  const xp = randomInt(config.xpMin, config.xpMax);
  giveXp(killer, xp);

  // Random item drop.
  if (Math.random() <= config.killDropsChance) {
    dropRandomItem(dimension, location);
  }

  // Spawn a random replacement mob at the kill location.
  const spawned = spawnRandomMob(dimension, location);
  sendFeedback(
    killer,
    `§aChaos! Mob killed: +§6${xp} XP§a.` +
      (spawned ? ` A ${spawned.replace("minecraft:", "")} appeared!` : "")
  );
}

// Handle a block being broken by a player.
function handleBlockBroken(event) {
  const player = event.player;
  if (!player) return;

  const location = event.block.location;
  const dimension = event.dimension;

  // Random XP.
  const xp = randomInt(config.blockXpMin, config.blockXpMax);
  giveXp(player, xp);

  // Random item drop.
  let droppedItem = false;
  if (Math.random() <= config.blockDropChance) {
    dropRandomItem(dimension, location);
    droppedItem = true;
  }

  // Random mob spawn.
  const spawnChance = config.mobSpawnChance;
  const entityId = event.block.typeId || "block";
  const shouldMobSpawn = Math.random() <= spawnChance;
  const spawned = shouldMobSpawn ? spawnRandomMob(dimension, location) : null;

  sendFeedback(
    player,
    `§7Block broken (${entityId.replace("minecraft:", "")}): +§6${xp} XP§7.` +
      (droppedItem ? " A mystery item dropped!" : "") +
      (spawned ? ` And a ${spawned.replace("minecraft:", "")} appeared!` : "")
  );
}

// Register event subscriptions when the script module is loaded.
world.afterEvents.entityDie.subscribe(handleMobKilled);
world.afterEvents.playerBreakBlock.subscribe(handleBlockBroken);

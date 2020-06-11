module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  let enhancement = item.enhancement;

  if (enhancement < 20) {
    return enhancement + 1;
  } else {
    return enhancement;
  }
}

function fail(item) {
  let enhancement = item.enhancement;
  let durability = item.durability;

  if (enhancement < 15) {
    return durability - 5;
  } else if (enhancement >= 15) {
    return durability - 10;
  } else if (enchantment > 16) {
    return enhancement - 1;
  }
}

function repair(item) {
  let durability = item.durability;
  return (durability = 100);
}

function get(item) {
  let enhancement = item.enhancement;
  if (enhancement > 0) {
    return `[+${enhancement}] ${item.name}`;
  } else {
    return item;
  }
}

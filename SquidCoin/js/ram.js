function upgradeRAM() {
  if (money >= costOfRAM) {
    ram++;
    money -= costOfRAM;
    dps += (10 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}

function upgradeRAM5() {
  if (money >= costOfRAM * 5) {
    ram += 5;
    money -= costOfRAM * 5;
    dps += (50 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}

function upgradeRAM25() {
  if (money >= costOfRAM * 25) {
    ram += 25;
    money -= costOfRAM * 25;
    dps += (250 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}

function upgradeRAM50() {
  if (money >= costOfRAM * 50) {
    ram += 50;
    money -= costOfRAM * 50;
    dps += (500 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}

function upgradeRAM100() {
  if (money >= costOfRAM * 100) {
    ram += 100;
    money -= costOfRAM * 100;
    dps += (1000 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}
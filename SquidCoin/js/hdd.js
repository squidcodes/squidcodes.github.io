function upgradeHDD() {
  if (money >= costOfHDD) {
    hdd++;
    money -= costOfHDD;
    dps += (500 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}

function upgradeHDD5() {
  if (money >= costOfHDD * 5) {
    hdd += 5;
    money -= costOfHDD * 5;
    dps += (2500 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}

function upgradeHDD25() {
  if (money >= costOfHDD * 25) {
    hdd += 25;
    money -= costOfHDD * 25;
    dps += (12500 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}

function upgradeHDD50() {
  if (money >= costOfHDD * 50) {
    hdd += 50;
    money -= costOfHDD * 50;
    dps += (25000 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}

function upgradeHDD100() {
  if (money >= costOfHDD * 100) {
    hdd += 100;
    money -= costOfHDD * 100;
    dps += (50000 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}
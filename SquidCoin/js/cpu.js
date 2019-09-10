function upgradeCPU() {
  if (money >= costOfCPU) {
    cpu++;
    money -= costOfCPU;
    dps += dpsMultiplier;
  } else {
    console.log('You Broke!');
  }
}

function upgradeCPU5() {
  if (money >= costOfCPU * 5) {
    cpu += 5;
    money -= costOfCPU * 5;
    dps += (5 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}

function upgradeCPU25() {
  if (money >= costOfCPU * 25) {
    cpu += 25;
    money -= costOfCPU * 25;
    dps += (25 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}

function upgradeCPU50() {
  if (money >= costOfCPU * 50) {
    cpu += 50;
    money -= costOfCPU * 50;
    dps += (50 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}

function upgradeCPU100() {
  if (money >= costOfCPU * 100) {
    cpu += 100;
    money -= costOfCPU * 100;
    dps += (100 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}
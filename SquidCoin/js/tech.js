function hireTech() {
  if (money >= costOfTechs) {
    tech++;
    money -= costOfTechs;
    dps += (1000 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}

function hireTech5() {
  if (money >= costOfTechs * 5) {
    tech += 5;
    money -= costOfTechs * 5;
    dps += (5000 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}

function hireTech25() {
  if (money >= costOfTechs * 25) {
    tech += 25;
    money -= costOfTechs * 25;
    dps += (25000 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}

function hireTech50() {
  if (money >= costOfTechs * 50) {
    tech += 50;
    money -= costOfTechs * 50;
    dps += (50000 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}

function hireTech100() {
  if (money >= costOfTechs * 100) {
    tech += 100;
    money -= costOfTechs * 100;
    dps += (100000 * dpsMultiplier);
  } else {
    console.log('You Broke!');
  }
}
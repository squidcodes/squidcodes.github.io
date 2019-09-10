// Started on 8/13/2019
// Version 1.0 Released on 8/22/2019

let button;
let money = 0;
let totalMoney = 0;
let squidCoin = 0;
let dps = 0;
let ram = 0;
let hdd = 0;
let gpu = 0;
let tech = 0;
let cpu = 0;
let dpsMultiplier = 1;
let dpsPlus = setInterval(increaseDPS, 1000);
let costOfCPU = 100;
let costOfRAM = 1000;
let costOfGPU = 10000;  
let costOfHDD = 50000;
let costOfTechs = 100000;
let costOfSquidCoin = 10000000000;


function setup() { // creates canvas and buttons. DONE
  createCanvas(850, 650);
  newGame();
  
  button = createButton('Beg For $5');
  button.position(395, 10);
  button.mousePressed(makeMoney);

  button = createButton('Start New Game');
  button.position(650, 610);
  button.mousePressed(newGame);

  button = createButton('Save Game');
  button.position(750, 10);
  button.mousePressed(saveGameState);
  
  button = createButton('Load Game');
  button.position(750, 35);
  button.mousePressed(loadGameState);

  button = createButton('Credits');
  button.position(770, 610);
  button.mousePressed(credits);
  
  button = createButton('Exchange 5 SquidCoins');
  button.position(490, 10);
  button.mousePressed(exchangeSquidCoins);

  button = createImg('assets/cpu.png');
  button.position(10, 80);
  button.mousePressed(upgradeCPU); 
  button = createImg('assets/cpu.png');
  button.position(115, 80);
  button.mousePressed(upgradeCPU5);
  button = createImg('assets/cpu.png');
  button.position(220, 80);
  button.mousePressed(upgradeCPU25);
  button = createImg('assets/cpu.png');
  button.position(325, 80);
  button.mousePressed(upgradeCPU50);
  button = createImg('assets/cpu.png');
  button.position(430, 80);
  button.mousePressed(upgradeCPU100);
  
  button = createImg('assets/ram.png');
  button.position(10, 190);
  button.mousePressed(upgradeRAM);
  button = createImg('assets/ram.png');
  button.position(115, 190);
  button.mousePressed(upgradeRAM5);
  button = createImg('assets/ram.png');
  button.position(220, 190);
  button.mousePressed(upgradeRAM25);
  button = createImg('assets/ram.png');
  button.position(325, 190);
  button.mousePressed(upgradeRAM50);
  button = createImg('assets/ram.png');
  button.position(430, 190);
  button.mousePressed(upgradeRAM100);

  button = createImg('assets/gpu.png');
  button.position(10, 285);
  button.mousePressed(upgradeGPU);
  button = createImg('assets/gpu.png');
  button.position(115, 285);
  button.mousePressed(upgradeGPU5);
  button = createImg('assets/gpu.png');
  button.position(220, 285);
  button.mousePressed(upgradeGPU25);
  button = createImg('assets/gpu.png');
  button.position(325, 285);
  button.mousePressed(upgradeGPU50);
  button = createImg('assets/gpu.png');
  button.position(430, 285);
  button.mousePressed(upgradeGPU100);

  button = createImg('assets/hdd.png');
  button.position(10, 360);
  button.mousePressed(upgradeHDD);
  button = createImg('assets/hdd.png');
  button.position(115, 360);
  button.mousePressed(upgradeHDD5);
  button = createImg('assets/hdd.png');
  button.position(220, 360);
  button.mousePressed(upgradeHDD25);
  button = createImg('assets/hdd.png');
  button.position(325, 360);
  button.mousePressed(upgradeHDD50);
  button = createImg('assets/hdd.png');
  button.position(430, 360);
  button.mousePressed(upgradeHDD100);

  button = createImg('assets/tech.png');
  button.position(10, 485);
  button.mousePressed(hireTech);
  button = createImg('assets/tech.png');
  button.position(115, 485);
  button.mousePressed(hireTech5);
  button = createImg('assets/tech.png');
  button.position(220, 485);
  button.mousePressed(hireTech25);
  button = createImg('assets/tech.png');
  button.position(325, 485);
  button.mousePressed(hireTech50);
  button = createImg('assets/tech.png');
  button.position(430, 485);
  button.mousePressed(hireTech100);

}

function draw() { // adds all the text DONE
  background(150);
  textSize(18);

  text('Money:' + ' $' + abbreviateNumber(money, 2), 50, 20); // Money
  text('SquidCoins: ' + abbreviateNumber(squidCoin, 2), 50, 40); // SquidCoins
  text(nfc('Dollars Per Second(DPS):' + ' $' + dps, 0), 50, 60); // DPS Increase

  text('CPU\'s:' + ' ' + abbreviateNumber(cpu, 2), 550, 100); // Ammount of CPU's
  text('Cost: $' + abbreviateNumber(costOfCPU, 2), 550, 115); // Cost of CPU's
  text('+1 DPS', 550, 130); // DPS Increase

  text('RAM:' + ' ' + abbreviateNumber(ram, 3), 550, 220); // Ammount of RAM
  text('Cost: $' + abbreviateNumber(costOfRAM, 3), 550, 235); // Cost of RAM
  text('+10 DPS', 550, 250); // DPS Increase

  text('GPU\'s:' + ' ' + abbreviateNumber(gpu, 3), 550, 300); // Ammount of GPU's
  text('Cost: $' + abbreviateNumber(costOfGPU, 3), 550, 315); // Cost of GPU's
  text('+100 DPS', 550, 330); // DPS Increase

  text('HDD\'s:' + ' ' + abbreviateNumber(hdd, 3), 550, 400); // Ammount of hdd
  text('Cost: $' + abbreviateNumber(costOfHDD, 0), 550, 415); // Cost of hdd
  text('+500 DPS', 550, 430); // DPS Increase

  text('Techs:' + ' ' + abbreviateNumber(tech, 3), 550, 520); // Ammount of Techs
  text('Cost: $' + abbreviateNumber(costOfTechs, 3), 550, 535); // Cost of Techs
  text('+1,000 DPS', 550, 550); // DPS Increase

  text('X1', 50, 200);
  text('X5', 155, 200);
  text('X25', 255, 200);
  text('X50', 360, 200);
  text('X100', 460, 200);

  text('X1', 50, 270);
  text('X5', 155, 270);
  text('X25', 255, 270);
  text('X50', 360, 270);
  text('X100', 460, 270);

  text('X1', 50, 350);
  text('X5', 155, 350);
  text('X25', 255, 350);  // These are all of the 1x 5x 25x 50x and 100x under each icon.
  text('X50', 360, 350);
  text('X100', 460, 350);

  text('X1', 50, 475);
  text('X5', 155, 475);
  text('X25', 255, 475);
  text('X50', 360, 475);
  text('X100', 460, 475);

  text('X1', 50, 605);
  text('X5', 155, 605);
  text('X25', 255, 605);
  text('X50', 360, 605);
  text('X100', 460, 605);

  textSize(14)
  text('You will lose all money & parts for\na permanent 2x DPS boost!', 490, 45);

}

function abbreviateNumber(num, fixed) { // takes large numbers like 100,000 and makes them 100k DONE Not my CODE
  if (num === null) { return null; } // terminate early
  if (num === 0) { return '0'; } // terminate early
  fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
  var b = (num).toPrecision(2).split("e"), // get power
      k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at quadrillions
      c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3) ).toFixed(1 + fixed), // divide by power
      d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
      e = d + ['', 'K', 'M', 'B', 'T', 'Q'][k]; // append power
  return e;
}

function saveGameState() { // saves the game DONE
  let lastSaveDate = Date.now();
  var file = {
        money: money,
        cpu: cpu,
        squidCoin: squidCoin,
        dps: dps,
        ram: ram,
        hdd: hdd,
        gpu: gpu,
        tech: tech,
        dpsMultiplier: dpsMultiplier,
        costOfSquidCoin: costOfSquidCoin,
        squidCoin: squidCoin,
        totalMoney: totalMoney,
        costOfCPU: costOfCPU,
        costOfRAM: costOfRAM,
        costOfGPU: costOfGPU,
        costOfHDD: costOfHDD,
        costOfTechs: costOfTechs,
        lastSaveDate: lastSaveDate
    };
    localStorage.setItem('saveFile',JSON.stringify(file));
}

function increaseSquidCoin() { // increase SquidCoins DONE
  if (totalMoney >= costOfSquidCoin) {
    squidCoin += 1;
    costOfSquidCoin *= 1.25;
  }
}

function exchangeSquidCoins() { // double DPS per 5 coins DONE
  if (squidCoin >= 5) {
      dpsMultiplier *= 2;
      squidCoin -= 5;
      dps = 0;
      money = 0;
      totalMoney = 0;
      ram = 0;
      hdd = 0;
      gpu = 0;
      tech = 0;
      cpu = 0;
  } else {
    alert('You don\'t have enough SquidCoins')
  }
}

function offlineEarnings(){ // Money earned while not playing - I somehow actually figured this out... DONE!
  let currentTime = Date.now(); // gets current time
  offline = dps * (Math.round((currentTime - lastSaveDate) / 1000)); // gets seconds
  money += offline; // adds money to offline earnings
  totalMoney += offline;
  alert("You earned: $" + nfc(offline) + " while you were gone!") // alert message
}

function loadGameState() { // loads the game DONE
    var file = JSON.parse(localStorage.getItem('saveFile'));
    money = file.money;
    cpu = file.cpu;
    squidCoin = file.squidCoin;
    dps = file.dps;
    ram = file.ram;
    hdd = file.hdd;
    gpu = file.gpu;
    tech = file.tech;
    dpsMultiplier = file.dpsMultiplier;
    costOfSquidCoin = file.costOfSquidCoin;
    totalMoney = file.totalMoney;
    costOfCPU = file.costOfCPU;
    costOfRAM = file.costOfRAM;
    costOfGPU = file.costOfGPU;
    costOfHDD = file.costOfHDD;
    costOfTechs = file.costOfTechs;
    lastSaveDate = file.lastSaveDate;
    offlineEarnings();
}

function newGame() { // starts a new game DONE
    money = 0;
    squidCoin = 0;
    dps = 0;
    ram = 0;
    hdd = 0;
    gpu = 0;
    tech = 0;
    cpu = 0;
    dpsMultiplier = 1;
    costOfSquidCoin = 10000000000;
    totalMoney = 0;
    costOfCPU = 100;
    costOfRAM = 1000;
    costOfGPU = 10000;  
    costOfHDD = 50000;
    costOfTechs = 100000;
}

function increaseDPS() { // checks dps and increases it. DONE
  if (dps >= 1) {
    money += dps;
    totalMoney += dps;
    increaseSquidCoin();
    saveGameState(); // Basically auto save
  }
}

function makeMoney() { // beg for 5$ DONE
  money += 5;
  totalMoney += 5;
}

function credits(){ // credits button DONE
  alert("This game was created by Mark Woods. All images are from OpenGameArt.org except the 'tech' icon made by Freepik from www.flaticon.com ") // alert message
}
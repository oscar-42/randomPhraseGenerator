//object with the 3 vectors 
const randomNames = {
    franchises:['Castlevania', 'Metroid', 'Final Fantasy', 'Super Mario', 'The Legend of Zelda', 'Assassin\'s Creed', 'Half-Life 3', 'The Elder Scrolls', 'Street Fighter', 'God of War', 'Resident Evil', 'Monster Hunter', 'Mega Man', 'Dark Souls','Sonic'],
    subA:['Symphony of', 'Breath of', 'World of','Time to', 'Prepare to','Knights of', 'Zero', 'Dreams of', 'Return of', 'Quest for'],
    subB:['the Night', 'the Moon', 'Despair', 'Prime', 'Tactics', 'Sunshine','Odyssey','Galaxy','Origins','Turbo Edition','Rising','Revengeance','Adventure','Superstars'],
}

//get a random entry from each
let randomNumber = Math.floor(Math.random()*randomNames.franchises.length);
let franchiseName = randomNames.franchises[randomNumber];


let randomNumberA = Math.floor(Math.random()*randomNames.subA.length);
let subtitleA = randomNames.subA[randomNumberA];


let randomNumberB = Math.floor(Math.random()*randomNames.subB.length);
let subtitleB = randomNames.subB[randomNumberB];

//print the result:
console.log(`${franchiseName}: ${subtitleA} ${subtitleB}`);
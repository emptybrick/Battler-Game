/*-------------------Constants-------------------*/

const pokeMart = document.querySelector('#poke-mart');
const gym = document.querySelector('#gym');
const pokeCenter = document.querySelector('#poke-center');
const trainerBattle = document.querySelector('#trainer-battle');
const searchForPokemon = document.querySelector('#search-for-pokemon');
const starterButton = document.querySelectorAll('.starter-pokemon');
const nextAreaButton = document.querySelectorAll('.next-area');
const lastAreaButton = document.querySelectorAll('.last-area')
const leaveButton = document.querySelectorAll(".leave");
const pageNextButton = document.querySelectorAll("#page-next");
const pagePreviousButton = document.querySelectorAll("#page-previous");
const playAgainButton = document.querySelectorAll('#play-again');
const pokeMartBuyButton = document.querySelectorAll('.mart');
const healButton = document.querySelector('.poke-button.heal');
const checkCollection = document.querySelector('.poke-button.collection');
const switchPokemonButton = document.querySelectorAll('.switch-pokemon');
const useRareCandy = document.querySelector('.use-rare-candy');
const dynamicButton = document.querySelectorAll('.dynamic-button');
const gameClearButton = document.querySelector('#game-clear-button');
const eliteFourButton = document.querySelectorAll('.elite-four-button');
const usePotion = document.querySelectorAll('.use-potion');

const party = [];

const areas = [
    { location: "palletTown", completed: false, type: "normal", condition: () => party.length >= 3 },
    { location: "pewterCity", completed: false, badge: 'Boulder', type: "rock", condition: () => badges.includes('Boulder') },
    { location: "ceruleanCity", completed: false, badge: 'Cascade', type: "water", condition: () => badges.includes('Cascade') },
    { location: "vermilionCity", completed: false, badge: 'Thunder', type: ["electric", "fighting"], condition: () => badges.includes('Thunder') },
    { location: "celadonCity", completed: false, badge: 'Rainbow', type: ["bug", "grass"], condition: () => badges.includes('Rainbow') },
    { location: "fuchsiaCity", completed: false, badge: 'Soul', type: ["poison", "fairy"], condition: () => badges.includes('Soul') },
    { location: "saffronCity", completed: false, badge: 'Marsh', type: ["psychic", "ghost"], condition: () => badges.includes('Marsh') },
    { location: "cinnabarIsland", completed: false, badge: 'Volcano', type: "fire", condition: () => badges.includes('Volcano') },
    { location: "viridianCity", completed: false, badge: 'Earth', type: "ground", condition: () => badges.includes('Earth') },
    { location: "indigoPlateau", completed: false, type: ["dragon", "special"], condition: () => badges.includes('Volcano') },
];

const items = [
    { name: "potion", quantity: 2, cost: 2 },
    { name: "pokeball", quantity: 5, cost: 1 },
    { name: "rarecandy", quantity: 0, cost: null },
    { name: "gold", quantity: 10, cost: null }
];

const badges = [];

const collection = [];

// need to figure out if const or let
// const currentPokemon = [];

/*-------------------Variables-------------------*/

let currentArea = null;
let nextArea = null;
let lastArea = null;
let currentPage = "page1";
let nextPage = null;
let lastPage = null;
let activeSlot = '';
let encounter = '';
let oppName = '';

let currentPokemon = [];
let oppCurrentPokemon = [];
let wildPokemonFound = [];
let oppParty = [];




/*-------------------Functions-------------------*/

// function to reset game state on Play Again or Try Again
function resetGame() {
    console.log("Resetting game to initial state");
    party.length = 0;
    oppParty.length = 0;
    badges.length = 0;
    collection.length = 0;
    items.forEach(item => {
        switch (item.name) {
            case "potion":
                item.quantity = '-';
                break;
            case "pokeball":
                item.quantity = '-';
                break;
            case "rarecandy":
                item.quantity = '-';
                break;
            case "gold":
                item.quantity = '-';
                break;
        }
    });

    areas.forEach(area => {
        area.completed = false;
    });

    currentArea = null;
    nextArea = null;
    lastArea = null;
    currentPage = "page1";
    nextPage = null;
    lastPage = null;
    activeSlot = '';
    encounter = '';
    oppName = '';

    currentPokemon = [];
    oppCurrentPokemon = [];
    wildPokemonFound = [];

    document.querySelectorAll('.partyMember').forEach(slot => slot.classList.remove('active'));
    document.querySelectorAll('.icon').forEach(icon => icon.classList.remove('active'));

    switchScreen('start');
    updatePartyDisplay();
    updateItemDisplay();
    updateAreaButton();
}


// function to switch main area screen
function switchScreen(screenClass) {
    document.querySelectorAll('.main-screen').forEach(screen => screen.classList.remove('active'));
    document.querySelector(`.${screenClass}`).classList.add('active');
    // console.log(`Switching screen to ${screenClass}`)
    if (screenClass === 'palletTown' || screenClass === 'indigoPlateau') {
        currentArea = screenClass;
        enableButtons('#search-for-pokemon');
        enableButtons('#poke-mart');
        enableButtons('#poke-center');
        disableButtons('#trainer-battle');
        disableButtons('#gym');
        // console.log("enabling buttons because You are in Pallet Town");
        // console.log('can only search for pokemon while in pallet town');
        // console.log(currentArea)
    }
    else if (screenClass === "pokemart" || screenClass === "pokecenter" || screenClass === "battle" ||
        screenClass === "gameCleared" || screenClass === "gameOver" || screenClass === 'start' ||
        screenClass === 'gym' || screenClass === 'pokecenter-collection-box') {
        // console.log('disabling area buttons')
        disableButtons('#trainer-battle');
        disableButtons('#search-for-pokemon');
        disableButtons('#poke-center');
        disableButtons('#poke-mart');
        disableButtons('#gym');
        // console.log(`Welcome to ${currentArea}'s ${screenClass}`);
    } else {
        currentArea = screenClass;
        updateGymButton();
        enableButtons('#trainer-battle');
        enableButtons('#search-for-pokemon');
        enableButtons('#poke-mart');
        enableButtons('#poke-center');
    };

    if (screenClass === 'gameOver' || screenClass === 'gameCleared') {
        disableButtons('.switch-pokemon');
        disableButtons('.use-rare-candy');
    };

    if (screenClass === 'gym' || screenClass === 'battle') {
        disableButtons('.use-rare-candy');
        disableButtons('.switch-pokemon.party');
        enableButtons('.dynamic-button');
        enableButtons('.use-potion')
        enableButtons('.switch-pokemon.gym')
        enableButtons('.switch-pokemon.battle')
    }

    if (screenClass === 'gym') {
        // disableButtons('.leave');
    }


    // console.log("current area is: ", currentArea)
    // console.log('screen class is: ', screenClass)

    updateAreaButton();
    // console.log("Current Area: ", currentArea, "\nLast Area: ", lastArea, "\nNext Area: ", nextArea);
};

// functions to add disabled to buttons or remove
function disableButtons(selector) {
    document.querySelectorAll(selector).forEach(button => {
        button.disabled = true;
    });
}

function enableButtons(selector) {
    document.querySelectorAll(selector).forEach(button => {
        button.disabled = false;
    });
}

// need something to switch attack button text and function later
// function switchMainButton(mainButtonClass) {
//     document.querySelectorAll('.main-button').forEach(button => button.classList.remove('active'));
//     document.querySelector(`.${mainButtonClass}`).classList.add('active');
//     console.log(`Switching main button to ${screenClass}`)
// }

// function to choose random pokemon
function chooseRandomPokemon(pokedex) {

    let possiblePokemon = null;

    switch (currentArea) {
        case 'pewterCity':
            possiblePokemon = pokedex.filter(pokemon => pokemon.maxhp < 40);
            break;
        case 'ceruleanCity':
            possiblePokemon = pokedex.filter(pokemon => pokemon.maxhp < 50);
            break;
        case 'vermilionCity':
            possiblePokemon = pokedex.filter(pokemon => pokemon.maxhp < 60);
            break;
        case 'celadonCity':
            possiblePokemon = pokedex.filter(pokemon => pokemon.maxhp < 70);
            break;
        case 'fuchsiaCity':
            possiblePokemon = pokedex.filter(pokemon => pokemon.maxhp < 80);
            break;
        default:
            possiblePokemon = pokedex.filter(pokemon => pokemon.maxhp < 100);
            break;
    };

    const eligiblePokemon = possiblePokemon.filter(pokemon => pokemon.rarity > 0);
    const totalWeight = eligiblePokemon.reduce((sum, pokemon) => sum + pokemon.rarity, 0);
    const randomValue = Math.random() * totalWeight;
    let currentWeight = 0;

    for (const pokemon of eligiblePokemon) {
        currentWeight += pokemon.rarity;
        if (randomValue <= currentWeight) {
            // const partyPokemon = party.find(p => p.name === pokemon.name)
            // const collectionPokemon = collection.find(p => p.name === pokemon.name)
            // if (partyPokemon || collectionPokemon) {
            //     console.log("You found a ", pokemon)
            //     console.log('You already have this pokemon, you decide to release it');
            //     return;
            // } else {
            return pokemon;
        };
    };
};
// };

// function to show badge after gym is completed and also if elite four is beating game screen switches to game cleared
function getBadge(badge) {
    badges.push(badge);
    document.querySelector(`.${badge}`).classList.add('active');
    updateGymButton();
    console.log(`Received the ${badge}!`);
}

// function to keep updating nextArea based off of currentArea
function updateNextArea(currentArea) {
    const currentIndex = areas.findIndex(area => area.location === currentArea);
    console.log("updating next area")
    if (currentIndex < areas.length - 1) {
        nextArea = areas[currentIndex + 1].location;
    } else {
        nextArea = null;
    }
    console.log(nextArea)
}

//function to update last area traveled
function updateLastArea(currentArea) {
    const currentIndex = areas.findIndex(area => area.location === currentArea);
    console.log("updating last area")
    if (currentIndex > 0) {
        lastArea = areas[currentIndex - 1].location;
    } else {
        lastArea = null;
    }
    console.log(lastArea, "current index", currentIndex)
}

// function to switch rules page
function switchRules(rulesPage) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.querySelector(`.${rulesPage}`).classList.add('active');
    // console.log(`Switching screen to ${rulesPage}`)
    currentPage = rulesPage;
};

// function to update rules pages, for nextpage and lastpage to keep track
function updateRulesPage() {
    console.log('updating rules page based off input:', currentPage);
    switch (currentPage) {
        case "page1":
            nextPage = "page2";
            break;
        case "page2":
            lastPage = "page1";
            nextPage = "page3";
            break;
        case "page3":
            lastPage = "page2";
            nextPage = "page4";
            break;
        case "page4":
            lastPage = "page3";
            nextPage = "page5";
            break;
        case "page5":
            lastPage = "page4";
            nextPage = "page6";
            break;
        case "page6":
            lastPage = "page5";
            nextPage = "page7";
            break;
        case "page7":
            lastPage = "page6";
            nextPage = "page8";
            break;
        default:
            lastPage = "page7";
            break;
    };
    console.log(`last page is ${lastPage}, current: ${currentPage}, next: ${nextPage}`)
};

// function to update item display for item totals
function updateItemDisplay() {
    const itemIdMap = {
        potion: 'potionTotal',
        pokeball: 'pokeBallTotal',
        rarecandy: 'rareCandyTotal',
        gold: 'goldTotal'
    };
    items.forEach(item => {
        const element = document.getElementById(itemIdMap[item.name]);
        if (element) {
            element.textContent = item.quantity;
        };
    });
};

// function to update DOM display of pokemon party
function updatePartyDisplay() {
    const slotIds = [
        { name: 'slot-1', hp: 'slot1Hp', xp: 'slot1Xp' },
        { name: 'slot-2', hp: 'slot2Hp', xp: 'slot2Xp' },
        { name: 'slot-3', hp: 'slot3Hp', xp: 'slot3Xp' },
        { name: 'slot-4', hp: 'slot4Hp', xp: 'slot4Xp' },
        { name: 'slot-5', hp: 'slot5Hp', xp: 'slot5Xp' },
        { name: 'slot-6', hp: 'slot6Hp', xp: 'slot6Xp' }
    ];

    slotIds.forEach((slot, index) => {
        const pokemon = party[index];
        const nameElement = document.querySelector(`.${slot.name} .name`);
        const hpElement = document.querySelector(`.${slot.hp}`);
        const xpElement = document.querySelector(`.${slot.xp}`);

        if (pokemon) {
            nameElement.textContent = pokemon.name;
            hpElement.textContent = pokemon.hp;
            xpElement.textContent = pokemon.xp !== undefined ? pokemon.xp : 0;

        } else {
            nameElement.textContent = `Empty`;
            hpElement.textContent = '-';
            xpElement.textContent = '-';
        }
    });
};

// function to set current pokemon, this will be used for battles and highlighting under party status to show whos current
// function updateCurrentPokemon() {
//     console.log('trying to set current pokemon as ', currentPokemon.name)
// };

// function to run when buying items to add item and remove gold
function buyItem(itemName) {
    let itemIs = itemName
    switch (itemIs) {
        case "Buy Poké Ball":
            itemIs = "pokeball"
            break;
        case "Buy Potion":
            itemIs = "potion"
            break;
    }
    const gold = items.find(item => item.name === 'gold');
    const item = items.find(item => item.name === itemIs);
    const cost = item.cost;
    // console.log(cost, itemName, itemIs, item)
    if (gold && gold.quantity >= cost) {
        gold.quantity -= cost;
        item.quantity += 1;
        updateItemDisplay();
        // console.log('bought:', itemIs, item)
    } else {
        console.log("not enough gold");
    }
}

// function to update areas if condition is met allowing you to go to next area and marking current as complete
function updateAreaButton() {
    const area = areas.find(a => a.location === currentArea);
    if (!area) return;
    const selector = `.next-area.${currentArea}`;
    if (area.condition()) {
        enableButtons(selector);
        area.completed = true;
    } else {
        disableButtons(selector);
    }
}

// function to disable gym button if gym is completed and have badge
function updateGymButton() {
    const gym = areas.find(area => area.location === currentArea);
    if (gym.completed) {
        console.log("disabling gym", gym)
        disableButtons('#gym');
    } else {
        console.log("enabling gym", gym)
        enableButtons('#gym');
    };
};


// function for switching current pokemon that will be in battle or potions and rare candies used on
function switchPokemon() {

    const healthCheck = party.every(pokemon => pokemon.hp <= 0);

    if (!healthCheck) {
        if (party.length < 2) {
            console.log('you only have 1 pokemon');
            return;
        }
        let currentIndex = party.indexOf(currentPokemon);

        if (currentIndex === -1) {
            currentIndex = 0;
            currentPokemon = party[0];
            activeSlot = 'slot-1'
        } else {
            currentIndex = (currentIndex + 1) % party.length;
            currentPokemon = party[currentIndex];
            activeSlot = `slot-${currentIndex + 1}`;
        }
        document.querySelectorAll('.partyMember').forEach(slot => slot.classList.remove('active'));
        document.querySelector(`.partyMember.${activeSlot}`).classList.add('active');
        updatePartyDisplay();
        console.log('ran switchpokemon function', currentPokemon.name, "in slot: ", activeSlot);

        // currentPokemon then will be used for combat/potion/rarecandy/xpgain
    } else {
        switchScreen('gameOver');
    };
};


// issue with indexOf() is that if theres multiple of the same object it only looks for the first.
// need a better way to switch pokemon
function switchPokemonOpp() {

    const healthCheck = oppParty.every(pokemon => pokemon.hp <= 0);

    if (!healthCheck) {
        let currentIndex = oppParty.indexOf(oppCurrentPokemon);
        currentIndex = (currentIndex + 1) % oppParty.length;
        oppCurrentPokemon = oppParty[currentIndex];
    } else {
        if (encounter === 'gym') {
            const dynamicButtonGymTextElement = document.querySelector('dynamic-button.gym');
            dynamicButtonGymTextElement = 'Accept Badge';
        }
        // getRewards();  
    }
    //update battle display function?
};

// function to evolve, will look for 10-50xp values if they hit them it does different things
function evolution(pokemonToEvolve, evolvesInto) {
    let removePokemon = party.indexOf(pokemonToEvolve);
    party.splice(removePokemon, 1, evolvesInto);
    currentPokemon = evolvesInto;
    console.log('current pokemon is now: ', currentPokemon, "pokemon to evolve was/is: ", pokemonToEvolve, "\npokemon evolves into is: ", evolvesInto)
    console.log('pokemon to remove is: ', removePokemon);
    updatePartyDisplay();
};

// fuction that runs when currentPokemon gains xp
function updateXP() {
    if (currentPokemon.name === "Eevee") {
        if (currentPokemon.xp === currentPokemon.maxxp) {
            console.log("trying to evolve eevee...")
            let randomEvolve = Math.ceil(Math.random() * 3);
            console.log(randomEvolve);
            let eeveeEvolvesInto;
            switch (randomEvolve) {
                case 1:
                    eeveeEvolvesInto = pokedex.find((pokemon) => pokemon.name === "Vaporeon");
                    break;
                case 2:
                    eeveeEvolvesInto = pokedex.find((pokemon) => pokemon.name === "Jolteon");
                    break;
                case 3:
                    eeveeEvolvesInto = pokedex.find((pokemon) => pokemon.name === "Flareon");
                    break;
            }
            console.log("eevee evolves into ", eeveeEvolvesInto)
            evolution(currentPokemon, eeveeEvolvesInto);
        } else {
            console.log('Eevee is not ready to evolve');
        }
    } else {
        let evolvedForm = pokedex.find((evolve) => evolve.evolvesFrom === currentPokemon.name);
        console.log(`${currentPokemon.name} evolves into ${evolvedForm}`);
        if (currentPokemon.xp === currentPokemon.maxxp && evolvedForm) {
            evolution(currentPokemon, evolvedForm);
        }
        else if (currentPokemon.xp === currentPokemon.maxxp && !evolvedForm) {
            currentPokemon.xp = currentPokemon.maxxp
            currentPokemon.maxhp += 30;
            console.log("pokemon has reached maxxp, added 30 max hp, total is now: ", currentPokemon.hp);
        } else {
            console.log('pokemon not ready to evolve');
        }
    }
    updatePartyDisplay();
};

// sets up initial battle state (screen and images) should only run once
function battleSetup(eventText) {

    let battleType = eventText.trim();
    let leaveButtonTextElement = document.querySelector('.leave.battle');
    let dynamicButtonGymTextElement = document.querySelector('.dynamic-button.gym');
    let dynamicButtonBattleTextElement = document.querySelector('.dynamic-button.battle');

    if (battleType === 'Trainer Battle') {

        leaveButtonTextElement.textContent = "Leave";
        encounter = 'trainerBattle'

        const playerTextElement = document.querySelector('.playerText.battle');
        const playerImageElement = document.querySelector(".playerImage-battle");
        playerTextElement.textContent = `You sent out ${currentPokemon.name}!`;
        playerImageElement.src = currentPokemon.image
        let possibleOppParty = null;

        switch (currentArea) {
            case 'pewterCity':
                possibleOppParty = pokedex.filter(pokemon => pokemon.hp < 40);
                break;
            case 'ceruleanCity':
                possibleOppParty = pokedex.filter(pokemon => pokemon.hp < 50);
                break;
            case 'vermilionCity':
                possibleOppParty = pokedex.filter(pokemon => pokemon.hp < 60);
                break;
            case 'celadonCity':
                possibleOppParty = pokedex.filter(pokemon => pokemon.hp < 70);
                break;
            case 'fuchsiaCity':
                possibleOppParty = pokedex.filter(pokemon => pokemon.hp < 80);
                break;
            default:
                possibleOppParty = pokedex.filter(pokemon => pokemon.hp < 100);
                break;
        };

        if (possibleOppParty.length < 4) {
            console.log('opponent party is less than 4', possibleOppParty)
            possibleOppParty.foreach(pokemon => oppParty.push(pokemon))
            console.log('pokemon added to opponents party: ', pokemon.name)
        } else {
            // amount of times to loop
            const possiblePartyAmount = Math.ceil(Math.random() * 5)

            for (let loopCount = 0; loopCount < possiblePartyAmount; loopCount++) {
                const randomIndex = Math.floor(Math.random() * possibleOppParty.length)
                oppParty.push(possibleOppParty[randomIndex]);
                console.log('adding to opponent party: ', possibleOppParty[randomIndex].name)
            }

            oppCurrentPokemon = oppParty[0];

            const opponentTextElement = document.querySelector('.opponentText.battle');
            opponentTextElement.textContent = `A Trainer has challenged you!\nTrainer has sent out ${oppCurrentPokemon.name}!`;

            const opponentImageElement = document.querySelector('.opponentImage-battle');
            opponentImageElement.src = oppCurrentPokemon.image
        }
        switchScreen('battle');
        console.log("opponents party: ", oppParty);
    }

    else if (battleType === 'Search For Wild Pokemon') {

        leaveButton.textContent = "Run Away";
        dynamicButtonBattleTextElement.textContent = "Attack";
        encounter = 'wildPokemon';

        const playerTextElement = document.querySelector('.playerText.battle');
        const playerImageElement = document.querySelector(".playerImage-battle");
        playerTextElement.textContent = `You sent out ${currentPokemon.name}!`;
        playerImageElement.src = currentPokemon.image

        const randomPokemon = chooseRandomPokemon(pokedex);

        if (randomPokemon) {

            switchScreen('battle');

            const opponentTextElement = document.querySelector('.opponentText.battle');
            opponentTextElement.textContent = `A wild ${randomPokemon.name} appeared!`;

            const opponentImageElement = document.querySelector('.opponentImage-battle');
            opponentImageElement.src = randomPokemon.image

            wildPokemonFound = randomPokemon;
            return wildPokemonFound;

            // resolveBattle(randomPokemon, 'wildPokemon');

        };
    }
    else if (battleType === 'Gym') {
        console.log('setting up gym leader battle')

        dynamicButtonGymTextElement.textContent = "Challenge";
        // leaveButtonTextElement.textContent = "Leave";
        encounter = 'gym'

        // const playerTextElement = document.querySelector('.playerText.gym');
        // const playerImageElement = document.querySelector(".playerImage-gym");
        // playerTextElement.textContent = `You sent out ${currentPokemon.name}!`;
        // playerImageElement.src = currentPokemon.image

        switchScreen('gym');
        // updateGymButton();

        const foundArea = areas.find((area) => area.location === currentArea)
        const foundGymLeader = leaders.find((leader) => leader.location === foundArea.location)

        oppName = foundGymLeader.name
        oppParty = structuredClone(foundGymLeader.leaderParty);

        oppCurrentPokemon = oppParty[0];


        const leaderImageElement = document.querySelector('.opponentImage-leader');
        leaderImageElement.src = foundGymLeader.leaderimage

        // const opponentImageElement = document.querySelector('.opponentImage-gym');
        // opponentImageElement.src = oppCurrentPokemon.image;

        const opponentTextElement = document.querySelector('.opponentImage.gym');
        opponentTextElement.textContent = (`You dare challenge me? I am ${oppName}!`)

        disableButtons('.use-potion');
        disableButtons('.switch-pokemon');

        console.log('area found: ', foundArea);
        console.log('gym leader found: ', foundGymLeader);
        console.log("gym leaders party is: ", oppParty);

        // resolveBattle(foundGymLeader, 'gymLeader');
        // foundArea.completed = true;
        // getBadge(foundArea.badge);

        // console.log(areas);
        // console.log(badges);
    }

    else if (battleType === 'Lorelei' || battleType === 'Bruno' ||
        battleType === 'Agatha' || battleType === 'Lance') {
        encounter = 'elite'
        oppName = battleType;

        const playerTextElement = document.querySelector('.playerText.gym');
        const playerImageElement = document.querySelector(".playerImage-gym");
        playerTextElement.textContent = `You sent out ${currentPokemon.name}!`;
        playerImageElement.src = currentPokemon.image

        let eliteImage = '';

        switchScreen('gym');
        // updateGymButton();
        
        switch (battleType) {
            case "Lorelei":
                eliteImage = loreleiImage;
                oppParty = structuredClone(loreleiParty);
                break;
            case "Bruno":
                eliteImage = brunoImage;
                oppParty = structuredClone(brunoParty);
                break;
            case "Agatha":
                eliteImage = agathaImage;
                oppParty = structuredClone(agathaParty);
                break;
            case "Lance":
                eliteImage = lanceImage;
                oppParty = structuredClone(lanceParty);
                break;
        }
        console.log("elite four party is:", oppParty);

        oppCurrentPokemon = oppParty[0];

        console.log('current elite four pokemon is: ', oppCurrentPokemon);

        // const opponentTextElement = document.querySelector('.opponentText.gym p');
        // opponentTextElement.textContent = `You dare challenge me? I am ${foundGymLeader.name}!`;

        const eliteImageElement = document.querySelector('.opponentImage-leader');
        eliteImageElement.src = eliteImage

        const eliteOpponentImageElement = document.querySelector('.opponentImage-gym');
        eliteOpponentImageElement.src = oppCurrentPokemon.image;

        const eliteOpponentTextElement = document.querySelector('.opponentImage.gym p');
        eliteOpponentTextElement.textContent = (`${oppName} sent out ${oppCurrentPokemon.name}!`);

        // updateAreaButton();
        // updatePartyDisplay();
        // updateItemDisplay();
    };
}

// function for when action is clicked or resolveBattle is called for to compare hp values and switch pokemon out
function resolveBattle(encounterData, encounterType) {

    let dynamicButtonBattleTextElement = document.querySelector('.dynamic-button.battle');
    let dynamicButtonGymTextElement = document.querySelector('.dynamic-button.gym');
    let leaveButtonTextElement = document.querySelector('.leave');

    if (encounterType === "wildPokemon") {
        console.log('trying to resolve wild pokemon battle')
        let wildPokemon = encounterData;
        // check for maxhp because 1 after the other is not correct math ie..
        // currentPokemon.hp -= wildPokemon.hp
        // wildPokemon.hp -= currentPokemon.hp
        currentPokemon.hp -= 0
        wildPokemon.hp -= 200
        console.log('current pokemon hp: ', currentPokemon.hp)
        console.log('wild pokemon hp: ', wildPokemon.hp)

        if (currentPokemon.hp <= 0) {
            switchPokemon();
        }
        if (wildPokemon.hp <= 0) {
            wildPokemon.hp = 0;
            encounter = '';
            currentPokemon.xp += 1;
            dynamicButtonBattleTextElement.textContent = "Throw Pokéball";
            leaveButtonTextElement.textContent = "Leave";
            disableButtons('.use-potion');
            disableButtons('.switch-pokemon.battle');
        }
        updatePartyDisplay();
    }

    // need to figure out the check for party.length to see if there are any pokemon with HP (remove from party or look for hp > 0?)
    // also figure out a way to display opponent party?  and make it so hp cant show negative in display
    else if (encounterType === 'trainerBattle') {
        // console.log('trying to resolve trainer battle')
        // console.log('trainers current pokemon is: ', oppCurrentPokemon)
        // console.log('trainers party is: ', oppParty)
        const healthCheck = oppParty.every(pokemon => pokemon.hp > 0);
        let oppPartyArray = encounterData;
        if (!healthCheck) {
            oppPartyArray = [];
            encounter = '';
            console.log('opponent has no more pokemon left')
            getRewards('trainer');
        } else {
            if (currentPokemon.hp > 0) {
                currentPokemon.hp -= 0;
                if (currentPokemon.hp <= 0) {
                    currentPokemon.hp = 0;
                    currentPokemon.xp += 1;
                    updateXP();
                    switchPokemon();

                    const playerTextElement = document.querySelector('.playerText.battle');
                    const playerImageElement = document.querySelector(".playerImage-battle");

                    playerTextElement.textContent = `You sent out ${currentPokemon.name}!`;
                    playerImageElement.src = currentPokemon.image


                } else {
                    console.log('current pokemon can still fight')
                }
            }
            if (oppCurrentPokemon.hp > 0) {
                oppCurrentPokemon.hp -= 50;
                if (oppCurrentPokemon.hp <= 0) {
                    oppCurrentPokemon.hp = 0;
                    currentPokemon.xp += 1;
                    switchPokemonOpp();

                    const opponentTextElement = document.querySelector('.opponentText.battle');
                    opponentTextElement.textContent = `Trainer has sent out ${oppCurrentPokemon.name}!`;

                    const opponentImageElement = document.querySelector('.opponentImage-battle');
                    opponentImageElement.src = oppCurrentPokemon.image
                }
            };
        };
    }

    else if (encounterType === "gymLeader") {
        console.log('trying to resolve gym leader battle')
        let gymLeaderParty = encounterData;
        if (gymLeaderParty.length < 1) {
            console.log(`congratulations you defeated "placeholder for name"`)
        }
    };
};


// should rewards show in the display and leave button needs to be pressed?
function getRewards(rewardType) {
    console.log('trying to get rewards')
    const gold = items.find(item => item.name === 'gold');
    const rareCandy = items.find(item => item.name === "rarecandy");
    gold.quantity += Math.ceil(Math.random());
    rareCandy.quantity += Math.floor(Math.random() * 2);
    switch (rewardType) {
        case 'trainer':
            gold.quantity += Math.ceil(Math.random() * 7);
            break;
        case 'gym':
            gold.quantity += Math.ceil(Math.random() * 20);
            break;
        case 'wildpokemon':
            gold.quantity += Math.ceil(Math.random());
            rareCandy.quantity += Math.floor(Math.random() * 2);
            break;
    };
};

// how can i have it disable action button until conditions are right?  same for switch pokemon and leave/runaway
function throwPokeball(randomPokemon) {

    // throwPokeball(wildPokemon);
    // getRewards('wildpokemon');
    // console.log('trying to catch', wildPokemon)
    // updatePartyDisplay();
    let leaveButtonTextElement = document.querySelector('.leave');
    leaveButtonTextElement.textContent = 'Leave';

    console.log(party)
    const pokeBall = items.find(item => item.name === 'pokeball');
    const partyPokemon = party.find(p => p.name === randomPokemon.name)
    const collectionPokemon = collection.find(p => p.name === randomPokemon.name)
    if (partyPokemon || collectionPokemon) {
        console.log('You already have this pokemon, you decide to leave it alone');
        disableButtons('.dynamic-button');
        const opponentTextElement = document.querySelector('.opponentText.battle');
        opponentTextElement.textContent = `You already have a ${randomPokemon.name}, you leave it alone.`;
        // disableButtons('action');
        return;

    } else {
        if (pokeBall.quantity < 1) {
            console.log("ran out of pokeballs");
            // disableButtons('action');

        } else {
            party.push(randomPokemon);
            console.log(`You caught ${randomPokemon.name}!`);
            console.log(party);
            pokeBall.quantity -= 1;

            const opponentTextElement = document.querySelector('.opponentText.battle');
            opponentTextElement.textContent = `You threw a Pokéball at ${randomPokemon.name}, and caught it!`;

            if (party.length > 6) {
                collection.push(party.pop());
                console.log(`${collection[collection.length - 1].name} has been sent to collection.`);
                // console.log(collection);
            };
        };
    }
    disableButtons('.dynamic-button');
    updatePartyDisplay();
    updateItemDisplay();
};

function heal() {
    party.forEach(pokemon => pokemon.hp = pokemon.maxhp);
    updatePartyDisplay();
};

/*-------------------Event Listeners-------------------*/

pokeMart.addEventListener('click', () => switchScreen('pokemart'));

pokeMartBuyButton.forEach((button) => {
    button.addEventListener('click', () => {
        // console.log('clicked buy button', button.textContent);
        buyItem(button.textContent);
    });
});

gym.addEventListener('click', (event) => battleSetup(event.target.textContent));

playAgainButton.forEach((button) => {
    button.addEventListener('click', resetGame);
});

trainerBattle.addEventListener('click', (event) => battleSetup(event.target.textContent));

pokeCenter.addEventListener('click', () => switchScreen('pokecenter'));

// runAwayButton.addEventListener('click', () => switchScreen(currentArea));

pageNextButton.forEach((button) => {
    button.addEventListener('click', () => {
        console.log("clicked page next")
        updateRulesPage();
        switchRules(nextPage);
    });
});

pagePreviousButton.forEach((button) => {
    button.addEventListener('click', () => {
        console.log("clicked page previous")
        updateRulesPage();
        switchRules(lastPage);
    });
});

starterButton.forEach((starter) => {
    starter.addEventListener('click', (event) => {
        let pokemonName;

        if (event.target.tagName.toLowerCase() === 'p') {
            pokemonName = event.target.textContent.trim();
        }
        else if (event.target.tagName.toLowerCase() === 'img') {
            pokemonName = event.target.alt.trim();
        } else {
            return;
        }

        const selectedPokemon = pokedex.find(p => p.name.toLowerCase() === pokemonName.toLowerCase());

        // console.log("you chose: ", pokemonName, "\ninfo: ", selectedPokemon)

        if (selectedPokemon) {
            const newPokemon = { ...selectedPokemon }
            party.push(newPokemon);
            currentPokemon = party[0];

            console.log("current pokemon is: ", currentPokemon);
        }

        switchScreen('palletTown');
        items.forEach(item => {
            switch (item.name) {
                case "potion":
                    item.quantity = 2;
                    break;
                case "pokeball":
                    item.quantity = 5;
                    break;
                case "rarecandy":
                    item.quantity = 0;
                    break;
                case "gold":
                    item.quantity = 10;
                    break;
            }
        });
        activeSlot - 'slot-1';
        document.querySelector(`.partyMember.slot-1`).classList.add('active');
        updatePartyDisplay();
        updateItemDisplay();
        enableButtons('.switch-pokemon');
        enableButtons('.use-rare-candy');
    });
});


lastAreaButton.forEach((button) => {
    button.addEventListener('click', () => {
        updateLastArea(currentArea);
        if (lastArea !== null) {
            switchScreen(lastArea);
        };
    });
});

nextAreaButton.forEach((button) => {
    button.addEventListener('click', () => {
        updateNextArea(currentArea);
        switchScreen(nextArea);
    });
});

leaveButton.forEach((leave) => {
    leave.addEventListener('click', (event) => {
        if (event.target.textContent === 'Leave Collection') {
            switchScreen('pokecenter');
        } else {
            switchScreen(currentArea);
            oppCurrentPokemon = [];
            wildPokemonFound = [];
            oppParty = [];
            oppName = '';
        }
    });
});

// text content changes based on conditions (should allow for multiple actions on 1 button)
dynamicButton.forEach((button) => {
    button.addEventListener('click', () => {
        console.log('click action');
        // console.log(button)
        // console.log(button.textContent)
        if (button.textContent === 'Attack') {
            switch (encounter) {
                case "wildPokemon":
                    resolveBattle(wildPokemonFound, encounter);
                    break;
                case "trainerBattle":
                    resolveBattle(oppParty, encounter);
                    break;
                case "gym":
                    resolveBattle(oppParty, encounter);
                    break;
            }
        }
        else if (button.textContent === 'Throw Pokéball') {

            console.log('throwing pokeball');
            throwPokeball(wildPokemonFound);
        }
        else if (button.textContent === 'Challenge') {

            console.log(oppName, oppCurrentPokemon.name)
            const playerTextElement = document.querySelector('.playerText.gym');
            const playerImageElement = document.querySelector(".playerImage-gym");
            playerTextElement.textContent = `You sent out ${currentPokemon.name}!`;
            playerImageElement.src = currentPokemon.image
            const opponentImageElement = document.querySelector('.opponentImage.gym');
            opponentImageElement.src = oppCurrentPokemon.image;

            const opponentTextElement = document.querySelector('.opponentImage.gym p');
            // opponentTextElement.textContent = `${oppName} sent out ${oppCurrentPokemon.name}!`;
            const dynamicButtonGymTextElement = document.querySelector('.dynamic-button.gym');
            dynamicButtonGymTextElement.textContent = "Attack";
            enableButtons('.switch-pokemon');
            enableButtons('.use-potion');

        }
        else if (button.textContent === "Accept Badge") {
            const foundArea = areas.find((area) => area.location === currentArea)
            foundArea.completed = true;
            getBadge(foundArea.badge);
        }
    });
});

searchForPokemon.addEventListener('click', (event) => battleSetup(event.target.textContent));

switchPokemonButton.forEach((button) => {
    button.addEventListener('click', () => {
        switchPokemon();
        updatePartyDisplay();
        console.log("current pokemon is now: ", currentPokemon.name)
    });
});

useRareCandy.addEventListener('click', () => {
    const rareCandy = items.find(item => item.name === "rarecandy");
    if (rareCandy.quantity > 0) {
        currentPokemon.xp += 1;
        rareCandy.quantity -= 1;
    } else {
        console.log('out of rare candy');
    }
    updateXP(currentPokemon);
    updatePartyDisplay();
    updateItemDisplay();
});

healButton.addEventListener('click', () => heal());

checkCollection.addEventListener('click', () => switchScreen('pokecenter-collection-box'));

gameClearButton.addEventListener('click', () => {
    console.log('clicked game cleared button');
    switchScreen('gameCleared')
});

eliteFourButton.forEach((button) => {
    button.addEventListener('click', (event) => {
        battleSetup(button.textContent);
        console.log('clicked elite four button', button, button.textContent, event.target.textContent);
    });
});

usePotion.forEach((button) => {
    button.addEventListener('click', () => {
        let potion = items.find(item => item.name === 'potion');
        if (currentPokemon.hp >= currentPokemon.maxhp) {
            console.log('pokemon already at full hp');
        } else {
            currentPokemon.hp += 20;
            potion -= 1;
            if (currentPokemon.hp > currentPokemon.maxhp) {
                currentPokemon.hp = currentPokemon.maxhp;
            };
            updatePartyDisplay();
            updateItemDisplay();
        };
    });
});


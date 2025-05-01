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
const characterButton = document.querySelectorAll('.character-image');

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
    { location: "indigoPlateau", completed: false, type: ["dragon", "special"] },
];

// how to account for stats of, and disable button for fight after completing?
// how will game-clear button become active?
const eliteFourStatus = [
    { name: 'Lorelei', completed: false },
    { name: 'Bruno', completed: false },
    { name: 'Agatha', completed: false },
    { name: 'Lance', completed: false }
]

const items = [
    { name: "potion", quantity: 2, cost: 2, msgName: "Potion" },
    { name: "pokeball", quantity: 5, cost: 1, msgName: "Poké Ball" },
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

let characterModel = {};

let currentPokemon = {};
let oppCurrentPokemon = {};
let wildPokemonFound = {};
let oppParty = [];

let messageBox = document.querySelector('.message-box');

let leaderTextElement = document.querySelector('.leader-text');
let leaderPokemonTextElement = document.querySelector('.leader-pokemon-text');
let leaderPokemonImageElement = document.querySelector('#leader-pokemon');
let leaderImageElement = document.querySelector('#leader-image');

let opponentTextElement = document.querySelector('.opponent-text');
let opponentPokemonTextElement = document.querySelector('.opponent-pokemon-text');
let opponentPokemonImageElement = document.querySelector('#opponent-pokemon');
let opponentImageElement = document.querySelector('#opponent-image');

let playerTextElement = document.querySelector('.player-text');
let playerPokemonImageElement = document.querySelector('.player-pokemon');
let playerImageElement = document.querySelector('.player-image');
let playerPokemonTextElement = document.querySelector('.player-pokemon-text');

let dynamicButtonTextElement = document.querySelector('.dynamic-button');
let leaveButtonTextElement = document.querySelector('.leave');

let partyCurrentIndex = null;
let oppPartyCurrentIndex = null;

/*-------------------Functions-------------------*/

// function to reset game state on Play Again or Try Again
function resetGame() {
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
    currentPokemon = {};
    characterModel = {};
    clearOpponentData();

    document.querySelectorAll('.partyMember').forEach(slot => slot.classList.remove('active'));
    document.querySelectorAll('.icon').forEach(icon => icon.classList.remove('active'));

    leaderTextClassRemove();
    clearOpponentData();
    switchScreen('start');
    updatePartyDisplay();
    updateItemDisplay();
    updateAreaButton();
}


// function to switch main area screen
function switchScreen(screenClass) {
    document.querySelectorAll('.main-screen').forEach(screen => screen.classList.remove('active'));
    document.querySelector(`.${screenClass}`).classList.add('active');
    if (screenClass === 'start') {
    } else {
        if (screenClass === 'palletTown' || screenClass === 'indigoPlateau') {
            currentArea = screenClass;
            enableButtons('#search-for-pokemon');
            enableButtons('#poke-mart');
            enableButtons('#poke-center');
            disableButtons('#trainer-battle');
            disableButtons('#gym');
        }
        else if (screenClass === "pokemart" || screenClass === "pokecenter" || screenClass === "battle" ||
            screenClass === "gameCleared" || screenClass === "gameOver" || screenClass === 'start' ||
            screenClass === 'gym' || screenClass === 'pokecenter-collection-box') {
            disableButtons('#trainer-battle');
            disableButtons('#search-for-pokemon');
            disableButtons('#poke-center');
            disableButtons('#poke-mart');
            disableButtons('#gym');
        } else {
            currentArea = screenClass;
            enableButtons('#trainer-battle');
            enableButtons('#search-for-pokemon');
            enableButtons('#poke-mart');
            enableButtons('#poke-center');
            updateGymButton();
            clearOpponentData();
            updateAreaButton();
        };

        if (screenClass === 'palletTown') {
            updateAreaButton(); ``
        }

        if (screenClass === 'gameOver' || screenClass === 'gameCleared') {
            disableButtons('.switch-pokemon');
            disableButtons('.use-rare-candy');
        };

        if (screenClass === 'gym' || screenClass === 'battle') {
            disableButtons('.use-rare-candy');
            enableButtons('.dynamic-button');
            enableButtons('.use-potion')
            disableButtons('.switch-pokemon.party');
        }

        // if (screenClass === 'gym') {
        //     // disableButtons('.leave');
        // }
        // updateGymButton();

    };
};

// functions to add disabled to buttons or remove
function disableButtons(selector) {
    document.querySelectorAll(selector).forEach(button => {
        button.disabled = true;
    });
};

function enableButtons(selector) {
    document.querySelectorAll(selector).forEach(button => {
        button.disabled = false;
    });
};

function leaderTextClassAdd() {
    leaderTextElement.classList.remove("intro");
    leaderTextElement.classList.add("absolute-text");
};

function leaderTextClassRemove() {
    leaderTextElement.classList.remove("absolute-text");
    leaderTextElement.classList.add("intro");
};

// puts pokemon in pokeball and makes image smaller
function addPokeballPokemon() {
    opponentPokemonImageElement.src = 'images/pokeball.png';
    opponentPokemonImageElement.alt = 'pokeball';
    opponentPokemonImageElement.classList.add('pokeball');
};

function removePokeballPokemon() {
    opponentPokemonImageElement.src = '';
    opponentPokemonImageElement.alt = '';
    opponentPokemonImageElement.classList.remove('pokeball');
};

// function to clear images and text from html
function clearOpponentData() {
    leaderTextElement.textContent = '';
    leaderPokemonTextElement.textContent = '';
    leaderPokemonImageElement.src = '';
    leaderImageElement.src = '';
    opponentTextElement.textContent = '';
    opponentPokemonTextElement.textContent = '';
    opponentPokemonImageElement.src = '';
    opponentImageElement.src = '';
    playerTextElement.textContent = '';
    playerPokemonImageElement.src = '';
    playerPokemonTextElement.textContent = '';
    playerImageElement.src = '';
    // dynamicButtonTextElement.textContent = 'Action';
    leaveButtonTextElement.textContent = 'Leave';
    oppCurrentPokemon = {};
    wildPokemonFound = {};
    oppParty = [];
    oppName = '';
    encounter = '';
};

// function to choose random pokemon
function chooseRandomPokemon() {

    let possiblePokemon = [];

    switch (currentArea) {
        case 'palletTown':
            possiblePokemon = pokedex.filter(pokemon => pokemon.maxhp < 40);
            break;
        case 'pewterCity':
            possiblePokemon = pokedex.filter(pokemon => pokemon.maxhp < 50);
            break;
        case 'ceruleanCity':
            possiblePokemon = pokedex.filter(pokemon => pokemon.maxhp < 60);
            break;
        case 'vermilionCity':
            possiblePokemon = pokedex.filter(pokemon => pokemon.maxhp < 70);
            break;
        case 'celadonCity':
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
            return pokemon;
        };
    };
};
// };

// function to show badge after gym is completed and also if elite four is beating game screen switches to game cleared
function getBadge(badge) {
    badges.push(badge);
    document.querySelector(`.${badge}`).classList.add('active');
    updateAreaButton();
    updateGymButton();
};

// function to keep updating nextArea based off of currentArea
function updateNextArea(currentArea) {
    const currentIndex = areas.findIndex(area => area.location === currentArea);
    if (currentIndex < areas.length - 1) {
        nextArea = areas[currentIndex + 1].location;
    } else {
        nextArea = null;
    }
}

//function to update last area traveled
function updateLastArea(currentArea) {
    const currentIndex = areas.findIndex(area => area.location === currentArea);
    if (currentIndex > 0) {
        lastArea = areas[currentIndex - 1].location;
    } else {
        lastArea = null;
    }
}

// function to switch rules page
function switchRules(rulesPage) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.querySelector(`.${rulesPage}`).classList.add('active');
    currentPage = rulesPage;
};

// function to update rules pages, for nextpage and lastpage to keep track
function updateRulesPage() {
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
    if (gold && gold.quantity >= cost) {
        gold.quantity -= cost;
        item.quantity += 1;
        updateItemDisplay();
        messageBox.classList.add('active');
        messageBox.textContent = `Purchased 1 ${item.msgName}`
    } else {
        messageBox.classList.add('active');
        messageBox.textContent = "Not Enough Gold!";
        console.log("not enough gold");
    }
}

// function to update areas if condition is met allowing you to go to next area and marking current as complete
function updateAreaButton() {
    const area = areas.find(area => area.location === currentArea);
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
    if (gym.completed || currentArea === 'palletTown' || currentArea === 'indigoPlateau') {
        disableButtons('#gym');
    } else {
        enableButtons('#gym');
    };
};


// function for switching player current pokemon
function switchPokemon() {

    const healthCheck = party.every(pokemon => pokemon.hp <= 0);

    // need to check if .hp of next index is > 0, if not loop to second
    if (!healthCheck) {
        partyCurrentIndex = (partyCurrentIndex + 1) % party.length;
        currentPokemon = party[partyCurrentIndex];
        activeSlot = `slot-${partyCurrentIndex + 1}`;
        document.querySelectorAll('.partyMember').forEach(slot => slot.classList.remove('active'));
        document.querySelector(`.partyMember.${activeSlot}`).classList.add('active');
        updatePartyDisplay();
        enableButtons('dynamic-button');
        console.log('ran switchpokemon function', currentPokemon.name, "in slot: ", activeSlot);
    } else {
        switchScreen('gameOver');
    };
};

function switchPokemonOpp() {

    const healthCheck = oppParty.every(pokemon => pokemon.hp <= 0);

    if (!healthCheck) {
        oppPartyCurrentIndex = (oppPartyCurrentIndex + 1) % oppParty.length;
        oppCurrentPokemon = oppParty[oppPartyCurrentIndex];
        console.log('health check opponent passed')
        console.log("encounter type is: ", encounter);
        if (encounter === 'gym' || encounter === 'elite') {
            console.log("encounter is gym or elite");

            leaderTextClassAdd();
            leaderTextElement.textContent = `${oppName} sent out ${oppCurrentPokemon.name}!`;
            leaderPokemonImageElement.src = oppCurrentPokemon.image
            leaderPokemonImageElement.alt = oppCurrentPokemon.name
            if (encounter === 'trainer') {
                console.log('encounter is trainer')
                opponentTextElement.textContent = `Trainer sent out ${oppCurrentPokemon.name}!`;
                opponentPokemonImageElement.src = oppCurrentPokemon.image
                opponentPokemonImageElement.alt = oppCurrentPokemon.name
            }
        }
    } else {
        if (encounter === 'gym' || encounter === 'elite') {
            console.log('health check failed for gym or elite')
            dynamicButtonTextElement.textContent = 'Accept Badge';

            // Maybe a direct line from gym leader?
            leaderTextClassRemove();
            leaderTextElement.textContent = `You defeated ${oppName}! Congratulations!`;
        }
        if (encounter === 'trainer') {
            console.log('health check failed for trainer, trying to set defeated message')
            opponentTextElement.textContent = 'Trainers party has been defeated.';
            opponentPokemonImageElement.src = '';
            disableButtons('.dynamic-button');
            disableButtons('.switch-pokemon');
            disableButtons('.use-potion');
            enableButtons('.leave');
            getRewards('trainer');

        }
        oppParty = [];
        encounter = '';
        oppPartyCurrentIndex = null;
        console.log('opponent has no more pokemon left')
    }
    updateBattleDisplay(encounter);
};

// function to evolve, will look for 10-50xp values if they hit them it does different things
function evolution(pokemonToEvolve, evolvesInto) {
    let removePokemon = party[partyCurrentIndex];
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
            let randomEvolve = Math.ceil(Math.random() * 3);
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
            evolution(currentPokemon, eeveeEvolvesInto);
        } else {
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
        }
    }
    updatePartyDisplay();
};

// sets up initial battle state (screen and images) should only run once
function battleSetup(eventText) {
    let battleType = eventText.trim();

    if (battleType === 'Trainer Battle') {

        encounter = 'trainer'
        switchScreen('battle');
        leaveButtonTextElement.textContent = "Leave";
        dynamicButtonTextElement.textContent = "Accept Challenge"

        // playerTextElement.textContent = `You sent out ${currentPokemon.name}!`;
        // playerPokemonImageElement.src = currentPokemon.image

        let possibleOppParty = [];
        let trainerImage = `images/trainer${Math.ceil(Math.random() * 14)}.png`;

        switch (currentArea) {
            case 'pewterCity':
                possibleOppParty = pokedex.filter(pokemon => pokemon.maxhp < 40);
                break;
            case 'ceruleanCity':
                possibleOppParty = pokedex.filter(pokemon => pokemon.maxhp < 50);
                break;
            case 'vermilionCity':
                possibleOppParty = pokedex.filter(pokemon => pokemon.maxhp < 60);
                break;
            case 'celadonCity':
                possibleOppParty = pokedex.filter(pokemon => pokemon.maxhp < 70);
                break;
            case 'fuchsiaCity':
                possibleOppParty = pokedex.filter(pokemon => pokemon.maxhp < 80);
                break;
            default:
                possibleOppParty = pokedex.filter(pokemon => pokemon.maxhp < 100);
                break;
        };

        // amount of times to loop
        const possiblePartyAmount = Math.ceil(Math.random() * 5)

        for (let loopCount = 0; loopCount < possiblePartyAmount; loopCount++) {
            const randomIndex = Math.floor(Math.random() * possibleOppParty.length)
            oppParty.push(structuredClone(possibleOppParty[randomIndex]));
            console.log('adding to opponent party: ', possibleOppParty[randomIndex])
        }
        oppCurrentPokemon = oppParty[0];
        oppPartyCurrentIndex = 0;

        opponentImageElement.src = trainerImage;
        opponentTextElement.textContent = `A Trainer has challenged you with a Party of ${oppParty.length} Pokemon!`;
        // opponentPokemonImageElement.src = oppCurrentPokemon.image
        playerImageElement.src = characterModel.image;

        // updateBattleDisplay('trainer');
        console.log("opponents party: ", oppParty);
    }
    else if (battleType === 'Search For Wild Pokemon') {

        leaveButtonTextElement.textContent = "Run Away";
        dynamicButtonTextElement.textContent = "Attack";
        encounter = 'wildpokemon';

        playerTextElement.textContent = `${characterModel.name} sent out ${currentPokemon.name}!`;
        playerPokemonImageElement.src = currentPokemon.image
        playerImageElement.src = characterModel.image;
        playerPokemonTextElement.innerHTML = `Name: ${currentPokemon.name}<br>HP: ${currentPokemon.hp}`

        const randomPokemon = chooseRandomPokemon();

        if (randomPokemon) {

            switchScreen('battle');

            wildPokemonFound = structuredClone(randomPokemon);
            opponentTextElement.textContent = `A wild ${wildPokemonFound.name} appeared!`;
            opponentPokemonImageElement.src = wildPokemonFound.image
            opponentPokemonTextElement.innerHTML = `Name: ${wildPokemonFound.name}<br>HP: ${wildPokemonFound.hp}`;

            return wildPokemonFound;
        };
    }
    else if (battleType === 'Gym') {

        encounter = 'gym'
        switchScreen('gym');

        console.log('dynamic button should change')
        dynamicButtonTextElement.textContent = "Challenge";
        console.log(dynamicButtonTextElement.textContent);
        const foundArea = areas.find((area) => area.location === currentArea)
        const foundGymLeader = leaders.find((leader) => leader.location === foundArea.location)

        oppName = foundGymLeader.name
        oppParty = foundGymLeader.leaderParty;

        // getBadge(foundArea.badge);

        oppCurrentPokemon = oppParty[0];

        leaderTextElement.textContent = (`You dare challenge me? I am ${oppName}!`)
        leaderImageElement.src = foundGymLeader.leaderimage

        // updateBattleDisplay('gym');
        disableButtons('.use-potion');
        disableButtons('.switch-pokemon');
    }
    else if (battleType === 'Lorelei' || battleType === 'Bruno' ||
        battleType === 'Agatha' || battleType === 'Lance') {
        encounter = 'elite'
        switchScreen('gym');
        oppName = battleType;
        dynamicButtonTextElement.textContent = "Challenge";

        let eliteImage = '';
        // console.log('elite four battle', oppName, encounter, battleType);

        // updateBattleDisplay('elite');

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

        leaderImageElement.src = eliteImage

        // leaderPokemonImageElement.src = oppCurrentPokemon.image;
        // leaderTextElement.textContent = (`${oppName} sent out ${oppCurrentPokemon.name}!`);
        // updateBattleDisplay('elite')

        // updateAreaButton();
        // updatePartyDisplay();
        // updateItemDisplay();
    };
}

function updateBattleDisplay(encounter) {
    if (encounter === "gym" || encounter === "elite") {
        leaderPokemonTextElement.innerHTML = `Name: ${oppCurrentPokemon.name}<br>HP: ${oppCurrentPokemon.hp}`;
    }
    else if (encounter === "trainer") {
        opponentPokemonTextElement.innerHTML = `Name: ${oppCurrentPokemon.name}<br>HP: ${oppCurrentPokemon.hp}`;
    }
    else if (encounter === "wildpokemon") {
        opponentPokemonTextElement.innerHTML = `Name: ${wildPokemonFound.name}<br>HP: ${wildPokemonFound.hp}`;
    }
    playerPokemonTextElement.innerHTML = `Name: ${currentPokemon.name}<br>HP: ${currentPokemon.hp}`;
};

// function for when action is clicked or resolveBattle is called for to compare hp values and switch pokemon out
function resolveBattle(encounterData, encounterType) {

    if (encounterType === "wildpokemon") {

        let wildPokemon = encounterData;

        // let wildPokemonAttack = Math.floor((Math.random() * wildPokemon.maxhp) / 2);
        // let currentPokemonAttack = Math.floor((Math.random() * currentPokemon.maxhp) / 2);

        // remove and uncomment battle system
        currentPokemon.hp -= 0
        wildPokemon.hp -= 200

        // switch (wildPokemonAttack > 0) {
        //     case true:
        //         opponentTextElement.textContent = `Wild ${wildPokemon.name} attacked for ${wildPokemonAttack} damage!`;
        //         break;
        //     case false:
        //         opponentTextElement.textContent = `Wild ${wildPokemon.name} missed ${currentPokemon.name}!`;
        //         break;
        // }
        // switch (currentPokemonAttack > 0) {
        //     case true:
        //         playerTextElement.textContent = `${currentPokemon.name} attacked for ${currentPokemonAttack} damage!`;
        //         break;
        //     case false:
        //         playerTextElement.textContent = `${currentPokemon.name} missed ${wildPokemon.name}!`;
        //         break;
        // }

        if (currentPokemon.hp <= 0) {
            playerTextElement.textContent = `${currentPokemon.name} fainted!`;
            switchPokemon();
        }
        if (wildPokemon.hp <= 0) {
            wildPokemon.hp = 0;
            encounter = '';
            currentPokemon.xp += 1;
            dynamicButtonTextElement.textContent = "Throw Pokéball";
            leaveButtonTextElement.textContent = "Leave";
            opponentTextElement.textContent = `Wild ${wildPokemon.name} fainted!`;
            updateBattleDisplay('wildpokemon');
            getRewards('wildpokemon');
            disableButtons('.use-potion');
            disableButtons('.switch-pokemon');
        }
        updatePartyDisplay();
        updateItemDisplay();
    }
    else if (encounterType === 'trainer' || encounterType === 'gym' || encounterType === 'elite') {
        console.log('trying to resolve trainer battle')

        //activate when ready for battle system implementation
        // let opponentPokemonAttack = Math.floor((Math.random() * oppCurrentPokemon.maxhp) / 2);
        // let currentPokemonAttack = Math.floor((Math.random() * currentPokemon.maxhp) / 2);

        // switch (opponentPokemonAttack > 0) {
        //     case true:
        //         opponentTextElement.textContent = `${oppCurrentPokemon.name} attacked for ${opponentPokemonAttack} damage!`;
        //         break;
        //     case false:
        //         opponentTextElement.textContent = `Wild ${oppCurrentPokemon.name} missed ${currentPokemon.name}!`;
        //         break;
        // }
        // switch (currentPokemonAttack > 0) {
        //     case true:
        //         playerTextElement.textContent = `${currentPokemon.name} attacked for ${currentPokemonAttack} damage!`;
        //         break;
        //     case false:
        //         playerTextElement.textContent = `${currentPokemon.name} missed ${oppCurrentPokemon.name}!`;
        //         break;
        // }

        if (currentPokemon.hp > 0) {
            // change to -= opponentPokemonAttack
            currentPokemon.hp -= 0;
            if (currentPokemon.hp <= 0) {
                currentPokemon.hp = 0;
                currentPokemon.xp += 1;
                updateXP();
                switchPokemon();

                playerTextElement.textContent = `You sent out ${currentPokemon.name}!`;
                playerPokemonImageElement.src = currentPokemon.image
            }
        } else {
            console.log('issue with current pokemon hp')
        }
        if (oppCurrentPokemon.hp > 0) {
            // change to -= currentPokemonAttack when ready
            oppCurrentPokemon.hp -= 200;
            if (oppCurrentPokemon.hp <= 0) {
                console.log('trainers pokemon fainted, switching to next');
                oppCurrentPokemon.hp = 0;
                currentPokemon.xp += 1;
                switchPokemonOpp();
                updateBattleDisplay(encounterType);
                if (encounterType === 'gym' || encounterType === 'elite') {
                    leaderTextElement.textContent = `${oppName} sent out ${oppCurrentPokemon.name}`;
                    leaderPokemonImageElement.src = oppCurrentPokemon.image
                } else {
                    opponentTextElement.textContent = `Trainer has sent out ${oppCurrentPokemon.name}!`;
                    opponentPokemonImageElement.src = oppCurrentPokemon.image
                };
            };
        } else {
            console.log('issue with opponent pokemon hp')
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
            opponentTextElement.textContent = "Trainers party has been defeated.";
            break;
        case 'gym':
            gold.quantity += Math.ceil(Math.random() * 20);
            break;
        case 'wildpokemon':
            gold.quantity += Math.ceil(Math.random());
            rareCandy.quantity += Math.floor(Math.random() * 2);
            break;
        case 'elite':
            gold.quantity += Math.ceil(Math.random() * 50);
            break;
    };
    updateItemDisplay();
};

function throwPokeball(randomPokemon) {
    leaveButtonTextElement.textContent = 'Leave';

    const pokeBall = items.find(item => item.name === 'pokeball');
    const partyPokemon = party.find(p => p.name === randomPokemon.name)
    const collectionPokemon = collection.find(p => p.name === randomPokemon.name)
    if (partyPokemon || collectionPokemon) {
        disableButtons('.dynamic-button');
        opponentTextElement.textContent = `You already have a ${randomPokemon.name}, you leave it alone.`;
        return;

    } else {
        if (pokeBall.quantity < 1) {
            opponentTextElement.textContent = 'You ran out of Pokéballs!'

        } else {
            addPokeballPokemon();
            party.push(randomPokemon);
            pokeBall.quantity -= 1;
            opponentTextElement.textContent = `You threw a Pokéball at ${randomPokemon.name}, and caught it!`;

            if (party.length > 6) {
                collection.push(party.pop());
                opponentTextElement.textContent = `You threw a Pokéball at ${randomPokemon.name}, and caught it!,  It has been sent to Collection`;
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
    if (party.length > 1 && party.every(p => p.hp > 0)) {
        enableButtons('.switch-pokemon.party');
    };
};

/*-------------------Event Listeners-------------------*/

pokeMart.addEventListener('click', () => switchScreen('pokemart'));

pokeMartBuyButton.forEach((button) => {
    button.addEventListener('click', () => {
        buyItem(button.textContent);
    });
});

gym.addEventListener('click', (event) => battleSetup(event.target.textContent));

playAgainButton.forEach((button) => {
    button.addEventListener('click', resetGame);
});

trainerBattle.addEventListener('click', (event) => battleSetup(event.target.textContent));

pokeCenter.addEventListener('click', () => switchScreen('pokecenter'));

pageNextButton.forEach((button) => {
    button.addEventListener('click', () => {
        updateRulesPage();
        switchRules(nextPage);
    });
});

pagePreviousButton.forEach((button) => {
    button.addEventListener('click', () => {
        updateRulesPage();
        switchRules(lastPage);
    });
});

characterButton.forEach((character) => {
    character.addEventListener('click', (event) => {
        let character;

        if (event.target.tagName.toLowerCase() === 'p') {
            character = event.target.textContent.trim();
        }
        else if (event.target.tagName.toLowerCase() === 'img') {
            character = event.target.alt.trim();
        } else {
            return;
        }
        characterModel = structuredClone(characters.find(char => char.name.toLowerCase() === character.toLowerCase()));
        switchScreen('start');
    })
})

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
        const selectedPokemon = structuredClone(pokedex.find(p => p.name.toLowerCase() === pokemonName.toLowerCase()));

        if (selectedPokemon) {
            party.push(selectedPokemon);
            currentPokemon = party[0];
            partyCurrentIndex = 0;
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
            removePokeballPokemon();
            clearOpponentData();
            switchScreen(currentArea);
            const rareCandy = items.find(item => item.name === 'rarecandy')
            if (rareCandy.quantity > 0) {
                enableButtons('.use-rare-candy');
            };
        };
    });
});

dynamicButton.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === 'Attack') {
            switch (encounter) {
                case "wildpokemon":
                    resolveBattle(wildPokemonFound, encounter);
                    break;
                case "trainer":
                    resolveBattle(oppParty, encounter);
                    break;
                case "gym":
                    resolveBattle(oppParty, encounter);
                    break;
            }
        }
        else if (button.textContent === 'Throw Pokéball') {
            throwPokeball(wildPokemonFound);
        }
        else if (button.textContent === 'Challenge' || button.textContent === 'Accept Challenge') {

            switch (button.textContent) {
                case "Challenge":
                    leaderPokemonImageElement.src = oppCurrentPokemon.image;
                    leaderTextElement.textContent = `${oppName} sent out ${oppCurrentPokemon.name}`;
                    break;
                case "Accept Challenge":
                    opponentPokemonImageElement.src = oppCurrentPokemon.image;
                    opponentTextElement.textContent = `Trainer sent out ${oppCurrentPokemon.name}`;
                    break;
            }

            playerTextElement.textContent = `${characterModel.name} sent out ${currentPokemon.name}!`;
            playerPokemonImageElement.src = currentPokemon.image
            // leaderTextClassAdd();
            dynamicButtonTextElement.textContent = "Attack";
            enableButtons('.use-potion');
            disableButtons('.leave');
            updateBattleDisplay(encounter);

            // need to check each p members health to see if atleast 1 has hp
            if (party.length > 1) {
                enableButtons('.switch-pokemon');
            }
        }
        else if (button.textContent === "Accept Badge") {
            const foundArea = areas.find((area) => area.location === currentArea)
            foundArea.completed = true;
            getBadge(foundArea.badge);
            enableButtons('.leave');
        }
        else if (button.textContent === "Accept Defeat") {
            const eliteFourName = eliteFourStatus.find(elite => elite.name === oppName)
            eliteFourName.completed = true;
            if (eliteFourStatus.every(elite => elite.completed)) {
                document.querySelector('#game-clear-button').classList.add('active');
            }
            enableButtons('.leave');
        };
    });
});

searchForPokemon.addEventListener('click', (event) => battleSetup(event.target.textContent));

switchPokemonButton.forEach((button) => {
    button.addEventListener('click', () => {
        switchPokemon();
        updatePartyDisplay();
    });
});

useRareCandy.addEventListener('click', () => {
    const rareCandy = items.find(item => item.name === "rarecandy");
    if (rareCandy.quantity > 0) {
        currentPokemon.xp += 1;
        rareCandy.quantity -= 1;
        if (rareCandy.quantity <= 0) {
            rareCandy.quantity = 0;
            disableButtons('.use-rare-candy');
        }
    }
    updateXP(currentPokemon);
    updatePartyDisplay();
    updateItemDisplay();
});

healButton.addEventListener('click', () => heal());

checkCollection.addEventListener('click', () => switchScreen('pokecenter-collection-box'));

gameClearButton.addEventListener('click', () => {
    switchScreen('gameCleared')
});

eliteFourButton.forEach((button) => {
    button.addEventListener('click', (event) => {
        battleSetup(button.textContent);
    });
});

usePotion.forEach((button) => {
    button.addEventListener('click', () => {
        let potion = items.find(item => item.name === 'potion');
        if (currentPokemon.hp >= currentPokemon.maxhp) {
        } else {
            currentPokemon.hp += 20;
            potion -= 1;
            if (currentPokemon.hp > currentPokemon.maxhp) {
                currentPokemon.hp = currentPokemon.maxhp;
            };
            updatePartyDisplay();
            updateItemDisplay();
        };
        if (party.length > 1 && party.every(p => p.hp > 0)) {
            enableButtons('.switch-pokemon.party');
        };
    });
});
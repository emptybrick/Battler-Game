/*-------------------Sound Toggle-----------------*/


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
const messageBox = document.querySelectorAll('.message-box');
const leaderTextElement = document.querySelector('.leader-text');
const leaderPokemonTextElement = document.querySelector('.leader-pokemon-text');
const leaderPokemonImageElement = document.querySelector('#leader-pokemon');
const leaderImageElement = document.querySelector('#leader-image');
const opponentTextElement = document.querySelector('.opponent-text');
const opponentPokemonTextElement = document.querySelector('.opponent-pokemon-text');
const opponentPokemonImageElement = document.querySelector('#opponent-pokemon');
const opponentImageElement = document.querySelector('#opponent-image');
const playerTextElement = document.querySelectorAll('.player-text');
const playerPokemonImageElement = document.querySelectorAll('.player-pokemon');
const playerImageElement = document.querySelectorAll('.player-image');
const playerPokemonTextElement = document.querySelectorAll('.player-pokemon-text');
const dynamicButtonTextElement = document.querySelectorAll('.dynamic-button');
const leaveButtonTextElement = document.querySelectorAll('.leave');
const partyCollectionWindow = document.querySelector('#party-status-collection');
const collectionPokemonWindow = document.querySelector('#collection-list');
const rewardMessage = document.querySelectorAll('.reward-message');
const releasePokemonButton = document.querySelector('.release-pokemon');
const okReleaseButton = document.querySelector('.ok-release');
const cancelReleaseButton = document.querySelector('.cancel-release');

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

const party = [];

const collection = [
    { id: null, number: 63, name: 'Abra', type: 'psychic', maxhp: 25, hp: 25, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 5, image: 'images/abra.png' },
    { id: null, number: 63, name: 'Abra', type: 'psychic', maxhp: 25, hp: 25, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 5, image: 'images/abra.png' },
    { id: null, number: 63, name: 'Abra', type: 'psychic', maxhp: 25, hp: 25, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 5, image: 'images/abra.png' },
    { id: null, number: 63, name: 'Abra', type: 'psychic', maxhp: 25, hp: 25, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 5, image: 'images/abra.png' },
    { id: null, number: 63, name: 'Abra', type: 'psychic', maxhp: 25, hp: 25, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 5, image: 'images/abra.png' },
    { id: null, number: 63, name: 'Abra', type: 'psychic', maxhp: 25, hp: 25, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 5, image: 'images/abra.png' },
    { id: null, number: 63, name: 'Abra', type: 'psychic', maxhp: 25, hp: 25, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 5, image: 'images/abra.png' },
    { id: 654, number: 63, name: 'Abra', type: 'psychic', maxhp: 25, hp: 25, maxxp: 10, xp: 432, starter: false, canEvolve: true, evolvesFrom: null, rarity: 5, image: 'images/abra.png' },
    { id: null, number: 63, name: 'Abra', type: 'psychic', maxhp: 25, hp: 25, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 5, image: 'images/abra.png' },
    { id: null, number: 63, name: 'Abra', type: 'psychic', maxhp: 25, hp: 25, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 5, image: 'images/abra.png' },
    { id: null, number: 63, name: 'Abra', type: 'psychic', maxhp: 25, hp: 25, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 5, image: 'images/abra.png' },
    { id: null, number: 63, name: 'Abra', type: 'psychic', maxhp: 25, hp: 25, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 5, image: 'images/abra.png' },
    { id: null, number: 63, name: 'Abra', type: 'psychic', maxhp: 25, hp: 25, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 5, image: 'images/abra.png' },
    { id: null, number: 63, name: 'Abra', type: 'psychic', maxhp: 25, hp: 25, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 5, image: 'images/abra.png' },
    { id: null, number: 63, name: 'Abra', type: 'psychic', maxhp: 25, hp: 25, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 5, image: 'images/abra.png' },
    { id: null, number: 65, name: 'Alakazam', type: 'psychic', maxhp: 95, hp: 95, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Kadabra', rarity: 0, image: 'images/alakazam.png' },
    { id: null, number: 65, name: 'Alakazam', type: 'psychic', maxhp: 95, hp: 95, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Kadabra', rarity: 0, image: 'images/alakazam.png' },
    { id: null, number: 65, name: 'Alakazam', type: 'psychic', maxhp: 95, hp: 95, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Kadabra', rarity: 0, image: 'images/alakazam.png' },
    { id: null, number: 65, name: 'Alakazam', type: 'psychic', maxhp: 95, hp: 95, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Kadabra', rarity: 0, image: 'images/alakazam.png' },
    { id: null, number: 65, name: 'Alakazam', type: 'psychic', maxhp: 95, hp: 95, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Kadabra', rarity: 0, image: 'images/alakazam.png' },
    { id: null, number: 65, name: 'Alakazam', type: 'psychic', maxhp: 95, hp: 95, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Kadabra', rarity: 0, image: 'images/alakazam.png' },
    { id: null, number: 65, name: 'Alakazam', type: 'psychic', maxhp: 95, hp: 95, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Kadabra', rarity: 0, image: 'images/alakazam.png' },
    { id: null, number: 65, name: 'Alakazam', type: 'psychic', maxhp: 95, hp: 95, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Kadabra', rarity: 0, image: 'images/alakazam.png' },
    { id: null, number: 65, name: 'Alakazam', type: 'psychic', maxhp: 95, hp: 95, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Kadabra', rarity: 0, image: 'images/alakazam.png' },
    { id: 1082, number: 65, name: 'Alakazam', type: 'psychic', maxhp: 95, hp: 95, maxxp: 30, xp: 9, starter: false, canEvolve: false, evolvesFrom: 'Kadabra', rarity: 0, image: 'images/alakazam.png' },
    { id: null, number: 65, name: 'Alakazam', type: 'psychic', maxhp: 95, hp: 95, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Kadabra', rarity: 0, image: 'images/alakazam.png' },
    { id: null, number: 65, name: 'Alakazam', type: 'psychic', maxhp: 95, hp: 95, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Kadabra', rarity: 0, image: 'images/alakazam.png' },
    { id: null, number: 65, name: 'Alakazam', type: 'psychic', maxhp: 95, hp: 95, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Kadabra', rarity: 0, image: 'images/alakazam.png' },
];

const potions = items.find(item => item.name === 'potion');
const rareCandy = items.find(item => item.name === 'rarecandy');

/*-------------------Variables-------------------*/

let currentArea = null;
let nextArea = null;
let lastArea = null;
let currentPage = "page1";
let nextPage = null;
let lastPage = null;
let activeSlot = '';
let encounter = null;
let oppName = '';
let oppLossMessage = '';
let characterModel = {};
let currentPokemon = {};
let oppCurrentPokemon = {};
let wildPokemonFound = {};
let oppParty = [];
let partyCurrentIndex = null;
let oppPartyCurrentIndex = null;
let nextUniqueID = 1;

/*---------------------------------- Core Functions ----------------------------------------*/

function assignUniqueID() {
    const newID = nextUniqueID;
    nextUniqueID++;
    return newID;
}

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

    document.querySelectorAll('.partyMember').forEach(slot => slot.classList.remove('active'));
    document.querySelectorAll('.icon').forEach(icon => icon.classList.remove('active'));

    clearOpponentData();
    switchScreen('character');
    updatePartyDisplay();
    updateItemDisplay();
};

// function to clear images and text from html
function clearOpponentData() {
    leaderTextElement.textContent = '';
    leaderPokemonTextElement.textContent = '';
    leaderPokemonImageElement.src = '';
    leaderImageElement.src = '';
    leaderPokemonImageElement.alt = '';
    leaderImageElement.alt = '';
    opponentTextElement.textContent = '';
    opponentPokemonTextElement.textContent = '';
    opponentPokemonImageElement.src = '';
    opponentImageElement.src = '';
    opponentPokemonImageElement.alt = '';
    opponentImageElement.alt = '';
    playerPokemonTextElement.forEach(p => {
        p.textContent = '';
    });
    playerPokemonImageElement.forEach(img => {
        img.src = '';
        img.alt = '';
    });
    playerImageElement.forEach(img => {
        img.src = '';
        img.alt = '';
        img.classList.remove('player-image-animate');
    });
    playerTextElement.forEach(p => {
        p.textContent = '';
    });
    opponentPokemonImageElement.classList.remove('wildpokemon-image-animate');
    opponentPokemonTextElement.classList.remove('active');
    leaderPokemonTextElement.classList.remove('active');
    playerPokemonTextElement.forEach(p => {
        p.classList.remove('active');
    });
    clearMessages();
    oppParty.length = 0;
    oppCurrentPokemon = {};
    wildPokemonFound = {};
    oppName = '';
    oppLossMessage = '';
    encounter = null;
    oppPartyCurrentIndex = null
};

// function to switch main area screen  --- using to enable/disable buttons with timeouts for simple transitions
function switchScreen(screenClass) {
    document.querySelectorAll('.main-screen').forEach(screen => screen.classList.remove('active'));
    document.querySelector(`.${screenClass}`).classList.add('active');
    if (screenClass === 'start' || screenClass === 'character') {
        // do nothing
    } else {
        if (screenClass === 'palletTown' || screenClass === 'indigoPlateau') {
            currentArea = screenClass;
            disableButtons('#trainer-battle, #gym, #poke-mart, #poke-center, #search-for-pokemon, .next-area, .last-area');
            setTimeout(() => {
                enableButtons('#search-for-pokemon, #poke-center, #poke-mart, .next-area, .last-area');
                updateArea();
            }, 2500);
        }
        else if (screenClass === "pokemart" || screenClass === "pokecenter" || screenClass === "gameCleared" ||
            screenClass === "gameOver" || screenClass === 'start' || screenClass === 'pokecenter-collection-box') {
            disableButtons('#trainer-battle, #gym, #poke-mart, #poke-center, #search-for-pokemon, .next-area, .last-area, .poke-button, .leave, .switch-pokemon, .use-rare-candy');
            setTimeout(() => {
                enableButtons('.poke-button, .leave');
            }, 2500);
        }
        else if (screenClass === 'gym' || screenClass === 'battle') {
            disableButtons('.switch-pokemon.party, .use-rare-candy, .use-potion, #trainer-battle, #gym, #poke-mart, #poke-center, #search-for-pokemon');

        } else {
            currentArea = screenClass;
            disableButtons('#trainer-battle, #gym, #poke-mart, #poke-center, #search-for-pokemon, .next-area, .last-area');
            setTimeout(() => {
                enableButtons('#trainer-battle, #poke-center, #poke-mart, #search-for-pokemon, .next-area, .last-area');
                updateGymButton();
                updateArea();
            }, 2500);
        };
        if (screenClass === 'gameOver' || screenClass === 'gameCleared') {
            disableButtons('.switch-pokemon, .use-rare-candy, #trainer-battle, #gym, #poke-mart, #poke-center, #search-for-pokemon');
        };
    };
};

// function to keep updating nextArea based off of currentArea
function updateNextArea(currentArea) {
    const currentIndex = areas.findIndex(area => area.location === currentArea);
    if (currentIndex < areas.length - 1) {
        nextArea = areas[currentIndex + 1].location;
    } else {
        nextArea = null;
    };
};

//function to update last area traveled
function updateLastArea(currentArea) {
    const currentIndex = areas.findIndex(area => area.location === currentArea);
    if (currentIndex > 0) {
        lastArea = areas[currentIndex - 1].location;
    } else {
        lastArea = null;
    };
};

// function to update areas if condition is met allowing you to go to next area and marking current as complete
function updateArea() {
    const area = areas.find(area => area.location === currentArea);
    if (!area || area.location === 'indigoPlateau') return;
    const selector = `.next-area.${currentArea}`;
    if (area.condition()) {
        enableButtons(selector);
        area.completed = true;
    } else {
        disableButtons(selector);
    };
};


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

function transferPokemon(type, pokemon) {
    if (type === 'party' && party.length > 1) {
        const index = party.findIndex(p => p.id == pokemon.id);
        const pokemonToTransfer = party.splice(index, 1)[0];
        collection.push(pokemonToTransfer);
    }
    else if (type === 'collection' && party.length < 6) {
        const index = collection.findIndex(p => p.id == pokemon.id);
        const pokemonToTransfer = collection.splice(index, 1)[0];
        party.push(pokemonToTransfer);
    }
    currentPokemon = party[0];
    updatePartyDisplay();
    updateCollectionWindow();
};

function updateCollectionWindow() {
    partyCollectionWindow.innerHTML = '';
    collectionPokemonWindow.innerHTML = '';
    party.forEach(element => {
        const collectionPartyPokemon = document.createElement('button');
        collectionPartyPokemon.classList.add('pokemon-collection-button');
        collectionPartyPokemon.innerHTML = `<div class="partyMember slot-1" data-id="${element.id}">
                                    <div class="name party">${element.name}</div>
                                    <div class="hp party">
                                        <h5>HP:</h5>
                                        <div class="slot1Hp party">${element.hp}</div>
                                    </div>
                                    <div class="xp party">
                                        <h5>XP:</h5>
                                        <div class="slot1Xp party">${element.xp}</div>
                                    </div>
                                </div>`
        partyCollectionWindow.appendChild(collectionPartyPokemon);

        collectionPartyPokemon.addEventListener('click', (event) => {
            const pokemonID = event.currentTarget.querySelector('.partyMember').dataset.id;
            const pokemon = party.find(p => p.id == pokemonID);
            transferPokemon('party', pokemon);
        });
    });

    collection.forEach(element => {
        const collectionPokemon = document.createElement('button');
        collectionPokemon.classList.add('pokemon-collection-button');
        collectionPokemon.innerHTML = `<div class="partyMember slot-1" data-id="${element.id}">
                                    <div class="name party">${element.name}</div>
                                    <div class="hp party">
                                        <h5>HP:</h5>
                                        <div class="slot1Hp party">${element.hp}</div>
                                    </div>
                                    <div class="xp party">
                                        <h5>XP:</h5>
                                        <div class="slot1Xp party">${element.xp}</div>
                                    </div>
                                </div>`
        collectionPokemonWindow.appendChild(collectionPokemon);

        collectionPokemon.addEventListener('click', (event) => {
            const pokemonID = event.currentTarget.querySelector('.partyMember').dataset.id;
            const pokemon = collection.find(p => p.id == pokemonID);
            transferPokemon('collection', pokemon);
        });
    });
    currentPokemon = party[0];
    partyCurrentIndex = 0;
    activeSlot = `slot-${partyCurrentIndex + 1}`;
    document.querySelectorAll('.partyMember').forEach(slot => slot.classList.remove('active'));
    document.querySelector(`.partyMember.${activeSlot}`).classList.add('active');
    updatePartyDisplay();
};

// function to show badge after gym is completed
function getBadge(badge) {
    badges.push(badge);
    document.querySelector(`.${badge}`).classList.add('active');
    updateGymButton();
    updateArea();
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

    if (messageBox.forEach(box => box.classList.contains('active'))) {
        return;
    } else {
        if (gold && gold.quantity >= cost) {
            gold.quantity -= cost;
            item.quantity += 1;
            updateItemDisplay();
            messageBox.forEach(box => box.textContent = `Purchased 1 ${item.msgName}`);
            showMessageBox('message');
        }
        else {
            messageBox.forEach(box => box.textContent = "Not Enough Gold!");
            showMessageBox('message');
        };
    };
    updatePotionButton();
};

// function to update display of pokemon party
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



/*------------------------------Message Functions-----------------------------------*/
function showMessageBox(type) {
    switch (type) {
        case "opponent":
            opponentTextElement.classList.add('active');
            setTimeout(() => {
                opponentTextElement.classList.add('fading');
                setTimeout(() => {
                    opponentTextElement.classList.remove('fading', 'active');
                }, 1200);
            }, 800);
            break;
        case "leader":
            leaderTextElement.classList.add('active');
            setTimeout(() => {
                leaderTextElement.classList.add('fading');
                setTimeout(() => {
                    leaderTextElement.classList.remove('fading', 'active');
                }, 1200);
            }, 800);
            break;
        case "player":
            playerTextElement.forEach(p => p.classList.add('active'));
            setTimeout(() => {
                playerTextElement.forEach(p => p.classList.add('fading'));
                setTimeout(() => {
                    playerTextElement.forEach(p => p.classList.remove('fading', 'active'));
                }, 800);
            }, 800);
            break;
        case "message":
            messageBox.forEach(box => box.classList.add('active'));
            setTimeout(() => {
                messageBox.forEach(box => box.classList.add('fading'));
                setTimeout(() => {
                    messageBox.forEach(box => box.classList.remove('fading', 'active'));
                }, 1200);
            }, 800);
            break;
    };
};

function showMessagePerm(type) {
    switch (type) {
        case "leader":
            leaderTextElement.classList.add('active');
            break;
        case "opponent":
            opponentTextElement.classList.add('active');
            break;
        case "player":
            playerTextElement.forEach(p => p.classList.add('active'));
            break;
    };
};

function clearMessages() {
    leaderTextElement.classList.remove('active');
    opponentTextElement.classList.remove('active');
    playerTextElement.forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.reward-message-box').forEach(box => {
        box.classList.remove('active');
    });
};

function showMessageIntro(type) {
    switch (type) {
        case "leader":
            leaderTextElement.classList.add('active');
            setTimeout(() => {
                leaderTextElement.classList.add('fading');
                setTimeout(() => {
                    leaderTextElement.classList.remove('fading', 'active');
                }, 3000);
            }, 1000);
            break;
        case "opponent":
            setTimeout(() => {
                opponentTextElement.classList.add('active');
                setTimeout(() => {
                    opponentTextElement.classList.add('fading');
                    setTimeout(() => {
                        opponentTextElement.classList.remove('fading', 'active');
                    }, 3500);
                }, 3000);
            }, 1000);
            break;
        case "player":
            setTimeout(() => {
                playerTextElement.forEach(p => p.classList.add('active'));
                setTimeout(() => {
                    playerTextElement.forEach(p => p.classList.add('fading'));
                    setTimeout(() => {
                        playerTextElement.forEach(p => p.classList.remove('fading', 'active'));
                    }, 4000);
                }, 3000);
            }, 1000);
            break;
    };
};

function updateBattleDisplay(encounter) {
    if (encounter === "gym" || encounter === "elite") {
        leaderPokemonTextElement.innerHTML = `<pre>${oppCurrentPokemon.name}     HP: ${oppCurrentPokemon.hp}</pre>`;
        leaderPokemonTextElement.classList.add('active');
    }
    else if (encounter === "trainer") {
        opponentPokemonTextElement.innerHTML = `<pre>${oppCurrentPokemon.name}     HP: ${oppCurrentPokemon.hp}</pre>`;
        opponentPokemonTextElement.classList.add('active');
    }
    else if (encounter === "wildpokemon") {
        opponentPokemonTextElement.innerHTML = `<pre>${wildPokemonFound.name}     HP: ${wildPokemonFound.hp}</pre>`;
        opponentPokemonTextElement.classList.add('active');
    } else {
        playerPokemonTextElement.forEach(p => {
            p.innerHTML = `<pre>${currentPokemon.name}     HP: ${currentPokemon.hp}</pre>`;
            p.classList.add('active');
        });
    };
};

// this is to change values of message boxes during battle to update damage as it changes
function battleMessageDisplay(type, pokemonAttack) {
    switch (type) {
        case "player":
            switch (pokemonAttack > 0) {
                case true:
                    playerTextElement.forEach(p => {
                        p.textContent = `${currentPokemon.name} attacked for ${pokemonAttack} damage!`;
                        damageFlashDisplay('opponent');
                        attackAnimate('player');
                        showMessageBox('player');
                    });
                    break;
                case false:
                    playerTextElement.forEach(p => {
                        p.textContent = `${currentPokemon.name} missed ${wildPokemonFound.name}!`;
                        attackAnimate('player');
                        showMessageBox('player');
                    });
                    break;
            };
            break;
        case "opponent":
            switch (pokemonAttack > 0) {
                case true:
                    if (encounter === 'wildpokemon') {
                        opponentTextElement.textContent = `Wild ${wildPokemonFound.name} attacked for ${pokemonAttack} damage!`;
                    } else {
                        leaderTextElement.textContent = `${oppCurrentPokemon.name} attacked for ${pokemonAttack} damage!`;
                        opponentTextElement.textContent = `${oppCurrentPokemon.name} attacked for ${pokemonAttack} damage!`;
                    };
                    damageFlashDisplay('player');
                    attackAnimate('opponent');
                    showMessageBox('opponent');
                    showMessageBox('leader');
                    break;
                case false:
                    if (encounter === 'wildpokemon') {
                        opponentTextElement.textContent = `Wild ${wildPokemonFound.name} missed ${currentPokemon.name}!`;
                    } else {
                        opponentTextElement.textContent = `${oppCurrentPokemon.name} missed ${currentPokemon.name}!`;
                        leaderTextElement.textContent = `${oppCurrentPokemon.name} missed ${currentPokemon.name}!`;
                    };
                    showMessageBox('opponent');
                    attackAnimate('opponent');
                    showMessageBox('leader');
                    break;
            }
            break;
    };
};

/*--------------------------------- Button Functions -------------------------------------*/
function updateTownButtons() {
    updatePotionButton();
    updateSwitchPokemonButton();
    updateRareCandyButton();
};

function updateRareCandyButton() {
    if (rareCandy.quantity > 0) {
        enableButtons('.use-rare-candy');
    };
};

function disableButtons(button) {
    document.querySelectorAll(button).forEach(b => {
        b.disabled = true;
    });
};

function enableButtons(button) {
    document.querySelectorAll(button).forEach(b => {
        b.disabled = false;
    });
};

function updateSwitchPokemonButton(type) {
    if (party.length > 1) {
        const healthCheck = partyHealthStatus(party, partyCurrentIndex);
        if (healthCheck !== partyCurrentIndex && healthCheck !== 'false') {
            if (type === "battle") {
                enableButtons('.switch-pokemon.battle');
                disableButtons('.switch-pokemon.party')
            } else {
                enableButtons('.switch-pokemon.party');
            };
        };
    } else {
        disableButtons('.switch-pokemon')
    };
};

// function to disable gym button if gym is completed and have badge
function updateGymButton() {
    const gym = areas.find(area => area.location === currentArea);
    if (gym.completed || currentArea === 'palletTown' || currentArea === 'indigoPlateau') {
        disableButtons('#gym');
    } else {
        enableButtons('#gym');
    };
};

function updatePotionButton() {
    if (oppCurrentPokemon.hp <= 0) {
        disableButtons('.use-potion');
    } else {
        if (potions.quantity >= 1 && currentPokemon.hp < currentPokemon.maxhp) {
            enableButtons('.use-potion');
        } else {
            disableButtons('.use-potion');
        };
    };
};

/*--------------------------------- Battle Functions -------------------------------------------*/

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

function damageFlashDisplay(type) {
    switch (type) {
        case "player":
            playerPokemonTextElement.forEach(e => {
                e.classList.add('damaged');
            });
            setTimeout(() => {
                playerPokemonTextElement.forEach(e => {
                    e.classList.remove('damaged');
                });
            }, 1000);
            break;
        case "opponent":
            opponentPokemonTextElement.classList.add('damaged');
            leaderPokemonTextElement.classList.add('damaged');
            setTimeout(() => {
                opponentPokemonTextElement.classList.remove('damaged');
                leaderPokemonTextElement.classList.remove('damaged');
            }, 1000);
            break;
    };
};

function attackAnimate(type) {
    switch (type) {
        case "player":
            playerPokemonImageElement.forEach(e => {
                e.classList.add('player-attack');
            });
            setTimeout(() => {
                playerPokemonImageElement.forEach(e => {
                    e.classList.remove('player-attack');
                });
            }, 1000);
            break;
        case "opponent":
            opponentPokemonImageElement.classList.add('opponent-attack');
            leaderPokemonImageElement.classList.add('opponent-attack');
            setTimeout(() => {
                opponentPokemonImageElement.classList.remove('opponent-attack');
                leaderPokemonImageElement.classList.remove('opponent-attack');
            }, 1000);
            break;
    }
}

function updateImageElements(type) {
    switch (type) {
        case "player":
            playerPokemonImageElement.forEach(img => {
                img.src = currentPokemon.image;
                img.alt = currentPokemon.name;
            });
            break;
        case "trainer":
            opponentPokemonImageElement.src = oppCurrentPokemon.image;
            opponentPokemonImageElement.alt = oppCurrentPokemon.name;
            break;
        case "leader":
            leaderPokemonImageElement.src = oppCurrentPokemon.image;
            leaderPokemonImageElement.alt = oppCurrentPokemon.name;
            break;
        case 'player-image':
            playerImageElement.forEach(img => {
                img.src = characterModel.image;
                img.alt = characterModel.name;
                requestAnimationFrame(() => {
                    img.classList.add('player-image-animate');
                });
            });
            break;
    };
};

// function to choose random pokemon
function chooseRandomPokemon() {

    let possiblePokemon = [];

    switch (currentArea) {
        case 'palletTown':
            possiblePokemon = pokedex.filter(pokemon => pokemon.maxhp < 35);
            break;
        case 'pewterCity':
            possiblePokemon = pokedex.filter(pokemon => pokemon.maxhp > 25 && pokemon.maxhp < 45);
            break;
        case 'ceruleanCity':
            possiblePokemon = pokedex.filter(pokemon => pokemon.maxhp > 30 && pokemon.maxhp < 50);
            break;
        case 'vermilionCity':
            possiblePokemon = pokedex.filter(pokemon => pokemon.maxhp > 35 && pokemon.maxhp < 60);
            break;
        case 'celadonCity':
            possiblePokemon = pokedex.filter(pokemon => pokemon.maxhp > 40 && pokemon.maxhp < 65);
            break;
        case 'fuchsiaCity':
            possiblePokemon = pokedex.filter(pokemon => pokemon.maxhp > 45 && pokemon.maxhp <= 80);
            break;
        case 'saffronCity':
            possiblePokemon = pokedex.filter(pokemon => pokemon.maxhp > 45 && pokemon.maxhp < 85);
            break;
        case 'cinnabarIsland':
            possiblePokemon = pokedex.filter(pokemon => pokemon.maxhp > 50 && pokemon.maxhp < 85);
            break;
        case 'viridianCity':
            possiblePokemon = pokedex.filter(pokemon => pokemon.maxhp > 55 && pokemon.maxhp < 90);
            break;
        default:
            possiblePokemon = pokedex.filter(pokemon => pokemon.maxhp > 70);
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

function partyHealthStatus(party, currentIndex) {
    for (let i = currentIndex; ;) {
        i = (i + 1) % party.length;

        if (party[i].hp > 0) {
            return i;
        }
        else if (i === currentIndex) {
            return 'false';
        };
    };
};



// function for switching player current pokemon
function switchPokemon() {
    const healthCheck = partyHealthStatus(party, partyCurrentIndex);

    if (healthCheck !== partyCurrentIndex && healthCheck !== 'false') {
        partyCurrentIndex = healthCheck;
        currentPokemon = party[partyCurrentIndex];
        activeSlot = `slot-${partyCurrentIndex + 1}`;
        document.querySelectorAll('.partyMember').forEach(slot => slot.classList.remove('active'));
        document.querySelector(`.partyMember.${activeSlot}`).classList.add('active');
        updatePartyDisplay();
        updateImageElements('player');
        playerTextElement.forEach(p => {
            p.textContent = `${characterModel.name} switch to ${currentPokemon.name}!`;
            showMessageBox('player');
        });
        updateBattleDisplay();
        updatePartyDisplay();
    } else if (currentPokemon.hp > 0) {
        return;
    } else {
        switchScreen('gameOver');
    };
};

function switchPokemonOpp() {
    const healthCheck = partyHealthStatus(oppParty, oppPartyCurrentIndex);

    if (healthCheck !== oppPartyCurrentIndex && healthCheck !== 'false') {
        oppPartyCurrentIndex = healthCheck;
        oppCurrentPokemon = oppParty[oppPartyCurrentIndex];

        if (encounter === 'gym' || encounter === 'elite') {
            leaderTextElement.textContent = `${oppName} switched to ${oppCurrentPokemon.name}!`;
            updateImageElements('leader');
            showMessageBox('leader');
        } else {
            opponentTextElement.textContent = `Trainer switched to ${oppCurrentPokemon.name}!`;
            updateImageElements('trainer');
            showMessageBox('leader');
        };
    };
    updateBattleDisplay(encounter);
};

// function to evolve, will look for 10-50xp values if they hit them it does different things
function evolution(pokemonToEvolve, evolvesInto) {
    evolvesInto.id = pokemonToEvolve.id;
    party.splice(partyCurrentIndex, 1, evolvesInto);
    evolvesInto.hp = currentPokemon.hp;
    currentPokemon = evolvesInto;

    playerTextElement.forEach(p => {
        p.textContent = `${pokemonToEvolve.name} evolved into ${currentPokemon.name}!`
        showMessageBox('player');
    });
    updateImageElements('player');
    updatePartyDisplay();
    updateBattleDisplay();
};

// fuction that runs when currentPokemon gains xp (eevee is a special case with 3 options so i set random number 1-3)
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
        dynamicButtonTextElement.forEach(button => {
            button.textContent = "Accept Challenge"
        });
        let possibleOppParty = [];
        let trainerImage = `images/trainer${Math.ceil(Math.random() * 14)}.png`;
        let trainerIntro = trainerIntros[Math.floor(Math.random() * 35)]
        switch (currentArea) {
            case 'pewterCity':
                possibleOppParty = pokedex.filter(pokemon => pokemon.maxhp < 50);
                break;
            case 'ceruleanCity':
                possibleOppParty = pokedex.filter(pokemon => pokemon.maxhp < 60);
                break;
            case 'vermilionCity':
                possibleOppParty = pokedex.filter(pokemon => pokemon.maxhp < 70);
                break;
            default:
                possibleOppParty = pokedex.filter(pokemon => pokemon.maxhp > 50 < 80);
                break;
        };
        const possiblePartyAmount = Math.ceil(Math.random() * 5)
        for (let loopCount = 0; loopCount < possiblePartyAmount; loopCount++) {
            const randomIndex = Math.floor(Math.random() * possibleOppParty.length)
            oppParty.push(structuredClone(possibleOppParty[randomIndex]));
        }
        oppCurrentPokemon = oppParty[0];
        oppPartyCurrentIndex = 0;
        opponentImageElement.src = trainerImage;
        opponentImageElement.alt = "Random Trainer";
        setTimeout(() => {
            setTimeout(() => {
                opponentTextElement.textContent = trainerIntro;
                showMessagePerm('opponent');
                setTimeout(() => {
                    playerTextElement.forEach(p => {
                        p.textContent = `A Trainer has challenged you with ${oppParty.length} Pokemon!`;
                        showMessagePerm('player');
                    });
                }, 1000);
            }, 2000);
        }, 2000);
        updateImageElements('player-image');
    }
    else if (battleType === 'Search For Wild Pokemon') {
        updateImageElements('player-image');
        dynamicButtonTextElement.forEach(button => {
            button.textContent = "Attack";
        });

        encounter = 'wildpokemon';
        setTimeout(() => {
            playerTextElement.forEach(p => {
                p.textContent = `${characterModel.name} sent out ${currentPokemon.name}!`;
                showMessageBox('player');

                playerPokemonTextElement.forEach(p => {
                    p.innerHTML = `<pre>${currentPokemon.name}     HP: ${currentPokemon.hp}</pre>`
                    p.classList.add('active');
                    updateImageElements('player');
                });
            });
        }, 7000);
        wildPokemonFound = structuredClone(chooseRandomPokemon());
        if (wildPokemonFound) {
            switchScreen('battle');
            setTimeout(() => {
                opponentPokemonImageElement.src = wildPokemonFound.image
                opponentPokemonImageElement.alt = wildPokemonFound.name
                opponentPokemonImageElement.classList.add('wildpokemon-image-animate');
                setTimeout(() => {
                    opponentPokemonImageElement.classList.remove('wildpokemon-image-animate');
                }, 4000)
            }, 1000);
            setTimeout(() => {
                opponentTextElement.textContent = `A wild ${wildPokemonFound.name} appeared!`;
                showMessagePerm('opponent');
                setTimeout(() => {
                    opponentPokemonTextElement.innerHTML = `<pre>${wildPokemonFound.name}     HP: ${wildPokemonFound.hp}</pre>`;
                    opponentPokemonTextElement.classList.add('active');
                }, 2500);
            }, 4500);
            return wildPokemonFound;
        };
    }
    else if (battleType === 'Gym' || battleType === 'Lorelei' || battleType === 'Bruno' ||
        battleType === 'Agatha' || battleType === 'Lance') {
        if (battleType === 'Gym') {
            encounter = 'gym';
            const foundArea = areas.find((area) => area.location === currentArea)
            const foundGymLeader = leaders.find((leader) => leader.location === foundArea.location)
            oppName = foundGymLeader.name
            oppParty = foundGymLeader.party;
            oppLossMessage = foundGymLeader.loss;
            leaderImageElement.src = foundGymLeader.image;
            setTimeout(() => {
                leaderTextElement.textContent = foundGymLeader.intro
                showMessagePerm('leader');
            }, 3000);
        } else {
            encounter = 'elite';
            const foundEliteMember = eliteFour.find(member => member.name === battleType);
            oppName = foundEliteMember.name;
            oppParty = foundEliteMember.party;
            oppLossMessage = foundEliteMember.loss;
            leaderImageElement.src = foundEliteMember.image;
            setTimeout(() => {
                leaderTextElement.textContent = foundEliteMember.intro;
                showMessagePerm('leader');
            }, 3000);
        };
        switchScreen('gym');
        dynamicButtonTextElement.forEach(button => {
            button.textContent = "Challenge";
        });
        oppCurrentPokemon = oppParty[0];
        leaderImageElement.alt = oppName;

        updateImageElements('player-image');
    };
};

// rolls a random number to set battle order (who attacks first) and also includes
// the random value based on hp that each pokemon will do, and executes hp reduction
// before sending results back to resolveBattle()
async function battleDamageAndOrder(encounterData) {
    let randomOrder = Math.ceil(Math.random() * 2);
    // order returns 1, opponent goes first -- returns 2, player goes first
    if (encounter === 'wildpokemon') {
        oppCurrentPokemon = encounterData;
    }
    let currentPokemonAttack = Math.ceil((Math.random() * currentPokemon.maxhp) / 2);
    let opponentPokemonAttack = Math.floor((Math.random() * oppCurrentPokemon.maxhp) / 3);

    return new Promise((resolve) => {
        if (randomOrder === 1) {
            currentPokemon.hp -= opponentPokemonAttack;
            updateBattleDisplay();
            battleMessageDisplay('opponent', opponentPokemonAttack);
            if (currentPokemon.hp <= 0) {
                resolve(currentPokemon);
                return;
            }
            setTimeout(() => {
                // oppCurrentPokemon.hp -= currentPokemonAttack;
                oppCurrentPokemon.hp -= 500;//------------------------------------------------------------------------------------------------------------------------------ test code
                updateBattleDisplay(encounter);
                battleMessageDisplay('player', currentPokemonAttack);
                if (oppCurrentPokemon.hp <= 0) {
                    resolve(oppCurrentPokemon);
                    return;
                }
            }, 2500);
        } else {
            // oppCurrentPokemon.hp -= currentPokemonAttack;
            oppCurrentPokemon.hp -= 500; //--------------------------------------------------------------------------------------------------------------------------------test code
            updateBattleDisplay(encounter);
            battleMessageDisplay('player', currentPokemonAttack);
            if (oppCurrentPokemon.hp <= 0) {
                resolve(oppCurrentPokemon);
                return;
            }
            setTimeout(() => {
                currentPokemon.hp -= opponentPokemonAttack;
                updateBattleDisplay();
                battleMessageDisplay('opponent', opponentPokemonAttack);
                if (currentPokemon.hp <= 0) {
                    resolve(currentPokemon);
                    return;
                }
            }, 2500);

        };
    });
};

// after battle is initially set up with battleSetup() this function handles each encountertype
// calls battleDamageAndOrder() for damage amount and sequence.  then resolves switching out pokemon
// as needed and changing message boxes, also handles button disable and enable for specific scenerios
async function resolveBattle() {
    let faintedPokemon = null;

    if (encounter === "wildpokemon") {
        faintedPokemon = await battleDamageAndOrder(wildPokemonFound);
    } else {
        faintedPokemon = await battleDamageAndOrder();
    }
    if (oppCurrentPokemon.hp > 0) {
        setTimeout(() => {
            enableButtons('.dynamic-button');
            updateSwitchPokemonButton("battle");
            updatePotionButton();
            if (encounter === 'wildpokemon') {
                enableButtons('.leave');
            }
        }, 4000);
    };
    if (faintedPokemon === currentPokemon) {
        currentPokemon.hp = 0;
        currentPokemon.xp += 1;
        updateXP();
        updateBattleDisplay();
        playerTextElement.forEach(p => {
            p.textContent = `${currentPokemon.name} fainted!`;
            showMessageBox('player');
        });
        setTimeout(() => {
            switchPokemon();
            updateImageElements('player');
        }, 2000);
    } else if (faintedPokemon === oppCurrentPokemon) {

        if (encounter === 'wildpokemon') {
            oppCurrentPokemon.hp = 0
            updateBattleDisplay(encounter);
            disableButtons('.use-potion, .switch-pokemon, .leave');
            setTimeout(() => {
                enableButtons('.dynamic-button');
            }, 2000);
            opponentTextElement.textContent = `Wild ${wildPokemonFound.name} fainted!`;
            showMessagePerm('opponent');

            currentPokemon.xp += 1;
            updateXP(currentPokemon);

            dynamicButtonTextElement.forEach(button => {
                button.textContent = "Throw Pokéball";
            });
            leaveButtonTextElement.forEach(button => {
                button.textContent = 'Leave';
            });
            getRewards('wildpokemon');
        } else {
            if (oppPartyCurrentIndex === oppParty.length - 1) {
                oppCurrentPokemon.hp = 0;
                disableButtons('.use-potion, .switch-pokemon');
                updateBattleDisplay(encounter);
                currentPokemon.xp += 1;
                updateXP(currentPokemon);
                if (encounter === 'gym' || encounter === 'elite') {
                    dynamicButtonTextElement.forEach(button => {
                        if (encounter === 'gym') {
                            button.textContent = "Accept Badge";
                        } else {
                            button.textContent = "Accept Defeat";
                        }
                    });
                    enableButtons('.dynamic-button');
                    playerTextElement.forEach(p => {
                        p.textContent = `You defeated ${oppName}! Congratulations!`;
                        showMessagePerm('player');
                    });
                    leaderTextElement.textContent = oppLossMessage;
                    showMessagePerm('leader');
                } else {
                    disableButtons('.dynamic-button');
                    playerTextElement.forEach(p => {
                        p.textContent = `Trainers party has been defeated.`;
                        showMessagePerm('player');
                    });
                    opponentTextElement.textContent = trainerLoss[Math.floor(Math.random() * 10)];
                    showMessagePerm('opponent');
                    updateImageElements('trainer');
                    setTimeout(() => {
                        enableButtons('.leave');
                    }, 3000);
                    getRewards('trainer');
                }
            } else {
                oppCurrentPokemon.hp = 0;
                updateBattleDisplay(encounter);
                currentPokemon.xp += 1;
                updateXP(currentPokemon);
                setTimeout(() => {
                    switchPokemonOpp();
                    if (encounter === 'gym' || encounter === 'elite') {
                        leaderTextElement.textContent = `${oppName} sent out ${oppCurrentPokemon.name}`;
                        showMessageBox('leader');
                        updateImageElements('leader');
                    } else {
                        opponentTextElement.textContent = `Trainer sent out ${oppCurrentPokemon.name}!`;
                        showMessageBox('opponent');
                    };
                    setTimeout(() => {
                        enableButtons('.dynamic-button');
                        updateSwitchPokemonButton("battle");
                        updatePotionButton();
                    }, 2000);
                }, 2000);
            };
        };
    };
    updatePartyDisplay();
    updateItemDisplay();
};

// function to determine rewards based on encounter type
function getRewards(rewardType) {
    const messageBox = document.querySelectorAll('.reward-message-box');
    const gold = items.find(item => item.name === 'gold');
    const rareCandy = items.find(item => item.name === "rarecandy");
    let randomGold = Math.ceil(Math.random() * 5)
    let randomGoldTrainer = (randomGold + 5);
    let randomGoldGym = (Math.ceil(Math.random() * 20) + 10);
    let randomGoldElite = (Math.ceil(Math.random() * 30) + 20);
    let randomRareCandy = Math.floor(Math.random() * 3);
    setTimeout(() => {
        switch (rewardType) {
            case 'trainer':
                gold.quantity += randomGoldTrainer
                rewardMessage.forEach(message => {
                    message.innerHTML = `You gained ${randomGold} gold!`
                    messageBox.forEach(box => {
                        box.classList.add('active');
                    });
                });
                break;
            case 'gym':
                gold.quantity += randomGoldGym
                rewardMessage.forEach(message => {
                    message.innerHTML = `You gained ${randomGold} gold!`
                    messageBox.forEach(box => {
                        box.classList.add('active');
                    });
                });
                break;
            case 'wildpokemon':
                gold.quantity += randomGold;
                rareCandy.quantity += randomRareCandy;
                if (randomRareCandy === 0) {
                    rewardMessage.forEach(message => {
                        message.innerHTML = `You gained ${randomGold} gold!`
                        messageBox.forEach(box => {
                            box.classList.add('active');
                        });
                    });
                } else {
                    rewardMessage.forEach(message => {
                        message.innerHTML = `You gained ${randomGold} gold!<br>You found ${randomRareCandy} Rare Candy!`
                        messageBox.forEach(box => {
                            box.classList.add('active');
                        });
                    });
                };
                break;
            case 'elite':
                gold.quantity += randomGoldElite;
                rewardMessage.forEach(message => {
                    message.innerHTML = `You gained ${randomGold} gold!`
                    messageBox.forEach(box => {
                        box.classList.add('active');
                    });
                });
                break;
        };
    }, 2000);
    updateItemDisplay();
};

// function that is called for when a wild pokemon is at 0hp and then checks for conditions
// makes sure you have pokeballs, or if you dont already have the pokemon, will also
// add pokemon to party or send to collection as needed
function throwPokeball() {
    disableButtons('.dynamic-button, .switch-pokemon');
    enableButtons('.leave');
    const pokeBall = items.find(item => item.name === 'pokeball');
    if (pokeBall.quantity < 1) {
        opponentTextElement.textContent = 'You ran out of Pokéballs!'
        showMessagePerm('opponent');
    } else {
        addPokeballPokemon();
        wildPokemonFound.id = assignUniqueID();
        party.push(wildPokemonFound);
        pokeBall.quantity -= 1;
        opponentTextElement.textContent = `You threw a Pokéball at ${wildPokemonFound.name}, and caught it!`;
        showMessagePerm('opponent');

        if (party.length > 6) {
            collection.push(party.pop());
            opponentTextElement.textContent = `You threw a Pokéball at ${wildPokemonFound.name}, and caught it!,  It has been sent to Collection`;
            showMessagePerm('opponent');
        };
    };
    updatePartyDisplay();
    updateItemDisplay();
};

// function used when heal pokemon button is clicked in pokemon center 
function heal() {
    party.forEach(pokemon => pokemon.hp = pokemon.maxhp);
    updatePartyDisplay();
    messageBox.forEach(msg => {
        msg.textContent = "Party is at Full Health!";
    });
    showMessageBox('message');
    updateSwitchPokemonButton();
};

/*-------------------Event Listeners-------------------*/

playAgainButton.forEach((button) => {
    button.addEventListener('click', resetGame);
});

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

pokeCenter.addEventListener('click', () => switchScreen('pokecenter'));

pokeMart.addEventListener('click', () => switchScreen('pokemart'));

pokeMartBuyButton.forEach((button) => {
    button.addEventListener('click', () => {
        buyItem(button.textContent);
    });
});

gym.addEventListener('click', (event) => {

    // clearOpponentData();
    // battleSetup(event.target.textContent);
    // disableButtons('.use-potion, .switch-pokemon, .dynamic-button, .leave');
    // setTimeout(() => {
    //     enableButtons('.dynamic-button, .leave');
    // }, 5000);
    //-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------test code
    // uncomment the 6 lines before this and delete the 3 after to enable gyms again --- this is to test elite four
    const foundArea = areas.find((area) => area.location === currentArea)
    foundArea.completed = true;
    getBadge(foundArea.badge);
});

searchForPokemon.addEventListener('click', (event) => {
    clearOpponentData();
    battleSetup(event.target.textContent);
    setTimeout(() => {
        leaveButtonTextElement.forEach(button => {
            button.textContent = 'Run Away';
        });
    }, 1500);
    disableButtons('.dynamic-button, .leave, .switch-pokemon, .use-potion');
    setTimeout(() => {
        enableButtons('.dynamic-button, .leave');
        updatePotionButton();
        updateSwitchPokemonButton('battle');
    }, 7000);
});

trainerBattle.addEventListener('click', (event) => {
    clearOpponentData();
    battleSetup(event.target.textContent);
    disableButtons('.use-potion, .switch-pokemon, .dynamic-button, .leave');
    setTimeout(() => {
        enableButtons('.dynamic-button, .leave');
    }, 5000);
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

// handles selecting starter pokemon, setting initial item quantities and switching screen to
// first area "Pallet Town"
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
        const selectedPokemon = structuredClone(pokedex.find(p => p.name === pokemonName));

        if (selectedPokemon) {
            selectedPokemon.id = assignUniqueID();
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
        activeSlot = 'slot-1';
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

// clears encounter data and calls for clearOpponentData() which will clear data added during
// battleSetup() and resolveBattle(), also removes added images and enables buttons as needed
leaveButton.forEach((leave) => {
    leave.addEventListener('click', (event) => {
        setTimeout(() => {
            leaveButtonTextElement.forEach(button => {
                button.textContent = 'Leave';
            });
        }, 1500);
        if (event.target.textContent === 'Leave Collection') {
            if (party.length === 1 && currentPokemon.hp <= 0) {
                const message = document.createElement('p');
                message.classList.add('message-box.collection');
                message.innerHTML = "Party is at Zero HP!";
                const container = document.querySelector('.main-screen.area.pokecenter-collection-box');
                container.appendChild(message);
                disableButtons('.leave');
                setTimeout(() => {
                    message.remove();
                    enableButtons('.leave');
                }, 1500);
            } else {
                if (currentPokemon.hp <= 0) {
                    switchPokemon();
                };
                switchScreen('pokecenter');
                setTimeout(() => {
                    leaveButtonTextElement.forEach(button => {
                        button.textContent = 'Leave';
                    });
                }, 1500);
            };
            disableButtons('.pokemon-collection-button, .release-pokemon');
            setTimeout(() => {
                enableButtons('.pokemon-collection-button, .release-pokemon');
            }, 2500);
        } else {
            disableButtons('.dynamic-button, .leave, .use-potion, .switch-pokemon')
            removePokeballPokemon();
            clearOpponentData();
            switchScreen(currentArea);
            setTimeout(() => {
                enableButtons('.dynamic-button, .leave');
                updateTownButtons();
            }, 2500);
        };
    });
});

// the dynamic button changes depending on certain conditions (ie. battleSetup())
// has various options to deal with encounters.. enables buttons for gym and trainer battle
dynamicButton.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === 'Attack') {
            disableButtons('.dynamic-button, .switch-pokemon, .leave, .use-potion');
            switch (encounter) {
                case "wildpokemon":
                    resolveBattle(wildPokemonFound);
                    break;
                case "trainer":
                    resolveBattle(oppParty);
                    break;
                case "gym":
                    resolveBattle(oppParty);
                    break;
                case "elite":
                    resolveBattle(oppParty);
            };
        }
        else if (button.textContent === 'Throw Pokéball') {
            disableButtons('.dynamic-button, .use-potion, .switch-pokemon');
            throwPokeball(wildPokemonFound);
        }
        else if (button.textContent === 'Challenge' || button.textContent === 'Accept Challenge') {
            clearMessages();
            switch (button.textContent) {
                case "Challenge":
                    setTimeout(() => {
                        updateImageElements('leader');
                        leaderTextElement.textContent = `${oppName} sent out ${oppCurrentPokemon.name}`;
                        showMessageBox('leader');
                        updateBattleDisplay(encounter);
                    }, 2500);
                    break;
                case "Accept Challenge":
                    setTimeout(() => {
                        updateImageElements('trainer');
                        opponentTextElement.textContent = `Trainer sent out ${oppCurrentPokemon.name}`;
                        showMessageBox('opponent');
                        updateBattleDisplay(encounter);
                    }, 2500);
                    break;
            };
            setTimeout(() => {
                updateImageElements('player');
                playerTextElement.forEach(p => {
                    p.textContent = `${characterModel.name} sent out ${currentPokemon.name}!`;
                    showMessageBox('player');
                });
                updateBattleDisplay();
            }, 500);
            dynamicButtonTextElement.forEach(button => {
                button.textContent = "Attack";
            });
            disableButtons('.leave, .dynamic-button');
            setTimeout(() => {
                updateSwitchPokemonButton("battle");
                updatePotionButton();
                enableButtons('.dynamic-button');
            }, 4000);
        }
        else if (button.textContent === "Accept Badge") {
            const foundArea = areas.find((area) => area.location === currentArea)
            foundArea.completed = true;
            getBadge(foundArea.badge);
            enableButtons('.leave');
            disableButtons('.dynamic-button, .use-potion, .switch-pokemon');
        }
        else if (button.textContent === "Accept Defeat") {
            const eliteFourName = eliteFourStatus.find(elite => elite.name === oppName)
            eliteFourName.completed = true;
            disableButtons(`.elite-four-button.${oppName.toLowerCase()}`)
            if (eliteFourStatus.every(elite => elite.completed)) {
                document.querySelector('#game-clear-button').classList.add('active');
            }
            enableButtons('.leave');
            disableButtons('.dynamic-button, .use-potion, .switch-pokemon');
        };
    });
});


switchPokemonButton.forEach((button) => {
    button.addEventListener('click', () => {
        switchPokemon();
        updatePartyDisplay();
        updatePotionButton();
    });
});

useRareCandy.addEventListener('click', () => {
    disableButtons('.use-rare-candy');
    const rareCandy = items.find(item => item.name === "rarecandy");
    if (rareCandy.quantity > 0) {
        currentPokemon.xp += 1;
        rareCandy.quantity -= 1;
    }
    updateXP(currentPokemon);
    updatePartyDisplay();
    updateItemDisplay();
    setTimeout(() => {
        if (rareCandy.quantity <= 0) {
            rareCandy.quantity = 0;
            disableButtons('.use-rare-candy');
        } else {
            enableButtons('.use-rare-candy');
        }
    }, 200);
});

healButton.addEventListener('click', () => {
    disableButtons('.poke-button.heal');
    heal();
    setTimeout(() => {
        enableButtons('.poke-button.heal');
    }, 5000);
});

checkCollection.addEventListener('click', () => {
    switchScreen('pokecenter-collection-box')
    updateCollectionWindow();
    setTimeout(() => {
        leaveButtonTextElement.forEach(button => {
            button.textContent = 'Leave Collection';
        });
    }, 1500);
    disableButtons('.pokemon-collection-button, .release-pokemon');
    setTimeout(() => {
        enableButtons('.pokemon-collection-button, .release-pokemon');
    }, 2500);
});


gameClearButton.addEventListener('click', () => {
    switchScreen('gameCleared')
});

eliteFourButton.forEach((button) => {
    clearOpponentData();
    button.addEventListener('click', () => {
        battleSetup(button.textContent);
        disableButtons('.use-potion, .switch-pokemon, .dynamic-button, .leave');
        setTimeout(() => {
            enableButtons('.dynamic-button, .leave');
        }, 7000);
    });
});

usePotion.forEach((button) => {
    button.addEventListener('click', () => {
        disableButtons('.use-potion');
        if (currentPokemon.hp > currentPokemon.maxhp) {
            currentPokemon.hp = currentPokemon.maxhp;
            disableButtons('.use-potion');
        } else {
            currentPokemon.hp += 20;
            potions.quantity -= 1;
            if (currentPokemon.hp > currentPokemon.maxhp) {
                currentPokemon.hp = currentPokemon.maxhp;
                disableButtons('.use-potion');
            };
        };
        updatePartyDisplay();
        updateItemDisplay();
        updateBattleDisplay();
        setTimeout(() => {
            updatePotionButton()
        }, 200);
    });
});

releasePokemonButton.addEventListener('click', () => {
    document.querySelector('.release-warning').classList.add('active');
});

cancelReleaseButton.addEventListener('click', () => {
    document.querySelector('.release-warning').classList.remove('active');
});

okReleaseButton.addEventListener('click', () => {
    const collectionLength = collection.length;
    const collectionReleased = Map.groupBy(collection, releasedPokemon => releasedPokemon.name);

    const pokemonToKeep = Array.from(collectionReleased, ([_, copies]) => {
        if (copies.length === 1) return copies[0];
        return copies.reduce((max, current) => {
            if (max.xp > current.xp) return max;
            if (max.xp < current.xp) return current;
            return max;
        });
    });

    let writeIndex = 0;
    for (let i = 0; i < collection.length; i++) {
        if (pokemonToKeep.includes(collection[i])) {
            collection[writeIndex] = collection[i]
            writeIndex++;
        }
    }
    collection.length = pokemonToKeep.length;

    const removedPokemon = collectionLength - pokemonToKeep.length;
    rareCandy.quantity += removedPokemon;
    updateCollectionWindow();
    updatePartyDisplay();
    updateItemDisplay();
    document.querySelector('.release-warning').classList.remove('active');
});
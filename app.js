/*---------------------------------- Save Function -------------------------------------*/
let loadedState = loadGameState();

function saveGameState() {
    gameState[2] = areas
        .filter(area => area.completed === true)
        .map(area => ({ location: area.location }));
    localStorage.setItem('gameState', JSON.stringify(gameState));
}

function loadGameState() {
    const savedState = localStorage.getItem('gameState');
    if (!savedState) return null;
    return JSON.parse(savedState);
};

function updateGameState() {
    gameState[0] = party;
    gameState[1] = collection;
    gameState[3] = eliteFourStatus;
    gameState[4] = items;
    gameState[5] = badges;
    gameState[6] = characterModel;
    gameState[7] = currentArea;
    gameState[8] = activeSlot;
    gameState[9] = partyCurrentIndex;
    gameState[10] = nextUniqueID;
    gameState[11] = currentPokemon;
};

/*-------------------- Game Speed Change Function ----------------------*/

let speedMultiplier = 1;

function gameTimeout(callback, delay) {
    return setTimeout(callback, delay * speedMultiplier);
}

function toggleGameSpeed() {
    switch (speedMultiplier) {
        case 1:
            speedMultiplier = 0.5;
            break;
        case 0.5:
            speedMultiplier = 0.25;
            break;
        case 0.25:
            speedMultiplier = 1;
            break;
    }
    document.documentElement.style.setProperty('--speed-multiplier', speedMultiplier);
    const button = document.getElementById('speed-toggle');
    switch (speedMultiplier) {
        case 1:
            button.textContent = 'x1';
            break;
        case 0.5:
            button.textContent = 'x2';
            break;
        case 0.25:
            button.textContent = 'x4';
            break;
    }
}


/*------------------- Sound Toggle/Variables/Functions -----------------*/

const muteMusicButton = document.querySelector('#music-on img');
const muteSoundButton = document.querySelector('#sound-on img');

let musicEnabled = true;
let soundEnabled = true;
let currentMusic = null;

const audioElements = {
    gameClear: document.getElementById('game-clear'),
    trainerBattle: document.getElementById('trainer-music'),
    celadonCity: document.getElementById('celadon'),
    pewterCity: document.getElementById('pewter'),
    gymBattle: document.getElementById('gym-battle'),
    title: document.getElementById('title'),
    cinnabarIsland: document.getElementById('cinnabar'),
    indigoPlateau: document.getElementById('indigo'),
    palletTown: document.getElementById('pallet'),
    wildpokemon: document.getElementById('wild-pokemon'),
    vermilionCity: document.getElementById('vermillion'),
    gymVictory: document.getElementById('gym-victory'),
    starter: document.getElementById('starter'),
    ceruleanCity: document.getElementById('cerulean'),
    pokecenter: document.getElementById('pokecenter'),
    claimVictory: document.getElementById('claim-victory'),
    trainerVictory: document.getElementById('trainer-victory'),
    badge: document.getElementById('badge'),
    caughtPokemon: document.getElementById('caught-pokemon'),
    evolve: document.getElementById('evolve'),
    heal: document.getElementById('heal'),
    attack: document.getElementById('attack'),
    missedAttack: document.getElementById('missed-attack'),
    poof: document.getElementById('pokeball-poof'),
    pokeballthrow: document.getElementById('pokeball-throw'),
    faint: document.getElementById('faint'),
    buttonclick: document.getElementById('button-clicked'),
    wildVictory: document.getElementById('wild-victory'),
    takein: document.getElementById('pokeball-take-in'),
    pokemoncry: document.getElementById('pokemon-cry'),
    eliteBattle: document.getElementById('elite-battle'),
    gameOver: document.getElementById('game-over')
};

muteMusicButton.addEventListener('click', () => {
    if (musicEnabled) {
        musicEnabled = false;
        muteMusicButton.src = 'images/music-off.png';
        muteMusicButton.alt = 'music toggle';
    } else {
        musicEnabled = true;
        currentMusic.volume = 0.03
        muteMusicButton.src = 'images/music-on.png';
        muteMusicButton.alt = 'music toggle';
    }
    if (!musicEnabled && currentMusic) {
        currentMusic.volume = 0;
    }
});

muteSoundButton.addEventListener('click', () => {
    if (soundEnabled) {
        soundEnabled = false;
        muteSoundButton.src = 'images/sound-off.png';
        muteSoundButton.alt = 'sound toggle';
    } else {
        soundEnabled = true;
        muteSoundButton.src = 'images/sound-on.png';
        muteSoundButton.alt = 'sound toggle';
    }
});

function playMusic(music) {
    if (currentMusic) {
        currentMusic.pause();
        currentMusic.currentTime = 0;
    }
    currentMusic = audioElements[music]
    currentMusic.play()

    if (!musicEnabled) {
        currentMusic.volume = 0
    } else {
        currentMusic.volume = 0.03
    }
}

function playSound(sound) {
    if (!soundEnabled) return;

    if (soundEnabled) {
        currentSound = audioElements[sound];
        currentSound.play()
        currentSound.volume = 0.1
    };
};

function onGameStart() {
    playMusic('title');
}

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
const okReleaseButton = document.querySelector('.ok-warning.release');
const cancelReleaseButton = document.querySelector('.cancel-warning.release');
const titleScreenButton = document.querySelector('#title-screen-button');
const resetGameButton = document.querySelector('#clear-save-data');
const okResetButton = document.querySelector('.ok-warning.reset');
const cancelResetButton = document.querySelector('.cancel-warning.reset');
const battleTextElement = document.querySelectorAll('.battle-message');

const areas = [
    { location: "palletTown", music: 'palletTown', completed: false, type: "normal", condition: () => party.length >= 3 },
    { location: "pewterCity", music: 'pewterCity', completed: false, badge: 'Boulder', type: "rock", condition: () => badges.includes('Boulder') },
    { location: "ceruleanCity", music: 'ceruleanCity', completed: false, badge: 'Cascade', type: "water", condition: () => badges.includes('Cascade') },
    { location: "vermilionCity", music: 'vermilionCity', completed: false, badge: 'Thunder', type: ["electric", "fighting"], condition: () => badges.includes('Thunder') },
    { location: "celadonCity", music: 'celadonCity', completed: false, badge: 'Rainbow', type: ["bug", "grass"], condition: () => badges.includes('Rainbow') },
    { location: "fuchsiaCity", music: 'ceruleanCity', completed: false, badge: 'Soul', type: ["poison", "fairy"], condition: () => badges.includes('Soul') },
    { location: "saffronCity", music: 'pewterCity', completed: false, badge: 'Marsh', type: ["psychic", "ghost"], condition: () => badges.includes('Marsh') },
    { location: "cinnabarIsland", music: 'cinnabarIsland', completed: false, badge: 'Volcano', type: "fire", condition: () => badges.includes('Volcano') },
    { location: "viridianCity", music: 'pewterCity', completed: false, badge: 'Earth', type: "ground", condition: () => badges.includes('Earth') },
    { location: "indigoPlateau", music: 'indigoPlateau', completed: false, type: ["dragon", "special"], condition: () => eliteFourStatus.every(elite => elite.completed) }
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

const collection = [];

/*-------------------Variables-------------------*/

let currentArea = null;
let nextArea = null;
let lastArea = null;
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
let attackTimeOut;
let saveGameInterval;

let gameState = [
    party,
    collection,
    [],
    eliteFourStatus,
    items,
    badges,
    characterModel,
    currentArea,
    activeSlot,
    partyCurrentIndex,
    nextUniqueID,
    currentPokemon
];

/*---------------------------------- Core Functions -----------------------------------*/

function assignUniqueID() {
    const newID = nextUniqueID;
    nextUniqueID++;
    return newID;
};

// function to reset game state on Play Again or Try Again
function resetGame() {
    party.length = 0;
    oppParty.length = 0;
    collection.length = 0;
    items.forEach(item => {
        switch (item.name) {
            case "potion":
                item.quantity = 0;
                break;
            case "pokeball":
                item.quantity = 0;
                break;
            case "rarecandy":
                item.quantity = 0;
                break;
            case "gold":
                item.quantity = 0;
                break;
        }
    });

    badges.forEach(badge => {
        document.querySelector(`.${badge}`).classList.remove('active');
    });

    badges.length = 0;

    areas.forEach(area => {
        area.completed = false;
    });

    eliteFourStatus.forEach(elite => {
        elite.completed = false;
    });

    currentArea = null;
    nextArea = null;
    lastArea = null;
    activeSlot = '';
    currentPokemon = {};
    characterModel = {};

    clearOpponentData();
    updatePartyDisplay();
    updateItemDisplay();

    localStorage.clear();
    if (currentMusic) {
        currentMusic.pause();
    }
    document.querySelector('.middle-section').classList.remove('active');
    document.querySelector('.left-section').classList.remove('active');
    document.querySelector('.right-section').classList.remove('active');
    document.querySelector('.middle-section').classList.remove('active');
    document.querySelector('.header-box').classList.remove('active');
    document.querySelector('.title-screen').classList.add('active');
    document.querySelector('.reset-warning').classList.remove('active');
    loadedState = null;

    clearInterval(saveGameInterval);
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
    battleTextElement.forEach(p => {
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
    removePokeballPokemon('opponent');
    removePokeballPokemon('player');
    removePokeballPokemon('leader');
};

// function to switch main area screen  --- using to enable/disable buttons with timeouts for simple transitions
function switchScreen(screenClass) {
    document.querySelectorAll('.main-screen').forEach(screen => screen.classList.remove('active'));
    document.querySelector(`.${screenClass}`).classList.add('active');
    if (screenClass === 'start' || screenClass === 'character') {
        disableButtons('#trainer-battle, #gym, #poke-mart, #poke-center, #search-for-pokemon, .switch-pokemon, .use-rare-candy');
    } else {
        if (screenClass === 'palletTown' || screenClass === 'indigoPlateau') {
            currentArea = screenClass;
            disableButtons('#trainer-battle, #gym, #poke-mart, #poke-center, #search-for-pokemon, .next-area, .last-area, .switch-pokemon, .use-rare-candy');
            gameTimeout(() => {
                enableButtons('#search-for-pokemon, #poke-center, #poke-mart, .next-area, .last-area');
                updateRareCandyButton();
                updateSwitchPokemonButton();
                updateArea();
            }, 2500);
            const area = areas.find(area => area.location === currentArea);
            playMusic(`${area.music}`)
        }
        else if (screenClass === "pokemart" || screenClass === "pokecenter" || screenClass === "gameCleared" ||
            screenClass === "gameOver" || screenClass === 'start' || screenClass === 'pokecenter-collection-box') {
            disableButtons('#trainer-battle, #gym, #poke-mart, #poke-center, #search-for-pokemon, .next-area, .last-area, .poke-button, .leave, .switch-pokemon, .use-rare-candy');
            gameTimeout(() => {
                enableButtons('.poke-button, .leave');
            }, 2500);
        }
        else if (screenClass === 'gym' || screenClass === 'battle') {
            disableButtons('.switch-pokemon.party, .use-rare-candy, .use-potion, #trainer-battle, #gym, #poke-mart, #poke-center, #search-for-pokemon');
        } else {
            currentArea = screenClass;
            disableButtons('#trainer-battle, #gym, #poke-mart, #poke-center, #search-for-pokemon, .next-area, .last-area, .switch-pokemon, .use-rare-candy');
            gameTimeout(() => {
                enableButtons('#trainer-battle, #poke-center, #poke-mart, #search-for-pokemon, .next-area, .last-area');
                updateRareCandyButton();
                updateSwitchPokemonButton();
                updateGymButton();
                updateArea();
            }, 2500);
            const area = areas.find(area => area.location === currentArea);
            playMusic(`${area.music}`)
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
    if (itemIs === "Buy Poké Ball" || itemIs === "Buy 5 Poké Balls") {
        itemIs = "pokeball"
    } else {
        itemIs = "potion"
    };
    const gold = items.find(item => item.name === 'gold');
    const item = items.find(item => item.name === itemIs);
    const cost = item.cost;

    if (gold && gold.quantity >= cost) {
        if (itemName.includes('5') && gold.quantity >= cost * 5) {
            gold.quantity -= cost * 5;
            item.quantity += 5;
            messageBox.forEach(box => box.textContent = `Purchased 5 ${item.msgName}s`);
        } else {
            gold.quantity -= cost;
            item.quantity += 1;
            messageBox.forEach(box => box.textContent = `Purchased 1 ${item.msgName}`);
        }
        updateItemDisplay();
        showMessageBox('pokemart');
    }
    else {
        messageBox.forEach(box => box.textContent = "Not Enough Gold!");
        showMessageBox('pokemart');
    };
    updatePotionButton();
};

// function to update display of pokemon party
function updatePartyDisplay() {
    activeSlot = `slot-${partyCurrentIndex + 1}`;
    document.querySelectorAll('.partyMember').forEach(slot => slot.classList.remove('active'));
    document.querySelector(`.partyMember.${activeSlot}`).classList.add('active');
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
            xpElement.textContent = pokemon.xp;

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
            gameTimeout(() => {
                opponentTextElement.classList.add('fading');
                gameTimeout(() => {
                    opponentTextElement.classList.remove('fading', 'active');
                }, 1200);
            }, 800);
            break;
        case "leader":
            leaderTextElement.classList.add('active');
            gameTimeout(() => {
                leaderTextElement.classList.add('fading');
                gameTimeout(() => {
                    leaderTextElement.classList.remove('fading', 'active');
                }, 1200);
            }, 800);
            break;
        case "player":
            playerTextElement.forEach(p => p.classList.add('active'));
            gameTimeout(() => {
                playerTextElement.forEach(p => p.classList.add('fading'));
                gameTimeout(() => {
                    playerTextElement.forEach(p => p.classList.remove('fading', 'active'));
                }, 1000);
            }, 4000);
            break;
        case "battle":
            battleTextElement.forEach(p => p.classList.add('active'));
            gameTimeout(() => {
                battleTextElement.forEach(p => p.classList.add('fading'));
                gameTimeout(() => {
                    battleTextElement.forEach(p => p.classList.remove('fading', 'active'));
                }, 1200);
            }, 800);
            break;
        case "message":
            messageBox.forEach(box => box.classList.add('active'));
            gameTimeout(() => {
                messageBox.forEach(box => box.classList.add('fading'));
                gameTimeout(() => {
                    messageBox.forEach(box => box.classList.remove('active', 'fading'));
                }, 500);
            }, 1500);
            break;
        case "pokemart":
            if (!messageBox.forEach(box => box.classList.contains('fading')) || !messageBox.forEach(box => box.classList.contains('active'))) {
                messageBox.forEach(box => box.classList.add('active'));
                gameTimeout(() => {
                    messageBox.forEach(box => box.classList.add('fading'));
                    gameTimeout(() => {
                        messageBox.forEach(box => box.classList.remove('fading', 'active'));
                    }, 500);
                }, 1000);

            };
            break;
    };
};

function showMessagePerm(type) {
    gameTimeout(() => {
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
            case "battle":
                battleTextElement.forEach(p => p.classList.add('active'));
                break;
        };
    }, 2000);
};

function clearMessages() {
    leaderTextElement.classList.remove('active');
    opponentTextElement.classList.remove('active');
    playerTextElement.forEach(p => p.classList.remove('active'));
    battleTextElement.forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.reward-message-box').forEach(box => {
        box.classList.remove('active');
    });
};

function clearBattleDisplay(type) {
    if (type === 'opponent') {
        opponentPokemonTextElement.classList.remove('active');
    } else if (type === 'leader') {
        leaderPokemonTextElement.classList.remove('active');
    } else if (type === 'player') {
        playerPokemonTextElement.forEach(p => {
            p.classList.remove('active');
        });
    };
};

function clearPokemonFromBattle(type) {
    if (type === 'opponent') {
        leaderPokemonImageElement.src = '';
        leaderPokemonImageElement.alt = '';
    } else if (type === 'leader') {
        opponentPokemonImageElement.src = '';
        opponentPokemonImageElement.alt = '';
    } else if (type === 'player') {
        playerPokemonImageElement.forEach(img => {
            img.src = '';
            img.alt = '';
        });
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
                    battleTextElement.forEach(p => {
                        p.textContent = `${currentPokemon.name} attacked for ${pokemonAttack} damage!`;
                        damageFlashDisplay('opponent');
                        attackAnimate('player');
                        playSound('attack');
                        showMessageBox('battle');
                    });
                    break;
                case false:
                    battleTextElement.forEach(p => {
                        p.textContent = `${currentPokemon.name} missed ${wildPokemonFound.name}!`;
                        attackAnimate('player');
                        playSound('missedAttack');
                        showMessageBox('battle');
                    });
                    break;
            };
            break;
        case "opponent":
            switch (pokemonAttack > 0) {
                case true:
                    if (encounter === 'wildpokemon') {
                        battleTextElement.forEach(p => {
                            p.textContent = `Wild ${wildPokemonFound.name} attacked for ${pokemonAttack} damage!`;
                        });
                    } else {
                        battleTextElement.forEach(p => {
                            p.textContent = `${oppCurrentPokemon.name} attacked for ${pokemonAttack} damage!`;
                        });
                    };
                    damageFlashDisplay('player');
                    attackAnimate('opponent');
                    playSound('attack');
                    showMessageBox('battle');
                    break;
                case false:
                    if (encounter === 'wildpokemon') {
                        battleTextElement.forEach(p => {
                            p.textContent = `Wild ${wildPokemonFound.name} missed ${currentPokemon.name}!`;
                        });
                    } else {
                        battleTextElement.forEach(p => {
                            p.textContent = `${oppCurrentPokemon.name} missed ${currentPokemon.name}!`;
                        });
                    };
                    showMessageBox('battle');
                    attackAnimate('opponent');
                    playSound('missedAttack');
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
    const rareCandy = items.find(item => item.name === 'rarecandy');
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
    const potions = items.find(item => item.name === 'potion');
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
function addPokeballPokemon(pokemon) {
    if (pokemon === 'leader') {
        leaderPokemonImageElement.src = 'images/pokeball.png';
        leaderPokemonImageElement.alt = 'pokeball';
        leaderPokemonImageElement.classList.add('pokeball');
    }
    else if (pokemon === 'opponent') {
        opponentPokemonImageElement.src = 'images/pokeball.png';
        opponentPokemonImageElement.alt = 'pokeball';
        opponentPokemonImageElement.classList.add('pokeball');
    }
    else if (pokemon === 'player') {
        playerPokemonImageElement.forEach(e => {
            e.src = 'images/pokeball.png';
            e.alt = 'pokeball';
            e.classList.add('pokeball');
        });
    };
};

function removePokeballPokemon(pokemon) {
    if (pokemon === 'leader') {
        leaderPokemonImageElement.src = '';
        leaderPokemonImageElement.alt = '';
        leaderPokemonImageElement.classList.remove('pokeball');
    } else if (pokemon === 'opponent') {
        opponentPokemonImageElement.src = '';
        opponentPokemonImageElement.alt = '';
        opponentPokemonImageElement.classList.remove('pokeball');
    }
    else if (pokemon === 'player') {
        playerPokemonImageElement.forEach(e => {
            e.src = '';
            e.alt = '';
            e.classList.remove('pokeball');
        });
    };
};

function damageFlashDisplay(type) {
    switch (type) {
        case "player":
            playerPokemonTextElement.forEach(e => {
                e.classList.add('damaged');
            });
            gameTimeout(() => {
                playerPokemonTextElement.forEach(e => {
                    e.classList.remove('damaged');
                });
            }, 1000);
            break;
        case "opponent":
            opponentPokemonTextElement.classList.add('damaged');
            leaderPokemonTextElement.classList.add('damaged');
            gameTimeout(() => {
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
            gameTimeout(() => {
                playerPokemonImageElement.forEach(e => {
                    e.classList.remove('player-attack');
                });
            }, 1000);
            break;
        case "opponent":
            opponentPokemonImageElement.classList.add('opponent-attack');
            leaderPokemonImageElement.classList.add('opponent-attack');
            gameTimeout(() => {
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
        case "opponent":
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
        clearTimeout(attackTimeOut);
        disableButtons('.switch-pokemon.battle, .leave, .dynamic-button, .use-potion')
        if (encounter) {
            gameTimeout(() => {
                playSound('pokeballthrow')
                gameTimeout(() => {
                    clearBattleDisplay('player');
                    addPokeballPokemon('player');
                    playSound('takein');
                    gameTimeout(() => {
                        removePokeballPokemon('player');
                        gameTimeout(() => {
                            playSound('pokeballthrow');
                            addPokeballPokemon('player');
                            gameTimeout(() => {
                                playSound('poof');
                                removePokeballPokemon('player');
                                updateImageElements('player');
                                gameTimeout(() => {
                                    if (encounter === 'wildpokemon') {
                                        enableButtons('.leave')
                                    };
                                    enableButtons('.dynamic-button');
                                    updateSwitchPokemonButton('battle');
                                    updatePotionButton();
                                }, 2000);
                                battleTextElement.forEach(p => {
                                    p.textContent = `${characterModel.name} switched to ${currentPokemon.name}!`;
                                    showMessageBox('battle');
                                    updateBattleDisplay();
                                });
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 800);
            }, 400);
        }
        updatePartyDisplay();
    } else if (currentPokemon.hp > 0) {
        return;
    } else {
        switchScreen('gameOver');
        playMusic('gameOver');
        resetGame();
    };
};

function switchPokemonOpp() {
    const healthCheck = partyHealthStatus(oppParty, oppPartyCurrentIndex);
    if (healthCheck !== oppPartyCurrentIndex && healthCheck !== 'false') {
        oppPartyCurrentIndex = healthCheck;
        oppCurrentPokemon = oppParty[oppPartyCurrentIndex];
        clearTimeout(attackTimeOut);
        disableButtons('.switch-pokemon.battle, .leave, .dynamic-button, .use-potion')
        if (encounter === 'gym' || encounter === 'elite') {
            gameTimeout(() => {
                playSound('pokeballthrow')
                gameTimeout(() => {
                    clearBattleDisplay('leader');
                    addPokeballPokemon('leader');
                    playSound('takein');
                    gameTimeout(() => {
                        removePokeballPokemon('leader');
                        gameTimeout(() => {
                            playSound('pokeballthrow');
                            addPokeballPokemon('leader');
                            gameTimeout(() => {
                                playSound('poof');
                                removePokeballPokemon('leader');
                                updateImageElements('leader');
                                battleTextElement.forEach(p => {
                                    p.textContent = `${oppName} sent out ${oppCurrentPokemon.name}`;
                                });
                                showMessageBox('battle');
                                updateBattleDisplay(encounter);
                                gameTimeout(() => {
                                    enableButtons('.dynamic-button');
                                    updateSwitchPokemonButton('battle');
                                    updatePotionButton();
                                }, 2000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 800);
            }, 400);
        } else {
            gameTimeout(() => {
                playSound('pokeballthrow')
                gameTimeout(() => {
                    clearBattleDisplay('opponent');
                    addPokeballPokemon('opponent');
                    playSound('takein');
                    gameTimeout(() => {
                        removePokeballPokemon('opponent');
                        gameTimeout(() => {
                            playSound('pokeballthrow');
                            addPokeballPokemon('opponent');
                            gameTimeout(() => {
                                playSound('poof');
                                removePokeballPokemon('opponent');
                                updateImageElements('opponent');
                                battleTextElement.forEach(p => {
                                    p.textContent = `Trainer sent out ${oppCurrentPokemon.name}`;
                                });
                                showMessageBox('battle');
                                updateBattleDisplay(encounter);
                                enableButtons('.dynamic-button');
                                updateSwitchPokemonButton('battle');
                                updatePotionButton();
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 800);
            }, 400);
        };
    };
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
    playSound('evolve')
};

// fuction that runs when currentPokemon gains xp (eevee is a special case with 3 options so i set random number 1-3)
function updateXP() {
    if (currentPokemon.name === "Eevee") {
        if (currentPokemon.xp >= currentPokemon.maxxp) {
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
        if (currentPokemon.xp >= currentPokemon.maxxp && evolvedForm) {
            evolution(currentPokemon, evolvedForm);
        }
        else if (currentPokemon.xp >= currentPokemon.maxxp && !evolvedForm) {
            currentPokemon.xp = currentPokemon.maxxp
            currentPokemon.maxhp += 30;
        }
    }
    updatePartyDisplay();
    updateGameState();
    saveGameState();
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
        gameTimeout(() => {
            opponentTextElement.textContent = trainerIntro;
            showMessagePerm('opponent');
            gameTimeout(() => {
                playerTextElement.forEach(p => {
                    p.textContent = `A Trainer has challenged you with ${oppParty.length} Pokémon!`;
                    showMessagePerm('player');
                });
            }, 1000);
        }, 2000);
        updateImageElements('player-image');
    }
    else if (battleType === 'Search For Wild Pokémon') {
        updateImageElements('player-image');
        dynamicButtonTextElement.forEach(button => {
            button.textContent = "Attack";
        });
        encounter = 'wildpokemon';
        gameTimeout(() => {
            playSound('pokeballthrow')
            gameTimeout(() => {
                addPokeballPokemon('player');
                gameTimeout(() => {
                    playSound('poof');
                    removePokeballPokemon('player');
                    battleTextElement.forEach(p => {
                        p.textContent = `${characterModel.name} sent out ${currentPokemon.name}!`;
                        showMessageBox('battle');
                        updateImageElements('player');
                    });
                    gameTimeout(() => {
                        playerPokemonTextElement.forEach(p => {
                            p.innerHTML = `<pre>${currentPokemon.name}     HP: ${currentPokemon.hp}</pre>`
                            p.classList.add('active');
                        });
                        opponentPokemonTextElement.innerHTML = `<pre>${wildPokemonFound.name}     HP: ${wildPokemonFound.hp}</pre>`;
                        opponentPokemonTextElement.classList.add('active');
                        gameTimeout(() => {
                            enableButtons('.dynamic-button, .leave');
                            updatePotionButton();
                            updateSwitchPokemonButton('battle');
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 800);
        }, 6000);
        wildPokemonFound = structuredClone(chooseRandomPokemon());
        if (wildPokemonFound) {
            switchScreen('battle');
            gameTimeout(() => {
                opponentPokemonImageElement.src = wildPokemonFound.image
                opponentPokemonImageElement.alt = wildPokemonFound.name
                opponentPokemonImageElement.classList.add('wildpokemon-image-animate');
                gameTimeout(() => {
                    opponentPokemonImageElement.classList.remove('wildpokemon-image-animate');
                }, 4000)
            }, 1000);
            gameTimeout(() => {
                playerTextElement.forEach(p => {
                    p.textContent = `A wild ${wildPokemonFound.name} appeared!`;
                });
                showMessageBox('player');
            }, 4200);
            gameTimeout(() => {
                playSound('pokemoncry')
            }, 4000);
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
            oppParty = structuredClone(foundGymLeader.party);
            oppLossMessage = foundGymLeader.loss;
            leaderImageElement.src = foundGymLeader.image;
            leaderImageElement.alt = foundGymLeader.name;
            gameTimeout(() => {
                leaderTextElement.textContent = foundGymLeader.intro
                showMessagePerm('leader');
            }, 2000);
        } else {
            encounter = 'elite';
            const foundEliteMember = eliteFour.find(member => member.name === battleType);
            oppName = foundEliteMember.name;
            oppParty = structuredClone(foundEliteMember.party);
            oppLossMessage = foundEliteMember.loss;
            leaderImageElement.src = foundEliteMember.image;
            leaderImageElement.alt = foundEliteMember.name;
            gameTimeout(() => {
                leaderTextElement.textContent = foundEliteMember.intro;
                showMessagePerm('leader');
            }, 2000);
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
            gameTimeout(() => {
                oppCurrentPokemon.hp -= currentPokemonAttack;
                updateBattleDisplay(encounter);
                battleMessageDisplay('player', currentPokemonAttack);
                if (oppCurrentPokemon.hp <= 0) {
                    resolve(oppCurrentPokemon);
                    return;
                }
            }, 2500);
        } else {
            oppCurrentPokemon.hp -= currentPokemonAttack;
            updateBattleDisplay(encounter);
            battleMessageDisplay('player', currentPokemonAttack);
            if (oppCurrentPokemon.hp <= 0) {
                resolve(oppCurrentPokemon);
                return;
            }
            gameTimeout(() => {
                currentPokemon.hp -= opponentPokemonAttack;
                updateBattleDisplay();
                battleMessageDisplay('opponent', opponentPokemonAttack);
                if (currentPokemon.hp <= 0) {
                    resolve(currentPokemon);
                    return;
                }
            }, 2500);

        };
        updatePartyDisplay();
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

    if (faintedPokemon === currentPokemon) {
        currentPokemon.hp = 0;
        currentPokemon.xp += 1;
        clearTimeout(attackTimeOut);
        updateXP();
        updateBattleDisplay();
        gameTimeout(() => {
            battleTextElement.forEach(p => {
                p.textContent = `${currentPokemon.name} fainted!`;
                playSound('faint');
                showMessageBox('battle');
            });
            gameTimeout(() => {
                switchPokemon();
            }, 1000);
        }, 1000);

    } else if (faintedPokemon === oppCurrentPokemon) {

        if (encounter === 'wildpokemon') {
            oppCurrentPokemon.hp = 0
            updateBattleDisplay(encounter);
            clearTimeout(attackTimeOut);
            gameTimeout(() => {
                playerTextElement.forEach(p => {
                    p.textContent = `Wild ${wildPokemonFound.name} fainted!`;
                });
                playSound('faint');
                playMusic('wildVictory');
                showMessagePerm('player');
                gameTimeout(() => {
                    clearBattleDisplay('player');
                    clearBattleDisplay('opponent');
                }, 2000);
                gameTimeout(() => {
                    enableButtons('.dynamic-button');
                }, 4000);
            }, 500);
            currentPokemon.xp += 1;
            updateXP(currentPokemon);
            dynamicButtonTextElement.forEach(button => {
                button.textContent = "Use Poké Ball";
            });
            leaveButtonTextElement.forEach(button => {
                button.textContent = 'Leave';
            });
            gameTimeout(() => {
                getRewards('wildpokemon');
            }, 1000);

        } else {
            if (oppPartyCurrentIndex === oppParty.length - 1) {

                oppCurrentPokemon.hp = 0;
                clearTimeout(attackTimeOut);
                updateBattleDisplay(encounter);
                if (encounter === "trainer") {
                    currentPokemon.xp += 2;
                } else {
                    currentPokemon.xp += 4;
                }

                updateXP(currentPokemon);
                gameTimeout(() => {
                    battleTextElement.forEach(p => {
                        p.textContent = `${oppCurrentPokemon.name} fainted!`;
                    });
                    showMessageBox('battle');
                    playSound('faint');
                    gameTimeout(() => {
                        clearBattleDisplay('leader');
                        clearPokemonFromBattle('opponent');
                        clearBattleDisplay('opponent');
                        clearPokemonFromBattle('leader');
                        clearBattleDisplay('player');
                        clearPokemonFromBattle('player');
                    }, 2000);
                }, 2500);


                if (encounter === 'gym' || encounter === 'elite') {
                    dynamicButtonTextElement.forEach(button => {
                        if (encounter === 'gym') {
                            button.textContent = "Accept Badge";
                        } else {
                            button.textContent = "Accept Defeat";
                        }
                    });
                    gameTimeout(() => {
                        playerTextElement.forEach(p => {
                            p.textContent = `You defeated ${oppName}! Congratulations!`;
                        });
                        showMessagePerm('player');
                        playMusic('gymVictory')
                        leaderTextElement.textContent = oppLossMessage;
                        showMessagePerm('leader');
                    }, 3000);
                    gameTimeout(() => {
                        enableButtons('.dynamic-button');
                    }, 6000);
                } else {
                    gameTimeout(() => {
                        playerTextElement.forEach(p => {
                            p.textContent = `Trainers party has been defeated.`;
                        });
                        showMessagePerm('player');
                        opponentTextElement.textContent = trainerLoss[Math.floor(Math.random() * 10)];
                        showMessagePerm('opponent');
                        playMusic('trainerVictory')
                        getRewards('trainer');
                        updateItemDisplay();
                    }, 3000);
                    gameTimeout(() => {
                        enableButtons('.leave');
                    }, 6000);
                }
            } else {
                oppCurrentPokemon.hp = 0;
                updateBattleDisplay(encounter);
                if (encounter === "trainer") {
                    currentPokemon.xp += 2;
                } else {
                    currentPokemon.xp += 4;
                }
                updateXP(currentPokemon);
                clearTimeout(attackTimeOut);
                gameTimeout(() => {
                    battleTextElement.forEach(p => {
                        p.textContent = `${oppCurrentPokemon.name} fainted!`;
                    });
                    showMessageBox('battle');
                    playSound('faint');
                    gameTimeout(() => {
                        switchPokemonOpp();
                    }, 1000);
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
    gameTimeout(() => {
        switch (rewardType) {
            case 'trainer':
                gold.quantity += randomGoldTrainer;
                rewardMessage.forEach(message => {
                    message.innerHTML = `You gained ${randomGoldTrainer} gold!`
                    messageBox.forEach(box => {
                        box.classList.add('active');
                    });
                });
                break;
            case 'gym':
                gold.quantity += randomGoldGym
                rewardMessage.forEach(message => {
                    message.innerHTML = `You gained ${randomGoldGym} gold!`
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
                    message.innerHTML = `You gained ${randomGoldElite} gold!`
                    messageBox.forEach(box => {
                        box.classList.add('active');
                    });
                });
                break;
        };
    }, 3000);
    updateItemDisplay();
};

// function that is called for when a wild pokemon is at 0hp and then checks for conditions
// makes sure you have pokeballs, or if you dont already have the pokemon, will also
// add pokemon to party or send to collection as needed
function throwPokeball() {
    clearTimeout(attackTimeOut);


    const pokeBall = items.find(item => item.name === 'pokeball');
    if (pokeBall.quantity < 1) {
        gameTimeout(() => {
            enableButtons('.leave');
        }, 2000);
        playerTextElement.forEach(p => {
            p.textContent = 'You ran out of Poké Balls!';
        });
        showMessagePerm('player');
    } else {
        gameTimeout(() => {
            enableButtons('.leave');
        }, 4000);
        clearBattleDisplay('opponent');
        playSound('takein')
        addPokeballPokemon('opponent');
        wildPokemonFound.id = assignUniqueID();
        party.push(wildPokemonFound);
        pokeBall.quantity -= 1;
        playerTextElement.forEach(p => {
            p.textContent = `You threw a Poké Ball at ${wildPokemonFound.name}, and caught it!`;
        });
        showMessagePerm('player');

        if (party.length > 6) {
            collection.push(party.pop());
            playerTextElement.forEach(p => {
                p.textContent = `You threw a Poké Ball at ${wildPokemonFound.name}, and caught it!,  It has been sent to Collection`;
            });
            showMessagePerm('player');
        };
        gameTimeout(() => {
            playSound('caughtPokemon');
        }, 200);
    };
    updatePartyDisplay();
    updateItemDisplay();
};

// function used when heal pokemon button is clicked in pokemon center 
function heal() {
    party.forEach(pokemon => pokemon.hp = pokemon.maxhp);
    currentPokemon = party[0];
    partyCurrentIndex = 0;
    updatePartyDisplay();
    messageBox.forEach(msg => {
        msg.textContent = "Party is at Full Health!";
    });
    showMessageBox('message');
};

/*-------------------Event Listeners-------------------*/

titleScreenButton.addEventListener('click', () => {
    playSound('buttonclick');
    document.querySelector('.middle-section').classList.add('active');
    document.querySelector('.left-section').classList.add('active');
    document.querySelector('.right-section').classList.add('active');
    document.querySelector('.middle-section').classList.add('active');
    document.querySelector('.header-box').classList.add('active');
    document.querySelector('.title-screen').classList.remove('active');
    if (loadedState) {
        gameState = loadedState;

        characterModel = gameState[6];
        currentArea = gameState[7];
        nextUniqueID = gameState[10];

        areas.forEach(area => {
            const savedArea = gameState[2].find(saved => saved.location === area.location);
            area.completed = savedArea ? savedArea.completed : false;
        });

        items.length = 0;
        items.push(...gameState[4]);
        eliteFourStatus.length = 0;
        eliteFourStatus.push(...gameState[3]);
        party.length = 0;
        party.push(...gameState[0]);
        collection.length = 0;
        collection.push(...gameState[1]);

        currentPokemon = party[0];
        partyCurrentIndex = 0;
        activeSlot = gameState[8];
        gameState[5].forEach(badge => {
            getBadge(badge);
        });

        updateNextArea(currentArea);
        updateLastArea(currentArea);
        updateItemDisplay();
        updatePartyDisplay();
        switchScreen(currentArea);

        clearInterval(saveGameInterval);
        saveGameInterval = setInterval(() => {
            updateGameState();
            saveGameState();
        }, 30000);
    } else {
        switchScreen('character');
        onGameStart();
    };
    eliteFourStatus.forEach(elite => {
        const isLorelei = eliteFourStatus[0].completed;
        const isBruno = eliteFourStatus[1].completed
        const isAgatha = eliteFourStatus[2].completed
        const isLance = eliteFourStatus[3].completed
        if (elite.completed) {
            disableButtons(`.elite-four-button.${elite.name.toLowerCase()}`);
        } else {
            console.log(eliteFourStatus)
            if (!isLorelei && !isBruno && !isAgatha && !isLance) {
                disableButtons(".elite-four-button");
                enableButtons(".elite-four-button.lorelei");
            } else if (isLorelei && !isBruno && !isAgatha && !isLance) {
                disableButtons(".elite-four-button");
                enableButtons(".elite-four-button.bruno");
            } else if (isLorelei && isBruno && !isAgatha && !isLance) {
                disableButtons(".elite-four-button");
                enableButtons(".elite-four-button.agatha");
            } else if (isLorelei && isBruno && isAgatha && !isLance) {
                disableButtons(".elite-four-button");
                enableButtons(".elite-four-button.lance");
            }
        }
    });
});

playAgainButton.forEach((button) => {
    button.addEventListener('click', () => {
        playSound('buttonclick');
        resetGame();
    });
});

pokeCenter.addEventListener('click', () => {
    playSound('buttonclick');
    switchScreen('pokecenter');
    playMusic('pokecenter');
});

pokeMart.addEventListener('click', () => {
    playSound('buttonclick');
    switchScreen('pokemart')
    playMusic('pokecenter');
});

pokeMartBuyButton.forEach((button) => {
    button.addEventListener('click', () => {
        playSound('buttonclick');
        buyItem(button.textContent);
        disableButtons('.poke-button.mart')
        gameTimeout(() => {
            enableButtons('.poke-button.mart');
        }, 1500);
    });
});

gym.addEventListener('click', (event) => {
    playSound('buttonclick');
    clearOpponentData();
    battleSetup(event.target.textContent);
    disableButtons('.use-potion, .switch-pokemon, .dynamic-button, .leave');
    gameTimeout(() => {
        enableButtons('.dynamic-button, .leave');
    }, 5500);
    playMusic('gymBattle')
});

searchForPokemon.addEventListener('click', (event) => {
    playSound('buttonclick');
    clearOpponentData();
    battleSetup(event.target.textContent);
    gameTimeout(() => {
        leaveButtonTextElement.forEach(button => {
            button.textContent = 'Run Away';
        });
    }, 1500);
    disableButtons('.dynamic-button, .leave, .switch-pokemon, .use-potion');
    playMusic('wildpokemon')
});

trainerBattle.addEventListener('click', (event) => {
    playSound('buttonclick');
    clearOpponentData();
    battleSetup(event.target.textContent);
    disableButtons('.use-potion, .switch-pokemon, .dynamic-button, .leave');
    gameTimeout(() => {
        enableButtons('.dynamic-button, .leave');
    }, 5500);
    playMusic('trainerBattle')
});

characterButton.forEach((character) => {
    character.addEventListener('click', (event) => {
        playSound('buttonclick');
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
        playMusic('starter');
    })
})

// handles selecting starter pokemon, setting initial item quantities and switching screen to
// first area "Pallet Town"
starterButton.forEach((starter) => {
    starter.addEventListener('click', (event) => {
        playSound('buttonclick');
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
        saveGameInterval = setInterval(() => {
            updateGameState();
            saveGameState();
        }, 30000);
    });
});

lastAreaButton.forEach((button) => {
    button.addEventListener('click', () => {
        playSound('buttonclick');
        updateLastArea(currentArea);
        if (lastArea !== null) {
            switchScreen(lastArea);
        };
    });
});

nextAreaButton.forEach((button) => {
    button.addEventListener('click', () => {
        playSound('buttonclick');
        updateNextArea(currentArea);
        switchScreen(nextArea);
    });
});

// clears encounter data and calls for clearOpponentData() which will clear data added during
// battleSetup() and resolveBattle(), also removes added images and enables buttons as needed
leaveButton.forEach((leave) => {
    leave.addEventListener('click', (event) => {
        gameTimeout(() => {
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
                gameTimeout(() => {
                    message.remove();
                    enableButtons('.leave');
                }, 1500);
            } else {
                if (currentPokemon.hp <= 0) {
                    switchPokemon();
                };
                playSound('buttonclick');
                switchScreen('pokecenter');
                gameTimeout(() => {
                    leaveButtonTextElement.forEach(button => {
                        button.textContent = 'Leave';
                    });
                }, 1500);
            };
            disableButtons('.pokemon-collection-button, .release-pokemon');
            gameTimeout(() => {
                enableButtons('.pokemon-collection-button, .release-pokemon');
            }, 2500);
        } else {
            playSound('buttonclick');
            disableButtons('.dynamic-button, .leave, .use-potion, .switch-pokemon')
            clearOpponentData();
            switchScreen(currentArea);
            gameTimeout(() => {
                enableButtons('.dynamic-button, .leave');
                updateTownButtons();
            }, 2500);
        };
        if (eliteFourStatus.every(elite => elite.completed)) {
            document.querySelector('#game-clear-button').classList.add('active');
            playMusic('claimVictory');
        };
        updateGameState();
        saveGameState();
    });
});

// the dynamic button changes depending on certain conditions (ie. battleSetup())
// has various options to deal with encounters.. enables buttons for gym and trainer battle
dynamicButton.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === 'Attack') {

            disableButtons('.dynamic-button, .use-potion, .switch-pokemon, .leave')

            attackTimeOut = gameTimeout(() => {
                enableButtons('.dynamic-button');
                updateSwitchPokemonButton("battle");
                updatePotionButton();
                if (encounter === 'wildpokemon') {
                    enableButtons('.leave');
                }
            }, 5000);

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
        else if (button.textContent === 'Use Poké Ball') {
            playSound('pokeballthrow');
            disableButtons('.dynamic-button, .use-potion, .switch-pokemon');
            gameTimeout(() => {
                throwPokeball(wildPokemonFound);
            }, 1000);
        }
        else if (button.textContent === 'Challenge' || button.textContent === 'Accept Challenge') {
            clearMessages();
            switch (button.textContent) {
                case "Challenge":
                    playSound('pokeballthrow')
                    gameTimeout(() => {
                        addPokeballPokemon('leader');
                        gameTimeout(() => {
                            playSound('poof');
                            removePokeballPokemon('leader');
                            updateImageElements('leader');
                            battleTextElement.forEach(p => {
                                p.textContent = `Trainer sent out ${oppCurrentPokemon.name}`;
                            });
                            showMessageBox('battle');
                        }, 1000);
                    }, 800);
                    break;
                case "Accept Challenge":
                    playSound('pokeballthrow')
                    gameTimeout(() => {
                        addPokeballPokemon('opponent');
                        gameTimeout(() => {
                            playSound('poof');
                            removePokeballPokemon('opponent');
                            updateImageElements('opponent');
                            battleTextElement.forEach(p => {
                                p.textContent = `Trainer sent out ${oppCurrentPokemon.name}`;
                            });
                            showMessageBox('battle');
                        }, 1000);
                    }, 800);
                    break;
            };
            gameTimeout(() => {
                playSound('pokeballthrow')
                gameTimeout(() => {
                    addPokeballPokemon('player');
                    gameTimeout(() => {
                        playSound('poof');
                        removePokeballPokemon('player');
                        battleTextElement.forEach(p => {
                            p.textContent = `${characterModel.name} sent out ${currentPokemon.name}!`;
                            showMessageBox('battle');
                            playerPokemonTextElement.forEach(p => {
                                p.innerHTML = `<pre>${currentPokemon.name}     HP: ${currentPokemon.hp}</pre>`
                                p.classList.add('active');
                                updateImageElements('player');
                            });
                        });
                        updateBattleDisplay();
                        updateBattleDisplay(encounter);
                    }, 1000);
                }, 800);
            }, 3000);
            dynamicButtonTextElement.forEach(button => {
                button.textContent = "Attack";
            });
            disableButtons('.leave, .dynamic-button');
            gameTimeout(() => {
                updateSwitchPokemonButton("battle");
                updatePotionButton();
                enableButtons('.dynamic-button');
            }, 7000);
        }
        else if (button.textContent === "Accept Badge") {
            const foundArea = areas.find((area) => area.location === currentArea)
            foundArea.completed = true;
            getBadge(foundArea.badge);
            playSound('badge');
            getRewards('gym');
            gameTimeout(() => {
                enableButtons('.leave');
            }, 3000);
            disableButtons('.dynamic-button, .use-potion, .switch-pokemon');
            if (badges.length === 8) {
                enableButtons('.elite-four-button.lorelei');
            };
        }
        else if (button.textContent === "Accept Defeat") {
            const eliteFourName = eliteFourStatus.find(elite => elite.name === oppName)
            eliteFourName.completed = true;
            disableButtons(`.elite-four-button.${oppName.toLowerCase()}`)
            if (eliteFourName) {
                playSound('badge');
                getRewards('elite');
            }
            gameTimeout(() => {
                enableButtons('.leave');
            }, 3000);
            disableButtons('.dynamic-button, .use-potion, .switch-pokemon');

            switch (oppName) {
                case "Lorelei":
                    enableButtons('.elite-four-button.bruno');
                    break;
                case "Bruno":
                    enableButtons('.elite-four-button.agatha');
                    break;
                case "Agatha":
                    enableButtons('.elite-four-button.lance');
                    break;
            }
        };
    });
});

switchPokemonButton.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('party')) {
            playSound('buttonclick');
        };
        switchPokemon();
        updatePartyDisplay();
    });
});

useRareCandy.addEventListener('click', () => {
    playSound('buttonclick');
    disableButtons('.use-rare-candy');
    const rareCandy = items.find(item => item.name === "rarecandy");
    if (rareCandy.quantity > 0) {
        currentPokemon.xp += 1;
        rareCandy.quantity -= 1;
    }
    updateXP(currentPokemon);
    updatePartyDisplay();
    updateItemDisplay();
    gameTimeout(() => {
        if (rareCandy.quantity <= 0) {
            rareCandy.quantity = 0;
            disableButtons('.use-rare-candy');
        } else {
            enableButtons('.use-rare-candy');
        }
    }, 200);
});

healButton.addEventListener('click', () => {
    playSound('buttonclick');
    disableButtons('.poke-button.heal');
    heal();
    playSound('heal');
    gameTimeout(() => {
        enableButtons('.poke-button.heal');
    }, 5000);
});

checkCollection.addEventListener('click', () => {
    playSound('buttonclick');
    switchScreen('pokecenter-collection-box')
    updateCollectionWindow();
    gameTimeout(() => {
        leaveButtonTextElement.forEach(button => {
            button.textContent = 'Leave Collection';
        });
    }, 1500);
    disableButtons('.pokemon-collection-button, .release-pokemon');
    gameTimeout(() => {
        enableButtons('.pokemon-collection-button, .release-pokemon');
    }, 2500);
});

gameClearButton.addEventListener('click', () => {
    playSound('buttonclick');
    switchScreen('gameCleared');
    playMusic('gameClear');
    gameTimeout(() => {
        enableButtons('.elite-four-button');
    }, 2000);
});

eliteFourButton.forEach((button) => {
    clearOpponentData();
    button.addEventListener('click', () => {
        playSound('buttonclick');
        battleSetup(button.textContent);
        disableButtons('.use-potion, .switch-pokemon, .dynamic-button, .leave');
        gameTimeout(() => {
            enableButtons('.dynamic-button, .leave');
        }, 5500);
        playMusic('eliteBattle');
    });
});

usePotion.forEach((button) => {
    button.addEventListener('click', () => {
        const potions = items.find(item => item.name === 'potion');
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
        gameTimeout(() => {
            updatePotionButton()
        }, 200);
    });
});

releasePokemonButton.addEventListener('click', () => {
    playSound('buttonclick');
    document.querySelector('.release-warning').classList.add('active');
    disableButtons('.release-pokemon, .leave, .pokemon-collection-button');
});

cancelReleaseButton.addEventListener('click', () => {
    playSound('buttonclick');
    document.querySelector('.release-warning').classList.remove('active');
    enableButtons('.release-pokemon, .leave, .pokemon-collection-button');
});

okReleaseButton.addEventListener('click', () => {
    playSound('buttonclick');
    const collectionLength = collection.length;
    const collectionReleased = Map.groupBy(collection, releasedPokemon => releasedPokemon.name);
    const rareCandy = items.find(item => item.name === 'rarecandy');
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
    enableButtons('.release-pokemon, .leave, .pokemon-collection-button');
});

resetGameButton.addEventListener('click', () => {
    playSound('buttonclick');
    document.querySelector('.reset-warning').classList.add('active');
    disableButtons('#clear-save-data')
});

cancelResetButton.addEventListener('click', () => {
    playSound('buttonclick');
    document.querySelector('.reset-warning').classList.remove('active');
    enableButtons('#clear-save-data')
});

okResetButton.addEventListener('click', () => {
    playSound('buttonclick');
    document.querySelector('.reset-warning').classList.remove('active');
    enableButtons('#clear-save-data')
    resetGame();
});
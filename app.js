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

const potions = items.find(item => item.name === 'potion');

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
let oppLossMessage = '';

let characterModel = {};

let currentPokemon = {};
let oppCurrentPokemon = {};
let wildPokemonFound = {};
let oppParty = [];

let messageBox = document.querySelectorAll('.message-box');

let leaderTextElement = document.querySelector('.leader-text');
let leaderPokemonTextElement = document.querySelector('.leader-pokemon-text');
let leaderPokemonImageElement = document.querySelector('#leader-pokemon');
let leaderImageElement = document.querySelector('#leader-image');

let opponentTextElement = document.querySelector('.opponent-text');
let opponentPokemonTextElement = document.querySelector('.opponent-pokemon-text');
let opponentPokemonImageElement = document.querySelector('#opponent-pokemon');
let opponentImageElement = document.querySelector('#opponent-image');

let playerTextElement = document.querySelectorAll('.player-text');
let playerPokemonImageElement = document.querySelectorAll('.player-pokemon');
let playerImageElement = document.querySelectorAll('.player-image');
let playerPokemonTextElement = document.querySelectorAll('.player-pokemon-text');

let dynamicButtonTextElement = document.querySelectorAll('.dynamic-button');
let leaveButtonTextElement = document.querySelectorAll('.leave');

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

    document.querySelectorAll('.partyMember').forEach(slot => slot.classList.remove('active'));
    document.querySelectorAll('.icon').forEach(icon => icon.classList.remove('active'));

    enableButtons('.leave-button');
    clearOpponentData();
    switchScreen('character');
    updatePartyDisplay();
    updateItemDisplay();
};

function showMessageBox(type) {
    switch (type) {
        case "opponent":
            opponentTextElement.classList.add('active');
            setTimeout(() => {
                opponentTextElement.classList.add('fading');
                setTimeout(() => {
                    opponentTextElement.classList.remove('fading', 'active');
                }, 800);
            }, 800);
            break;
        case "leader":
            leaderTextElement.classList.add('active');
            setTimeout(() => {
                leaderTextElement.classList.add('fading');
                setTimeout(() => {
                    leaderTextElement.classList.remove('fading', 'active');
                }, 800);
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
                }, 1000);
            }, 600);
            break;
    };
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
                    }, 3000);
                }, 3000);
            }, 1000);
            break;
    };
};

// disables buttons during screen switches saves states of ones already disabled to reenable after timeout
function disableAllButtons() {
    const buttonStates = new Map();
    document.querySelectorAll('button').forEach(button => {
        buttonStates.set(button, button.disabled);
        button.disabled = true;
    });
    setTimeout(() => {
        buttonStates.forEach((wasDisabled, button) => {
            button.disabled = wasDisabled;
        });
    }, 3000);
};

// function to switch main area screen
function switchScreen(screenClass) {

    document.querySelectorAll('.main-screen').forEach(screen => screen.classList.remove('active'));
    document.querySelector(`.${screenClass}`).classList.add('active');
    if (screenClass === 'start' || screenClass === 'character') {
    } else {
        if (screenClass === 'palletTown' || screenClass === 'indigoPlateau') {
            currentArea = screenClass;
            enableButtons('#search-for-pokemon, #poke-center, #poke-mart');
            disableButtons('#trainer-battle, #gym');
        }
        else if (screenClass === "pokemart" || screenClass === "pokecenter" || screenClass === "battle" ||
            screenClass === "gameCleared" || screenClass === "gameOver" || screenClass === 'start' ||
            screenClass === 'gym' || screenClass === 'pokecenter-collection-box') {
            disableButtons('#trainer-battle, #gym, #poke-mart, #poke-center, #search-for-pokemon');
        } else {
            currentArea = screenClass;
            enableButtons('#trainer-battle, #poke-center, #poke-mart, #search-for-pokemon');
            updateGymButton();
            clearOpponentData();
            updateAreaButton();
        };
        if (screenClass === 'palletTown') {
            updateAreaButton();
        };
        if (screenClass === 'gameOver' || screenClass === 'gameCleared') {
            disableButtons('.switch-pokemon, .use-rare-candy');
        };
        if (screenClass === 'gym' || screenClass === 'battle') {
            disableButtons('.switch-pokemon, .leave, .switch-pokemon.party, .use-rare-candy, .use-potion, .dynamic-button')
            enableButtons('.dynamic-button, .leave');
            updatePotionButton();
            updateSwitchPokemonButton();

        };
    };
    disableAllButtons();
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

function updateImageElements(type) {
    switch (type) {
        case "player":
            playerPokemonImageElement.forEach(img => {
                img.src = currentPokemon.image;
                img.alt = currentPokemon.name;
            })
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
    }
}

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
    leaveButtonTextElement.forEach(button => {
        button.textContent = 'Leave';
    });
    opponentPokemonImageElement.classList.remove('wildpokemon-image-animate');
    oppCurrentPokemon = {};
    wildPokemonFound = {};
    oppParty = [];
    oppName = '';
    oppLossMessage = '';
    encounter = '';
    oppPartyCurrentIndex = null;
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


// function to show badge after gym is completed
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
    if (potions.quantity >= 1) {
        enableButtons('.use-potion');
    }
};

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

function partyHealthStatus(party, currentIndex, hp) {
    for (let i = currentIndex; ;) {
        i = (i + 1) % party.length;

        if (party[i][hp] > 0) {
            return i;
        }
        if (i === currentIndex) {
            return 'false';
        };
    };
};

function updateSwitchPokemonButton(type) {
    if (party.length > 1) {
        const healthCheck = partyHealthStatus(party, partyCurrentIndex, 'hp');
        if (healthCheck !== partyCurrentIndex && healthCheck !== 'false') {
            if (type === "battle") {
                enableButtons('.switch-pokemon');
                disableButtons('.switch-pokemon.party')
            } else {
                enableButtons('.switch-pokemon.party');
            };
        };
    } else {
        disableButtons('.switch-pokemon.party')
    };
};

// function for switching player current pokemon
function switchPokemon() {
    const healthCheck = partyHealthStatus(party, partyCurrentIndex, 'hp');

    if (healthCheck !== partyCurrentIndex && healthCheck !== 'false') {
        partyCurrentIndex = healthCheck;
        currentPokemon = party[partyCurrentIndex];
        activeSlot = `slot-${partyCurrentIndex + 1}`;
        console.log('partyCurrentIndex: ', partyCurrentIndex, 'Current Pokemon: ', currentPokemon.name, "active slot: ", activeSlot)
        document.querySelectorAll('.partyMember').forEach(slot => slot.classList.remove('active'));
        document.querySelector(`.partyMember.${activeSlot}`).classList.add('active');
        updatePartyDisplay();
        updateImageElements('player');
        playerTextElement.forEach(p => {
            p.textContent = `${characterModel.name} switch to ${currentPokemon.name}!`;
            showMessageBox('player');
        });
        updateBattleDisplay();
    } else {
        switchScreen('gameOver');
    };
};

function switchPokemonOpp() {
    const healthCheck = partyHealthStatus(oppParty, oppPartyCurrentIndex, 'hp');

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
    updatePartyDisplay();
};

// function to evolve, will look for 10-50xp values if they hit them it does different things
function evolution(pokemonToEvolve, evolvesInto) {
    party.splice(partyCurrentIndex, 1, evolvesInto);
    currentPokemon = evolvesInto;
    playerTextElement.forEach(p => {
        p.textContent = `${pokemonToEvolve.name} evolved into ${currentPokemon.name}!`
        showMessageBox('player');
    });
    updateImageElements('player');
    updatePartyDisplay();
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
            console.log('trying to evolve: ', currentPokemon.name)
            evolution(currentPokemon, evolvedForm);
        }
        else if (currentPokemon.xp === currentPokemon.maxxp && !evolvedForm) {
            currentPokemon.xp = currentPokemon.maxxp
            currentPokemon.maxhp += 30;
        }
    }
    console.log('updating XP for: ', currentPokemon.name)
    updatePartyDisplay();
};

function updatePotionButton() {
    if (potions.quantity >= 1 && currentPokemon.hp < currentPokemon.maxhp) {
        enableButtons('.use-potion');
    };
};

// sets up initial battle state (screen and images) should only run once
function battleSetup(eventText) {
    let battleType = eventText.trim();
    updatePotionButton();
    if (battleType === 'Trainer Battle') {

        encounter = 'trainer'
        switchScreen('battle');
        leaveButtonTextElement.forEach(button => {
            button.textContent = 'Leave';
        });
        dynamicButtonTextElement.forEach(button => {
            button.textContent = "Accept Challenge"
        });

        let possibleOppParty = [];
        let trainerImage = `images/trainer${Math.ceil(Math.random() * 14)}.png`;
        let trainerIntro = trainerIntros[Math.floor(Math.random() * 35)]
        disableButtons('.use-potion');

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

        // amount of times to loop
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
            opponentTextElement.textContent = trainerIntro;
            showMessageIntro('opponent');

            playerTextElement.forEach(p => {
                p.textContent = `A Trainer has challenged you with a Party of ${oppParty.length} Pokemon!`;
                showMessageIntro('player');
            });
        }, 1000);
        updateImageElements('player-image');
    }
    else if (battleType === 'Search For Wild Pokemon') {

        leaveButtonTextElement.forEach(button => {
            button.textContent = 'Run Away';
        });
        dynamicButtonTextElement.forEach(button => {
            button.textContent = "Attack";
        });

        encounter = 'wildpokemon';

        setTimeout(() => {
            playerTextElement.forEach(p => {
                p.textContent = `${characterModel.name} sent out ${currentPokemon.name}!`;
                showMessageBox('player');
            });
        }, 2000);
        setTimeout(() => {
            playerPokemonTextElement.forEach(p => {
                p.innerHTML = `Name: ${currentPokemon.name}<br>HP: ${currentPokemon.hp}`
            });
        }, 2500);


        updateImageElements('player');
        updateImageElements('player-image');

        wildPokemonFound = structuredClone(chooseRandomPokemon());

        if (wildPokemonFound) {

            switchScreen('battle');
            setTimeout(() => {
                opponentTextElement.textContent = `A wild ${wildPokemonFound.name} appeared!`;
                opponentPokemonImageElement.src = wildPokemonFound.image
                opponentPokemonImageElement.alt = wildPokemonFound.name
                opponentPokemonTextElement.innerHTML = `Name: ${wildPokemonFound.name}<br>HP: ${wildPokemonFound.hp}`;
                opponentPokemonImageElement.classList.add('wildpokemon-image-animate');
                showMessageIntro('opponent');
            }, 1000);
            updateSwitchPokemonButton("battle");

            return wildPokemonFound;
        };
    }
    else if (battleType === 'Gym') {

        encounter = 'gym'
        switchScreen('gym');

        dynamicButtonTextElement.forEach(button => {
            button.textContent = "Challenge";
        });

        const foundArea = areas.find((area) => area.location === currentArea)
        const foundGymLeader = leaders.find((leader) => leader.location === foundArea.location)

        oppName = foundGymLeader.name
        oppParty = foundGymLeader.party;
        oppLossMessage = foundGymLeader.loss;

        oppCurrentPokemon = oppParty[0];

        setTimeout(() => {
            leaderTextElement.textContent = foundGymLeader.intro
            showMessageIntro('leader');
        }, 1000);
        leaderImageElement.src = foundGymLeader.image;
        leaderImageElement.alt = oppName;
        updateImageElements('player-image');
        disableButtons('.use-potion');
        disableButtons('.switch-pokemon');
    }
    else if (battleType === 'Lorelei' || battleType === 'Bruno' ||
        battleType === 'Agatha' || battleType === 'Lance') {
        encounter = 'elite'
        switchScreen('gym');
        dynamicButtonTextElement.forEach(button => {
            button.textContent = "Challenge";
        });

        const foundEliteMember = eliteFour.find(member => member.name === battleType);
        oppName = foundEliteMember.name;
        oppParty = foundEliteMember.party;
        oppLossMessage = foundEliteMember.loss;
        setTimeout(() => {
            leaderTextElement.textContent = foundEliteMember.intro;
            showMessageIntro('leader');
        }, 1000);
        oppCurrentPokemon = oppParty[0];
        leaderImageElement.src = foundEliteMember.image;
        leaderImageElement.alt = oppName;
        updateImageElements('player-image');
    };
}

function updateBattleDisplay() {
    if (encounter === "gym" || encounter === "elite") {
        leaderPokemonTextElement.innerHTML = `Name: ${oppCurrentPokemon.name}<br>HP: ${oppCurrentPokemon.hp}`;
    }
    else if (encounter === "trainer") {
        opponentPokemonTextElement.innerHTML = `Name: ${oppCurrentPokemon.name}<br>HP: ${oppCurrentPokemon.hp}`;
    }
    else if (encounter === "wildpokemon") {
        opponentPokemonTextElement.innerHTML = `Name: ${wildPokemonFound.name}<br>HP: ${wildPokemonFound.hp}`;
    }
    playerPokemonTextElement.forEach(p => {
        p.innerHTML = `Name: ${currentPokemon.name}<br>HP: ${currentPokemon.hp}`;
    });
};

// this is to change values of message boxes during battle to update damage as it changes
function battleMessageDisplay(type, pokemonAttack) {
    switch (type) {
        case "player":
            switch (pokemonAttack > 0) {
                case true:
                    playerTextElement.forEach(p => {
                        p.textContent = `${currentPokemon.name} attacked for ${pokemonAttack} damage!`;
                        showMessageBox('player');
                    });
                    break;
                case false:
                    playerTextElement.forEach(p => {
                        p.textContent = `${currentPokemon.name} missed ${wildPokemonFound.name}!`;
                        showMessageBox('player');
                    });
                    break;
            };
            break;
        case "wildpokemon":
            switch (pokemonAttack > 0) {
                case true:
                    opponentTextElement.textContent = `Wild ${wildPokemonFound.name} attacked for ${pokemonAttack} damage!`;
                    showMessageBox('opponent');
                    console.log('showing wild pokemon attack message')
                    break;
                case false:
                    opponentTextElement.textContent = `Wild ${wildPokemonFound.name} missed ${currentPokemon.name}!`;
                    showMessageBox('opponent');
                    break;
            };
            break;
        case "opponent":
            switch (pokemonAttack > 0) {
                case true:
                    opponentTextElement.textContent = `${oppCurrentPokemon.name} attacked for ${pokemonAttack} damage!`;
                    leaderTextElement.textContent = `${oppCurrentPokemon.name} attacked for ${pokemonAttack} damage!`;
                    showMessageBox('opponent');
                    showMessageBox('leader');
                    break;
                case false:
                    opponentTextElement.textContent = `${oppCurrentPokemon.name} missed ${currentPokemon.name}!`;
                    leaderTextElement.textContent = `${oppCurrentPokemon.name} missed ${currentPokemon.name}!`;
                    showMessageBox('opponent');
                    showMessageBox('leader');
                    break;
            }
            break;
    };
};

// rolls a random number to set battle order (who attacks first) and also includes
// the random value based on hp that each pokemon will do, and executes hp reduction
// before sending results back to resolveBattle()
function battleDamageAndOrder(encounterData) {
    let randomOrder = Math.ceil(Math.random() * 2);

    if (encounter === 'wildpokemon') {
        let wildPokemonFound = encounterData;

        let wildPokemonAttack = Math.floor((Math.random() * wildPokemonFound.maxhp) / 3);
        let currentPokemonAttack = Math.ceil((Math.random() * currentPokemon.maxhp) / 2);

        if (randomOrder === 1) {
            currentPokemon.hp -= wildPokemonAttack;
            battleMessageDisplay('wildpokemon', wildPokemonAttack);
            if (currentPokemon.hp <= 0) {
                currentPokemon.hp = 0;
                return;
            }
            wildPokemonFound.hp -= currentPokemonAttack;
            battleMessageDisplay('player', currentPokemonAttack);
            if (wildPokemonFound.hp <= 0) {
                wildPokemonFound.hp = 0;
                return;
            }
        }
        if (randomOrder === 2) {
            wildPokemonFound.hp -= currentPokemonAttack;
            battleMessageDisplay('player', currentPokemonAttack);
            if (wildPokemonFound.hp <= 0) {
                wildPokemonFound.hp = 0;
                return;
            }
            currentPokemon.hp -= wildPokemonAttack;
            battleMessageDisplay('wildpokemon', wildPokemonAttack);
            if (currentPokemon.hp <= 0) {
                currentPokemon.hp = 0;
                return;
            }
        };
    } else {

        let opponentPokemonAttack = Math.floor((Math.random() * oppCurrentPokemon.maxhp) / 3);
        let currentPokemonAttack = Math.ceil((Math.random() * currentPokemon.maxhp) / 2);

        if (randomOrder === 1) {
            currentPokemon.hp -= opponentPokemonAttack;
            battleMessageDisplay('opponent', opponentPokemonAttack);
            if (currentPokemon.hp <= 0) {
                currentPokemon.hp = 0;
                return;
            }
            oppCurrentPokemon.hp -= currentPokemonAttack;
            battleMessageDisplay('player', currentPokemonAttack);
            if (oppCurrentPokemon.hp <= 0) {
                oppCurrentPokemon.hp = 0;
                return;
            }
        }
        if (randomOrder === 2) {
            oppCurrentPokemon.hp -= currentPokemonAttack;
            battleMessageDisplay('player', currentPokemonAttack);
            if (oppCurrentPokemon.hp <= 0) {
                oppCurrentPokemon.hp = 0;
                return;
            }
            currentPokemon.hp -= opponentPokemonAttack;
            battleMessageDisplay('opponent', opponentPokemonAttack);
            if (currentPokemon.hp <= 0) {
                currentPokemon.hp = 0;
                return;
            }
        };
    };
};

// after battle is initially set up with battleSetup() this function handles each encountertype
// calls battleDamageAndOrder() for damage amount and sequence.  then resolves switching out pokemon
// as needed and changing message boxes, also handles button disable and enable for specific scenerios
function resolveBattle() {

    if (encounter === "wildpokemon") {

        battleDamageAndOrder(wildPokemonFound);

        if (currentPokemon.hp <= 0) {
            currentPokemon.hp = 0;
            playerTextElement.forEach(p => {
                p.textContent = `${currentPokemon.name} fainted!`;
                showMessageBox('player');
            });
            switchPokemon();
            updateImageElements('player');
        }
        if (wildPokemonFound.hp <= 0) {
            wildPokemonFound.hp = 0;
            currentPokemon.xp += 1;
            updateXP(currentPokemon);
            dynamicButtonTextElement.forEach(button => {
                button.textContent = "Throw Pokéball";
            });
            leaveButtonTextElement.forEach(button => {
                button.textContent = 'Leave';
            });
            opponentTextElement.textContent = `Wild ${wildPokemonFound.name} fainted!`;
            showMessageBox('opponent')
            getRewards('wildpokemon');
            disableButtons('.use-potion');
            disableButtons('.switch-pokemon');
        }
    } else {
        battleDamageAndOrder(encounter);

        if (currentPokemon.hp <= 0) {
            currentPokemon.hp = 0;
            playerTextElement.forEach(p => {
                p.textContent = `${currentPokemon.name} fainted!`;
                showMessageBox('player');
            });
            switchPokemon();
            updateImageElements('player');
        }
        if (oppCurrentPokemon.hp <= 0) {
            if (oppPartyCurrentIndex === oppParty.length - 1) {
                oppCurrentPokemon.hp = 0;
                currentPokemon.xp += 1;
                updateXP(currentPokemon);
                if (encounter === 'gym' || encounter === 'elite') {
                    dynamicButtonTextElement.forEach(button => {
                        if (encounter === 'gym') {
                            button.textContent = "Accept Badge";
                        } else {
                            button.textContent = "Accept Defeat";
                        }
                        disableButtons('.use-potion')
                        disableButtons('.switch-pokemon');
                    });
                    playerTextElement.forEach(p => {
                        p.textContent = `You defeated ${oppName}! Congratulations!`;
                        showMessageBox('player');
                    });
                    leaderTextElement.textContent = oppLossMessage;
                } else {
                    playerTextElement.forEach(p => {
                        p.textContent = `Trainers party has been defeated.`;
                        showMessageBox('player');
                    });
                    opponentTextElement.textContent = trainerLoss[Math.floor(Math.random() * 10)];
                    updateImageElements('trainer');
                    disableButtons('.dynamic-button');
                    disableButtons('.switch-pokemon');
                    disableButtons('.use-potion');
                    enableButtons('.leave');
                    getRewards('trainer');
                }
            } else {
                oppCurrentPokemon.hp = 0;
                currentPokemon.xp += 1;
                updateXP(currentPokemon);
                switchPokemonOpp();
                if (encounter === 'gym' || encounter === 'elite') {
                    leaderTextElement.textContent = `${oppName} sent out ${oppCurrentPokemon.name}`;
                    showMessageBox('leader');
                    updateImageElements('leader');
                } else {
                    opponentTextElement.textContent = `Trainer sent out ${oppCurrentPokemon.name}!`;
                    showMessageBox('opponent');
                };
            };
        };
    };
    updateBattleDisplay(encounter);
    updatePartyDisplay();
    updateItemDisplay();
};

// function to determine rewards based on encounter type
function getRewards(rewardType) {
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
        case 'elite':
            gold.quantity += Math.ceil(Math.random() * 50);
            break;
    };
    updateItemDisplay();
};

// function that is called for when a wild pokemon is at 0hp and then checks for conditions
// makes sure you have pokeballs, or if you dont already have the pokemon, will also
// add pokemon to party or send to collection as needed
function throwPokeball() {
    leaveButtonTextElement.forEach(button => {
        button.textContent = 'Leave';
    });

    const pokeBall = items.find(item => item.name === 'pokeball');
    const partyPokemon = party.find(p => p.name === wildPokemonFound.name)
    const collectionPokemon = collection.find(p => p.name === wildPokemonFound.name)
    if (partyPokemon || collectionPokemon) {
        disableButtons('.dynamic-button');
        opponentTextElement.textContent = `You already have a ${wildPokemonFound.name}, you leave it alone.`;
        showMessageBox('opponent');
        return;
    } else {
        if (pokeBall.quantity < 1) {
            opponentTextElement.textContent = 'You ran out of Pokéballs!'
            showMessageBox('opponent');
        } else {
            addPokeballPokemon();
            party.push(wildPokemonFound);
            pokeBall.quantity -= 1;
            opponentTextElement.textContent = `You threw a Pokéball at ${wildPokemonFound.name}, and caught it!`;
            showMessageBox('opponent');

            if (party.length > 6) {
                collection.push(party.pop());
                opponentTextElement.textContent = `You threw a Pokéball at ${wildPokemonFound.name}, and caught it!,  It has been sent to Collection`;
                showMessageBox('opponent');
            };
        };
    }
    disableButtons('.dynamic-button');
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
    updateSwitchPokemonButton("party");
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
        if (event.target.textContent === 'Leave Collection') {
            switchScreen('pokecenter');
        } else {
            removePokeballPokemon();
            clearOpponentData();
            switchScreen(currentArea);
            updateSwitchPokemonButton("party");
            const rareCandy = items.find(item => item.name === 'rarecandy')
            if (rareCandy.quantity > 0) {
                enableButtons('.use-rare-candy');
            };
        };
        if (potions.quantity >= 1) {
            enableButtons('.use-potion');
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
            }
            setTimeout(() => {
                enableButtons('.dynamic-button, .leave, .use-potion');
                updateSwitchPokemonButton("battle");
            }, 1800);
        }
        else if (button.textContent === 'Throw Pokéball') {
            throwPokeball(wildPokemonFound);
        }
        else if (button.textContent === 'Challenge' || button.textContent === 'Accept Challenge') {
            switch (button.textContent) {
                case "Challenge":
                    updateImageElements('leader');
                    leaderTextElement.textContent = `${oppName} sent out ${oppCurrentPokemon.name}`;
                    showMessageBox('leader');
                    break;
                case "Accept Challenge":
                    updateImageElements('trainer');
                    opponentTextElement.textContent = `Trainer sent out ${oppCurrentPokemon.name}`;
                    showMessageBox('opponent');
                    break;
            }
            playerTextElement.forEach(p => {
                p.textContent = `${characterModel.name} sent out ${currentPokemon.name}!`;
                showMessageBox('player');
            });

            updateImageElements('player');
            dynamicButtonTextElement.forEach(button => {
                button.textContent = "Attack";
            });
            if (potions.quantity >= 1) {
                enableButtons('.use-potion');
            };
            disableButtons('.leave');
            disableButtons('.switch-pokemon.party');
            updateBattleDisplay(encounter);
            updateSwitchPokemonButton("battle");
        }
        else if (button.textContent === "Accept Badge") {
            const foundArea = areas.find((area) => area.location === currentArea)
            foundArea.completed = true;
            getBadge(foundArea.badge);
            enableButtons('.leave');
            disableButtons('.dynamic-button');
        }
        else if (button.textContent === "Accept Defeat") {
            const eliteFourName = eliteFourStatus.find(elite => elite.name === oppName)
            eliteFourName.completed = true;
            disableButtons('.dynamic-button');
            disableButtons(`.elite-four-button.${oppName.toLowerCase()}`)
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
    disableButtons('.use-rare-candy');
    const rareCandy = items.find(item => item.name === "rarecandy");
    if (rareCandy.quantity > 0) {
        currentPokemon.xp += 1;
        rareCandy.quantity -= 1;
    }
    updateXP(currentPokemon);
    updatePartyDisplay();
    updateItemDisplay();
    console.log("used rare candy on: ", currentPokemon.name);
    setTimeout(() => {
        if (rareCandy.quantity <= 0) {
            rareCandy.quantity = 0;
            disableButtons('.use-rare-candy');
        } else {
            enableButtons('.use-rare-candy');
        }
    }, 500);
});

healButton.addEventListener('click', () => {
    disableButtons('.poke-button.heal');
    heal();
    setTimeout(() => {
        enableButtons('.poke-button.heal');
    }, 1500);
});

checkCollection.addEventListener('click', () => switchScreen('pokecenter-collection-box'));

gameClearButton.addEventListener('click', () => {
    switchScreen('gameCleared')
});

eliteFourButton.forEach((button) => {
    button.addEventListener('click', () => {
        battleSetup(button.textContent);
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
        updateBattleDisplay(encounter);
        setTimeout(() => {
            updatePotionButton()
        }, 500);
    });
});
const pokedex = [
    { number: 1, name: 'Bulbasaur', type: 'grass', maxhp: 45,  hp: 45, maxxp: 10, xp: 0, starter: true, canEvolve: true, evolvesFrom: null, rarity: 1, image: 'images/bulbasaur.png' },
    { number: 2, name: 'Ivysaur', type: 'grass', maxhp: 60,  hp: 60, maxxp: 20, xp: 0, starter: false, canEvolve: true, evolvesFrom: 'Bulbasaur', rarity: 0, image: 'images/ivysaur.png' },
    { number: 3, name: 'Venusaur', type: 'grass', maxhp: 90,  hp: 90, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Ivysaur', rarity: 0, image: 'images/venusaur.png' },
    { number: 4, name: 'Charmander', type: 'fire', maxhp: 45,  hp: 45, maxxp: 10, xp: 0, starter: true, canEvolve: true, evolvesFrom: null, rarity: 1, image: 'images/charmander.png' },
    { number: 5, name: 'Charmeleon', type: 'fire', maxhp: 60,  hp: 60, maxxp: 20, xp: 0, starter: false, canEvolve: true, evolvesFrom: 'Charmander', rarity: 0, image: 'images/charmeleon.png' },
    { number: 6, name: 'Charizard', type: 'fire', maxhp: 90,  hp: 90, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Charmeleon', rarity: 0, image: 'images/charizard.png' },
    { number: 7, name: 'Squirtle', type: 'water', maxhp: 45,  hp: 45, maxxp: 10, xp: 0, starter: true, canEvolve: true, evolvesFrom: null, rarity: 1, image: 'images/squirtle.png' },
    { number: 8, name: 'Wartortle', type: 'water', maxhp: 60,  hp: 60, maxxp: 20, xp: 0, starter: false, canEvolve: true, evolvesFrom: 'Squirtle', rarity: 0, image: 'images/wartortle.png' },
    { number: 9, name: 'Blastoise', type: 'water', maxhp: 90,  hp: 90, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Wartortle', rarity: 0, image: 'images/blastoise.png' },
    { number: 10, name: 'Caterpie', type: 'bug', maxhp: 25,  hp: 25, maxxp: 5, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 10, image: 'images/caterpie.png' },
    { number: 11, name: 'Metapod', type: 'bug', maxhp: 50,  hp: 50, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: 'Caterpie', rarity: 0, image: 'images/metapod.png' },
    { number: 12, name: 'Butterfree', type: 'bug', maxhp: 70,  hp: 70, maxxp: 15, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Metapod', rarity: 0, image: 'images/butterfree.png' },
    { number: 13, name: 'Weedle', type: 'bug', maxhp: 25,  hp: 25, maxxp: 5, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 1, image: 'images/weedle.png' },
    { number: 14, name: 'Kakuna', type: 'bug', maxhp: 45,  hp: 45, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: 'Weedle', rarity: 0, image: 'images/kakuna.png' },
    { number: 15, name: 'Beedrill', type: 'bug', maxhp: 75,  hp: 75, maxxp: 15, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Kakuna', rarity: 0, image: 'images/beedrill.png' },
    { number: 16, name: 'Pidgey', type: 'normal', maxhp: 30,  hp: 30, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 1, image: 'images/pidgey.png' },
    { number: 17, name: 'Pidgeotto', type: 'normal', maxhp: 55,  hp: 55, maxxp: 15, xp: 0, starter: false, canEvolve: true, evolvesFrom: 'Pidgey', rarity: 0, image: 'images/pidgeotto.png' },
    { number: 18, name: 'Pidgeot', type: 'normal', maxhp: 70,  hp: 70, maxxp: 20, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Pidgeotto', rarity: 0, image: 'images/pidgeot.png' },
    { number: 19, name: 'Rattata', type: 'normal', maxhp: 30,  hp: 30, maxxp: 5, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 1, image: 'images/rattata.png' },
    { number: 20, name: 'Raticate', type: 'normal', maxhp: 55,  hp: 55, maxxp: 15, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Rattata', rarity: 0, image: 'images/raticate.png' },
    { number: 21, name: 'Spearow', type: 'normal', maxhp: 35,  hp: 35, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 7, image: 'images/spearow.png' },
    { number: 22, name: 'Fearow', type: 'normal', maxhp: 65,  hp: 65, maxxp: 15, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Spearow', rarity: 0, image: 'images/fearow.png' },
    { number: 23, name: 'Ekans', type: 'poison', maxhp: 35,  hp: 35, maxxp: 5, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 7, image: 'images/ekans.png'},
    { number: 24, name: 'Arbok', type: 'poison', maxhp: 60,  hp: 60, maxxp: 15, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Ekans', rarity: 0, image: 'images/arbok.png' },
    { number: 25, name: 'Pikachu', type: 'electric', maxhp: 45,  hp: 45, maxxp: 10, xp: 0, starter: true, canEvolve: true, evolvesFrom: null, rarity: 1, image: 'images/pikachu.png' },
    { number: 26, name: 'Raichu', type: 'electric', maxhp: 90,  hp: 90, maxxp: 25, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Pikachu', rarity: 0, image: 'images/raichu.png' },
    { number: 27, name: 'Sandshrew', type: 'ground', maxhp: 50,  hp: 50, maxxp: 15, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 6, image: 'images/sandshrew.png' },
    { number: 28, name: 'Sandslash', type: 'ground', maxhp: 75,  hp: 75, maxxp: 25, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Sandshrew', rarity: 0, image: 'images/sandslash.png' },
    { number: 29, name: 'Nidoran♀', type: 'poison', maxhp: 45,  hp: 45, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 5, image: 'images/nidoran.png' },
    { number: 30, name: 'Nidorina', type: 'poison', maxhp: 70,  hp: 70, maxxp: 20, xp: 0, starter: false, canEvolve: true, evolvesFrom: 'Nidoran♀', rarity: 0, image: 'images/nidorina.png' },
    { number: 31, name: 'Nidoqueen', type: 'poison', maxhp: 90,  hp: 90, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Nidorina', rarity: 0, image: 'images/nidoqueen.png' },
    { number: 32, name: 'Nidoran♂', type: 'poison', maxhp: 45,  hp: 45, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 5, image: 'images/nidoran-m.png' },
    { number: 33, name: 'Nidorino', type: 'poison', maxhp: 70,  hp: 70, maxxp: 20, xp: 0, starter: false, canEvolve: true, evolvesFrom: 'Nidoran♂', rarity: 0, image: 'images/nidorino.png' },
    { number: 34, name: 'Nidoking', type: 'poison', maxhp: 90,  hp: 90, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Nidorino', rarity: 0, image: 'images/nidoking.png' },
    { number: 35, name: 'Clefairy', type: 'fairy', maxhp: 60,  hp: 60, maxxp: 20, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 4, image: 'images/clefairy.png' },
    { number: 36, name: 'Clefable', type: 'fairy', maxhp: 90,  hp: 90, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Clefairy', rarity: 0, image: 'images/clefable.png' },
    { number: 37, name: 'Vulpix', type: 'fire', maxhp: 35,  hp: 35, maxxp: 20, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 5, image: 'images/vulpix.png' },
    { number: 38, name: 'Ninetales', type: 'fire', maxhp: 80,  hp: 80, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Vulpix', rarity: 0, image: 'images/ninetales.png' },
    { number: 39, name: 'Jigglypuff', type: 'normal', maxhp: 40,  hp: 40, maxxp: 20, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 4, image: 'images/jigglypuff.png' },
    { number: 40, name: 'Wigglytuff', type: 'normal', maxhp: 80,  hp: 80, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Jigglypuff', rarity: 0, image: 'images/wigglytuff.png' },
    { number: 41, name: 'Zubat', type: 'poison', maxhp: 40,  hp: 40, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 7, image: 'images/zubat.png' },
    { number: 42, name: 'Golbat', type: 'poison', maxhp: 75,  hp: 75, maxxp: 20, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Zubat', rarity: 0, image: 'images/golbat.png' },
    { number: 43, name: 'Oddish', type: 'grass', maxhp: 45,  hp: 45, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 8, image: 'images/oddish.png' },
    { number: 44, name: 'Gloom', type: 'grass', maxhp: 60,  hp: 60, maxxp: 20, xp: 0, starter: false, canEvolve: true, evolvesFrom: 'Oddish', rarity: 0, image: 'images/gloom.png' },
    { number: 45, name: 'Vileplume', type: 'grass', maxhp: 90,  hp: 90, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Gloom', rarity: 0, image: 'images/vileplume.png' },
    { number: 46, name: 'Paras', type: 'bug', maxhp: 35,  hp: 35, maxxp: 15, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 7, image: 'images/paras.png' },
    { number: 47, name: 'Parasect', type: 'bug', maxhp: 70,  hp: 70, maxxp: 20, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Paras', rarity: 0, image: 'images/parasect.png' },
    { number: 48, name: 'Venonat', type: 'bug', maxhp: 40,  hp: 40, maxxp: 15, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 7, image: 'images/venonat.png' },
    { number: 49, name: 'Venomoth', type: 'bug', maxhp: 80,  hp: 80, maxxp: 25, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Venonat', rarity: 0, image: 'images/venomoth.png' },
    { number: 50, name: 'Diglett', type: 'ground', maxhp: 35,  hp: 35, maxxp: 15, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 6, image: 'images/diglett.png' },
    { number: 51, name: 'Dugtrio', type: 'ground', maxhp: 75,  hp: 75, maxxp: 25, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Diglett', rarity: 0, image: 'images/dugtrio.png' },
    { number: 52, name: 'Meowth', type: 'normal', maxhp: 40,  hp: 40, maxxp: 15, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 6, image: 'images/meowth.png' },
    { number: 53, name: 'Persian', type: 'normal', maxhp: 75,  hp: 75, maxxp: 25, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Meowth', rarity: 0, image: 'images/persian.png' },
    { number: 54, name: 'Psyduck', type: 'water', maxhp: 50,  hp: 50, maxxp: 15, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 6, image: 'images/psyduck.png' },
    { number: 55, name: 'Golduck', type: 'water', maxhp: 80,  hp: 80, maxxp: 25, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Psyduck', rarity: 0, image: 'images/golduck.png' },
    { number: 56, name: 'Mankey', type: 'fighting', maxhp: 40,  hp: 40, maxxp: 15, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 6, image: 'images/mankey.png' },
    { number: 57, name: 'Primeape', type: 'fighting', maxhp: 65,  hp: 65, maxxp: 20, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Mankey', rarity: 0, image: 'images/primeape.png' },
    { number: 58, name: 'Growlithe', type: 'fire', maxhp: 55,  hp: 55, maxxp: 20, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 5, image: 'images/growlithe.png' },
    { number: 59, name: 'Arcanine', type: 'fire', maxhp: 90,  hp: 90, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Growlithe', rarity: 0, image: 'images/arcanine.png' },
    { number: 60, name: 'Poliwag', type: 'water', maxhp: 35,  hp: 35, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 6, image: 'images/poliwag.png' },
    { number: 61, name: 'Poliwhirl', type: 'water', maxhp: 65,  hp: 65, maxxp: 20, xp: 0, starter: false, canEvolve: true, evolvesFrom: 'Poliwag', rarity: 0, image: 'images/poliwhirl.png' },
    { number: 62, name: 'Poliwrath', type: 'water', maxhp: 90,  hp: 90, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Poliwhirl', rarity: 0, image: 'images/poliwrath.png' },
    { number: 63, name: 'Abra', type: 'psychic', maxhp: 25,  hp: 25, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 5, image: 'images/abra.png' },
    { number: 64, name: 'Kadabra', type: 'psychic', maxhp: 50,  hp: 50, maxxp: 20, xp: 0, starter: false, canEvolve: true, evolvesFrom:  'Abra', rarity: 0, image: 'images/kadabra.png' },
    { number: 65, name: 'Alakazam', type: 'psychic', maxhp: 95,  hp: 95, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Kadabra', rarity: 0, image: 'images/alakazam.png' },
    { number: 66, name: 'Machop', type: 'fighting', maxhp: 40,  hp: 40, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 7, image: 'images/machop.png' },
    { number: 67, name: 'Machoke', type: 'fighting', maxhp: 60,  hp: 60, maxxp: 20, xp: 0, starter: false, canEvolve: true, evolvesFrom: 'Machop', rarity: 0, image: 'images/machoke.png' },
    { number: 68, name: 'Machamp', type: 'fighting', maxhp: 95,  hp: 95, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Machoke', rarity: 0, image: 'images/machamp.png'},
    { number: 69, name: 'Bellsprout', type: 'grass', maxhp: 30,  hp: 30, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 7, image: 'images/bellsprout.png' },
    { number: 70, name: 'Weepinbell', type: 'grass', maxhp: 65,  hp: 65, maxxp: 20, xp: 0, starter: false, canEvolve: true, evolvesFrom: 'Bellsprout', rarity: 0, image: 'images/weepinbell.png' },
    { number: 71, name: 'Victreebel', type: 'grass', maxhp: 85,  hp: 85, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Weepinbell', rarity: 0, image: 'images/victreebel.png' },
    { number: 72, name: 'Tentacool', type: 'water', maxhp: 40,  hp: 40, maxxp: 15, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 6, image: 'images/tentacool.png' },
    { number: 73, name: 'Tentacruel', type: 'water', maxhp: 80,  hp: 80, maxxp: 25, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Tentacool', rarity: 0, image: 'images/tentacruel.png' },
    { number: 74, name: 'Geodude', type: 'rock', maxhp: 40,  hp: 40, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 7, image: 'images/geodude.png' },
    { number: 75, name: 'Graveler', type: 'rock', maxhp: 55,  hp: 55, maxxp: 20, xp: 0, starter: false, canEvolve: true, evolvesFrom: 'Geodude', rarity: 0, image: 'images/graveler.png' },
    { number: 76, name: 'Golem', type: 'rock', maxhp: 85,  hp: 85, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Graveler', rarity: 0, image: 'images/golem.png' },
    { number: 77, name: 'Ponyta', type: 'fire', maxhp: 50,  hp: 50, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 6, image: 'images/ponyta.png' },
    { number: 78, name: 'Rapidash', type: 'fire', maxhp: 80,  hp: 80, maxxp: 25, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Ponyta', rarity: 0, image: 'images/rapidash.png' },
    { number: 79, name: 'Slowpoke', type: 'water', maxhp: 40,  hp: 40, maxxp: 20, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 5, image: 'images/slowpoke.png' },
    { number: 80, name: 'Slowbro', type: 'water', maxhp: 85,  hp: 85, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Slowpoke', rarity: 0, image: 'images/slowbro.png' },
    { number: 81, name: 'Magnemite', type: 'electric', maxhp: 35,  hp: 35, maxxp: 15, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 6, image: 'images/magnemite.png' },
    { number: 82, name: 'Magneton', type: 'electric', maxhp: 80,  hp: 80, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Magnemite', rarity: 0, image: 'images/magneton.png' },
    { number: 83, name: "Farfetch'd", type: 'normal', maxhp: 70,  hp: 70, maxxp: 20, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 4, image: 'images/farfetchd.png' },
    { number: 84, name: 'Doduo', type: 'normal', maxhp: 35,  hp: 35, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 6, image: 'images/doduo.png' },
    { number: 85, name: 'Dodrio', type: 'normal', maxhp: 70,  hp: 70, maxxp: 25, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Doduo', rarity: 0, image: 'images/dodrio.png' },
    { number: 86, name: 'Seel', type: 'water', maxhp: 45,  hp: 45, maxxp: 20, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 6, image: 'images/seel.png' },
    { number: 87, name: 'Dewgong', type: 'water', maxhp: 90,  hp: 90, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Seel', rarity: 0, image: 'images/dewgong.png' },
    { number: 88, name: 'Grimer', type: 'poison', maxhp: 45,  hp: 45, maxxp: 20, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 5, image: 'images/grimer.png' },
    { number: 89, name: 'Muk', type: 'poison', maxhp: 90, hp: 90, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Grimer', rarity: 0, image: 'images/muk.png' },
    { number: 90, name: 'Shellder', type: 'water', maxhp: 30,  hp: 30, maxxp: 15, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 5, image: 'images/shellder.png' },
    { number: 91, name: 'Cloyster', type: 'water', maxhp: 80,  hp: 80, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Shellder', rarity: 0, image: 'images/cloyster.png' },
    { number: 92, name: 'Gastly', type: 'ghost', maxhp: 30,  hp: 30, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 6, image: 'images/gastly.png' },
    { number: 93, name: 'Haunter', type: 'ghost', maxhp: 55,  hp: 55, maxxp: 15, xp: 0, starter: false, canEvolve: true, evolvesFrom: 'Gastly', rarity: 0, image: 'images/haunter.png' },
    { number: 94, name: 'Gengar', type: 'ghost', maxhp: 75,  hp: 75, maxxp: 25, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Haunter', rarity: 0, image: 'images/gengar.png' },
    { number: 95, name: 'Onix', type: 'rock', maxhp: 80,  hp: 80, maxxp: 40, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 5, image: 'images/onix.png' },
    { number: 96, name: 'Drowzee', type: 'psychic', maxhp: 60,  hp: 60, maxxp: 20, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 5, image: 'images/drowzee.png' },
    { number: 97, name: 'Hypno', type: 'psychic', maxhp: 85,  hp: 85, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Drowzee', rarity: 0, image: 'images/hypno.png' },
    { number: 98, name: 'Krabby', type: 'water', maxhp: 40,  hp: 40, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 6, image: 'images/krabby.png' },
    { number: 99, name: 'Kingler', type: 'water', maxhp: 75,  hp: 75, maxxp: 20, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Krabby', rarity: 0, image: 'images/kingler.png' },
    { number: 100, name: 'Voltorb', type: 'electric', maxhp: 40,  hp: 40, maxxp: 20, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 7, image: 'images/voltorb.png' },
    { number: 101, name: 'Electrode', type: 'electric', maxhp: 80,  hp: 80, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Voltorb', rarity: 0, image: 'images/electrode.png' },
    { number: 102, name: 'Exeggcute', type: 'grass', maxhp: 60,  hp: 60, maxxp: 20, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 6, image: 'images/exeggcute.png' },
    { number: 103, name: 'Exeggutor', type: 'grass', maxhp: 95,  hp: 95, maxxp: 40, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Exeggcute', rarity: 0, image: 'images/exeggutor.png' },
    { number: 104, name: 'Cubone', type: 'ground', maxhp: 50,  hp: 50, maxxp: 20, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 6, image: 'images/cubone.png' },
    { number: 105, name: 'Marowak', type: 'ground', maxhp: 80,  hp: 80, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Cubone', rarity: 0, image: 'images/marowak.png' },
    { number: 106, name: 'Hitmonlee', type: 'fighting', maxhp: 80,  hp: 80, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 2, image: 'images/hitmonlee.png' },
    { number: 107, name: 'Hitmonchan', type: 'fighting', maxhp: 80,  hp: 80, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 2, image: 'images/hitmonchan.png' },
    { number: 108, name: 'Lickitung', type: 'normal', maxhp: 75,  hp: 75, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 5, image: 'images/lickitung.png' },
    { number: 109, name: 'Koffing', type: 'poison', maxhp: 40,  hp: 40, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 7, image: 'images/koffing.png' },
    { number: 110, name: 'Weezing', type: 'poison', maxhp: 70,  hp: 70, maxxp: 25, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Weezing', rarity: 0, image: 'images/weezing.png' },
    { number: 111, name: 'Rhyhorn', type: 'ground', maxhp: 80,  hp: 80, maxxp: 30, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 6, image: 'images/rhyhorn.png' },
    { number: 112, name: 'Rhydon', type: 'ground', maxhp: 100, hp: 100, maxxp: 50, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Rhyhorn', rarity: 0, image: 'images/rhydon.png' },
    { number: 113, name: 'Chansey', type: 'normal', maxhp: 90, hp: 90, maxxp: 40, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 2, image: 'images/chansey.png' },
    { number: 114, name: 'Tangela', type: 'grass', maxhp: 75,  hp: 75, maxxp: 20, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 6, image: 'images/tangela.png' },
    { number: 115, name: 'Kangaskhan', type: 'normal', maxhp: 100, hp: 100, maxxp: 50, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 3, image: 'images/kangaskhan.png' },
    { number: 116, name: 'Horsea', type: 'water', maxhp: 30,  hp: 30, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 7, image: 'images/horsea.png' },
    { number: 117, name: 'Seadra', type: 'water', maxhp: 65,  hp: 65, maxxp: 20, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Horsea', rarity: 0, image: 'images/seadra.png' },
    { number: 118, name: 'Goldeen', type: 'water', maxhp: 45,  hp: 45, maxxp: 15, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 7, image: 'images/goldeen.png' },
    { number: 119, name: 'Seaking', type: 'water', maxhp: 80,  hp: 80, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Goldeen', rarity: 0, image: 'images/seaking.png' },
    { number: 120, name: 'Staryu', type: 'water', maxhp: 30,  hp: 30, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 7, image: 'images/staryu.png' },
    { number: 121, name: 'Starmie', type: 'water', maxhp: 80,  hp: 80, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Staryu', rarity: 0, image: 'images/starmie.png' },
    { number: 122, name: 'Mr. Mime', type: 'psychic', maxhp: 70,  hp: 70, maxxp: 25, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 5, image: 'images/mr-mime.png' },
    { number: 123, name: 'Scyther', type: 'bug', maxhp: 70,  hp: 70, maxxp: 25, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 4, image: 'images/scyther.png' },
    { number: 124, name: 'Jynx', type: 'ice', maxhp: 65,  hp: 65, maxxp: 25, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 5, image: 'images/jynx.png' },
    { number: 125, name: 'Electabuzz', type: 'electric', maxhp: 65,  hp: 65, maxxp: 25, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 5, image: 'images/electabuzz.png' },
    { number: 126, name: 'Magmar', type: 'fire', maxhp: 65,  hp: 65, maxxp: 25, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 5, image: 'images/magmar.png' },
    { number: 127, name: 'Pinsir', type: 'bug', maxhp: 65,  hp: 65, maxxp: 25, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 5, image: 'images/pinsir.png' },
    { number: 128, name: 'Tauros', type: 'normal', maxhp: 75,  hp: 75, maxxp: 25, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 4, image: 'images/tauros.png' },
    { number: 129, name: 'Magikarp', type: 'water', maxhp: 20,  hp: 20, maxxp: 15, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 1, image: 'images/magikarp.png' },
    { number: 130, name: 'Gyarados', type: 'water', maxhp: 95,  hp: 95, maxxp: 40, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Magikarp', rarity: 0, image: 'images/gyarados.png' },
    { number: 131, name: 'Lapras', type: 'water', maxhp: 95,  hp: 95, maxxp: 45, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 3, image: 'images/lapras.png' },
    { number: 132, name: 'Ditto', type: 'normal', maxhp: 50,  hp: 50, maxxp: 10, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 4, image: 'images/ditto.png' },
    { number: 133, name: 'Eevee', type: 'normal', maxhp: 45,  hp: 45, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 4, image: 'images/eevee.png' },
    { number: 134, name: 'Vaporeon', type: 'water', maxhp: 70,  hp: 70, maxxp: 25, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Eevee', rarity: 0, image: 'images/vaporeon.png' },
    { number: 135, name: 'Jolteon', type: 'electric', maxhp: 70,  hp: 70, maxxp: 25, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Eevee', rarity: 0, image: 'images/jolteon.png' },
    { number: 136, name: 'Flareon', type: 'fire', maxhp: 70,  hp: 70, maxxp: 25, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Eevee', rarity: 0, image: 'images/flareon.png' },
    { number: 137, name: 'Porygon', type: 'normal', maxhp: 70,  hp: 70, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 4, image: 'images/porygon.png' },
    { number: 138, name: 'Omanyte', type: 'rock', maxhp: 35,  hp: 35, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 2, image: 'images/omanyte.png' },
    { number: 139, name: 'Omastar', type: 'rock', maxhp: 70,  hp: 70, maxxp: 25, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Omanyte', rarity: 0, image: 'images/omastar.png' },
    { number: 140, name: 'Kabuto', type: 'rock', maxhp: 30,  hp: 30, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 2, image: 'images/kabuto.png' },
    { number: 141, name: 'Kabutops', type: 'rock', maxhp: 70,  hp: 70, maxxp: 25, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Kabuto', rarity: 0, image: 'images/kabutops.png' },
    { number: 142, name: 'Aerodactyl', type: 'rock', maxhp: 80,  hp: 80, maxxp: 40, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 1, image: 'images/aerodactyl.png' },
    { number: 143, name: 'Snorlax', type: 'normal', maxhp: 80,  hp: 80, maxxp: 40, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 2, image: 'images/snorlax.png' },
    { number: 144, name: 'Articuno', type: 'ice', maxhp: 90,  hp: 90, maxxp: 45, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 1, image: 'images/articuno.png' },
    { number: 145, name: 'Zapdos', type: 'electric', maxhp: 90,  hp: 90, maxxp: 45, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 1, image: 'images/zapdos.png' },
    { number: 146, name: 'Moltres', type: 'fire', maxhp: 90,  hp: 90, maxxp: 45, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 1, image: 'images/moltres.png' },
    { number: 147, name: 'Dratini', type: 'dragon', maxhp: 40,  hp: 40, maxxp: 10, xp: 0, starter: false, canEvolve: true, evolvesFrom: null, rarity: 4, image: 'images/dratini.png' },
    { number: 148, name: 'Dragonair', type: 'dragon', maxhp: 60,  hp: 60, maxxp: 20, xp: 0, starter: false, canEvolve: true, evolvesFrom: 'Dratini', rarity: 3, image: 'images/dragonair.png' },
    { number: 149, name: 'Dragonite', type: 'dragon', maxhp: 90,  hp: 90, maxxp: 30, xp: 0, starter: false, canEvolve: false, evolvesFrom: 'Dragonair', rarity: 0, image: 'images/dragonite.png' },
    { number: 150, name: 'Mewtwo', type: 'special', maxhp: 100, hp: 100, maxxp: 50, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 1, image: 'images/mewtwo.png' },
    { number: 151, name: 'Mew', type: 'special', maxhp: 100, hp: 100, maxxp: 50, xp: 0, starter: false, canEvolve: false, evolvesFrom: null, rarity: 1, image: 'images/mew.png' },
  ];
  
  const leaders = [
    { name: "Brock",
      location: "pewterCity",
      leaderimage: 'images/brock.png',
      leaderParty: [    
        { number: 74, name: 'Geodude', type: 'rock', hp: 40, maxhp: 40, image: 'images/geodude.png' },
        { number: 95, name: 'Onix', type: 'rock', hp: 80, maxhp: 80, image: 'images/onix.png' }
      ]
    },
    { name: "Misty",
      location: "ceruleanCity",
      leaderimage: 'images/misty.png',
      leaderParty: [    
        { number: 120, name: 'Staryu', type: 'water', hp: 30, maxhp: 30, image: 'images/staryu.png' },
        { number: 121, name: 'Starmie', type: 'water', hp: 80, maxhp: 80, image: 'images/starmie.png' } 
      ]
    },
    { name: "Lt. Surge",
      location: "vermilionCity",
      leaderimage: 'images/ltsurge.png',
      leaderParty: [
        { number: 100, name: 'Voltorb', type: 'electric', hp: 40, maxhp: 40, image: 'images/voltorb.png' },
        { number: 25, name: 'Pikachu', type: 'electric', hp: 45, maxhp: 45, image: 'images/pikachu.png' },
        { number: 26, name: 'Raichu', type: 'electric', hp: 90, maxhp: 90, image: 'images/raichu.png' }    
      ]
    },
    { name: "Erika",
      location: "celadonCity",
      leaderimage: 'images/erika.png',
      leaderParty: [
        { number: 71, name: 'Victreebel', type: 'grass', hp: 80, maxhp: 80, image: 'images/victreebel.png' },
        { number: 45, name: 'Vileplume', type: 'grass', hp: 90, maxhp: 90, image: 'images/vileplume.png' },
        { number: 114, name: 'Tangela', type: 'grass', hp: 75, maxhp: 75, image: 'images/tangela.png' }    
      ]
    },
    { name: "Koga",
      location: "fuchsiaCity",
      leaderimage: 'images/koga.png',
      leaderParty: [
        { number: 109, name: 'Koffing', type: 'poison', hp: 40, maxhp: 40, image: 'images/koffing.png' },
        { number: 109, name: 'Koffing', type: 'poison', hp: 50, maxhp: 50, image: 'images/koffing.png' },  
        { number: 89, name: 'Muk', type: 'poison', hp: 90, maxhp: 90, image: 'images/muk.png' },  
        { number: 110, name: 'Weezing', type: 'poison', hp: 70, maxhp: 70, image: 'images/weezing.png' }    
      ]
    },
    { name: "Sabrina",
      location: "saffronCity",
      leaderimage: 'images/sabrina.png',
      leaderParty: [
        { number: 64, name: 'Kadabra', type: 'psychic', hp: 50, maxhp: 50, image: 'images/kadabra.png' },
        { number: 122, name: 'Mr. Mime', type: 'psychic', hp: 70, maxhp: 70, image: 'images/mr-mime.png' },    
        { number: 49, name: 'Venomoth', type: 'bug', hp: 80, maxhp: 80, image: 'images/venomoth.png' },
        { number: 65, name: 'Alakazam', type: 'psychic', hp: 95, maxhp: 95, image: 'images/alakazam.png' }
      ]
    },
    { name: "Blaine",
      location: "cinnabarIsland",
      leaderimage: 'images/blaine.png',
      leaderParty: [
        { number: 58, name: 'Growlithe', type: 'fire', hp: 65, maxhp: 65, image: 'images/growlithe.png' },
        { number: 77, name: 'Ponyta', type: 'fire', hp: 70, maxhp: 70, image: 'images/ponyta.png' },
        { number: 78, name: 'Rapidash', type: 'fire', hp: 95, maxhp: 95, image: 'images/rapidash.png' },
        { number: 59, name: 'Arcanine', type: 'fire', hp: 110, maxhp: 110, image: 'images/arcanine.png' }
      ]
    },
    { name: "Giovanni",
      location: "viridianCity",
      leaderimage: 'images/giovanni.png',
      leaderParty: [
        { number: 111, name: 'Rhyhorn', type: 'ground', hp: 80, maxhp: 80, image: 'images/rhyhorn.png' },
        { number: 51, name: 'Dugtrio', type: 'ground', hp: 75, maxhp: 75, image: 'images/dugtrio.png' },
        { number: 31, name: 'Nidoqueen', type: 'poison', hp: 90, maxhp: 90, image: 'images/nidoqueen.png' },
        { number: 34, name: 'Nidoking', type: 'poison', hp: 90, maxhp: 90, image: 'images/nidoking.png' },
        { number: 112, name: 'Rhydon', type: 'ground', hp: 100, maxhp: 100, image: 'images/rhydon.png' }
      ]
    }
];

const loreleiImage = 'images/lorelei.png';
const loreleiParty = [
  { number: 87, name: 'Dewgong', type: 'water', hp: 120, maxhp: 120, image: 'images/dewgong.png' },
  { number: 91, name: 'Cloyster', type: 'water', hp: 110, maxhp: 110, image: 'images/cloyster.png' },
  { number: 80, name: 'Slowbro', type: 'water', hp: 105,  maxhp: 105, image: 'images/slowbro.png' },
  { number: 124, name: 'Jynx', type: 'ice', hp: 95, maxhp: 95, image: 'images/jynx.png' },
  { number: 131, name: 'Lapras', type: 'water', hp: 125, maxhp: 125, image: 'images/lapras.png' }
];

const brunoImage = 'images/bruno.png';
const brunoParty = [
  { number: 95, name: 'Onix', type: 'rock', hp: 110, maxhp: 110, image: 'images/onix.png' },
  { number: 107, name: 'Hitmonchan', type: 'fighting', hp: 110, maxhp: 110, image: 'images/hitmonchan.png' },
  { number: 106, name: 'Hitmonlee', type: 'fighting', hp: 110, maxhp: 110, image: 'images/hitmonlee.png' },
  { number: 95, name: 'Onix', type: 'rock', hp: 110, maxhp: 110, image: 'images/onix.png' },
  { number: 68, name: 'Machamp', type: 'fighting', hp: 120, maxhp: 120, image: 'images/machamp.png'}
];

const agathaImage = 'images/agatha.png';
const agathaParty = [
  { number: 94, name: 'Gengar', type: 'ghost', hp: 105, maxhp: 105, image: 'images/gengar.png' },
  { number: 42, name: 'Golbat', type: 'poison', hp: 105, maxhp: 105, image: 'images/golbat.png' },
  { number: 93, name: 'Haunter', type: 'ghost', hp: 85, maxhp: 85, image: 'images/haunter.png' },
  { number: 24, name: 'Arbok', type: 'poison', hp: 90, maxhp: 90, image: 'images/arbok.png' },
  { number: 94, name: 'Gengar', type: 'ghost', hp: 105, maxhp: 105, image: 'images/gengar.png' }
];

const lanceImage = 'images/lance.png';
const lanceParty = [
  { number: 130, name: 'Gyarados', type: 'water', hp: 125, maxhp: 125, image: 'images/gyarados.png' },
  { number: 148, name: 'Dragonair', type: 'dragon', hp: 90, maxhp: 90, image: 'images/dragonair.png' },
  { number: 148, name: 'Dragonair', type: 'dragon', hp: 90, maxhp: 90, image: 'images/dragonair.png' },
  { number: 142, name: 'Aerodactyl', type: 'rock', hp: 110, maxhp: 110, image: 'images/aerodactyl.png' },
  { number: 149, name: 'Dragonite', type: 'dragon', hp: 120, maxhp: 120, image: 'images/dragonite.png' }
];

const characters = [
  { name: 'Leaf', image: 'images/leaf.png' },
  { name: 'Red', image: 'images/red.png' },
  { name: 'Elaine', image: 'images/elaine.png' },
  { name: 'Chase', image: 'images/chase.png' }
];

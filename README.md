***Bricks Pokémon Adventure \- Battle the Elite Four\!***

**Disclaimer**: This project is a fan-made, educational endeavor created for learning purposes only. It is not affiliated with, endorsed by, or sponsored by Nintendo, Game Freak, The Pokémon Company, or any related entities. All Pokémon-related intellectual property, including characters, names, and assets, belongs to their respective owners. This game is non-commercial, free to play, and not intended for profit or distribution beyond educational use.  
[\!\[License: MIT\](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
**Bricks Pokémon Adventure** is a browser-based, single-player game inspired by Pokémon, set in Kanto. Choose a trainer (Leaf, Red, Elaine, or Chase), pick a starter Pokémon, collect eight Gym Badges, and defeat the Elite Four to become Champion\!

**Table of Contents**

* Description (\#description)  
* Features (\#features)  
* Demo (\#demo)  
* Screenshots (\#screenshots)  
* Tech Stack (\#tech-stack)  
* Installation (\#installation)  
* Usage (\#usage)  
* Game Rules (\#game-rules)  
* Known Issues (\#known-issues)  
* Contributing (\#contributing)  
* License (\#license)

**Description**

Start in Pallet Town, selecting a trainer and a starter (Bulbasaur, Charmander, Squirtle, Pikachu, or Eevee). Travel through 10 Kanto areas (Pallet Town to Indigo Plateau), catching Pokémon (151 total, from Pidgey to Mewtwo), battling trainers, and defeating Gym Leaders like Brock and Misty. Earn badges to unlock areas and challenge the Elite Four (Lorelei, Bruno, Agatha, Lance). Manage your party and items (Poké Balls, Potions, Rare Candies) strategically, as fainting leads to Game Over. Enjoy retro sprites, area-specific backgrounds, and dynamic UI with fading messages.

**Features**

* **Trainers**: Choose Leaf, Red, Elaine, or Chase with unique sprites.  
* **Starters**: Bulbasaur (Grass), Charmander (Fire), Squirtle (Water), Pikachu (Electric), or Eevee (Normal).  
* **Pokémon**: Catch 151 Pokémon; evolve them (e.g., Bulbasaur → Venusaur, Eevee → Vaporeon/Jolteon/Flareon randomly).  
* **Battles**: Turn-based fights against wild Pokémon, trainers (1–5 Pokémon), Gym Leaders (e.g., Brock: Geodude, Onix), or Elite Four (e.g., Lance: Dragonite).  
* **Party**: Up to six Pokémon; extras go to Collection (viewable at Poké Centers).  
* **Inventory**: Poké Balls (catch, 1 Gold), Potions (20 HP, 2 Gold), Rare Candies (1 XP), Gold (currency).  
* **Progression**: Earn badges (Boulder, Cascade, etc.) to unlock areas; all badges unlock Indigo Plateau.  
* **Poké Center**: Heal Pokémon or view Collection.  
* **Visuals**: Pixel-art sprites, backgrounds (e.g., Pallet Town’s fields), Poké Ball capture animations, and badge highlights.  
* **UI**: Hover effects, fading message boxes, active party slot indicators.  
* **Game States**: Win by defeating the Elite Four; lose if party faints.

**Demo**

Play at: [https://emptybrick.github.io/GA-Battler-Game-Project-1/](https://emptybrick.github.io/GA-Battler-Game-Project-1/)

**Screenshots**

Key visuals from the demo:

* **Start Screen**: Trainer selection (Leaf, Red, Elaine, Chase) with vibrant sprites.  
* **Pallet Town**: Grassy backdrop, buttons for catching Pokémon, Poké Mart, and Poké Center.  
* **Battle Screen**: Your Pokémon (e.g., Pikachu) vs. wild Pokémon (e.g., Rattata) or trainers, with HP and Poké Ball animations.  
* **Gym Battle**: Leader (e.g., Misty with Staryu, Starmie) in a stadium, showing challenge/attack UI.  
* **Poké Mart**: Shop with Poké Balls (1 Gold), Potions (2 Gold), and Gold counter.  
* **Game Cleared**: Victory screen after defeating the Elite Four, with a platinum background.

*Note*: Visit the demo (\#demo) for live visuals. Add screenshots to `images/screenshots/` for offline reference.

**Tech Stack**

* **HTML5**: Semantic structure for screens (start, battle, Poké Mart).  
* **CSS3**: Flexbox, Google Fonts (Nabla, Bangers), backgrounds (e.g., `pallet-town.jpg`).  
* **JavaScript (Vanilla)**: Battle logic, DOM updates, Pokémon evolution, item management.  
* **Assets**: Sprites, trainer images, badges in `images/`.  
* **Google Fonts**: Nabla, Bangers for retro typography.

**Installation**

* Clone the repository:  
* `bash`  
* git clone https://github.com/emptybrick/GA-Battler-Game-Project-1.git  
* Navigate to the directory:  
* `bash`  
* cd GA-Battler-Game-Project-1  
* Verify files:  
  * `index.html`  
  * `style.css`  
  * `app.js`  
  * `data.js`  
  * `images/` (sprites, backgrounds)  
* Open `index.html` in a browser (Chrome, Firefox):  
  * Use a local server (e.g., VS Code Live Server, `npx http-server`) to avoid CORS issues.

**Usage**

* Load `index.html` or visit the demo (\#demo).  
* Select a trainer: Leaf, Red, Elaine, or Chase.  
* Choose a starter: Bulbasaur, Charmander, Squirtle, Pikachu, or Eevee.  
* Explore Kanto:  
  * **Pallet Town**: Catch 3+ Pokémon (e.g., Pidgey, Rattata, max HP \< 40\) to unlock Pewter City.  
  * **Cities**: Battle Gym Leaders for badges (e.g., Brock: Geodude, Onix; Misty: Staryu, Starmie).  
  * **Poké Mart**: Buy Poké Balls (1 Gold) or Potions (2 Gold).  
  * **Poké Center**: Heal Pokémon or view Collection.  
* Manage party:  
  * Potions: Restore 20 HP in battle (caps at max HP).  
  * Rare Candies: Add 1 XP (outside battle).  
  * Switch Pokémon (if HP \> 0).  
* Collect badges: Boulder (Pewter), Cascade (Cerulean), Thunder (Vermilion), Rainbow (Celadon), Soul (Fuchsia), Marsh (Saffron), Volcano (Cinnabar), Earth (Viridian).  
* Challenge the Elite Four at Indigo Plateau (requires all badges):  
  * Lorelei (Water/Ice: Dewgong, Cloyster, Slowbro, Jynx, Lapras).  
  * Bruno (Fighting/Rock: Onix ×2, Hitmonchan, Hitmonlee, Machamp).  
  * Agatha (Ghost/Poison: Gengar ×2, Golbat, Haunter, Arbok).  
  * Lance (Dragon/Rock: Gyarados, Dragonair ×2, Aerodactyl, Dragonite).  
* Win by defeating the Elite Four or retry if party faints.

**Game Rules**

* **Objective**: Defeat the Elite Four to become Champion.  
* **Game Over**: All party Pokémon faint (HP \= 0).  
* **Battles**:  
  * **Wild Pokémon**: Attack (damage \~maxHP/2 for player, \~maxHP/3 for opponent), then throw a Poké Ball or Run Away. Pokémon vary by area (e.g., Pallet Town: max HP \< 40; later areas: max HP \< 100).  
  * **Trainers**: Random teams (1–5 Pokémon, e.g., Zubat, Pidgeotto) based on area difficulty.  
  * **Gym Leaders/Elite Four**: Fixed teams (e.g., Koga: Koffing ×2, Muk, Weezing; Lance: Dragonite); no catching/running.  
  * Actions: Attack, Switch Pokémon, Use Potion, Throw Poké Ball (wild battles).  
* **Party**: Max six Pokémon; extras go to Collection (view-only at Poké Centers).  
* **Progression**:  
  * Pallet Town: Catch 3+ Pokémon to proceed.  
  * Cities: Defeat Gym Leader for a badge (e.g., Thunder from Lt. Surge) to unlock the next area.  
  * Indigo Plateau: Requires all eight badges.  
* **Items**:  
  * **Poké Balls**: Catch wild Pokémon (1 Gold); one per species (party or Collection).  
  * **Potions**: Restore 20 HP (2 Gold); caps at max HP.  
  * **Rare Candies**: Add 1 XP (earned from battles).  
  * **Gold**: Earned from battles (1–50, varies by opponent); spent at Poké Marts.  
* **Pokémon Growth**:  
  * Gain 1 XP per defeated Pokémon.  
  * At max XP (10–50, e.g., 10 for Pidgey, 50 for Mewtwo), evolve (e.g., Charmander → Charmeleon) or gain \+30 max HP if no evolution (e.g., Tauros). Eevee evolves randomly to Vaporeon, Jolteon, or Flareon.  
* **Tips**:  
  * Heal at Poké Centers frequently.  
  * Catch diverse types (e.g., Grass for Brock, Electric for Misty).  
  * Save Potions for Gym/Elite Four battles.  
  * Use Rare Candies to evolve key Pokémon (e.g., Magikarp → Gyarados).

See the in-game "Game Rules and Explanations" (right panel, 8-page guide) for details.

**Known Issues**

* **Message Overlap**: Rapid actions cause message box text to overlap due to fixed 500ms timeouts in `showMessageBox`. **Fix**: Clear existing timeouts before starting new ones.  
* **Collection Limitation**: Collection (`pokecenter-collection-box`) is view-only; no swapping with party. **Potential Feature**: Add swap functionality.

Report issues via GitHub Issues.

**Contributing**

Contributions to fix bugs, enhance gameplay, or add features are welcome, provided they respect the non-commercial, educational scope. To contribute:

* Fork the repository.  
* Create a feature branch:  
* `bash`  
* git checkout \-b feature/your-feature  
* Commit changes:  
* `bash`  
* git commit \-m "Add your feature"  
* Push to your branch:  
* `bash`  
* git push origin feature/your-feature  
* Open a Pull Request on GitHub.

Include comments and test locally. Submit bug reports or ideas via GitHub Issues.

**License**

This project is licensed under the MIT License (LICENSE). Use, modify, and distribute per the license terms, provided it remains non-commercial and includes the Pokémon IP disclaimer.

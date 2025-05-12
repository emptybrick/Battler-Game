# BRICKS POKÉMON ADVENTURE \- BATTLE THE ELITE FOUR\!

### **DISCLAIMER** 

This project is a fan-made, educational endeavor created for learning purposes only. It is not affiliated with, endorsed by, or sponsored by Nintendo, Game Freak, The Pokémon Company, or any related entities. All Pokémon-related intellectual property belongs to their respective owners. This game is non-commercial, free to play, and not intended for profit.

## DESCRIPTION 

A browser-based Pokémon game set in Kanto. Choose a trainer, catch Pokémon, earn badges, and defeat the Elite Four to become the Pokémon Champion\! Planned upgrades include enhanced catching mechanics, post-battle evolutions, animated Poké Balls, and a rival.

![Main Gameplay Screenshot](/images/readme-image-1.png)  
*A screenshot of the main gameplay screen, showing a battle in Pallet Town with the player’s trainer and a wild Pokémon.*

## FEATURES

* Pick your trainer: Leaf, Red, Elaine, or Chase.   
* Choose a starter: Bulbasaur, Charmander, Squirtle, Pikachu, or Eevee.   
* Catch Pokémon: Collect all 151 Kanto Pokémon and evolve them (e.g., Bulbasaur to Venusaur).   
* Battle opponents: Face wild Pokémon, trainers (1–5 Pokémon each), Gym Leaders (e.g., Brock with Geodude and Onix), and the Elite Four (e.g., Lance with Dragonite).  
* Manage your party: Hold up to 6 Pokémon; extras go to your Collection (check at Poké Centers).   
* Use items: Poké Balls to catch (1 Gold each), Potions to heal (20 HP, 2 Gold), Rare Candies for XP (1 XP), and Gold as currency.   
* Progress through Kanto: Earn 8 badges to unlock the Indigo Plateau.   
* Enjoy retro visuals: Classic sprites, area backgrounds (like Pallet Town), and fading message boxes for dialogue.   
* Save your progress: Game state is saved locally and can be loaded on restart.

![Battle Screenshot](/images/readme-image-2.png)  
*Character selection screen image, showing each of the four character model choices.*

## DEMO

Play the game here: [**https://emptybrick.github.io/GA-Battler-Game-Project-1/**](https://emptybrick.github.io/GA-Battler-Game-Project-1/)

## INSTALLATION

* Clone the repository to your local machine:   
  * git clone [https://github.com/emptybrick/GA-Battler-Game-Project-1.git](https://github.com/emptybrick/GA-Battler-Game-Project-1.git)   
* Navigate to the project folder: cd GA-Battler-Game-Project-1   
* Open index.html in a browser (use a local server like VS Code Live Server to avoid CORS issues with assets).

## USAGE

* Visit the demo link above or run the game locally.   
* Select your trainer and starter Pokémon.   
* Explore the Kanto region:   
  * Start in Pallet Town: Catch at least 3 Pokémon (e.g., Rattata) to unlock Pewter City.   
  * Visit cities: Defeat Gym Leaders (e.g., Misty with Staryu and Starmie) to earn badges.   
  * Shop at the Poké Mart: Buy Poké Balls or Potions.   
  * Heal at Poké Centers: Restore your party or view your Collection.   
  * Manage your party: Heal with Potions, switch Pokémon, or evolve them with Rare Candies.   
  * Earn all 8 badges: Boulder, Cascade, Thunder, Rainbow, Soul, Marsh, Volcano, and Earth.   
  * Challenge the Elite Four: Face Lorelei, Bruno, Agatha, and Lance.   
  * Win the game: Defeat the Elite Four to become Champion, or retry if your party faints.

## GAME RULES

* Objective: Become the Pokémon Champion by defeating the Elite Four.   
* Battles:   
  * Wild Pokémon: Attack (deals \~maxHP/2 damage), catch with Poké Balls, or run. Pokémon strength varies by area (e.g., max HP under 40 in Pallet Town).   
  * Trainers: Face opponents with random teams of 1–5 Pokémon.   
  * Gym Leaders and Elite Four: Battle fixed teams (e.g., Giovanni with Rhyhorn and Dugtrio).   
* Battle actions: Attack, Switch Pokémon, Use Potion, or Use Poké Ball (wild battles only).   
* Party limit: Maximum of 6 Pokémon; extras are sent to your Collection.   
* Progression: Pallet Town: Catch 3+ Pokémon to advance. Cities: Earn badges to unlock new areas. Indigo Plateau: Requires all 8 badges to enter.   
* Items: Poké Balls: Catch one Pokémon per species (costs 1 Gold). Potions: Restore 20 HP (costs 2 Gold). Rare Candies: Add 1 XP to a Pokémon. Gold: Earn 1–50 Gold per battle win.   
* Growth: Gain 1 XP per defeated Pokémon; Pokémon evolve at max XP (e.g., 10 XP for Pidgey) or gain \+30 max HP if they can’t evolve.   
* Tips:   
  * Heal your party frequently at Poké Centers.   
  * Catch a variety of Pokémon types (e.g., Electric types for Misty’s Water Pokémon).  
  * Save Potions for challenging battles like Gym Leaders.

## PLANNED UPGRADES

* Add Poké Ball failure mechanic: Poké Balls can fail, playing a fail sound if unsuccessful, allowing you to try again.   
* Add post-battle evolution: Pokémon will evolve only after leaving a battle, with an evolution sound and area music playing afterward.   
* Animate Poké Balls: Add animations for throwing Poké Balls when catching Pokémon or switching party members.   
* Add a rival: Introduce a rival character for recurring battles throughout your journey.   
* Balance rarity and HP: Adjust Pokémon rarity and HP values for better gameplay balance. Area-based typing: Increase the chance of encountering specific Pokémon types (e.g., Electric in certain areas) when searching for wild Pokémon.
* Add functionality for Pokémon types by increasing/decreasing damage based on type vs type dependencies. (ie. grass is weak against fire).
* Add chance to encounter wild Pokémon by area depending on type. (ie. increased chance to encounter water Pokémon in Cerulean City).
* Replace max HP random damage: Replace the current max HP-based random damage with two attacks: a basic attack (unlimited) and a special attack (limited to 5 uses per battle).

## ABOUT ME

I’m EmptyBrick, a coder who loves Pokémon\! I updated this game on May 10, 2025, to bring a Kanto adventure to life using JavaScript, inspired by the classic Pokémon games I grew up with.

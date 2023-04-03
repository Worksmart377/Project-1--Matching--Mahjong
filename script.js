 /*PseudoCode-

The browser will load with all of the tiles layed out and the game will be ready to play and be initialized.
The board will consist of a minimum of 8 rows and 8 columns of tiles (2D array).
Each tile design will be assigned a numeric value so that when they are placed into the array they can be randomized and matched to their like tile. 
The tiles will be placed into random order in the array using a shuffle function. 

Single Player Gameplay:

The player will need to locate two exposed matching tiles, meaning they are open on the left or the right side. 

When the player clicks on a tile it will be highlighted (selected with an eventlistener) until the player clicks on it's match. These clicked items may have be added to a new empty array.  
Once both have been clicked they will be highlighted for 3 seconds and then they will both be removed from the board (array) using a splice method. 

If the player clicks on an unmatching tile there will be a message that states "Tile is not a match. Try again!" (about 3 seconds)

If the player wants to change the originally clicked tile to select another set of matches, then they will have to reclick the highlighted tile in order to remove the selection. I think here I can use a class and a function to toggle between 'active' and 'not active' potentially placing the clicked tiles into a new empty array until they are clicked again to take them out.

If the player has no visible and exposed tiles to click then they can click the shuffle button which will randomly shuffle all of the tiles left on the board using the shuffle function.

Win Logic :

Once the player selects every match on the board and they have all been removed then they win and they can click restart game to play again. This will replace the board for a new game and reshuffle tiles in a randomn order (intialize). When there are only 2 tiles left on the board there will be a message that states, "Great Job, you won!"









 */
 
 
 
 /*----- constants- changing variables -----*/


  /*----- state- unchanging variables -----*/

  //Each tile will have a value assigned to it and that value will be placed in the board inside of the array randomly
const tiles = {
    sou1: 1,
    sou2: 2,
    sou3: 3,
    sou4: 4,
    sou5: 5,
    sou6: 6,
    sou7: 7,
    sou8: 8,
    sou9: 9,
    sou10: 10,
    pin1: 11,
    pin2: 12,
    pin3: 13,
    pin4: 14,
    pin5: 15,
    pin6: 16,
    pin7: 17,
    pin8: 18,
    pin9: 19,
    pin10: 20,
    man1: 21,
    man2: 22,
    man3: 23,
    man4: 24,
    man5: 25,
    man6: 26,
    man7: 27,
    man8: 28,
    man9: 29,
    man10: 30,
    chun: 31,

}

//shuffle sound variable
const sound = new Audio();
sound.src = 'dieShuffle3.wav';


  /*----- cached elements  -----*/


  /*----- event listeners -----*/


  /*----- functions -----*/
//this function initializes the board state
initialize()

function initialize() {

Board = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 0
    [0, 0, 0, 0, 0, 0, 0, 0], // row 1
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 2
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 3
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 4
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 5
    [0, 0, 0, 0, 0, 0, 0, 0], // row 6
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // row 7
//col 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,10,11
];

render();
}





//this function will play sound when shuffle or restart game buttion is clicked
playSound() {
    if() {
        sound.currentTime = 0;
        sound.play();
    }
};

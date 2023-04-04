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

let  boardArr = [
    ['/images/r-bamboo.png','/images/bamboo2-b.png', '/images/blank.png','/images/bamboo4-b.png','/images/black/chun.png','/images/bamboo5-b.png', '/images/man1.png', '/images/bamboo6-b.png'],
    ['/images/man2.png','/images/bamboo7-b.png', '/images/man8.png','/images/bamboo8-b.png','/images/pin9.png','/images/bamboo9-b.png', '/images/man4.png', '/images/bird-b.png'],
    ['/images/bamboo4.png','/images/blank-b.png', '/images/bamboo5.png','/images/chun-b.png','/images/pin7.png', '/images/hatsu-b.png', '/images/bamboo6.png', '/images/man1-b.png'],
    ['/images/bamboo7.png','/images/man2-b.png', '/images/rpin5.png','/images/man3-b.png','/images/bird.png','/images/man4-b.png', '/images/pin10.png', '/images/man5-b.png'],
    ['/images/pin6.png','/images/man6-b.png', '/images/pin8.png','/images/man7-b.png','/images/bamboo8.png','/images/man8-b.png', '/images/pin3.png', '/images/nan-b.png'],
    ['/images/pin5.png','/images/pei-b.png', '/images/pin4.png','/images/pin1-b.png','/images/hatsu.png','/images/pin7-b.png', '/images/nan.png', '/images/pin3-b.png'],
    ['/images/pin1.png','/images/pin4-b.png', '/images/pei.png','/images/pin5-b.png','/images/man6.png','/images/pin6-b.png', '/images/man7.png', '/images/pin8-b.png'],
    ['/images/bamboo9.png','/images/pin9-b.png', '/images/man5.png','/images/pin10-b.png','/images/bamboo2.png','/images/r-bamboo-b.png', '/images/man3.png', '/images/rpin5-b.png'],   
];

  /*----- state- unchanging variables -----*/
let winner;




//shuffle sound variable
// const sound = new Audio();
// sound.src = 'dieShuffle3.wav';


  /*----- cached elements  -----*/
const restartGame = document.querySelector('#Restart');
const shuffleTiles = document.querySelector('#Shuffle');
const messageToPlayer = document.querySelector('h2');


  /*----- event listeners -----*/
restartGame.addEventListener('click',initialize);
  
  /*----- functions -----*/

  let boardShuffle= function (boardArr) {
     for(i = 0; i < boardArr.length; i++) {
         for(j = 0; j < boardArr[i].length; j++) {
         }  
     }
     let remainingTiles = boardArr.length, j, i;
     while (remainingTiles) {
       i = Math.floor(Math.random() * remainingTiles--);
       j = boardArr[remainingTiles];
       boardArr[remainingTiles] = boardArr[i];
       boardArr[i] = j;
     } 
     return boardArr;
   }

  initialize()

function initialize() {
    return boardShuffle;
    
// render();
}
function render() {
    renderBoard();
    renderControls();
    renderMessages();
}


 function renderBoard() {
    boardArr.forEach((colArr,colIdx) => {

    })
 }
    
// function shufflePics(pictureArr)  {
//     return pictureArr[Math.floor(Math.random() * pictureArr.length)];

// }
// console.log(shufflePics(pictureArr));



//this function will play sound when shuffle or restart game buttion is clicked
// playSound() {
//     if(clicked) {
//         sound.currentTime = 0;
//         sound.play();
//     }
// };

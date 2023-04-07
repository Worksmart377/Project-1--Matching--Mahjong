 /*PseudoCode-

The browser will load with all of the tiles layed out and the game will be initialized.
The timer will need to be started for the player to begin. 
The board will consist of a minimum of 8 rows and 8 columns of tiles (array of objects).
Each tile design will be assigned a name and image property so that when they are placed into the array they can be randomized and matched to their like tile. 

Single Player Gameplay:

The player will start the timer, which is 60 seconds. They will needs to beat the clock to win. 

The player will need to locate two matching tiles and select both of them to remove them from the board. 

When the player clicks on a match the tiles will be added to a new array, the values will be compared, and if they are a match they will be highlighted for second then removed from the board.  

If the player clicks on an unmatching tile there will be a message that states "Tile is not a match. Try again!" 

Win Logic :

If the player can beat the timer and the player selects every match on the board and they have all been removed then they win and they can click restart game to play again. This will replace the board for a new game.



 */
 
 
 
 /*----- constants variables -----*/

 let  tilesArr = [

    { name:'r-bamboo', Image:'/images/r-bamboo.png'},
    { name:'bamboo2', Image:'/images/bamboo2-b.png'},
    { name:'blank', Image:'/images/blank.png'},
    { name:'bamboo4', Image:'/images/bamboo4-b.png'},
    { name:'chun', Image:'/images/chun.png'},
    { name:'bamboo5', Image:'/images/bamboo5-b.png'},
    { name:'man1', Image:'/images/man1.png'},
    { name:'bamboo6', Image:'/images/bamboo6-b.png'},

    { name:'man2', Image:'/images/man2.png'},
    { name:'bamboo7', Image:'/images/bamboo7-b.png'},
    { name:'man8', Image: '/images/man8.png'},
    { name:'bamboo8', Image:'/images/bamboo8-b.png'},
    { name:'pin9', Image:'/images/pin9.png'},
    { name:'bamboo9', Image:'/images/bamboo9-b.png'},
    { name:'man4', Image:'/images/man4.png'},
    { name:'bird', Image:'/images/bird-b.png'},

    { name:'bamboo4', Image:'/images/bamboo4.png'},
    { name:'blank', Image:'/images/blank-b.png'},
    { name:'bamboo5', Image:'/images/bamboo5.png'},
    { name:'chun', Image:'/images/chun-b.png'},
    { name:'shaa', Image:'/images/shaa.png'},
    { name:'hatsu', Image: '/images/hatsu-b.png'},
    { name:'bamboo6', Image:'/images/bamboo6.png'},
    { name:'man1', Image:'/images/man1-b.png'},

    { name:'bamboo7', Image:'/images/bamboo7.png'},
    { name:'man2', Image:'/images/man2-b.png'},
    { name:'rpin5',Image:'/images/rpin5.png'},
    { name:'man3', Image:'/images/man3-b.png'}, 
    { name:'bird', Image:'/images/bird.png'},
    { name:'man4', Image:'/images/man4-b.png'},
    { name:'pin10', Image:'/images/pin10.png'},
    { name:'man5', Image:'/images/man5-b.png'},

    { name:'pin6', Image:'/images/pin6.png'},
    { name:'man6', Image:'/images/man6-b.png'},
    { name:'pin8', Image:'/images/pin8.png'},
    { name:'man7', Image:'/images/man7-b.png'},
    { name:'bamboo8', Image:'/images/bamboo8.png'},
    { name:'man8', Image:'/images/man8-b.png'},
    { name:'pin3', Image:'/images/pin3.png'},
    { name:'nan', Image:'/images/nan-b.png'},

    { name:'pin5', Image:'/images/pin5.png'},
    { name:'pei', Image:'/images/pei-b.png'},
    { name:'pin4', Image:'/images/pin4.png'},
    { name:'pin1', Image:'/images/pin1-b.png'},
    { name:'hatsu', Image:'/images/hatsu.png'},
    { name:'shaa', Image:'/images/shaa-b.png'},
    { name:'nan', Image:'/images/nan.png'},
    { name:'pin3', Image:'/images/pin3-b.png'},

    {name:'pin1', Image:'/images/pin1.png'},
    {name:'pin4', Image:'/images/pin4-b.png'},
    {name:'pei', Image:'/images/pei.png'},
    {name:'pin5', Image:'/images/pin5-b.png'},
    {name:'man6', Image:'/images/man6.png'},
    {name:'pin6', Image:'/images/pin6-b.png'},
    {name:'man7', Image: '/images/man7.png'}, 
    {name:'pin8', Image: '/images/pin8-b.png'},


    {name:'bamboo9', Image:'/images/bamboo9.png'},
    {name:'pin9', Image:'/images/pin9-b.png'},
    {name:'man5', Image: '/images/man5.png'},
    {name:'pin10', Image:'/images/pin10-b.png'},
    {name:'bamboo2', Image:'/images/bamboo2.png'},
    {name:'r-bamboo', Image:'/images/r-bamboo-b.png'},
    {name:'man3', Image:'/images/man3.png'},
    {name:'rpin5', Image:'/images/rpin5-b.png'},
]



  /*----- changing variables -----*/

 let boardArr = [];
 let matchesArr = [];
 let parentDivArr = [];
 let seconds = 60;





  /*----- cached elements  -----*/
const restartGame = document.querySelector('#Restart');
const messageToPlayer = document.getElementById('message');
const gameBoard = document.getElementById('board');
const timer = document.getElementById('countdown');
const timerBtn = document.getElementById('timer-btn')
timer.innerHTML =`00:${seconds}`;

  /*----- event listeners -----*/
restartGame.addEventListener('click',initialize);
timerBtn.addEventListener('click', countDown)

/*----- functions -----*/

initialize();

 function initialize() {
    
//     window.onload =function() {//reloads the page
//         renderBoard();
//   }   
    renderBoard();
    playSound();
    let seconds = 60;
    timer.innerHTML =`00:${seconds}`;

} 
  
function countDown() {
   let clock= setInterval(function() {
        seconds --;
        timer.innerHTML= `00:${seconds}`;
        if(seconds < 0 || seconds <1) {
            clearInterval(clock)
            timer.innerHTML= `Time's up!`;
                 let seconds = 60;
        }
    },1000)
  }

 function renderBoard() {
        for (let i=0; i < tilesArr.length; i++) {
            let tile = document.createElement('div');//creating div using new variable tile
            let pic = document.createElement("img");//creating img using new variable pic
            pic.setAttribute('src','.'+tilesArr[i].Image);//setting the img src to tillesArr key Image
            pic.classList.add(tilesArr[i].name);//adds classes to all new images using key name
            tile.appendChild(pic);//adds child pic to tile
            gameBoard.appendChild(tile);//adds child tile to gameboard div
            boardArr.push(tile);//pushes the new divs into the empty boardArr
              if(boardArr.length === 64) {
              return;
            };
    }   
    
 }
 
 gameBoard.addEventListener('click',function(e){
    if (e.target.tagName === 'IMG' && matchesArr.length <= 2) {//if item clicked is image and array length is less than 2
        let tileName = e.target.classList[0] 
        matchesArr.push(tileName);//push variable tileName into empty array
        let parentDiv = e.target.parentElement; //
        parentDivArr.push(parentDiv); //pushes the parent div into empty array
    }   
    if (matchesArr.length === 2) {  
        if (matchesArr[0] === matchesArr[1]) { //checks if items are a match
            parentDivArr[0].style.border = 'solid 5px darkRed';//highlights the match when they are selected
            parentDivArr[1].style.border = 'solid 5px darkRed'; 
            setTimeout( function() { //waits to remove tiles until the match is displayed
            parentDivArr[1].remove(); 
            parentDivArr[0].remove();
            parentDivArr = []; //empty array
            },'600');    
            matchesArr = [];    //empty array
                } else {
                    matchesArr = [];
                    messageToPlayer.innerText = 'Not a match, try again!';
                        setTimeout( function() {
                        messageToPlayer.style.visibility = 'hidden';
                    },1000)
            }         
        } 
});
 


//this function will play sound when shuffle or restart game buttion is clicked
function playSound() {
        let sound = new Audio('dieShuffle3.wav');//sets audio source to new variable sound
        sound.loop = false;//sets play loop to false
        sound.play(); //uses play method on variable sound
        audio = document.querySelectorAll('button') //selects both buttons

    }
    
const startgameBtn = document.getElementById('start-game-btn'); 

const ROCK='ROCK';
const PAPER='PAPER';
const SCR='SCR';
const DEFAULT='ROCK';
const RESULT_DRAW='DRAW';
const PLAYER_WIN='PWIN';
const COMP_WIN='CWIN';



const getPlayerChoice= function(){
  const selection=prompt(`${ROCK},${PAPER} or,${SCR}`).toUpperCase();
     if(selection!==ROCK && selection!==PAPER && selection!==SCR)
     {
         alert(`Invalid choice  ${DEFAULT} is deafault for you `);
         return DEFAULT;
     }
     return selection;

}

const getComputerChoice=function()
{
    const randomvalue=Math.random();  //it is always 0 or 1
    if(randomvalue<0.34)
    {
        return ROCK;
    }
    else if(randomvalue<0.67)
    {
        return PAPER;
    }
    else
    {
        return SCR;
    }
   
}

const getWinner=function(cChoice,pChoice)
{
    if(cChoice===pChoice)
    {
        return RESULT_DRAW;
    }
    else if(cChoice===ROCK && pChoice===PAPER || cChoice===PAPER && pChoice===SCR || cChoice===SCR && pChoice===ROCK)
    {
        return PLAYER_WIN;

    }
    else
    {
        return COMP_WIN;
    }
}




startgameBtn.addEventListener('click', function()
{
    console.log('game is starting');
    const playerSelection=getPlayerChoice();
    console.log(playerSelection);
    const computerChoice=getComputerChoice();
    const winner=getWinner();
    let message=`you picked ${playerSelection} ,computer picked ${computerChoice}so...`;
    if(winner===RESULT_DRAW)
    {
        message=message+'had a draw';
    }
    else if(winner===PLAYER_WIN)
    {
        message=message+'won';
    }
    else
    {
        message=message+'lost';
    }
   // console.log(winner); 
   alert(message);


});





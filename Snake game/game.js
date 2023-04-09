let Play_Board = document.querySelector(".game-board")
let FoodX = 10 , FoodY = 13 ; 
let SnakeX =5  , SnakeY = 10;
let veloX = 0 , veloY=0;
let snake_body = [];
let score = document.querySelector(".score");
score.innerHTML ="Hello"

let ChangeFood = ()=> {
    FoodX = Math.floor(Math.random()*30)+1
    FoodY = Math.floor(Math.random()*30)+1
    console.log(FoodX , FoodY)
}

const GameInit = () => {

    SnakeX +=veloX;
    SnakeY +=veloY;

    let MarkupHtml = `<div class="food" style="grid-area: ${FoodY}/ ${FoodX}" ></div>`;

    for (let i = 0; i < snake_body.length; i++) {
        
    MarkupHtml += `<div class="head_snake" style="grid-area: ${snake_body[i][1]}/ ${snake_body[i][0]}" ></div>`;
        
    }
    // MarkupHtml += `<div class="head_snake" style="grid-area: ${SnakeY}/ ${SnakeX}" ></div>`;
    Play_Board.innerHTML = MarkupHtml;


    if(FoodX == SnakeX & FoodY == SnakeY){
        console.log("EATED")
        snake_body.push([FoodX , FoodY])
        console.log(snake_body.length)
        ChangeFood()    
        score.innerHTML = snake_body.length
    }


    //algorithme to shift the body to head (Append the current positon to head and shift other to right)
    for (let i = snake_body.length - 1; i > 0; i--) {
        snake_body[i] = snake_body[i - 1];

    }
    //head take the current postion 
    snake_body[0] = [SnakeX, SnakeY];
    
    

}
console.log(snake_body)
// ArrowUp ArrowDown ArrowLeft ArrowRight 

const changedirection = (e)=> {
    if (e.code === 'ArrowUp'){
        veloX = 0 ; veloY=-1;
    }
    else if (e.code === 'ArrowDown'){
        veloX = 0 ; veloY=1;
    }
    else if (e.code === 'ArrowLeft'){
        veloX = -1 ; veloY=0;
    }
    else if (e.code === 'ArrowRight'){
        veloX = 1 ; veloY=0;
    }
    GameInit()

}
ChangeFood();

setInterval(GameInit , 11000/60)



document.addEventListener("keydown" , changedirection)


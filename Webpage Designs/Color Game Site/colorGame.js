var squares = document.querySelectorAll(".square");
var rgbTitle = document.querySelector(".rgbTitle");
var resultBar = document.querySelector(".result");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector(".reset");
var modeBtns = document.querySelectorAll(".mode");
var container = document.querySelector(".container");

var mode = "hard";
var colors = generateRandomColors(6);
var goal = pickColor();
rgbTitle.textContent = goal;

init()

function init(){
    setupModeBtn();
    setupSquares();
}

function setupModeBtn(){
    for (var i = 0; i < modeBtns.length; i++){
        modeBtns[i].addEventListener("click",function(){
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            if(this.textContent == "EASY"){
                mode = "easy";
                for (var i = 3; i < squares.length; i++) {
                    squares[i].style.display = "none";
                }
                reset(3);
            }
            else{
                mode = "hard";
                for (var i = 3; i < squares.length; i++) {
                    squares[i].style.display = "block";
                }
                reset(6);
            }
        });
    }
}

function setupSquares(){
    for(var i = 0; i< squares.length; i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click",function(){
            var clicked = this.style.backgroundColor;
            if(clicked == goal){
                resultBar.textContent = "Correct!";
                correct(clicked);
            }
            else{
                this.style.backgroundColor = "#232323";
                resultBar.textContent = "Try Again";
            }
        });
    }
}


resetBtn.addEventListener("click", function(){
    if(mode == "easy"){
        reset(3);
    }
    else{
        reset(6);
    }
});

function correct(color){
    for(var i = 0; i < squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
    h1.style.background = goal;
    resetBtn.textContent = "PLAY AGAIN?";
}

function pickColor(){
    var colorIndex = Math.round(Math.random()*(colors.length-0.6));
    return colors[colorIndex]
}

function generateRandomColors(num){
    // Make array
    var colorArray = []
    // add num random colors to array
    for(var i = 0; i < num; i++){
        colorArray.push(randomColor());
    }
    // return the array
    return colorArray;
}

function randomColor(){
    var r = Math.round(Math.random()*255.4);
    var g = Math.round(Math.random()*255.4);
    var b = Math.round(Math.random()*255.4);
    
    var color = "rgb(" + r + ", " + g + ", "+ b +")";
    return color
}

function reset(num){
    colors = generateRandomColors(num);
    goal = pickColor();
    rgbTitle.textContent = goal.toUpperCase();
    for (var i = 0; i < num; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    resetBtn.textContent = "NEW COLORS";
    resultBar.textContent = "";
}
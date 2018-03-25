function gridSize(){
  var counterX;
  var counterY = 0;
  for (var i = 0; i < GRID.length; i++){
    counterX = 0;
    for (var x = 0; x < GRID[i].length; x++){
      counterX++;
    }
    counterY++;
  }
  if (counterX >= 0 && counterX <= 25){  
    return counterX + " x " + counterY;
  } else {
    return "";
  }
}

function totalCells(){
  //var str = gridSize();
  var counterC = 0;
  for (var i = 0; i < GRID.length; i++){
    for (var x = 0; x < GRID[i].length; x++){
      counterC++;
    }
  }
  return counterC;
}

function lightCell(){
  var number=0;
  var numbLet=0;
  if (arguments.length === 1){
    numbLet = arguments[0].charCodeAt(0) - 65;
    number = parseInt(arguments[0].substring(1)) -1;
  }
  
  return GRID[number][numbLet];
}

function isRock(){
  var arg = arguments[0];
  var rock = "^";
  var bool = false; 
  if (lightCell(arg) === rock){
    bool = true;
  }
  return bool;
}
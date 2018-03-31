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

function gridRows (){
  var counter = 0;
  for (var i = 0; i < GRID.length; i++){
    counter++;
  }
  return counter;
}

function gridColumns (){
  var counter = 0;
  if (gridRows()!==0){
    for (var i = 0; i < GRID[0].length; i++){
      counter++;
    }
  }
  return counter;
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
  var result="";
  if (arguments.length === 1){
    numbLet = arguments[0].charCodeAt(0) - 65;
    number = parseInt(arguments[0].substring(1)) -1;
  }
  if (number <= gridRows() && numbLet <= gridColumns()){
    result = GRID[number][numbLet];
  }
  return result;
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

function isCurrent(){
  var arg = arguments[0];
  var current = "~";
  var bool = false; 
  if (lightCell(arg) === current){
    bool = true;
  }
  return bool;
}

function lightRow(){
  return GRID[arguments[0]-1];
}

function lightColumn(){
  var col = [];
  var colNum = arguments[0].charCodeAt(0) - 65;
  for (var i = 0; i < GRID.length; i++){
    col.push(GRID[i][colNum]);
  }
  return col;
}

function isSafe(){
  var arg = arguments[0];
  var safe = "";
  var bool = false; 
  if (lightCell(arg) === safe){
    bool = true;
  }
  return bool;
}

function allRocks(){
  var newArr = [];
  var str = "";
  for (var i = 0; i < gridRows(); i++){
    for (var x = 0; x < gridColumns(); x++){
      if (GRID[i][x] === "^"){
        str = String.fromCharCode(x+65) + (i+1);
        newArr.push(str);
      }
    }
  }
  return newArr;
}
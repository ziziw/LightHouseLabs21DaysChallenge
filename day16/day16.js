GRID = [
      ["", "", "", "^", "", "", "", "", "", ""],
      ["", "", "", "", "~", "", "", "", "", ""],
      ["", "", "", "", "^", "^", "", "", "", ""],
      ["", "", "", "", "^", "^", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "", "", "", "", "", "", "", "", ""],
      ["", "^", "~", "~", "", "", "", "^", "", ""],
      ["", "^", "", "~", "~", "", "", "", "", "^"],
      ["", "^", "", "", "~", "~", "", "", "", ""],
    ];

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

function allCurrents(){
  var newArr = [];
  var str = "";
  for (var i = 0; i < gridRows(); i++){
    for (var x = 0; x < gridColumns(); x++){
      if (GRID[i][x] === "~"){
        str = String.fromCharCode(x+65) + (i+1);
        newArr.push(str);
      }
    }
  }
  return newArr;
}

function firstRock(){
  var str = "";
  for (var i = 0; i < gridRows(); i++){
    for (var x = 0; x < gridColumns(); x++){
      if (GRID[i][x] === "^"){
        return String.fromCharCode(x+65) + (i+1);
      }
    }
  }
}

function firstCurrent(){
  var str = "";
  for (var i = 0; i < gridRows(); i++){
    for (var x = 0; x < gridColumns(); x++){
      if (GRID[i][x] === "~"){
        return String.fromCharCode(x+65) + (i+1);
      }
    }
  }
}

function cellLeft(){
  var code = arguments[0].charCodeAt(0) - 65;
  var newCell = "";
  
  if (code > 0 && code < gridColumns()){
    var newCode = code - 1;
    newCell = String.fromCharCode(newCode+65) + arguments[0].substring(1);
  }
  return newCell;
}

function cellRight(){
  var code = arguments[0].charCodeAt(0) - 65;
  var newCell = "";
  
  if (code >= 0 && code < gridColumns()-1){
    var newCode = code + 1;
    newCell = String.fromCharCode(newCode+65) + arguments[0].substring(1);
  }
  return newCell;
}

function cellAbove(){
  var rowNumb = parseInt(arguments[0].substring(1));
  var newCell = "";
  
  if (rowNumb > 1 && rowNumb <= gridRows()){
    var newRow = rowNumb-1;
    newCell = arguments[0].charAt(0) + newRow;
  }
  return newCell;
}

function cellBelow(){
  var rowNumb = parseInt(arguments[0].substring(1));
  var newCell = "";
  
  if (rowNumb < gridRows()){
    var newRow = rowNumb + 1;
    newCell = arguments[0].charAt(0) + newRow;
  }
  return newCell;
}

function isDangerous (){
  if (isRock(arguments[0]) || isCurrent(arguments[0])){
    return true;
  } else if (isRock(cellBelow(arguments[0])) || isRock(cellAbove(arguments[0])) || isRock(cellLeft(arguments[0])) || isRock(cellRight(arguments[0]))){
    return true;
  } else if (isCurrent(cellBelow(arguments[0])) || isCurrent(cellAbove(arguments[0])) || isCurrent(cellLeft(arguments[0])) || isCurrent(cellRight(arguments[0]))) {
    return true;
  } else {
    return false;
  }
}

function isVerySafe(){
  if (isSafe(arguments[0]) && isSafe(cellBelow(arguments[0])) && isSafe(cellAbove(arguments[0])) && isSafe(cellLeft(arguments[0])) && isSafe(cellRight(arguments[0])) && isSafe(cellAbove(cellLeft(arguments[0]))) && isSafe(cellAbove(cellRight(arguments[0]))) && isSafe(cellBelow(cellLeft(arguments[0]))) && isSafe(cellBelow(cellRight(arguments[0])))){
    return true;
  }
}

function distressBeacon(){
  if(isVerySafe(arguments[0])){
    return arguments[0];
  } else if (isVerySafe(cellAbove(arguments[0]))){
    return cellAbove(arguments[0]);
  } else if (isVerySafe(cellBelow(arguments[0]))){
    return cellBelow(arguments[0]);
  } else if (isVerySafe(cellLeft(arguments[0]))){
    return cellLeft(arguments[0]);
  } else if (isVerySafe(cellRight(arguments[0]))){
    return (cellRight(arguments[0]));
  } else if (isVerySafe(cellAbove(cellLeft(arguments[0])))){
    return cellAbove(cellLeft(arguments[0]));
  } else if (isVerySafe(cellAbove(cellRight(arguments[0])))){
    return cellAbove(cellRight(arguments[0]));
  } else if (isVerySafe(cellBelow(cellLeft(arguments[0])))){
    return cellBelow(cellLeft(arguments[0]));
  } else if (isVerySafe(cellBelow(cellRight(arguments[0])))){
    return cellBelow(cellRight(arguments[0]));
  } else {
    return "";
  }
}
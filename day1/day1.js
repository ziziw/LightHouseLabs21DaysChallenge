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

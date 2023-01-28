const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
  if ( par == 1 && strokes ==1) {
    return "Hole-in-one!"
  }
  if(strokes === par){
    return "Par"
  }
if ( par = 4 && strokes ==1) {
  return "Hole-in-one!"
}
  if (par = 4 && strokes == 4){
  return "Par"
}

if ( par = 4 && strokes == 5) {
  return "Bogey"
}

if ( par = 4 && strokes == 2) {
  return "Eagle"
}
if ( par = 4 && strokes == 3) {
  return "Birdie"
}
if ( par = 4 && strokes == 6) {
  return "Double Bogey"
}
if ( par = 4 && strokes == 7) {
  return "Go Home!"
}

if (par = 5 && strokes == 9){
  return "Go Home!"
}

  return "Change Me";
  // Only change code above this line
}s

golfScore(5, 4);
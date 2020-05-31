/**
 * Write a program that creates a string that represents an 8×8 grid,
 * using newline characters to separate lines. 
 * At each position of the grid there is either a space or a "#" character.
 * The characters should form a chessboard.
 * 
 * Passing this string to console.log should show something like this:
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, 
define a binding size = 8 and change the program so that it works for any size, 
outputting a grid of the given width and height.
 */
let builtString = "";
const binding_size = 8;

for (let y = 0; y < binding_size; y++) {
  let space_start = false;
  if (y % 2 === 0) {
    space_start = true;
  }

  for (let x = 0; x < binding_size; x++) {
    if (x % 2 === 0) {
      if (space_start === true) {
        builtString += " ";
      } else {
        builtString += "#";
      }
    } else {
      if (space_start === true) {
        builtString += "#";
      } else {
        builtString += " ";
      }
    }
  }

  builtString += "\n";
}

console.log(builtString);

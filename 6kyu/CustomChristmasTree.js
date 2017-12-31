// Custom Christmas Tree

/*
Christmas is coming, and your task is to build a custom Christmas tree with the specified characters and the specified height.

Inputs:
chars: the specified characters.
n: the specified height. A positive integer greater than 2.
Output:
A multiline string. Each line is separated by \n. A tree contains two parts: leaves and trunks.
The leaves should be n rows. The first row fill in 1 char, the second row fill in 3 chars, and so on. A single space will be added between two adjust chars, and some of the necessary spaces will be added to the left side, to keep the shape of the tree. No space need to be added to the right side.

The trunk should be at least 1 unit height, it depends on the value of the n. The minimum value of n is 3, and the height of the tree trunk is 1 unit height. If n increased by 3, and the tree trunk increased by 1 unit. For example, when n is 3,4 or 5, trunk should be 1 row; when n is 6,7 or 8, trunk should be 2 row; and so on.

Still not understand the task? Look at the following example ;-)

Examples
For chars = "*@o" and n = 3,the output should be:

  *
 @ o
* @ o
  |

*/

customChristmasTree("*@o&",5);

function customChristmasTree(decor,height) {
  
  // modify elements
  var pattern = decor.split("");
  for (var h = 0; h < pattern.length; h++) {
    pattern[h] = pattern[h]+" ";
  }
  
  // count value of all decoration
  var counter = 0;
  for (var j = 1; j <= height; j++) {
    counter += j;
  }
  
  // count full arrays of decorations and extra single elements
  var full = Math.floor(counter / decor.length)
  var extra = ((counter / decor.length)-full) * decor.length;
  
  var extraDecor = [];
  for (var k = 0; k < extra; k++) {
    extraDecor.push(pattern[k]);
  }
  
  // create array of all decoration needed
  var patternRow = [];
  for (var i = 1; i <= full; i++) {
    patternRow = patternRow.concat(pattern);
  }
  patternRow = patternRow.concat(extraDecor).join("");
  
  //console.log(patternRow);
  
  var spaceCount = height-1;  // added space start value - 4
  var rowLength = spaceCount + 2; // start value where to insert space - 6
  var newRow = rowLength; // first row break
  
  var newSpace = 0; // starting position where to insert spaces
  
  for (var y = 1; y < height; y++) {
    
    newSpace += rowLength; // new space position increases by row length
    rowLength ++; // row length increases by 1
    newRow += rowLength; // new row break position increases by row length
    spaceCount --; // space value decreases by 1
  }
  console.log(patternRow);

}
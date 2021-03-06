// Crossed words

/*
Crossed words
This is a fun Kata for crossword lovers!
    S
    Y
    N
    T
GRAPHICAL
    E
    S
    I
    S   
Task
Write a function that outputs two words crossing. The input is two strings. The function will output the first word horizontally and the second word will output vertically. The words cross at the point of the first instance of a common letter in the second word.
Input: Two strings

function crossedwords(str1, str2){
}
Rules
There is a maximum of 20 characters for each word.
The words may be a different lengths.
Words must be capital letters and no other characters.
The function returns a string.
A space character is used to fill the blank spaces.
Each line ends with the newline character.
The words cross at the first instance of a common letter in the second word.
The example:

crossedwords("GRAPHICAL", "SYNTHESIS")
returns the sample at the top.

*/

function crossedwords(str1, str2) {
    let str = '';
    let index1 = 0;
    let index2 = 0;
    for (let i = 0; i < str2.length; i++) {
        if (str1.includes(str2[i]) === true) {
            index1 = str1.indexOf(str2[i]);
            index2 = i;
            break;
        }
    }
    for (let j = 0; j < str2.length; j++) {
        str += j === index2 ? str1 + '\n' : (' ').repeat(index1) + str2[j] + (' ').repeat(str1.length - index1 - 1) + '\n';
    }
    return str;
}
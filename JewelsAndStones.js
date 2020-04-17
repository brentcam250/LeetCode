/*
Question:
You're given strings J representing the types of stones that are
jewels, and S representing the stones you have.
Each character in S is a type of stone you have.
You want to know how many of the stones you have are also jewels.

The letters in J are guaranteed distinct, and all characters in J and S are letters.
Letters are case sensitive, so "a" is considered a different type of stone from "A".
*/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var count=0;
    //Loop over the chars in S
    for(var i=0; i<S.length; i++){
        //if the character from string 2 is contained, add one to the count.
        //otherwise we want to move onto the next char.
        if(Contained(J,S[i])>=0){
            count++;
        }
    }
    return count;

};


//Helper function to determine if a char from string 2 aka S, is contained in J
function Contained (string1, characterFromString2){
    //returns where in string1 the char exists or -1 if it doesnt exist
    return(string1.indexOf(characterFromString2));
}

/*
Runtime: 52 ms, faster than 91.70% of
JavaScript online submissions for Jewels and Stones.
Memory Usage: 33.8 MB, less than 94.03% of
JavaScript online submissions for Jewels and Stones.
*/

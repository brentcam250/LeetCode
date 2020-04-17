/*
Question:
Given a non-negative integer num, return the number of steps to
reduce it to zero. If the current number is even, you have to
divide it by 2, otherwise, you have to subtract 1 from it.



*/

/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    if(num===0){
        return 0;
    }
    else{
        let count =0;
        while(num>0){
            num=steps(num);
            count++;
        }
        return count;
    }
};

//call this func
//may be able to just recursivly call the first function
function steps(number){
    if(number %2 ===0){
        return number/2;
    }else if (number > 0){
        return number-1;
    }else {
        //number must be 0
        return 0;
    }
}

/*
Results:
Runtime: 60 ms, faster than 31.33% of JavaScript online
submissions for Number of Steps to Reduce a Number to Zero.
Memory Usage: 33.8 MB, less than 100.00% of JavaScript online
submissions for Number of Steps to Reduce a Number to Zero.

*/

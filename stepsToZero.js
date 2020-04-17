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
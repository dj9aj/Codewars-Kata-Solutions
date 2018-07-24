// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.


// -----------
// My Solution
// -----------

function replace(s){
    //coding and coding....
    var vowels = ["a", "e", "i", "o", "u"];
  
    var strArr = s.split("");
  
    strArr.forEach((el, i) => {
        if (vowels.includes(el.toLowerCase())){
            strArr[i] = "!";
        }
    }); 	
    
    return strArr.join("");	

}
# My Codewars Kata Solutions

A log of my codewars solutions so far. Hopefully I can refactor my code as I progress. 

Here are my challenges so far - 

## Opposite number

> Very simple, given a number, find its opposite. But can you do it in 1 line of code and without any conditionals?

##### My Solution

```
function opposite(number) {
    return(-number);
}
```

## Find the smallest integer in the array

> Given an array of integers your solution should find the smallest integer. For example:

 - Given [34, 15, 88, 2] your solution will return 2
 - Given [34, -345, -1, 100] your solution will return -345

###### My Solution

```
class SmallestIntegerFinder {
    findSmallestInt(args) {
        let smallest = args[0];
      
        args.forEach(num => {
            if (num < smallest) {
                smallest = num;
            }
        });
        return smallest;
    }
}
```

## altERnaTIng cAsE <=> ALTerNAtiNG CaSe

> Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. 

> For example:
hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase() === "12345" // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase() === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

> As usual, your function/method should be pure, i.e. it should not mutate the original string.

###### My Solution

```
String.prototype.toAlternatingCase = function () {
    // Define your method here :)
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('');
}
```

## Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

> Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

###### My Solution

```
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
```

## Convert a Number to a String!

> What ways of achieving this do you know?

##### My Solution

```
function numberToString(num) {
    return num.toString();
}
```

## Calculate average

> Write function avg which calculates average of numbers in given list.

###### My Solution

```
function find_average(array) {
    let total = 0
    let mean = 0;
  
    array.forEach(num => {
      total += num;
    });
  
    mean = total / array.length;
    
    return mean;
}
```

## Opposites Attact

> Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love. Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

###### My Solution

```
function lovefunc(flower1, flower2) {
    if (flower1 % 2 === 0 && flower2 % 2 === 0 || flower1 % 2 !== 0 && flower2 % 2 !== 0) {
        return false;
    } else {
        return true;
    }
}
```

###### My Refactored Solution

```
function lovefunc(flower1, flower2) {
    return flower1 % 2 !== flower2 % 2;
}
```

## Multiply

> The code does not execute properly. Try to figure out why.

```
function multiply(a, b){
    a * b
}
```

###### My Solution

```
function multiply(a, b){
    return a * b
}
```


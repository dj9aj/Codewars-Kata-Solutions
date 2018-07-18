# My Codewars Kata Solutions

A log of my codewars solutions so far. Hopefully I can refactor my code as I progress. 

Here are my challenges so far - 

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

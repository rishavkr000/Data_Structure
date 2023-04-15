Time Complexity



Method 1

function addUpTo(n) {
    let total = 0;
    for(let i = 0; i <= n; i++){
        total += i
    }
    return total
}

Method 2

function addUpTo(n) {
    return n * (n + 1) / 2;
}

In first method, time complexity is O(n)
In second method, time complexity is O(1)


Time complexity ob object.keys is o(n)


Method of Array

1. push     o(1)
2. pop      o(1)

Q. Check the square of array of 1st element is present in 2nd array or not
arr1 = [1, 4, 2]
arr2 = [16, 4, 1]

Method 1 (using for loop)

function frequency_function(arr1, arr2) {
    if(arr1.length !== arr2.length) return false;
    for(let i = 0; i < arr1.length; i++) {
        // search for that in 2nd array
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1){
            return false
        }
    }
    return true;
}

Method 2 (using object)

function frequency_function(arr1, arr2) {
    [1, 4, 2] => {1:1, 16:1, 4:1} => [1,16,4]
}


===============================================================================//

Q. Check the String is anagrams or not
Two words are anagrams of each other if they contain the same number of characters and the same characters.
Anagrams example => "listen" and "silent" are anagrams string

str1 = 'listen'
str2 = 'silent'


Find max substring of distinct character from a string 

str = "abbcdafeegh" // => bcdafe


Method 1 :- Sliding Window approach
low = 0
high = 0



Recursion 
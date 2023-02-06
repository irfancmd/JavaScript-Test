/* 
Problem: Given two strigs, write a function to determine whete if the second string
is an anagram of the first one. You may assume strings will only contain single words
and lowercase letters.

Example:

validAnagram("", "") // true
validAnagram("aaz", "zza") // false
validAnagram("anagram", "nagaram") // true

*/

function validAnagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    } else {
        let counter1 = {};
        let counter2 = {};
        
        for(let char of str1) {
            counter1[char] = (counter1[char] || 0) + 1;
        }

        for(let char of str2) {
            counter2[char] = (counter2[char] || 0) + 1;
        }

        for (let key in counter1) {
            if(!counter2[key]) {
                return false;
            }

            if(counter1[key] !== counter2[key]) {
                return false; 
            }
        }

        return true;
    }
}

let str1 = "qwerty";
let str2 = "qeywrt";

console.log(validAnagram(str1, str2));

/* Another Method: Create only one counter for the first string. Then, as you traverse
through the second string, keep removing counts of the characters from that counter. While
attemting to reduce the frequency of any character, if you find that the current count is 0
and the frequency is about to get negative, stop there as it suggest the strings are not anagrams because
the second string has excess character. After this traversal, do a traversal through the counter to make sure
all the frequencies became zero. If there is a non-zero frequency left, it would mean that strings are not anagrams.
Otherwise, they are.*/

// This is a naive way of counting the occurence of a sub-string in a string
function countSubStr(str, substr) {
    if(substr.length > str.length) {
        return 0;
    }

    let occurenceCount = 0;

    for(let i = 0; i < (str.length - substr.length + 1); i++) {
        let found = true;

        // console.log(`Inspecting : ${str.slice(i, i+substr.length)}`);

        for(let j = i; j < (i + substr.length); j++) {
            if(str[j] !== substr[j - i]) {
                found = false;
                break;
            }
        }

        if(found) {
            occurenceCount++;
        }
    }

    return occurenceCount;
}

str = "lorie loled";
subStr = "lol";

console.log(countSubStr(str, subStr));
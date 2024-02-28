// parameter string[] - returns string

const longestRelativePrefix = function(string) {
    if(!string.length) return "";

    for(let i = 0; i<string[0].length; i++) {
        for(let str of string) {
            if(str[i] !== string[0][i]) {
                return str.slice(0,i)
            }
        }
    }
    return string[0];
};
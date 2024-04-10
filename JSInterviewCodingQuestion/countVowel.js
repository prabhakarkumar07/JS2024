//count vowel in string


function countVowels(str) {
    // let count = 0;
    // const words = str.toLowerCase();
    // const vowel = "aeiou";
    // for (let i = 0; i < words.length; i++) {
    //     for (let j = 0; j < vowel.length; j++) {
    //         if (words[i] === vowel[j]) {
    //             count++;
    //         }
    //     }
    // }
    // return count;

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let arr = str.split('');

    let count = 0;
    for (let char of arr) {
        if (vowels.includes(char.toLowerCase())) {
            count++;
        }
    }
    return count;





}



console.log(countVowels("Hello word"));
console.log(countVowels("ThE quIck brOwn fOx"));
console.log(countVowels("Brrrp"));
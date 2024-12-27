// A good string is a string that starts with the letter 'a' & has a length of <3. Write a program to find if a string is good or not.


let str = 'bapple';
if (str[0] === 'a' && str.length < 3) {
    console.log('Good String');
} else {
    console.log('not a good String');
}


let num=12;

if((num % 3 === 0) && ((num+1 === 15) || (num-1 === 11))){
    console.log('true');}else{
        console.log('false');
    };
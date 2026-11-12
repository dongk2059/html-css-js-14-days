console.log("=========Bài 1==========")

function calculateBMI(w, h){
    const result = w / (h*h);
    if(w <= 0 || h <=0){
        console.log("null");
    }else{
        return result.toFixed(2);
    }
}

console.log(calculateBMI(70, 1.75));
console.log(calculateBMI(0, 1.75));


console.log("==========Bài 2==========")

function reverseString(str){
    let resultt = "";

    for(let i = str.length-1; i >= 0;i--){
        resultt += str[i];

    }
    return resultt;

}

console.log(reverseString("hello"))


console.log("===========Bài 3============")

function reverseStringg(str){
    let resulttt = "";

    for(let i = str.length-1; i >= 0;i--){
        resulttt += str[i];

    }
    return resulttt;

}

function isPalindrome(str){
    const normalized = str.toLowerCase().replaceAll(" ", "");

    const reversed = reverseStringg(normalized);
    return normalized === reversed;
}
console.log(isPalindrome("madam"));      // true
console.log(isPalindrome("hello"));      // false
console.log(isPalindrome("Racecar"));    // true
console.log(isPalindrome("nurses run")); // true



console.log("============Bài 4============")

function cong(a,b){
    return a + b;
}
function tru(a,b){
    return a - b;
}
function nhan(a,b){
    return a * b;
}
function chia(a,b){

    if(b === 0){
        return null;
    }
    return a / b;
}

function calculate(a, b, callback){
    return callback(a, b);
}
console.log(calculate(10, 5, cong));       // 15
console.log(calculate(10, 5, tru));  // 5
console.log(calculate(10, 5, nhan));  // 50
console.log(calculate(10, 5, chia));    // 2
console.log(calculate(10, 0, chia));    // null



console.log("=============Bài 5 =============")

function createCounter(){
    let count = 0;

    function increment(){
        count++;
        return count;
        }
        return  increment;
}

const counterA = createCounter();
const counterB = createCounter();

console.log(counterA()); // 1
console.log(counterA()); // 2
console.log(counterB()); // 1
console.log(counterA()); // 3


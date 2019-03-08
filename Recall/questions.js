var selectElementsStartingWithA = function(array) {
    return array.filter((word) => word.startsWith("a"));
}

var selectElementsStartingWithVowel = function(array) {
    return array.filter((word) => word.startsWith("a") || word.startsWith("e") || word.startsWith("i") || word.startsWith("o") || word.startsWith("u") || word.startsWith("y"));
}

var removeNullElements = function(array) {
    return array.filter((element) => element!==null);
}

var removeNullAndFalseElements = function(array) {
    return array.filter((element) => element!==false).filter((element) => element!==null);
}

var reverseWordsInArray = function(array) { 
    return array.join().split("").reverse().join("").split(',').reverse();
}

var everyPossiblePair = function(array) {
    return ;//Yikes
}

var allElementsExceptFirstThree = function(array) {
    return array.splice(3);
}

var addElementToBeginning = function(array, element) {
    array.unshift(element)
    return array;
}

var sortByLastLetter = function(array) {
    return array.sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

var getFirstHalf = function(string) {
    return string.slice(0, Math.round((string.length/2)));
}

var makeNegative = function(number) {
    return -Math.abs(number);    
}

var numberOfPalindromes = function(array) {
    let count = 0;
    for(let i =0; i<array.length; i++){
      array[i]=array[i].split("");  
      if(array[i].join("")===array[i].reverse().join("")){
        count++;
      }
    }
    return count;
}

var shortestWord = function(array) {
    return array.reduce((a, b) => a.length <= b.length ? a : b);
}

var longestWord = function(array) {
    return array.reduce((a, b) => a.length <= b.length ? b : a);
}

var sumNumbers = function(array) {
    return array.reduce((a, b) => a + b);
}

var repeatElements = function(array) {
    return array.concat(array);
}

var stringToNumber = function(string) {
    return Number(string);
}

var calculateAverage = function(array) {
    return array.reduce((a, b) => a + b)/array.length;
}

var getElementsUntilGreaterThanFive = function(array) {
    return array.splice(0, 6);
}

var convertArrayToObject = function(array) {
    let obj = {};
    for(let i = 0; i < array.length; i = i + 2){

        obj[array[i]] = array[ i + 1 ];

    }
    return obj;
}

var getAllLetters = function(array) {
    array = array.join("").split("").sort();
  
    let x = (array) => array.filter((v, i) => array.indexOf(v) === i);
    return x(array);
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return string.replace(/(?![a-z ])./g, '');
}

var roundUp = function(number) {
    return Math.ceil(number);
}

var formatDateNicely = function(date) {
    return date.toISOString().slice(0, 10).split("-").reverse().join("/");
}

var getDomainName = function(string) {
    return string.substring(0, string.length-4).substring(string.lastIndexOf("@") +1);
}

var titleize = function(string) {
    return string.titleize();
}

var checkForSpecialCharacters = function(string) {
    let format = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    if( string.match(format) ){
      return true;
    }else{
      return false;
    }
}

var squareRoot = function(number) {
    return Math.sqrt(number);
}

var factorial = function(number) {
    return Math.factorial(number);
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return Math.round((Number(number)-32) / (9/5));
}

var letterPosition = function(array) {
    tab = [];
    for (let i = 0; i < array.length; i++) {

        let tst = array[i].toString().toLowerCase();
        let r = tst.charCodeAt(0) - 96;

        tab.push(r);
    }
    return tab;
}

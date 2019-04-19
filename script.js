
const name = document.querySelector("input");
const total = document.querySelector("h3");
const number = document.querySelector("h1");


const nameToNum = () => {
  
    let username = name.value.toLowerCase();
    let nameArray = username.split("");

    let filterLetters = nameArray.filter(a => {
      code = a.charCodeAt();
      if (code > 96 && code < 123){
        return (code);
      }
    });

    let numArray = filterLetters.map(letter => {
      let n = letter.charCodeAt() - 96;
      return n;
    });

    let totalNum = numArray.reduce((acc, x) => {
      return acc + x;
    }, 0)
    
    total.textContent = totalNum;

    let totalNumStr = totalNum.toString();
    let totalNumArr = totalNumStr.split("");
    
    let finalArr = totalNumArr.map(num => {
      return parseInt(num, 10);
    });

    let digits = finalArr.reduce((acc, z) => {
      return acc + z;
    }, 0);

    let digitsStr = digits.toString();
    let digitsArr = digitsStr.split("");

    let finalDigits = digitsArr.map(num => {
      return parseInt(num, 10);
    });

    let twoDigit = finalDigits.reduce((acc, z) => {
      return acc + z;
    }, 0);

    if (twoDigit > 9) {
      let oneDigit = twoDigit - 9; 
      number.textContent = oneDigit;
      
    } else {
      number.textContent = twoDigit;
    }
  
    // changing the background color of the number
    let num = number.textContent;
    let colorArr = ["#d4d4d4", "#fa5f5f", "#ae35ff", "#ff923f", "#488f3a", "#e445a2", "#3eb1df", "#45f06a", "#fcff57", "#3edfb7"];

    number.style.background = colorArr[num];
    
}


name.addEventListener("input", nameToNum);




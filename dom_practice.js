let string = document.getElementById("myParagraph");
let txt = string.innerText;
let arr = txt.split(" ");
let wordCount = {};
arr.forEach((word) => {
  if (wordCount[word]) {
    wordCount[word]++;
  } else {
    wordCount[word] = 1;
  }
});

let arry = Object.entries(wordCount);
let sorted = arry.sort((a, b) => b[1] - a[1]);

let most = sorted.slice(0, 5);

let newArr = arr.map((word) => {
  if (most.some(([w]) => w === word)) {
    let span = `<span style="background-color: blue;">${word}</span>`;
    if (word[0] === word[0].toUpperCase()) {
      span = `<span style="background-color: blue; text-decoration: underline;">${word}</span>`;
    }
    return span;
  }
  return word;
});
let newString = newArr.join(" ");
let newP = document.createElement('p');
newP.innerHTML = newString;
document.body.appendChild(newP); 
string.remove()
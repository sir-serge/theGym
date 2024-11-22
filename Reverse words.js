function reverseWords(str) {
    let arrayOstring=str.split(" ");
     let reversed=arrayOstring.map(elements);
  function elements(value){
    let singleValue=value.split('').reverse().join('');
  //   console.log(singleValue)
  return singleValue
  }
    return reversed.join(' ');
    // Go for it
  }

function translateWord(word) {

  if (/^[aeiou]/i.test(word)) {
      return word + 'way';
  }

  
  else if (/^[^aeiou]{1}/i.test(word)) {
      return word.slice(1) + word[0] + 'ay';
  }

 
  else if (/^[^aeiou]{2}/i.test(word)) {
      return word.slice(2) + word.slice(0, 2) + 'ay';
  }

  return word;
}

console.log(translateWord("Hello")); 

//Hello ,elloHay
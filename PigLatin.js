function translatePigLatin(str) {
  
  if (firstpositon > 0) {
    return str.slice(firstpositon) + str.slice(0, firstpositon) + "ay";
    
  }

  
  const lowerInput = input.toLowerCase();

  const isVowel = (char) => ['a', 'e', 'i', 'o', 'u'].includes(char);


  const translateWord = (word) => {
    if (isVowel(word[0])) {
      return word + 'way';
    } else if (isVowel(word[1])) {
      return word.slice(1) + word[0] + 'ay';
    } else {
      return word.slice(2) + word.slice(0, 2) + 'ay';
    }


translatePiglatin("consonant");
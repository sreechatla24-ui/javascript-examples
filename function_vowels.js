function containsVowels(string) {
  let vowels = "aeiouAEIOU";

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      return "vowel Found";
    }
  }

  return "No Vowel ";
}
console.log(containsVowels("Mukesh"));
console.log(containsVowels("Rythm"));
console.log(containsVowels("AUTOMATION"));
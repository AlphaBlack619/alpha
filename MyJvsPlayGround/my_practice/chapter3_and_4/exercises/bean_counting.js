function countBs(str, charToCount) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === charToCount) {
      count++;
    }
  }
  return count;
}
let myString = "This is a sample string Bith some B's and b's in it.";
const charactersToCount = 's'
let stringCount = countBs(myString, charactersToCount);
console.log(`Number of case ${charactersToCount} characters: ${stringCount}`);

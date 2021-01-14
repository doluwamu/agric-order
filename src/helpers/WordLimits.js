export const BreakWordFragment = (word, limit = 17) => {
  if (!word || word.length === 0) return "";
  if (word.length > limit) {
    const wordArray = word.split("");
    const wordSliced = wordArray.slice(0, limit);
    const wordJoined = `${wordSliced.join("")}...`;
    // return the result
    return wordJoined;
  } else {
    return word;
  }
};

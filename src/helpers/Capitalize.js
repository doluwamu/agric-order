export const capitalize = (words) => {
  if (!words || words.length === 0) return null;

  const word = words.split(" ");

  return word.map((w) => w[0].toUpperCase() + w.slice(1)).join("");
};

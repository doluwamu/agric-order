export const NumWithComma = (num) => {
  if (!num || typeof num !== "number") {
    return "";
  }

  const formatter = new Intl.NumberFormat("en");
  return formatter.format(num);
};

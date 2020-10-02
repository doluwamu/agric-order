export const NumWithComma = (num) => {
  if (!num || typeof num !== "number") {
    return 0;
  }

  const formatter = new Intl.NumberFormat("en");
  return formatter.format(num);
};

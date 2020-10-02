export const sameAs = (field, getValues) => (value) => {
  const compareWith = getValues()[field];

  return compareWith === value;
};

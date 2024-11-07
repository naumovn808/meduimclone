export const range = (start, end) => {
  return [...Array(end - start + 1).keys()].map((el) => el + start);
};

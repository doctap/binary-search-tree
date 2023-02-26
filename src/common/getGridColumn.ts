let space = 2;

export const getGridColumn = (index: number) => {
  return index === 0 ? '1 / 2' : `${index + space++} / ${index + space++}`;
};

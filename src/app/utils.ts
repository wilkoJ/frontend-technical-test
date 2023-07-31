export const filterIncludeString = (value: string, include: string) => {
  return value.includes(include);
};

export const ascendingSortByValue = (a: string, b: string) => (a < b ? -1 : 1);

export const descendingSortByValue = (a: string, b: string) => (a > b ? -1 : 1);

export const noSort = (a: string, b: string) => (true ? 1 : -1);

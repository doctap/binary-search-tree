import { getGridColumn } from './getGridColumn';

it.each([
  [1, '1 / 2'],
  [2, '3 / 4'],
  [3, '5 / 6']
])('getGridColumn', (elementIndex: number, expectedGridColumn: string) => {
  const actualGritColumn = getGridColumn(elementIndex);

  expect(actualGritColumn).toBe(expectedGridColumn);
});

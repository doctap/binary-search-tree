import { type Node, separateTreeByLevel } from './separateTreeByLevel';

const getTree = (): Node => ({
  key: 0,
  
  left: {
    key: 1,
    _color: 1,

    left: {
      key: 3,
      _color: 1,
      left: {
        key: 7,
        _color: 1,
        left: null,
        right: null
      },
      right: null
    },

    right: {
      key: 4,
      _color: 0,
      left: null,
      right: null
    }
  },

  right: {
    key: 2,
    _color: 0,

    left: {
      key: 5,
      _color: 1,
      left: null,
      right: null
    },
    right: null
  },
  _color: 1
});

test('separateTreeByLevel', () => {
  const treeByLevels = separateTreeByLevel(getTree());

  expect(treeByLevels).toEqual([
    [0],
    [1, 2],
    [3, 4, 5, NaN],
    [7, NaN, NaN, NaN, NaN, NaN, NaN, NaN]
  ]);
});

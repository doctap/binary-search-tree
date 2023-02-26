export interface Node {
  key: number
  left: Node | null
  right: Node | null
  _color: number
}

export const separateTreeByLevel = (tree: Node): number[][] => {
  const nodesByLevel: number[][] = [];
  separateTreeByLevelRecursive(tree, 0, nodesByLevel);

  return nodesByLevel;
};

const separateTreeByLevelRecursive = (tree: Node, level: number, nodesByLevel: number[][]): void => {
  if (nodesByLevel[level] === undefined) { nodesByLevel[level] = []; }

  nodesByLevel[level].push(tree.key);

  if (tree.left !== null) { separateTreeByLevelRecursive(tree.left, level + 1, nodesByLevel); }
  if (tree.right !== null) { separateTreeByLevelRecursive(tree.right, level + 1, nodesByLevel); }
};

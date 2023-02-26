import React, { useState } from 'react';
import './BinarySearchTreeComponent.css';
import type { Node } from '../common/separateTreeByLevel';
const CreateTree = require('functional-red-black-tree');

interface IBinarySearchTreeComponent {
  tree: number[][]
  handleKeyDown: () => void
}

function BinarySearchTreeComponent (prop: IBinarySearchTreeComponent) {
  const gridWidth = prop.tree.length === 1 ? prop.tree.length : (2 ** prop.tree.length) * 2 - 1;
  const nodePercentWidth = 100 / gridWidth;

  const gridTemplateColumns = Array(gridWidth)
    .fill(0)
    .map(_ => `${nodePercentWidth}%`)
    .join(' ');

  const gridTemplateRows = Array(prop.tree.length)
    .fill(0)
    .map(_ => '2em')
    .join(' ');
    
  let space = 2;

  const getGridColumn = (i: number) => {
    return i === 0 ? '1 / 2' : `${i + space++} / ${i + space++}`;
  };

  return (
    <div
      className="tree"
      style={{
        display: 'grid',
        gridTemplateColumns,
        gridTemplateRows
      }}
      onClick={prop.handleKeyDown}
    >
      {prop.tree.map((level, indexRow) => (
        level.map((node, indexColumn) => (
          <div
            style={{
              gridColumn: getGridColumn(indexColumn),
              gridRow: `${indexRow + 1} / ${indexRow + 2}`,
              textAlign: 'center'
            }}
            key={node}
          >
            {node}
          </div>
        ))
      ))}
    </div>
  );
}

export default BinarySearchTreeComponent;

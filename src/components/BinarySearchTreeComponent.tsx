import React, { useState } from 'react';
import './BinarySearchTreeComponent.css';
import type { Node } from '../common/separateTreeByLevel';
import { getGridColumn } from '../common/getGridColumn';
const CreateTree = require('functional-red-black-tree');

interface IBinarySearchTreeComponent {
  tree: number[][]
}

function BinarySearchTreeComponent (prop: IBinarySearchTreeComponent) {
  return (
    <div
      className="column"
    >
      {prop.tree.map((level, indexRow) => (
        <div
          className='row'
          key={indexRow}
        >
          {
            level.map((node, indexColumn) => (
              Number.isNaN(node)
                ? <div
                  className='empty_node'
                  key={indexColumn}>
                </div>
                : <div
                  className='node'
                  key={indexColumn}>
                  {node}
                </div>
            ))
          }
        </div>
      ))}
    </div>
  );
}

export default BinarySearchTreeComponent;

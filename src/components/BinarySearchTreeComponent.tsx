import React, { useState } from 'react';
import './BinarySearchTreeComponent.css';
import type { Node } from '../common/separateTreeByLevel';
import { getGridColumn } from '../common/getGridColumn';
const CreateTree = require('functional-red-black-tree');

interface IBinarySearchTreeComponent {
  tree: number[][]
}

function BinarySearchTreeComponent (prop: IBinarySearchTreeComponent) {
  const getFontSize = (sizeIndex: number) => {
    return sizeIndex < 7 ? `0.${99 - 2 ** sizeIndex}rem` : '0.35rem';
  };
  
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
                  style={{
                    height: '3em',
                    width: '3em',
                    fontSize: getFontSize(indexRow)
                  }}
                  className='empty_node'
                  key={indexColumn}>
                </div>
                : <div
                  className='node'
                  style={{
                    height: '3em',
                    width: '3em',
                    fontSize: getFontSize(indexRow)
                  }}
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

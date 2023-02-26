import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import BinarySearchTreeComponent from './components/BinarySearchTreeComponent';
import { separateTreeByLevel } from './common/separateTreeByLevel';
const CreateTree = require('functional-red-black-tree');

function App () {
  const [tree, setTree] = useState(new CreateTree());
  
  function handleKeyDown (event: KeyboardEvent) {
    if (event.code === 'Space') {
      const randomKey = Math.floor(Math.random() * 201) - 100; // [-100, 100]
      setTree((tree) => tree.insert(randomKey));
    }
  }
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.App}>
      <BinarySearchTreeComponent tree={tree.root === null ? [] : separateTreeByLevel(tree.root)} />
    </div>
  );
}

export default App;

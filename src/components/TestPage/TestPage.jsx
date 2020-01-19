import React, { useState, useEffect } from 'react';
import './TestPage.css';

const TestPage = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `Вы нажали ${count} раз`;
  });
  return (
    <>
      <p>Hello!</p>
      <p>Вы кликнули {count} раз</p>
      <button onClick={() => setCount(count + 1)}>Кликнуть</button>
    </>
  );
};

export default TestPage;

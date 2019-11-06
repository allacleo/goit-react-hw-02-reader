/*eslint-disable */
import React from 'react';
import Reader from './Reader';
import publications from '../publications.json';

const App = () => (
  <>
    <Reader items={publications} />
  </>
);

export default App;

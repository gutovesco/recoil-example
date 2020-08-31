import React from 'react';
import './App.css';
import {RecoilRoot,} from 'recoil';
import Routes from './routes'

function App() {
  return (
    <RecoilRoot>
      <Routes/>
    </RecoilRoot>
  );
}

export default App;

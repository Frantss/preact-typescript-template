import { h } from 'preact';

import { Header } from './Header';
import { Routes } from './Routes';

const App = () => {
  return (
    <div id='app'>
      <Header />
      <Routes />
    </div>
  );
};

export default App;

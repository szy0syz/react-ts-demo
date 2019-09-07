import React from 'react';
import { TextField } from './TextField';
import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'></a>
        <TextField
          handleChange={e => e.target}
          text='ttt'
          person={{ firstname: 'jerry', lastname: 'shi' }}></TextField>
      </header>
    </div>
  );
};

export default App;

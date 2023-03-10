import React from 'react';
import ListGifs from './Components/ListGifs';
import './App.css';

function App() {
  const search = ['perro', 'panda', 'rata', 'gato'];
  let [number, addnumber] = React.useState(0);
  const [keyboard, setKeyboard] = React.useState('mapache');
  return (
    <>
      <button type='button' onClick={() => {
        addnumber(number++)
        setKeyboard(search[number])
      }
      }> set new keyboard</button>
      <ListGifs keyboard={keyboard} />
    </>
  );
}

export default App;

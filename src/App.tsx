import React, { useState, useCallback} from 'react';
import logo from './logo.svg';
import './App.css';
import People from './components/People';
import Person from './components/Person';

function App() {
  const [name, setName] = useState('');
  const handleNameChange = useCallback((newName:string) => {
    setName(newName);
  }, []);
  return (
    <div className="App">
      <div className="App__left">
      <People handleNameChange={handleNameChange}/>
      </div>
      <div className="App__right">
      <Person name={name} />
      </div>
    </div>
  );
}

export default App;

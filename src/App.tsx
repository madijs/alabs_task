import React, {useState} from 'react';
import './App.css';
import {useLocalStorage} from "./tools/useLocalStorage";
import ChildForms from "./ChildForms";

const App: React.FC = () => {
  const [state,setState] = useLocalStorage('name');
  const [deleteClicked,setDeleteClick] = useState<boolean | null>(null);

  const inputHandleChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value)
  };

  return (
    <div className="App">
      <h1>Task 1: Custom hook useLocalStorage</h1>
      <input value={state} onChange={inputHandleChanged.bind(this)} type="text"  />
      <h1>Task 2: Access to child state from parent component</h1>
      <ChildForms deleteClicked={deleteClicked}/>
      <button onClick={()=>setDeleteClick(!deleteClicked)} className="button">Очистить</button>
    </div>
  );
};

export default App;

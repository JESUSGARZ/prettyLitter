import './App.css';
import React, {useState, useEffect, useContext} from 'react'
import Button from './components/Button';
import Macro from './components/Macro';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Copied from './components/Copied';
import { AppContext } from './context/AppContext';
import PopUp from './components/PopUp';
import Create from './components/Create';
import Notification from './components/Notification';

function App() {
 const {setdisplayCreateMacro, setdisplayPopUpEdit, currentMacro, setSuccess, setError, setCopied} = useContext(AppContext);
 const [display, setDisplay] = useState('none');

  const copyToClipBoard = () => {
    let content = document.getElementById('text').value;
    
    navigator.clipboard.writeText(content)
    .then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    })
    .catch(err => {
      console.log('Something went wrong', err);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 2000);
    })

    
  }
  const showCreate = () => {
    setdisplayCreateMacro(true);
  }

  const showPopUp = () => {
    setdisplayPopUpEdit(true);
  }
  
 useEffect(() => {
  if (currentMacro[0]?.id === undefined) {
    setDisplay('none');
  } else {
    setDisplay('inline-block');
  } 
 }, [currentMacro]) 
 
  return (
    <>
      <NavBar />
      <div className="App">
        <Create/>
        <PopUp/>
        <Notification />
        <Copied text='Succesfully Copied'/>
        <SearchBar/>
        <Macro/>
        <div className='button-container'>
          <div className='actions__buttons'>
            <Button color='#0166f4' border='1px solid #0166f4' onClick={showCreate} text ={'Create'}/>
            <Button color='#0166f4' border='1px solid #0166f4' display={display} onClick={showPopUp} text ={'Edit'}/>
          </div>
          <Button backgroundColor='#0166f4' display={display} onClick ={copyToClipBoard} text ={'Copy'}/>
        </div>
      </div>
    </>
  );
}

export default App;

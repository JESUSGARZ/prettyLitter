import React,  {useContext, useState, useEffect} from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/macro.css';


const Macro = () => {
  const {currentMacro} = useContext(AppContext);
  const [textMacro, setTextMacro] = useState('');
  
  const verifying = () => {
    if (currentMacro !== []) {
      setTextMacro(currentMacro[0]?.attributes.text) 
    } else if (currentMacro === []){
      setTextMacro(currentMacro[0]?.attributes.text) 
    }
  }

  useEffect(() => {
    verifying();
  }, [currentMacro])
  
 
  return (
    <div className='macro__container'>
        <textarea name="" id="text" cols="50" rows="20" readOnly={true} value= {textMacro}/>
    </div>
  )
}

export default Macro
import React, {useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/searchBar.css';

const SearchBar = () => {
  const {macros, setCurrentMacro,currentMacro} = useContext(AppContext);
  const [searchMacro, setSearchMacro] = useState([]);
  const [value, setValue] = useState('')

  const filter = (e) => {
    setValue(e.target.value)
    searchFilter(e.target.value); 
  }

  const searchFilter = (value) => {

    var searchResult = macros.filter((macro) => {
      if(macro.attributes.title.toString().toLowerCase().includes(value.toLowerCase())) {  
          return macro.attributes.title  
      } 
    })
    
    if (value === '') {
      setSearchMacro([]);
      setCurrentMacro([]);
    } else if( value !== '') {
      setSearchMacro(searchResult);
    }
    
  }

  const currentMacroId = (e) => {
    let textCurrentMacro = macros.filter((macro) => {
      if(macro.id.toString().includes(e.target.id)) {  
          return macro.attributes.title  
      } 
    })
    setValue('')
    setSearchMacro([]);
    setCurrentMacro(textCurrentMacro);
  }

  return (
    <div className='search__container'>
      <div id='filter' className='input__container'>
        <input onChange={filter} type="text" placeholder=' Search your macro' value={value}/>
        {searchMacro.map( macro => { 
          return (
            <div onClick={currentMacroId} id={macro.id} key={macro.id}>{macro.attributes.title}</div>
          )})} 
      </div>
    </div>
  )
}

export default SearchBar
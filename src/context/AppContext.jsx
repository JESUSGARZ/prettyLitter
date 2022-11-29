import React,{createContext,useState, useEffect} from 'react';
import axios from 'axios';
export const AppContext = createContext();

const url = 'https://gentle-brook-12475.herokuapp.com/api/macros';

const ContextProvider = ({children}) => {
 
    const [macros, setMacros] = useState([]);
    const [currentMacro, setCurrentMacro] = useState([]);
    const [displayCreateMacro, setdisplayCreateMacro] = useState(false);
    const [displayPopUpEdit, setdisplayPopUpEdit] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [copied, setCopied] = useState(false);
    const [notification, setNotification] = useState('');
    const [deleteConfirm, setDeleteconfirm] = useState(false);
    
    const fetchData = () => {
        try {
          axios
            .get(url)
            .then( (res) => {
              setMacros(res.data.data)
            })
        } catch (error) {
          console.error(error);
        } 
      } 

    useEffect( () => {
       fetchData();
    },[])
    
  return (
      <AppContext.Provider value={{
        macros,
        setMacros,
        currentMacro,
        setCurrentMacro,
        success,
        setSuccess,
        error,
        setError,
        copied,
        setCopied,
        notification,
        setNotification,
        deleteConfirm,
        setDeleteconfirm,
        displayCreateMacro,
        setdisplayCreateMacro,
        displayPopUpEdit,
        setdisplayPopUpEdit, 
      }}>
          {children}
      </AppContext.Provider>
    
  )
}

export default ContextProvider;
import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import '../styles/deleteConfirm.css';

const DeleteConfirm = () => {
    const {currentMacro,setDeleteconfirm, deleteConfirm, setNotification,setSuccess,setError} = useContext(AppContext);

    const showDeleteconfirm = () => {
        setDeleteconfirm(false);
    }

    const deleteMacro = async() => {
        try {
            const response = await axios.delete( `https://gentle-brook-12475.herokuapp.com/api/macros/${currentMacro[0].id}`);
    
            if (response.status === 200) {
                setDeleteconfirm(false); 
                setNotification('Macro Successfully Deleted');
                setSuccess(true);
                
                setTimeout(() => {
                    setSuccess(false);
                }, 2000);

                setTimeout(() => {
                    window.location.reload();
                },2100);
            } 
            
        } catch (error) {
            setError(true);
            setNotification('There Was An Error')
            setTimeout(() => {
                setError(false);
            }, 2000)
        } 
    }

    if (deleteConfirm === true) {
        return (
            <div className='container'>
                <div className='alert__container'>
                    <p>Are you sure you want to delete the macro: "{currentMacro[0]?.attributes.title}" ? </p>
                    <div className='buttons__Container'>
                        <button onClick={showDeleteconfirm}>Cancel</button>
                        <button onClick={deleteMacro}>Delete</button>
                    </div>
                </div>
            </div>
          )    
    } else {
        return null 
    }
  
}

export default DeleteConfirm
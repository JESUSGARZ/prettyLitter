import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';
import Button from './Button';
import axios from 'axios';
import CloseButton from './CloseButton';
import Notification from './Notification';
import '../styles/popUp.css';

const Create = () => {
    const {displayCreateMacro, 
            setdisplayCreateMacro, 
            setSuccess, 
            setError, 
            setNotification} = useContext(AppContext);
    
    const save = async () => {            
    try {
        const macroData = {
            "data": {
                title: document.getElementById('title').value,
                text: document.getElementById('text').value
            }
        }
        const response = await axios.post('https://gentle-brook-12475.herokuapp.com/api/macros', macroData)

            if (response.status === 200) {
                setdisplayCreateMacro(false);
                setSuccess(true);
                setNotification('Macro Successfully Created');
                setTimeout(() => {
                    setSuccess(false);
                }, 2000);

                setTimeout(() => {
                    window.location.reload();
                },2100);
            }
    } 
    catch (error) {
        setError(true);
        setNotification('An Error Has Ocurred')
        setTimeout(() => {
            setError(false);
        }, 2000)
    }

    }
        
    const closeModal = () => {
        setdisplayCreateMacro(false);
    }

    if (displayCreateMacro === true) {
        return (
            <div className='popUp__container'>
                <div className='edit__container'>
                    <div className='close__container'>
                        <CloseButton onClick={closeModal} />
                    </div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id='title' name='title' />
                    <label htmlFor="content">Content:</label>
                    <textarea name="content" id="text" cols="50" rows="18" />
                    <Button backgroundColor= '#0166f4' onClick={save} text='Create' />
                </div>
            </div>
          )  
    } else {
        return <Notification success ='Macro Successfully Created' error='An Error Has Ocurred' /> ;
    }
  
}

export default Create
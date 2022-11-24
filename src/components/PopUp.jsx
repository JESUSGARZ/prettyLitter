import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import CloseButton from './CloseButton';
import Button from './Button';
import Notification from './Notification';
import '../styles/popUp.css'


const PopUp = () => {
    const {currentMacro, displayPopUpEdit, setdisplayPopUpEdit, setSuccess, setError,setNotification} = useContext(AppContext);
    
    const save =  async () => {
        try {
            const macroData = {
                "data": {
                    title: document.getElementById('title').value,
                    text: document.getElementById('text').value
                }
            }
            const response = await axios.put( `https://gentle-brook-12475.herokuapp.com/api/macros/${currentMacro[0].id}`,macroData);
    
            if (response.status === 200) {
                setdisplayPopUpEdit(false); 
                setNotification('Macro Successfully Edited');
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

    const closeModal = () => {
        setdisplayPopUpEdit(false);
    }

    if (displayPopUpEdit === true) {
        return (
            <div className='popUp__container'>
                <div className='edit__container'>
                    <div className='close__container'>
                        <CloseButton onClick={closeModal} />
                    </div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id='title' name='title' defaultValue={currentMacro[0]?.attributes.title}/>
                    <label htmlFor="content">Content:</label>
                    <textarea name="content" id="text" cols="50" rows="18" defaultValue= {currentMacro[0]?.attributes.text}/>
                    <Button backgroundColor= '#0166f4' onClick={save} text='save' />
                </div>
            </div>
          )  
    } else {
        return null;
    }
}

export default PopUp
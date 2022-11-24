import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';
import '../styles/notification.css';

const Notification = (props) => {

    const {success, error, notification} = useContext(AppContext);

    if (success === true) {
        return (
            <div className='notification__container' style={{backgroundColor:'#d5e8cd', color:'#6d8067'}}> 
                <img src="https://subir-imagen.com/images/2022/11/23/checkmark-1.png" alt="check-icon" />
                 {notification} 
            </div>
          )
        
    } else if (error === true) {
        return (
            <div className='notification__container' style={{backgroundColor:'#e2c0bc', color:'#934b4a'}}> 
                <img src="https://subir-imagen.com/images/2022/11/23/error.png" alt="check-icon" />
                    {notification}
            </div>
            )
    }
}

export default Notification
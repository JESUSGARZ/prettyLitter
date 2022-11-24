import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';

const Copied = (props) => {
        const {copied} = useContext(AppContext)
        if (copied === true) {
                return (
                        <div className='notification__container' style={{backgroundColor:'#c4dfea', color:'#52768e', width:'200px', display:'flex', justifyContent:'center'}}> 
                                {props.text}
                        </div>
                  )       
        }
}

export default Copied
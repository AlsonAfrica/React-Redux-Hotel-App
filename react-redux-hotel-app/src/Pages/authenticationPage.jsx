import { Link } from 'react-router-dom';
import "../Styles/authetication.css"
import LoginForm from '../Components/authform';
const Authentication = () => {
    return ( 
    <div className="authetication-wrapper">
        <div className="auth-picture">
            <div className='left-picture'>
        </div>

        </div>
        <div className='auth-form'>
            <div className='form'>
                <LoginForm/>
            </div>
            
        </div>

     
    </div> );
}
 
export default Authentication;
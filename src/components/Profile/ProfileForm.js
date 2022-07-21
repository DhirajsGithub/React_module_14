import { useRef, useContext, useState } from 'react';
import classes from './ProfileForm.module.css';
import AuthContext from '../../store/auth-context';
import { useHistory } from 'react-router-dom';

const ProfileForm = () => {
  const history = useHistory()
  const [isLoading, setIsLoading] = useState(false);
  const passCtx = useContext(AuthContext);
  const newPassRef = useRef();
  const submitHandler = (event)=>{
    event.preventDefault();
    const enteredpass = newPassRef.current.value
    setIsLoading(true);
    fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDFOSpA5pc4rynxb2GMJ7rC9UiyaENlUlM", {
      method : "POST",
      body : JSON.stringify({
        idToken : passCtx.token,
        password : enteredpass,
        returnSecureToken : true,
      }),
      headers : {
        'Content-Type' : "application/json"
      }
    }).then(res => {
      setIsLoading(false)
      history.replace("/auth");     // replace means you can't use the back button 
      // console.log("success")
    })
  }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor='new-password'>New Password</label>
        <input type='password' minLength="7" id='new-password' ref={newPassRef} />
      </div>
      <div className={classes.action}>
        {!isLoading && <button>Change Password</button>}
        {isLoading && <p>Updating...</p>}
      </div>
    </form>
  );
}

export default ProfileForm;

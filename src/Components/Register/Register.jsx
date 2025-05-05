import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';
import { FaEye, FaEyeSlash } from 'react-icons/fa';





const Register = () => {

  const [success, setSuccess] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const handleRagister = (event) => {

        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const terms = event.target.terms.checked;
        console.log(email, password, terms);

        setErrorMessage('');
        setSuccess(false);

        if(!terms){

          setErrorMessage('Please accept our terms and condition');
          return;
        }

        if(password.length < 6){

          setErrorMessage('Password should be 6 character or longer');
          return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;

        if(!passwordRegex.test(password)){

          setErrorMessage('at least one uppercase, one lowercase, one number, one special character');
          return;
        }


        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{

            console.log(result.user);
            setSuccess(true);

            sendEmailVerification(auth.currentUser)
            .then(() =>{

              console.log('verification email sent')
            })
        })
        .catch(error => {
            console.log('ERROR', error);
            setErrorMessage(error.message)
            setSuccess(false);
        })


    }
    return (
        <div className='max-w-lg mx-auto'>
            <h2 className="text-4xl my-8">Register</h2>

            <form onSubmit={handleRagister} >

            <label className="input input-bordered flex items-center gap-2 my-8">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg>
  <input type="email" name='email' className="grow" placeholder="Email" />
</label>

<label className="input input-bordered flex items-center gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg>
  <input type={showPassword ? 'text' :'password' } name='password' className="grow" placeholder='Password' />
  <button onClick={() => setShowPassword(!showPassword)} className='btn btn-xs'>

   {
     showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
   }
      
      </button>
</label>
<label className="label flex flex-col items-start">
  <a href='#' className="label-text-alt link link-hover my-4">Forgot Password?</a>
  
</label>

<fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
  
  <label className="label">
    <input type="checkbox" name='terms' className="checkbox" />
    Accept Our Terms and Condition
  </label>
</fieldset>
<div className='flex flex-col items-start'>
 <button className="btn btn-accent btn-wide my-8 mt-6 mr-auto  ">Login</button>
 </div>


            
            </form>
            {
                errorMessage && <p className='text-red-600'>{errorMessage}</p>
            }
            {
              success && <p className='text-green-600'>sign up is succesfull</p>
            }
            

        </div>
    );
};

export default Register;
import React from 'react'

let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


const useEmailValidate = () => {
    const [success,setSuccess] = React.useState(false);
    const [error,setError] = React.useState('');


    const validateEmail = (email)=>{
        if(validRegex.test(email)){
            
            setSuccess(true)
            setError('');
        }
        else{
            setError('Please Enter valid email address')
            setSuccess(false);
            
        }
        console.log(success)

    }
    
    return [success,error,validateEmail]
}

export default useEmailValidate

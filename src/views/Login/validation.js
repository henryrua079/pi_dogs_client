const validate = (inputs) => {
    const regex =  /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{5,10}$/;
    const errors = {};
 
    

    if (!inputs.username.length) errors.username = 'Username is required';
    else {
        if (!regex.test(inputs.username)) errors.username = 'Invalid password';
        else {
            errors.username = '';
        }
    }


    if (!inputs.password.length) errors.password = 'Password is required';
    else {
        if (!regex.test(inputs.password)) errors.password = 'Invalid password';
        else {
            errors.password = '';
        }
    }

    return errors;
}


export default validate;
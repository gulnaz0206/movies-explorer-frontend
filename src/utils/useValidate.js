import { useState } from "react";

function useValidate () {
    const [values, setValues] = useState({ name: '', email: '', password: '' });
    const [errors, setErrors] = useState({ name: '', email: '', password: '' });
    const [isValid, setIsValid] = useState(false);

    const onChange = (evt) => {
        const inputName = evt.target.name;
        setValues(state => ({ ...state, [inputName]: evt.target.value }))
        if (!evt.target.checkValidity()) {
            setIsValid(false);
            setErrors(state => ({ ...state, [inputName]: evt.target.validationMessage }))
        } else {
            setIsValid(true)
            setErrors(state => ({ ...state, [inputName]: '' }))
        }
    }
    return { values, setValues, errors, isValid, onChange };
}

export default useValidate;

import React, { useState } from "react";


const useForm = (initialFieldValues,setCurrentId) => {
    
    const [values, setValues] = useState(initialFieldValues)

    const [errors, setErrors] = useState({})

    const handleInputChange = e => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    return {
        values,
        setValues,
        errors, 
        setErrors,
        handleInputChange
    };
}

export default useForm

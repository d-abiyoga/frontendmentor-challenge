import React from 'react'

const FormError = () => {

    const validationRules = {
        required :{
            value: true,
            message: "Number of people cannot be zero"
        },
        notZero :{
            value: 0,
            message: "Please input a number"
        }
    }
    return (
        <div className="errorMessage">
            {validationRules.required.message}
        </div>
    )
}

export default FormError

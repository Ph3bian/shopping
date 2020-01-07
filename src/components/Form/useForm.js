import { useState, useEffect } from "react"

const useForm = (callback, validate, defaultValues) => {
    const [values, setValues] = useState(defaultValues)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback()
            return setIsSubmitting(false)
        }
    }, [errors, callback, isSubmitting, setIsSubmitting])

    const handleSubmit = event => {
        event.preventDefault()
        setErrors(validate(values))
        setIsSubmitting(true)
    }

    const handleChange = event => {
        event.persist()
        setValues(values => ({
            ...values,
            [event.target.name]: event.target.value
        }))
    }

    return {
        handleChange,
        handleSubmit,
        values,
        errors
    }
}

export default useForm

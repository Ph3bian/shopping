export default function validate(values) {
    let errors = {}
    let { email, password } = values
    email.trim()
    password.trim()
    if (!email) {
        errors.email = 'Email address is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'Email address is invalid'
    }
    if (password.length < 6) {
        errors.password = 'Minimum length must be greater than 6'
    }

    return errors
}

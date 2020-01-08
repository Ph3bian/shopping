export default function validate(values) {
    let errors = {}
    let { username, first_name, last_name, email, password, confirmPassword } = values
    email.trim()
    password.trim() 
    confirmPassword.trim()
    if (!email) {
        errors.email = 'Email address is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'Email address is invalid'
    }
    if (!password) {
        errors.password = 'Password is required'
    }
    if (password.length < 6) {
        errors.password = 'Minimum length must be greater than 6'
    }
    if (!first_name) {
        errors.first_name = 'First name is required'
    }
    if (!last_name) {
        errors.last_name = 'Last name is required'
    }
    if (!confirmPassword) {
        errors.confirmPassword = 'Confirm password is required'
    }
    if (!username) {
        errors.username = 'Username is required'
    }
    return errors
}

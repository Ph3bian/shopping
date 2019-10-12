export default function validate(values) {
  let errors = {};
  let { username, password } = values
  username.trim();
  password.trim();
  if (!username) {
    errors.username = 'Email address is required';
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(username)) {
    errors.username = 'Email address is invalid';
  }
  if (password.length < 6) {
    errors.password = "Minimum length must be greater than 6";
  }

  return errors;
};
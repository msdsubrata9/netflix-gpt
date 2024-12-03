export function checkFormData(email, password, name = "", isLoginForm) {
  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      password
    );
  const isNameValid = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/.test(name);

  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid) return "Password is not valid";
  if (!isLoginForm && !isNameValid) return "Name is not valid";
  return null;
}

import { useRef, useState } from "react";
import Header from "./Header";
import { checkFormData } from "../utils/validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { LOGIN_PAGE_BACKGROUND } from "../utils/constants";

function Login() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  function toggleSignInForm() {
    setIsLoginForm(!isLoginForm);
  }
  function handleButtonClick() {
    const message = checkFormData(
      email.current.value,
      password.current.value,
      name.current ? name.current.value : "",
      isLoginForm
    );
    setErrorMessage(message);
    if (message) return;
    if (!isLoginForm) {
      // Sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  }
  return (
    <div className="relative">
      <Header />
      <div>
        <img
          className="absolute h-screen w-screen object-cover"
          src={LOGIN_PAGE_BACKGROUND}
          alt="login page background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-4/12 absolute p-12 my-32 mx-auto right-0 left-0 text-white rounded bg-black bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isLoginForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isLoginForm && (
          <>
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="p-4 my-4 w-full bg-gray-700"
            />
          </>
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isLoginForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="cursor-pointer" onClick={toggleSignInForm}>
          {isLoginForm
            ? "New to Netflix? Sign up now."
            : "Existing User to Netflix? Sign In Now."}
        </p>
      </form>
    </div>
  );
}

export default Login;

import ReactDOM from "react-dom";
import { Fragment, useRef, useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/auth.css";

import { useDispatch, useSelector } from "react-redux";
import { authActions, uiActions } from "../../store";
import { useHistory } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

function Backdrop(props) {
  const dispatch = useDispatch();
  function closeCart() {
    dispatch(uiActions.showAuth(false));
  }
  return (
    <div onClick={closeCart} className="backdrop">
      {props.children}
    </div>
  );
}

async function addNewUser(email, name) {
  await setDoc(doc(db, "users", email), {
    name: name,
    email: email,
  });
}

function AuthPageOverlay() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  const [isLogIn, setIsLogIn] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  function switchLogIn() {
    setIsLogIn(!isLogIn);
  }

  const isLoggedIn = useSelector((state) => {
    return state.auth.isLoggedIn;
  });

  console.log(isLoggedIn);

  async function addUser(e) {
    e.preventDefault();
    let url;
    if (isLogIn) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC4QeuIsyAmndsP65y4uMqVFxxcoLE5WQE";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC4QeuIsyAmndsP65y4uMqVFxxcoLE5WQE";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
        returnSecureToken: true,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        setLoading(true);
        if (!response.ok) {
          setLoading(false);
          response.json().then((data) => {
            setError(data.error.message);
            console.log(error);
          });
        } else {
          return response.json();
        }
      })
      .then((data) => {
        if (isLogIn) {
          console.log(data);
          const token = data.token;
          dispatch(
            authActions.signUp({
              email: emailRef.current.value,
              password: passwordRef.current.value,
              token: token,
            })
          );
        } else {
          //sign up
          const token = data.token;
          addNewUser(emailRef.current.value, nameRef.current.value);
          dispatch(
            authActions.signUp({
              name: nameRef.current.value,
              email: emailRef.current.value,
              password: passwordRef.current.value,
              token: token,
            })
          );
        }
        setLoading(false);
        dispatch(uiActions.showAuth(false))
      });

  }
  return (
    <div className="auth">
      <h3>{isLogIn ? "Sign In" : "Sign Up"}</h3>
      <div className="form-div">
        <form onSubmit={addUser}>
          {!isLogIn && <input type={"text"} ref={nameRef} placeholder="Name" />}
          <input type={"email"} ref={emailRef} placeholder="Email" />
          <input type={"password"} ref={passwordRef} placeholder="Password" />
          <button type="submit">{isLogIn ? "Sign In" : "Sign Up"}</button>
        </form>
      </div>
      <p>
        {isLogIn ? "Dont have an account?" : "Already have an account?"}
        <span onClick={switchLogIn}>{isLogIn ? "Sign Up" : "Sign In"}</span>
      </p>
      {error && <p>{error}</p>}
    </div>
  );
}

function AuthPage() {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("overlay-hook")
      )}
      {ReactDOM.createPortal(
        <AuthPageOverlay />,
        document.getElementById("overlay-hook")
      )}
    </Fragment>
  );
}

export default AuthPage;

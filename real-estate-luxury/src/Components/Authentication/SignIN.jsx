import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../../firebase.config";



const SignIN = () => {
    const { handleLoginAuth } = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)

        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password)

        handleLoginAuth(email, password)
            .then(result => {
                console.log(result.user)
                alert("successfully  logged in")
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const googleProvider = new GoogleAuthProvider()
    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                console.log(result.user)
                alert("successfully logged in")
            })
            .catch(error => console.log(error.message))
    }

    return (
        <div className="login">

            <form onSubmit={handleLogin} className="login__form">
                <h1 className="login__title">Login</h1>

                <div className="login__inputs">
                    <div className="login__box">
                        <input type="email" placeholder="Email ID" name="email" required className="login__input" />
                        <i className="ri-mail-fill"></i>
                    </div>

                    <div className="login__box">
                        <input type="password" placeholder="Password" name="password" required className="login__input" />
                        <i className="ri-lock-2-fill"></i>
                    </div>
                </div>

                <div className="login__check">
                    <a href="#" className="login__forgot">Forgot Password?</a>
                </div>

                <button type="submit" className="login__button">Login</button>

                <div className="login__register">
                    Dont have an account? <Link to='/signup'>Register</Link>
                </div>
            </form>
            <button className="btn btn-primary" onClick={handleGoogleLogin}>Google</button>
        </div>
    );
};

export default SignIN;
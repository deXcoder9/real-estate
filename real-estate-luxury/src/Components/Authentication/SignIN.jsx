import { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../../firebase.config";



const SignIN = () => {
    const { handleLoginAuth } = useContext(AuthContext)
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
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
                navigate(location?.state ? location.state : '/')
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

    const githubProvider = new GithubAuthProvider()
    const handleGithubLogin = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                console.log(result.user)
                alert("successfully logged in")
            })
            .catch(error => console.log(error.message))
    }
    useEffect(() => {
        document.title = "Login"
    }, [])

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

                <button type="submit" className="login__button">Login</button>

                <div className="login__register">
                    Dont have an account? <Link to='/signup' className="underline">Register</Link>
                </div>
            </form>
            <div className="-mt-20 mx-auto space-x-5">
                <button className="bg_btn_color btn text-white btn-primary" onClick={handleGoogleLogin}>Google</button>
                <button className="bg_btn_color btn text-white btn-primary" onClick={handleGithubLogin}>Github</button>
            </div>
        </div>
    );
};

export default SignIN;
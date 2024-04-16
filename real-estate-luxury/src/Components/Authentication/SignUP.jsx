import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import 'animate.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUP = () => {
    const [errorMessage, setErrorMessage] = useState(null)
    const { handleRegistrationAuth } = useContext(AuthContext)

    // console.log(handleRegistrationAuth)
    const handleRegistration = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photoURL = form.get('photoURL')
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password, name, photoURL)
        setErrorMessage(null)
        if (password.length < 6) {
            setErrorMessage("Password need to be at-least 6 characters")
            return
        }
        if (!/[A-Z]/.test(password)) {
            setErrorMessage("Password must need to contain an Uppercase letter ")
            return
        }
        if (!/^(?=.*[a-z]).+$/.test(password)) {
            setErrorMessage("Password must need to contain an LowerCase letter ")
            return
        }

        handleRegistrationAuth(email, password)
            .then(result => {
                console.log(result.user)
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoURL,
                }).then(() => {
                    toast.success("successfully created user", {
                        position: "top-center"
                    })
                    setTimeout(function () {
                        window.location.href = "/";
                    }, 2000);
                    console.log('profile updated');
                })
                    // .then()
                    .catch(error => console.log("update>", error.message))
            })
            .catch(error => {
                setErrorMessage(error.message)
            })

    }
    useEffect(() => {
        document.title = "Registration"
    }, [])

    return (
        <div className="login my-10  animate__animated  animate__backInRight">

            <form onSubmit={handleRegistration} className="login__form">
                <h1 className="login__title">Registration</h1>

                <div className="login__inputs">
                    <div className="login__box">
                        <input type="text" placeholder="Your name" required name="name" className="login__input" />
                        <i className="ri-mail-fill"></i>
                    </div>
                    <div className="login__box">
                        <input type="url" placeholder="Photo url" name="photoURL" required className="login__input" />
                        <i className="ri-mail-fill"></i>
                    </div>
                    <div className="login__box">
                        <input type="email" name="email" placeholder="Email ID" required className="login__input" />
                        <i className="ri-mail-fill"></i>
                    </div>

                    <div className="login__box">
                        <input type="password" name="password" placeholder="Password" required className="login__input" />
                        <i className="ri-lock-2-fill"></i>
                    </div>
                    <p className="text-left text-[14px] text-red-600 font-bold">*{errorMessage}</p>
                </div>

                <button type="submit" className="login__button">Register</button>
                <ToastContainer />

                <div className="login__register">
                    already have an account? <Link to='/signin' className="underline">Login</Link>
                </div>
            </form>
        </div>
    );
};

export default SignUP;
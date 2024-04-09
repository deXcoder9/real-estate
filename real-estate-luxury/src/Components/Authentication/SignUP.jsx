import { useContext, useState } from "react";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import { updateProfile } from "firebase/auth";


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
        }
        if (!/[A-Z]/.test(password)) {
            setErrorMessage("Password must need to contain an Uppercase letter ")
        }
        if (!/^(?=.*[a-z]).+$/.test(password)) {
            setErrorMessage("Password must need to contain an LowerCase letter ")
        }

        handleRegistrationAuth(email, password)
            .then(result => {
                console.log(result.user)
                alert("successfully created user")
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: photoURL
                })
                    .then(console.log("profile updated"))
                    .catch(error => console.log("update>", error.message))
            })
            .catch(error => {
                console.log(error.message)
            })

    }

    return (
        <div className="login">

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

                <div className="login__register">
                    Dont have an account? <a href="#">Register</a>
                </div>
            </form>
        </div>
    );
};

export default SignUP;
import { updateProfile } from "firebase/auth";
import auth from "../../../firebase.config";
import { useEffect } from "react";


const UpdatePfp = () => {

    const handleUpdateProfile = e => {
        // e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photoURL = form.get('photoURL')
        // console.log(name, photoURL)
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        }).then(() => {
            alert('Profile updated!')
            // ...
        }).catch((error) => {
            console.log(error.message)
        });
    }
    useEffect(() => {
        document.title = "Update Profile"
    }, [])


    return (
        <div className="relative mx-auto w-full max-w-md bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10 my-14 ">
            <div className="w-full">
                <div className="text-center">
                    <h1 className="text-3xl font-semibold text-gray-900">Update Your Profle</h1>
                    <p className="mt-2 text-gray-500">Update your profile to have new information</p>
                </div>
                <div className="mt-5">
                    <form onSubmit={handleUpdateProfile}>
                        <div className="relative mt-6">
                            <input type="text" name="name" id="name" placeholder="Your name" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="NA" />
                            <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Your name </label>
                        </div>
                        <div className="relative mt-6">
                            <input type="url" name="photoURL" id="photoURL" placeholder="Photo URL" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" />
                            <label htmlFor="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Photo URL</label>

                        </div>
                        <div className="my-6">
                            <button type="submit" className="w-full rounded-md bg-black px-3 py-4 text-white focus:bg-gray-600 focus:outline-none">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdatePfp;
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Auth Provider/AuthProvider";

const UserProfile = () => {
    const { userInfo } = useContext(AuthContext)
    // console.log(userInfo)
    useEffect(() => {
        document.title = "User Profile"
    }, [])
    return (
        <div className="my-16">
            <div className="flex justify-center items-center flex-col mt-16 space-y-10">
                <img className="w-[200px] rounded-full" src={userInfo.photoURL} />
                < h1 className="text-2xl capitalize">Name: {userInfo.displayName} </h1>
                <h2 className="lg:text-2xl  ">Email: {userInfo.email}</h2>

            </div>
        </div >
    );
};

export default UserProfile;
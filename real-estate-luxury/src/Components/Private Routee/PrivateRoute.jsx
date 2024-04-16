import { useContext } from "react";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    const { userInfo, loading } = useContext(AuthContext)
    if (loading) {
        // return <span className="loading loading-infinity loading-lg"></span>
        return <div className="relative h-screen flex justify-center items-center">
            <span className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center items-center loading loading-spinner loading-lg"></span>
        </div>
    }

    if (userInfo) {
        return children;
    }
    return <Navigate to='/signin'></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}

export default PrivateRoute;
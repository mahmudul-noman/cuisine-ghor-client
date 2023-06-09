import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';
import Loader from '../pages/Shared/Loader/Loader';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loader />
    }
    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to="/login" replace></Navigate >
};

export default PrivateRoute;
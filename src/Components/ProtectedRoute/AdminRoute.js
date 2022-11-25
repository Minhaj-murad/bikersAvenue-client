import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Authprovider/Authprovider';
import useAdmin from '../Hooks/useAdmin';
import Loader from '../Loader/Loader'


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    

    if (user && isAdmin) {
        return children;
    }
    if (loading || isAdminLoading) {
        return <Loader></Loader>
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
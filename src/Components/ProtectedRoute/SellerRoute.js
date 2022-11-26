import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Authprovider/Authprovider';
import useSeller from '../Hooks/useSeller';
import Loader from '../Loader/Loader'


const SellerRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const location = useLocation();

    

    if (user && isSeller) {
        return children;
    }
    if (loading || isSellerLoading) {
        return <Loader></Loader>
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
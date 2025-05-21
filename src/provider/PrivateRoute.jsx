import React, { use } from 'react';
import { AuthContext } from './AuthContext';
import Loading from '../components/Loading/Loading';
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user,loading} = use(AuthContext);
    const location = useLocation();

    if(loading){
        return <Loading/>
    }

    return (
        <div>
            {
                user ? children : <Navigate state={location.pathname} to={'/auth/login'} />
            }
        </div>
    );
};

export default PrivateRoute;
import React, { useContext } from 'react';
import { AuthContext } from '../Layout/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location)

    if (loading) {
        return <Spinner style={{marginTop: '120px'}} className='d-flex justify-content-center mx-auto' animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>
    }

    if (user) {
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivateRoute;
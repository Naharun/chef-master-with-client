import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const Login = () => {
    const auth = getAuth(app);
    const {signIn, setUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location)
    const from = location.state?.from?.pathname || '/';

    const provider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleLogin = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const user = result.user;
            setUser(user);
            navigate(from, {replace: true});
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleGithubLogin = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result => {
            const user = result.user;
            console.log(user)
            setUser(user);
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='container  mx-auto mt-5 shadow-lg p-lg-5'>
            <h2 className='text-center'>Please Login</h2>
            <hr className='w-lg-50 mx-auto'></hr>
            <Form className='w-lg-50 p-3 mx-auto mt-5' onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br></br>
                <Button className='my-3 w-100' variant="outline-primary" onClick={handleGoogleLogin}><FaGoogle></FaGoogle> Sign in With Google</Button>
                <Button className='w-100' variant="outline-secondary" onClick={handleGithubLogin}><FaGithub/> Sign in With GitHub</Button>
                <p className='mt-2'><small>Don't have an account? Please <Link className='fs-5 fw-semibold' to='/signup'>Register</Link></small></p>
            </Form>
        </div>
    );
};

export default Login;
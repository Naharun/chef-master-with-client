import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('');
    const {createUser, setUser} = useContext(AuthContext);

    const handleSignup = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const photoURL = form.photoURL.value;
        console.log(email,password,confirm);
        setError('');

        if(password !== confirm){
            setError('Your Password did not match!')
            return
        }
        else if(password.length < 6){
            setError('Your Password must be 6 Characters or longer!')
        }
        createUser(email, password, photoURL)
        .then(result => {
            const loggedUser =result.user;
            console.log(loggedUser)
            setUser(loggedUser)
            form.reset();
        })
        .catch(error =>{
            console.log(error)
            setError(error.message)
        })
    }

    return (
        <div className='mx-auto container mt-lg-5 mt-2 shadow-lg border-2 p-lg-5'>
            <h2 className='text-center'>Please Sign Up With</h2>
            <hr className='w-75 mx-auto' />
            <Form className='mx-auto mt-5' onSubmit={handleSignup}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='displayName' placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUrl">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="URL" name='photoURL' placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name='confirm' placeholder="Confirm Password" required />
                </Form.Group>
                <span><small className='text-danger '>{error}</small></span>
                <br />
                <br />
                <Button variant="primary" type="submit">
                    Sign Up
                </Button>
                <p className='mt-2'><small>Don't have an account? Please <Link className='fs-5 fw-semibold' to='/login'>Log In</Link></small></p>
            </Form>
        </div>
    );
};

export default SignUp;
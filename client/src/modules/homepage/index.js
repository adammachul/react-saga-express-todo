import React from 'react';
// import { Redirect } from 'react-router-dom';
import LoginForm from '../authorization/LoginForm';

// TODO: Redirect to Todos when logged in or Login Page when not
const values = {
    email: '',
    password: 'asdasd'
}

const Homepage = () => (
    <LoginForm values={values}/>
);

export default Homepage;
import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';


const Login = () => {
  const location = useLocation();
  const userDataRequest = location.hash.split('&')
  // console.log(userDataRequest);

  const userAccessToken = userDataRequest[0].split("=")
  const userIsLogged = userDataRequest[3].split("=")

  let userData = {
    token: userAccessToken[1],
    isLogged: userIsLogged[1] ? true : false
  }

  localStorage.setItem('userData', JSON.stringify(userData))

  return (
    <Redirect to="/" />
  )
}

export default Login
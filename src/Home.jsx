import React from 'react'
import { useAuth } from './store/auth'
import Logout from './Compoents/signout/Logout';
const Home = () => {
    const { user } = useAuth();

    return (
        <div className="home-container">
            <h1 className="home-heading" >Home</h1>
            <h2 className="home-welcome"  >Welcome {user.email}</h2>
            <Logout />
        </div>
    )
}

export default Home
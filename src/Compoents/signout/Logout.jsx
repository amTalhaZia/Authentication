import React from 'react'
import { useAuth } from '../../store/auth'
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Logout = () => {

  const { signOut } = useAuth()

  const handleSignOut = async () => {
    try {
      await signOut();
      toast.success("sign out successfully"); 
    } catch (error) {
      console.error('Error signing out:', error);
      alert(error.message);
    }
  };
  return (
    <div>
        <button  onClick={handleSignOut}>SignOut </button>
    </div>
  )
}

export default Logout
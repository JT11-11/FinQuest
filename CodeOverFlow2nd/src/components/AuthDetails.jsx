import React,{useEffect, useState} from 'react'
import { auth } from '../firebase/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { list } from 'firebase/storage';
const AuthDetails = () => {
    const [ authUser,setAuthUser]=useState(null);

    useEffect(()=>{
        const listen=onAuthStateChanged(auth,(user)=>{
            if (user){
              setAuthUser(user)  
            }else{
                setAuthUser(null)
            }
        });
        return ()=>{
            listen();
        }
    },[]);

    const userSignOut=()=>{
        signOut(auth).then(()=>{
            console.log("Signed In Successfully. ")
        }).catch(error=>console.log(error))
    }
  return (
    <div>{authUser?<p>Signed In</p>: <p>Signed Out</p>}</div>
  )
}

export default AuthDetails
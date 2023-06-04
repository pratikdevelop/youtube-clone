import { createContext, useContext, useReducer } from "react";
import UserReducer from './userReducer';
// this imis the data leyer

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase'
export const UserContext = createContext();

const initialState ={
    token :  localStorage.getItem('token') || null,
    user: {}
}
// Build a provider  
const UserProvider = ({children}) => {
   const [state,dispatch] = useReducer(UserReducer,initialState);
   
   const signIn =async(email,password)=>{
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        localStorage.setItem('token',response.user.stsTokenManager.refreshToken);
        dispatch({type:'signin', payload:response.user.stsTokenManager.refreshToken})
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
   }
    <UserContext.Provider value={{...state, signIn}}>
        {children}
    </UserContext.Provider>

 }
const useAuthContext = () => {
    useContext(UserContext);
}

export {useAuthContext, UserProvider};
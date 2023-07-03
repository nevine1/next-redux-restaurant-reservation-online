import { createContext, useContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword,
        signInWithEmailAndPassword,signOut,
        onAuthStateChanged} from 'firebase/auth';
import { auth } from '../firebase/firebase';

const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  //const [numNights, setNumNights] = useState(0);
  const newUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
   const signIn = (email, password) =>  {
    return signInWithEmailAndPassword(auth, email, password)
   }
   const logout = () => {
    return signOut(auth)
    }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

    });
    return () => {
      unsubscribe();
    };
  }, [user]);
 
  return (
    <UserContext.Provider value={{ newUser, user, logout, signIn}}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider ;

export const UserAuth = () => {
  return useContext(UserContext);
};
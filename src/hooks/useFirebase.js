import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword,  updateProfile } from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();

//register user
    const registerUser = (email, password, name, history) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser);
            saveUser(email, name, 'POST');
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
              }).catch((error) => {
              });
            history.replace('/home');
         })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally(() => setIsLoading(false));  
    }

//login with email and password
    const loginUser = (email, password, location, history) =>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            saveUser(user.email, user.displayName, 'PUT');
            setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            
            })
            .finally(() => setIsLoading(false));  
                }

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribed;
    },[auth])

    useEffect(()=>{
        fetch(`https://vast-oasis-50516.herokuapp.com/users/${user.email}`)
          .then(res=>res.json())
          .then(data=> setAdmin(data.admin))
    },[user.email])

    //logout
    const logOut = () =>{
        signOut(auth).then(() => {
          }).catch((error) => {
           
          })
          .finally(()=> setIsLoading(false));       
    }

    const saveUser = (email, displayName, method) =>{
        const user = {email, displayName};
        fetch('https://vast-oasis-50516.herokuapp.com/users', {
          method: method,
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then()
    }

    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        logOut,
        loginUser
    }

}

export default useFirebase;
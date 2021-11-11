import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile, getIdToken } from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState('');

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

//register user
    const registerUser = (email, password, name, history) =>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
        //     const newUser = {email, displayName: name};
        //     setUser(newUser);
        //     saveUser(email, name, 'POST');
        //     updateProfile(auth.currentUser, {
        //         displayName: name
        //       }).then(() => {
        //       }).catch((error) => {
        //       });
        //     history.replace('/');
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
            setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            
            })
            .finally(() => setIsLoading(false));  
                }

    //google sign in
    // const signInWithGoogle = (location, history) =>{
    //     setIsLoading(true);
    //     signInWithPopup(auth, googleProvider)
    //     .then((result) => {
    //         const user = result.user;
    //         saveUser(user.email, user.displayName, 'PUT');
    //         setAuthErro r('');
    //         const destination = location?.state?.from || '/';
    //         history.replace(destination);

    //       }).catch((error) => {
    //         setAuthError(error.message);
    //       })
    //       .finally(() => setIsLoading(false)); 
    // }

    useEffect(()=>{
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                // getIdToken(user)
                // .then(idToken =>{
                //   setToken(idToken);
                // })
            } else {
                setUser({})
            }
            setIsLoading(false);
          });
          return () => unsubscribed;
    },[auth])

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/users/${user.email}`)
    //       .then(res=>res.json())
    //       .then(data=> setAdmin(data.admin))
    // },[user.email])

    //logout
    const logOut = () =>{
        signOut(auth).then(() => {
          }).catch((error) => {
           
          })
          .finally(()=> setIsLoading(false));       
    }

    // const saveUser = (email, displayName, method) =>{
    //     const user = {email, displayName};
    //     fetch('http://localhost:5000/users', {
    //       method: method,
    //       headers: {
    //         'content-type': 'application/json'
    //       },
    //       body: J SON.stringify(user)
    //     })
    //     .then()
    // }

    return {
        user,
        admin,
        // token,
        isLoading,
        authError,
        registerUser,
        // signInWithGoogle,
        logOut,
        loginUser
    }

}

export default useFirebase;
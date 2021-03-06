import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initilizeAuthentication from "../components/Firebase/Firebase.init";

initilizeAuthentication();
const useFirebase = () =>{
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = ()=>{
        return signInWithPopup(auth, googleProvider)
        
    }

    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth,(user) =>{
            if(user){
                setUser(user)
            }
        })
    },[])

    return {
        user,
        signInUsingGoogle,
        logOut
    }
}
export default useFirebase;
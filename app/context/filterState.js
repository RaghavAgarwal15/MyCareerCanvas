"use client"
import FilterContext from "./filterContext"
import react, { useState , useEffect } from "react";

import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebaseConfig";


const FilterState = (props) => {

  const [user, setUser] = useState(null);
  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
  }
  const logOut = () => {
    signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => { setUser(currentUser) })
    console.log(user)
    return () => unsubscribe();
  }, [user])


  const initialState = {
    Sector: 2,
    Subjects: [],
    Time_Devotion: 3,
    Work_Mode: 3
  }
  const [filters, applyFilters] = useState(initialState);

  return (
    <FilterContext.Provider value={{ filters, applyFilters, user, googleSignIn, logOut }}>
      {props.children}
    </FilterContext.Provider>
  );
}

export default FilterState;
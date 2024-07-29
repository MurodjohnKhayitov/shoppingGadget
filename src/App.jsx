import React, { useEffect } from "react";
import './components/firebase/config.js'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import AOS from "aos";
import "aos/dist/aos.css";
import RouterMain from "./root/RouterMain.jsx";
import useAuth from "./hook/useAuth.js";


const App = () => {
  let auth = getAuth()
  const { setAuth } = useAuth();

  useEffect(() => {
    let findOut = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuth(user)
      } else {
        setAuth({})
      }
    })
    return findOut
  }, [auth])


  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
      <RouterMain />

    </div>
  );
};

export default App;

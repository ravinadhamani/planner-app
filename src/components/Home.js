import React from "react";
import {useNavigate} from "react-router-dom"
import styles from "./home.module.css"
import { Button } from "react-bootstrap";
import { useUserAuth } from "../Context/UserAuthContext";
import MainPage from "./MainPage";

function Home()
{
    const navigate = useNavigate();
    const handlePlanner = () => {
        navigate("/planner");
    };
    const handleNotes = () => {
        navigate("/notes");
    };
    const { logOut, user } = useUserAuth();
    const handleLogout = async () => {
        try {
          await logOut();
          navigate("/");
        } catch (error) {
          console.log(error.message);
        }
      };
    const handleSignup = async () => {
        try {
          await logOut();
          navigate("/signup");
        } catch (error) {
          console.log(error.message);
        }
      };
    const handleHome = async () => {
        try {
          await logOut();
          navigate("/mainpage");
        } catch (error) {
          console.log(error.message);
        }
      };
    
    return(
        <>
       
            <nav className={styles.navbar}>
            <button onClick={handleHome} className={styles.notesBtn}>Home</button>
            <div>
                <button onClick={handleLogout} className={styles.notesBtn}>Log out</button>
            </div>
                <button onClick={handleSignup} className={styles.notesBtn} >Signup</button>
                <button className={styles.plannerBtn} onClick={handlePlanner}>Create Planner</button>
                <button className={styles.notesBtn} onClick={handleNotes}>Take Notes</button>
            </nav>
        </>
    )
}
export default Home;
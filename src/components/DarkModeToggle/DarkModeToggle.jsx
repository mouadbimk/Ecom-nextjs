"use client"
import { useContext } from 'react';
import styles from './DarkModeToggle.module.css';
import { ThemeContext } from '@/context/ThemeContext';
const DarkModeToggle = () => {
    const {mode,toggleMode} = useContext(ThemeContext)
    return (
        <div className={styles.container} onClick={toggleMode}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🌚</div>
            <div className={styles.switcher}
            style={mode === "light" ? {left: "2px"} : {right:"2px"}}/>
        </div>
    );
}

export default DarkModeToggle;

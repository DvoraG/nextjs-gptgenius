'use client';

import React from 'react';
import useTheme from '@/utils/useTheme';
import styles from '@/styles/toggle.module.css';

export default function Toggle() {
  const { theme, themes, setTheme } = useTheme();
  const toggleTheme = () => setTheme((theme === themes.dark) ? themes.light : themes.dark);

  return (
    <label htmlFor="toggle" className={styles.switch}>
        <input type="checkbox" id="toggle" onChange={toggleTheme}/>
        <span className={styles.slider}></span>
    </label>
  );
}
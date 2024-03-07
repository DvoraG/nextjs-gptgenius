'use client';

import { Toaster } from "react-hot-toast";
import styles from '@/styles/providers.module.css';

const Providers = ({children}) => {
  return (
    <>
        <Toaster className={styles.center} />
        {children}
    </>
  );
}

export default Providers;
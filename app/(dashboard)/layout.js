import Sidebar from '@/components/Sidebar';
import Toggle from '@/components/Toggle';
import { FaBarsStaggered } from 'react-icons/fa6';
import styles from '@/styles/dashboard.module.css';

const layout = ({children}) => {
  return (
    <div className={styles.dashboard}> 
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.contentBase}>
        {children}
        <div  className={styles.sidebarToggle} >
          <input type='checkbox' id='sidebarToggle' />
          <label htmlFor='sidebarToggle'>
            <FaBarsStaggered />
          </label>
        </div>
      </div>
    </div>
  );
}

export default layout;
import { SiOpenaigym } from 'react-icons/si';
import styles from '@/styles/sidebarheader.module.css';
import Toggle from './Toggle';

const SidebarHeader = () => {
  return (
    <div className={styles.container}>
      <SiOpenaigym className={styles.icon}/>
      <h2 className={styles.brand}>GPTGenius</h2>
      <Toggle />
    </div>
  );
}

export default SidebarHeader;
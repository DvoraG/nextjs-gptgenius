import styles from '../styles/sidebar.module.css';
import MemberProfile from './MemberProfile';
import NavLinks from './NavLinks';
import SidebarHeader from './SidebarHeader';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      {/* first row */}
      <SidebarHeader />
      {/* second row */}
      <NavLinks />
      {/* third row */}
      <MemberProfile />
    </div>
  );
}
export default Sidebar;
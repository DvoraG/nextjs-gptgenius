import styles from '@/styles/navlinks.module.css';
import Link from 'next/link';

const links = [
  { href: '/chat', label: 'chat'},
  { href: '/tours', label: 'tours'},
  { href: '/tours/new-tour', label: 'new tour'},
  { href: '/profile', label: 'profile'},
];

const NavLinks = () => {
  return (
    <ul className={styles.menu}>
      {
        links.map( link => {
          return <li key={link.href}>
            <Link className={styles.navlink} href={link.href}>{link.label}</Link>
          </li>
        })
      }
    </ul>
  );
}

export default NavLinks;
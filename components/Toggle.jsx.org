import styles from '@/styles/toggle.module.css';

const Toggle = () => {
  return (
    <label htmlFor="toggle" className={styles.switch}>
        <input type="checkbox" id="toggle" />
        <span className={styles.slider}></span>
    </label>
  );
}

export default Toggle;
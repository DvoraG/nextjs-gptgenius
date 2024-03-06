import Link from "next/link";
import styles from "../styles/page.module.css";

const HomePage = () => {
  return (
    <main className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroContentTitle}>GPTGenius</h1>
        <p>
          GPTGenius: Your AI language companion. Powered by OpenAI, it
          enhances your conversations, content creation, and more!
        </p>
        <Link href='/sign-up' className='btn btn-secondary '>
          Get Started
        </Link>
      </div>  
    </main>
  );
}

export default HomePage;
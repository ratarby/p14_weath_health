import { Link } from 'react-router-dom';
import styles from './Error.module.css';

export default function ErrorPage() {
  return (
    <main className={`${styles.error}`}>
      <h1 className={styles.errorTitle}>404</h1>
      <p className={styles.errorText}>Ooops!  Page not found</p>
      <Link to="/" className={styles.returnHomeText}>
        <p>Go back to home page</p>
      </Link>
    </main>
  );
}

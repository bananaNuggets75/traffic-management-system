import styles from './page.module.css';
export default function Home() {
    return (
        <div className={styles.page}>
            <h1>Welcome to SafeDrive</h1>
            <p>Manage traffic violations effectively.</p>
        </div>
    );
}
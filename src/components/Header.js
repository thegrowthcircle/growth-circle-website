import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logoWrapper}>
                <Image
                    src="/images/logo.png"
                    alt="The Growth Circle"
                    width={180}
                    height={60}
                    className={styles.logoImage}
                    priority
                />
            </Link>

            <nav className={styles.nav}>
                <Link href="/" className={styles.navLink}>Home</Link>
                <Link href="#benefits" className={styles.navLink}>Membership</Link>
                <Link href="#who-can-join" className={styles.navLink}>Who Can Join</Link>
                <Link href="#how-it-works" className={styles.navLink}>How It Works</Link>
                <Link href="#faq" className={styles.navLink}>FAQ's</Link>
            </nav>

            <Link href="#pricing" className={styles.ctaBtn}>
                Become our member
            </Link>
        </header>
    );
}

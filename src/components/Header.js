import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
    console.log("Mobile Fix v6 (WhatsApp) 🚀");
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

            <a href="https://wa.me/917075742095?text=Hi%2C%0A%0AI%20am%20interested%20to%20know%20more%20about%20The%20Growth%20Circle." className={styles.ctaBtn} target="_blank" rel="noopener noreferrer">
                Become our member
            </a>
        </header>
    );
}

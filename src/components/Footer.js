"use client";
import styles from './Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    console.log("CI/CD Pipeline Check: Active 🚀");
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.topRow}>
                    <div className={styles.logoWrapper}>
                        <Image
                            src="/images/footer logo.png"
                            alt="The Growth Circle"
                            width={180}
                            height={60}
                            className={styles.logo}
                            style={{ width: 'auto', height: '60px', objectFit: 'contain' }}
                        />
                    </div>

                    <nav className={styles.nav}>
                        <Link href="#membership" className={styles.navLink}>Membership</Link>
                        <Link href="#who-can-join" className={styles.navLink}>Who Can Join</Link>
                        <Link href="#how-it-works" className={styles.navLink}>How It Works</Link>
                        <Link href="#faq" className={styles.navLink}>FAQ's</Link>
                    </nav>

                    <div className={styles.socials}>
                        <a href="#" className={styles.socialIcon} aria-label="LinkedIn">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.466 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 12.872 10.282 12.872 13.396V19H9.872V8H12.872V9.294C14.266 7.006 19.998 6.726 19.998 12.068V19H20Z" />
                            </svg>
                        </a>
                        <a href="#" className={styles.socialIcon} aria-label="Facebook">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 12.073C24 5.405 18.627 0 12 0C5.373 0 0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24V15.563H7.078V12.073H10.125V9.429C10.125 6.422 11.916 4.761 14.656 4.761C15.969 4.761 17.344 4.996 17.344 4.996V7.948H15.83C14.34 7.948 13.875 8.873 13.875 9.822V12.073H17.203L16.671 15.563H13.875V24C19.613 23.094 24 18.1 24 12.073Z" />
                            </svg>
                        </a>
                        <a href="#" className={styles.socialIcon} aria-label="Twitter">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.953 4.57C23.07 4.962 22.122 5.227 21.127 5.346C22.143 4.737 22.909 3.774 23.275 2.622C22.325 3.187 21.274 3.593 20.149 3.815C19.252 2.858 17.974 2.261 16.562 2.261C13.85 2.261 11.654 4.456 11.654 7.168C11.654 7.553 11.696 7.927 11.78 8.283C7.702 8.078 4.093 6.126 1.673 3.16C1.25 3.886 1.006 4.73 1.006 5.632C1.006 7.337 1.874 8.835 3.191 9.715C2.385 9.69 1.625 9.468 0.962 9.101C0.962 9.122 0.962 9.143 0.962 9.165C0.962 11.543 2.653 13.526 4.908 13.98C4.5 14.09 4.062 14.148 3.612 14.148C3.297 14.148 2.99 14.118 2.69 14.061C3.315 16.01 5.127 17.428 7.272 17.467C5.594 18.784 3.479 19.569 1.185 19.569C0.789 19.569 0.4 19.546 0.012 19.501C2.193 20.9 4.786 21.716 7.568 21.716C16.634 21.716 21.594 14.207 21.594 7.765C21.594 7.551 21.589 7.339 21.58 7.127C22.544 6.432 23.376 5.568 24.004 4.584L23.953 4.57Z" />
                            </svg>
                        </a>
                    </div>
                </div>

                <div className={styles.middleRow}>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactBadge}>Contact us:</div>

                        <div className={styles.infoItem}>
                            Email: <a href="mailto:info@growthcircle.com">info@growthcircle.com</a>
                        </div>
                        <div className={styles.infoItem}>
                            Phone: <a href="tel:5555678901">555-567-8901</a>
                        </div>
                        <div className={styles.infoItem}>
                            Address: 1234 Main St<br />
                            Hyderabad City, Telangana State 500082
                        </div>
                    </div>

                    <div className={styles.newsletter}>
                        <form className={styles.subscribeForm}>
                            <input
                                type="email"
                                placeholder="Email"
                                className={styles.emailInput}
                            />
                            <button type="submit" className={styles.subscribeButton}>
                                Subscribe to news
                            </button>
                        </form>
                    </div>
                </div>

                <div className={styles.divider}></div>

                <div className={styles.bottomRow}>
                    <div className={styles.copyrightGroup}>
                        <p>© 2026 The Growth Circle. All Rights Reserved.</p>
                        <a href="#" className={styles.privacyLink}>Privacy Policy</a>
                    </div>
                    <div className={styles.sinceMediaWrapper}>
                        <Image
                            src="/images/SinceMedia.png"
                            alt="Since Media"
                            width={100}
                            height={30}
                            className={styles.sinceMediaLogo}
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
}

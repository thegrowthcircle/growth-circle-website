import Link from 'next/link';
import Image from 'next/image';
import styles from './Benefits.module.css';

const benefitsData = [
    {
        id: 1,
        htmlTitle: <><span className={styles.highlightOrange}>24 Live Online</span><br /><span className={styles.highlightOrange}>Workshops / Year</span></>,
        image: "/images/24 Live Online .png",
        theme: "white",
        linkText: "Become our member"
    },
    {
        id: 2,
        htmlTitle: <><span className={styles.highlightWhite}>Quarterly Networking</span><br /><span className={styles.highlightWhite}>Meet-Ups</span></>,
        image: "/images/ Quarterly Networking.png",
        theme: "orange",
        linkText: "Connect and grow"
    },
    {
        id: 3,
        htmlTitle: <><span className={styles.highlightWhite}>Business Promotion in</span><br /><span className={styles.highlightWhite}>WhatsApp Community</span></>,
        image: "/images/Business Promotion in .png",
        theme: "dark",
        linkText: "Twice a week"
    },
    {
        id: 4,
        htmlTitle: <><span className={styles.highlightOrangeDark}>2 months Free Access</span><br /><span className={styles.highlightOrangeDark}>for The Profesor App</span></>,
        image: "/images/2 months Free Access .png",
        theme: "grey",
        linkText: "By Skillstride Academy"
    },
    {
        id: 5,
        htmlTitle: <><span className={styles.highlightWhite}>Access for</span><br /><span className={styles.highlightWhite}>You + Your Team</span></>,
        image: "/images/You + Your Team.png",
        theme: "orange",
        linkText: "1+3 membership"
    },
    {
        id: 6,
        htmlTitle: <><span className={styles.highlightWhite}>Network with Growth-</span><br /><span className={styles.highlightWhite}>Focused Members</span></>,
        image: "/images/Network with Growth-.png",
        theme: "dark",
        linkText: "Learn more"
    }
];

export default function Benefits() {
    return (
        <section id="benefits" className={styles.section}>
            <div className={styles.headingWrapper}>
                <div className={styles.headingBadge}>Membership Benefits</div>
                <p className={styles.headingDescription}>
                    Your membership gives you access to live learning, powerful networking, promotion opportunities, and tools built to support consistent business growth.
                </p>
            </div>

            <div className={styles.grid}>
                {benefitsData.map((item) => (
                    <div key={item.id} className={`${styles.card} ${styles[item.theme]}`}>
                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{item.htmlTitle}</h3>
                            <div className={styles.cardImageWrapper}>
                                <Image
                                    src={item.image}
                                    alt="Benefit Illustration"
                                    width={200}
                                    height={120}
                                    className={styles.cardImage}
                                />
                            </div>
                        </div>
                        <div className={styles.cardFooter}>
                            <div className={styles.arrowIcon}>
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <span className={styles.linkText}>{item.linkText}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* New Why We Exist Section */}
            <div className={styles.whyWeExist}>
                <div className={styles.whyContent}>
                    <h2 className={styles.whyHeading}>Why We Exist</h2>
                    <p className={styles.whyText}>
                        Growth isn't only about business it's about people, mindset & consistency.
                        <br />
                        A space where networking is meaningful, learning is continuous, and opportunities grow organically.
                    </p>
                    <Link href="/join" className={styles.joinButton}>
                        Join Now
                    </Link>
                </div>
                <div className={styles.whyImageWrapper}>
                    <Image
                        src="/images/card Illustration.png"
                        alt="Why We Exist Illustration"
                        width={400}
                        height={300}
                        className={styles.whyImage}
                    />
                </div>
            </div>
        </section>
    );
}

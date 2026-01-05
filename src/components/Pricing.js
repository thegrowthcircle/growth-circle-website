import Image from 'next/image';
import styles from './Pricing.module.css';

export default function Pricing() {
    return (
        <section id="pricing" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h3 className={styles.heading}>Pricing</h3>
                    <h2 className={styles.price}>₹7,000 / Year - Full Access</h2>
                    <p className={styles.description}>
                        Includes Workshops + Networking + Promotion + Meets + <br />
                        2 months Free Access to The Profesor App
                    </p>
                    <button className={styles.joinButton}>Join Now</button>
                </div>
                <div className={styles.imageWrapper}>
                    <Image
                        src="/images/pay.png"
                        alt="Pricing Illustration"
                        width={300}
                        height={300}
                        className={styles.image}
                    />
                </div>
            </div>
        </section>
    );
}

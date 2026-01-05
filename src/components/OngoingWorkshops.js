import Image from 'next/image';
import ScrollReveal from './ScrollReveal';
import styles from './OngoingWorkshops.module.css';

export default function OngoingWorkshops() {
    return (
        <section className={styles.section}>
            <ScrollReveal animation="fade-up">
                <div className={styles.headerContainer}>
                    <div className={styles.headingWrapper}>
                        <h2 className={styles.heading}>Ongoing WorkShops</h2>
                    </div>
                    <p className={styles.headerDescription}>
                        A community built for learners, builders, and growth-focused professionals.
                    </p>
                </div>
            </ScrollReveal>

            <div className={styles.grid}>
                {[1, 2].map((item) => (
                    <ScrollReveal key={item} animation="fade-up" delay={item * 0.1}>
                        <div className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src="/images/banner.png"
                                    alt="Generative AI Marketing Mastermind"
                                    width={500}
                                    height={300}
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.separator}></div>
                            <div className={styles.content}>
                                <h3 className={styles.cardTitle}>Generative AI Marketing Mastermind</h3>
                                <p className={styles.cardDescription}>Learn the Basics of Digital Marketing in One Day</p>
                                <button className={styles.registerButton}>Register Now</button>
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    );
}

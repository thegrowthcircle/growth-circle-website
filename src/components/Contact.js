"use client";
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.headerContainer}>
                <div className={styles.headingWrapper}>
                    <h2 className={styles.heading}>Contact Us</h2>
                </div>
                <p className={styles.headerDescription}>
                    Connect with Us: Let's Discuss Your Needs
                </p>
            </div>

            <div className={styles.container}>
                <div className={styles.formColumn}>
                    <form className={styles.form}>
                        <div className={styles.fieldGroup}>
                            <label className={styles.label}>Name</label>
                            <input
                                type="text"
                                placeholder="Name"
                                className={styles.input}
                            />
                        </div>

                        <div className={styles.fieldGroup}>
                            <label className={styles.label}>Email*</label>
                            <input
                                type="email"
                                placeholder="Email"
                                className={styles.input}
                                required
                            />
                        </div>

                        <div className={styles.fieldGroup}>
                            <label className={styles.label}>Message*</label>
                            <textarea
                                placeholder="Message"
                                className={styles.textarea}
                                rows={5}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className={styles.submitButton}>
                            Send Message
                        </button>
                    </form>
                </div>

                <div className={styles.illustrationWrapper}>
                    {/* Abstract Burst Illustration */}
                    <svg viewBox="0 0 300 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.burstSvg} preserveAspectRatio="xMidYMid slice">
                        {/* Centered Burst of Rays */}
                        <g transform="translate(150, 200)">
                            {[...Array(40)].map((_, i) => {
                                // Thin long rays
                                const angle = (i * 9 * Math.PI) / 180;
                                return (
                                    <line
                                        key={i}
                                        x1={50 * Math.cos(angle)} y1={50 * Math.sin(angle)}
                                        x2={280 * Math.cos(angle)} y2={280 * Math.sin(angle)}
                                        stroke="#191A23"
                                        strokeWidth="0.8"
                                    />
                                );
                            })}
                        </g>

                        {/* Large Black 4-Point Star */}
                        <path
                            d="M150 80 C170 160 200 160 280 180 C200 200 170 200 150 280 C130 200 100 200 20 180 C100 160 130 160 150 80"
                            fill="#191A23"
                            transform="translate(40, 20)"
                        />

                        {/* Orange 4-Point Star (Bottom Left) */}
                        <path
                            d="M90 260 C100 280 110 280 130 290 C110 300 100 300 90 320 C80 300 70 300 50 290 C70 280 80 280 90 260"
                            fill="#FF7900"
                            transform="translate(-20, 0)"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}

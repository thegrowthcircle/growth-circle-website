"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

export default function Hero() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const words = ["Learning", "Networking", "Business Growth"];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % words.length;
            const fullText = words[i];

            setText(isDeleting
                ? fullText.substring(0, text.length - 1)
                : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 30 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500); // Wait before deleting
                // setTypingSpeed(1500); // This logic was flawed in previous attempt, handled by timeout above mostly, but we need to pause the loop.
                // Actually, the improved logic below:
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(500);
            }
        };

        // To handle the pause properly, we need slightly more robust logic than just setting speed,
        // because the timeout inside the if block effectively pauses the "effect" loop but the effect hook itself might re-run if we aren't careful.
        // Let's use a simpler timeout structure within the effect.

        let timer;
        const i = loopNum % words.length;
        const fullText = words[i];

        if (isDeleting) {
            timer = setTimeout(() => {
                setText(fullText.substring(0, text.length - 1));
                setTypingSpeed(30);
            }, typingSpeed / 2); // Deleting is faster
        } else {
            timer = setTimeout(() => {
                setText(fullText.substring(0, text.length + 1));
                setTypingSpeed(150);
            }, typingSpeed);
        }

        if (!isDeleting && text === fullText) {
            clearTimeout(timer);
            timer = setTimeout(() => setIsDeleting(true), 2000); // Pause at end of word
        } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setTypingSpeed(500); // Pause before next word
        }

        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum]); // Correct dependencies

    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.mainTitle}>
                    THE GROWTH<br />CIRCLE
                </h1>
                <p className={styles.subTitle}>
                    Professional community<br />
                    for <strong style={{ color: 'var(--primary-orange)' }}>{text}</strong>
                    <span className={styles.cursor}></span>
                </p>
                <p className={styles.featuresList}>
                    24 Online Workshops • Weekly Business Promotion •<br />
                    Quarterly Meets • The Profesor App Access
                </p>
                <a href="https://wa.me/917075742095?text=Hi%2C%0A%0AI%20am%20interested%20to%20know%20more%20about%20The%20Growth%20Circle." className={styles.primaryBtn} target="_blank" rel="noopener noreferrer">
                    Book a consultation
                </a>
            </div>
            <div className={styles.imageWrapper}>
                <Image
                    src="/images/speaker.png"
                    alt="Marketing megaphone illustration"
                    width={500}
                    height={500}
                    className={styles.heroImage}
                    priority
                />
            </div>
        </section>
    );
}

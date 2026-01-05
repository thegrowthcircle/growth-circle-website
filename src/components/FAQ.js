"use client";
import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
    {
        question: "Do I need to be a business owner?",
        answer: "No, you don't need to be a business owner to join. We welcome freelancers, students, and anyone interested in growth."
    },
    {
        question: "Can I promote my business?",
        answer: "Yes! Promoting your business is one of the key benefits. You can showcase your work to the community."
    },
    {
        question: "Are workshops recorded?",
        answer: "Yes, most workshops are recorded and available for members to watch later in the archives."
    },
    {
        question: "Are quarterly meets offline?",
        answer: "Yes, our quarterly meets are held in-person to foster deeper connections and networking."
    },
    {
        question: "Is it Mandatory to attend Workshop?",
        answer: "No, attendance is voluntary. However, we highly recommend attending to get the most out of your membership."
    },
    {
        question: "Are quarterly meets Chargeable?",
        answer: "Quarterly meets may have a nominal fee to cover venue and food costs, depending on the event scale."
    },
    {
        question: "Can my team members join?",
        answer: "Membership is individual, but we have special plans for teams. Contact us for group access."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null); // Default all closed

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className={styles.section}>
            <div className={styles.headerContainer}>
                <div className={styles.headingWrapper}>
                    <h2 className={styles.heading}>FAQs</h2>
                </div>
                <p className={styles.headerDescription}>
                    Quick answers to common questions about membership, access, and benefits.
                </p>
            </div>

            <div className={styles.grid}>
                {faqs.map((item, index) => (
                    <div
                        key={index}
                        className={`${styles.item} ${openIndex === index ? styles.open : ''}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className={styles.questionRow}>
                            <span className={styles.icon}>
                                {openIndex === index ? '−' : '+'}
                            </span>
                            <h3 className={styles.question}>{item.question}</h3>
                        </div>

                        {openIndex === index && (
                            <div className={styles.answer}>
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

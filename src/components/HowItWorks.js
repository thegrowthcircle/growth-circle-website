"use client";
import { useState } from 'react';
import styles from './HowItWorks.module.css';

const steps = [
    {
        id: "01",
        title: "Make the payment",
        description: "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements."
    },
    {
        id: "02",
        title: "Share receipt on WhatsApp",
        description: "Once payment is completed, share the receipt with our team on WhatsApp to verify your membership and get started immediately."
    },
    {
        id: "03",
        title: "Get community access",
        description: "You'll receive an exclusive invite to join our platform where you can connect with other members and access resources."
    },
    {
        id: "04",
        title: "Attend workshops & network",
        description: "Start attending our scheduled workshops, participate in discussions, and build valuable connections that help you grow."
    },
];

export default function HowItWorks() {
    const [activeStep, setActiveStep] = useState("01"); // Default first step active

    const toggleStep = (id) => {
        if (activeStep === id) {
            setActiveStep(null); // Close if clicked again
        } else {
            setActiveStep(id);
        }
    };

    return (
        <section id="how-it-works" className={styles.section}>
            <div className={styles.headingWrapper}>
                <h2 className={styles.heading}>How It Works</h2>
                <p className={styles.subHeading}>
                    A simple step-by-step process to get started
                </p>
            </div>

            <div className={styles.steps}>
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className={`${styles.step} ${activeStep === step.id ? styles.stepActive : ''}`}
                        onClick={() => toggleStep(step.id)}
                    >
                        <div className={styles.stepHeader}>
                            <span className={styles.stepNumber}>{step.id}</span>
                            <span className={styles.stepTitle}>{step.title}</span>
                            <button className={styles.toggleButton}>
                                {activeStep === step.id ? '−' : '+'}
                            </button>
                        </div>

                        {activeStep === step.id && (
                            <div className={styles.stepContent}>
                                <div className={styles.separator}></div>
                                <p className={styles.stepDescription}>{step.description}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}

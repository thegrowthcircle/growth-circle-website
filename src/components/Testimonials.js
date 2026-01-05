"use client";
import { useState } from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        quote: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
        author: "John Smith",
        role: "Marketing Director at XYZ Corp"
    },
    {
        quote: "The Growth Circle has completely transformed how I approach my business. The networking opportunities are unmatched, and the workshops provide actionable insights that I use every day.",
        author: "Sarah Johnson",
        role: "Founder, TechStart"
    },
    {
        quote: "Joining this community was the best decision I made this year. The support from other members and the quality of the events are simply outstanding.",
        author: "Michael Cheney",
        role: "CEO, Cheney Enterprises"
    },
    {
        quote: "Incredible value for money. The quarterly meets alone are worth the membership fee. Highly recommended to anyone serious about growth.",
        author: "Emily Davis",
        role: "Freelance Designer"
    },
    {
        quote: "I've learned more in 3 months here than I did in 2 years of trying to figure it out on my own. The mentorship program is gold.",
        author: "David Wilson",
        role: "Startup Founder"
    },
    {
        quote: "A truly supportive environment. It's rare to find a community where everyone genuinely wants you to succeed. Glad to be a part of it.",
        author: "Jessica Lee",
        role: "Creative Director"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" className={styles.section}>
            <div className={styles.headerContainer}>
                <div className={styles.headingWrapper}>
                    <h2 className={styles.heading}>Testimonials</h2>
                </div>
                <p className={styles.headerDescription}>
                    Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Services
                </p>
            </div>

            <div className={styles.carouselContainer}>
                <div
                    className={styles.track}
                    style={{
                        transform: `translateX(calc(50% - (var(--item-width) / 2) - (${currentIndex} * (var(--item-width) + var(--gap)))))`
                    }}
                >
                    {testimonials.map((item, index) => (
                        <div key={index} className={`${styles.slide} ${currentIndex === index ? styles.activeSlide : ''}`}>
                            <div className={styles.card}>
                                <p className={styles.quote}>"{item.quote}"</p>
                            </div>
                            <div className={styles.authorInfo}>
                                <h4 className={styles.author}>{item.author}</h4>
                                <p className={styles.role}>{item.role}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.controls}>
                    <button onClick={prevSlide} className={styles.arrowButton} aria-label="Previous">
                        {/* Custom Arrow SVG or large font arrow */}
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: 'rotate(180deg)' }}>
                            <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor" />
                        </svg>
                    </button>

                    <div className={styles.indicators}>
                        {testimonials.map((_, index) => (
                            <span
                                key={index}
                                className={`${styles.indicator} ${currentIndex === index ? styles.activeIndicator : ''}`}
                                onClick={() => setCurrentIndex(index)}
                            >
                                {/* 5-Pointed Star SVG */}
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.62L2 9.24L7.45 13.97L5.82 21L12 17.27Z" />
                                </svg>
                            </span>
                        ))}
                    </div>

                    <button onClick={nextSlide} className={styles.arrowButton} aria-label="Next">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" fill="currentColor" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
}

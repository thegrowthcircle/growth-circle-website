import Image from 'next/image';
import styles from './WhoCanJoin.module.css';

const audiences = [
    {
        title: "Business Owners",
        icon: "/images/Business Owners.png",
        points: [
            "Promote business",
            "Learn via workshops (you & team)",
            "Build high-value connections",
            "Meet members quarterly"
        ]
    },
    {
        title: "Freelancers",
        icon: "/images/Freelancers.png",
        points: [
            "Showcase skills",
            "Network for clients",
            "Learn to pitch better",
            "Grow through workshops"
        ]
    },
    {
        title: "Students",
        icon: "/images/students.png",
        points: [
            "Network early",
            "Learn real skills",
            "Meet entrepreneurs",
            "Build confidence"
        ]
    },
    {
        title: "Colleges:",
        icon: "/images/startup.png", // Using startup as placeholder for College icon based on available assets
        points: [
            "24 workshops for students",
            "Industry exposure",
            "Networking access",
            "Career readiness support"
        ]
    }
];

export default function WhoCanJoin() {
    return (
        <section id="who-can-join" className={styles.section}>
            <div className={styles.headingWrapper}>
                <h2 className={styles.heading}>Who Can Join</h2>
                <p className={styles.subHeading}>
                    A community built for learners, builders, and growth-focused professionals.
                </p>
            </div>

            <div className={styles.grid}>
                {audiences.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.cardHeader}>
                            <div className={styles.iconWrapper}>
                                <Image
                                    src={item.icon}
                                    alt={item.title}
                                    width={80}
                                    height={80}
                                    className={styles.icon}
                                />
                            </div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                        </div>
                        <div className={styles.separator}></div>
                        <ul className={styles.pointsList}>
                            {item.points.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

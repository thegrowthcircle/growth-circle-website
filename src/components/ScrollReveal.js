"use client";
import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({
    children,
    threshold = 0.1,
    animation = "fade-up",
    delay = 0,
    duration = 0.6,
    className = ""
}) {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        }, { threshold });

        const currentRef = domRef.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [threshold]);

    const getTransform = () => {
        switch (animation) {
            case 'fade-up': return 'translateY(20px)';
            case 'fade-in': return 'none';
            case 'slide-left': return 'translateX(-20px)';
            case 'slide-right': return 'translateX(20px)';
            case 'scale-up': return 'scale(0.95)';
            default: return 'translateY(20px)';
        }
    };

    const style = {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getTransform(),
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
        willChange: 'opacity, transform'
    };

    return (
        <div ref={domRef} style={style} className={className}>
            {children}
        </div>
    );
}

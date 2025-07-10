import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
    threshold?: number;
    rootMargin?: string;
}

export const useIntersectionObserver = <T extends HTMLElement = HTMLElement>(
    options: UseIntersectionObserverOptions = {}
) => {
    const [isIntersecting, setIsIntersecting] = useState(false);
    const targetRef = useRef<T>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsIntersecting(true);
                    observer.disconnect();
                }
            },
            {
                threshold: options.threshold || 0.1,
                rootMargin: options.rootMargin || '0px'
            }
        );

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => observer.disconnect();
    }, [options.threshold, options.rootMargin]);

    return { isIntersecting, targetRef };
};
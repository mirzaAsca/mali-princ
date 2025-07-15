import { useState, useEffect, useRef } from "react";

interface UseCountUpProps {
  end: number;
  start?: number;
  duration?: number;
  startOnInView?: boolean;
  easingFunction?: (t: number) => number;
  formatter?: (value: number) => string;
}

interface UseCountUpReturn {
  value: string;
  isAnimating: boolean;
  startAnimation: () => void;
  resetAnimation: () => void;
}

// Easing functions
const easingFunctions = {
  easeOutCubic: (t: number): number => 1 - Math.pow(1 - t, 3),
  easeInOutCubic: (t: number): number =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2,
  easeOutExpo: (t: number): number => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  linear: (t: number): number => t,
};

export const useCountUp = ({
  end,
  start = 0,
  duration = 2000,
  startOnInView = true,
  easingFunction = easingFunctions.easeOutCubic,
  formatter = (value: number) => Math.floor(value).toString(),
}: UseCountUpProps): UseCountUpReturn => {
  const [currentValue, setCurrentValue] = useState(start);
  const [isAnimating, setIsAnimating] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const animationRef = useRef<number>();
  const observerRef = useRef<HTMLElement>();

  const startAnimation = () => {
    if (hasStarted) return;

    setHasStarted(true);
    setIsAnimating(true);

    const startTime = Date.now();
    const totalChange = end - start;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = easingFunction(progress);
      const newValue = start + totalChange * easedProgress;

      setCurrentValue(newValue);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCurrentValue(end);
        setIsAnimating(false);
      }
    };

    animationRef.current = requestAnimationFrame(animate);
  };

  const resetAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setCurrentValue(start);
    setIsAnimating(false);
    setHasStarted(false);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return {
    value: formatter(currentValue),
    isAnimating,
    startAnimation,
    resetAnimation,
  };
};

// Hook with Intersection Observer
export const useCountUpOnView = (
  props: UseCountUpProps,
  options: IntersectionObserverInit = { threshold: 0.3 }
): UseCountUpReturn & { ref: (node: HTMLElement | null) => void } => {
  const countUp = useCountUp({ ...props, startOnInView: false });
  const [node, setNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        countUp.startAnimation();
        observer.disconnect();
      }
    }, options);

    observer.observe(node);

    return () => observer.disconnect();
  }, [node, countUp.startAnimation, options]);

  return {
    ...countUp,
    ref: setNode,
  };
};

// Pre-configured hooks for common use cases
export const useCountUpWithPlus = (end: number, duration?: number) => {
  return useCountUpOnView({
    end,
    duration,
    formatter: (value) => `${Math.floor(value)}+`,
  });
};

export const useCountUpWithPercent = (end: number, duration?: number) => {
  return useCountUpOnView({
    end,
    duration,
    formatter: (value) => `${Math.floor(value)}%`,
  });
};

export const useCountUpWithKFormat = (end: number, duration?: number) => {
  return useCountUpOnView({
    end,
    duration,
    formatter: (value) => {
      const num = Math.floor(value);
      if (num >= 1000) {
        return `${(num / 1000).toFixed(1)}k+`;
      }
      return `${num}+`;
    },
  });
};

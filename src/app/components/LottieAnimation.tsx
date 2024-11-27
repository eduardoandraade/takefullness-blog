"use client";

import { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

interface LottieAnimationProps {
  path: string; // Recebe o caminho da animação como prop
}


export default function LottieAnimation({ path }: LottieAnimationProps) {
  const animationContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (animationContainer.current) {
      lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: path,
      });
    }

    return () => {
      lottie.destroy();
    };
  }, [path]); // Reexecuta se o caminho mudar

  return <div ref={animationContainer} className="w-full h-full"></div>;
}

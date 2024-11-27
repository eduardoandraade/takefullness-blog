"use client";

import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const animationContainer = useRef<HTMLDivElement | null>(null);
  const [text, setText] = useState("prepare");

  useEffect(() => {
    let animationInstance: any;

    const timers = [
      setTimeout(() => setText("inspire"), 2000), // Muda para "inspire" após 2 segundos
      setTimeout(() => {
        if (animationContainer.current) {
          animationInstance = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: "svg",
            loop: false,
            autoplay: true,
            path: "/breath.json", // Caminho para o JSON
          });

          animationInstance.setSpeed(2); // Velocidade da animação
        }
      }, 2000), // Inicia a animação após 2 segundos
      setTimeout(() => setText("expire"), 7000), // Muda para "expire" após mais 5 segundos
      setTimeout(() => {
        onFinish(); // Notifica o componente pai
      }, 13000),
    ];

    return () => {
      timers.forEach(clearTimeout); // Limpa os timers
      if (animationInstance) animationInstance.destroy(); // Limpa a animação
    };
  }, [onFinish]);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-blue-800 z-50">
      <div className="w-96 h-96 relative">
        {/* Contêiner do Lottie */}
        <div ref={animationContainer} className="absolute top-0 left-0 w-full h-full"></div>

        {/* Texto sobreposto */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start z-10">
          <h1 className="text-2xl font-light text-white animate-fade-in" key={text}>
            {text}
          </h1>
        </div>
      </div>
    </div>
  );
}

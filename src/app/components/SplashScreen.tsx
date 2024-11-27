"use client";

import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

export default function SplashScreen() {
  const animationContainer = useRef<HTMLDivElement | null>(null);
  const [text, setText] = useState("inspire"); // Texto inicial

  useEffect(() => {
    let animationInstance: any;

    if (animationContainer.current) {
      // Carrega a animação Lottie
      animationInstance = lottie.loadAnimation({
        container: animationContainer.current, // Contêiner da animação
        renderer: "svg",
        loop: false, // Loop 
        autoplay: true, // Reprodução automática
        path: "/breath.json", // Caminho para o JSON
      });

      // Define a velocidade da animação
      animationInstance.setSpeed(2); // Ajuste para acelerar a animação

      // Alterna os textos durante a animação
      const intervals = [
        setTimeout(() => setText("expire"), 5000), // Troca para "Expire..." após 5 segundos
        setTimeout(() => setText("inspire"), 80000), // Troca para "Inspire..." após mais 8 segundos
      ];

      return () => {
        intervals.forEach(clearTimeout); // Limpa os timers
        animationInstance.destroy(); // Limpa a animação ao desmontar
      };
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-blue-800 z-50">
      <div className="w-96 h-96 relative">
        {/* Contêiner do Lottie */}
        <div ref={animationContainer} className="absolute top-0 left-0 w-full h-full"></div>

        {/* Texto sobreposto à animação */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-start z-10">
          <h1
            className="text-2xl font-light text-white opacity-0 animate-fade-in"
            key={text} // Key para reiniciar a animação a cada troca de texto
          >
            {text}
          </h1>
        </div>
      </div>
    </div>
  );
}

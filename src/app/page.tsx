"use client";

import { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import SplashScreen from "./components/SplashScreen";

const TWO_HOURS = 2 * 60 * 60 * 1000; // 7.200.000 milissegundos

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean | null>(null); // Inicializa como null

  const handleSplashFinish = () => {
    setIsLoading(false); // Finaliza o Splash e permite o carregamento do conteúdo
    // Atualiza o timestamp da última vez que o Splash foi visto
    localStorage.setItem("lastSeenSplash", Date.now().toString());
  };

  useEffect(() => {
    const lastSeen = localStorage.getItem("lastSeenSplash");
    const now = Date.now();

    if (lastSeen) {
      const elapsed = now - parseInt(lastSeen, 10); // Tempo decorrido em milissegundos
      if (elapsed > TWO_HOURS) {
        // Se passaram mais de 2 horas, mostra o Splash
        setIsLoading(true);
      } else {
        // Não mostra o Splash
        setIsLoading(false);
      }
    } else {
      // Se não há registro, mostra o Splash
      setIsLoading(true);
    }
  }, []); // Array de dependências vazio

  if (isLoading === null) {
    // Não renderiza nada até verificar o localStorage
    return null;
  }

  return (
    <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
      {isLoading ? (
        <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <div className="main-content">
          <HeroSection />
          <h1 className="text-center text-3xl font-bold">Bem-vindo!</h1>
          <p className="text-center">Explore nosso conteúdo incrível.</p>
        </div>
      )}
    </section>
  );
}

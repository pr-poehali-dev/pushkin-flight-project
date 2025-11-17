import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Index = () => {
  const [particles, setParticles] = useState<Array<{ id: number; left: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card overflow-hidden relative">
      <div className="absolute inset-0 opacity-30">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bottom-0 w-2 h-2 bg-accent rounded-full animate-flame"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent rounded-full blur-3xl opacity-20 animate-glow" />
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-15 animate-glow" style={{ animationDelay: '1s' }} />

      <nav className="relative z-20 flex items-center justify-between px-8 py-6 animate-fade-in">
        <h1 className="text-3xl font-bold text-primary">Пушкин Мистический</h1>
        <div className="flex gap-6">
          <Button variant="ghost" className="text-foreground hover:text-primary transition-colors">
            Главная
          </Button>
          <Button variant="ghost" className="text-foreground hover:text-primary transition-colors">
            Анимация
          </Button>
        </div>
      </nav>

      <main className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-100px)] px-4">
        <div className="text-center mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <h2 className="text-6xl md:text-8xl font-bold text-foreground mb-4 drop-shadow-2xl">
            Александр Сергеевич
          </h2>
          <p className="text-2xl md:text-3xl text-muted-foreground italic">
            Восходящий в огне и свете
          </p>
        </div>

        <div className="relative animate-levitate" style={{ animationDelay: '0.5s' }}>
          <div className="absolute inset-0 bg-primary rounded-full blur-2xl opacity-30 animate-glow" />
          
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <img
              src="https://cdn.poehali.dev/projects/a370b0f1-9929-4f42-a01d-53c5141770f2/files/c9a90f81-9cbc-4dd9-9f66-7697c72a0c9c.jpg"
              alt="Александр Пушкин"
              className="w-full h-full object-cover rounded-2xl shadow-2xl"
            />
            
            <div className="absolute -top-8 -left-8 text-primary animate-rotate-slow">
              <Icon name="Cross" size={64} className="drop-shadow-xl" />
            </div>
            <div className="absolute -top-8 -right-8 text-primary animate-rotate-slow" style={{ animationDelay: '10s' }}>
              <Icon name="Cross" size={64} className="drop-shadow-xl" />
            </div>
            
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-accent via-orange-600 to-transparent blur-xl opacity-60" />
          </div>
        </div>

        <div className="mt-16 flex gap-6 animate-fade-in" style={{ animationDelay: '1s' }}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 shadow-lg hover:shadow-primary/50 transition-all">
            Узнать больше
            <Icon name="Sparkles" size={20} className="ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary/10 font-semibold px-8 shadow-lg">
            Посмотреть анимацию
            <Icon name="Play" size={20} className="ml-2" />
          </Button>
        </div>
      </main>

      <footer className="relative z-20 text-center py-8 text-muted-foreground animate-fade-in" style={{ animationDelay: '1.2s' }}>
        <p className="text-sm italic">
          "Мы все учились понемногу чему-нибудь и как-нибудь" — А.С. Пушкин
        </p>
      </footer>
    </div>
  );
};

export default Index;

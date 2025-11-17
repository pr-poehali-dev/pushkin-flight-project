import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const Animation = () => {
  const navigate = useNavigate();
  const [intensity, setIntensity] = useState(1);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const xPercent = (clientX / innerWidth - 0.5) * 20;
    const yPercent = (clientY / innerHeight - 0.5) * 20;
    
    const element = document.getElementById('pushkin-figure');
    if (element) {
      element.style.transform = `translate(-50%, -50%) translateX(${xPercent}px) translateY(${yPercent}px) scale(${isHovering ? 1.1 : 1})`;
    }
  };

  const increaseIntensity = () => {
    setIntensity(prev => Math.min(prev + 0.5, 3));
  };

  return (
    <div 
      className="min-h-screen bg-black relative overflow-hidden cursor-none"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 bg-gradient-radial from-accent/20 via-transparent to-black" />
      
      <div className="absolute inset-0">
        {Array.from({ length: 50 * intensity }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-accent rounded-full animate-flame"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: '0',
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1.5 + Math.random()}s`,
            }}
          />
        ))}
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-6 left-6 z-50 text-primary hover:text-primary/80 hover:bg-primary/10"
        onClick={() => navigate('/')}
      >
        <Icon name="ArrowLeft" size={28} />
      </Button>

      <div className="absolute top-6 right-6 z-50 flex gap-3">
        <Button
          onClick={increaseIntensity}
          className="bg-accent/80 hover:bg-accent text-white backdrop-blur-sm"
          disabled={intensity >= 3}
        >
          <Icon name="Flame" size={20} className="mr-2" />
          Усилить огонь
        </Button>
        <div className="bg-card/50 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary/30">
          <span className="text-foreground font-semibold">Интенсивность: {intensity.toFixed(1)}x</span>
        </div>
      </div>

      <div 
        id="pushkin-figure"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="absolute inset-0 bg-primary rounded-full blur-3xl opacity-40 animate-glow" 
             style={{ transform: `scale(${intensity})` }} />
        <div className="absolute inset-0 bg-secondary rounded-full blur-2xl opacity-30 animate-glow" 
             style={{ animationDelay: '1.5s', transform: `scale(${intensity * 0.8})` }} />
        
        <div className="relative w-[500px] h-[500px] animate-levitate">
          <img
            src="https://cdn.poehali.dev/projects/a370b0f1-9929-4f42-a01d-53c5141770f2/files/c9a90f81-9cbc-4dd9-9f66-7697c72a0c9c.jpg"
            alt="Александр Пушкин"
            className="w-full h-full object-cover rounded-3xl shadow-2xl shadow-primary/50 transition-all duration-300"
            style={{ 
              filter: isHovering ? 'brightness(1.2) contrast(1.1)' : 'brightness(1)',
            }}
          />
          
          <div 
            className="absolute -top-12 -left-12 text-primary transition-all duration-300"
            style={{ 
              transform: isHovering ? 'scale(1.3) rotate(180deg)' : 'scale(1) rotate(0deg)',
            }}
          >
            <Icon name="Cross" size={80} className="drop-shadow-2xl" />
            <div className="absolute inset-0 bg-primary blur-xl opacity-50" />
          </div>
          
          <div 
            className="absolute -top-12 -right-12 text-primary transition-all duration-300"
            style={{ 
              transform: isHovering ? 'scale(1.3) rotate(-180deg)' : 'scale(1) rotate(0deg)',
            }}
          >
            <Icon name="Cross" size={80} className="drop-shadow-2xl" />
            <div className="absolute inset-0 bg-primary blur-xl opacity-50" />
          </div>

          <div 
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full h-48 bg-gradient-to-t from-accent via-orange-600 to-transparent blur-2xl transition-all duration-300"
            style={{ 
              opacity: isHovering ? 0.9 : 0.6,
              transform: `translateX(-50%) scale(${intensity})`,
            }}
          />
        </div>

        {isHovering && (
          <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 whitespace-nowrap animate-fade-in">
            <p className="text-2xl text-primary font-bold tracking-wider">
              Гений русской поэзии
            </p>
          </div>
        )}
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-center z-40 animate-fade-in" style={{ animationDelay: '1s' }}>
        <p className="text-foreground/80 text-lg italic mb-4 drop-shadow-lg">
          Наведите курсор на портрет
        </p>
        <div className="flex gap-2 justify-center">
          {[1, 2, 3].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
      </div>

      <div 
        className="fixed w-8 h-8 pointer-events-none z-50 transition-all duration-100"
        style={{
          left: '50%',
          top: '50%',
        }}
      >
        <div className="w-full h-full rounded-full border-2 border-primary animate-pulse" />
      </div>
    </div>
  );
};

export default Animation;

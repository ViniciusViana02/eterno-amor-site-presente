
import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number; size: number }>>([]);

  useEffect(() => {
    const heartElements = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 0.5 + 0.5,
    }));
    setHearts(heartElements);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-float opacity-20"
          style={{
            left: `${heart.left}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${heart.delay}s`,
            transform: `scale(${heart.size})`,
          }}
        >
          <Heart 
            className="text-romantic-red fill-romantic-red" 
            size={24}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;

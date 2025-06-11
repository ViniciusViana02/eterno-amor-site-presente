
import { Button } from '@/components/ui/button';
import { Heart, ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="text-center max-w-4xl mx-auto animate-fadeInUp">
        <div className="mb-8">
          <Heart className="mx-auto text-romantic-red fill-romantic-red animate-heartbeat" size={48} />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-vibes romantic-gradient mb-6">
          Para o Amor da Minha Vida
        </h1>
        
        <div className="mb-8 space-y-4">
          <p className="text-xl md:text-2xl font-script text-romantic-red font-semibold">
            Feliz Dia dos Namorados, meu amor
          </p>
          <p className="text-lg md:text-xl font-poppins text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Desde que você entrou na minha vida, tudo ganhou mais cor, mais sentido, mais luz.
            Encontrei em você o verdadeiro significado da felicidade.
          </p>
        </div>

        <div className="mb-12">
          <div className="glass-effect rounded-2xl p-6 inline-block">
            <p className="text-2xl md:text-3xl font-script text-romantic-red">
              30 de agosto de 2024
            </p>
            <p className="text-sm md:text-base font-poppins text-foreground/70 mt-2">
              O dia que mudou nossas vidas para sempre
            </p>
          </div>
        </div>

        <Button 
          onClick={scrollToGallery}
          className="bg-romantic-red hover:bg-romantic-red/90 text-white font-poppins font-medium px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
        >
          Ver Nossos Momentos
          <ArrowDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;

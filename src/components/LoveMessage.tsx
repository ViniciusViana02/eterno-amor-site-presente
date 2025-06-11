
import { Heart } from 'lucide-react';

const LoveMessage = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-romantic-pink/30 to-romantic-rose/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-vibes romantic-gradient mb-6">
            Uma Carta de Amor
          </h2>
          <Heart className="mx-auto text-romantic-red fill-romantic-red animate-heartbeat" size={32} />
        </div>

        <div className="glass-effect rounded-3xl p-8 md:p-12 space-y-6">
          <div className="space-y-6 text-foreground/90 font-poppins leading-relaxed">
            <p className="text-lg md:text-xl">
              <span className="font-script text-2xl text-romantic-red">Para o amor da minha vida,</span>
            </p>

            <p className="text-base md:text-lg">
              Feliz Dia dos Namorados, meu amor.
              Desde que você entrou na minha vida, tudo ganhou mais cor, mais sentido, mais luz.
              Encontrei em você o verdadeiro significado da felicidade.
            </p>

            <p className="text-base md:text-lg">
              <strong className="text-romantic-red">Nosso namoro começou no dia 30 de agosto de 2024</strong>, e desde então, tudo mudou dentro de mim.
              Desde esse dia, minha vida tem sido mais leve, mais bonita e cheia de propósito.
              E se depender de mim, o nosso "término" só virá quando a morte nos separe — e mesmo assim, eu ainda vou te amar em outra vida.
            </p>

            <p className="text-base md:text-lg">
              Sou infinitamente grato por cada bênção que você trouxe para o meu caminho. Oro todos os dias para que Deus continue guiando nossos passos e que o nosso amor só amadureça, floresça e se fortaleça com o tempo.
            </p>

            <p className="text-base md:text-lg">
              Cada novo dia ao seu lado me faz te amar ainda mais.
              Seu sorriso acalma o meu coração nos momentos difíceis, sua voz me encanta, e seu olhar... ah, seu olhar me tira o chão.
            </p>

            <p className="text-base md:text-lg font-script text-xl text-romantic-red text-center my-8">
              "Você é a minha luz — de manhãs suaves e noites tranquilas.
              Se eu pudesse, começaria e terminaria todos os dias nos seus braços."
            </p>

            <p className="text-base md:text-lg">
              Desde que te conheci, minha vida se transformou completamente.
              Parece até que comecei a viver de verdade, aprendendo tanto ao seu lado, crescendo como pessoa e descobrindo novas formas de amar.
            </p>

            <p className="text-base md:text-lg">
              Obrigado por me aceitar do jeitinho que sou, por ser essa mulher extraordinária e por me mostrar o que é o amor verdadeiro.
            </p>

            <p className="text-base md:text-lg">
              <strong className="text-romantic-red">Minha maior razão para sorrir todos os dias é você.</strong>
              Te amo mais do que palavras podem dizer.
            </p>

            <div className="text-center mt-12 pt-8 border-t border-romantic-rose/30">
              <p className="text-xl md:text-2xl font-script text-romantic-red mb-2">
                Feliz Dia dos Namorados, vida.
              </p>
              <p className="text-lg font-poppins">
                Que essa data se repita por mil vidas ao seu lado. 💖
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveMessage;

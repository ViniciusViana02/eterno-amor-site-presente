
import { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import Gallery from '../components/Gallery';
import LoveMessage from '../components/LoveMessage';
import FloatingHearts from '../components/FloatingHearts';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Romantic background music (using a royalty-free romantic piano piece URL)
    const audioElement = new Audio('https://www.soundjay.com/misc/sounds/romantic-piano.mp3');
    audioElement.loop = true;
    audioElement.volume = 0.3;
    setAudio(audioElement);

    return () => {
      if (audioElement) {
        audioElement.pause();
      }
    };
  }, []);

  const toggleMusic = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch(e => console.log('Audio play failed:', e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingHearts />
      
      {/* Music Control */}
      <div className="fixed top-6 right-6 z-50">
        <Button
          onClick={toggleMusic}
          variant="outline"
          size="icon"
          className="glass-effect hover:bg-romantic-pink/20 border-romantic-rose/30"
        >
          {isPlaying ? (
            <Volume2 className="h-4 w-4 text-romantic-red" />
          ) : (
            <VolumeX className="h-4 w-4 text-romantic-red" />
          )}
        </Button>
      </div>

      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Gallery />
        <LoveMessage />
      </main>
    </div>
  );
};

export default Index;

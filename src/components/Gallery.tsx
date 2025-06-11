
import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: '/lovable-uploads/702fbc32-9a44-45b5-adfd-e9f7d1f116d9.png',
      alt: 'Momento especial no restaurante',
      description: 'Uma noite inesquecível juntos'
    },
    {
      src: '/lovable-uploads/5fdcc588-1f8d-4227-82df-76c2532cbb33.png',
      alt: 'Beijo romântico na porta',
      description: 'Nosso amor em cada gesto'
    },
    {
      src: '/lovable-uploads/9bd80276-f715-49fb-b945-11fec11fabeb.png',
      alt: 'Noite no Miracolo',
      description: 'Criando memórias preciosas'
    },
    {
      src: '/lovable-uploads/ebfe70c4-0155-45cf-b680-ca035b268d75.png',
      alt: 'Selfie na academia',
      description: 'Compartilhando cada momento'
    },
    {
      src: '/lovable-uploads/261c4a01-d27f-4d93-a9b2-d751285bfecf.png',
      alt: 'Momento descontraído no balanço',
      description: 'Sua alegria ilumina meus dias'
    },
    {
      src: '/lovable-uploads/91194d13-80f1-46aa-9104-04b6c3a21503.png',
      alt: 'Elegantes juntos',
      description: 'Perfeitos um para o outro'
    },
    {
      src: '/lovable-uploads/6a086073-8151-4085-b6cf-d9dbaa1ee106.png',
      alt: 'Sorriso radiante',
      description: 'Felicidade em cada encontro'
    },
    {
      src: '/lovable-uploads/eff96d99-18bc-426c-9626-3b7200d3deb2.png',
      alt: 'Selfie amorosa',
      description: 'Amor em cada olhar'
    },
    {
      src: '/lovable-uploads/9dc94c3c-b513-445c-bea3-9d3255d5e6d2.png',
      alt: 'No Gutonoli',
      description: 'Jantares românticos especiais'
    },
    {
      src: '/lovable-uploads/669919b6-5b45-4006-abfe-5439fbf86e61.png',
      alt: 'Momento de paz',
      description: 'Serenidade ao seu lado'
    }
  ];

  const openImage = (index: number) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-vibes romantic-gradient mb-4">
            Nossos Momentos Especiais
          </h2>
          <p className="text-lg font-poppins text-foreground/70 max-w-2xl mx-auto">
            Cada foto conta uma história do nosso amor, cada momento capturado é uma lembrança eterna
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => openImage(index)}
            >
              <div className="glass-effect rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-poppins text-foreground/70 text-center">
                    {image.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={selectedImage !== null} onOpenChange={closeImage}>
        <DialogContent className="max-w-4xl bg-black/90 border-0 p-0">
          {selectedImage !== null && (
            <div className="relative">
              <button
                onClick={closeImage}
                className="absolute top-4 right-4 z-50 text-white hover:text-romantic-rose transition-colors"
              >
                <X size={24} />
              </button>

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:text-romantic-rose transition-colors"
              >
                <ChevronLeft size={32} />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:text-romantic-rose transition-colors"
              >
                <ChevronRight size={32} />
              </button>

              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-auto max-h-[90vh] object-contain"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="text-white text-center font-poppins">
                  {images[selectedImage].description}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;

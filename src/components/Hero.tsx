import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-secondary/60 to-action/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Conecte Corações,
            <br />
            <span className="bg-gradient-to-r from-accent to-action bg-clip-text text-transparent">
              Transforme Vidas
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
            A plataforma que une doadores a ONGs verificadas, 
            criando um mundo mais solidário e transparente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="action" size="lg" className="text-lg px-8 py-4 animate-scale-in">
              Começar a Doar
              <ArrowRight className="h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20 animate-scale-in">
              <Play className="h-5 w-5" />
              Ver Como Funciona
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl md:text-4xl font-bold text-accent">500+</div>
              <div className="text-white/80">ONGs Verificadas</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl md:text-4xl font-bold text-accent">R$ 2.5M</div>
              <div className="text-white/80">Doações Realizadas</div>
            </div>
            <div className="animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl md:text-4xl font-bold text-accent">100K+</div>
              <div className="text-white/80">Vidas Impactadas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-10 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-20 right-20 w-16 h-16 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-32 right-32 w-12 h-12 bg-action/20 rounded-full animate-float" style={{ animationDelay: '2s' }} />
    </section>
  );
};

export default Hero;
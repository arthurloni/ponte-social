import { Button } from "@/components/ui/button";
import { Heart, Menu, Search, User } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-primary fill-current" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              DoaApp
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#ongs" className="text-foreground hover:text-primary transition-smooth">
              ONGs
            </a>
            <a href="#eventos" className="text-foreground hover:text-primary transition-smooth">
              Eventos
            </a>
            <a href="#transparencia" className="text-foreground hover:text-primary transition-smooth">
              Transparência
            </a>
            <a href="#sobre" className="text-foreground hover:text-primary transition-smooth">
              Sobre
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            
            <Button variant="outline" className="hidden md:flex">
              <User className="h-4 w-4" />
              Entrar
            </Button>
            
            <Button variant="action" className="hidden md:flex">
              Doar Agora
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-3">
              <a href="#ongs" className="text-foreground hover:text-primary transition-smooth py-2">
                ONGs
              </a>
              <a href="#eventos" className="text-foreground hover:text-primary transition-smooth py-2">
                Eventos
              </a>
              <a href="#transparencia" className="text-foreground hover:text-primary transition-smooth py-2">
                Transparência
              </a>
              <a href="#sobre" className="text-foreground hover:text-primary transition-smooth py-2">
                Sobre
              </a>
              <div className="flex flex-col gap-2 mt-3">
                <Button variant="outline" className="w-full">
                  <User className="h-4 w-4" />
                  Entrar
                </Button>
                <Button variant="action" className="w-full">
                  Doar Agora
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
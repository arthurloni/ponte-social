import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background pt-20 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-8 w-8 fill-current" />
              <span className="text-2xl font-bold">DoaApp</span>
            </div>
            <p className="text-background/80 text-sm mb-4">
              Conectando corações generosos a ONGs que transformam vidas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Produto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#ongs" className="text-background/80 hover:text-background transition-colors">
                  ONGs Verificadas
                </a>
              </li>
              <li>
                <a href="/events" className="text-background/80 hover:text-background transition-colors">
                  Eventos
                </a>
              </li>
              <li>
                <a href="/transparency" className="text-background/80 hover:text-background transition-colors">
                  Transparência
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Como Funciona
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/about" className="text-background/80 hover:text-background transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Carreira
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Imprensa
                </a>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h3 className="font-semibold mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Central de Ajuda
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Status
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Privacidade
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Conformidade
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-t border-background/20 mb-8">
          <div className="flex items-start gap-3">
            <Mail className="h-5 w-5 text-action flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-semibold">Email</p>
              <a href="mailto:contato@doaapp.com" className="text-background/80 hover:text-background transition-colors">
                contato@doaapp.com
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <Phone className="h-5 w-5 text-action flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-semibold">Telefone</p>
              <a href="tel:+551133334444" className="text-background/80 hover:text-background transition-colors">
                +55 (11) 3333-4444
              </a>
            </div>
          </div>
          
          <div className="flex items-start gap-3">
            <MapPin className="h-5 w-5 text-action flex-shrink-0 mt-1" />
            <div>
              <p className="text-sm font-semibold">Endereço</p>
              <p className="text-background/80">
                São Paulo, SP<br />
                Brasil
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © {currentYear} DoaApp. Todos os direitos reservados.
          </p>
          
          <div className="flex items-center gap-2 text-sm text-background/60">
            <span>Feito com</span>
            <Heart className="h-4 w-4 fill-current text-action" />
            <span>para transformar vidas</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


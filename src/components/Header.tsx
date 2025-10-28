import { Button } from "@/components/ui/button";
import { Heart, Menu, Search, User, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

interface UserInfo {
  email: string;
  name: string;
  loggedIn: boolean;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<UserInfo | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = () => {
    navigate("/login");
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsMenuOpen(false);
    navigate("/");
  };

  const handleDonate = () => {
    navigate("/donate/1");
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <Heart className="h-8 w-8 text-primary fill-current" />
            <span className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              DoaApp
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="/#ongs" className="text-foreground hover:text-primary transition-smooth">
              ONGs
            </a>
            <Link to="/events" className="text-foreground hover:text-primary transition-smooth">
              Eventos
            </Link>
            <Link to="/transparency" className="text-foreground hover:text-primary transition-smooth">
              Transparência
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-smooth">
              Sobre
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5" />
            </Button>
            
            {user ? (
              <>
                <Button variant="outline" className="hidden md:flex" disabled>
                  <User className="h-4 w-4 mr-2" />
                  {user.name}
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="hidden md:flex"
                  onClick={handleLogout}
                  title="Sair"
                >
                  <LogOut className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <Button 
                variant="outline" 
                className="hidden md:flex"
                onClick={handleLogin}
              >
                <User className="h-4 w-4 mr-2" />
                Entrar
              </Button>
            )}
            
            <Button 
              variant="action" 
              className="hidden md:flex"
              onClick={handleDonate}
            >
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
              <a href="/#ongs" className="text-foreground hover:text-primary transition-smooth py-2">
                ONGs
              </a>
              <Link to="/events" className="text-foreground hover:text-primary transition-smooth py-2">
                Eventos
              </Link>
              <Link to="/transparency" className="text-foreground hover:text-primary transition-smooth py-2">
                Transparência
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-smooth py-2">
                Sobre
              </Link>
              <div className="flex flex-col gap-2 mt-3">
                {user ? (
                  <>
                    <Button variant="outline" className="w-full" disabled>
                      <User className="h-4 w-4 mr-2" />
                      {user.name}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sair
                    </Button>
                  </>
                ) : (
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={handleLogin}
                  >
                    <User className="h-4 w-4 mr-2" />
                    Entrar
                  </Button>
                )}
                <Button 
                  variant="action" 
                  className="w-full"
                  onClick={handleDonate}
                >
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


import NGOCard from "./NGOCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

// Mock data for demonstration
const mockNGOs = [
  {
    name: "Instituto Crianças do Futuro",
    description: "Educação e desenvolvimento infantil para comunidades carentes, oferecendo ensino de qualidade e atividades extracurriculares.",
    category: "Educação",
    location: "São Paulo, SP",
    verified: true,
    supporters: 1245,
    image: "/api/placeholder/400/300",
    goal: 50000,
    raised: 32000,
    urgency: 'medium' as const
  },
  {
    name: "Ação Contra a Fome",
    description: "Combate à insegurança alimentar distribuindo cestas básicas e refeições para famílias em situação de vulnerabilidade.",
    category: "Alimentação",
    location: "Rio de Janeiro, RJ",
    verified: true,
    supporters: 892,
    image: "/api/placeholder/400/300",
    goal: 75000,
    raised: 68000,
    urgency: 'high' as const
  },
  {
    name: "Verde Esperança",
    description: "Reflorestamento e preservação ambiental em áreas degradadas, promovendo a sustentabilidade e educação ecológica.",
    category: "Meio Ambiente",
    location: "Minas Gerais, MG",
    verified: true,
    supporters: 567,
    image: "/api/placeholder/400/300",
    goal: 30000,
    raised: 15000,
    urgency: 'low' as const
  },
  {
    name: "Casa do Idoso Feliz",
    description: "Cuidados e atividades para idosos em situação de abandono, proporcionando qualidade de vida e dignidade.",
    category: "Assistência Social",
    location: "Brasília, DF",
    verified: true,
    supporters: 423,
    image: "/api/placeholder/400/300",
    goal: 40000,
    raised: 28000,
    urgency: 'medium' as const
  },
  {
    name: "Patas Solidárias",
    description: "Resgate, tratamento e adoção responsável de animais abandonados, promovendo o bem-estar animal.",
    category: "Animais",
    location: "Curitiba, PR",
    verified: true,
    supporters: 756,
    image: "/api/placeholder/400/300",
    goal: 25000,
    raised: 22000,
    urgency: 'low' as const
  },
  {
    name: "Saúde Para Todos",
    description: "Atendimento médico gratuito e campanhas de prevenção em comunidades sem acesso adequado à saúde.",
    category: "Saúde",
    location: "Salvador, BA",
    verified: true,
    supporters: 934,
    image: "/api/placeholder/400/300",
    goal: 60000,
    raised: 45000,
    urgency: 'high' as const
  }
];

const NGOGrid = () => {
  return (
    <section id="ongs" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            ONGs <span className="bg-gradient-primary bg-clip-text text-transparent">Verificadas</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Todas as organizações passam por rigoroso processo de verificação para garantir 
            que sua doação chegue onde realmente precisa.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input 
              placeholder="Buscar ONGs, causas ou localização..." 
              className="pl-10 py-3"
            />
          </div>
          
          <Select>
            <SelectTrigger className="md:w-48">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as Categorias</SelectItem>
              <SelectItem value="education">Educação</SelectItem>
              <SelectItem value="health">Saúde</SelectItem>
              <SelectItem value="environment">Meio Ambiente</SelectItem>
              <SelectItem value="social">Assistência Social</SelectItem>
              <SelectItem value="animals">Animais</SelectItem>
              <SelectItem value="food">Alimentação</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="md:w-48">
              <SelectValue placeholder="Localização" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todo o Brasil</SelectItem>
              <SelectItem value="sp">São Paulo</SelectItem>
              <SelectItem value="rj">Rio de Janeiro</SelectItem>
              <SelectItem value="mg">Minas Gerais</SelectItem>
              <SelectItem value="rs">Rio Grande do Sul</SelectItem>
              <SelectItem value="pr">Paraná</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="md:w-auto">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mockNGOs.map((ngo, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <NGOCard {...ngo} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Carregar Mais ONGs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NGOGrid;
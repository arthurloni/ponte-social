import NGOCard from "./NGOCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { useState, useMemo } from "react";
import { getBase64Image } from "@/utils/image-data-final";

// Mock data for demonstration
const mockNGOs = [
  {
    name: "Instituto Crianças do Futuro",
    description: "Educação e desenvolvimento infantil para comunidades carentes, oferecendo ensino de qualidade e atividades extracurriculares.",
    category: "Educação",
    location: "São Paulo, SP",
    verified: true,
    supporters: 1245,
    image: getBase64Image("Educação"),
    goal: 50000,
    raised: 32000,
    urgency: 'medium' as const,
    id: 1
  },
  {
    name: "Ação Contra a Fome",
    description: "Combate à insegurança alimentar distribuindo cestas básicas e refeições para famílias em situação de vulnerabilidade.",
    category: "Alimentação",
    location: "Rio de Janeiro, RJ",
    verified: true,
    supporters: 892,
    image: getBase64Image("Alimentação"),
    goal: 75000,
    raised: 68000,
    urgency: 'high' as const,
    id: 2
  },
  {
    name: "Verde Esperança",
    description: "Reflorestamento e preservação ambiental em áreas degradadas, promovendo a sustentabilidade e educação ecológica.",
    category: "Meio Ambiente",
    location: "Minas Gerais, MG",
    verified: true,
    supporters: 567,
    image: getBase64Image("Meio Ambiente"),
    goal: 30000,
    raised: 15000,
    urgency: 'low' as const,
    id: 3
  },
  {
    name: "Casa do Idoso Feliz",
    description: "Cuidados e atividades para idosos em situação de abandono, proporcionando qualidade de vida e dignidade.",
    category: "Assistência Social",
    location: "Brasília, DF",
    verified: true,
    supporters: 423,
    image: getBase64Image("Assistência Social"),
    goal: 40000,
    raised: 28000,
    urgency: 'medium' as const,
    id: 4
  },
  {
    name: "Patas Solidárias",
    description: "Resgate, tratamento e adoção responsável de animais abandonados, promovendo o bem-estar animal.",
    category: "Animais",
    location: "Curitiba, PR",
    verified: true,
    supporters: 756,
    image: getBase64Image("Animais"),
    goal: 25000,
    raised: 22000,
    urgency: 'low' as const,
    id: 5
  },
  {
    name: "Saúde Para Todos",
    description: "Atendimento médico gratuito e campanhas de prevenção em comunidades sem acesso adequado à saúde.",
    category: "Saúde",
    location: "Salvador, BA",
    verified: true,
    supporters: 934,
    image: getBase64Image("Saúde"),
    goal: 60000,
    raised: 45000,
    urgency: 'high' as const,
    id: 6
  },
  {
    name: "Educação Digital Brasil",
    description: "Programas de inclusão digital e alfabetização tecnológica para crianças e adultos em áreas rurais.",
    category: "Educação",
    location: "Manaus, AM",
    verified: true,
    supporters: 345,
    image: getBase64Image("Educação"),
    goal: 35000,
    raised: 18000,
    urgency: 'medium' as const,
    id: 7
  },
  {
    name: "Água Limpa Para Todos",
    description: "Construção de poços e sistemas de tratamento de água em comunidades carentes.",
    category: "Saúde",
    location: "Fortaleza, CE",
    verified: true,
    supporters: 612,
    image: getBase64Image("Saúde"),
    goal: 45000,
    raised: 32000,
    urgency: 'high' as const,
    id: 8
  },
  {
    name: "Mulheres Empreendedoras",
    description: "Capacitação e microcrédito para mulheres que desejam iniciar seus próprios negócios.",
    category: "Educação",
    location: "Recife, PE",
    verified: true,
    supporters: 523,
    image: getBase64Image("Educação"),
    goal: 40000,
    raised: 28000,
    urgency: 'low' as const,
    id: 9
  }
];

const NGOGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [displayCount, setDisplayCount] = useState(6);

  // Filter and search NGOs
  const filteredNGOs = useMemo(() => {
    return mockNGOs.filter(ngo => {
      const matchesSearch = 
        ngo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ngo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        ngo.category.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === "all" || ngo.category === selectedCategory;
      
      const matchesLocation = selectedLocation === "all" || ngo.location.includes(selectedLocation);
      
      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [searchTerm, selectedCategory, selectedLocation]);

  const displayedNGOs = filteredNGOs.slice(0, displayCount);
  const hasMore = displayCount < filteredNGOs.length;

  const categories = ["all", "Educação", "Saúde", "Alimentação", "Meio Ambiente", "Assistência Social", "Animais"];
  const locations = ["all", "São Paulo", "Rio de Janeiro", "Minas Gerais", "Brasília", "Curitiba", "Salvador", "Manaus", "Fortaleza", "Recife"];

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
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="md:w-48">
              <SelectValue placeholder="Categoria" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as Categorias</SelectItem>
              <SelectItem value="Educação">Educação</SelectItem>
              <SelectItem value="Saúde">Saúde</SelectItem>
              <SelectItem value="Alimentação">Alimentação</SelectItem>
              <SelectItem value="Meio Ambiente">Meio Ambiente</SelectItem>
              <SelectItem value="Assistência Social">Assistência Social</SelectItem>
              <SelectItem value="Animais">Animais</SelectItem>
            </SelectContent>
          </Select>

          <Select value={selectedLocation} onValueChange={setSelectedLocation}>
            <SelectTrigger className="md:w-48">
              <SelectValue placeholder="Localização" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todo o Brasil</SelectItem>
              <SelectItem value="São Paulo">São Paulo</SelectItem>
              <SelectItem value="Rio de Janeiro">Rio de Janeiro</SelectItem>
              <SelectItem value="Minas Gerais">Minas Gerais</SelectItem>
              <SelectItem value="Brasília">Brasília</SelectItem>
              <SelectItem value="Curitiba">Curitiba</SelectItem>
              <SelectItem value="Salvador">Salvador</SelectItem>
              <SelectItem value="Manaus">Manaus</SelectItem>
              <SelectItem value="Fortaleza">Fortaleza</SelectItem>
              <SelectItem value="Recife">Recife</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="md:w-auto">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-sm text-muted-foreground">
          Mostrando {displayedNGOs.length} de {filteredNGOs.length} ONGs
        </div>

        {/* Grid */}
        {displayedNGOs.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {displayedNGOs.map((ngo, index) => (
                <div key={ngo.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <NGOCard {...ngo} />
                </div>
              ))}
            </div>

            {/* Load More */}
            {hasMore && (
              <div className="text-center">
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setDisplayCount(displayCount + 6)}
                >
                  Carregar Mais ONGs
                </Button>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">
              Nenhuma ONG encontrada com os filtros selecionados. Tente ajustar sua busca.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default NGOGrid;


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin, Users, TrendingUp, Heart, Share2, ExternalLink, CheckCircle, Award } from "lucide-react";
import { getBase64Image } from "@/utils/image-data-final";

// Mock data for NGOs
const mockNGOsData: Record<string, any> = {
  "1": {
    id: 1,
    name: "Instituto Crianças do Futuro",
    description: "Educação e desenvolvimento infantil para comunidades carentes, oferecendo ensino de qualidade e atividades extracurriculares.",
    fullDescription: "O Instituto Crianças do Futuro é uma organização dedicada a transformar vidas através da educação. Desde 2015, trabalhamos em comunidades carentes oferecendo educação de qualidade, atividades extracurriculares, refeições nutritivas e apoio psicológico para crianças em situação de vulnerabilidade.",
    category: "Educação",
    location: "São Paulo, SP",
    verified: true,
    supporters: 1245,
    image: getBase64Image("Educação"),
    goal: 50000,
    raised: 32000,
    urgency: 'medium' as const,
    website: "https://www.criancasdofuturo.org.br",
    email: "contato@criancasdofuturo.org.br",
    phone: "(11) 3333-4444",
    founded: "2015",
    team: 45,
    impact: "2.500+ crianças impactadas",
    programs: [
      {
        name: "Reforço Escolar",
        description: "Aulas de reforço em português, matemática e ciências para crianças com dificuldades de aprendizado"
      },
      {
        name: "Atividades Extracurriculares",
        description: "Artes, música, esportes e tecnologia para desenvolvimento integral"
      },
      {
        name: "Alimentação e Nutrição",
        description: "Refeições balanceadas e educação nutricional para as crianças"
      },
      {
        name: "Apoio Psicológico",
        description: "Atendimento psicológico para crianças e famílias"
      }
    ],
    gallery: [
      getBase64Image("Educação"),
      getBase64Image("Educação"),
      getBase64Image("Educação"),
      getBase64Image("Educação")
    ],
    testimonials: [
      {
        name: "Maria Silva",
        role: "Mãe de aluno",
        text: "O Instituto mudou a vida do meu filho. Ele agora está indo bem na escola e muito mais feliz."
      },
      {
        name: "João Santos",
        role: "Doador",
        text: "Vejo o impacto real de cada doação. Recomendo para todos que querem fazer diferença."
      }
    ]
  }
};

const NGODetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const ngo = mockNGOsData[id || "1"];

  if (!ngo) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">ONG não encontrada</h1>
          <p className="text-muted-foreground mb-8">A ONG que você procura não existe ou foi removida.</p>
          <Button onClick={() => navigate("/")} variant="action">
            Voltar para Home
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const progressPercentage = (ngo.raised / ngo.goal) * 100;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Back Button */}
      <div className="container mx-auto px-4 py-4">
        <Button 
          variant="ghost" 
          className="gap-2"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar
        </Button>
      </div>

      {/* Hero Section */}
      <section className="mb-12">
        <div className="h-96 bg-muted overflow-hidden">
          <img 
            src={ngo.image} 
            alt={ngo.name}
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Info */}
          <div className="lg:col-span-2">
            {/* Header Info */}
            <div className="mb-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-1">
                  <h1 className="text-4xl font-bold mb-2">{ngo.name}</h1>
                  <div className="flex items-center gap-4 text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{ngo.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="h-4 w-4" />
                      <span>{ngo.category}</span>
                    </div>
                  </div>
                </div>
                {ngo.verified && (
                  <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-green-700 font-semibold">Verificada</span>
                  </div>
                )}
              </div>
              
              <p className="text-lg text-muted-foreground mb-6">{ngo.description}</p>
            </div>

            {/* About Section */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Sobre a Organização</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{ngo.fullDescription}</p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t">
                  <div>
                    <p className="text-sm text-muted-foreground">Fundada em</p>
                    <p className="text-lg font-semibold">{ngo.founded}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Equipe</p>
                    <p className="text-lg font-semibold">{ngo.team} pessoas</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Apoiadores</p>
                    <p className="text-lg font-semibold">{ngo.supporters.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Impacto</p>
                    <p className="text-lg font-semibold">{ngo.impact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Programs Section */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Programas e Projetos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {ngo.programs.map((program: any, index: number) => (
                    <div key={index} className="pb-4 border-b last:border-b-0 last:pb-0">
                      <h3 className="font-semibold mb-1">{program.name}</h3>
                      <p className="text-sm text-muted-foreground">{program.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Testimonials */}
            <Card>
              <CardHeader>
                <CardTitle>Depoimentos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {ngo.testimonials.map((testimonial: any, index: number) => (
                    <div key={index} className="pb-6 border-b last:border-b-0 last:pb-0">
                      <p className="text-muted-foreground mb-3 italic">"{testimonial.text}"</p>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Donation Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-2xl">Faça uma Doação</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Progress Bar */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold">Meta de Arrecadação</span>
                    <span className="text-sm text-muted-foreground">{Math.round(progressPercentage)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                    <div 
                      className="bg-gradient-primary h-full transition-all duration-500"
                      style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                    />
                  </div>
                </div>

                {/* Amount Info */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Arrecadado</span>
                    <span className="font-semibold">R$ {ngo.raised.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Meta</span>
                    <span className="font-semibold">R$ {ngo.goal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Faltam</span>
                    <span className="font-semibold text-primary">R$ {(ngo.goal - ngo.raised).toLocaleString()}</span>
                  </div>
                </div>

                {/* Donation Button */}
                <Button 
                  variant="action" 
                  size="lg" 
                  className="w-full"
                  onClick={() => navigate(`/donate/${ngo.id}`)}
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Doar Agora
                </Button>

                {/* Share Button */}
                <Button variant="outline" size="lg" className="w-full">
                  <Share2 className="h-4 w-4 mr-2" />
                  Compartilhar
                </Button>

                {/* Contact Info */}
                <div className="space-y-3 pt-4 border-t">
                  <h3 className="font-semibold text-sm">Informações de Contato</h3>
                  
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="text-muted-foreground">Email</p>
                      <a href={`mailto:${ngo.email}`} className="text-primary hover:underline">
                        {ngo.email}
                      </a>
                    </div>
                    
                    <div>
                      <p className="text-muted-foreground">Telefone</p>
                      <a href={`tel:${ngo.phone}`} className="text-primary hover:underline">
                        {ngo.phone}
                      </a>
                    </div>
                    
                    <div>
                      <p className="text-muted-foreground">Website</p>
                      <a 
                        href={ngo.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary hover:underline flex items-center gap-1"
                      >
                        Visitar Site
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary" />
                    <span className="text-sm">{ngo.supporters.toLocaleString()} pessoas apoiam</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-primary" />
                    <span className="text-sm">Crescimento consistente</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    <span className="text-sm">Organização verificada</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NGODetail;


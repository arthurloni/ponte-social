import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Target, Users, Zap, Award, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const values = [
    {
      icon: Heart,
      title: "Solidariedade",
      description: "Acreditamos no poder da comunidade unida para transformar vidas"
    },
    {
      icon: Target,
      title: "Impacto",
      description: "Cada doação deve gerar mudança real e mensurável na sociedade"
    },
    {
      icon: Users,
      title: "Inclusão",
      description: "Todos devem ter oportunidade de contribuir e fazer diferença"
    },
    {
      icon: Zap,
      title: "Eficiência",
      description: "Tecnologia para conectar doadores e ONGs de forma rápida e segura"
    },
    {
      icon: Award,
      title: "Excelência",
      description: "Padrões altos de qualidade em tudo que fazemos"
    },
    {
      icon: Globe,
      title: "Sustentabilidade",
      description: "Comprometidos com um futuro melhor para as próximas gerações"
    }
  ];

  const team = [
    {
      name: "Thiago Chiossi",
      role: "Fundador e CEO",
      description: "Empreendedor social com 10 anos de experiência em tecnologia para impacto social",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Maria Silva",
      role: "Diretora de Operações",
      description: "Especialista em gestão de ONGs com histórico de sucesso em projetos de grande escala",
      image: "/api/placeholder/300/300"
    },
    {
      name: "João Santos",
      role: "Diretor de Tecnologia",
      description: "Desenvolvedor full-stack com paixão por criar soluções que mudam o mundo",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Ana Costa",
      role: "Diretora de Parcerias",
      description: "Conecta ONGs e doadores com expertise em relacionamento institucional",
      image: "/api/placeholder/300/300"
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Fundação",
      description: "DoaApp é criada com a missão de conectar doadores a ONGs verificadas"
    },
    {
      year: "2023",
      title: "Primeira Doação",
      description: "Primeira doação realizada através da plataforma para Instituto Crianças do Futuro"
    },
    {
      year: "2024",
      title: "500 ONGs Verificadas",
      description: "Atingimos a marca de 500 organizações verificadas na plataforma"
    },
    {
      year: "2024",
      title: "R$ 2.5M Arrecadados",
      description: "Total de doações ultrapassa R$ 2.5 milhões em apenas 6 meses"
    },
    {
      year: "2024",
      title: "100K Vidas Impactadas",
      description: "Mais de 100 mil pessoas foram beneficiadas por doações via DoaApp"
    },
    {
      year: "2025",
      title: "Expansão Nacional",
      description: "Planos para expandir para todos os estados brasileiros"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-action/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Sobre a <span className="bg-gradient-primary bg-clip-text text-transparent">DoaApp</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Somos uma plataforma que acredita no poder das pessoas para transformar o mundo. 
              Conectamos doadores apaixonados a ONGs verificadas que fazem a diferença.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 border-primary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Nossa Missão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Conectar corações generosos a organizações que transformam vidas, 
                  criando um mundo mais solidário, transparente e justo para todos.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-secondary/20">
              <CardHeader>
                <CardTitle className="text-2xl">Nossa Visão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Ser a plataforma de doações mais confiável e impactante do Brasil, 
                  onde cada real doado gera mudança real e mensurável na sociedade.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-action/20">
              <CardHeader>
                <CardTitle className="text-2xl">Nossos Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Solidariedade, transparência, impacto, inclusão e excelência guiam 
                  cada decisão que tomamos e cada ação que realizamos.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values Grid */}
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            Nossos Valores em Ação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Icon className="h-6 w-6 text-primary" />
                      <CardTitle>{value.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            Nossa Jornada
          </h2>
          
          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {milestone.year.slice(-1)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-1 h-16 bg-primary/20 mt-2" />
                  )}
                </div>
                
                <div className="pb-8">
                  <h3 className="text-xl font-bold text-foreground">{milestone.title}</h3>
                  <p className="text-muted-foreground mt-1">{milestone.description}</p>
                  <p className="text-sm text-primary font-semibold mt-2">{milestone.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            Conheça Nosso Time
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-muted overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-action/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            Nosso Impacto
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "ONGs Verificadas" },
              { number: "45.2K", label: "Doadores Ativos" },
              { number: "R$ 2.5M", label: "Arrecadados" },
              { number: "100K+", label: "Vidas Impactadas" }
            ].map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Junte-se a Nós
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Seja você um doador, uma ONG ou um parceiro, há um lugar para você na DoaApp. 
              Vamos transformar o mundo juntos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="action" 
                size="lg"
                onClick={() => navigate("/donate/1")}
              >
                Começar a Doar
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  alert("Obrigado pelo interesse!\n\nPara registrar sua ONG, entre em contato conosco através do email: ong@doaapp.com.br");
                }}
              >
                Registrar ONG
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  category: string;
  attendees: number;
  ngo: string;
}

const mockEvents: Event[] = [
  {
    id: 1,
    title: "Maratona de Doações 2024",
    description: "Participe de uma maratona virtual para arrecadar fundos para educação infantil. Corra, caminhe ou pedale e transforme suas atividades em doações.",
    date: "15 de Novembro, 2024",
    time: "08:00 - 18:00",
    location: "Online",
    image: "/api/placeholder/600/400",
    category: "Educação",
    attendees: 1250,
    ngo: "Instituto Crianças do Futuro"
  },
  {
    id: 2,
    title: "Palestra: Transparência em ONGs",
    description: "Conheça como as organizações não governamentais funcionam e como garantir que sua doação seja bem aplicada. Especialistas compartilham insights.",
    date: "20 de Novembro, 2024",
    time: "19:00 - 20:30",
    location: "São Paulo, SP",
    image: "/api/placeholder/600/400",
    category: "Educação",
    attendees: 450,
    ngo: "Ação Contra a Fome"
  },
  {
    id: 3,
    title: "Dia de Voluntariado - Reflorestamento",
    description: "Ajude a plantar árvores e restaurar áreas degradadas. Uma experiência prática de impacto ambiental direto com a comunidade.",
    date: "25 de Novembro, 2024",
    time: "09:00 - 12:00",
    location: "Minas Gerais, MG",
    image: "/api/placeholder/600/400",
    category: "Meio Ambiente",
    attendees: 320,
    ngo: "Verde Esperança"
  },
  {
    id: 4,
    title: "Encontro de Doadores",
    description: "Conheça outros doadores, compartilhe histórias de impacto e descubra novas formas de contribuir para a sociedade.",
    date: "28 de Novembro, 2024",
    time: "18:00 - 20:00",
    location: "Rio de Janeiro, RJ",
    image: "/api/placeholder/600/400",
    category: "Networking",
    attendees: 200,
    ngo: "Saúde Para Todos"
  },
  {
    id: 5,
    title: "Workshop: Como Criar uma ONG",
    description: "Aprenda os passos práticos para criar e gerenciar uma organização não governamental. Ideal para empreendedores sociais.",
    date: "02 de Dezembro, 2024",
    time: "14:00 - 17:00",
    location: "Brasília, DF",
    image: "/api/placeholder/600/400",
    category: "Educação",
    attendees: 180,
    ngo: "Casa do Idoso Feliz"
  },
  {
    id: 6,
    title: "Adoção Responsável - Evento Presencial",
    description: "Conheça animais disponíveis para adoção e aprenda sobre responsabilidade animal. Traremos animais resgatados para você conhecer.",
    date: "05 de Dezembro, 2024",
    time: "10:00 - 16:00",
    location: "Curitiba, PR",
    image: "/api/placeholder/600/400",
    category: "Animais",
    attendees: 550,
    ngo: "Patas Solidárias"
  }
];

const Events = () => {
  const [registeredEvents, setRegisteredEvents] = useState<number[]>([]);

  const handleRegister = (eventId: number, eventTitle: string) => {
    if (registeredEvents.includes(eventId)) {
      setRegisteredEvents(registeredEvents.filter(id => id !== eventId));
      alert(`Você se descadastrou do evento "${eventTitle}"`);
    } else {
      setRegisteredEvents([...registeredEvents, eventId]);
      alert(`Você se inscreveu no evento "${eventTitle}"!\n\nUm email de confirmação foi enviado para seu email.`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-action/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Eventos e <span className="bg-gradient-primary bg-clip-text text-transparent">Atividades</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Participe de eventos, palestras, voluntariados e encontros que conectam doadores e ONGs. 
              Transforme sua paixão em ação.
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {event.category}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{event.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="h-4 w-4" />
                      <span>{event.attendees} pessoas interessadas</span>
                    </div>
                  </div>
                  
                  <div className="pt-2 border-t">
                    <p className="text-xs text-muted-foreground mb-4">
                      Organizado por: <span className="font-semibold text-foreground">{event.ngo}</span>
                    </p>
                    <Button 
                      className="w-full" 
                      variant={registeredEvents.includes(event.id) ? "outline" : "action"}
                      onClick={() => handleRegister(event.id, event.title)}
                    >
                      {registeredEvents.includes(event.id) ? "Cancelar Inscrição" : "Participar"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 via-secondary/10 to-action/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Não encontrou o evento que procura?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Sugerir um novo evento ou criar um com sua ONG favorita.
            </p>
            <Button 
              variant="action" 
              size="lg"
              onClick={() => {
                alert("Obrigado por sua sugestão!\n\nNosso time revisará sua ideia e entrará em contato em breve.");
              }}
            >
              Sugerir Evento
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;


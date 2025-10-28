import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { CheckCircle, TrendingUp, Users, DollarSign, FileText, Shield } from "lucide-react";

const Transparency = () => {
  const donationData = [
    { month: "Jan", donations: 45000, ngos: 12 },
    { month: "Fev", donations: 52000, ngos: 15 },
    { month: "Mar", donations: 48000, ngos: 14 },
    { month: "Abr", donations: 61000, ngos: 18 },
    { month: "Mai", donations: 55000, ngos: 16 },
    { month: "Jun", donations: 67000, ngos: 20 }
  ];

  const categoryData = [
    { name: "Educação", value: 35, color: "#3b82f6" },
    { name: "Saúde", value: 25, color: "#10b981" },
    { name: "Alimentação", value: 20, color: "#f59e0b" },
    { name: "Meio Ambiente", value: 12, color: "#8b5cf6" },
    { name: "Outros", value: 8, color: "#6b7280" }
  ];

  const stats = [
    {
      icon: DollarSign,
      label: "Total Arrecadado",
      value: "R$ 2.5M",
      description: "Em 6 meses de operação"
    },
    {
      icon: Users,
      label: "Doadores Ativos",
      value: "45.2K",
      description: "Pessoas fazendo diferença"
    },
    {
      icon: Shield,
      label: "ONGs Verificadas",
      value: "500+",
      description: "100% auditadas"
    },
    {
      icon: TrendingUp,
      label: "Taxa de Crescimento",
      value: "48%",
      description: "Mês a mês"
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
              Transparência <span className="bg-gradient-primary bg-clip-text text-transparent">Total</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Acreditamos que transparência é a base da confiança. Veja exatamente para onde 
              vai cada doação e como estamos impactando vidas.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                          {stat.label}
                        </CardTitle>
                      </div>
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold mb-2">{stat.value}</div>
                    <p className="text-xs text-muted-foreground">{stat.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            Dados de Doações
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Donations Over Time */}
            <Card>
              <CardHeader>
                <CardTitle>Doações por Mês</CardTitle>
                <CardDescription>Evolução das doações nos últimos 6 meses</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={donationData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="donations" fill="#3b82f6" name="Doações (R$)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Category Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>Distribuição por Categoria</CardTitle>
                <CardDescription>Percentual de doações por tipo de causa</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name} ${value}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            Processo de Verificação
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: "Documentação",
                description: "Verificamos CNPJ, estatuto e registros legais da ONG"
              },
              {
                step: "2",
                title: "Auditoria Financeira",
                description: "Analisamos demonstrações financeiras e gastos"
              },
              {
                step: "3",
                title: "Avaliação de Impacto",
                description: "Medimos resultados e impacto social real"
              },
              {
                step: "4",
                title: "Certificação",
                description: "Emitimos certificado de transparência anual"
              }
            ].map((item, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            Relatórios Disponíveis
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Relatório Anual 2024",
                description: "Resumo completo de atividades, doações e impacto do ano",
                date: "Janeiro 2025",
                type: "PDF"
              },
              {
                title: "Auditoria Financeira Q2 2024",
                description: "Análise detalhada das finanças do segundo trimestre",
                date: "Julho 2024",
                type: "PDF"
              },
              {
                title: "Relatório de Impacto Social",
                description: "Histórias reais de vidas transformadas pelas doações",
                date: "Dezembro 2024",
                type: "PDF"
              },
              {
                title: "Conformidade e Governança",
                description: "Documentação de conformidade legal e políticas de governança",
                date: "Novembro 2024",
                type: "PDF"
              }
            ].map((report, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{report.title}</CardTitle>
                      <CardDescription>{report.description}</CardDescription>
                    </div>
                    <FileText className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{report.date}</span>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => {
                        alert(`Relatório "${report.title}" baixado com sucesso!\n\nArquivo: ${report.title.replace(/\s+/g, '_')}.pdf`);
                      }}
                    >
                      Baixar {report.type}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
            Certificações e Parcerias
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Certificado B Corp",
                description: "Reconhecimento internacional de impacto social"
              },
              {
                title: "Parceria com ABNT",
                description: "Conformidade com normas técnicas brasileiras"
              },
              {
                title: "Auditoria Independente",
                description: "Auditoria anual por firma independente certificada"
              },
              {
                title: "Transparência Brasil",
                description: "Membro da iniciativa de transparência nacional"
              },
              {
                title: "Segurança de Dados",
                description: "Certificação ISO 27001 para proteção de dados"
              },
              {
                title: "Conformidade LGPD",
                description: "100% em conformidade com Lei Geral de Proteção de Dados"
              }
            ].map((cert, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <CardTitle className="text-base">{cert.title}</CardTitle>
                      <CardDescription className="mt-1">{cert.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
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
              Tem dúvidas sobre nossas operações?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Entre em contato conosco. Estamos sempre prontos para responder suas perguntas.
            </p>
            <Button variant="action" size="lg">
              Fale Conosco
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Transparency;


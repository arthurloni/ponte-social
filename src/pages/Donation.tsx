import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Heart, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import { getImageByCategory } from "@/utils/imageData";

// Mock data for NGOs
const mockNGOsData: Record<string, any> = {
  "1": {
    name: "Instituto Crianças do Futuro",
    image: getImageByCategory("Educação"),
  },
  "2": {
    name: "Ação Contra a Fome",
    image: getImageByCategory("Alimentação"),
  },
  "3": {
    name: "Verde Esperança",
    image: getImageByCategory("Meio Ambiente"),
  },
  "4": {
    name: "Casa do Idoso Feliz",
    image: getImageByCategory("Assistência Social"),
  },
  "5": {
    name: "Patas Solidárias",
    image: getImageByCategory("Animais"),
  },
  "6": {
    name: "Saúde Para Todos",
    image: getImageByCategory("Saúde"),
  },
};

type DonationStep = "form" | "payment" | "success";

const Donation = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState<DonationStep>("form");
  const [amount, setAmount] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("credit-card");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [anonymous, setAnonymous] = useState(false);

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

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) {
      alert("Por favor, insira um valor válido para a doação.");
      return;
    }
    if (!anonymous && (!donorName || !donorEmail)) {
      alert("Por favor, preencha seu nome e email.");
      return;
    }
    setStep("payment");
  };

  const handleSubmitPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("success");
  };

  const handleBackHome = () => {
    navigate("/");
  };

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

      {/* Main Content */}
      <section className="container mx-auto px-4 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Donation Form */}
          <div className="lg:col-span-2">
            {step === "form" && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Faça sua Doação</CardTitle>
                  <CardDescription>
                    Sua doação será destinada a {ngo.name}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitForm} className="space-y-6">
                    {/* Amount */}
                    <div className="space-y-3">
                      <Label className="text-base font-semibold">Valor da Doação (R$)</Label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                        {[10, 25, 50, 100].map((value) => (
                          <Button
                            key={value}
                            type="button"
                            variant={amount === value.toString() ? "action" : "outline"}
                            onClick={() => setAmount(value.toString())}
                            className="h-12"
                          >
                            R$ {value}
                          </Button>
                        ))}
                      </div>
                      <Input
                        type="number"
                        placeholder="Ou insira outro valor"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        min="0.01"
                        step="0.01"
                        className="py-3"
                      />
                    </div>

                    {/* Donor Info */}
                    <div className="space-y-4 pt-6 border-t">
                      <div className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          id="anonymous"
                          checked={anonymous}
                          onChange={(e) => setAnonymous(e.target.checked)}
                          className="w-4 h-4"
                        />
                        <Label htmlFor="anonymous" className="font-normal cursor-pointer">
                          Fazer doação anônima
                        </Label>
                      </div>

                      {!anonymous && (
                        <>
                          <div>
                            <Label htmlFor="name">Nome Completo</Label>
                            <Input
                              id="name"
                              placeholder="Seu nome"
                              value={donorName}
                              onChange={(e) => setDonorName(e.target.value)}
                              className="mt-2"
                            />
                          </div>

                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="seu@email.com"
                              value={donorEmail}
                              onChange={(e) => setDonorEmail(e.target.value)}
                              className="mt-2"
                            />
                          </div>
                        </>
                      )}
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" variant="action" size="lg" className="w-full">
                      <Heart className="h-4 w-4 mr-2" />
                      Continuar para Pagamento
                    </Button>
                  </form>
                </CardContent>
              </Card>
            )}

            {step === "payment" && (
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Método de Pagamento</CardTitle>
                  <CardDescription>
                    Escolha como deseja realizar sua doação de R$ {amount}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmitPayment} className="space-y-6">
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="space-y-4">
                        {/* Credit Card */}
                        <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                          onClick={() => setPaymentMethod("credit-card")}
                        >
                          <RadioGroupItem value="credit-card" id="credit-card" />
                          <Label htmlFor="credit-card" className="flex-1 cursor-pointer">
                            <div className="font-semibold">Cartão de Crédito</div>
                            <div className="text-sm text-muted-foreground">Visa, Mastercard, Elo</div>
                          </Label>
                        </div>

                        {/* Debit Card */}
                        <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                          onClick={() => setPaymentMethod("debit-card")}
                        >
                          <RadioGroupItem value="debit-card" id="debit-card" />
                          <Label htmlFor="debit-card" className="flex-1 cursor-pointer">
                            <div className="font-semibold">Cartão de Débito</div>
                            <div className="text-sm text-muted-foreground">Débito em conta corrente</div>
                          </Label>
                        </div>

                        {/* PIX */}
                        <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                          onClick={() => setPaymentMethod("pix")}
                        >
                          <RadioGroupItem value="pix" id="pix" />
                          <Label htmlFor="pix" className="flex-1 cursor-pointer">
                            <div className="font-semibold">PIX</div>
                            <div className="text-sm text-muted-foreground">Transferência instantânea</div>
                          </Label>
                        </div>

                        {/* Bank Transfer */}
                        <div className="flex items-center space-x-2 p-4 border rounded-lg cursor-pointer hover:bg-muted/50 transition-colors"
                          onClick={() => setPaymentMethod("bank-transfer")}
                        >
                          <RadioGroupItem value="bank-transfer" id="bank-transfer" />
                          <Label htmlFor="bank-transfer" className="flex-1 cursor-pointer">
                            <div className="font-semibold">Transferência Bancária</div>
                            <div className="text-sm text-muted-foreground">Transferência entre contas</div>
                          </Label>
                        </div>
                      </div>
                    </RadioGroup>

                    {/* Payment Details */}
                    <div className="space-y-4 pt-6 border-t">
                      {paymentMethod === "credit-card" && (
                        <>
                          <div>
                            <Label htmlFor="card-number">Número do Cartão</Label>
                            <Input
                              id="card-number"
                              placeholder="1234 5678 9012 3456"
                              className="mt-2"
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="expiry">Validade</Label>
                              <Input
                                id="expiry"
                                placeholder="MM/AA"
                                className="mt-2"
                              />
                            </div>
                            <div>
                              <Label htmlFor="cvv">CVV</Label>
                              <Input
                                id="cvv"
                                placeholder="123"
                                className="mt-2"
                              />
                            </div>
                          </div>
                        </>
                      )}

                      {paymentMethod === "pix" && (
                        <div className="bg-muted p-4 rounded-lg text-center">
                          <p className="text-sm text-muted-foreground mb-2">Chave PIX (Simulada)</p>
                          <p className="font-mono text-sm">doacao@ponte-social.com.br</p>
                        </div>
                      )}

                      {paymentMethod === "bank-transfer" && (
                        <div className="bg-muted p-4 rounded-lg space-y-2 text-sm">
                          <p><span className="font-semibold">Banco:</span> Banco do Brasil</p>
                          <p><span className="font-semibold">Agência:</span> 0001</p>
                          <p><span className="font-semibold">Conta:</span> 123456-7</p>
                          <p><span className="font-semibold">CNPJ:</span> 00.000.000/0001-00</p>
                        </div>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                      <Button 
                        type="button" 
                        variant="outline" 
                        className="flex-1"
                        onClick={() => setStep("form")}
                      >
                        Voltar
                      </Button>
                      <Button type="submit" variant="action" size="lg" className="flex-1">
                        Confirmar Doação
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            )}

            {step === "success" && (
              <Card className="border-green-200 bg-green-50">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-green-100 p-4 rounded-full">
                      <CheckCircle className="h-12 w-12 text-green-600" />
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-green-900">Doação Realizada com Sucesso!</CardTitle>
                  <CardDescription className="text-green-700">
                    Obrigado por sua generosidade
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-white p-6 rounded-lg space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Valor Doado:</span>
                      <span className="font-semibold text-lg">R$ {parseFloat(amount).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Destinado a:</span>
                      <span className="font-semibold">{ngo.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Método de Pagamento:</span>
                      <span className="font-semibold">
                        {paymentMethod === "credit-card" && "Cartão de Crédito"}
                        {paymentMethod === "debit-card" && "Cartão de Débito"}
                        {paymentMethod === "pix" && "PIX"}
                        {paymentMethod === "bank-transfer" && "Transferência Bancária"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">ID da Transação:</span>
                      <span className="font-mono text-sm">TXN-{Math.random().toString(36).substring(7).toUpperCase()}</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
                    <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-blue-900">
                      <p className="font-semibold mb-1">Confirmação por Email</p>
                      <p>Um recibo de sua doação foi enviado para seu email. Verifique sua caixa de entrada ou pasta de spam.</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button 
                      onClick={handleBackHome} 
                      variant="action" 
                      size="lg" 
                      className="w-full"
                    >
                      Voltar para Home
                    </Button>
                    <Button 
                      onClick={() => navigate(`/ngo/${id}`)} 
                      variant="outline" 
                      size="lg" 
                      className="w-full"
                    >
                      Ver ONG
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column - Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Resumo da Doação</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <img 
                    src={ngo.image} 
                    alt={ngo.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">Destinado a</p>
                  <p className="font-semibold text-lg">{ngo.name}</p>
                </div>

                <div className="pt-4 border-t space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Valor:</span>
                    <span className="font-semibold">
                      {amount ? `R$ ${parseFloat(amount).toFixed(2)}` : "—"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Taxa:</span>
                    <span className="font-semibold">Gratuita</span>
                  </div>
                  <div className="flex justify-between text-lg pt-3 border-t">
                    <span className="font-semibold">Total:</span>
                    <span className="font-bold text-primary">
                      {amount ? `R$ ${parseFloat(amount).toFixed(2)}` : "—"}
                    </span>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-xs text-blue-900">
                  <p className="font-semibold mb-1">Doação Segura</p>
                  <p>Seus dados são criptografados e protegidos.</p>
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

export default Donation;


import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AlertCircle, CheckCircle, ArrowLeft } from "lucide-react";

type LoginStep = "login" | "signup" | "forgot" | "success";

// Mock database de usuários
const mockUsers: Record<string, { password: string; name: string }> = {
  "usuario@email.com": { password: "senha123", name: "Usuário Teste" },
  "demo@doaapp.com": { password: "demo123", name: "Demo User" },
};

const Login = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<LoginStep>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [userName, setUserName] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    if (!email.includes("@")) {
      setError("Por favor, insira um email válido.");
      return;
    }

    // Verificar se o usuário existe
    if (!mockUsers[email]) {
      setError("Email não encontrado. Deseja criar uma conta?");
      return;
    }

    // Verificar a senha
    if (mockUsers[email].password !== password) {
      setError("Senha incorreta. Tente novamente.");
      return;
    }

    // Login bem-sucedido
    const name = mockUsers[email].name;
    setUserName(name);
    
    // Store user info in localStorage
    localStorage.setItem("user", JSON.stringify({ email, name, loggedIn: true }));
    setStep("success");
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password || !confirmPassword) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    if (!email.includes("@")) {
      setError("Por favor, insira um email válido.");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    if (mockUsers[email]) {
      setError("Este email já está registrado. Faça login em vez disso.");
      return;
    }

    // Criar nova conta
    const name = email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1);
    setUserName(name);
    
    // Store user info in localStorage
    localStorage.setItem("user", JSON.stringify({ email, name, loggedIn: true }));
    setStep("success");
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Por favor, insira seu email.");
      return;
    }

    if (!email.includes("@")) {
      setError("Por favor, insira um email válido.");
      return;
    }

    if (!mockUsers[email]) {
      setError("Email não encontrado em nosso sistema.");
      return;
    }

    // Simular envio de email
    setError("");
    alert(`Um email de recuperação foi enviado para ${email}. Verifique sua caixa de entrada.`);
    setStep("login");
  };

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto">
          {/* Login Form */}
          {step === "login" && (
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Entrar na DoaApp</CardTitle>
                <CardDescription>
                  Acesse sua conta para gerenciar suas doações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-900">{error}</p>
                    </div>
                  )}

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="py-2"
                    />
                    <p className="text-xs text-muted-foreground">
                      Teste: usuario@email.com / senha: senha123
                    </p>
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <Label htmlFor="password">Senha</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="Sua senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="py-2"
                    />
                  </div>

                  {/* Remember Me */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="remember"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4"
                    />
                    <Label htmlFor="remember" className="font-normal cursor-pointer">
                      Lembrar-me neste dispositivo
                    </Label>
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" variant="action" size="lg" className="w-full">
                    Entrar
                  </Button>

                  {/* Sign Up Link */}
                  <div className="text-center text-sm text-muted-foreground">
                    Não tem conta?{" "}
                    <button
                      type="button"
                      onClick={() => {
                        setStep("signup");
                        setError("");
                        setEmail("");
                        setPassword("");
                      }}
                      className="text-primary hover:underline font-semibold"
                    >
                      Criar conta
                    </button>
                  </div>

                  {/* Forgot Password Link */}
                  <div className="text-center text-sm">
                    <button
                      type="button"
                      onClick={() => {
                        setStep("forgot");
                        setError("");
                        setPassword("");
                      }}
                      className="text-primary hover:underline"
                    >
                      Esqueceu sua senha?
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Signup Form */}
          {step === "signup" && (
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Criar Conta</CardTitle>
                <CardDescription>
                  Junte-se à comunidade DoaApp
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSignup} className="space-y-4">
                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-900">{error}</p>
                    </div>
                  )}

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="signup-email">Email</Label>
                    <Input
                      id="signup-email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="py-2"
                    />
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <Label htmlFor="signup-password">Senha</Label>
                    <Input
                      id="signup-password"
                      type="password"
                      placeholder="Mínimo 6 caracteres"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="py-2"
                    />
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirmar Senha</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="Confirme sua senha"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="py-2"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" variant="action" size="lg" className="w-full">
                    Criar Conta
                  </Button>

                  {/* Back to Login */}
                  <div className="text-center text-sm">
                    <button
                      type="button"
                      onClick={() => {
                        setStep("login");
                        setError("");
                        setEmail("");
                        setPassword("");
                        setConfirmPassword("");
                      }}
                      className="text-primary hover:underline"
                    >
                      Voltar para login
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Forgot Password Form */}
          {step === "forgot" && (
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Recuperar Senha</CardTitle>
                <CardDescription>
                  Insira seu email para receber instruções
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleForgotPassword} className="space-y-4">
                  {/* Error Message */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-3 flex gap-2">
                      <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-red-900">{error}</p>
                    </div>
                  )}

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="forgot-email">Email</Label>
                    <Input
                      id="forgot-email"
                      type="email"
                      placeholder="seu@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="py-2"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button type="submit" variant="action" size="lg" className="w-full">
                    Enviar Link de Recuperação
                  </Button>

                  {/* Back to Login */}
                  <div className="text-center text-sm">
                    <button
                      type="button"
                      onClick={() => {
                        setStep("login");
                        setError("");
                        setEmail("");
                      }}
                      className="text-primary hover:underline"
                    >
                      Voltar para login
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Success Screen */}
          {step === "success" && (
            <Card className="border-green-200 bg-green-50">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="bg-green-100 p-4 rounded-full">
                    <CheckCircle className="h-12 w-12 text-green-600" />
                  </div>
                </div>
                <CardTitle className="text-2xl text-green-900">Bem-vindo, {userName}!</CardTitle>
                <CardDescription className="text-green-700">
                  Você foi autenticado com sucesso
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-white p-6 rounded-lg space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Email</p>
                    <p className="font-semibold">{email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Status</p>
                    <p className="font-semibold text-green-600">Autenticado</p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3">
                  <AlertCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-900">
                    <p className="font-semibold mb-1">Sessão Ativa</p>
                    <p>Sua sessão está ativa. Você pode navegar pelo site e fazer doações.</p>
                  </div>
                </div>

                <Button 
                  onClick={handleBackHome} 
                  variant="action" 
                  size="lg" 
                  className="w-full"
                >
                  Voltar para Home
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Login;


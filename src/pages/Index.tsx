import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NGOGrid from "@/components/NGOGrid";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <NGOGrid />
      <Footer />
    </div>
  );
};

export default Index;

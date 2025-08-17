import Button from "@/components/Button";

export default function HeroSection() {
  return (
    
    <section className="relative h-screen flex items-center justify-center">
     
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=2670&auto=format&fit=crop')",
        }}
      />

     
      <div className="absolute inset-0 bg-black opacity-60 z-10" />

   
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-4">
          Veteriner Kliniğinizin Dijital Dönüşümü
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          VetKlinik Pro ile randevularınızı yönetin, hasta kayıtlarını tek bir
          yerden takip edin ve kliniğinizin verimliliğini zirveye taşıyın.
        </p>
        <Button>Ücretsiz Demo Talep Edin</Button>
      </div>
    </section>
  );
}

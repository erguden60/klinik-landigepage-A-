import { FaUserPlus, FaCalendarCheck, FaHeartbeat } from "react-icons/fa";

const steps = [
  {
    icon: <FaUserPlus className="h-8 w-8 text-white" />,
    title: "1. Kayıt Olun ve Kliniğinizi Kurun",
    description:
      "Birkaç basit adımla kaydınızı tamamlayın ve klinik bilgilerinizi, personelinizi ve hizmetlerinizi sisteme tanımlayın.",
  },
  {
    icon: <FaCalendarCheck className="h-8 w-8 text-white" />,
    title: "2. Randevuları Yönetmeye Başlayın",
    description:
      "Online randevu sistemini aktif edin veya manuel olarak randevuları takviminize ekleyin. Artık her şey kontrol altında.",
  },
  {
    icon: <FaHeartbeat className="h-8 w-8 text-white" />,
    title: "3. Hasta Bakımına Odaklanın",
    description:
      "Yazılım geri kalan her şeyi hallederken siz en önemli işinize, yani sevimli dostlarımızın sağlığına odaklanın.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        {/* Başlık Alanı */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Sadece 3 Basit Adımda Başlayın
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Karmaşık kurulumlara son. VetKlinik Pro ile dakikalar içinde
            çalışmaya başlayın.
          </p>
        </div>

        {/* Adımlar Konteyneri */}
        <div className="relative">
          {/* Adımları birbirine bağlayan çizgi (Sadece masaüstünde görünür) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-700 -translate-y-1/2"></div>

          <div className="relative flex flex-col md:flex-row justify-between items-center gap-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center max-w-xs z-10"
              >
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-cyan-500 border-4 border-zinc-900 mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

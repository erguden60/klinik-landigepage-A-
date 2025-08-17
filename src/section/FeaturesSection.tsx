import {
  FaCalendarAlt,
  FaStethoscope,
  FaChartLine,
  FaFileMedicalAlt,
} from "react-icons/fa";

// Özellik verilerimizi bir array içinde tanımlayalım.
// Bu, kodu daha temiz ve yönetilebilir yapar.
const features = [
  {
    icon: <FaCalendarAlt className="h-10 w-10 text-cyan-400" />,
    title: "Akıllı Randevu Yönetimi",
    description:
      "Müsaitlik durumunuza göre online randevuları kolayca planlayın, yeniden zamanlayın veya iptal edin.",
  },
  {
    icon: <FaFileMedicalAlt className="h-10 w-10 text-cyan-400" />,
    title: "Dijital Hasta Kayıtları",
    description:
      "Tüm hasta geçmişine, aşı takvimine ve tedavi notlarına saniyeler içinde, tek bir yerden güvenle ulaşın.",
  },
  {
    icon: <FaStethoscope className="h-10 w-10 text-cyan-400" />,
    title: "Kapsamlı Tedavi Takibi",
    description:
      "Uygulanan tedavileri, reçeteleri ve laboratuvar sonuçlarını dijital olarak kaydedin ve takip edin.",
  },
  {
    icon: <FaChartLine className="h-10 w-10 text-cyan-400" />,
    title: "Gelişmiş Raporlama",
    description:
      "Kliniğinizin finansal ve operasyonel performansını anlık verilerle takip ederek doğru kararlar alın.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        {/* Başlık Alanı */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Kliniğiniz İçin Güçlü Özellikler
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            VetKlinik Pro, iş akışınızı basitleştirmek ve hasta bakım kalitesini
            artırmak için tasarlandı.
          </p>
        </div>

        {/* Özellik Kartları Grid'i */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-8 rounded-lg shadow-lg text-center transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center justify-center h-16 w-16 rounded-full bg-zinc-800 mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

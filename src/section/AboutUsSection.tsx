import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutUsSection() {
  return (
    <section className="py-20 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
         
          <div className="w-full h-80 md:h-full relative rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2669&auto=format&fit=crop"
              alt="Veteriner ve sevimli bir köpek"
              fill // DÜZELTME 1: layout="fill" yerine "fill" kullanıldı.
              className="object-cover transform hover:scale-105 transition-transform duration-500" // DÜZELTME 2: "object-cover" className'e eklendi. objectFit prop'u kaldırıldı.
            />
          </div>

          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Biz Kimiz?
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              Biz, teknoloji tutkunu bir grup hayvanseveriz. Amacımız, veteriner
              hekimlerin iş yükünü hafifleten, onlara en sevdikleri işe
              odaklanma fırsatı sunan modern, sezgisel ve güçlü bir yazılım
              platformu oluşturmaktı. VetKlinik Pro bu hayalin bir ürünüdür.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-300">
                <FaCheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                Kullanıcı dostu arayüz
              </li>
              <li className="flex items-center text-gray-300">
                <FaCheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                7/24 Güvenilir Teknik Destek
              </li>
              <li className="flex items-center text-gray-300">
                <FaCheckCircle className="h-5 w-5 text-cyan-400 mr-3" />
                Sürekli güncellenen ve gelişen altyapı
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

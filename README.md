# VetKlinik Pro Landing Page

Veteriner kliniği yazılımı için geliştirilmiş modern bir landing page ve Google Gemini AI destekli akıllı sohbet botu.

**[Canlı Demo Linki](https://klinik-landigepage-a-git-main-emirhans-projects-c4f71d69.vercel.app/)** ᐊ— 

<img width="1904" height="2080" alt="klinik-landigepage-a-git-main-emirhans-projects-c4f71d69 vercel app_(iPad Pro)" src="https://github.com/user-attachments/assets/2b7adfdc-62a2-410c-b39b-e9290392519b" />


---

##  Proje Hakkında

Bu proje, "VetKlinik Pro" adında kurgusal bir veteriner kliniği yönetim yazılımı için oluşturulmuş, modern ve koyu temalı bir tanıtım sayfasıdır (landing page). Projenin temel amacı, Next.js 13+ (App Router) ve Tailwind CSS gibi modern web teknolojilerini kullanarak hem estetik hem de performanslı bir kullanıcı arayüzü oluşturmaktır.

Projenin en öne çıkan özelliği, kullanıcıların yazılım hakkında sorular sorabileceği, **Google Gemini API (`gemini-1.5-flash`)** tarafından desteklenen akıllı bir sohbet botunu içermesidir. API anahtarı güvenliği, Next.js Server Actions kullanılarak sağlanmıştır.

## ✨ Öne Çıkan Özellikler

-   **Modern ve Duyarlı Tasarım:** Her türlü cihazda (mobil, tablet, masaüstü) kusursuz görünen, Tailwind CSS ile oluşturulmuş şık bir arayüz.
-   **Koyu Tema:** Kullanıcı gözünü yormayan, estetik ve modern bir koyu tema.
-   **Etkileşimli Bölümler:** Hero, Özellikler, Nasıl Çalışır?, Hakkımızda gibi bölümlerle zenginleştirilmiş kullanıcı deneyimi.
-   **Akıllı Sohbet Botu (Gemini AI):**
    -   Google'ın güçlü `gemini-1.5-flash` modelini kullanır.
    -   Kullanıcıların yazılım ve genel veterinerlik konularındaki sorularına anında yanıt verir.
    -   Sohbet geçmişini hatırlayarak daha akıcı diyaloglar kurar.
    -   API anahtarı, **Next.js Server Actions** sayesinde asla istemciye (tarayıcıya) ifşa edilmez, tam güvenlik sağlanır.
-   **Performans ve SEO:** Next.js App Router ve Server Components sayesinde hızlı sayfa yüklemeleri ve arama motoru dostu bir yapı.
-   **Modern State Yönetimi:** React Context API kullanılarak sohbet durumu (chat state) global olarak yönetilmiştir.

## 🛠️ Kullanılan Teknolojiler

-   **Framework:** Next.js 14+ (App Router)
-   **Dil:** TypeScript
-   **Styling:** Tailwind CSS
-   **UI Kütüphanesi:** React
-   **State Management:** React Context API
-   **İkonlar:** React Icons
-   **Yapay Zeka (AI):** Google Gemini API (`@google/generative-ai` SDK)
-   **Deployment:** Vercel

---

## 🚀 Kurulum ve Çalıştırma (Teknik Kullanıcılar İçin)

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin.

### Gereksinimler

-   Node.js (v18.17 veya üstü)
-   npm veya yarn

### Adımlar

1.  **Projeyi Klonlayın:**
    ```bash
    git clone https://github.com/kullanici-adiniz/proje-adiniz.git
    cd proje-adiniz
    ```

2.  **Gerekli Paketleri Yükleyin:**
    ```bash
    npm install
    # VEYA
    yarn install
    ```

3.  **Ortam Değişkenlerini Ayarlayın:**
    Projenin ana dizininde `.env.example` dosyasını kopyalayarak `.env.local` adında yeni bir dosya oluşturun.
    ```bash
    cp .env.example .env.local
    ```
    Ardından, `.env.local` dosyasını açın ve `GEMINI_API_KEY` değişkenine kendi Google Gemini API anahtarınızı girin. API anahtarını [Google AI Studio](https://makersuite.google.com/app/apikey) adresinden ücretsiz olarak alabilirsiniz.

    ```.env.local
    GEMINI_API_KEY=AIzaSy...sizin_api_anahtarınız
    ```

4.  **Geliştirme Sunucusunu Başlatın:**
    ```bash
    npm run dev
    # VEYA
    yarn dev
    ```

5.  **Uygulamayı Görüntüleyin:**
    Tarayıcınızda `http://localhost:3000` adresini açın.

---

## 部署 (Deployment)

Bu proje, Next.js için optimize edilmiş olan Vercel platformuna kolayca deploy edilebilir.

1.  Projenizi bir GitHub repositorisine yükleyin.
2.  Vercel'e gidin ve GitHub hesabınızla giriş yapın.
3.  "Import Project" diyerek projenizin repositorisini seçin.
4.  **En Önemli Adım:** Proje ayarlarında **"Environment Variables"** (Ortam Değişkenleri) bölümüne gidin ve `.env.local` dosyanızdaki `GEMINI_API_KEY` değişkenini aynı isim ve değerle buraya ekleyin.
5.  "Deploy" butonuna tıklayın. Vercel projeyi otomatik olarak build edip canlıya alacaktır.

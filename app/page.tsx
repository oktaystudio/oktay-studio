"use client";

import { useState } from "react";
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  return (
    <main className="bg-black text-white">
             {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            className="text-2xl font-black tracking-tight"
          >
            OKTAY
            <span className="text-orange-500"> STUDIO</span>
          </a>


          {/* Masaüstü Menü */}
        <div className="hidden md:flex items-center justify-center gap-8 absolute left-1/2 -translate-x-1/2">
            <a href="#" className="text-gray-300 hover:text-orange-500 transition">
              Anasayfa
            </a>

            <a href="#projeler" className="text-gray-300 hover:text-orange-500 transition">
              Projeler
            </a>

            <a href="#hizmetler" className="text-gray-300 hover:text-orange-500 transition">
              Hizmetler
            </a>

            <a href="#hakkimizda" className="text-gray-300 hover:text-orange-500 transition">
              Hakkımızda
            </a>

            <a href="#iletisim" className="text-gray-300 hover:text-orange-500 transition">
              İletişim
            </a>

            <a
              href="#iletisim"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-bold transition hover:scale-105"
            >
              Teklif Al
            </a>

          </div>


          {/* Mobil Menü Butonu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-2xl"
          >
            ☰
          </button>

        </div>


        {/* Mobil Menü */}
        {menuOpen && (
          <div className="md:hidden bg-black border-t border-white/10 px-6 py-5">

            <div className="flex flex-col gap-5">

              <a
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-orange-500 transition"
              >
                Anasayfa
              </a>

              <a
                href="#projeler"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-orange-500 transition"
              >
                Projeler
              </a>

              <a
                href="#hizmetler"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-orange-500 transition"
              >
                Hizmetler
              </a>

              <a
                href="#hakkimizda"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-orange-500 transition"
              >
                Hakkımızda
              </a>

              <a
                href="#iletisim"
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 hover:text-orange-500 transition"
              >
                İletişim
              </a>

            </div>

          </div>
        )}

      </nav>
      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center px-6">

          <p className="text-orange-500 font-bold tracking-[0.3em] text-sm mb-5">
            WEB TASARIM & GELİŞTİRME
          </p>

          <h1 className="text-6xl md:text-8xl font-black tracking-tight">
            OKTAY
            <span className="text-orange-500"> STUDIO</span>
          </h1>

          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mt-6 leading-relaxed">
            Modern, hızlı ve etkileyici web siteleri tasarlıyoruz.
            Markanızı dijital dünyada güçlü bir şekilde temsil edin.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
            <a
              href="#projeler"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition hover:scale-105"
            >
              Projelerimizi Gör
            </a>

            <a
              href="#iletisim"
              className="border border-white/20 hover:border-orange-500 hover:text-orange-500 px-8 py-4 rounded-full font-bold transition"
            >
              İletişime Geç
            </a>
          </div>

        </div>
      </section>


      {/* PROJELER */}
      <section
        id="projeler"
        className="py-24 px-6 bg-gray-950"
      >
        <div className="max-w-7xl mx-auto">

          {/* Başlık */}
          <div className="text-center mb-14">

            <p className="text-orange-500 font-bold tracking-[0.25em] text-sm mb-3">
              PORTFÖY
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              Projelerimiz
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-lg">
              Tasarladığımız modern ve etkileyici web sitelerinden bazıları.
            </p>

          </div>


          {/* Proje Kartları */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Lezzet Durağı */}
            <div className="group bg-gray-900 border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2">

              <div className="h-72 bg-gray-800 flex items-center justify-center">
                <span className="text-3xl font-black">
                  LEZZET
                  <span className="text-orange-500"> DURAĞI</span>
                </span>
              </div>

              <div className="p-7">

                <p className="text-orange-500 font-bold text-sm mb-2">
                  RESTORAN WEB SİTESİ
                </p>

                <h3 className="text-3xl font-black">
                  Lezzet Durağı
                </h3>

                <p className="text-gray-400 mt-3 leading-relaxed">
                  Modern tasarım, menü filtreleme, WhatsApp sipariş,
                  galeri ve etkileyici animasyonlara sahip restoran sitesi.
                </p>

                <a
                 href="https://restaurant-demo-blue-phi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-orange-500 font-bold hover:text-orange-400 transition"
                >
                 Siteyi Gör →
                 </a>

              </div>
            </div>


            {/* Fatih Demo */}
            <div className="group bg-gray-900 border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2">

              <div className="h-72 bg-gray-800 flex items-center justify-center">
                <span className="text-3xl font-black">
                  FATİH
                  <span className="text-orange-500"> DEMO</span>
                </span>
              </div>

              <div className="p-7">

                <p className="text-orange-500 font-bold text-sm mb-2">
                  WEB TASARIM
                </p>

                <h3 className="text-3xl font-black">
                  Fatih Demo
                </h3>

                <p className="text-gray-400 mt-3 leading-relaxed">
                  Modern, responsive ve animasyonlarla desteklenmiş
                  profesyonel web sitesi tasarımı.
                </p>

                <a
  href="https://fatihmen-demo.vercel.app"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block mt-6 text-orange-500 font-bold hover:text-orange-400 transition"
>
  Siteyi Gör →
</a>

              </div>
            </div>
            {/* Diş Kliniği */}
<div className="group bg-gray-900 border border-white/10 rounded-3xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2">

  <div className="h-72 bg-gray-800 flex items-center justify-center">
    <span className="text-3xl font-black">
      DİŞ
      <span className="text-orange-500"> KLİNİĞİ</span>
    </span>
  </div>

  <div className="p-7">

    <p className="text-orange-500 font-bold text-sm mb-2">
      DİŞ KLİNİĞİ WEB SİTESİ
    </p>

    <h3 className="text-3xl font-black">
      Diş Kliniği
    </h3>

    <p className="text-gray-400 mt-3 leading-relaxed">
      Modern ve profesyonel diş kliniği web sitesi.
      Tedaviler, doktorlar, iletişim ve WhatsApp üzerinden
      randevu talebi özellikleriyle tasarlandı.
    </p>

    <a
      href="https://dis-klinigi-delta.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mt-6 text-orange-500 font-bold hover:text-orange-400 transition"
    >
      Siteyi Gör →
    </a>

  </div>
</div>

          </div>

        </div>
      </section>
      
             {/* HİZMETLER */}
      <section
        id="hizmetler"
        className="py-24 px-6 bg-black"
      >
        <div className="max-w-7xl mx-auto">

          {/* Başlık */}
          <div className="text-center mb-14">

            <p className="text-orange-500 font-bold tracking-[0.25em] text-sm mb-3">
              HİZMETLERİMİZ
            </p>

            <h2 className="text-4xl md:text-5xl font-black">
              Dijital Dünyada
              <span className="text-orange-500"> Yanınızdayız</span>
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-lg">
              Markanız için modern, hızlı ve kullanıcı odaklı web çözümleri
              geliştiriyoruz.
            </p>

          </div>
           

          {/* Hizmet Kartları */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Web Tasarım */}
            <div className="group bg-gray-950 border border-white/10 rounded-3xl p-7 hover:border-orange-500/50 hover:-translate-y-2 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center text-2xl mb-6">
                🖥️
              </div>

              <h3 className="text-2xl font-black">
                Web Tasarım
              </h3>

              <p className="text-gray-400 mt-3 leading-relaxed">
                Markanıza özel, modern ve profesyonel web siteleri
                tasarlıyoruz.
              </p>
               
            </div>
            
            

            {/* Responsive */}
            <div className="group bg-gray-950 border border-white/10 rounded-3xl p-7 hover:border-orange-500/50 hover:-translate-y-2 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center text-2xl mb-6">
                📱
              </div>

              <h3 className="text-2xl font-black">
                Responsive Tasarım
              </h3>

              <p className="text-gray-400 mt-3 leading-relaxed">
                Sitenizin telefon, tablet ve bilgisayarda kusursuz
                görünmesini sağlıyoruz.
              </p>

            </div>
            

            {/* Animasyon */}
            <div className="group bg-gray-950 border border-white/10 rounded-3xl p-7 hover:border-orange-500/50 hover:-translate-y-2 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center text-2xl mb-6">
                ✨
              </div>

              <h3 className="text-2xl font-black">
                Animasyon
              </h3>

              <p className="text-gray-400 mt-3 leading-relaxed">
                Sayfanıza modern geçişler ve etkileyici kullanıcı
                deneyimleri ekliyoruz.
              </p>

            </div>


            {/* Yayına Alma */}
            <div className="group bg-gray-950 border border-white/10 rounded-3xl p-7 hover:border-orange-500/50 hover:-translate-y-2 transition-all duration-300">

              <div className="w-14 h-14 rounded-2xl bg-orange-500/10 text-orange-500 flex items-center justify-center text-2xl mb-6">
                🚀
              </div>

              <h3 className="text-2xl font-black">
                Yayına Alma
              </h3>

              <p className="text-gray-400 mt-3 leading-relaxed">
                Hazırladığımız projeyi hızlı ve güvenli şekilde
                internete taşıyoruz.
              </p>

            </div>

          </div>
                      {/* Grafik Tasarım */}
            <div className="group mt-10 bg-gray-950 border border-white/10 rounded-3xl p-7 hover:border-orange-500/50 hover:-translate-y-2 transition-all duration-300 lg:col-start-2">

              <div className="w-14 h-14 rounded-3xl bg-orange-500/10 text-orange-500 flex items-center justify-center text-2xl mb-">
                🎨
              </div>

              <h3 className="text-2xl font-black">
                Grafik Tasarım
              </h3>

              <p className="text-gray-400 mt-3 leading-relaxed">
                Logo, sosyal medya görselleri, afiş ve markanıza özel grafik
                tasarımlar hazırlıyoruz.
              </p>

            </div>
        </div>
      </section>
            {/* HAKKIMIZDA */}
      <section
        id="hakkimizda"
        className="py-24 px-6 bg-gray-950"
      >
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* Sol Taraf */}
            <div>

              <p className="text-orange-500 font-bold tracking-[0.25em] text-sm mb-3">
                HAKKIMIZDA
              </p>

              <h2 className="text-4xl md:text-5xl font-black leading-tight">
                Fikirleri
                <span className="text-orange-500"> Dijitale</span>
                <br />
                Taşıyoruz.
              </h2>

              <p className="text-gray-400 text-lg mt-6 leading-relaxed">
                Oktay Studio olarak modern ve etkileyici web siteleri
                geliştiriyoruz. Her projeyi markanın ihtiyaçlarına göre
                tasarlıyor ve kullanıcı deneyimini ön planda tutuyoruz.
              </p>

              <p className="text-gray-400 text-lg mt-4 leading-relaxed">
                Amacımız sadece güzel görünen değil; hızlı, responsive
                ve profesyonel çalışan dijital deneyimler oluşturmak.
              </p>

            </div>


            {/* Sağ Taraf */}
            <div className="grid grid-cols-2 gap-5">

              {/* Kart 1 */}
              <div className="bg-black border border-white/10 rounded-3xl p-7 hover:border-orange-500/50 transition-all duration-300">
                <p className="text-4xl font-black text-orange-500">
                  100%
                </p>

                <p className="text-gray-400 mt-2">
                  Özel Tasarım
                </p>
              </div>


              {/* Kart 2 */}
              <div className="bg-black border border-white/10 rounded-3xl p-7 hover:border-orange-500/50 transition-all duration-300">
                <p className="text-4xl font-black text-orange-500">
                  ⚡
                </p>

                <p className="text-gray-400 mt-2">
                  Hızlı Çözümler
                </p>
              </div>


              {/* Kart 3 */}
              <div className="bg-black border border-white/10 rounded-3xl p-7 hover:border-orange-500/50 transition-all duration-300">
                <p className="text-4xl font-black text-orange-500">
                  📱
                </p>

                <p className="text-gray-400 mt-2">
                  Responsive
                </p>
              </div>


              {/* Kart 4 */}
              <div className="bg-black border border-white/10 rounded-3xl p-7 hover:border-orange-500/50 transition-all duration-300">
                <p className="text-4xl font-black text-orange-500">
                  🚀
                </p>

                <p className="text-gray-400 mt-2">
                  Modern Teknoloji
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>
           {/* İLETİŞİM */}
<section
  id="iletisim"
  className="py-24 px-6 bg-black"
>
  <div className="max-w-7xl mx-auto">

    {/* Başlık */}
    <div className="text-center mb-14">

      <p className="text-orange-500 font-bold tracking-[0.25em] text-sm mb-3">
        İLETİŞİM
      </p>

      <h2 className="text-4xl md:text-5xl font-black">
        Projenizi
        <span className="text-orange-500"> Konuşalım</span>
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto mt-5 text-lg">
        Web siteniz veya dijital projeniz için bizimle iletişime geçin.
      </p>

    </div>


    {/* İçerik */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

      {/* Sol Kart */}
      <div className="bg-gray-950 border border-white/10 rounded-3xl p-8 md:p-10">

        <p className="text-orange-500 font-bold text-sm mb-3">
          OKTAY STUDIO
        </p>

        <h3 className="text-3xl md:text-4xl font-black">
          Dijital dünyada
          <span className="text-orange-500"> birlikte</span>
          büyüyelim.
        </h3>

        <p className="text-gray-400 mt-5 leading-relaxed">
          Modern web tasarım, responsive geliştirme, animasyon
          ve dijital çözümler için bize ulaşabilirsiniz.
        </p>

        <div className="mt-8 space-y-5">

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-xl">
              📱
            </div>

            <div>
              <p className="text-gray-500 text-sm">
                WhatsApp
              </p>

              <p className="font-bold">
                İletişime Geç
              </p>
            </div>
          </div>


          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-xl">
              🌐
            </div>

            <div>
              <p className="text-gray-500 text-sm">
                Hizmet
              </p>

              <p className="font-bold">
                Web Tasarım & Geliştirme
              </p>
            </div>
          </div>

        </div>
       <div className="flex items-center gap-4 mt-6">
  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-xl">
    📸
  </div>

  <div>
    <p className="text-gray-500 text-sm">
      Instagram
    </p>

    <a
      href="https://www.instagram.com/photosshoopp/"
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold hover:text-orange-500 transition"
    >
      Instagram'da Bizi Gör
    </a>
  </div>
</div>
      </div>


      {/* Sağ Kart */}
      <div className="bg-gray-950 border border-white/10 rounded-3xl p-8 md:p-10">

        <h3 className="text-2xl font-black">
          Projenizden bahsedin
        </h3>

        <p className="text-gray-400 mt-3">
          Size en uygun çözümü hazırlayabilmemiz için birkaç bilgi bırakın.
        </p>


        {/* FORM */}
        <form
          className="mt-8 space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();

            setSending(true);
            setSent(false);

            try {
              const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  name,
                  email,
                  project,
                  message,
                }),
              });

              const data = await response.json();

              if (!response.ok) {
                throw new Error(
                  data.error || "Mesaj gönderilemedi."
                );
              }

              setSent(true);

              setName("");
              setEmail("");
              setProject("");
              setMessage("");

            } catch (error) {
              alert(
                error instanceof Error
                  ? error.message
                  : "Bir hata oluştu."
              );
            } finally {
              setSending(false);
            }
          }}
        >

          {/* Ad */}
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ad Soyad *"
            className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-orange-500 transition"
          />


          {/* E-posta */}
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="E-posta dolasmazoktay65@gmail.com *"
            className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-orange-500 transition"
          />


          {/* Proje */}
          <select
            required
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-orange-500 transition text-gray-400"
          >
            <option value="">Proje Türü Seçin *</option>
            <option value="Web Tasarım">Web Tasarım</option>
            <option value="Grafik Tasarım">Grafik Tasarım</option>
            <option value="Kurumsal Web Sitesi">
              Kurumsal Web Sitesi
            </option>
            <option value="Diğer">Diğer</option>
          </select>


          {/* Mesaj */}
          <textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Projeniz hakkında kısaca bilgi verin... *"
            rows={5}
            className="w-full bg-black border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-orange-500 transition resize-none"
          />


          {/* Başarı mesajı */}
          {sent && (
            <p className="text-green-400 text-sm text-center">
              ✅ Proje talebiniz başarıyla gönderildi!
            </p>
          )}


          {/* Gönder */}
          <button
            type="submit"
            disabled={sending}
            className="w-full bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-4 rounded-2xl font-bold transition hover:scale-[1.02]"
          >
            {sending
              ? "Gönderiliyor..."
              : "Proje Talebini Gönder →"}
          </button>


          {/* WhatsApp - İkincil seçenek */}
          <div className="text-center pt-3">

            <p className="text-gray-500 text-sm">
              Acil bir konuda görüşmek ister misiniz?
            </p>

            <a
              href="https://wa.me/905447310322"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-gray-400 hover:text-orange-500 font-semibold text-sm transition"
            >
              📱 WhatsApp üzerinden iletişime geç →
            </a>

          </div>

        </form>

      </div>

    </div>

  </div>
</section>
    </main>
    
  );
}
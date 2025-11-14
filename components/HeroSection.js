function HeroSection() {
  try {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <section 
        id="beranda"
        className="pt-32 pb-20 min-h-screen flex items-center"
        data-name="hero-section"
        data-file="components/HeroSection.js"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-black rounded-3xl p-16 text-center">
            <h2 className="text-5xl font-bold mb-6">
              SOLUSI LENGKAP KEBUTUHAN ELEKTRONIK ANDA
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Temukan produk berkualitas, penawaran terbaik, dan layanan purna jual yang dapat 
              Anda andalkan. Jelajahi kategori kami dan temukan perangkat yang cocok untuk rumah Anda.
            </p>
            
            <div className="flex gap-4 justify-center mb-6">
              <button 
                onClick={() => scrollToSection('produk')}
                className="px-8 py-3 bg-[var(--primary-color)] hover:bg-[var(--accent-color)] rounded-lg font-semibold transition-colors"
              >
                Lihat Produk
              </button>
              <button 
                onClick={() => scrollToSection('kontak')}
                className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-black rounded-lg font-semibold transition-colors"
              >
                Hubungi Kami
              </button>
            </div>

            <p className="text-sm text-gray-400">
              Gratis konsultasi produk & cek garansi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
            <div className="bg-[var(--card-bg)] rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-blue-500 bg-opacity-20 flex items-center justify-center mb-4">
                <div className="icon-truck text-2xl text-blue-400"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Pengiriman Cepat</h3>
              <p className="text-gray-400">
                Kiriman sampai 1-3 hari kerja untuk area kota utama.
              </p>
            </div>

            <div className="bg-[var(--card-bg)] rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-blue-500 bg-opacity-20 flex items-center justify-center mb-4">
                <div className="icon-shield-check text-2xl text-blue-400"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Garansi Resmi</h3>
              <p className="text-gray-400">
                Garansi pabrik pada produk elektronik resmi.
              </p>
            </div>

            <div className="bg-[var(--card-bg)] rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-blue-500 bg-opacity-20 flex items-center justify-center mb-4">
                <div className="icon-headset text-2xl text-blue-400"></div>
              </div>
              <h3 className="text-xl font-bold mb-3">Layanan 24/7</h3>
              <p className="text-gray-400">
                Dukungan pelanggan siap membantu kapan saja.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('HeroSection component error:', error);
    return null;
  }
}
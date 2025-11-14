function AboutSection() {
  try {
    return (
      <section 
        id="tentang-toko"
        className="section-spacing min-h-screen flex items-center"
        data-name="about-section"
        data-file="components/AboutSection.js"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-[var(--card-bg)] rounded-3xl p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1556742208-999815fca738?w=600&h=600&fit=crop"
                  alt="Toko Musica Jaya"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
              
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Selamat Datang di Toko Elektronik MUSTIKA JAYA
                </h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Kami menyediakan solusi lengkap untuk kebutuhan elektronik rumah tangga dan 
                  kantor. Dengan pengalaman puluhan tahun, kami menghadirkan produk 
                  berkualitas, layanan purna jual, dan dukungan teknis yang ramah. Kunjungi toko 
                  kami atau hubungi lewat kontak untuk informasi stok dan promo terbaru.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('AboutSection component error:', error);
    return null;
  }
}
function ContactSection() {
  try {
    return (
      <section 
        id="kontak"
        className="section-spacing min-h-screen flex items-center"
        data-name="contact-section"
        data-file="components/ContactSection.js"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto bg-[var(--card-bg)] rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-12">Hubungi Kami</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-gray-300 mb-8 text-lg">
                  Kunjungi toko kami atau hubungi melalui:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-red-500 bg-opacity-20 flex items-center justify-center flex-shrink-0">
                      <div className="icon-phone text-xl text-red-400"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Telepon/WA</h3>
                      <p className="text-gray-300">089-563-986-2251</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-500 bg-opacity-20 flex items-center justify-center flex-shrink-0">
                      <div className="icon-map-pin text-xl text-green-400"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Alamat Toko</h3>
                      <p className="text-gray-300">Jl. Contoh No.1, Kota</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500 bg-opacity-20 flex items-center justify-center flex-shrink-0">
                      <div className="icon-clock text-xl text-blue-400"></div>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Jam Buka</h3>
                      <p className="text-gray-300">Senin - Sabtu: 09:00 - 21:00</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="icon-check text-[var(--primary-color)]"></div>
                    <span className="text-gray-300">Tersedia layanan pengiriman</span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="icon-check text-[var(--primary-color)]"></div>
                    <span className="text-gray-300">Cash on Delivery (COD)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="icon-check text-[var(--primary-color)]"></div>
                    <span className="text-gray-300">Konsultasi produk gratis</span>
                  </div>
                </div>
              </div>

              <div>
                <img 
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=600&fit=crop"
                  alt="Lokasi Toko"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('ContactSection component error:', error);
    return null;
  }
}
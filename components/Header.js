function Header() {
  try {
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <header 
        className="fixed top-0 left-0 right-0 z-50 bg-[var(--dark-bg)] border-b border-gray-800"
        data-name="header"
        data-file="components/Header.js"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[var(--primary-color)] rounded flex items-center justify-center font-bold text-lg">
                MJ
              </div>
              <div>
                <h1 className="text-lg font-bold">
                  MUSICA JAYA <span className="text-[var(--primary-color)]">ELEKTRONIK</span>
                </h1>
                <p className="text-xs text-[var(--accent-color)]">Your Music & Electronics Partner</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-gray-800 rounded">
                <div className="icon-shopping-cart text-xl"></div>
              </button>
            </div>
          </div>

          <nav className="flex justify-end gap-8 mt-4">
            <button 
              onClick={() => scrollToSection('beranda')}
              className="text-sm hover:text-[var(--primary-color)] transition-colors"
            >
              Beranda
            </button>
            <button 
              onClick={() => scrollToSection('tentang-toko')}
              className="text-sm hover:text-[var(--primary-color)] transition-colors"
            >
              Tentang Toko
            </button>
            <button 
              onClick={() => scrollToSection('produk')}
              className="text-sm hover:text-[var(--primary-color)] transition-colors"
            >
              Produk
            </button>
            <button 
              onClick={() => scrollToSection('kontak')}
              className="text-sm hover:text-[var(--primary-color)] transition-colors"
            >
              Kontak
            </button>
            <button 
              onClick={() => scrollToSection('pengembang')}
              className="text-sm hover:text-[var(--primary-color)] transition-colors"
            >
              Pengembang
            </button>
          </nav>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}
const products = [
    {
        id: 1,
        name: 'KIPAS ANGIN LISTRIK',
        description: 'Kipas angin berkualitas, Hemat energi, 3 kecepatan, Bahan kuat, Cocok untuk rumah & kantor.',
        price: 250000,
        image: 'Gambar web/kipas angin .jpg'
    },
    {
        id: 2,
        name: 'SPEAKER',
        description: 'Speaker audio berkualitas untuk kebutuhan hiburan.',
        price: 2849000,
        image: 'Gambar web/speaker .jpg'
    },
    {
        id: 3,
        name: 'KOMPOR GAS',
        description: 'Kompor gas 1 tungku, Efisien, Mudah dibersihkan dengan desain modern.',
        price: 369000,
        image: 'Gambar web/kompor.jpg'
    },
    {
        id: 4,
        name: 'RICE COOKER',
        description: 'Rice cooker ukuran sedang, Multifungsi untuk memasak nasi dan mengukus makanan.',
        price: 262000,
        image: 'Gambar web/ricecooker.jpg'
    },
    {
        id: 5,
        name: 'ANTENA TV OUTDOOR',
        description: 'Antena TV outdoor untuk sinyal yang lebih baik dan stabil.',
        price: 205000,
        image: 'Gambar web/antena.jpg'
    },
    {
        id: 6,
        name: 'MESIN CUCI',
        description: 'Mesin cuci dengan lembaga berlapis isolasi PVC, Konduktivitas tinggi, Isolasi tahan panas, Mudah dipasang, Aman untuk instalasi .',
        price: 1503000,
        image: 'Gambar web/mesincuci.jpg'
    },
    {
        id: 7,
        name: 'TV POLYTRON',
        description: 'TV LED dengan built-in speaker disamping, dilengkapi dengan Cinemax Audio, HDMI Port USB Movie.',
        price: 1850000,
        image: 'Gambar web/opentv.jpg'
    },
    {
        id: 8,
        name: 'BLENDER MIYAKO',
        description: 'Blender elektrik dengan gelas besar dan kecil, 3 tombol kecepatan+pulse, Dilengkapi dengan penggiling bumbu',
        price: 307000,
        image: 'Gambar web/openblender.jpg'
    },
    {
        id: 9,
        name: 'KULKAS POLYTRON BELEZA',
        description: 'Kulkas 1 pintu, Rak kaca tempered glass, Freezer dengan pembekuan cepat, Suhu pendingin stabil.',
        price: 2079000,
        image: 'Gambar web/Kulkas.jpg'
    }
];

function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Produk berhasil ditambahkan ke keranjang!');
}

document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('productList');
    
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
            </div>
            <div class="product-actions">
                <div class="product-price">Rp. ${product.price.toLocaleString('id-ID')}</div>
                <div class="product-buttons">
                    <a href="product-detail.html?id=${product.id}" class="btn btn-primary btn-small">Lihat Detail</a>
                    <button class="btn btn-secondary btn-small" onclick='addToCart(${JSON.stringify(product)})'>Tambah ke Keranjang</button>
                    <a href="payment.html?id=${product.id}" class="btn btn-primary btn-small">Beli</a>
                </div>
            </div>
        `;
        
        productList.appendChild(productItem);
    });
});

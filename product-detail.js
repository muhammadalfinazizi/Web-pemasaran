const products = [
    {
        id: 1,
        name: 'KIPAS ANGIN LISTRIK',
        description: 'Kipas angin berkualitas, hemat energi, 3 kecepatan, bahan kuat, cocok untuk rumah & kantor.',
        price: 250000,
        images: [
            'Gambar web/kipas angin1.jpg',
            'Gambar web/kps angin hj2.jpg'
        ],
        specs: {
            'Merek': 'MASPION DAN YASAKA',
            'Garansi': '1 Tahun',
            'Warna': 'HITAM/HITAM MERAH',
            'Daya': '55 Watt'
        }
    },
    {
        id: 2,
        name: 'SPEAKER',
        description: 'Speaker audio berkualitas untuk kebutuhan hiburan.',
        price: 2849000,
        images: [
            'Gambar web/speaker 1.jpg',
            'Gambar web/spek mer.jpg'
        ],
        specs: {
            'Merek': 'POLYTRON',
            'Garansi': '2 Tahun',
            'Konektivitas': 'Bluetooth, AUX',
            'Output': '100W'
        }
    },
    {
        id: 3,
        name: 'KOMPOR GAS',
        description: 'Kompor gas 1 tungku, efisien, mudah dibersihkan, dengan desain modern.',
        price: 369000,
        images: [
            'Gambar web/kompor.jpg',
        ],
        specs: {
            'Merek': 'RINNAI',
            'Garansi': '1 Tahun',
            'Tungku': '1 Tungku',
            'Material': 'Stainless Steel'
        }
    },
    {
        id: 4,
        name: 'RICE COOKER',
        description: 'Rice cooker ukuran sedang, multifungsi untuk memasak nasi dan mengukus makanan.',
        price: 262000,
        images: [
            'Gambar web/ricecookermrh.jpg',
        ],
        specs: {
            'Merek': 'MIYAKO,COSMOS,',
            'Garansi': '1 Tahun',
            'Kapasitas': '1.8 Liter',
            'Fungsi': 'Memasak & Mengukus'
        }
    },
    {
        id: 5,
        name: 'ANTENA TV OUTDOOR',
        description: 'Antena TV outdoor untuk sinyal yang lebih baik dan stabil.',
        price: 205000,
        images: [
            'Gambar web/antena.jpg',
        ],
        specs: {
            'Merek': 'AZ/GX(UNIVERSAL)',
            'Garansi': '6 Bulan',
            'Tipe': 'Outdoor',
            'Jangkauan': 'Hingga 50 km'
        }
    },
    {
        id: 6,
        name: 'MESIN CUCI',
        description: 'Konduktivitas tinggi, isolasi tahan panas, mudah dipasang aman untuk instalasi',
        price: 1503000,
        images: [
            'Gambar web/mesincuci.jpg',
        ],
        specs: {
            'Merek': 'LG',
            'Garansi': '1 Tahun',
            'Daya': '350 Watt',
            'Warna': 'PUTIH'
        }
    },
    {
        id: 7,
        name: 'TV POLYTRON',
        description: 'TV LED dengan built-in speaker disamping,dilenkapi dengan cinemaxaudio,HDMI port USB movie.',
        price: 1850000,
        images: [
            'Gambar web/tv.jpg',
            
        ],
        specs: {
            'Merek': 'POLYTRON',
            'Garansi': '1 Tahun',
            'WARNA': 'HITAM'
        }
    },
    {
        id: 8,
        name: 'BLENDER MIYAKO',
        description: '3 tombol kecepatan+pulse, dilengkapi dengan penggiling bumbu',
        price: 307000,
        images: [
            'Gambar web/blender.jpg',
            'Gambar web/blender miyako putih.jpg'
        ],
        specs: {
            'Merek': 'MIYAKO',
            'Garansi': '2 Tahun',
            'Kapasitas': '1,5 LITER',
            'Daya': '300 Watt'
        }
    },
    {
        id: 9,
        name: 'KULKAS POLYTRON BELEZA',
        description: 'Dengan pembekuan cepat, Suhu pendinginstabil.',
        price: 2079000,
        images: [
            'Gambar web/Kulkas.jpg',
            
        ],
        specs: {
            'Merek': 'POLYTRON',
            'Garansi': '6 Bulan',
            'Daya': '100 Watt',
        }
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        window.location.href = 'products.html';
        return;
    }
    
    const mainImage = document.getElementById('mainImage');
    mainImage.innerHTML = `<img src="${product.images[0]}" alt="${product.name}">`;
    
    const thumbnails = document.getElementById('thumbnails');
    let currentMainImage = product.images[0];
    
    product.images.forEach((img, index) => {
        const thumb = document.createElement('img');
        thumb.src = img;
        thumb.className = `thumbnail ${index === 0 ? 'active' : ''}`;
        thumb.onclick = () => {
            const tempImage = currentMainImage;
            currentMainImage = img;
            mainImage.innerHTML = `<img src="${img}" alt="${product.name}">`;
            thumb.src = tempImage;
            document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
            thumb.classList.add('active');
        };
        thumbnails.appendChild(thumb);
    });
    
    const productInfo = document.getElementById('productInfo');
    let specsHTML = '<ul>';
    for (let key in product.specs) {
        specsHTML += `<li><strong>${key}:</strong> ${product.specs[key]}</li>`;
    }
    specsHTML += '</ul>';
    
    productInfo.innerHTML = `
        <h1>${product.name}</h1>
        <div class="detail-price">Rp. ${product.price.toLocaleString('id-ID')}</div>
        <div class="detail-specs">
            <p><strong>Deskripsi:</strong> ${product.description}</p>
            ${specsHTML}
        </div>
        <div class="detail-actions">
            <a href="products.html" class="btn btn-secondary">Kembali ke Produk</a>
            <button class="btn btn-secondary" onclick="addToCart()">Masukkan Keranjang</button>
            <a href="payment.html?id=${product.id}" class="btn btn-primary">Beli Sekarang</a>
        </div>
    `;
});

function addToCart() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Produk berhasil ditambahkan ke keranjang!');
}

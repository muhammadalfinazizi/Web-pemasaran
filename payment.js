const products = [
    { id: 1, name: 'KIPAS ANGIN LISTRIK', price: 250000 },
    { id: 2, name: 'SPEAKER', price: 2400000 },
    { id: 3, name: 'KOMPOR GAS', price: 350000 },
    { id: 4, name: 'RICE COOKER', price: 125000 },
    { id: 5, name: 'ANTENA TV OUTDOOR', price: 225000 },
    { id: 6, name: 'MESIN CUCI', price: 1500000 },
    { id: 7, name: 'TV POLYTRON', price: 1940000 },
    { id: 8, name: 'PARUTAN KELAPA', price: 270000 },
    { id: 9, name: 'KULKAS POLYTRON BELEZA', price: 3250000 }
];

let orderData = [];

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const cartData = urlParams.get('cart');
    const productId = parseInt(urlParams.get('id'));
    
    if (cartData) {
        orderData = JSON.parse(decodeURIComponent(cartData));
        displayCartSummary(orderData);
    } else if (productId) {
        const product = products.find(p => p.id === productId);
        if (product) {
            orderData = [{ ...product, quantity: 1 }];
            displaySingleProduct(product);
        }
    }
    
    const paymentMethods = document.querySelectorAll('.payment-method');
    paymentMethods.forEach(method => {
        method.addEventListener('click', function() {
            paymentMethods.forEach(m => m.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    const form = document.getElementById('paymentForm');
    form.addEventListener('submit', handleSubmit);
});

function displaySingleProduct(product) {
    const summary = document.getElementById('productSummary');
    summary.innerHTML = `
        <p><strong>Produk:</strong> ${product.name}</p>
        <p><strong>Harga:</strong> Rp. ${product.price.toLocaleString('id-ID')}</p>
    `;
}

function displayCartSummary(cart) {
    const summary = document.getElementById('productSummary');
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    summary.innerHTML = `
        <p><strong>Total Item:</strong> ${cart.reduce((sum, item) => sum + item.quantity, 0)}</p>
        <p><strong>Total Harga:</strong> Rp. ${totalPrice.toLocaleString('id-ID')}</p>
    `;
}

function handleSubmit(e) {
    e.preventDefault();
    
    const name = e.target.querySelector('input[type="text"]').value;
    const phone = e.target.querySelector('input[type="tel"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const paymentMethod = document.querySelector('.payment-method.active').textContent;
    
    const totalPrice = orderData.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    const productList = orderData.map(item => 
        `${item.name} (${item.quantity}x) - Rp. ${(item.price * item.quantity).toLocaleString('id-ID')}`
    ).join('%0A');
    
    // ⚠️ PENTING: Ganti nomor WhatsApp dan email di bawah ini dengan nomor dan email admin Anda
    // Format nomor WA: 62 (kode negara) + nomor tanpa 0 di depan
    // Contoh: 089563986225 menjadi 6289563986225
    const adminWhatsApp = '+6281336206262'; // 👈 GANTI DENGAN NOMOR ADMIN ANDA
    const adminEmail = 'info@musicajaya.com'; // 👈 GANTI DENGAN EMAIL ADMIN ANDA
    
    const waMessage = `Halo, saya ingin melakukan pemesanan:%0A%0A` +
        `*Detail Pembeli:*%0ANama: ${name}%0ATelepon: ${phone}%0AEmail: ${email}%0A%0A` +
        `*Detail Pesanan:*%0A${productList}%0A%0A` +
        `*Total: Rp. ${totalPrice.toLocaleString('id-ID')}*%0A%0A` +
        `Metode Pembayaran: ${paymentMethod}`;
    
    const emailSubject = 'Pemesanan Produk - MUSICA JAYA ELEKTRONIK';
    const emailBody = `Halo,%0A%0ASaya ingin melakukan pemesanan dengan detail sebagai berikut:%0A%0A` +
        `Detail Pembeli:%0ANama: ${name}%0ATelepon: ${phone}%0AEmail: ${email}%0A%0A` +
        `Detail Pesanan:%0A${productList.replace(/%0A/g, '%0A')}%0A%0A` +
        `Total: Rp. ${totalPrice.toLocaleString('id-ID')}%0A%0A` +
        `Metode Pembayaran: ${paymentMethod}%0A%0A` +
        `Mohon konfirmasi pemesanan ini. Terima kasih.`;
    
    // Kirim ke WhatsApp dan Email
    window.open(`https://wa.me/${adminWhatsApp}?text=${waMessage}`, '_blank');
    window.open(`mailto:${adminEmail}?subject=${emailSubject}&body=${emailBody}`, '_blank');
    
    // Hapus cart jika pembelian dari keranjang
    if (orderData.length > 1) {
        localStorage.removeItem('cart');
    }
    
    setTimeout(() => {
        alert('Terima kasih! Pesanan Anda telah dikirim via WhatsApp dan Email. Kami akan segera menghubungi Anda.');
        window.location.href = 'index.html';
    }, 1000);
}

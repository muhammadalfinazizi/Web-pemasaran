const recommendedProducts = [
    {
        id: 1,
        name: 'KIPAS ANGIN LISTRIK',
        price: 250000,
        image: 'Gambar web/kipas angin .jpg'
    },
    {
        id: 2,
        name: 'SPEAKER',
        price: 2849000,
        image: 'Gambar web/spek mer.jpg'
    },
    {
        id: 3,
        name: 'KOMPOR GAS',
        price: 369000,
        image: 'Gambar web/kompor.jpg'
    },
    
   
];

function displayRecommendedProducts() {
    const container = document.getElementById('recommendedProducts');
    if (!container) return;
    
    container.innerHTML = recommendedProducts.map(product => `
        <div class="recommended-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p class="recommended-price">Rp ${product.price.toLocaleString('id-ID')}</p>
            <a href="product-detail.html?id=${product.id}" class="btn btn-primary btn-small">Lihat Detail</a>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', displayRecommendedProducts);
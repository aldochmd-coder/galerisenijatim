// Data lengkap untuk website Galeri Jawa Timur
const JATIM_DATA = {
    pakaian: [
        { name: "Pakaian Adat Kebaya", desc: "Kebaya Jawa Timur memiliki ciri khas desain yang lebih sederhana dan praktis, mencerminkan sifat terbuka dan ramah masyarakat Jawa Timur. Sering dipadukan dengan sarung atau jarik batik.", image: "img/pakaian_kebaya.jpeg" },
        { name: "Pakaian Adat Osing (Banyuwangi)", desc: "Pakaian adat Suku Osing yang khas dengan warna hitam pekat, selendang merah, dan hiasan kepala yang unik, sering disebut sebagai pakaian 'Gandrung' saat digunakan dalam tarian.", image: "img/pakaian_osing.jpeg" },
        { name: "Pakaian Adat Pesaan (Madura)", desc: "Pakaian pria khas Madura yang didominasi warna hitam atau putih dengan luaran baju lurik merah-putih. Dilengkapi dengan kaos garis-garis, celana longgar, dan odheng (ikat kepala) khas.", image: "img/pakaian_pesaan.jpeg" },
        { name: "Pakaian Adat Tengger (Bromo)", desc: "Pakaian adat Suku Tengger yang sederhana, didominasi warna gelap dan kain tenun tradisional, mencerminkan kehidupan yang dekat dengan alam pegunungan dan tradisi Hindu Jawa kuno.", image: "img/pakaian_tengger.jpeg" },
        { name: "Batik Jawa Timuran", desc: "Batik dari Jawa Timur sangat beragam, mulai dari pesisir yang cerah (seperti Sidoarjo dan Madura) hingga pedalaman yang gelap (seperti Kediri dan Tulungagung), dengan motif flora dan fauna yang kaya.", image: "img/pakaian_batik.jpeg" }
    ],
    tari: [
        { name: "Tari Reog Ponorogo", desc: "Salah satu kesenian paling ikonik dari Jawa Timur, menampilkan topeng singa raksasa (Barongan) yang ditarikan oleh seorang penari yang memikulnya di atas kepala, melambangkan kekuatan mistis.", image: "img/tari_reog.jpeg" },
        { name: "Tari Remo", desc: "Tarian pembuka yang sering digunakan untuk menyambut tamu, khas dengan gerakan kaki yang dinamis dan lonceng-lonceng yang terpasang di pergelangan kaki penari, menghasilkan bunyi yang ritmis.", image: "img/tari_remo.jpeg" },
        { name: "Tari Gandrung (Banyuwangi)", desc: "Tarian penyambutan tradisional Suku Osing di Banyuwangi yang biasanya ditarikan oleh penari wanita. Menggambarkan kekaguman masyarakat agraris pada Dewi Sri (Dewi Padi).", image: "img/tari_gandrung.jpeg" },
        { name: "Tari Jaran Kepang", desc: "Kesenian tari kuda lumping yang melibatkan penari menunggangi kuda-kudaan yang terbuat dari bambu. Seringkali menampilkan elemen trance atau kesurupan dalam pertunjukannya.", image: "img/tari_jarankepang.jpeg" },
        { name: "Tari Boran (Lamongan)", desc: "Tarian yang menggambarkan aktivitas penjual nasi boran, makanan khas Lamongan. Menggambarkan perjuangan dan semangat wanita penjual boran yang membawa wadah boran di kepala.", image: "img/tari_boran.jpeg" }
    ],
    makanan: [
        { name: "Rawon", desc: "Sup daging khas Jawa Timur yang memiliki kuah hitam pekat dari biji kluwek. Daging yang empuk dan bumbu rempah yang kuat menjadi ciri khas hidangan legendaris ini.", image: "img/makanan_rawon.jpeg" },
        { name: "Soto Lamongan", desc: "Soto ayam dengan kuah kuning bening, disajikan dengan suwiran ayam, mi soun, telur, dan yang paling khas adalah taburan koya (serbuk kerupuk udang) yang gurih.", image: "img/makanan_soto.jpeg" },
        { name: "Nasi Boran (Lamongan)", desc: "Nasi campur khas Lamongan yang disajikan dengan aneka lauk (seperti bandeng, jeroan, ayam) dan sambal yang pedas, biasanya dijajakan dalam wadah anyaman bambu.", image: "img/makanan_boran.jpeg" },
        { name: "Sate Madura", desc: "Salah satu sate paling terkenal di Indonesia, memiliki bumbu kacang yang kental, manis, dan gurih, disajikan dengan irisan bawang merah mentah.", image: "img/makanan_sate.jpeg" },
        { name: "Lodho Ayam Trenggalek", desc: "Ayam kampung yang dimasak dengan santan kental dan bumbu pedas, disajikan dengan nasi hangat dan bumbu lodeh yang kaya rempah.", image: "img/makanan_lodho.jpeg" },
        { name: "Nasi Tempong (Banyuwangi)", desc: "Nasi yang disajikan dengan sayuran rebus, lauk pauk, dan sambal mentah yang sangat pedas. Nama 'tempong' sendiri berarti tampar, merujuk pada rasa pedasnya yang 'menampar'.", image: "img/makanan_tempong.jpeg" }
    ],
    kerajinan: [
        { name: "Kerajinan Gerabah Dinoyo (Malang)", desc: "Kerajinan gerabah dan keramik dari Dinoyo, Malang, yang terkenal dengan kualitas tanah liatnya yang bagus, menghasilkan berbagai macam peralatan rumah tangga dan hiasan.", image: "img/kerajinan_gerabah.jpeg" },
        { name: "Topeng Malangan", desc: "Topeng kayu yang dibuat di daerah Malang Raya, memiliki bentuk yang ekspresif dan warna-warna cerah. Digunakan dalam pertunjukan Tari Topeng Malangan.", image: "img/kerajinan_topeng.jpeg" },
        { name: "Kerajinan Batik Tulis", desc: "Batik tulis dari Jawa Timur yang beragam motifnya, dari motif parang, kawung, hingga motif khas daerah seperti motif Ikan dari Sidoarjo dan motif Gajah Mada dari Mojokerto.", image: "img/kerajinan_batik.jpeg" },
        { name: "Kerajinan Bambu", desc: "Berbagai macam kerajinan tangan dari bambu, mulai dari anyaman, mebel, hingga alat musik tradisional. Merupakan warisan budaya yang memanfaatkan kekayaan alam lokal.", image: "img/kerajinan_bambu.jpeg" }
    ]
};

// Fungsi 1: Menampilkan 4 Kategori Utama di exhibition.html
function loadExhibitionContent() {
    const pageContainer = document.querySelector('.exploration-page');
    if (!pageContainer) return;
    
    // Ini yang membuat 4 kartu utama (Pakaian, Tari, Makanan, Kerajinan)
    const content = `
        <div class="category-grid">
            <a href="category.html?category=pakaian" class="category-card pakaian">
                <div class="card-overlay">
                    <h3>Pakaian Adat</h3>
                    <p>Busana tradisional dan Filosofinya.</p>
                </div>
            </a>
            <a href="category.html?category=tari" class="category-card tari">
                <div class="card-overlay">
                    <h3>Seni Tari</h3>
                    <p>Dinamika gerak dan Pertunjukan Daerah.</p>
                </div>
            </a>
            <a href="category.html?category=makanan" class="category-card makanan">
                <div class="card-overlay">
                    <h3>Kuliner Khas</h3>
                    <p>Cita rasa lokal yang melegenda.</p>
                </div>
            </a>
            <a href="category.html?category=kerajinan" class="category-card kerajinan">
                <div class="card-overlay">
                    <h3>Kerajinan Tangan</h3>
                    <p>Batik, ukiran, dan benda pusaka.</p>
                </div>
            </a>
        </div>
    `;

    pageContainer.insertAdjacentHTML('beforeend', content);
}

// Fungsi 2: Menampilkan Daftar Item di category.html
function loadCategoryList() {
    const pageContainer = document.querySelector('.category-list-page');
    if (!pageContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    
    if (!category || !JATIM_DATA[category]) {
        pageContainer.innerHTML = '<h2>Kategori Tidak Ditemukan</h2>';
        return;
    }

    const categoryData = JATIM_DATA[category];
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

    const content = `
        <a href="exhibition.html" class="back-link">← Kembali ke Kategori</a>
        <h2>Daftar Item: ${categoryName} Jawa Timur</h2>
        <p>Jelajahi semua item yang tersedia dalam kategori ini.</p>
        <div class="item-grid-list">
            ${categoryData.map(item => `
                <a href="detail-item.html?category=${category}&item=${encodeURIComponent(item.name)}" class="list-item-card">
                    <img src="${item.image}" alt="${item.name}">
                    <div class="list-item-info">
                        <h3>${item.name}</h3>
                        <p>${item.desc.substring(0, 100)}...</p>
                    </div>
                </a>
            `).join('')}
        </div>
    `;
    pageContainer.innerHTML = content;
}


// Fungsi 3: Menampilkan Detail Item di detail-item.html
function loadDetailContent() {
    const pageContainer = document.querySelector('.detail-page');
    if (!pageContainer) return;

    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const itemName = urlParams.get('item');

    if (!category || !itemName || !JATIM_DATA[category]) {
        pageContainer.innerHTML = `
            <a href="exhibition.html" class="back-link">← Kembali ke Eksplorasi</a>
            <div class="item-block">
                <h2>Data Tidak Ditemukan</h2>
                <p>Silakan kembali ke halaman Eksplorasi untuk memilih item.</p>
            </div>
        `;
        return;
    }

    const itemData = JATIM_DATA[category].find(item => item.name === itemName);

    if (!itemData) {
        pageContainer.innerHTML = `
            <a href="exhibition.html" class="back-link">← Kembali ke Eksplorasi</a>
            <div class="item-block">
                <h2>Item Tidak Ditemukan</h2>
                <p>Item yang Anda cari tidak ada dalam kategori ini.</p>
            </div>
        `;
        return;
    }

    pageContainer.innerHTML = `
        <a href="category.html?category=${category}" class="back-link">← Kembali ke Daftar</a>
        <div class="item-block">
            <h2>${itemData.name}</h2>
            <img src="${itemData.image}" alt="${itemData.name}" class="detail-image-block">
            
            <h3>Deskripsi dan Filosofi</h3>
            <p>${itemData.desc}</p>
        </div>
    `;
}

// Menentukan fungsi mana yang harus dijalankan
document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.exploration-page')) {
        loadExhibitionContent(); 
    }
    if (document.querySelector('.category-list-page')) {
        loadCategoryList(); 
    }
    if (document.querySelector('.detail-page')) {
        loadDetailContent();
    }
});
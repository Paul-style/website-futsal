// Menangani pengiriman form
document.getElementById('rekrut-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Menghindari form reload halaman

    // Ambil data dari form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const skill = document.getElementById('skill').value;
    const message = document.getElementById('message').value; // Pesan
    const date = new Date().toLocaleString(); // Menambahkan tanggal pendaftaran

    // Menyimpan data pendaftaran ke dalam array
    const peserta = {
        name: name,
        email: email,
        phone: phone,
        skill: skill,
        message: message, // Menyimpan pesan
        date: date // Menyimpan tanggal pendaftaran
    };

    // Ambil daftar peserta yang sudah ada dari localStorage
    let pesertaList = JSON.parse(localStorage.getItem('pesertaList')) || [];

    // Tambahkan peserta baru ke dalam daftar
    pesertaList.push(peserta);

    // Simpan kembali daftar peserta ke localStorage
    localStorage.setItem('pesertaList', JSON.stringify(pesertaList));

    // Menampilkan daftar peserta terbaru
    tampilkanPeserta();

    // Tampilkan halaman konfirmasi
    document.getElementById('form-section').style.display = 'none';
    document.getElementById('confirmation-section').style.display = 'block';
});

// Fungsi untuk menampilkan daftar peserta
function tampilkanPeserta() {
    const pesertaList = JSON.parse(localStorage.getItem('pesertaList')) || [];
    const pesertaListElement = document.getElementById('peserta-list');
    pesertaListElement.innerHTML = ''; // Kosongkan daftar peserta sebelumnya

    pesertaList.forEach((peserta, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${peserta.name}</strong><br>
            Email: ${peserta.email}<br>
            Telepon: ${peserta.phone}<br>
            Keahlian: ${peserta.skill}<br>
            <strong>Pesan:</strong><br>
            ${peserta.message || 'Tidak ada pesan.'}<br>
            <strong>Tanggal Pendaftaran:</strong> ${peserta.date}<br>
            <button onclick="hapusPeserta(${index})">Hapus</button> <!-- Tombol hapus -->
        `;
        pesertaListElement.appendChild(li);
    });
}

// Fungsi untuk menghapus peserta
function hapusPeserta(index) {
    // Ambil daftar peserta yang sudah ada dari localStorage
    let pesertaList = JSON.parse(localStorage.getItem('pesertaList')) || [];

    // Hapus peserta berdasarkan index
    pesertaList.splice(index, 1);

    // Simpan kembali daftar peserta ke localStorage
    localStorage.setItem('pesertaList', JSON.stringify(pesertaList));

    // Menampilkan daftar peserta setelah penghapusan
    tampilkanPeserta();
}

// Menampilkan daftar peserta saat pertama kali membuka halaman
tampilkanPeserta();
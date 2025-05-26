// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    const klasemen = [
        { posisi: 1, tim: 'Tim A', poin: 6 },
        { posisi: 2, tim: 'Tim B', poin: 3 },
        { posisi: 3, tim: 'Tim C', poin: 1 }
    ];

    function updateKlasemen() {
        const tabelKlasemen = document.getElementById('tabel-klasemen');
        tabelKlasemen.innerHTML = `
            <tr>
                <th>Posisi</th>
                <th>Tim</th>
                <th>Poin</th>
            </tr>
        `;
        
        klasemen.forEach(klasemenItem => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${klasemenItem.posisi}</td>
                <td>${klasemenItem.tim}</td>
                <td>${klasemenItem.poin}</td>
            `;
            tabelKlasemen.appendChild(row);
        });
    }

    updateKlasemen();

    // Untuk mengupdate klasemen setelah pertandingan
    setTimeout(() => {
        klasemen[1].poin += 3; // Tim B menang
        updateKlasemen();
    }, 5000); // Update klasemen setelah 5 detik
});pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
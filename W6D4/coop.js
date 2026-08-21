let stokKoperasi = [
  "Buku Tulis",
  "Pulpen",
  "Pensil",
  "Perahu",
  "Tipe-X",
  "Penggaris",
  "Tisu",
];

console.log("Stok awal koperasi:");
console.log(stokKoperasi);

console.log("Add 2 Item");
stokKoperasi.push("Stabilo");
stokKoperasi.push("Jangka");
console.log("Stok Baru Koperasi:");
console.log(stokKoperasi);
console.log("");

console.log("Promo");
stokKoperasi.unshift("Kertas HVS");
console.log("Stok setelah promo:");
console.log(stokKoperasi);
console.log("");

const barangDisplayHabis = stokKoperasi.shift();
console.log(
  `Barang paling pertama terjual habis: "${barangDisplayHabis}" (shift)`,
);
console.log("Stok setelah penghapusan barang pertama:");
console.log(stokKoperasi);
console.log("");

const barangRusak = stokKoperasi.pop();
console.log(`Barang rusak di return: "${barangRusak}" (pop)`);
console.log("Stok setelah di return:");
console.log(stokKoperasi);
console.log("");

console.log("Kesalahan ditemukan pada posisi ke-4");
console.log(`Barang lama: "${stokKoperasi[3]}" → Barang baru: "Penghapus"`);
stokKoperasi.splice(3, 1, "Penghapus");
console.log("Stok (fixed):");
console.log(stokKoperasi);
console.log("");

stokKoperasi.splice(3, 0, "C4");
console.log("Stok barang:");
console.log(stokKoperasi);
console.log("");

console.log("Mencari ketersediaan 'Sabun Mandi'...");
if (stokKoperasi.includes("Sabun Mandi")) {
  console.log("Hasil: Sabun Mandi - Tersedia");
} else {
  console.log("Hasil: Sabun Mandi - Tidak tersedia");
}
console.log("");

console.log("Mencari posisi 'Pulpen' di dalam array...");
const posisiPulpen = stokKoperasi.indexOf("Pulpen");
if (posisiPulpen !== -1) {
  console.log(
    `Hasil: Pulpen ditemukan di posisi ke-${posisiPulpen + 1} (index ${posisiPulpen})`,
  );
} else {
  console.log("Hasil: Barang tidak ditemukan di rak");
}
console.log("");

console.log("Mengambil 3 barang teratas untuk laporan mingguan (slice)...");
const laporanMingguan = stokKoperasi.slice(0, 3);
console.log("Laporan mingguan (3 barang teratas):");
console.log(laporanMingguan);
console.log(
  "Catatan: Array asli stokKoperasi tidak berubah (slice non-mutating)",
);
console.log("Stok koperasi masih tetap:");
console.log(stokKoperasi);
console.log("");

console.log("Daftar seluruh barang di stok koperasi:");
for (let i = 0; i < stokKoperasi.length; i++) {
  console.log(`${i + 1}. ${stokKoperasi[i]}`);
}
console.log(`Total barang di stok: ${stokKoperasi.length} item`);
console.log("");

const stokTerbalik = [...stokKoperasi];
stokTerbalik.reverse();
console.log("Stok dengan urutan dari belakang):");
for (let i = 0; i < stokTerbalik.length; i++) {
  console.log(`${i + 1}. ${stokTerbalik[i]}`);
}
console.log("");

const daftarBelanja = stokKoperasi.join(" → ");
console.log("Daftar belanja (format terurut):");
console.log(daftarBelanja);
console.log("");

const daftarBelanjaFormat =
  "DAFTAR STOK KOPERASI:\n" +
  stokKoperasi.map((barang, index) => `${index + 1}. ${barang}`).join("\n");
console.log(daftarBelanjaFormat);
console.log("");

console.log("Verifikasi: Stok koperasi asli tetap tidak berubah:");
console.log(stokKoperasi);
console.log("");

console.log("=== GAME CLEAR ===");

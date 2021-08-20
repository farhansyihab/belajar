/**
 * Contoh function declaration
 */
function tampilPesan(nama) {
    console.log(`Halo ${nama}`)
}

tampilPesan('Farhan');

/**
 * Contoh function expression
 */
const sampaikanSalam = function(nama, waktu) {
    console.log(`Halo ${nama}, selamat ${waktu}`)
}
sampaikanSalam('Farhan', 'pagi');

/**
 * contoh Arrow Function
 */
 const ucapkanSalam = (nama, waktu) => console.log(`Halo ${nama}, selamat ${waktu}`) ;
 ucapkanSalam('Haidar', 'pagi')

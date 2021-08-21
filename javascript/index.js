/**
 * Buka http://pythontutor.com/javascript.html#mode=edit
 * masukkan code dibawah ini
 * dan pelajari step by step eksekusinya
 */
function a(){
    console.log('ini adalah function a()');
    var nama = 'Farhan';
    var umur = 48;
    console.log(sayHello());
    function sayHello() {
        return `Hallo nama saya ${nama}, umur saya ${umur} tahun`;
    }

    function b(){
        console.log('ini adalah function b()');

        function c() {
            console.log('ini adalah function c()');
        }
        c();
    }
    b();
}
a();

/**
 * Contoh Closure
 */
function ucapkanSalam(waktu) {
    return function(nama) {
        console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan`);
    }
}

let selamatPagi = ucapkanSalam('pagi');
let selamatSiang = ucapkanSalam('siang');
let selamatMalam = ucapkanSalam('malam');

console.dir(selamatMalam);
selamatPagi('Farhan');

/**
 * Higher Order Function
 */
const pengulangan = (mulai, n, aksi) => {
    for (let i= mulai; i < n; i++) {
        let hitung = mulai * i;
        aksi(hitung)
    }
}

pengulangan(2, 10, console.log)
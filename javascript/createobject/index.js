/** 1. Object Literal */
const Mahasiswa = {
    nama: 'Farhan',
    Umur: 48,
    energi: 10,
    makan: function(porsi) {
        this.energi += porsi ;
        console.log(`Selamat makan ${this.nama}`)
    }
}

/** 2. Function Declaration */
function Person (nama, umur, energi) {
    let person = {};
    person.nama = nama;
    person.umur = umur;
    person.energi = energi;

    person.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, energi Anda sekarang ${this.energi}`)
    }
    return person;
}

const Farhan = Person('Farhan', 48, 12);
Farhan.makan(22);

/** 3. Constructor Function */
function Manusia (nama, umur, energi) {
    this.nama = nama;
    this.umur = umur;
    this.energi = energi;

    this.makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, energi Anda sekarang ${this.energi}`)
    }

    this.main = function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, energi Anda sekarang ${this.energi}`)
    }
}

const Haidar = new Manusia('Haidar', 8, 12);
Haidar.makan(22);
Haidar.main(3);

/** 4. Menggunakan Class */
class Pelajar {
    constructor(nama, umur, energi){
        this.nama = nama;
        this.umur = umur;
        this.energi = energi;
    }

    makan = function (porsi) {
        this.energi += porsi;
        console.log(`Halo ${this.nama}, energi Anda sekarang ${this.energi}`)
    }

    main = function(jam) {
        this.energi -= jam;
        console.log(`Halo ${this.nama}, energi Anda sekarang ${this.energi}`)
    }

    tidur = (jam) => {
        this.energi += jam * 2;
        console.log(`Halo ${this.nama}, energi Anda sekarang ${this.energi}`)
    }
}

const Sukainah = new Pelajar('Sukainah', 8, 10);
Sukainah.makan(22);
Sukainah.main(3);
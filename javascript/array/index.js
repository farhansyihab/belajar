/**
 * contoh concat
 */
const anakSD = ['Haidar', 'Sukainah', 'Zen'];
const anakTK = ['Enab', 'Ali'];
const semuaAnak = anakSD.concat(anakTK);
document.getElementById('resultconcat').innerHTML = semuaAnak;

/**
 * contoh constructor
 */
const listBuah = ['apel', 'ceri', 'duku', 'jambu', 'mangga'];
const test = listBuah.constructor; // Returns function Array() { [native code] }
document.getElementById('resultconstructor').innerHTML = test;

/**
 * contoh copyWithin
 */
 const buah = ['apel', 'bangkoang', 'ceri', 'duku', 'jambu', 'kedongdong', 'mangga', 'nanas' ];
 const hasilCopyWithin = buah.copyWithin(2, 0);
 document.getElementById('resultcopywithin').innerHTML = hasilCopyWithin;

 /**
  * contoh entries
  */
  const hasilentries = buah.entries();
  
  for (let hasilAkhir of hasilentries) {
    document.getElementById("resultentries").innerHTML += hasilAkhir + "<br>";
  }

/**
 * contoh every()
 */
    const bilangan = [3, 5, 7, 9, 20] ;
    const usia = [30, 34, 38, 40, 54];

    const cekBilangan = (angka) => angka > 2 //Cek apakah angka diatas 2
    const cekUsia = (umur) => umur > 32 ; //Cek apakah usia diatas 32
    
    const pengecekanBilangan = bilangan.every(cekBilangan); //Cek apakah semua bilangan diatas 2
    const pengecekanUsia = usia.every(cekUsia); //Cek apakah semua usia diatas 32

    const hasilEvery = `Apakah semua bilangan diatas 2 ? : ${pengecekanBilangan}, dan apakah semua usia diatas 32 ? :  ${pengecekanUsia}`;
    document.getElementById('resultevery').innerHTML = hasilEvery;

/**
 * Contoh fill()
 */
   const hasilFill = buah.fill("Kiwi",2,4);
   document.getElementById('resultfill').innerHTML = hasilFill;

/**
 * contoh array.filter()
 */
const contohArrFilter = function () {
    const bilangan = [2, 4, 3, 5, 1, 9, 7, 8];
    return bilangan.filter(angka => angka > 4);
}
document.getElementById('resultfilter').innerHTML = contohArrFilter();

/**
 * contoh array.find()
 */
const contohFind = function() {
    const buah = ['apel', 'bangkoang', 'ceri', 'duku', 'jambu', 'kedongdong', 'mangga', 'nanas' ];
    const buahDicari = 'kedongdong'
    const cariBuah = buah.find((fruit) => fruit === buahDicari);
    return `Ternyata buah ${buahDicari} ${cariBuah ? 'ada': 'tak ada'} pada list array`;
}
document.getElementById('resultfind').innerHTML = contohFind();
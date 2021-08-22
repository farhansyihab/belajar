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

/**
 * contoh array.findIndex()
 */
const contohFindIndex = function() {
  const buah = ['apel', 'bangkoang', 'ceri', 'duku', 'jambu', 'kedongdong', 'mangga', 'nanas' ];
  const buahDicari = 'jambu'
  const cariBuah = buah.findIndex((fruit) => fruit === buahDicari);
  return `Ternyata buah ${buahDicari} ${cariBuah>0 ? 'ada': 'tak ada'} pada list array, pada index ke: ${cariBuah}`;
}
document.getElementById('resultfindindex').innerHTML = contohFindIndex();


/**
 * contoh forEach()
 */
const contohforeach = function() {
  const buah = ['apel', 'bangkoang', 'ceri', 'duku', 'jambu', 'kedongdong', 'mangga', 'nanas' ];
  let elemenli = ''
  const buatElement = buah.forEach((fruit, index) => {
      elemenli += `<li>index ke:${index}: ${fruit}</li>`
  });
  return `<ol>${elemenli}</ol>`;
}
document.getElementById('resultforeach').innerHTML = contohforeach();

/**
 * contoh from()
 */
const contohfrom = function() {
  return Array.from(arguments);
}
const arrayBuah = contohfrom('apel','bangkoang','ceri','duku','jambu','kedongdong','mangga','nanas');
document.getElementById('resultfrom').innerHTML = arrayBuah;

/**
 * contoh includes()
 */
const contohIncludes = function() {
  const buah = ['apel', 'bangkoang', 'ceri', 'duku', 'jambu', 'kedongdong', 'mangga', 'nanas' ];
  const namaBuah = 'ceri';
  const cekBuah = buah.includes(namaBuah); // --> cek apakah ada ceri termasuk dalam array buah ?
  return `Ternyata ${namaBuah} ${cekBuah ? 'ada' : 'tak ada'} dalam array`
}
document.getElementById('resultincludes').innerHTML = contohIncludes();

/**
 * contoh indexOf()
 */
const contohindexof = function() {
  const buah = ['apel', 'bangkoang', 'ceri', 'duku', 'jambu', 'kedongdong', 'mangga', 'nanas' ];
  const namaBuah = 'ceri';
  const cekBuah = buah.indexOf(namaBuah); // --> cek apakah ada ceri termasuk dalam array buah ?
  return `Ternyata ${namaBuah} ${cekBuah>=0 ? 'ada dalam array dan ada pada index-ke'+cekBuah : 'tak ada dalam array'} `
}
document.getElementById('resultindexof').innerHTML = contohindexof();

/**
 * contoh isArray()
 */
 const contohisarray= function() {
  const buah = ['apel', 'bangkoang', 'ceri', 'duku', 'jambu', 'kedongdong', 'mangga', 'nanas' ];
  const cekBuah = Array.isArray(buah); // --> cek apakah variable buah berisi array ?
  return `Ternyata variable 'buah' ${cekBuah ? 'adalah array' : 'bukan array'} `
}
document.getElementById('resultisarray').innerHTML = contohisarray();

/**
 * contoh join()
 */
const contohjoin = () => {
  const arrBuah = ['apel', 'bangkoang', 'ceri', 'duku', 'jambu', 'kedongdong', 'mangga', 'nanas' ];
  const strBuah = arrBuah.join(); // --> Return  'apel', 'bangkoang', 'ceri', 'duku', 'jambu', 'kedongdong', 'mangga', 'nanas'
  return strBuah
}
document.getElementById('resultjoin').innerHTML = contohjoin();

/**
 * contoh keys()
 */
const contohkeys = () => {
  const arrBuah = ['apel', 'bangkoang', 'ceri', 'duku', 'jambu', 'kedongdong', 'mangga', 'nanas' ];
  const keysBuah = arrBuah.keys();
  let indexBuah = [];
  for (const k of keysBuah) {
    indexBuah.push(k);
  }
  return indexBuah.join();
}
document.getElementById('resultkeys').innerHTML = contohkeys();

/**
 * contoh map()
 */
const contohmap = () => {
  const arrBuah = [{
          asal: 'local',
          buah:['bangkoang', 'ceri', 'duku', 'jambu', 'kedongdong', 'mangga', 'nanas', 'rambutan']
      },{
          asal: 'luar',
          buah:['apel', 'anggur', 'kurma']
      }];
  const mapBuah = arrBuah.filter(item => item.asal === 'local').map((item) => item.buah);
  console.dir(mapBuah)
  return mapBuah
}
document.getElementById('resultmap').innerHTML = contohmap();

/**
 * contoh reduce()
 */
const contohreduce = () => {
  const arrBuah = [{
          asal: 'local',
          buah:['bangkoang', 'ceri', 'duku', 'jambu', 'kedongdong', 'mangga', 'nanas', 'rambutan']
      },{
          asal: 'luar',
          buah:['apel', 'anggur', 'kurma']
      }];
      const mapReduce = arrBuah.map((item) => item.buah).reduce((accumulator, value) => [...accumulator, ...value])
  return mapReduce
}
let elemenli = ''
const arrayFruits = contohreduce();
const buatElement = arrayFruits.forEach((fruit, index) => elemenli += `<li>index ke:${index}: ${fruit}</li>`);
document.getElementById('resultreduce').innerHTML = `<ol>${elemenli}</ol>`;
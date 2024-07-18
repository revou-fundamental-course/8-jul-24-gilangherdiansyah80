// Set Variable for DOM
const cardForm = document.querySelector('.card-form');
const form = document.querySelector('form');
const footer = document.querySelector('footer');
const cardHasil = document.querySelector('.card-hasil');
const textMarquee = document.querySelector('.text-marquee');
const weight = document.querySelector('.weight');
const validationWeight = document.querySelector('.validationWeight');
const age = document.querySelector('.age');
const validationAge = document.querySelector('.validationAge');
const height = document.querySelector('.height');
const validationHeight = document.querySelector('.validationHeight');
const male = document.querySelector('.male');
const female = document.querySelector('.female');
const validationGander = document.querySelector('.validationGander');
const errorInput = document.querySelector('.error');
const result = document.querySelector('.resultBmi');
const messageResult = document.querySelector('.messageResult');
const descResult = document.querySelector('.descResult');
const articleResult = document.querySelector('.article-result');
const diseaseResult = document.querySelector('.penyakit');

// Start for Set Interval
const interval = setInterval(() => {
    cardForm.style.display = 'flex';
    footer.style.display = 'block';
}, 3000);
// End for Set Interval

// Start Event Listener for Submit Form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (weight.value !== '' && age.value !== '' && height.value !== '' && (male.checked || female.checked)) {
        cardForm.style.display = 'none';
        cardHasil.style.display = 'flex';
        clearInterval(interval);
        textMarquee.innerText = 'Hasil Perhitungan Kalkulator BMI';
        result.innerText = calculateBMI();
        validationBmi();
    } else {
        if (weight.value === '') {
            validationWeight.innerHTML = 'Mohon Input Berat Badan!';
            validationAge.innerHTML = '';
            validationHeight.innerHTML = '';
        } else if (age.value === '') {
            validationAge.innerHTML = 'Mohon Input Usia!';
            validationWeight.innerHTML = '';
            validationHeight.innerHTML = '';
        } else if (height.value === '') {
            validationHeight.innerHTML = 'Mohon Input Tinggi Badan!';
            validationWeight.innerHTML = '';
            validationAge.innerHTML = '';
        } else if (male.checked === false && female.checked === false) {
            validationGander.innerHTML = 'Mohon Pilih Jenis Kelamin!';
        }
    }
});
// End Event Listener for Submit Form

// Start Function for Calculate BMI
const calculateBMI = () => {
    return Math.round(weight.value / Math.pow(height.value / 100, 2));
};
// End Function for Calculate BMI

// Start Function for Validation
const validationBmi = () => {
    const bmi = calculateBMI();
    if (bmi < 18.5) {
        messageResult.innerText = 'Kekurangan Berat Badan';
        descResult.innerText = 'Hasil BMI kurang dari sama dengan 18.5';
        articleResult.innerText = 'Anda berada dalam kategori underweight atau kekurangan berat badan. Cara terbaik untuk menambah berat badan adalah dengan mengonsumsi makanan bergizi yang mengandung cukup kalori dan nutrisi, serta melakukan latihan kekuatan untuk membangun otot. Jika BMI Anda berada dalam kategori ini, Anda dianjurkan untuk menambah berat badan hingga mencapai batas normal.';
        diseaseResult.innerHTML = `
            <p>Malnutrisi</p>
            <p>Osteoporosis</p>
            <p>Sistem Imun Lemah</p> 
            <p>Amenorea</p>
        `
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        messageResult.innerText = 'Normal (Ideal)';
        descResult.innerText = 'Hasil BMI diantara 18.5 sampai 24.9';
        articleResult.innerText = 'Anda berada dalam kategori normal atau berat badan ideal. Untuk mempertahankan berat badan yang sehat, penting untuk menjaga pola makan yang seimbang dan rutin berolahraga. Jika BMI Anda berada dalam kategori ini, Anda dianjurkan untuk terus menjaga gaya hidup sehat ini agar tetap berada dalam batas normal.';
        diseaseResult.innerHTML = `
            <p>Penyakit Jantung</p>
            <p>Diabetes Tipe 2</p>
            <p>Hipertensi</p> 
            <p>Kolesterol Tinggi</p>
        `
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        messageResult.innerText = 'Kelebihan Berat Badan';
        descResult.innerText = 'Hasil BMI diantara 25.0 sampai 29.9';
        articleResult.innerText = 'Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga secara teratur. Jika BMI Anda berada dalam kategori ini, Anda dianjurkan untuk menurunkan berat badan hingga batas normal.';
        diseaseResult.innerHTML = `
            <p>Diabetes Tipe 2</p>
            <p>Hipertensi</p>
            <p>Osteoarthritis</p> 
            <p>Sleep Apnea</p>
        `
    } else if (bmi >= 30) {
        messageResult.innerText = 'Kegemukan (Obesitas)';
        descResult.innerText = 'Hasil BMI lebih dari sama dengan 30';
        articleResult.innerText = 'Anda berada dalam kategori obesity atau kegemukan. Penting untuk mengambil langkah-langkah serius untuk menurunkan berat badan guna mengurangi risiko kesehatan yang terkait dengan obesitas. Mengatur pola makan yang seimbang dan meningkatkan aktivitas fisik adalah kunci utama. Jika BMI Anda berada dalam kategori ini, Anda sangat dianjurkan untuk menurunkan berat badan hingga mencapai batas normal.';
        diseaseResult.innerHTML = `
            <p>Diabetes</p>
            <p>Hipertensi</p>
            <p>Osteoarthritis</p> 
            <p>Penyakit jantung</p>
        `
    }
};
// End Function for Validation

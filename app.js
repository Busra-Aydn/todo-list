const redInput = document.getElementById('red')
const greenInput = document.getElementById('green')
const blueInput = document.getElementById('blue')

const inputs = document.querySelectorAll('input[type="range"]')
inputs.forEach(input => input.addEventListener('input',changeBodyColor))

function changeBodyColor() {
    document.body.style.backgroundColor = `rgb(${redInput.value}, ${greenInput.value},${blueInput.value})`
}

//BUNLARI DAHA DA KISALTABILIRIZ
// redInput.addEventListener('input' , e => {
//     document.body.style.backgroundColor = `rgb(${e.target.value}, ${greenInput.value} ,${blueInput.value})`
// })



// greenInput .addEventListener('input' , e => {
//     document.body.style.backgroundColor = `rgb(${e.target.value}, ${redInput.value} ,${blueInput.value})`
// })


// blueInput.addEventListener('input' , e => {
//     document.body.style.backgroundColor = `rgb(${e.target.value}, ${redInput.value} ,${greenInput.value})`
// })

















//RASTGELE RENK URETME UYGULAMASI 
// const button = document.querySelector("#generate-color-btn")

// //rastgele sayi uretme fonksiyonu 0 ile 255 arasında sayı uretecegiz çünkü en büyük rgb kodu 255
// const generateRandomNumber = (maxNumber) => {
//     return Math.floor(Math.random() * (maxNumber + 1))
// }

// //rastgele renk uretelim burada maxNumber ın degerini giriyoruz 
// function generateRGBColor() {
//     return[
//         generateRandomNumber(255),
//         generateRandomNumber(255),
//         generateRandomNumber(255),
//     ]
// }

// //button a event ekliyoruz
// button.addEventListener('click',()=>{
//      document.body.style.backgroundColor = `rgb(${generateRGBColor().join(', ')})`
// })
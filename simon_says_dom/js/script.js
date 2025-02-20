
// start first phase set up
let timerEl = document.getElementById("countdown")
const instEl = document.getElementById("instructions")
const startbtnEl = document.getElementById("buttonstart")

// 1 showing the generated numbers * 5
const rndNumbersEl = document.getElementById("numbers-list")
const randomNumberEl = document.getElementById("rndnumb")

// 2 numbers disappear and user input appears
const formEl = document.getElementById("answers-form")
const userNmbEl = document.getElementById("number")
const confirmbtnEl = document.getElementById("confirmbtn") // this button will activate results



//Start

startbtnEl.addEventListener('click', function (event) {

    //make instruction disappear
    instEl.classList.add('d-none');
    startbtnEl.classList.add('d-none')

    //setting a count doUn
    let time = 30;

    setInterval(function () {

        timerEl.innerText = time--;
        if (time === 9) {
            timerEl.classList.add('bg-warning', 'rounded')
        } else if (time === -2) {
            timerEl.classList.add('d-none')
        }
    }, 1000)


    // add radom numbers how? 
    randomNumberEl.innerText = Math.floor(Math.random() * 10) + 1;



})









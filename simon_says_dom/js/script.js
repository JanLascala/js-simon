
// start first phase set up
let timerEl = document.getElementById("countdown")
const instEl = document.getElementById("instructions")
const startbtnEl = document.getElementById("buttonstart")

// 1 showing the generated numbers * 5
const rndNumbersEl = document.getElementById("numbers-list")
const randomNumberEl1 = document.getElementById("rndnumb1")
const randomNumberEl2 = document.getElementById("rndnumb2")
const randomNumberEl3 = document.getElementById("rndnumb3")
const randomNumberEl4 = document.getElementById("rndnumb4")
const randomNumberEl5 = document.getElementById("rndnumb5")

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
    let time = 11;



    const clock = setInterval(function () {

        timerEl.innerText = time--;
        if (time === 9) {
            timerEl.classList.add('bg-warning', 'rounded')
        } else if (time === -1) {
            timerEl.classList.add('d-none')
            clearInterval(clock)
            rndNumbersEl.classList.add('d-none')
            formEl.classList.remove('d-none')
        }
    }, 1000)


    // add radom numbers how?- primitive and obtuse solution but solution nonetheless 
    randomNumberEl1.innerText = randomNumbers()
    console.log(randomNumberEl1)
    randomNumberEl2.innerText = randomNumbers()
    console.log(randomNumberEl2)
    randomNumberEl3.innerText = randomNumbers()
    console.log(randomNumberEl3)
    randomNumberEl4.innerText = randomNumbers()
    console.log(randomNumberEl4)
    randomNumberEl5.innerText = randomNumbers()
    console.log(randomNumberEl5)






})

function randomNumbers() {

    return Math.floor(Math.random() * 50) + 1

}






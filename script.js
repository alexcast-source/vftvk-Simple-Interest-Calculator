const rate = document.querySelector("#rate")
const amount = document.querySelector("#principal")
const rateValue = document.querySelector("#rateNumber")
const years = document.querySelector("#years")
const btn = document.querySelector("#calculate")
const square = document.querySelector(".square")

const footer = document.querySelector('footer')

const btnEvent = btn.addEventListener("click", () => {
    const amountValue = Number(amount.value)
    if (amountValue <= 0) {
        alert("You need to provide a positive number here!")
        amount.focus()
        return
    }
    const rateValue = Number(rate.value)
    const numYears = Number(years.value)
    const interest = amountValue * rateValue / 100 * numYears
    console.log(interest)

    const newDiv = document.createElement('div')
    const htmlContent = `<div> If you deposit  <mark>${amountValue} </mark>$, <br> at an interest rate of <mark>${rateValue}% </mark>,<br> you will receive an amount of  <mark>${interest}</mark>, <br> in the year <mark>${2021 + numYears}</mark>. </div>`
    footer.insertAdjacentHTML('beforebegin', htmlContent)





});

const rangeValue = rate.addEventListener("change", () => { rateValue.value = `${rate.value}%` })



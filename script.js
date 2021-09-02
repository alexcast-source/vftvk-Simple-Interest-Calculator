const rate=document.querySelector("#rate")
const amount = document.querySelector("#amount")
const rateValue= document.querySelector("#rateNumber")
const years = document.querySelector("#years")
const btn = document.getElementById("btn")
const end = document.getElementById("end")
const btnEvent= btn.addEventListener("click",()=>{
    const amountValue =Number(amount.value)
    const rateValue = Number(rate.value)
    const numYears= Number(years.value)
const interest= amountValue*rateValue/100 *numYears
    console.log(interest)
    end.insertAdjacentHTML('afterend',`<p>If you deposit ${amountValue}$, <br> at an interest rate of ${rateValue}% <br> You will receive an amount of  ${interest} <br> in the year ${2021+numYears}</p>`)
});

const rangeValue= rate.addEventListener("change",()=>{rateValue.value= rate.value})


        
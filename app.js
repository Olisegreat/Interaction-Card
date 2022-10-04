const HoldersName = document.querySelector(".name") 
const HoldersCardNumber = document.querySelector(".number") 
const expiryMonth = document.querySelector(".expiry-month") 
const expiryYear = document.querySelector(".expiry-year") 
const cvc = document.querySelector(".cvc") 
const confirmBtn = document.querySelector(".confirm-btn") 
const showName = document.querySelector(".show-name") 
const showCardNum = document.querySelector(".card-num") 
const showExpiryMonth = document.querySelector(".month-own") 
const showExpiryYear = document.querySelector(".year-own") 
const showCvc = document.querySelector(".show-cvc") 
const cardError = document.querySelector(".card-error") 
const birthError = document.querySelector(".birth-error") 
const cvvError = document.querySelector(".cvv-error") 
const cardOwnerDetails = document.querySelector(".card-owner-details") 
let name = [];
let numToEnter = [];
let birthSide = [];
let cvcSide = [];




console.log(HoldersCardNumber.value.length);
function isValid() {
    let cardNum = HoldersCardNumber.value
    let regex = /[A-Za-z]/
    let num = regex.test(cardNum)
    if (num) {
        HoldersCardNumber.style.borderColor = "red"
        HoldersCardNumber.style.borderWidth = "1px"
        HoldersCardNumber.style.marginBottom = "0px"
        cardError.textContent = "Wrong format, numbers only"
        console.log("not");
    }
    else{
        HoldersCardNumber.style.borderColor = "gray" 
        HoldersCardNumber.style.borderWidth = "1px"
        HoldersCardNumber.style.marginBottom = "10px"
        cardError.textContent = " "
    }
}
function validTwo(tapIt,tapText) {
    if (tapIt.value.length == 0) {
        tapText.textContent = "Can't be blank"
        tapIt.style.borderColor = "red"
        tapIt.style.borderWidth = "1px"
        tapText.style.marginTop = "0px"
    }
    else{
        tapText.textContent = " "
        tapIt.style.borderColor = "gray"
        tapIt.style.borderWidth = "1px"
        tapText.style.marginTop = "0px"
    }
}

function showOnce(m,mainCharacter) {
    let numVal = m.target.value

    mainCharacter.textContent = numVal.toUpperCase()
}

HoldersName.addEventListener("keyup",(k)=>{
    showOnce(k,showName)
    console.log("lol");
})

HoldersCardNumber.addEventListener("keyup", (k)=>{ 
    if (HoldersCardNumber.value.length == 4 || HoldersCardNumber.value.length === 9 || HoldersCardNumber.value.length === 14){
        HoldersCardNumber.value = HoldersCardNumber.value + " "
    }
    showOnce(k,showCardNum)

    isValid()
})
expiryMonth.addEventListener("keyup",(k)=>{
    validTwo(expiryMonth,birthError)
    showOnce(k,showExpiryMonth)
})
expiryYear.addEventListener("keyup",(k)=>{
    validTwo(expiryYear,birthError)
    showOnce(k,showExpiryYear)
})
cvc.addEventListener("keyup",(k)=>{
    validTwo(cvc,cvvError)
    showOnce(k,showCvc)
})

confirmBtn.addEventListener("click",()=>{
    showName.innerHTML =  HoldersName.value.toUpperCase()
    showCardNum.innerHTML = HoldersCardNumber.value
    showExpiryMonth.innerHTML =  expiryMonth.value
    showExpiryYear.innerHTML = expiryYear.value
    showCvc.innerHTML = cvc.value
    console.log(HoldersName.value);
    HoldersCardNumber.value = ""
    HoldersName.value = ""
    expiryYear.value = ""
    expiryMonth.value = ""
    cvc.value = ""
    cardOwnerDetails.innerHTML = `  <div class="thanks-cont">
                                        <div class="compimg-cont">
                                            <img src="img/icon-complete.svg" class="complete-img" alt="">
                                        </div>
                                        <div class="thank-text-cont">
                                            <p class="thank-you">THANK YOU!</p>
                                            <p class="added">We've added your card details</p>
                                        </div>
                                        <button class="continue-btn">Continue</button>
                                    </div>`
    let continueBtn = document.querySelector(".continue-btn")
    continueBtn.addEventListener("click",()=>{
        window.location.reload()
    })
})
document.getElementById('donate__btn-quota-movement').addEventListener('click', function(event){
event.preventDefault()

/* read input and validate  */
const amount = getInputFiledById('input-field-quota');
if(!Number.isFinite(amount) || amount < 0){
    alert ('pls enter a valid number')
    document.getElementById('input-field-quota').value = '';
    return
}

/* read current state  */
const prevTotal = getTextFieldById('displayed-amount__quota');
const balance = getTextFieldById('primary-amount');
// console.log(balance);

/* compute new state (pure) */
const newTotal = amount + prevTotal
const newBalance = balance - newTotal


/* validate limitaitons of balance amount */
if(amount > balance){
    alert ('Your inserted amount is bigger that your actula balance')
    document.getElementById('input-field-quota').value = '';
    return
}
/* setInnertext  */
setInnerText('displayed-amount__quota', newTotal)
setInnerText('primary-amount', newBalance)

/* Modal UI */
const modal = document.getElementById('modal')
modal.classList.remove('hide')
const div = document.createElement('div')
div.innerHTML = `
   <p style = color:  green; background-color: yellow; font-weight: 600; width: fit-content; display: inline-block>
   Your added amount is: Tk.${amount} and The total amount is tk.${newTotal}
   </p>
   <p>${formatDateTimeWithTimezone(new Date())}</p>
`
const container = document.getElementById('empty-container');
container.textContent = '';
container.appendChild(div)

// add handler once 
document.getElementById('modal__btn').onclick = () => modal.classList.add('hide')

// set in history page 
setInnerText('total-donated-quota', newTotal)

// clean up all 
document.getElementById('displayed-amount__quota').value = '';
})


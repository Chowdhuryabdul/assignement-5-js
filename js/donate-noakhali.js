document.getElementById('donate__btn-flood-noakhali').addEventListener('click', function (event) {
    event.preventDefault()
    const donatedAmount = getInputFiledById('donate__inputfield-flood-noakhali')
    const showDonatedAmount = getTextFieldById('donate__flood-noakhali')
    const totalAmount = donatedAmount + showDonatedAmount

    const primaryAmount = getTextFieldById('primary-amount')
    if (donatedAmount > primaryAmount) {
        alert('You do not have enough amount in your balance')
        document.getElementById('donate__inputfield-flood-noakhali').value = '';
        return
    }

    
    const restOfTheAmount = primaryAmount - totalAmount
    // document.getElementById('primary-amount').innerText = restOfTheAmount
    setInnerText('primary-amount', restOfTheAmount)
    
    /* Set in history page  */
     const totalDonatedForNoakhali = getTextFieldById('total-donated-noakhali')
    // console.log(totalDonatedForNoakhali);
    setInnerText('total-donated-noakhali', totalAmount)

    if (Number.isFinite(donatedAmount) && donatedAmount > 0) {
        // document.getElementById('donate__flood-noakhali').innerText = totalAmount
        setInnerText('donate__flood-noakhali', totalAmount)

        const modal = document.getElementById('modal')
        modal.classList.toggle('hide')

        const p = document.createElement('p')
        p.style.cssText = 'color: red; background-color: yellow; text-align: center; width:fit-content; display:inline-block'
        const container = document.getElementById('empty-container')
        container.textContent = ''; /* show only the latest amount */
        p.innerText = `you have donated now: ${donatedAmount}, total amount is: ${totalAmount}`
        container.appendChild(p)
        document.getElementById('donate__inputfield-flood-noakhali').value = '';
        document.getElementById('modal__btn').addEventListener('click', function () {
            const modal = document.getElementById('modal');
            modal.classList.add('hide')
        })


        return

    } else {
        alert('this is not a number')
        document.getElementById('donate__inputfield-flood-noakhali').value = '';
    }



})









// here is shown i can find the expected target by selectors or event.target
// const donatedAmount = document.getElementById('donate__inputfield-flood-noakhali').value
// console.log(event.target.parentNode.childNodes[7]);
// const donatedAmount = event.target.parentNode.childNodes[7].value
// const totalDonatedAmount = document.getElementById('donate__flood-noakhali').innerText
// const totalDonatedAmount = event.target.parentNode.childNodes[1].childNodes[3].innerText
// event.target.parentNode.childNodes[1].childNodes[3].innerText = totalAmount
// document.getElementById('donate__flood-noakhali').innerText = totalAmount
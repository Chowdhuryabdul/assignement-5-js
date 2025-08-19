document.getElementById('donate__btn-flood-feni').addEventListener('click', function(event){
    event.preventDefault();
    const displayedAmountForFeni = getTextFieldById('donate__display-feni')
    const inputValueForFeni = getInputFiledById('donate__inputfield-feni')
    const totalDisplayedAmount = displayedAmountForFeni + inputValueForFeni
    
    
    // console.log(totalDisplayedAmount);
    const primaryAmount = getTextFieldById('primary-amount')
    const restOfTheAmount = primaryAmount - totalDisplayedAmount;
    
    if(inputValueForFeni > primaryAmount){
        alert('Your inserted amount has excedded the actual amount in your account')
        document.getElementById('donate__inputfield-feni').value = '';
        return
    }
    setInnerText('primary-amount', restOfTheAmount)
    // console.log('lets see how much remained');

    setInnerText('donate__display-feni', totalDisplayedAmount)
    document.getElementById('donate__display-feni').value = '';


   

    if(Number.isFinite(inputValueForFeni) && inputValueForFeni > 0){
        const modal = document.getElementById('modal');
        modal.classList.toggle('hide')


        const div = document.createElement('div')
        div.inner
        div.innerHTML = `
        <p style = 'color: green; background-color: yellow; font-weight: 600; width: fit-content; display: inline-block'>Added Amount: Tk.${inputValueForFeni} and New balance is Tk.${totalDisplayedAmount} </p>
        <p style = 'font-size: 12px; color: #555' >${formatDateTimeWithTimezone(new Date())} </p>
        `
        // const p = document.createElement('p')
        // p.style.cssText = 'color: green; background-color: yellow; font-weight: 600; width: fit-content; display: inline-block'
        const container = document.getElementById('empty-container')
        container.textContent = '';
        // p.innerText = `You have donated now: ${inputValueForFeni}, total amount is: ${totalDisplayedAmount}`
        container.appendChild(div)
        document.getElementById('donate__inputfield-feni').value = '';
        document.getElementById('modal__btn').addEventListener('click', function(){
            const modal = document.getElementById('modal');
            modal.classList.add('hide')
        })
        
    }

     // set in history page 
    const displayedAmountInHistoryPage = getTextFieldById('total-donated-feni')
    // console.log(displayedAmountInHistoryPage);
    setInnerText('total-donated-feni', totalDisplayedAmount )

})
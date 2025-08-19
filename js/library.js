function getInputFiledById(id){
    const inputValue = document.getElementById(id).value
    const inputValueNumber = parseFloat(inputValue)
    return inputValueNumber
}


function getTextFieldById(id){
    const textFiledValue = document.getElementById(id).innerText;
    const textFiledValueNumber = parseFloat(textFiledValue);
    // console.log(typeof textFiledValueNumber);
    return textFiledValueNumber
}


function setInnerText(id, value){
    document.getElementById(id).innerText = value
}


function showSactionById(id){
    document.getElementById('donation-form').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}
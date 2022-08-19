function getTextElementValueById(elementId){
    const phoneTotalElement = document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;

}

function setSubElementValue(elementId, value){
    const subTotal = document.getElementById(elementId);
    subTotal.innerText = value;
}
function calculateSubTotal(){
    const currentCaseTotal = getTextElementValueById('total-price-case');
    const currentPhoneTotal = getTextElementValueById('phone-total');

    const totalPrice = currentCaseTotal + currentPhoneTotal;
    setSubElementValue ('sub-total', totalPrice);

    const taxAmountString = (totalPrice*0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setSubElementValue('tax-amount', taxAmount);
    const finalAmount = totalPrice + taxAmount;
    setSubElementValue('total-amount', finalAmount);


    
}
function updateCaseNumber (isIncrease){
    const btnInputField = document.getElementById('btn-case-field');

    const btnInputFieldString = btnInputField.value;
    const inputField = parseInt(btnInputFieldString);
    let newInputField ;

    if(isIncrease === true){
        newInputField = inputField + 1;
    }
    else{
        newInputField = inputField - 1;
    }
    btnInputField.value = newInputField;
    return newInputField;
}

function updateCaseNumberPrice(newInputField){
    const totalPriceCase = newInputField * 59;
    const totalPrice = document.getElementById('total-price-case');
    totalPrice.innerText = totalPriceCase;
} 



document.getElementById('btn-case-plus').addEventListener('click', function(){
    const newInputField = updateCaseNumber (true);
    updateCaseNumberPrice(newInputField);
    calculateSubTotal();

});

document.getElementById('btn-case-minus').addEventListener('click', function(){
    const newInputField = updateCaseNumber (false);
    updateCaseNumberPrice(newInputField);
    calculateSubTotal();
});
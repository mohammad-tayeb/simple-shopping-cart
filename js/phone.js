function updatephoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field');
     const phoneNumberString = phoneNumberField.value;
     const previousphoneNumber = parseInt(phoneNumberString);
     let newphoneNumber;
     if(isIncrease){
        newphoneNumber = previousphoneNumber + 1;
     }
     else{
        newphoneNumber = Math.max(0, previousphoneNumber - 1);
     }
     phoneNumberField.value = newphoneNumber;
     return newphoneNumber;
}
function updateTotalphonePrice(newphoneNumber){
    const phoneTotalAmount = newphoneNumber * 1219;
    const phonePreviousPriceField = document.getElementById('phone-total-price');
    phonePreviousPriceField.innerText = phoneTotalAmount;
}

document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newphoneNumber =  updatephoneNumber(true);
    updateTotalphonePrice(newphoneNumber);
    calculateSubTotal();
    
})

document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newphoneNumber = updatephoneNumber(false);
    updateTotalphonePrice(newphoneNumber);
    calculateSubTotal();
})



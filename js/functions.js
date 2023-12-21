function getTextElementById(elementId){
    const elementField = document.getElementById(elementId);
    const elementString = elementField.innerText;
    const currentElement = parseInt(elementString);
    return currentElement; 
}
function calculateSubTotal(){
    const currentCasePrice = getTextElementById('case-total-price');
    const currentPhonePrice = getTextElementById('phone-total-price');
    const subTotalPrice = currentCasePrice + currentPhonePrice;
    const currentSubtotalPriceField = document.getElementById('sub-total-price');
    currentSubtotalPriceField.innerText = subTotalPrice;
    const taxAmountField = document.getElementById('tax-amount')
    const taxAmount = subTotalPrice * 0.1;
    taxAmountField.innerText = taxAmount.toFixed(2);
    const finalAmountField = document.getElementById('total-amount')
    const totalAmount = subTotalPrice + taxAmount;
    finalAmountField.innerText = totalAmount;
}

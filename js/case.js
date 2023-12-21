function updatecaseNumber(isIncrease){
    const caseNumberField = document.getElementById('case-number-field');
     const caseNumberString = caseNumberField.value;
     const previouscaseNumber = parseInt(caseNumberString);
     let newcaseNumber;
     if(isIncrease){
        newcaseNumber = previouscaseNumber + 1;
     }
     else{
        newcaseNumber = Math.max(0, previouscaseNumber - 1);
     }
     caseNumberField.value = newcaseNumber;
     return newcaseNumber;
}
function updateTotalcasePrice(newcaseNumber){
    const caseTotalAmount = newcaseNumber * 59;
    const casePreviousPriceField = document.getElementById('case-total-price');
    casePreviousPriceField.innerText = caseTotalAmount;
}
document.getElementById('btn-case-plus').addEventListener('click',function(){
    const newcaseNumber =  updatecaseNumber(true);
    updateTotalcasePrice(newcaseNumber);
    calculateSubTotal();
    
})

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newcaseNumber = updatecaseNumber(false);
    updateTotalcasePrice(newcaseNumber);
    calculateSubTotal();
})



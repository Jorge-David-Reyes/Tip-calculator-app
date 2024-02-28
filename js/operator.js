
var bill, people, custom, tipAmount, totalAmount, reset;

export const operator = ( elements ) => {

    ({ bill, people, custom, tipAmount, totalAmount, reset } = elements);

    
    const calculateTip = (e) => {
        e.preventDefault();
    
        if(!validateInput(e)){
            return;
        }
    
        const tipValue = parseFloat(e.target.value) / 100;
        const billValue = parseFloat(bill.value);
        const peopleValue = people.value;
    
        tipAmount.textContent = '$' + ((billValue * tipValue) / peopleValue).toFixed(2);
        totalAmount.textContent = '$' + ((billValue / peopleValue) + parseFloat(tipAmount.textContent.slice(1))).toFixed(2);
    
        updateResetButton()
    
    }
    
    const calculateTipCustom = (e) => {
    
        if(!validateInputCustom(e)){
            return;
        }
    
        const tipValue = parseFloat(e.target.value) / 100;
        const billValue = parseFloat(bill.value);
        const peopleValue = people.value;
    
        tipAmount.textContent = '$' + ((billValue * tipValue) / peopleValue).toFixed(2);
        totalAmount.textContent = '$' + ((billValue / peopleValue) + parseFloat(tipAmount.textContent.slice(1))).toFixed(2);
    
        updateResetButton()
    }
    
    const removeRed = () => {
        const errorText = document.getElementById('peopleError');
    
        if(people.value !== ''){
            people.style.border = ''; 
            errorText.innerText = '';
            errorText.style.display = 'none';
        }
    
        if(bill.value !== '' && custom.value !== ''){
            calculateTipCustom({target: custom});
        }
    }
    
    const resetValues = () => {
        bill.value = '';
        people.value = '';
        custom.value = '';
        tipAmount.textContent = '$0.00';
        totalAmount.textContent = '$0.00';
    
        updateResetButton()
    }

    return {
        calculateTip,
        calculateTipCustom,
        removeRed,
        resetValues
    }
}



function updateResetButton() {
    if (tipAmount.textContent === '$0.00' && totalAmount.textContent === '$0.00') {
        reset.disabled = true;
    } else {
        reset.disabled = false;
    }
}

function showError(message, errorText) {
    people.style.border = '1px solid red';
    errorText.innerText = message;
    errorText.style.display = 'block';
    errorText.style.color = 'red';
    return false;
}


const validateInputCustom = (e) => {
    const errorText = document.getElementById('peopleError');

    if( bill.value === '' || custom.value === ''){
        return false;
    } else if(people.value === '' && custom.value !== '') {
        return showError("Can't be zero", errorText);
    }
    return true;

}

const validateInput = (e) => {
    const errorText = document.getElementById('peopleError');

    if( bill.value === '' || e.target.tagName !== 'BUTTON'){
        return false;
    } else if(people.value === '' && e.target.tagName === 'BUTTON') {
        return showError("Can't be zero", errorText);
    }
    return true;
}
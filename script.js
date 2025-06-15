function calculateMaturityAmount(){

    //get input values from the form elements
    const principle = parseFloat(document.getElementById('principle').value)
    const interestRate = parseFloat(document.getElementById('intersrRate').value)
    const tenure = parseFloat(document.getElementById('tenure').value)

    //perform thr calculation
    const maturityAmount = principle + (principle*interestRate*tenure)/100;

    //display the result
    document.getElementById('result').innerText = `Maturity Amount: ${maturityAmount.toFixed(2)}`;
}

//Attach  the event listener to the calculate Button
document.getElementById('calculateBtn').addEventListener('click',calculateMaturityAmount);
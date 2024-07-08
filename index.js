//login button event handler

const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = 'block';
})

    //deposit button event handler

    const depositButton = document.getElementById('addDeposit');
    depositButton.addEventListener('click', function(){
        const depositNumber = getInputNumber('depositAmount');

        // const depositAmount = document.getElementById('depositAmount').value;
        // const depositNumber = parseFloat(depositAmount);

       /** 
        const currentDeposit = document.getElementById('currentDeposit').innerText;
        const currentDepositNumber = parseFloat(currentDeposit);
        const totalDeposit = depositNumber + currentDepositNumber;
        document.getElementById('currentDeposit').innerText = totalDeposit;   */

        updateSpanText('currentDeposit', depositNumber);
        updateSpanText('currentBalance', depositNumber);

        document.getElementById('depositAmount').value = '';
    })


    //withdraw button event handler
        const withdrawBtn = document.getElementById('addWithDraw');
        withdrawBtn.addEventListener('click', function(){
        const withdrawNumber = getInputNumber('withdrawAmount');

        updateSpanText('currentWithdraw', withdrawNumber);
        updateSpanText('currentBalance', -1 * withdrawNumber);

        document.getElementById('withdrawAmount').value = '';
    })

    function getInputNumber(id){
        const amount = document.getElementById(id).value;
        const amountNumber = parseFloat(amount);
        return amountNumber;
    }



    function updateSpanText(id, addedNumber){
        const current = document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const totalAmount = addedNumber + currentNumber;
        // console.log(totalBalance);
        document.getElementById(id).innerText = totalAmount;
    }




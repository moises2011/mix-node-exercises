class MoneyStack {
    constructor(billsize){
        this.billSize = billsize;
        this.next = null;
    }
    withdraw(amount){
        const numOfBills = Math.floor(amount / this.billSize);
        if (numOfBills > 0) {
            this._ejectMoney(numOfBill);
            amount = amount - (this.billSize * numOfBills);
        }
        // If there is any money left to withdraw and if we have
        // another stack in the line, pass the request on
        amount > 0 && this.next && this.next.withdraw(amount);
    }
    setNextStack(stack){
        this.next = stack;
    }
    _ejectMoney(numOfBills){
        console.log(numOfBills + " $" + this.billSize
            + " bill(s) has/have been spit out");
    }
}
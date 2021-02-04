class Bank {
    //list of branches

    nameOfBank = "InfiniFax"
    listOfBranches = []

    constructor () {

    }

    addBranch (branchNumber, location) {
        const newBranch = new Branch(branchNumber, location)

        this.listOfBranches.push(newBranch)
    }
}

class Branch {
    // has accounts and customers
    branchNumber
    location
    customers = []
    accounts = []

    constructor (branchNumber, location) {
        this.branchNumber = branchNumber
        this.location = location
    }

    newCustomer (customerName) {
        const newCustomer = new Customer(customerName)
        this.customers.push(newCustomer)
    }

    newAccount (account) {
        this.accounts.push(account)
    }

    newCurrentAccount (customer) {
        const currentAccount = new CurrentAccount(customer)
        this.newAccount(currentAccount)
    }

    newSavingsAccount (customer) {
        const savingsAccount = new SavingsAccount(customer)
        this.newAccount(savingsAccount)
    }

}

class Customer {
    // has accounts
    customerName
    listOfAccounts = []
    
    constructor (customerName) {
        this.customerName = customerName
    }

    addAccount () {
        const newAccount = new Account(typeOfAccount)
        this.listOfAccounts.push(newAccount)
    }
}

class Account {
    // has transactions, customer
    balance = 0
    listOfTransactions = []
    listOfCustomers = []

    constructor (customer) {
        this.addCustomer(customer)
    }

    addCustomer (customer) {
        this.listOfCustomers.push(customer)
    }

    addTransaction (transactionAmount) {
        const transaction = new Transaction(transactionAmount)
        this.listOfTransactions.push(transaction)
    }
}

class Transaction {
    transactionAmount

    constructor (transactionAmount) {
        this.transactionAmount = transactionAmount
    }
}


class CurrentAccount extends Account {
    overdraftChargePercentage = 0.2
    
    constructor (customer) {
        super(customer)
    }   
}

class SavingsAccount extends Account {
    intrestPercentage = 1.01
    
    constructor (customer) {
        super(customer)
    }  
}
document.getElementById("expense-form").addEventListener('submit',addExpense);

let expenses = [];

function addExpense(event){
    event.preventDefault();
    const description = document.getElementById("description").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const paidBy = document.getElementById("paidBy").value;
    const splitAmong = document.getElementById("splitAmong").value.split(',').map(person =>person.trim());

    const expense = {description, amount, paidBy, splitAmong};

    expenses.push(expense);

    displayExpenses();
    displaySummary();

    document.getElementById('expense-form').reset();
}

function displayExpenses(){
    const expenseList = document.getElementById("expense-list");
    expenseList.innerHTML = '';

    expenses.forEach(expense=>
        {const li = document.createElement('li');
        li.textContent = `${expense.description} - $${expense.amount} paid by ${expense.paidBy}, Split among ${expense.splitAmong.join(',')}`
        expenseList.appendChild(li);
    });

}

function displaySummary(){
const summary = expenses.reduce((acc,expense)=>{
    const amountPerPerson = expense.amount / expense.splitAmong.length;
    if (!acc[expense.paidBy]) acc[expense.paidBy] = 0;
        acc[expense.paidBy] += expense.amount;

        expense.splitAmong.forEach(person => {
            if (!acc[person]) acc[person] = 0;
            acc[person] -= amountPerPerson;
        });

        return acc;
},{});

const summaryList = document.getElementById('Summary-list');
    summaryList.innerHTML = '';

    Object.keys(summary).forEach(person => {
        const li = document.createElement('li');
        li.textContent = `${person}: $${summary[person].toFixed(2)}`;
        summaryList.appendChild(li);
    });

}


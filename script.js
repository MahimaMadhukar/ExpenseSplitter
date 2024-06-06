document.getElementById("expense-form").addEventListener('submit',addExpense);

let expenses = [];

function addExpense(){
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
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

function displayExpenses(){
    const expenseList = document.getElementById("expense-list");
    expenseList.innerHTML = '';

    expenses.forEach(expense=>{const li = document.createElement('li');
        li.textContent = `${expense.description} - $${expense.amount} paid by ${expense.paidBy}, Split among ${expense.splitAmong.join(',')}`
    });
}


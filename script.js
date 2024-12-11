let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
let totalIncome = parseFloat(localStorage.getItem('totalIncome')) || 0;

// Initialize the dashboard on the home page
document.addEventListener('DOMContentLoaded', () => {
  if (window.location.pathname.includes('index.html')) {
    // Initialize income if not set
    if (!totalIncome) {
      totalIncome = parseFloat(prompt('Please enter your total income:')) || 0;
      localStorage.setItem('totalIncome', totalIncome);
    }
    updateDashboard();

    // Add event listener to edit income button
    document.getElementById('edit-income-btn').addEventListener('click', () => {
      const newIncome = parseFloat(prompt('Enter your new total income:', totalIncome));
      if (!isNaN(newIncome) && newIncome >= 0) {
        totalIncome = newIncome;
        localStorage.setItem('totalIncome', totalIncome);
        updateDashboard();
      } else {
        alert('Invalid input. Income not updated.');
      }
    });
  }

  if (window.location.pathname.includes('add-expense.html')) {
    document.getElementById('expense-form').addEventListener('submit', addExpense);
  }

  if (window.location.pathname.includes('view-expenses.html')) {
    displayExpenses();
  }
});

// Function to add an expense
function addExpense(e) {
  e.preventDefault();

  const category = document.getElementById('category').value;
  const amount = parseFloat(document.getElementById('amount').value);
  const description = document.getElementById('description').value;

  if (isNaN(amount) || amount <= 0) {
    alert('Please enter a valid amount.');
    return;
  }

  expenses.push({ category, amount, description });
  localStorage.setItem('expenses', JSON.stringify(expenses));

  document.getElementById('expense-form').reset();
  alert('Expense added successfully!');
}

// Function to display expenses
function displayExpenses() {
  const expenseList = document.getElementById('expense-list');
  expenseList.innerHTML = '';

  expenses.forEach((expense, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${expense.category} - $${expense.amount.toFixed(2)}: ${expense.description}
      <button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>
    `;
    expenseList.appendChild(li);
  });
}

// Function to delete an expense
function deleteExpense(index) {
  expenses.splice(index, 1);
  localStorage.setItem('expenses', JSON.stringify(expenses));
  displayExpenses();
}

// Function to update the dashboard on the home page
function updateDashboard() {
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remainingBudget = totalIncome - totalExpenses;

  document.getElementById('total-income').textContent = totalIncome.toFixed(2);
  document.getElementById('total-expenses').textContent = totalExpenses.toFixed(2);
  document.getElementById('remaining-budget').textContent = remainingBudget.toFixed(2);
}

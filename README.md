# Expense Tracker Application

## Overview
The Expense Tracker is a web-based application that helps users manage their finances by tracking their income and expenses. It provides a user-friendly interface to add, view, and manage expenses while dynamically calculating the remaining budget.

## Features
1. **Add Income**: Allows users to input and update their total income.
2. **Add Expenses**: Users can add expenses by category, amount, and description.
3. **View Expenses**: Displays a detailed list of all added expenses.
4. **Dynamic Dashboard**:
   - Shows total income.
   - Displays total expenses.
   - Calculates and shows the remaining budget dynamically.
5. **Data Persistence**: Stores data locally in the browser using `localStorage`.

## Prerequisites
- A modern web browser (Google Chrome, Mozilla Firefox, etc.).

## How to Run the Application

1. **Download the Application**:
   - Clone the repository or download the ZIP file containing the application files.

2. **Set Up the Application**:
   - Ensure the following files are in the same directory:
     - `index.html` (Home page)
     - `add-expense.html` (Add Expense page)
     - `view-expenses.html` (View Expenses page)
     - `style.css` (Styling for the application)
     - `script.js` (JavaScript functionality)

3. **Open the Application**:
   - Open the `index.html` file in a web browser.

4. **Usage**:
   - On the home page (`index.html`):
     - Enter your total income if prompted or click the "Total Income" button to update it.
     - View your total income, total expenses, and remaining budget dynamically.
   - On the add expense page (`add-expense.html`):
     - Fill out the expense form with category, amount, and description, then submit.
   - On the view expenses page (`view-expenses.html`):
     - View all added expenses and delete any expense if necessary.

## File Structure
- `index.html`: The home page with the dashboard.
- `add-expense.html`: Page for adding new expenses.
- `view-expenses.html`: Page for viewing and managing expenses.
- `style.css`: Styling for the application.
- `script.js`: JavaScript for dynamic functionality and data persistence.




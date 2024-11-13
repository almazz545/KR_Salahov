import expenses from "../mock/expense.js"

export default class ExpensesModel{
    constructor(){
        this.expenses= expenses;
    }

    getExpenses(){
        return this.expenses;
    }

    deleteExpense(id){
        this.expenses = this.expenses.filter(expense =>expense.id !=id);
    }

    getExpenseId(id){
        return this.expenses.find(expense=>expense.id ===id)
    }

    addExpense(expense){
    this.expenses.push(expense);
    }
    
}
import { createElement } from "../framework/render.js";

function createExpenseListTemplate() {
  return `<div class="expense-list">
            <h2>Список расходов</h2>
            <ul id="expense-list">
                
            </ul>
          </div>`;
}

export default class ExpenseList {
  getTemplate() {
    return createExpenseListTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}

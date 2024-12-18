class RegistrationFormView {
  constructor() {
    this.form = document.getElementById("applicant-form");
    this.fullnameInput = document.getElementById("fullname");
    this.emailInput = document.getElementById("email");
    this.phoneInput = document.getElementById("phone");
    this.facultySelect = document.getElementById("faculty");
    this.searchInput = document.getElementById("search-input");
    this.facultyFilter = document.getElementById("faculty-filter");
  }

  validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  validatePhone(phone) {
    const phoneRegex =
      /^(7|8|\+7)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
    return phoneRegex.test(phone);
  }

  validateForm(applicant) {
    const errors = [];

    if (!applicant.fullname.trim()) {
      errors.push("ФИО не может быть пустым");
    }

    if (!this.validateEmail(applicant.email)) {
      errors.push("Некорректный формат email");
    }

    if (!this.validatePhone(applicant.phone)) {
      errors.push("Номер телефона должен быть в формате +7 (ХХХ) ХХХ-ХХ-ХХ");
    }

    if (!applicant.faculty) {
      errors.push("Необходимо выбрать факультет");
    }

    return errors;
  }

  bindSubmit(handler) {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();

      const applicant = {
        fullname: this.fullnameInput.value.trim(),
        email: this.emailInput.value.trim(),
        phone: this.phoneInput.value.trim(),
        faculty: this.facultySelect.value,
      };

      const validationErrors = this.validateForm(applicant);

      if (validationErrors.length > 0) {
        alert(validationErrors.join("\n"));
        return;
      }

      handler(applicant);
      this.clearForm();
    });
  }

  bindSearch(handler) {
    this.searchInput.addEventListener("input", () => {
      handler(this.searchInput.value, this.facultyFilter.value);
    });

    this.facultyFilter.addEventListener("change", () => {
      handler(this.searchInput.value, this.facultyFilter.value);
    });
  }

  clearForm() {
    this.fullnameInput.value = "";
    this.emailInput.value = "";
    this.phoneInput.value = "";
    this.facultySelect.value = "";
  }
}

export default RegistrationFormView;

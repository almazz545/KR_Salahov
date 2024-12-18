class ApplicantListView {
  constructor() {
    this.applicantsContainer = document.getElementById("applicants-container");
    this.totalApplicantsSpan = document.getElementById("total-applicants");
  }

  renderApplicants(applicants) {
    this.applicantsContainer.innerHTML = "";
    this.totalApplicantsSpan.textContent = applicants.length;

    applicants.forEach((applicant) => {
      const applicantCard = document.createElement("div");
      applicantCard.classList.add("applicant-card");
      applicantCard.innerHTML = `
                <div>
                    <strong>${applicant.fullname}</strong><br>
                    Email: ${applicant.email}<br>
                    Телефон: ${applicant.phone}<br>
                    Факультет: ${this.getFacultyName(applicant.faculty)}
                </div>
                <button class="delete-btn" data-id="${
                  applicant.id
                }">Удалить</button>
            `;
      this.applicantsContainer.appendChild(applicantCard);
    });
  }

  getFacultyName(facultyCode) {
    const facultyNames = {
      IT: "Информационных технологий",
      ECONOMICS: "Экономический",
      MEDICINE: "Медицинский",
      HUMANITIES: "Гуманитарный",
    };
    return facultyNames[facultyCode] || facultyCode;
  }

  bindDeleteApplicant(handler) {
    this.applicantsContainer.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete-btn")) {
        const id = parseInt(event.target.dataset.id);
        handler(id);
      }
    });
  }
}

export default ApplicantListView;

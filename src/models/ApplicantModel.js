class ApplicantModel {
  constructor() {
    this.applicants = JSON.parse(localStorage.getItem("applicants")) || [];
  }

  addApplicant(applicant) {
    this.applicants.push({
      id: Date.now(),
      ...applicant,
    });
    this.saveToLocalStorage();
  }

  deleteApplicant(id) {
    this.applicants = this.applicants.filter(
      (applicant) => applicant.id !== id
    );
    this.saveToLocalStorage();
  }

  getApplicants() {
    return this.applicants;
  }

  filterApplicants(searchTerm, facultyFilter) {
    return this.applicants.filter((applicant) => {
      const normalizedSearchTerm = searchTerm.toLowerCase().trim();

      const matchesFullname =
        !normalizedSearchTerm ||
        applicant.fullname.toLowerCase().includes(normalizedSearchTerm);

      const matchesFaculty =
        !facultyFilter || applicant.faculty === facultyFilter;

      return matchesFullname && matchesFaculty;
    });
  }

  saveToLocalStorage() {
    localStorage.setItem("applicants", JSON.stringify(this.applicants));
  }
}

export default ApplicantModel;

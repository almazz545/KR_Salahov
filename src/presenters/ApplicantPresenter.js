class ApplicantPresenter {
  constructor(model, listView, formView) {
    this.model = model;
    this.listView = listView;
    this.formView = formView;

    this.init();
  }

  init() {
    this.listView.renderApplicants(this.model.getApplicants());
    this.listView.bindDeleteApplicant(this.handleDeleteApplicant.bind(this));
    this.formView.bindSubmit(this.handleAddApplicant.bind(this));
    this.formView.bindSearch(this.handleSearch.bind(this));
  }

  handleAddApplicant(applicant) {
    this.model.addApplicant(applicant);
    this.listView.renderApplicants(this.model.getApplicants());
  }

  handleDeleteApplicant(id) {
    this.model.deleteApplicant(id);
    this.listView.renderApplicants(this.model.getApplicants());
  }

  handleSearch(searchTerm, facultyFilter) {
    const filteredApplicants = this.model.filterApplicants(
      searchTerm,
      facultyFilter
    );
    this.listView.renderApplicants(filteredApplicants);
  }
}

export default ApplicantPresenter;

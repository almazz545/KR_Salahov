import ApplicantModel from "./models/ApplicantModel.js";
import ApplicantListView from "./views/ApplicantListView.js";
import RegistrationFormView from "./views/RegistrationFormView.js";
import ApplicantPresenter from "./presenters/ApplicantPresenter.js";

document.addEventListener("DOMContentLoaded", () => {
  const model = new ApplicantModel();
  const listView = new ApplicantListView();
  const formView = new RegistrationFormView();

  new ApplicantPresenter(model, listView, formView);
});

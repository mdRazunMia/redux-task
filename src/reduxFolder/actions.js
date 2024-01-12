
import { SUBMIT_FORM, GET_FORM_DATA } from "./types";

const SubmittedFormData = (formData) => ({
  type: SUBMIT_FORM,
  payload: formData,
});

const getSubmittedData = () => ({
    type: GET_FORM_DATA,
})



export { SubmittedFormData, getSubmittedData };
const inittialState = {
  name: "",
  email: "",
  number: "",
  password: "",
};

const formReducer = (state = inittialState, action) => {
  switch (action.type) {
    case "SUBMIT_FORM":
      const formData = {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        number: action.payload.number,
        password: action.payload.password,
          };
          console.log(formData);
      return formData;
    case "GET_FORM_DATA":
      return { ...state };
    default:
      return state;
  }
};

export default formReducer;

const initialState = {
  name: "",
  email: "",
  mobile: "",
  password: "",
  designation: "",
  technology: "",
};
const changeFormData = (state = initialState, action) => {
  //console.log(action, "reducer");
  switch (action.type) {
    case "NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    case "MOBILE":
      return {
        ...state,
        mobile: action.payload,
      };
    case "PASSWORD":
      return {
        ...state,
        password: action.payload,
      };
    case "DESIGNATION":
      return {
        ...state,
        designation: action.payload,
      };
    case "TECHNOLOGY":
      return {
        ...state,
        technology: action.payload,
      };
    default:
      return state;
  }
};

export default changeFormData;

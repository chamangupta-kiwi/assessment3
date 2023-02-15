export const inputName = (e) => {
  return {
    type: "NAME",
    payload: e.target.value,
  };
};
export const inputEmail = (e) => {
  return {
    type: "EMAIL",
    payload: e.target.value,
  };
};
export const inputMobile = (e) => {
  return {
    type: "MOBILE",
    payload: e.target.value,
  };
};
export const inputPassword = (e) => {
  return {
    type: "PASSWORD",
    payload: e.target.value,
  };
};
export const inputDesignation = (e) => {
  return {
    type: "DESIGNATION",
    payload: e.target.value,
  };
};
export const inputTechnology = (e) => {
  return {
    type: "TECHNOLOGY",
    payload: e.target.value,
  };
};

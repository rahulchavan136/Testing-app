const convertToUppercase = (val) => {
    if (typeof val === "boolean" || typeof val === "number") {
      return false;
    } else return val.toUpperCase();
  };
   
  export default convertToUppercase;
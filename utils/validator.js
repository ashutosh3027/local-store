const validator = (email, password,mobileNo) => {
    const validEmail = typeof email === "string" && email.trim() !== "";
    const validPassword =
      typeof password === "string" && password.trim().length >= 6;
     let validMobileNumber = typeof mobileNo==='string'&& mobileNo.trim().length>=10;
     for(let i=0;i<10;i++){
         if(mobileNo[i]<='9'&&mobileNo[i]>='0') continue;
         validMobileNumber=false;
     }
    return validEmail && validPassword&&validMobileNumber;
  };
  
  module.exports = validator;
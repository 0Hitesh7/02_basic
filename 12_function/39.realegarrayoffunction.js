// if (our status code>=200  && our status code<300) 
function validationstatusCode(status) {
    if (status >= 200 && status < 300) {
        console.log("success");
    }
}

// //This is a function as a expression
const validatestatuscode_Exp = function (status) {
    if (status >= 200 && status < 300) {
        console.log("success");
    }
}
// //array function
const validateStatusCode_arr = (status) => {
    if (status >= 200 && status < 300) {
        console.log("success");
    }
};


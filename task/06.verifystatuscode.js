//verify the status code of the response
let statuscode = 404;
if (statuscode >= 200 && statuscode < 300) {
    console.log("Status code is success");
} else if (statuscode >= 300 && statuscode < 399) {
    console.log("Status code is redirect");
} else if (statuscode >= 400 && statuscode < 499) {
    console.log("Status code is Client error");
}
else if (statuscode >= 500 && statuscode < 599) {
    console.log("Status code is Server error");
}
else {
    console.log("Status code is invalid or unknown");
}
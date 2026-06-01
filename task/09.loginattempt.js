let loginattempt = 3;
if (loginattempt == 2) {
    console.log("1 attempt left for lockout");
    if (loginattempt == 1) {
        console.log("last attempt before lockout");
    }
} else if (loginattempt == 0) {
    console.log("account locked");
} else {
    console.log("login successful");
}
const passwordErrorLabelSelector = "//p[@class='main-error' and contains(text(),'Your password is incorrect')]";
const emailSelector = "[name='identification']";
const passwordSelector = "[name='password']";
const signinSelector = "span*=Sign in";

module.exports = {
    passwordErrorLabelSelector,
    emailSelector,
    passwordSelector,
    signinSelector
}


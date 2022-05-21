const nameInputSelector = "//input[@id='user-name']";
const emailInputSelector = "//input[@id='user-email']";
const bioInputSelector = "//textarea[@id='user-bio']";
const saveButtonSelector = "//button/span[text()='Save']";

function getProfileFullNameElement(profileFullName){
    return "//h2[text()='"+profileFullName+"']";
}

module.exports = {
    nameInputSelector,
    getProfileFullNameElement,
    emailInputSelector,
    bioInputSelector,
    saveButtonSelector
}


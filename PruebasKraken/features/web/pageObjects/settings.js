const userNameInputSelector = "//input[@id='user-name']";
const saveButtonSelector = "//button/span[text()='Save']";
const siteTitleInputSelector = "//p[text()='The name of your site']/preceding-sibling::input";
const oldPasswordInputSelector = "//input[@id='user-password-old']";
const newPasswordInputSelect = "//input[@id='user-password-new']";
const newPasswordVerificationInputSelect = "//input[@id='user-new-password-verification']";
const profileSelect = "//div[@class='flex-auto flex items-center']"
const yourprofileoptionSelect = "//a[contains(text(),'Your profile')]"
const inputWebsiteSelect = "//input[@id='user-website']"
const urlErrorMsj = "//p[text()='Website is not a valid url']"

function getAuthorElement(authorName){
    return "//h3[@class='apps-card-app-title' and text()='"+authorName+"']";
}

module.exports = {
    userNameInputSelector,
    getAuthorElement,
    saveButtonSelector,
    siteTitleInputSelector,
    oldPasswordInputSelector,
    newPasswordInputSelect,
    newPasswordVerificationInputSelect,
    profileSelect,
    yourprofileoptionSelect,
    inputWebsiteSelect,
    urlErrorMsj
}
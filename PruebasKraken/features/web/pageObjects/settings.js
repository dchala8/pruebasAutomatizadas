const userNameInputSelector = "//input[@id='user-name']";
const saveButtonSelector = "//button/span[text()='Save']";
const siteTitleInputSelector = "//p[text()='The name of your site']/preceding-sibling::input";
const oldPasswordInputSelector = "//input[@id='user-password-old']";
const newPasswordInputSelect = "//input[@id='user-password-new']";
const newPasswordVerificationInputSelect = "//input[@id='user-new-password-verification']";
const profileSelect = "//div[@class='flex-auto flex items-center']";
const yourprofileoptionSelect = "//a[contains(text(),'Your profile')]";
const inputWebsiteSelect = "//input[@id='user-website']";
const urlErrorMsj = "//p[text()='Website is not a valid url']";
const savePasswordSelector = "//span[text()='Change Password']";
const newPasswordErrorMsj = '//p[text()="Sorry, passwords can\'t be blank"]';
const confPasswordErrorMsj = '//p[text()="Your new passwords do not match"]';
const oldPasswordErrorMsj = '//p[text()="Your current password is required to set a new one"]';
const settingSelector = "//a[@href='#/settings/']";
const designSelector = "//a[@href='#/settings/design/']";
const brandOptionSelector = "//button[@class='gh-nav-design-tab '][1]";
const siteDescriptionSelector = "//input[@id='site-description']";
const siteSelector = "//a[@href='#/site/']";
const accentColorSelector = "//input[@id='accent-color']";
const siteWideSelector = "//button[@class='gh-nav-design-tab '][2]";
const headerButtonBackgroundSelector = "//input[@name='headerButtonBackground' and @class='gh-input']";
const inputLanguageSelector = "//input[@class='ember-text-field gh-input ember-view']";
const languageSelector = "//*[@lang='en']";
const retrySelector = "//span[text()='Retry']";
const siteHeaderTxtField = "//span[@role='presentation']//ancestor::div[@id='ghost-head']";
const siteFooterTxtField = "//span[@role='presentation']//ancestor::div[@id='ghost-foot']";

function getAuthorElement(authorName){
    return "//h3[@class='apps-card-app-title' and text()='"+authorName+"']";
}

function getErrorMsj(msj){
    return "//p[text()='"+msj+"']";
}

function getColorFormatErrorMsj(msj){
    return "//div[text()='"+msj+"']";
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
    urlErrorMsj,
    savePasswordSelector,
    newPasswordErrorMsj,
    confPasswordErrorMsj,
    oldPasswordErrorMsj,
    settingSelector,
    designSelector,
    brandOptionSelector,
    siteDescriptionSelector,
    siteSelector,
    getErrorMsj,
    accentColorSelector,
    siteWideSelector,
    headerButtonBackgroundSelector,
    getColorFormatErrorMsj,
    inputLanguageSelector,
    languageSelector,
    retrySelector,
    siteHeaderTxtField,
    siteFooterTxtField
}
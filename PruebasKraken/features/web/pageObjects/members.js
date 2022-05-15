const nameInputSelector = "[name='name']";
const emailInputSelector = "[name='email']";
const saveButtonSelector = "//button/span[text()='Save']";

function getMemberElement(memberName){
    return "//h3[@class='ma0 pa0 gh-members-list-name ' and text()='"+memberName+"']";
}

module.exports = {
    nameInputSelector,
    emailInputSelector,
    saveButtonSelector,
    getMemberElement
}
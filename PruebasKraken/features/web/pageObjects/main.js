const dashboardCanvanSelector = "//h2[@class='gh-canvas-title' and contains(text(), 'Dashboard')]";
const postSelector = "//li/a[@href='#/posts/']";
const publishedSelector = "//a[@title='Published']";
const buttonDashboard = "//a[@title='Dashboard']";
const draftSelector = "//a[@title='Drafts']";
const scheduleSelector = "//a[@title='Scheduled']";
const pageSelector = "//li/a[@href='#/pages/']";
const pageButton = "span=New page";
const retrySaveSelector = "//*[name()='svg' and @class='retry_svg__retry-animated']";
const membersMenu = "//li/a[@href='#/members/']";
const savedConfirmationButton = "//button/span[text()='Saved']";

function selectPublishedPost(title){
    return "h3*="+title;
}

module.exports = {
    dashboardCanvanSelector,
    postSelector,
    publishedSelector,
    selectPublishedPost,
    buttonDashboard,
    draftSelector,
    pageSelector,
    pageButton,
    scheduleSelector,
    retrySaveSelector,
    membersMenu,
    savedConfirmationButton
}


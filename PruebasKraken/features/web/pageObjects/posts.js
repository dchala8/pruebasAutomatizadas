const relatedTagsNameSelector = '//div[@id="tag-input"]/ul/input';
const returnToMainSelector = "//div/a/span[text()='Posts']";
const filterByAuthorSelector = "//span[@class='ember-power-select-selected-item' and text()='All authors']";
const postTitleInputSelector = '//textarea[@placeholder="Post title"]';
const updatePostLinkSelector = "//span[contains(text(),'Update')]";
const updatePostButtonSelector = "//button/span[contains(text(),'Update')]";
const newPostSelector = "span=New post";
const titlePostSelector = "//textarea[@placeholder='Post title']";
const clickOutTitleSelector = "//div[@class='gh-editor-feature-image-container']"
const buttonPostSelector = "//li/a[@href='#/posts/']";
const publishPostSelector = "//span[contains(text(),'Publish')]";
const confirmPublishSelector = "//button/span[contains(text(),'Publish')]";
const returnPostToDashboard = "//div/a/span[text()='Posts']";
const buttonUpdateSelector = "//span[contains(text(),'Update')]";
const buttonConfirmUpdateSelector = "//button/span[contains(text(),'Update')]";
const buttonSettingsSelector = "//button[@title='Settings']";
const deletePostSelector = "//*/*[contains(text(),'Delete')]";
const confirmDeleteSelector = "//div/button/span[contains(text(),'Delete')]";
const scheduleSelector = "//div[@class='gh-publishmenu-section']/div[2]/div[1]";
const confirmScheduleSelector = "//button/span[contains(text(),'Schedule')]";
const unpublishSelector = "//section/div[@class='gh-publishmenu-radio ']/div[1]";
const confirmUnpublishSelector = "//button/span[contains(text(),'Unpublish')]";

function selectAuthorFromFilter(authorName){
    return "//li[@class='ember-power-select-option' and text()='"+authorName+"']";
}

function getPostElementSelector(postTitle){
    return "//h3[@class='gh-content-entry-title' and text()='"+postTitle+"']";
}


module.exports = {
    relatedTagsNameSelector,
    returnToMainSelector,
    filterByAuthorSelector,
    selectAuthorFromFilter,
    getPostElementSelector,
    postTitleInputSelector,
    updatePostLinkSelector,
    updatePostButtonSelector,
    newPostSelector,
    titlePostSelector,
    clickOutTitleSelector,
    buttonPostSelector,
    publishPostSelector,
    confirmPublishSelector,
    returnPostToDashboard,
    buttonUpdateSelector,
    buttonConfirmUpdateSelector,
    buttonSettingsSelector,
    deletePostSelector,
    confirmDeleteSelector,
    scheduleSelector,
    confirmScheduleSelector,
    unpublishSelector,
    confirmUnpublishSelector
}
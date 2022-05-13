const relatedTagsNameSelector = '//div[@id="tag-input"]/ul/input';
const returnToMainSelector = "//div/a/span[text()='Posts']";
const filterByAuthorSelector = "//span[@class='ember-power-select-selected-item' and text()='All authors']";
const postTitleInputSelector = '//textarea[@placeholder="Post title"]';
const updatePostLinkSelector = "//span[contains(text(),'Update')]";
const updatePostButtonSelector = "//button/span[contains(text(),'Update')]";

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
    updatePostButtonSelector
}
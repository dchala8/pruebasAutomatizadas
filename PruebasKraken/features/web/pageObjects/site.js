
const relatedTagsNameSelector = '//div[@id="tag-input"]/ul/input';
const descriptionTextSelector = "//p[text()='']";
const subscribeSelector = "//span[@class='gh-portal-triggerbtn-label']";
const headerButtonSelector = "//a[@class='gh-head-button gh-portal-close']";

function getPostHeaderSelector(tagName, postTitle){
    return '//header[@class="post-card-header"]/div[text()="'+tagName+'"]/following::h2[text()="'+postTitle+'"]';
}

function getPostHeaderWithTitleSelector(postTitle){
    return "//h2[@class='post-card-title' and text()='"+postTitle+"']";
}

function getSiteTitleSelector(siteTitle){
    return "//h1[contains(text(), '"+siteTitle+"') and @class='site-title']";
}

function getSiteDescriptionSelector(siteDescription){
    return "//p[text()= '"+siteDescription+"']";
}

module.exports = {
    relatedTagsNameSelector,
    getPostHeaderSelector,
    getPostHeaderWithTitleSelector,
    getSiteTitleSelector,
    getSiteDescriptionSelector,
    descriptionTextSelector,
    subscribeSelector,
    headerButtonSelector
}
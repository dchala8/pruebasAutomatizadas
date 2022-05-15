
const relatedTagsNameSelector = '//div[@id="tag-input"]/ul/input';

function getPostHeaderSelector(tagName, postTitle){
    return '//header[@class="post-card-header"]/div[text()="'+tagName+'"]/following::h2[text()="'+postTitle+'"]';
}

function getPostHeaderWithTitleSelector(postTitle){
    return "//h2[@class='post-card-title' and text()='"+postTitle+"']";
}

function getSiteTitleSelector(siteTitle){
    return "//h1[contains(text(), '"+siteTitle+"') and @class='site-title']";
}

module.exports = {
    relatedTagsNameSelector,
    getPostHeaderSelector,
    getPostHeaderWithTitleSelector,
    getSiteTitleSelector
}
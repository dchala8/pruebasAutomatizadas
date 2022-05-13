const pageTitleSelector = '//textarea[@placeholder="Page title"]';
const filterByTagSelector = "//span[@class='ember-power-select-selected-item' and text()='All tags']";
const publishPageLinkSelector = "//span[contains(text(),'Publish')]";
const publishPageButtonSelector = "//button/span[contains(text(),'Publish')]";


function selectTagFromFilter(tagName){
    return "//li[@class='ember-power-select-option' and text()='"+tagName+"']";
}

function getpageElementSelector(pageTitle){
    return "//h3[@class='gh-content-entry-title' and text()='"+pageTitle+"']"
}

module.exports = {
    pageTitleSelector,
    filterByTagSelector,
    selectTagFromFilter,
    getpageElementSelector,
    publishPageLinkSelector,
    publishPageButtonSelector
}
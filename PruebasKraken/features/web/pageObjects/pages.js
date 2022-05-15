const pageTitleSelector = '//textarea[@placeholder="Page title"]';
const filterByTagSelector = "//span[@class='ember-power-select-selected-item' and text()='All tags']";
const publishPageLinkSelector = "//span[contains(text(),'Publish')]";
const publishPageButtonSelector = "//button/span[contains(text(),'Publish')]";
const returnPagesToDashboardSelector = "//div/a/span[text()='Pages']";
const pagesPublishedSelector = "//div[contains(@class,'gh-contentfilter-menu gh-contentfilter-type')]/div/span";
const textPagePublishedSelector = "//li[text()='Published pages']";
const updatePageSelector = "//span[contains(text(),'Update')]";
const confirmUpdateSelector = "//button/span[contains(text(),'Update')]";
const buttonPagesSettingSelector = "//button[@title='Settings']";
const deletePageSelector = "//*/*[contains(text(),'Delete')]";
const confirmDeletePageSelector = "//div/button/span[contains(text(),'Delete')]";
const textDraftPagesSelector = "//li[text()='Draft pages']";
const schedulePageSelector = "//div[@class='gh-publishmenu-section']/div[2]/div[1]";
const schedulePageButtonSelector = "//button/span[contains(text(),'Schedule')]";
const textSchedulePageSelector = "//li[text()='Scheduled pages']";
const unpublishPageSelector = "//section/div[@class='gh-publishmenu-radio ']/div[1]";
const confirmUnpublishSelector = "//button/span[contains(text(),'Unpublish')]";

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
    publishPageButtonSelector,
    returnPagesToDashboardSelector,
    pagesPublishedSelector,
    textPagePublishedSelector,
    updatePageSelector,
    confirmUpdateSelector,
    buttonPagesSettingSelector,
    deletePageSelector,
    confirmDeletePageSelector,
    textDraftPagesSelector,
    schedulePageSelector,
    schedulePageButtonSelector,
    textSchedulePageSelector,
    unpublishPageSelector,
    confirmUnpublishSelector
}
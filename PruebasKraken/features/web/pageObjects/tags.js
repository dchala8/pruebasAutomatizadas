const tagNameSelector = '//input[@name="name"]';
const tagColorTextSelector = "//input[@name='accent-color' and @type='text']";
const retrySaveSelector = "//*[name()='svg' and @class='retry_svg__retry-animated']"
const descTextAreaSelector = "//textarea[@name='description']";

function getTagElementSelector(tagName){
    return '//h3[text()="'+tagName+'"]';
}

module.exports = {
    tagNameSelector,
    getTagElementSelector,
    tagColorTextSelector,
    retrySaveSelector,
    descTextAreaSelector
}
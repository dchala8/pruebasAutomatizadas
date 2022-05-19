const tagNameSelector = '//input[@name="name"]';
const tagColorTextSelector = "//input[@name='accent-color' and @type='text']";
const descTextAreaSelector = "//textarea[@name='description']";

function getTagElementSelector(tagName){
    return '//h3[text()="'+tagName+'"]';
}

module.exports = {
    tagNameSelector,
    getTagElementSelector,
    tagColorTextSelector,
    descTextAreaSelector
}
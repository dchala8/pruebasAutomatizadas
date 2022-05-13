const tagNameSelector = '//input[@name="name"]';

function getTagElementSelector(tagName){
    return '//h3[text()="'+tagName+'"]';
}

module.exports = {
    tagNameSelector,
    getTagElementSelector
}
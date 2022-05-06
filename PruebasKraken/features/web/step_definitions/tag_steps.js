const { Given, When, Then } = require('@cucumber/cucumber');

Then('I enter text {kraken-string} into field with id "name"', async function (tagName) {
    let element = await this.driver.$('//input[@name="name"]');
    return await element.setValue(tagName);
});
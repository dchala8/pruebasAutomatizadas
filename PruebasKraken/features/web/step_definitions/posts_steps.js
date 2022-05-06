const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

When('I enter correo {kraken-string}', async function (email) {
    let element = await this.driver.$('[name="identification"]');
    return await element.setValue(email);
});

When('I enter clave {kraken-string}', async function (password) {
    let element = await this.driver.$('[name="password"]');
    return await element.setValue(password);
});

When('I click sign in', async function() {
    let element = await this.driver.$('span*=Sign in');
    return await element.click();
});

When('I select option posts', async function() {
    let element = await this.driver.$('//li/a[@href="#/posts/"]');
    return await element.click();
});

When('I select New post', async function() {
    let element = await this.driver.$('span=New post');
    return await element.click();
});

When('I write a new post with title {string}', async function(text) {
    let element = await this.driver.$('//textarea[@placeholder="Post title"]');
    await element.setValue(text);
    let element2 = await this.driver.$('//div[@class="gh-editor-feature-image-container"]')
    return await element2.click();
});

When('I publish my new post', async function(){
    let element = await this.driver.$("//span[contains(text(),'Publish')]");
    await element.click();
    let element2 = await this.driver.$("//button/span[contains(text(),'Publish')]");
    await element2.click();
    return await element2.click();
});

When('I return to dashboard', async function(){
    let element = await this.driver.$("//div/a/span[text()='Posts']");
    return await element.click();
});

When('I search for published posts with text {string}', async function(text){
    let element1 = await this.driver.$("//a[@title='Published']");
    await element1.click();
    let element2 = await this.driver.$(`h3*=${text}`);
    return element2.click();
});

When('I modify the post writing {string}', async function(text){
    let element1 = await this.driver.$("//textarea[@placeholder='Post title']");
    await element1.setValue(text);
    let element2 = await this.driver.$('//div[@class="gh-editor-feature-image-container"]');
    return await element2.click();
});

When('I publish my modified post', async function(){
    let element1 = await this.driver.$("//span[contains(text(),'Update')]");
    await element1.click();
    let element2 = await this.driver.$("//button/span[contains(text(),'Update')]");
    await element2.waitForDisplayed({ timeout: 5000 })
    return await element2.click();
});

Then('I should see the modified post with text {string}', async function(text){
    let element1 = await this.driver.$("//a[@title='Published']");
    await element1.click();
    let element2 = await this.driver.$(`h3*=${text}`).isDisplayed();
    expect(element2).to.equal(true);
});


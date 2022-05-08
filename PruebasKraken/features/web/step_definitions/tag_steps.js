const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;

Then('I enter text {string} into field with id "name"', async function (tagName) {
    let element = await this.driver.$('//input[@name="name"]');
    return await element.setValue(tagName);
});

Then('I define tag name {string} into tags field', async function (tagName) {
    let element = await this.driver.$('//div[@id="tag-input"]/ul/input');
    await element.setValue(tagName);
    return await element.setValue('\uE007');
});

Then('I found post {string} with tag {string} related', async function (postTitle,tagName) {
    let element = await this.driver.$('//header[@class="post-card-header"]/div[text()="'+tagName+'"]/following::h2[text()="'+postTitle+'"]');
    let exists = false;
    if(element){
        exists = true;
    }
    return expect(exists).to.be.true;
});

Then('I select a tag with name {string}', async function (tagName) {
    let element = await this.driver.$('//h3[text()="'+tagName+'"]');
    return await element.click();
});

Then('I dont found post {string} with tag {string} related', async function (postTitle,tagName) {
    let elements = await this.driver.$$('//header[@class="post-card-header"]/div[text()="'+tagName+'"]/following::h2[text()="'+postTitle+'"]');
    expect(elements.length).to.equal(0);
});

When('I write a new page with title {string}', async function(text) {
    let element = await this.driver.$('//textarea[@placeholder="Page title"]');
    return await element.setValue(text);
});

When('I return to main page', async function(){
    let element1 = await this.driver.$("//div/a/span[text()='Posts']");
    return await element1.click();
});

When('I filter by tag {string}', async function(tagName){
    let element1 = await this.driver.$("//span[@class='ember-power-select-selected-item' and text()='All tags']");
    await element1.click();
    let element2 = await this.driver.$("//li[@class='ember-power-select-option' and text()='"+tagName+"']");
    return await element2.click();
});

Then('I found page {string}', async function (pageTitle) {
    let element = await this.driver.$("//h3[@class='gh-content-entry-title' and text()='"+pageTitle+"']");
    let exists = false;
    if(element){
        exists = true;
    }
    return expect(exists).to.be.true;
});

When('I publish my new page', async function(){
    let element = await this.driver.$("//span[contains(text(),'Publish')]");
    await element.click();
    let element2 = await this.driver.$("//button/span[contains(text(),'Publish')]");
    return await element2.click();
});

When('I create member with name {kraken-string} and email {kraken-string}', async function(memberName,memberEmail){
    let element = await this.driver.$("[name='name']");
    await element.setValue(memberName);
    let element2 = await this.driver.$("[name='email']");
    await element2.setValue(memberEmail);
    let element3= await this.driver.$("//button/span[text()='Save']");
    return await element3.click();
});

Then('I found member with name {kraken-string}', async function (memberName) {
    let element = await this.driver.$("//h3[@class='ma0 pa0 gh-members-list-name ' and text()='"+memberName+"']");
    let exists = false;
    if(element){
        exists = true;
    }
    return expect(exists).to.be.true;
});

Then('I set new name {kraken-string} to member with name {kraken-string}', async function (newMemberName,memberName) {
    let element = await this.driver.$("//h3[@class='ma0 pa0 gh-members-list-name ' and text()='"+memberName+"']");
    await element.click();
    let element2 = await this.driver.$("[name='name']");
    await element2.waitForDisplayed({ timeout: 3000 });
    await element2.setValue(newMemberName);
    let element3= await this.driver.$("//button/span[text()='Save']");
    return await element3.click();
});

When('I filter by author {kraken-string}', async function(autorName){
    let element1 = await this.driver.$("//span[@class='ember-power-select-selected-item' and text()='All authors']");
    await element1.click();
    let element2 = await this.driver.$("//li[@class='ember-power-select-option' and text()='"+autorName+"']");
    return await element2.click();
});

Then('I set new name {kraken-string} to author with name {kraken-string}', async function (newAuthorName,authorName) {
    let element = await this.driver.$("//h3[@class='apps-card-app-title' and text()='"+authorName+"']");
    await element.click();
    let element2 = await this.driver.$("//input[@id='user-name']");
    await element2.waitForDisplayed({ timeout: 3000 });
    await element2.setValue(newAuthorName);
    let element3= await this.driver.$("//button/span[text()='Save']");
    return await element3.click();
});

Then('I found post with title {string}', async function (postTitle) {
    let element = await this.driver.$("//h2[@class='post-card-title' and text()='"+postTitle+"']");
    let exists = false;
    if(element){
        exists = true;
    }
    return expect(exists).to.be.true;
});

When('I navigate to view site page {kraken-string}', async function (baseUrl) {
    return await this.driver.url(baseUrl);
});

When('I navigate to edit page {kraken-string}', async function (baseUrl) {
    return await this.driver.url(baseUrl+"/ghost");
});

Then('I change title to {string} of post with title {string}', async function (newPostTitle,postTitle) {
    let element = await this.driver.$("//h3[@class='gh-content-entry-title' and text()='"+postTitle+"']");
    await element.click();
    let element3 = await this.driver.$('//textarea[@placeholder="Post title"]');
    await element3.waitForDisplayed({ timeout: 3000 });
    return await element3.setValue(newPostTitle);
});

When('I update my new post', async function(){
    let element = await this.driver.$("//span[contains(text(),'Update')]");
    await element.click();
    let element2 = await this.driver.$("//button/span[contains(text(),'Update')]");
    return await element2.click();
});

When('I set title with {string}', async function(newTitle){
    let element = await this.driver.$("//p[text()='The name of your site']/preceding-sibling::input");
    return await element.setValue(newTitle);
});

Then('I found site with title {string}', async function (siteTitle) {
    let element = await this.driver.$("//h1[contains(text(), '"+siteTitle+"') and @class='site-title']");
    let exists = false;
    if(element){
        exists = true;
    }
    return expect(exists).to.be.true;
});

Then('I change current password {kraken-string} to new password {kraken-string}', async function (currentPassword,newPassword) {
    let element = await this.driver.$("//input[@id='user-password-old']");
    await element.setValue(currentPassword);
    let element2 = await this.driver.$("//input[@id='user-password-new']");
    await element2.setValue(newPassword);
    let element3 = await this.driver.$("//input[@id='user-new-password-verification']");
    return await element3.setValue(newPassword);
});

Then('I found password error message', async function () {
    let element = await this.driver.$("//p[@class='main-error' and contains(text(),'Your password is incorrect')]");
    let exists = false;
    if(element){
        exists = true;
    }
    return expect(exists).to.be.true;
});

Then('I am on dashboard page', async function () {
    let element = await this.driver.$("//h2[@class='gh-canvas-title' and contains(text(), 'Dashboard')]");
    let exists = false;
    if(element){
        exists = true;
    }
    return expect(exists).to.be.true;
});
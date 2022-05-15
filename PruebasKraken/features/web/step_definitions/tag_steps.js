const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const tagsPO = require('../pageObjects/tags')
const postsPO = require('../pageObjects/posts')
const sitePO = require('../pageObjects/site')
const pagesPO = require('../pageObjects/pages')
const membersPO = require('../pageObjects/members')
const settingsPO = require('../pageObjects/settings')
const loginPO = require('../pageObjects/login')
const mainPO = require('../pageObjects/main')

Then('I enter text {string} into field with id "name"', async function (tagName) {
    let element = await this.driver.$(tagsPO.tagNameSelector);
    return await element.setValue(tagName);
});

Then('I define tag name {string} into tags field', async function (tagName) {
    let element = await this.driver.$(postsPO.relatedTagsNameSelector);
    await element.setValue(tagName);
    return await element.setValue('\uE007');
});

Then('I found post {string} with tag {string} related', async function (postTitle,tagName) {
    let element = await this.driver.$(sitePO.getPostHeaderSelector(tagName,postTitle));
    let exists = false;
    if(element){
        exists = true;
    }
    return expect(exists).to.be.true;
});

Then('I select a tag with name {string}', async function (tagName) {
    let element = await this.driver.$(tagsPO.getTagElementSelector(tagName));
    return await element.click();
});

Then('I dont found post {string} with tag {string} related', async function (postTitle,tagName) {
    let elements = await this.driver.$$(sitePO.getPostHeaderSelector(tagName,postTitle));
    expect(elements.length).to.equal(0);
});

When('I write a new page with title {string}', async function(text) {
    let element = await this.driver.$(pagesPO.pageTitleSelector);
    return await element.setValue(text);
});

When('I return to main page', async function(){
    let element1 = await this.driver.$(postsPO.returnToMainSelector);
    return await element1.click();
});

When('I filter by tag {string}', async function(tagName){
    let element1 = await this.driver.$(pagesPO.filterByTagSelector);
    await element1.click();
    let element2 = await this.driver.$(pagesPO.selectTagFromFilter(tagName));
    return await element2.click();
});

Then('I found page {string}', async function (pageTitle) {
    let element = await this.driver.$(pagesPO.getpageElementSelector(pageTitle));
    let exists = false;
    if(element){
        exists = true;
    }
    return expect(exists).to.be.true;
});

When('I publish my new page', async function(){
    let element = await this.driver.$(pagesPO.publishPageLinkSelector);
    await element.click();
    let element2 = await this.driver.$(pagesPO.publishPageButtonSelector);
    return await element2.click();
});

When('I create member with name {kraken-string} and email {kraken-string}', async function(memberName,memberEmail){
    let element = await this.driver.$(membersPO.nameInputSelector);
    await element.setValue(memberName);
    let element2 = await this.driver.$(membersPO.emailInputSelector);
    await element2.setValue(memberEmail);
    let element3= await this.driver.$(membersPO.saveButtonSelector);
    return await element3.click();
});

Then('I found member with name {kraken-string}', async function (memberName) {
    let element = await this.driver.$(membersPO.getMemberElement(memberName));
    let exists = false;
    if(element){
        exists = true;
    }
    return expect(exists).to.be.true;
});

Then('I set new name {kraken-string} to member with name {kraken-string}', async function (newMemberName,memberName) {
    let element = await this.driver.$(membersPO.getMemberElement(memberName));
    await element.click();
    let element2 = await this.driver.$(membersPO.nameInputSelector);
    await element2.waitForDisplayed({ timeout: 3000 });
    await element2.setValue(newMemberName);
    let element3= await this.driver.$(membersPO.saveButtonSelector);
    return await element3.click();
});

When('I filter by author {kraken-string}', async function(authorName){
    let element1 = await this.driver.$(postsPO.filterByAuthorSelector);
    await element1.click();
    let element2 = await this.driver.$(postsPO.selectAuthorFromFilter(authorName));
    return await element2.click();
});

Then('I set new name {kraken-string} to author with name {kraken-string}', async function (newAuthorName,authorName) {
    let element = await this.driver.$(settingsPO.getAuthorElement(authorName));
    await element.click();
    let element2 = await this.driver.$(settingsPO.userNameInputSelector);
    await element2.waitForDisplayed({ timeout: 3000 });
    await element2.setValue(newAuthorName);
    let element3= await this.driver.$(settingsPO.saveButtonSelector);
    return await element3.click();
});

Then('I found post with title {string}', async function (postTitle) {
    let element = await this.driver.$(sitePO.getPostHeaderWithTitleSelector(postTitle));
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
    let element = await this.driver.$(postsPO.getPostElementSelector(postTitle));
    await element.click();
    let element3 = await this.driver.$(postsPO.postTitleInputSelector);
    await element3.waitForDisplayed({ timeout: 3000 });
    return await element3.setValue(newPostTitle);
});

When('I update my new post', async function(){
    let element = await this.driver.$(postsPO.updatePostLinkSelector);
    await element.click();
    let element2 = await this.driver.$(postsPO.updatePostButtonSelector);
    return await element2.click();
});

When('I set title with {string}', async function(newTitle){
    let element = await this.driver.$(settingsPO.siteTitleInputSelector);
    return await element.setValue(newTitle);
});

Then('I found site with title {string}', async function (siteTitle) {
    let element = await this.driver.$(sitePO.getSiteTitleSelector(siteTitle));
    let exists = false;
    if(element){
        exists = true;
    }
    return expect(exists).to.be.true;
});

Then('I change current password {kraken-string} to new password {kraken-string}', async function (currentPassword,newPassword) {
    let element = await this.driver.$(settingsPO.oldPasswordInputSelector);
    await element.setValue(currentPassword);
    let element2 = await this.driver.$(settingsPO.newPasswordInputSelect);
    await element2.setValue(newPassword);
    let element3 = await this.driver.$(settingsPO.newPasswordVerificationInputSelect);
    return await element3.setValue(newPassword);
});

Then('I found password error message', async function () {
    let element = await this.driver.$(loginPO.passwordErrorLabelSelector);
    let exists = false;
    if(element){
        exists = true;
    }
    return expect(exists).to.be.true;
});

Then('I am on dashboard page', async function () {
    let element = await this.driver.$(mainPO.dashboardCanvanSelector);
    let exists = false;
    if(element){
        exists = true;
    }
    return expect(exists).to.be.true;
});
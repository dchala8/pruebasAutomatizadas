const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const fs = require('fs');
const basePath = './screenshots/';
const tagsPO = require('../pageObjects/tags')
const postsPO = require('../pageObjects/posts')
const sitePO = require('../pageObjects/site')
const pagesPO = require('../pageObjects/pages')
const membersPO = require('../pageObjects/members')
const settingsPO = require('../pageObjects/settings')
const loginPO = require('../pageObjects/login')
const mainPO = require('../pageObjects/main')

When('I create a new post with random text {kraken-string}', async function(text){
    let element1 = await this.driver.$(postsPO.buttonPostSelector);
    await element1.waitForDisplayed({ timeout: 10000 });
    await element1.click();
    let element2 = await this.driver.$(postsPO.newPostSelector);
    await element2.waitForDisplayed({ timeout: 3000 });
    await element2.click();
    let element3 = await this.driver.$(postsPO.titlePostSelector);
    await element3.waitForDisplayed({ timeout: 3000 });
    await element3.setValue(text);
    let element4 = await this.driver.$(postsPO.clickOutTitleSelector);
    await element4.waitForDisplayed({ timeout: 3000 });
    return await element4.click();
});

When('I search for published posts with random text {kraken-string}', async function(title){
    let element1 = await this.driver.$(mainPO.publishedSelector);
    await element1.click();
    let element2 = await this.driver.$(mainPO.selectPublishedPost(title));
    return element2.click();
});

When('I modify the post writing random text {kraken-string}', async function(text){
    let element1 = await this.driver.$(postsPO.titlePostSelector);
    await element1.setValue(text);
    let element2 = await this.driver.$(postsPO.clickOutTitleSelector);
    return await element2.click();
});

Then('I should see the modified post with random text {kraken-string}', async function(title){
    let element1 = await this.driver.$(mainPO.publishedSelector);
    await element1.click();
    let element2 = await this.driver.$(mainPO.selectPublishedPost(title)).isDisplayed();
    expect(element2).to.equal(true);
});

When('I search for draft posts with random text {kraken-string}', async function(title){
    let element1 = await this.driver.$(mainPO.draftSelector);
    await element1.click();
    let element2 = await this.driver.$(mainPO.selectPublishedPost(title));
    return element2.click();
});

Then('I should see the published post with random text {kraken-string}', async function(text){
    let element1 = await this.driver.$(mainPO.publishedSelector);
    await element1.waitForDisplayed({ timeout: 3000 });
    await element1.click();
    let element2 = await this.driver.$(mainPO.selectPublishedPost(text)).isDisplayed();
    expect(element2).to.equal(true);
});

Then('I should see the scheduled post with random text {kraken-string}', async function(text){
    let element1 = await this.driver.$(mainPO.selectPublishedPost(text)).isDisplayed();
    expect(element1).to.equal(true);
});

Then('I should see drafted post with random text {kraken-string}', async function(text){
    let element1 = await this.driver.$(mainPO.selectPublishedPost(text)).isDisplayed();
    expect(element1).to.equal(true);
});

When('I create a new page with random text {kraken-string}', async function(text){
    let element1 = await this.driver.$(mainPO.pageSelector);
    await element1.waitForDisplayed({ timeout: 5000 });
    await element1.click();
    let element2 = await this.driver.$(mainPO.pageButton);
    await element2.waitForDisplayed({ timeout: 3000 });
    await element2.click();
    let element3 = await this.driver.$(pagesPO.pageTitleSelector);
    await element3.waitForDisplayed({ timeout: 3000 });
    await element3.setValue(text);
    let element4 = await this.driver.$(postsPO.clickOutTitleSelector)
    await element4.waitForDisplayed({ timeout: 3000 });
    return await element4.click();
});

When('I search for published pages with random text {kraken-string}', async function(text){
    let element1 = await this.driver.$(pagesPO.pagesPublishedSelector);
    await element1.click();
    let element2 = await this.driver.$(pagesPO.textPagePublishedSelector);
    await element2.click();
    let element3 = await this.driver.$(mainPO.selectPublishedPost(text));
    return await element3.click();
});

When('I modify the page writing random text {kraken-string}', async function(text){
    let element1 = await this.driver.$(pagesPO.pageTitleSelector);
    await element1.setValue(text);
    let element2 = await this.driver.$(postsPO.clickOutTitleSelector);
    return await element2.click();
});

Then('I should see the modified page with random text {kraken-string}', async function(text){
    let element1 = await this.driver.$(pagesPO.pagesPublishedSelector);
    await element1.click();
    let element2 = await this.driver.$(pagesPO.textPagePublishedSelector);
    await element2.click();
    let element3 = await this.driver.$(mainPO.selectPublishedPost(text)).isDisplayed();
    expect(element3).to.equal(true);
});

When('I search for draft pages with random text {kraken-string}', async function(text){
    let element1 = await this.driver.$(pagesPO.pagesPublishedSelector);
    await element1.click();
    let element2 = await this.driver.$(pagesPO.textDraftPagesSelector);
    await element2.click();
    let element3 = await this.driver.$(mainPO.selectPublishedPost(text));
    return await element3.click();
});

Then('I should see the published page with random text {kraken-string}', async function(text){
    let element1 = await this.driver.$(pagesPO.pagesPublishedSelector);
    await element1.click();
    let element2 = await this.driver.$(pagesPO.textPagePublishedSelector);
    await element2.click();
    let element3 = await this.driver.$(mainPO.selectPublishedPost(text)).isDisplayed();
    expect(element3).to.equal(true);
});

Then('I should see the scheduled page with random text {kraken-string}', async function(text){
    let element1 = await this.driver.$(mainPO.selectPublishedPost(text)).isDisplayed();
    expect(element1).to.equal(true);
});

Then('I should see draft page with random text {kraken-string}', async function(text){
    let element1 = await this.driver.$(mainPO.selectPublishedPost(text)).isDisplayed();
    expect(element1).to.equal(true);
});

/****************************************Setting steps*************************************/

When('I select profile menu', async function(){
    let element1 = await this.driver.$(settingsPO.profileSelect);
    await element1.click();
    let element2 = await this.driver.$(settingsPO.yourprofileoptionSelect);
    return element2.click();
});

When('I write the next value for Website field {kraken-string}', async function(text){
    let element1 = await this.driver.$(settingsPO.inputWebsiteSelect);
    return await element1.setValue(text);
});

When('I click button save', async function(){
    let element1 = await this.driver.$(settingsPO.saveButtonSelector);
    return element1.click();
});

Then('I should not be able to save changes', async function(){
    let element1 = await this.driver.$(settingsPO.urlErrorMsj).isDisplayed();
    expect(element1).to.equal(true);
});
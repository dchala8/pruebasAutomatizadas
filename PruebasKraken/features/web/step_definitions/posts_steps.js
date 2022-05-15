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

When('I select option posts', async function() {
    let element = await this.driver.$(mainPO.postSelector);
    return await element.click();
});

When('I select New post', async function() {
    let element = await this.driver.$(postsPO.newPostSelector);
    return await element.click();
});

When('I write a new post with title {string}', async function(text) {
    let element = await this.driver.$(postsPO.titlePostSelector);
    await element.setValue(text);
    let element2 = await this.driver.$(postsPO.clickOutTitleSelector)
    return await element2.click();
});

When('I make login with {kraken-string} and {kraken-string}', async function(email,password){
    let element1 = await this.driver.$(loginPO.emailSelector);
    await element1.setValue(email);
    let element2 = await this.driver.$(loginPO.passwordSelector);
    await element2.waitForDisplayed({ timeout: 3000 });
    await element2.setValue(password);
    let element3 = await this.driver.$(loginPO.signinSelector);
    await element3.waitForDisplayed({ timeout: 3000 });
    return await element3.click();
});

When('I create a new post with text {string}', async function(text){
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


When('I publish my new post', async function(){
    let element = await this.driver.$(postsPO.publishPostSelector);
    await element.click();
    let element2 = await this.driver.$(postsPO.confirmPublishSelector);
    await element2.click();
    return await element2.click();
});

When('I return to dashboard', async function(){
    let element1 = await this.driver.$(postsPO.returnPostToDashboard);
    return await element1.click();
});

When('I search for published posts with text {string}', async function(title){
    let element1 = await this.driver.$(mainPO.publishedSelector);
    await element1.click();
    let element2 = await this.driver.$(mainPO.selectPublishedPost(title));
    return element2.click();
});

When('I modify the post writing {string}', async function(text){
    let element1 = await this.driver.$(postsPO.titlePostSelector);
    await element1.setValue(text);
    let element2 = await this.driver.$(postsPO.clickOutTitleSelector);
    return await element2.click();
});

When('I publish my modified post', async function(){
    let element1 = await this.driver.$(postsPO.buttonUpdateSelector);
    await element1.click();
    let element2 = await this.driver.$(postsPO.buttonConfirmUpdateSelector);
    await element2.waitForDisplayed({ timeout: 5000 })
    return await element2.click();
});

Then('I should see the modified post with text {string}', async function(title){
    let element1 = await this.driver.$(mainPO.publishedSelector);
    await element1.click();
    let element2 = await this.driver.$(mainPO.selectPublishedPost(title)).isDisplayed();
    expect(element2).to.equal(true);
});

When('I delete the post', async function(){
    let element1 = await this.driver.$(postsPO.buttonSettingsSelector);
    await element1.click();
    let element2 = await this.driver.$(postsPO.deletePostSelector);
    await element2.waitForDisplayed({ timeout: 3000 });
    await element2.click();
    let element3 = await this.driver.$(postsPO.confirmDeleteSelector);
    await element3.waitForDisplayed({ timeout: 3000 });
    return await element3.click();
});

Then('I shouldnt see the deleted post', async function(){
    let element1 = await this.driver.$(mainPO.buttonDashboard).isDisplayed();
    expect(element1).to.equal(true);
});

When('I search for draft posts with text {string}', async function(title){
    let element1 = await this.driver.$(mainPO.draftSelector);
    await element1.click();
    let element2 = await this.driver.$(mainPO.selectPublishedPost(title));
    return element2.click();
});

Then('I should see the published post with text {string}', async function(text){
    let element1 = await this.driver.$(mainPO.publishedSelector);
    await element1.waitForDisplayed({ timeout: 3000 });
    await element1.click();
    let element2 = await this.driver.$(mainPO.selectPublishedPost(text)).isDisplayed();
    expect(element2).to.equal(true);
});

When('I schedule post for a future date', async function(){
    let element1 = await this.driver.$(postsPO.publishPostSelector);
    await element1.click();
    let element2 = await this.driver.$(postsPO.scheduleSelector);
    await element2.click();
    let element3 = await this.driver.$(postsPO.confirmScheduleSelector);
    await element3.click();
    return await element3.click();
});

When('I select scheduled from Dashboard', async function(){
    let element1 = await this.driver.$(mainPO.scheduleSelector);
    return await element1.click();
});

Then('I should see the scheduled post with text {string}', async function(text){
    let element1 = await this.driver.$(mainPO.selectPublishedPost(text)).isDisplayed();
    expect(element1).to.equal(true);
});

When('I unpublish the post', async function(){
    let element1 = await this.driver.$(postsPO.buttonUpdateSelector);
    await element1.click();
    let element2 = await this.driver.$(postsPO.unpublishSelector);
    await element2.click();
    let element3 = await this.driver.$(postsPO.confirmUnpublishSelector);
    return await element3.click();
});

When('I select drafted from Dashboard', async function(){
    let element1 = await this.driver.$("//a[@title='Drafts']");
    return await element1.click();
});

Then('I should see drafted post with text {string}', async function(text){
    let element1 = await this.driver.$(mainPO.selectPublishedPost(text)).isDisplayed();
    expect(element1).to.equal(true);
});

When('I create a new page with text {string}', async function(text){
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

When('I return to dashboard from pages', async function(){
    let element1 = await this.driver.$(pagesPO.returnPagesToDashboardSelector);
    return await element1.click();
});

When('I search for published pages with text {string}', async function(text){
    let element1 = await this.driver.$(pagesPO.pagesPublishedSelector);
    await element1.click();
    let element2 = await this.driver.$(pagesPO.textPagePublishedSelector);
    await element2.click();
    let element3 = await this.driver.$(mainPO.selectPublishedPost(text));
    return await element3.click();
});

When('I modify the page writing {string}', async function(text){
    let element1 = await this.driver.$(pagesPO.pageTitleSelector);
    await element1.setValue(text);
    let element2 = await this.driver.$(postsPO.clickOutTitleSelector);
    return await element2.click();
});

When('I publish my modified page', async function(){
    let element1 = await this.driver.$(pagesPO.updatePageSelector);
    await element1.click();
    let element2 = await this.driver.$(pagesPO.confirmUpdateSelector);
    await element2.waitForDisplayed({ timeout: 5000 })
    return await element2.click();
});

Then('I should see the modified page with text {string}', async function(text){
    let element1 = await this.driver.$(pagesPO.pagesPublishedSelector);
    await element1.click();
    let element2 = await this.driver.$(pagesPO.textPagePublishedSelector);
    await element2.click();
    let element3 = await this.driver.$(mainPO.selectPublishedPost(text)).isDisplayed();
    expect(element3).to.equal(true);
});

When('I delete the page', async function(){
    let element1 = await this.driver.$(pagesPO.buttonPagesSettingSelector);
    await element1.click();
    let element2 = await this.driver.$(pagesPO.deletePageSelector);
    await element2.waitForDisplayed({ timeout: 3000 });
    await element2.click();
    let element3 = await this.driver.$(pagesPO.confirmDeletePageSelector);
    await element3.waitForDisplayed({ timeout: 3000 });
    return await element3.click();
});

Then('I shouldnt see the deleted page', async function(){
    let element1 = await this.driver.$(mainPO.buttonDashboard).isDisplayed();
    expect(element1).to.equal(true);
});

When('I search for draft pages with text {string}', async function(text){
    let element1 = await this.driver.$(pagesPO.pagesPublishedSelector);
    await element1.click();
    let element2 = await this.driver.$(pagesPO.textDraftPagesSelector);
    await element2.click();
    let element3 = await this.driver.$(mainPO.selectPublishedPost(text));
    return await element3.click();
});

Then('I should see the published page with text {string}', async function(text){
    let element1 = await this.driver.$(pagesPO.pagesPublishedSelector);
    await element1.click();
    let element2 = await this.driver.$(pagesPO.textPagePublishedSelector);
    await element2.click();
    let element3 = await this.driver.$(mainPO.selectPublishedPost(text)).isDisplayed();
    expect(element3).to.equal(true);
});

When('I schedule page for a future date', async function(){
    let element1 = await this.driver.$(pagesPO.publishPageLinkSelector);
    await element1.click();
    let element2 = await this.driver.$(pagesPO.schedulePageSelector);
    await element2.click();
    let element3 = await this.driver.$(pagesPO.schedulePageButtonSelector);
    //await element3.waitForDisplayed({ timeout: 3000 });
    return await element3.click();
});

When('I select scheduled pages', async function(){
    let element1 = await this.driver.$(pagesPO.pagesPublishedSelector);
    await element1.click();
    let element2 = await this.driver.$(pagesPO.textSchedulePageSelector);
    return await element2.click();
});

Then('I should see the scheduled page with text {string}', async function(text){
    let element1 = await this.driver.$(mainPO.selectPublishedPost(text)).isDisplayed();
    expect(element1).to.equal(true);
});

When('I unpublish the page', async function(){
    let element1 = await this.driver.$(pagesPO.updatePageSelector);
    await element1.click();
    let element2 = await this.driver.$(pagesPO.unpublishPageSelector);
    await element2.click();
    let element3 = await this.driver.$(pagesPO.confirmUnpublishSelector);
    return await element3.click();
});

When('I select draft pages', async function(){
    let element1 = await this.driver.$(pagesPO.pagesPublishedSelector);
    await element1.click();
    let element2 = await this.driver.$(pagesPO.textDraftPagesSelector);
    return await element2.click();
});

Then('I should see draft page with text {string}', async function(text){
    let element1 = await this.driver.$(mainPO.selectPublishedPost(text)).isDisplayed();
    expect(element1).to.equal(true);
});

When('I take a screenshot of scenario {string} and step number {string}', async function(scenarioID, stepNumber){
    let dir = basePath+this.testScenarioId;
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    return await this.driver.saveScreenshot(dir+"/screenshotScenario"+scenarioID+"_StepNumber"+stepNumber+".png");
});
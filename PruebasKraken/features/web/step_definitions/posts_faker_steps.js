const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const fs = require('fs');
const basePath = './screenshots/';
const tagsPO = require('../pageObjects/tags');
const postsPO = require('../pageObjects/posts');
const sitePO = require('../pageObjects/site');
const pagesPO = require('../pageObjects/pages');
const membersPO = require('../pageObjects/members');
const settingsPO = require('../pageObjects/settings');
const loginPO = require('../pageObjects/login');
const mainPO = require('../pageObjects/main');
const localFaker = require('@faker-js/faker');
const personPoolData = require('../poolData/person');

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

Then('I should be able to save changes', async function(){
    let element1 = await this.driver.$(settingsPO.urlErrorMsj).isDisplayed();
    expect(element1).to.equal(false);
});

When('I write the next valid value for Website field {kraken-string}', async function(text){
    let element1 = await this.driver.$(settingsPO.inputWebsiteSelect);
    return await element1.setValue("http://" + text + ".com");
});

When('I write the current password {kraken-string}', async function(text){
    let element1 = await this.driver.$(settingsPO.oldPasswordInputSelector);
    return await element1.setValue(text);
});

When('I click button Change Password', async function(){
    let element1 = await this.driver.$(settingsPO.savePasswordSelector);
    return await element1.click();
});

Then('I should not be able to change password', async function(){
    let element1 = await this.driver.$(settingsPO.newPasswordErrorMsj).isDisplayed();
    expect(element1).to.equal(true);
});

When('I write the new password {kraken-string}', async function(text){
    let element1 = await this.driver.$(settingsPO.newPasswordInputSelect);
    return await element1.setValue(text);
});

Then('I should get error in confirmation password', async function(){
    let element1 = await this.driver.$(settingsPO.confPasswordErrorMsj).isDisplayed();
    expect(element1).to.equal(true);
});

When('I confirm the new password {kraken-string}', async function(text){
    let element1 = await this.driver.$(settingsPO.newPasswordVerificationInputSelect);
    return await element1.setValue(text);
});

Then('I should get error in old password', async function(){
    let element1 = await this.driver.$(settingsPO.oldPasswordErrorMsj).isDisplayed();
    expect(element1).to.equal(true);
});

When('I click design settings', async function(){
    let element1 = await this.driver.$(settingsPO.settingSelector);
    await element1.click();
    let element2 = await this.driver.$(settingsPO.designSelector);
    return await element2.click();
});

When('I select brand option', async function(){
    let element1 = await this.driver.$(settingsPO.brandOptionSelector);
    return await element1.click();
});

When('I write valid value for description {kraken-string}', async function(text){
    let element1 = await this.driver.$(settingsPO.siteDescriptionSelector);
    return await element1.setValue(text);
});

When('I return to dashboard from settings', async function(){
    let element1 = await this.driver.$(settingsPO.settingSelector);
    return await element1.click();
});

When('I click View Site', async function(){
    let element1 = await this.driver.$(settingsPO.siteSelector);
    return await element1.click();
});

Then('I should see the new description with value {kraken-string}', async function(text){
    let element1 = await this.driver.$(sitePO.getSiteDescriptionSelector(text)).isDisplayed();
    expect(element1).to.equal(true);
});

When('I delete value for description', async function(){
    let element1 = await this.driver.$(settingsPO.siteDescriptionSelector);
    return await element1.setValue("");
});

Then('I should see empty the description field text', async function(){
    let element1 = await this.driver.$(sitePO.descriptionTextSelector).isDisplayed();
    expect(element1).to.equal(false);
});

When('I define site description with {kraken-string} characters', async function(descLengthString){
    var length = Number.parseInt(descLengthString);
    var description = localFaker.faker.random.alphaNumeric(length);
    let element = await this.driver.$(settingsPO.siteDescriptionSelector);
    return await element.setValue(description);
});

Then('I should see error {kraken-string}', async function(msj){
    let element1 = await this.driver.$(settingsPO.getErrorMsj(msj)).isDisplayed();
    expect(element1).to.equal(true);
});

When('I define accent color value', async function(){
    let element1 = await this.driver.$(settingsPO.accentColorSelector);
    let color = personPoolData.getValidColor();
    return await element1.setValue(color);
});

Then('I should see new accent color', async function(){
    let element1 = await this.driver.$(sitePO.subscribeSelector).isDisplayed();
    expect(element1).to.equal(true);
});

When('I delete value for accent color', async function(){
    let element1 = await this.driver.$(settingsPO.accentColorSelector);
    return await element1.setValue("");
});

When('I select site-wide option', async function(){
    let element1 = await this.driver.$(settingsPO.siteWideSelector);
    return await element1.click();
});

When('I define header button background value', async function(){
    let element1 = await this.driver.$(settingsPO.headerButtonBackgroundSelector);
    let color = personPoolData.getValidColor();
    return await element1.setValue(color);
});

Then('I should see new header button background color', async function(){
    let element1 = await this.driver.$(sitePO.headerButtonSelector).isDisplayed();
    expect(element1).to.equal(true);
});

Then('I should see color format error {kraken-string}', async function(value){
    let element1 = await this.driver.$(settingsPO.getColorFormatErrorMsj(value)).isDisplayed();
    expect(element1).to.equal(true);
});

When('I delete header button background value', async function(){
    let element1 = await this.driver.$(settingsPO.headerButtonBackgroundSelector);
    return await element1.setValue("");
});

When('I expand publication language', async function(){
    let element1 = await this.driver.$(settingsPO.headerButtonBackgroundSelector);
    return await element1.setValue("");
});

When('I change language with value {kraken-string}', async function(value){
    let element1 = await this.driver.$(settingsPO.inputLanguageSelector);
    return await element1.setValue(value);
});

Then('I should get new language {kraken-string}', async function(value){
    let element1 = await this.driver.$(settingsPO.languageSelector);
    expect(value).to.equal(element1);
});

Then('I should not be able to save', async function(){
    let element1 = await this.driver.$(settingsPO.retrySelector).isDisplayed();
    expect(element1).to.equal(true);
});

When('I delete language value', async function(){
    let element1 = await this.driver.$(settingsPO.inputLanguageSelector);
    return await element1.clearValue();
});

When('I set value in Site Header {kraken-string}', async function(value){
    let element1 = await this.driver.$(settingsPO.siteHeaderTxtField);
    return await element1.setValue(value);
});

When('I set value in Site Footer', async function(){
    let element1 = await this.driver.$(settingsPO.siteFooterTxtField);
    var code = localFaker.faker.random.alphaNumeric(100);
    return await element1.setValue(code);
});
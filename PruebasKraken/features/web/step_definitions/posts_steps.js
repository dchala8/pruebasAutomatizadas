const { Given, When, Then } = require('@cucumber/cucumber');
const expect = require('chai').expect;
const fs = require('fs');
const basePath = './screenshots/';

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

When('I make login with {kraken-string} and {kraken-string}', async function(email,password){
    let element1 = await this.driver.$('[name="identification"]');
    await element1.setValue(email);
    let element2 = await this.driver.$('[name="password"]');
    await element2.waitForDisplayed({ timeout: 3000 });
    await element2.setValue(password);
    let element3 = await this.driver.$('span*=Sign in');
    await element3.waitForDisplayed({ timeout: 3000 });
    return await element3.click();
});

When('I create a new post with text {string}', async function(text){
    let element1 = await this.driver.$('//li/a[@href="#/posts/"]');
    await element1.waitForDisplayed({ timeout: 10000 });
    await element1.click();
    let element2 = await this.driver.$('span=New post');
    await element2.waitForDisplayed({ timeout: 3000 });
    await element2.click();
    let element3 = await this.driver.$('//textarea[@placeholder="Post title"]');
    await element3.waitForDisplayed({ timeout: 3000 });
    await element3.setValue(text);
    let element4 = await this.driver.$('//div[@class="gh-editor-feature-image-container"]')
    await element4.waitForDisplayed({ timeout: 3000 });
    return await element4.click();
});


When('I publish my new post', async function(){
    let element = await this.driver.$("//span[contains(text(),'Publish')]");
    await element.click();
    let element2 = await this.driver.$("//button/span[contains(text(),'Publish')]");
    await element2.click();
    return await element2.click();
});

When('I return to dashboard', async function(){
    let element1 = await this.driver.$("//div/a/span[text()='Posts']");
    return await element1.click();
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

When('I delete the post', async function(){
    let element1 = await this.driver.$("//button[@title='Settings']");
    await element1.click();
    let element2 = await this.driver.$("//*/*[contains(text(),'Delete')]");
    await element2.waitForDisplayed({ timeout: 3000 });
    await element2.click();
    let element3 = await this.driver.$("//div/button/span[contains(text(),'Delete')]");
    await element3.waitForDisplayed({ timeout: 3000 });
    return await element3.click();
});

Then('I shouldnt see the deleted post', async function(){
    let element1 = await this.driver.$("//a[@title='Dashboard']").isDisplayed();
    expect(element1).to.equal(true);
});

When('I search for draft posts with text {string}', async function(text){
    let element1 = await this.driver.$("//a[@title='Drafts']");
    await element1.click();
    let element2 = await this.driver.$(`h3*=${text}`);
    return element2.click();
});

Then('I should see the published post with text {string}', async function(text){
    let element1 = await this.driver.$("//a[@title='Published']");
    await element1.waitForDisplayed({ timeout: 3000 });
    await element1.click();
    let element2 = await this.driver.$(`h3*=${text}`).isDisplayed();
    expect(element2).to.equal(true);
});

When('I schedule post for a future date', async function(){
    let element1 = await this.driver.$("//span[contains(text(),'Publish')]");
    await element1.click();
    let element2 = await this.driver.$("//div[@class='gh-publishmenu-section']/div[2]/div[1]");
    await element2.click();
    let element3 = await this.driver.$("//button/span[contains(text(),'Schedule')]");
    await element3.click();
    return await element3.click();
});

When('I select scheduled from Dashboard', async function(){
    let element1 = await this.driver.$("//a[@title='Scheduled']");
    return await element1.click();
});

Then('I should see the scheduled post with text {string}', async function(text){
    let element1 = await this.driver.$(`h3*=${text}`).isDisplayed();
    expect(element1).to.equal(true);
});

When('I unpublish the post', async function(){
    let element1 = await this.driver.$("//span[contains(text(),'Update')]");
    await element1.click();
    let element2 = await this.driver.$("//section/div[@class='gh-publishmenu-radio ']/div[1]");
    await element2.click();
    let element3 = await this.driver.$("//button/span[contains(text(),'Unpublish')]");
    return await element3.click();
});

When('I select drafted from Dashboard', async function(){
    let element1 = await this.driver.$("//a[@title='Drafts']");
    return await element1.click();
});

Then('I should see drafted post with text {string}', async function(text){
    let element1 = await this.driver.$(`h3*=${text}`).isDisplayed();
    expect(element1).to.equal(true);
});

When('I create a new page with text {string}', async function(text){
    let element1 = await this.driver.$('//li/a[@href="#/pages/"]');
    await element1.waitForDisplayed({ timeout: 5000 });
    await element1.click();
    let element2 = await this.driver.$('span=New page');
    await element2.waitForDisplayed({ timeout: 3000 });
    await element2.click();
    let element3 = await this.driver.$('//textarea[@placeholder="Page title"]');
    await element3.waitForDisplayed({ timeout: 3000 });
    await element3.setValue(text);
    let element4 = await this.driver.$('//div[@class="gh-editor-feature-image-container"]')
    await element4.waitForDisplayed({ timeout: 3000 });
    return await element4.click();
});

When('I return to dashboard from pages', async function(){
    let element1 = await this.driver.$("//div/a/span[text()='Pages']");
    return await element1.click();
});

When('I search for published pages with text {string}', async function(text){
    let element1 = await this.driver.$("//div[contains(@class,'gh-contentfilter-menu gh-contentfilter-type')]/div/span");
    await element1.click();
    let element2 = await this.driver.$("//li[text()='Published pages']");
    await element2.click();
    let element3 = await this.driver.$(`h3*=${text}`);
    return await element3.click();
});

When('I modify the page writing {string}', async function(text){
    let element1 = await this.driver.$("//textarea[@placeholder='Page title']");
    await element1.setValue(text);
    let element2 = await this.driver.$('//div[@class="gh-editor-feature-image-container"]');
    return await element2.click();
});

When('I publish my modified page', async function(){
    let element1 = await this.driver.$("//span[contains(text(),'Update')]");
    await element1.click();
    let element2 = await this.driver.$("//button/span[contains(text(),'Update')]");
    await element2.waitForDisplayed({ timeout: 5000 })
    return await element2.click();
});

Then('I should see the modified page with text {string}', async function(text){
    let element1 = await this.driver.$("//div[contains(@class,'gh-contentfilter-menu gh-contentfilter-type')]/div/span");
    await element1.click();
    let element2 = await this.driver.$("//li[text()='Published pages']");
    await element2.click();
    let element3 = await this.driver.$(`h3*=${text}`).isDisplayed();
    expect(element3).to.equal(true);
});

When('I delete the page', async function(){
    let element1 = await this.driver.$("//button[@title='Settings']");
    await element1.click();
    let element2 = await this.driver.$("//*/*[contains(text(),'Delete')]");
    await element2.waitForDisplayed({ timeout: 3000 });
    await element2.click();
    let element3 = await this.driver.$("//div/button/span[contains(text(),'Delete')]");
    await element3.waitForDisplayed({ timeout: 3000 });
    return await element3.click();
});

Then('I shouldnt see the deleted page', async function(){
    let element1 = await this.driver.$("//a[@title='Dashboard']").isDisplayed();
    expect(element1).to.equal(true);
});

When('I search for draft pages with text {string}', async function(text){
    let element1 = await this.driver.$("//div[contains(@class,'gh-contentfilter-menu gh-contentfilter-type')]/div/span");
    await element1.click();
    let element2 = await this.driver.$("//li[text()='Draft pages']");
    await element2.click();
    let element3 = await this.driver.$(`h3*=${text}`);
    return await element3.click();
});

Then('I should see the published page with text {string}', async function(text){
    let element1 = await this.driver.$("//div[contains(@class,'gh-contentfilter-menu gh-contentfilter-type')]/div/span");
    await element1.click();
    let element2 = await this.driver.$("//li[text()='Published pages']");
    await element2.click();
    let element3 = await this.driver.$(`h3*=${text}`).isDisplayed();
    expect(element3).to.equal(true);
});

When('I schedule page for a future date', async function(){
    let element1 = await this.driver.$("//span[contains(text(),'Publish')]");
    await element1.click();
    let element2 = await this.driver.$("//div[@class='gh-publishmenu-section']/div[2]/div[1]");
    await element2.click();
    let element3 = await this.driver.$("//button/span[contains(text(),'Schedule')]");
    //await element3.waitForDisplayed({ timeout: 3000 });
    return await element3.click();
});

When('I select scheduled pages', async function(){
    let element1 = await this.driver.$("//div[contains(@class,'gh-contentfilter-menu gh-contentfilter-type')]/div/span");
    await element1.click();
    let element2 = await this.driver.$("//li[text()='Scheduled pages']");
    return await element2.click();
});

Then('I should see the scheduled page with text {string}', async function(text){
    let element1 = await this.driver.$(`h3*=${text}`).isDisplayed();
    expect(element1).to.equal(true);
});

When('I unpublish the page', async function(){
    let element1 = await this.driver.$("//span[contains(text(),'Update')]");
    await element1.click();
    let element2 = await this.driver.$("//section/div[@class='gh-publishmenu-radio ']/div[1]");
    await element2.click();
    let element3 = await this.driver.$("//button/span[contains(text(),'Unpublish')]");
    return await element3.click();
});

When('I select draft pages', async function(){
    let element1 = await this.driver.$("//div[contains(@class,'gh-contentfilter-menu gh-contentfilter-type')]/div/span");
    await element1.click();
    let element2 = await this.driver.$("//li[text()='Draft pages']");
    return await element2.click();
});

Then('I should see draft page with text {string}', async function(text){
    let element1 = await this.driver.$(`h3*=${text}`).isDisplayed();
    expect(element1).to.equal(true);
});

When('I take a screenshot of scenario {string} and step number {string}', async function(scenarioID, stepNumber){
    let dir = basePath+this.testScenarioId;
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    return await this.driver.saveScreenshot(dir+"/screenshotScenario"+scenarioID+"_StepNumber"+stepNumber+".png");
});
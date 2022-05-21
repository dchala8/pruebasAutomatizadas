const { Page } = require('puppeteer');
const { genVar } = require('./generalVariables.js');
const pos = require('./pageObjectSupport.js');
const { faker } = require('@faker-js/faker');


let caseFolder = ''
class PageObject {
    constructor() {
    }
    async loggin(page,caseToUse) {
        caseFolder = `../resemble-c/V2/${caseToUse}`
        await new Promise(r => setTimeout(r, 100));
        await page.type(".email.ember-text-field.gh-input.ember-view", genVar.user)
        await page.type(".password.ember-text-field.gh-input.ember-view", genVar.password)
        await page.click(".login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i2.png`})
        await new Promise(r => setTimeout(r, 100));
        return true;
    }

    //POSTS
    async goToPost(page,caseToUse) {
        await page.click("#ember16")
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i3.png`})
        await new Promise(r => setTimeout(r, 100));
        return true;
    }

    async goToCreatePost(page,caseToUse) {
        await page.click(".ember-view.gh-btn.gh-btn-primary.view-actions-top-row")
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i4.png`})
        await new Promise(r => setTimeout(r, 100));
        return true;
    }

    async createPost(page,caseToUse,title,content){    
        await page.type(".gh-editor-title.ember-text-area.gh-input.ember-view", title)
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i5.png`})
        await new Promise(r => setTimeout(r, 1000));
        await page.type(".koenig-editor__editor.__mobiledoc-editor.__has-no-content",content)
        await new Promise(r => setTimeout(r, 100));
        await page.click(".ember-view.ember-basic-dropdown-trigger")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i6.png`})
        await page.click(".gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".gh-btn.gh-btn-black.gh-btn-icon.ember-view")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".ember-view.gh-editor-back-button")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i7.png`})
        return true;
    }

    async goToSpecificPost(page,caseToUse,ss){
        const [button] = await page.$x("//a[contains(., '"+caseToUse+"')]");
        if (button) {
            await button.click();
        }
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i${ss}.png`})
        return true;
    }

    async deletePost(page,caseToUse){
        await new Promise(r => setTimeout(r, 100));
        await page.click(".settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i9.png`})
        await page.click(".gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i10.png`})
        await page.click(".gh-btn.gh-btn-red.gh-btn-icon.ember-view")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i11.png`})
        return true
    }

    async draftPost(page,caseToUse){
        await page.type(".gh-editor-title.ember-text-area.gh-input.ember-view", caseToUse)
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i5.png`})
        await new Promise(r => setTimeout(r, 1000));
        await page.type(".koenig-editor__editor.__mobiledoc-editor.__has-no-content",caseToUse)
        await new Promise(r => setTimeout(r, 100));
        await page.click(".ember-view.gh-editor-back-button")
        await new Promise(r => setTimeout(r, 100));
        return true;
    }

    async publishDraftPost(page,caseToUse){
        await page.click(".ember-view.ember-basic-dropdown-trigger")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i7.png`})
        await page.click(".gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i8.png`})
        await page.click(".gh-btn.gh-btn-black.gh-btn-icon.ember-view")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".ember-view.gh-editor-back-button")
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i9.png`})
        await new Promise(r => setTimeout(r, 100));
        return true;
    }

    async schedulePost(page,caseToUse){
        await page.type(".gh-editor-title.ember-text-area.gh-input.ember-view", caseToUse)
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i5.png`})
        await new Promise(r => setTimeout(r, 1000));
        await page.type(".koenig-editor__editor.__mobiledoc-editor.__has-no-content",caseToUse)
        await new Promise(r => setTimeout(r, 100));
        await page.click(".ember-view.ember-basic-dropdown-trigger")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i6.png`})
        await page.click(".gh-publishmenu-radio-button")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".gh-date-time-picker-time input")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".gh-btn.gh-btn-black.gh-btn-icon.ember-view")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".ember-view.gh-editor-back-button")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i7.png`})
        return true;
    }

    async setPostAsDraft(page,caseToUse,ss){
        await page.click(".ember-view.ember-basic-dropdown-trigger")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".gh-publishmenu-radio-button")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".ember-view.gh-editor-back-button")
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i${ss}.png`})
        return true;       
    }

    //PAGES
    async goToPages(page,caseToUse){
        await page.click(".gh-mobile-nav-bar-more")
        await new Promise(r => setTimeout(r, 100));
        const [button] = await page.$x("//a[contains(., 'Pages')]");
        if (button) {
            await button.click();
        }
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i3.png`})
        return true;
    }

    async goToNewPages(page,caseToUse){
        await page.click(".ember-view.gh-btn.gh-btn-primary.view-actions-top-row")
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i4.png`})
        await new Promise(r => setTimeout(r, 100));
        return true;
    }

    async createNewPage(page,caseToUse,title,content){
        await page.type(".gh-editor-title.ember-text-area.gh-input.ember-view", title)
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i5.png`})
        await new Promise(r => setTimeout(r, 1000));
        await page.type(".koenig-editor__editor.__mobiledoc-editor.__has-no-content",content)
        await new Promise(r => setTimeout(r, 100));
        await page.click(".ember-view.ember-basic-dropdown-trigger")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i6.png`})
        await page.click(".gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".gh-btn.gh-btn-black.gh-btn-icon.ember-view")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".ember-view.gh-editor-back-button")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i7.png`})
        return true;
    }

    async goToSpecificPage(page,caseToUse,ss){
        const [button2] = await page.$x("//a[contains(., '"+caseToUse+"')]");
        if (button2) {
            await button2.click();
        }
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i${ss}.png`})
        return true;
    }

    async deletePage(page,caseToUse,ss){
        await new Promise(r => setTimeout(r, 100));
        await page.click(".settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i${ss}.png`})
        await page.click(".gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i${ss++}.png`})
        await page.click(".gh-btn.gh-btn-red.gh-btn-icon.ember-view")
        await new Promise(r => setTimeout(r, 100));
        return true;
    }

    async draftPage(page,caseToUse){
        await page.type(".gh-editor-title.ember-text-area.gh-input.ember-view", caseToUse)
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i5.png`})
        await new Promise(r => setTimeout(r, 1000));
        await page.type(".koenig-editor__editor.__mobiledoc-editor.__has-no-content",caseToUse)
        await new Promise(r => setTimeout(r, 100));
        await page.click(".ember-view.gh-editor-back-button")
        await new Promise(r => setTimeout(r, 100));
        return true;
    }

    async publishDraftedPage(page,caseToUse,ss){
        await page.click(".ember-view.ember-basic-dropdown-trigger")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i${ss}.png`})
        await page.click(".gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i${ss++}.png`})
        await page.click(".gh-btn.gh-btn-black.gh-btn-icon.ember-view")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".ember-view.gh-editor-back-button")
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i${ss++}.png`})
        await new Promise(r => setTimeout(r, 100));
        return true;
    }

    async schedulePage(page,caseToUse){
        await page.type(".gh-editor-title.ember-text-area.gh-input.ember-view", caseToUse)
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i5.png`})
        await new Promise(r => setTimeout(r, 1000));
        await page.type(".koenig-editor__editor.__mobiledoc-editor.__has-no-content",caseToUse)
        await new Promise(r => setTimeout(r, 100));
        await page.click(".ember-view.ember-basic-dropdown-trigger")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i6.png`})
        await page.click(".gh-publishmenu-radio-button")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".gh-date-time-picker-time input")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".gh-btn.gh-btn-black.gh-btn-icon.ember-view")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".ember-view.gh-editor-back-button")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i7.png`})
        return true;
    }

    async setPageAsDraft(page,caseToUse,ss){
        await page.click(".ember-view.ember-basic-dropdown-trigger")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".gh-publishmenu-radio-button")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".ember-view.gh-editor-back-button")
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i${ss}.png`})
        return true;
    }

    //TAGS
    async goToTags(page,caseToUse){
        const [toTags] = await page.$x(pos.tagsPageLink);
        if (toTags) {await toTags.click();}
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i4.png`})

        return true;
    }

    async createNewTag(page,caseToUse, tagName){
        await page.waitForSelector(pos.primaryButton, { timeout: 5000 })
        await page.click(pos.primaryButton).catch(() => console.log("error in click on New tag button")) //new tag button
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i5.png`})
        await delay(500)
        await page.type(pos.inputName, tagName);
        await page.click(pos.primaryButton).catch(() => console.log("error in click on Save button")) //save button
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i6.png`})
        return true;
    }

    async createNewPostWithTag(page,caseToUse, tagName){
        await page.click(pos.newPost).catch(() => console.log("error in click on new post button"))
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i7.png`})        
        const tituloPost = faker.lorem.words(5)
        const textoPost = faker.lorem.sentences(5, '\n')
        await page.type(pos.postTitleEdit, tituloPost)
        await page.type(pos.postContentEdit, textoPost)
        await delay(1000)
        await page.click(pos.toogleMenu).catch(() => console.log("error in click on menu button"))
        await page.type(pos.multiMenusSelect, tagName)
        page.keyboard.press('Enter')
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i8.png`})
        await page.click(pos.publishMenu).catch(() => console.log("error in click on publish menu"))
        await page.click(pos.publisButton).catch(() => console.log("error in click on publish button"))
        await page.click(pos.blackButton).catch(() => console.log("error in click on publish confirmation"))
        

        return {titulo:tituloPost};
    }
    async goToPublishedPost(page,caseToUse, tagName){
        await delay(1000)
        await page.click(pos.viewPost).catch(() => console.log("error in click on view post"))
        await delay(1000)
    }
    async removeTag(page,caseToUse, tagName){
        await page.bringToFront()
        await delay(500)
        await page.click('#tag-input')
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i9.png`})
        await delay(500)
        await page.click('.gh-publishmenu-trigger').catch(() => console.log("error in click on publish button"))
        await page.click('.gh-btn-black').catch(() => console.log("error in click on publish confirmation"))
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i10.png`})

        return true;
    }

    async modifyTag(page,caseToUse, tagName){
        await page.bringToFront()

        await page.goto(genVar.url+'tags/'+tagName.toLowerCase())

        await page.screenshot({path: `${caseFolder}/${genVar.port}-i11.png`})
        tagName = faker.lorem.slug()
        await selectText(page,'input[name="name"]')
        await page.type('input[name="name"]', tagName);
        await page.click('.gh-btn-primary').catch(() => console.log("error in click on Save button")) //save button
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i12.png`})

        return tagName;
    }

    async goToMembers(page,caseToUse){
        const [toMembers] = await page.$x("//a[contains(., 'Members')]");
        if (toMembers) {
            await toMembers.click();
        }
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i13.png`})
        await page.waitForSelector('.gh-btn-primary', { timeout: 5000 })

        return true;
    }

    async newMember(page,caseToUse, userName){
        await page.click('.gh-btn-primary').catch(() => console.log("error in click on New member button")) //new tag button
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i14.png`})
        let useremail = faker.internet.email()
        await delay(500)
        await page.type('input[name="name"]', userName);
        await page.type('input[name="email"]', useremail);
        await page.click('.gh-btn-primary').catch(() => console.log("error in click on Save button")) //save button
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i15.png`})

        return true;
    }

    async userUpdate(page,caseToUse){
        await delay(500)
        await selectText(page, 'input[name="name"]')
        let newName = faker.name.findName()
        await page.type('input[name="name"]', newName);
        await page.click('.gh-btn-primary').catch(() => console.log("error in click on Save button")) //save button
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i16.png`})

        return newName;
    }

    async toMainUser(page,caseToUse){
        await page.click('.gh-user-avatar').catch(() => console.log("error in click on user avatar")) 
        const [toMembers] = await page.$x("//a[contains(., 'Your profile')]");
        if (toMembers) {
            await toMembers.click();
        }

        return true;
    }

    async updateMainUser(page,caseToUse, userName){
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i17.png`})
        await selectText(page, 'input[id="user-name"]')
        await page.type('input[id="user-name"]', userName);
        await page.click('.gh-btn-primary').catch(() => console.log("error in click on Save button"))
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i18.png`})
        let slug = await page.evaluate(() => document.getElementById('user-slug').value)
        
        await page.goto(genVar.url+'posts?author='+slug)
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i19.png`})
        

        return true;
    }

    async updatePassword(page,caseToUse, pwToSet){
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i20.png`})
        let currentPW
        let newPW 
        if(pwToSet == "temp"){
            currentPW = genVar.password
            newPW = genVar.tempPassword
        }else{
            currentPW = genVar.tempPassword
            newPW = genVar.password
        }
        await page.type('input[id="user-password-old"]', currentPW);
        await page.type('input[id="user-password-new"]', newPW);
        await page.type('input[id="user-new-password-verification"]', newPW);
        await page.click('.button-change-password').catch(() => console.log("error in click on Change Password"))
        await delay(500)
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i21.png`})
        

        return true;
    }

    async logOut(page,caseToUse){
        await page.reload()
        await delay(500)
        await page.waitForSelector('.gh-user-avatar')
        await page.click('.gh-user-avatar').catch(() => console.log("error in click on user avatar")) 
    
        const [toSingout] = await page.$x("//a[contains(., 'Sign out')]");
        if (toSingout) {
            await toSingout.click();
        }
    
        return true;
    }

    async loggin2(page,caseToUse) {
        caseFolder = `../resemble-c/V2/${caseToUse}`
        await new Promise(r => setTimeout(r, 100));
        await page.type(".email.ember-text-field.gh-input.ember-view", genVar.user)
        await page.type(".password.ember-text-field.gh-input.ember-view", genVar.tempPassword)
        await page.click(".login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i2.png`})
        await new Promise(r => setTimeout(r, 100));
        return true;
    }

    async createNewPost(page,caseToUse) {
        await page.click('.gh-nav-new-post').catch(() => console.log("error in click on new post button"))
        await page.screenshot({ path: caseFolder + '7-New-post-page.jpg' })
        const tituloPost = faker.lorem.words(5)
        const textoPost = faker.lorem.sentences(5, '\n')
        await page.type('.gh-editor-title', tituloPost)
        await page.type('.koenig-editor__editor', textoPost)
        await delay(1000)
        await page.click('.settings-menu-toggle').catch(() => console.log("error in click on menu button"))
        await page.screenshot({ path: caseFolder + '8-New-post-info.jpg' })
        await page.click('.gh-publishmenu').catch(() => console.log("error in click on publish menu"))
        await page.click('.gh-publishmenu-button').catch(() => console.log("error in click on publish button"))
        await page.click('.gh-btn-black').catch(() => console.log("error in click on publish confirmation"))
        await delay(1000)
        await page.click('.post-view-link').catch(() => console.log("error in click on view post"))
        await delay(1000)
        return tituloPost;
    }

    async modifyPostTitle(page,caseToUse) {
        await page.bringToFront()
        await page.evaluate( () => document.getElementsByClassName("gh-editor-title").value = "")
        await selectText(page, '.gh-editor-title')
        let tituloPost = faker.lorem.words(5)
        await page.type('.gh-editor-title', tituloPost)
        await page.screenshot({ path: caseFolder + '10-New-post-title-modified.jpg' })
        await page.click('.gh-publishmenu').catch(() => console.log("error in click on publish menu"))
        await page.click('.gh-publishmenu-button').catch(() => console.log("error in click on publish button"))
    
        return tituloPost;
    }

    async goToSettings(page,caseToUse) {
        await page.click('.settings_svg__a').catch(() => console.log("error in click on settings"))
        await page.screenshot({ path: caseFolder + '4-Settings-page.jpg' })
        await page.waitForSelector('.gh-setting-group')
        await page.click('a[href="#/settings/general/"]').catch(() => console.log("error in click on gneral settings button"))
        await page.waitForSelector('.gh-expandable-header')
    
        return true;
    }

    async modifySiteTitle(page,caseToUse) {
        const [title] = await page.$x("//h4[contains(., 'Title & description')]");
        if (title) {
            const example_parent = (await title.$x('..'))[0];
            const example_siblings = await example_parent.$x('following-sibling::*');
            await example_siblings[0].click();
        }
        await delay(100)
        await selectText(page, '.ember-text-field')
        await delay(100)
        let siteTitle = faker.lorem.words(5)
        await page.type('.ember-text-field', siteTitle)
        await delay(100)
        await page.waitForSelector('.gh-nav-menu-details-sitetitle')
        await page.click('.gh-btn-primary').catch(() => console.log("error in click on save button"))
        
        return siteTitle;
    }

    async updateURL(page,caseToUse, url){
        console.log("imhere")
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i17.png`})
        // await selectText(page, 'input[id="user-website"]')
        await delay(500)
        await page.type('input[id="user-website"]', url);
        await page.click('.gh-btn-primary').catch(() => console.log("error in click on Save button"))
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i18.png`})
        return true;
    }
}

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

async function selectText(page, selector) {
    // return new Promise(function (resolve) {
        const input = await page.$(selector);
        await input.click({ clickCount: 3 })
    // });
}
module.exports = PageObject;
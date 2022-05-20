const { Page } = require('puppeteer');
const { genVar } = require('./generalVariables.js');
const pos = require('./pageObjectSupport.js');


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

    async createNewTag(page,caseToUse){
        await page.waitForSelector(pos.primaryButton, { timeout: 5000 })
        await page.click(pos.primaryButton).catch(() => console.log("error in click on New tag button")) //new tag button
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i5.png`})
        const tagName = "TestTag"+ Date.now();
        await delay(500)
        await page.type(pos.inputName, tagName);
        await page.click(pos.primaryButton).catch(() => console.log("error in click on Save button")) //save button
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i6.png`})
        return tagName;
    }

    async createNewPostWithTag(page,caseToUse, tagName){
        await page.click(pos.newPost).catch(() => console.log("error in click on new post button"))
        await page.screenshot({path: `${caseFolder}/${genVar.port}-i7.png`})        
        const tituloPost = "Mi post de prueba " + Date.now()
        const textoPost = " Mi texto de prueba"
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
        await delay(1000)
        await page.click(pos.viewPost).catch(() => console.log("error in click on view post"))
        await delay(1000)

        return true;
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


}

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}
module.exports = PageObject;
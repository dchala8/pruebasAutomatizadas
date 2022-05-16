const { Page } = require('puppeteer');
const { genVar } = require('./generalVariables.js');

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

    async goToPost(page,caseToUse) {
        await page.click("#ember16")
        await page.screenshot({path: './'+caseToUse+'/posts.png'})
        await new Promise(r => setTimeout(r, 100));
        return true;
    }

    async goToCreatePost(page,caseToUse) {
        await page.click(".ember-view.gh-btn.gh-btn-primary.view-actions-top-row")
        await page.screenshot({path: './'+caseToUse+'/newPost.png'})
        await new Promise(r => setTimeout(r, 100));
        return true;
    }

    async createPost(page,caseToUse,title,content){    
        await page.type(".gh-editor-title.ember-text-area.gh-input.ember-view", title)
        await page.screenshot({path: './'+caseToUse+'/setTituloPost.png'})
        await new Promise(r => setTimeout(r, 1000));
        await page.type(".koenig-editor__editor.__mobiledoc-editor.__has-no-content",content)
        await new Promise(r => setTimeout(r, 100));
        await page.click(".ember-view.ember-basic-dropdown-trigger")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: './'+caseToUse+'/abrirPublish.png'})
        await page.click(".gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".gh-btn.gh-btn-black.gh-btn-icon.ember-view")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".ember-view.gh-editor-back-button")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: './'+caseToUse+'/published.png'})
        return true;
    }

    async goToSpecificPost(page,caseToUse){
        const [button] = await page.$x("//a[contains(., '"+caseToUse+"')]");
        if (button) {
            await button.click();
        }
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: './'+caseToUse+'/intoPost.png'})
        return true;
    }

    async deletePost(page,caseToUse){
        await new Promise(r => setTimeout(r, 100));
        await page.click(".settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: './'+caseToUse+'/openMenu.png'})
        await page.click(".gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: './'+caseToUse+'/clickDelete.png'})
        await page.click(".gh-btn.gh-btn-red.gh-btn-icon.ember-view")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: './'+caseToUse+'/clickDelete.png'})
        return true
    }

    async draftPost(page,caseToUse){
        await page.type(".gh-editor-title.ember-text-area.gh-input.ember-view", caseToUse)
        await page.screenshot({path: './'+caseToUse+'/setTituloPost.png'})
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
        await page.screenshot({path: './'+caseToUse+'/dropDown.png'})
        await page.click(".gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: './'+caseToUse+'/publishing.png'})
        await page.click(".gh-btn.gh-btn-black.gh-btn-icon.ember-view")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".ember-view.gh-editor-back-button")
        await page.screenshot({path: './'+caseToUse+'/published.png'})
        await new Promise(r => setTimeout(r, 100));
        return true;
    }

    async schedulePost(page,caseToUse){
        await page.type(".gh-editor-title.ember-text-area.gh-input.ember-view", caseToUse)
        await page.screenshot({path: './'+caseToUse+'/setTituloPost.png'})
        await new Promise(r => setTimeout(r, 1000));
        await page.type(".koenig-editor__editor.__mobiledoc-editor.__has-no-content",caseToUse)
        await new Promise(r => setTimeout(r, 100));
        await page.click(".ember-view.ember-basic-dropdown-trigger")
        await new Promise(r => setTimeout(r, 100));
        await page.screenshot({path: './'+caseToUse+'/abrirPublish.png'})
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
        await page.screenshot({path: './'+caseToUse+'/scheduled.png'})
        return true;
    }

    async setPostAsDraft(page,caseToUse){
        await page.click(".ember-view.ember-basic-dropdown-trigger")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".gh-publishmenu-radio-button")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view")
        await new Promise(r => setTimeout(r, 100));
        await page.click(".ember-view.gh-editor-back-button")
        await page.screenshot({path: './'+caseToUse+'/drafted.png'})
        return true;       
    }

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
}

module.exports = PageObject;
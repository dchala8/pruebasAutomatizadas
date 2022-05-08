const puppeteer = require('puppeteer');
const { genVar } = require('./generalVariables.js');
var fs = require('fs');


(async () => {
    //setup
    const generalTimeout = 5000
    const caseFolder = './case11/'
    if (!fs.existsSync(caseFolder)) {
        fs.mkdirSync(caseFolder);
    }
    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    await page.setViewport({ width: 1366, height: 768 });

    //Login
    await page.goto(genVar.url+'signin')
    await page.screenshot({ path: caseFolder + '1-login1.jpg' })
    await page.type('#ember7', genVar.user)
    await page.type('#ember9', genVar.password)
    await page.click('#ember11')
    await page.screenshot({ path: caseFolder + '2-login2.jpg' })
    await page.waitForSelector('.gh-nav  ', { timeout: generalTimeout }).catch(err => {
        console.error("The login information is probably incorrect, please update the information to continue with the test")
    })
    await page.screenshot({ path: caseFolder + '3-home.jpg' })
    
    
    // New tag
    const [toTags] = await page.$x("//a[contains(., 'Tags')]");
    if (toTags) {await toTags.click();}
    await page.screenshot({ path: caseFolder + '4-Tag-page.jpg' })
    await page.waitForSelector('.gh-btn-primary', { timeout: generalTimeout })
    await page.click('.gh-btn-primary').catch(() => console.log("error in click on New tag button")) //new tag button
    await page.screenshot({ path: caseFolder + '5-New-tag-page.jpg' })
    const tagName = "TestTag"+ Date.now();
    await delay(500)
    await page.type('input[name="name"]', tagName);
    await page.click('.gh-btn-primary').catch(() => console.log("error in click on Save button")) //save button
    await page.screenshot({ path: caseFolder + '6-New-tag-info.jpg' })
    
    
    // New post
    await page.click('.gh-nav-new-post').catch(() => console.log("error in click on new post button"))
    await page.screenshot({ path: caseFolder + '7-New-post-page.jpg' })
    const tituloPost = "Mi post de prueba " + Date.now()
    const textoPost = " Mi texto de prueba"
    await page.type('.gh-editor-title', tituloPost)
    await page.type('.koenig-editor__editor', textoPost)
    await delay(1000)
    await page.click('.settings-menu-toggle').catch(() => console.log("error in click on menu button"))
    await page.type('.ember-power-select-trigger-multiple-input', tagName)
    page.keyboard.press('Enter')
    await page.screenshot({ path: caseFolder + '8-New-post-info.jpg' })
    await page.click('.gh-publishmenu').catch(() => console.log("error in click on publish menu"))
    await page.click('.gh-publishmenu-button').catch(() => console.log("error in click on publish button"))
    await page.click('.gh-btn-black').catch(() => console.log("error in click on publish confirmation"))
    await delay(1000)
    await page.click('.post-view-link').catch(() => console.log("error in click on view post"))
    await delay(1000)
    
    //Post validation
    let pages = await browser.pages()
    const page2 = await pages[2]
    await page2.setViewport({ width: 1366, height: 768 });
    await page2.screenshot({ path: caseFolder + '9-Post-page.jpg' })
    await delay(500)

    console.log("Case 11")
    console.log("Was the post created with the Tag: "+ tagName+"?")
    const [toTagsmain] = await page2.$x("//a[contains(., '"+tagName+"')]");
    if (toTagsmain) {
        console.log("Yes, it was")
    }else{
        console.log("No, it was not")
    }
    await browser.close()

})().catch(e=>console.log(e))

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

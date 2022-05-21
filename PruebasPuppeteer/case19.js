const puppeteer = require('puppeteer');
const { genVar } = require('./generalVariables.js');
var fs = require('fs');


(async () => {
    //setup
    const generalTimeout = 5000
    const caseFolder = './case19/'
    if (!fs.existsSync(caseFolder)) {
        fs.mkdirSync(caseFolder);
    }
    const browser = await puppeteer.launch({ headless: false });
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
    
    // New post
    await page.click('.gh-nav-new-post').catch(() => console.log("error in click on new post button"))
    await page.screenshot({ path: caseFolder + '7-New-post-page.jpg' })
    let tituloPost = "Mi post de prueba " + Date.now()
    const textoPost = " Mi texto de prueba"
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
    
    //Post validation
    let pages = await browser.pages()
    const page2 = await pages[2]
    await page2.setViewport({ width: 1366, height: 768 });
    await page2.screenshot({ path: caseFolder + '9-Post-page.jpg' })
    await delay(500)
    
    console.log("Case 19 1/2")
    console.log("Was the post created with the title: "+ tituloPost+"?")
    const [articleTitle] = await page2.$x("//h1[contains(., '"+tituloPost+"')]");
    if (articleTitle) {
        console.log("Yes, it was")
    }else{
        console.log("No, it was not")
    }
    
    // Post modification
    await page.bringToFront()
    await page.type('.gh-editor-title', "Modified")
    tituloPost = tituloPost+"Modified"
    await page.screenshot({ path: caseFolder + '10-New-post-title-modified.jpg' })
    await page.click('.gh-publishmenu').catch(() => console.log("error in click on publish menu"))
    await page.click('.gh-publishmenu-button').catch(() => console.log("error in click on publish button"))
    
    //post validation 2
    await page2.bringToFront()
    await page2.reload()

    console.log("Case 19 2/2")
    console.log("Was the post updated with the title: "+ tituloPost+"?")
    const [articleTitle2] = await page2.$x("//h1[contains(., '"+tituloPost+"')]");
    if (articleTitle2) {
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

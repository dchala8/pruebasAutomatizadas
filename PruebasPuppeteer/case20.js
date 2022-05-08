const puppeteer = require('puppeteer');
const { genVar } = require('./generalVariables.js');
var fs = require('fs');


(async () => {
    //setup
    const generalTimeout = 5000
    const caseFolder = './case20/'
    if (!fs.existsSync(caseFolder)) {
        fs.mkdirSync(caseFolder);
    }
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage()
    await page.setViewport({ width: 1366, height: 768 });

    //Login
    await page.goto(genVar.url + 'signin')
    await page.screenshot({ path: caseFolder + '1-login1.jpg' })
    await page.type('#ember7', genVar.user)
    await page.type('#ember9', genVar.password)
    await page.click('#ember11')
    await page.screenshot({ path: caseFolder + '2-login2.jpg' })
    await page.waitForSelector('.gh-nav  ', { timeout: generalTimeout }).catch(err => {
        console.error("The login information is probably incorrect, please update the information to continue with the test")
    })
    await page.screenshot({ path: caseFolder + '3-home.jpg' })

    // Site settings
    await page.click('.settings_svg__a').catch(() => console.log("error in click on settings"))
    await page.screenshot({ path: caseFolder + '4-Settings-page.jpg' })
    await page.waitForSelector('.gh-setting-group')
    await page.click('a[href="#/settings/general/"]').catch(() => console.log("error in click on gneral settings button"))
    await page.waitForSelector('.gh-expandable-header')
    delay(1000)
    
    //Modification
    const [title] = await page.$x("//h4[contains(., 'Title & description')]");
    if (title) {
        const example_parent = (await title.$x('..'))[0];
        const example_siblings = await example_parent.$x('following-sibling::*');
        await example_siblings[0].click();
    }
    await page.type('.ember-text-field', "Modified")
    await page.waitForSelector('.gh-nav-menu-details-sitetitle')
    let currentTitle = await page.$('.gh-nav-menu-details-sitetitle')
    let oldTitle = await page.evaluate(el => el.textContent, currentTitle)
    let nuevoTituloSite = oldTitle+"Modified"
    await page.click('.gh-btn-primary').catch(() => console.log("error in click on save button"))
    
    await page.reload()
    await page.waitForSelector('.gh-nav-menu-details-sitetitle')
    let element = await page.$('.gh-nav-menu-details-sitetitle')
    let obtainedNewTitle = await page.evaluate(el => el.textContent, element)

    console.log("Case 20")
    console.log("Was the site title updated to: "+ nuevoTituloSite+"?")
    if (obtainedNewTitle == nuevoTituloSite) {
        console.log("Yes, it was")
    }else{
        console.log("No, it was not")
    }

    // await browser.close()

})().catch(e => console.log(e))

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

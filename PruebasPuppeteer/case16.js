const puppeteer = require('puppeteer');
const { genVar } = require('./generalVariables.js');
var fs = require('fs');


(async () => {
    //setup
    const generalTimeout = 5000
    const caseFolder = './case16/'
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
    
    
    // Admin User modification
    await page.click('.gh-user-avatar').catch(() => console.log("error in click on user avatar")) 
    const [toMembers] = await page.$x("//a[contains(., 'Your profile')]");
    if (toMembers) {
        await toMembers.click();
    }
    await page.screenshot({ path: caseFolder + '4-admin-user.jpg' })
    await page.type('input[id="user-name"]', "Modified");
    await page.click('.gh-btn-primary').catch(() => console.log("error in click on Save button"))
    await page.screenshot({ path: caseFolder + '5-admin-user-modified.jpg' })
    
    let slug = await page.evaluate(() => document.getElementById('user-slug').value)
    let currentFullName = await page.evaluate(() => document.getElementById('user-name').value)
    
    await page.goto(genVar.url+'posts?author='+slug)
    await page.screenshot({ path: caseFolder + '6-posts-fileterd-by-user.jpg' })
    
    //User name validation 
    await page.waitForSelector('.gh-post-list-title')
    let element = await page.$('.gh-post-list-title')
    let value = await page.evaluate(el => el.textContent, element)
    console.log("Is the user name updated?")
    if(value.includes(currentFullName)){
        console.log("Yes, it is updated")
    }else{
        console.log("No, it is not")
    }
    await browser.close()

})().catch(e=>console.log(e))

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

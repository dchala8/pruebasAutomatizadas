const puppeteer = require('puppeteer');
const { genVar } = require('./generalVariables.js');
var fs = require('fs');


(async () => {
    //setup
    const generalTimeout = 5000
    const caseFolder = './case15/'
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
    
    
    // New Member
    const [toMembers] = await page.$x("//a[contains(., 'Members')]");
    if (toMembers) {
        await toMembers.click();
    }
    await page.screenshot({ path: caseFolder + '4-Member-page.jpg' })
    await page.waitForSelector('.gh-btn-primary', { timeout: generalTimeout })
    await page.click('.gh-btn-primary').catch(() => console.log("error in click on New member button")) //new tag button
    await page.screenshot({ path: caseFolder + '5-New-Member-page.jpg' })
    let datecode = Date.now()
    let useremail = datecode+"@TestUser.com";
    let userName = "UN"+datecode
    await delay(500)
    await page.type('input[name="name"]', userName);
    await page.type('input[name="email"]', useremail);
    await page.click('.gh-btn-primary').catch(() => console.log("error in click on Save button")) //save button
    await page.screenshot({ path: caseFolder + '6-New-user-info.jpg' })
    
    //User validation 1/2
    const [toMembers2] = await page.$x("//a[contains(., 'Members')]");
    if (toMembers2) {
        await toMembers2.click();
    }

    await delay(1000)
    console.log("Is the user in list?")
    const [UserInlist] = await page.$x("//h3[contains(., '"+userName+"')]");
    await page.screenshot({ path: caseFolder + '7-New-user-in-list.jpg' })
    if (UserInlist) {
        console.log("Yes, it is")
        UserInlist.click()
    }else{
        console.log("No, it is not")
    }
    
    //UserUpdate
    await delay(500)
    await page.type('input[name="name"]', "Modified");
    await page.click('.gh-btn-primary').catch(() => console.log("error in click on Save button")) //save button
    await page.screenshot({ path: caseFolder + '8-User-modified.jpg' })

    //User validation 2/2
    const [toMembers3] = await page.$x("//a[contains(., 'Members')]");
    if (toMembers3) {
        await toMembers3.click();
    }

    await delay(1000)
    console.log("Is the user in list updated?")
    const [UserInlist2] = await page.$x("//h3[contains(., '"+userName+"')]");
    await page.screenshot({ path: caseFolder + '9-New-user-in-list-updated.jpg' })
    if (UserInlist2) {
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

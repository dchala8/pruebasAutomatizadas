const puppeteer = require('puppeteer');
const { genVar } = require('./generalVariables.js');
var fs = require('fs');


(async () => {
    //setup
    const generalTimeout = 5000
    const caseFolder = './case17/'
    const oldPassword = genVar.password
    const newPassword = genVar.tempPassword
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
    await page.type('#ember9', oldPassword)
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
    await page.type('input[id="user-password-old"]', oldPassword);
    await page.type('input[id="user-password-new"]', newPassword);
    await page.type('input[id="user-new-password-verification"]', newPassword);
    await page.click('.button-change-password').catch(() => console.log("error in click on Change Password"))
    await page.screenshot({ path: caseFolder + '5-admin-user-changed-password.jpg' })
    
    //logout
    await page.reload()
    delay(500)
    await page.waitForSelector('.gh-user-avatar')
    await page.click('.gh-user-avatar').catch(() => console.log("error in click on user avatar")) 

    const [toSingout] = await page.$x("//a[contains(., 'Sign out')]");
    if (toSingout) {
        await toSingout.click();
    }

    // Login fail
    await page.goto(genVar.url+'signin')
    await page.screenshot({ path: caseFolder + '6-login3.jpg' })
    await page.type('#ember7', genVar.user)
    await page.type('#ember9', oldPassword)
    await page.click('#ember11')
    await page.screenshot({ path: caseFolder + '7-login-fail.jpg' })
    await page.waitForSelector('.main-error')
    let element = await page.$('.main-error')
    let value = await page.evaluate(el => el.textContent, element)
    console.log("Case 17")
    console.log("Login error?")
    if(value.includes("Your password is incorrect.")){
        console.log("Yes, the password is incorrect as expected")
    }else{
        console.log("No, there seems to be adifferent error")
    }
    await browser.close()

})().catch(e=>console.log(e))

function delay(time) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time)
    });
}

const puppeteer = require('puppeteer');
const { genVar } =  require('./generalVariables.js');
var fs = require('fs');

(async()=>{
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    const caseFolder = '../resemble-c/V1/case7/'
    if (!fs.existsSync(caseFolder)) {
        fs.mkdirSync(caseFolder);
    }
    await page.goto(genVar.url);
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: `${caseFolder}${genVar.port}-i1.png`})

    //Autenticar
    await new Promise(r => setTimeout(r, 1500));
    await page.type(".email.ember-text-field.gh-input.ember-view", genVar.user)
    await page.type(".password.ember-text-field.gh-input.ember-view", genVar.password)
    await page.click(".login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view")
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: `${caseFolder}${genVar.port}-i2.png`})
    await new Promise(r => setTimeout(r, 1500));

    //Ingresar a Paginas
    await page.click(".gh-mobile-nav-bar-more")
    await new Promise(r => setTimeout(r, 1500));
    const [button] = await page.$x("//a[contains(., 'Pages')]");
    if (button) {
        await button.click();
    }
    await page.screenshot({path: `${caseFolder}${genVar.port}-i3.png`})

    //Ingresar a Crear Pagina
    await page.click(".ember-view.gh-btn.gh-btn-primary.view-actions-top-row")
    await page.screenshot({path: `${caseFolder}${genVar.port}-i4.png`})
    await new Promise(r => setTimeout(r, 1500));

    //Crear Nueva pagina
    await page.type(".gh-editor-title.ember-text-area.gh-input.ember-view", "caso7")
    await page.screenshot({path: `${caseFolder}${genVar.port}-i5.png`})
    await new Promise(r => setTimeout(r, 2500));
    await page.type(".koenig-editor__editor.__mobiledoc-editor.__has-no-content","caso7")
    await new Promise(r => setTimeout(r, 1500));
    await page.click(".ember-view.ember-basic-dropdown-trigger")
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: `${caseFolder}${genVar.port}-i6.png`})
    await page.click(".gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view")
    await new Promise(r => setTimeout(r, 1500));
    await page.click(".gh-btn.gh-btn-black.gh-btn-icon.ember-view")
    await new Promise(r => setTimeout(r, 1500));
    await page.click(".ember-view.gh-editor-back-button")
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: `${caseFolder}${genVar.port}-i7.png`})



    //Validar que si se publico la nueva pagina
    const grabItems = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes("caso7")){
                const lastElement = actualPublication[1]
                const span = lastElement.querySelector(".flex.items-center span")
                if(span.innerText.includes("PUBLISHED")){
                    isItContained = true
                }
            }
        })

        return isItContained;
     })
     
    console.log("WAS THE PAGE CREATED?")
    console.log(grabItems)


    //Ingreso a la pagina para eliminarla
    const [button2] = await page.$x("//a[contains(., 'caso7')]");
    if (button2) {
        await button2.click();
    }
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: `${caseFolder}${genVar.port}-i8.png`})

    //Elimino a la pagina
    await new Promise(r => setTimeout(r, 1500));
    await page.click(".settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon")
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: `${caseFolder}${genVar.port}-i9.png`})
    await page.click(".gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button")
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: `${caseFolder}${genVar.port}-i10.png`})
    await page.click(".gh-btn.gh-btn-red.gh-btn-icon.ember-view")
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: `${caseFolder}${genVar.port}-i11.png`})


    
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: `${caseFolder}${genVar.port}-i12.png`})

    //Validar que si se elimino la nueva pagina
    const grabItems2 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes("caso7")){
                isItContained = true;
            }
        })

        return !isItContained;
     })

     
    console.log("WAS THE PAGE DELETED?")
    console.log(grabItems2)

    //...
    await browser.close();
    return;
})().catch(e=>console.log(e));
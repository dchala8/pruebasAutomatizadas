const puppeteer = require('puppeteer');
const { genVar } =  require('./generalVariables.js');

(async()=>{
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto(genVar.url);
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: './case9/login.png'})

    //Autenticar
    await new Promise(r => setTimeout(r, 1500));
    await page.type(".email.ember-text-field.gh-input.ember-view", genVar.user)
    await page.type(".password.ember-text-field.gh-input.ember-view", genVar.password)
    await page.click(".login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view")
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: './case9/logged.png'})
    await new Promise(r => setTimeout(r, 1500));

     //Ingresar a Paginas
     await page.click(".gh-mobile-nav-bar-more")
     await new Promise(r => setTimeout(r, 1500));
     const [button] = await page.$x("//a[contains(., 'Pages')]");
     if (button) {
         await button.click();
     }
     await page.screenshot({path: './case9/pages.png'})

    //Ingresar a Crear Paginas
    await page.click(".ember-view.gh-btn.gh-btn-primary.view-actions-top-row")
    await page.screenshot({path: './case9/newPage.png'})
    await new Promise(r => setTimeout(r, 1500));

    //Crear Nuevo Page
    await page.type(".gh-editor-title.ember-text-area.gh-input.ember-view", "caso9")
    await page.screenshot({path: './case9/setTituloPage.png'})
    await new Promise(r => setTimeout(r, 2500));
    await page.type(".koenig-editor__editor.__mobiledoc-editor.__has-no-content","caso9")
    await new Promise(r => setTimeout(r, 1500));
    await page.click(".ember-view.ember-basic-dropdown-trigger")
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: './case9/abrirPublish.png'})
    await page.click(".gh-publishmenu-radio-button")
    await new Promise(r => setTimeout(r, 1500));
    await page.click(".gh-date-time-picker-time input")
    await new Promise(r => setTimeout(r, 1500));
    await page.click(".gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view")
    await new Promise(r => setTimeout(r, 1500));
    await page.click(".gh-btn.gh-btn-black.gh-btn-icon.ember-view")
    await new Promise(r => setTimeout(r, 1500));
    await page.click(".ember-view.gh-editor-back-button")
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: './case9/scheduled.png'})
    

    //Validar que si se programo para release la nueva Page 5 minutos despues de la hora de creacion
    const grabItems = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes("caso9")){
                const lastElement = actualPublication[1]
                const span = lastElement.querySelector(".flex.items-center span")
                if(span.innerText.includes("SCHEDULED")){
                    isItContained = true
                }
            }
        })

        return isItContained;
     })
     
    console.log("WAS THE PAGE SCHEDULED?")
    console.log(grabItems)

    //Wait 5 minutes and reaload page
    await new Promise(r => setTimeout(r, 305000));
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });

    //Validate if page was Published
    await new Promise(r => setTimeout(r, 3000));
    const grabItems2 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes("caso9")){
                const lastElement = actualPublication[1]
                const span = lastElement.querySelector(".flex.items-center span")
                if(span.innerText.includes("PUBLISHED")){
                    isItContained = true
                }
            }
        })

        return isItContained;
     })
     
    console.log("WAS THE PAGE PUBLISHED?")
    console.log(grabItems2)

    await page.screenshot({path: './case9/published.png'})

    //...
    await browser.close();
    return;
})().catch(e=>console.log(e));
const puppeteer = require('puppeteer');
const { genVar } =  require('./generalVariables.js');

(async()=>{
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto(genVar.url);
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: './case8/login.png'})

    //Autenticar
    await new Promise(r => setTimeout(r, 1500));
    await page.type(".email.ember-text-field.gh-input.ember-view", genVar.user)
    await page.type(".password.ember-text-field.gh-input.ember-view", genVar.password)
    await page.click(".login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view")
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: './case8/logged.png'})
    await new Promise(r => setTimeout(r, 1500));

    //Ingresar a Paginas
    await page.click(".gh-mobile-nav-bar-more")
    await new Promise(r => setTimeout(r, 1500));
    const [button] = await page.$x("//a[contains(., 'Pages')]");
    if (button) {
        await button.click();
    }
    await page.screenshot({path: './case8/pages.png'})

    //Ingresar a Crear Paginas
    await page.click(".ember-view.gh-btn.gh-btn-primary.view-actions-top-row")
    await page.screenshot({path: './case8/newPage.png'})
    await new Promise(r => setTimeout(r, 1500));

    //Crear Nueva Pagina
    await page.type(".gh-editor-title.ember-text-area.gh-input.ember-view", "caso8")
    await page.screenshot({path: './case8/setTituloPage.png'})
    await new Promise(r => setTimeout(r, 2500));
    await page.type(".koenig-editor__editor.__mobiledoc-editor.__has-no-content","caso8")
    await new Promise(r => setTimeout(r, 1500));
    await page.click(".ember-view.gh-editor-back-button")
    await new Promise(r => setTimeout(r, 1500));



    //Validar que si se Publico la nueva pagina
    const grabItems = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes("caso8")){
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
    console.log(grabItems)


    //Validar que si se creo draft de la Pagina
    const grabItems2 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes("caso8")){
                const lastElement = actualPublication[1]
                const span = lastElement.querySelector(".flex.items-center span")
                if(span.innerText.includes("DRAFT")){
                    isItContained = true
                }
            }
        })

        return isItContained;
     })
     
    console.log("WAS THE PAGE DRAFTED?")
    console.log(grabItems2)


    //Ingreso a la pagina para publicarla
    const [button2] = await page.$x("//a[contains(., 'caso8')]");
    if (button2) {
        await button2.click();
    }
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: './case8/intoPage.png'})


    //Publico la pagina
    await page.click(".ember-view.ember-basic-dropdown-trigger")
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: './case8/dropDown.png'})
    await page.click(".gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view")
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: './case8/publishing.png'})
    await page.click(".gh-btn.gh-btn-black.gh-btn-icon.ember-view")
    await new Promise(r => setTimeout(r, 1500));
    await page.click(".ember-view.gh-editor-back-button")
    await page.screenshot({path: './case8/published.png'})
    await new Promise(r => setTimeout(r, 1500));

    //Valido si se publico la Pagina
    const grabItems3 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes("caso8")){
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
    console.log(grabItems3)

    //...
    await browser.close();
    return;
})().catch(e=>console.log(e));
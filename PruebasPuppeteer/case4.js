const puppeteer = require('puppeteer');
const { genVar } =  require('./generalVariables.js');

(async()=>{
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('http://localhost:2368/ghost');
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: './case4/login.png'})

    //Autenticar
    await new Promise(r => setTimeout(r, 1500));
    await page.type(".email.ember-text-field.gh-input.ember-view", genVar.user)
    await page.type(".password.ember-text-field.gh-input.ember-view", genVar.password)
    await page.click(".login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view")
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: './case4/logged.png'})
    await new Promise(r => setTimeout(r, 1500));

    //Ingresar a Posts
    await page.click("#ember16")
    await page.screenshot({path: './case4/posts.png'})
    await new Promise(r => setTimeout(r, 1500));

    //Ingresar a Crear posts
    await page.click(".ember-view.gh-btn.gh-btn-primary.view-actions-top-row")
    await page.screenshot({path: './case4/newPost.png'})
    await new Promise(r => setTimeout(r, 1500));

    //Crear Nuevo Post
    await page.type(".gh-editor-title.ember-text-area.gh-input.ember-view", "caso4")
    await page.screenshot({path: './case4/setTituloPost.png'})
    await new Promise(r => setTimeout(r, 2500));
    await page.type(".koenig-editor__editor.__mobiledoc-editor.__has-no-content","caso4")
    await new Promise(r => setTimeout(r, 1500));
    await page.click(".ember-view.ember-basic-dropdown-trigger")
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: './case4/abrirPublish.png'})
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
    await page.screenshot({path: './case4/scheduled.png'})
    

    //Validar que si se programo para release el nuevo post 5 minutos despues de la hora de publicacion
    const grabItems = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes("caso4")){
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if(span.innerText.includes("SCHEDULED")){
                    isItContained = true
                }
            }
        })

        return isItContained;
     })
     
    console.log("WAS THE POST SCHEDULED?")
    console.log(grabItems)

    //Wait 5 minutes and reaload page
    await new Promise(r => setTimeout(r, 305000));
    await page.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });

    //Validate if post was Published
    await new Promise(r => setTimeout(r, 3000));
    const grabItems2 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes("caso4")){
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if(span.innerText.includes("PUBLISHED")){
                    isItContained = true
                }
            }
        })

        return isItContained;
     })
     
    console.log("WAS THE POST PUBLISHED?")
    console.log(grabItems2)

    await page.screenshot({path: './case4/published.png'})

    //...
    await browser.close();
    return;
})().catch(e=>console.log(e));
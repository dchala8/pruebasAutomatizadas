const puppeteer = require('puppeteer');
const { genVar } =  require('./generalVariables.js');

(async()=>{
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    await page.goto('http://localhost:2368/ghost');
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: './case5/login.png'})

    //Autenticar
    await new Promise(r => setTimeout(r, 1500));
    await page.type(".email.ember-text-field.gh-input.ember-view", genVar.user)
    await page.type(".password.ember-text-field.gh-input.ember-view", genVar.password)
    await page.click(".login.gh-btn.gh-btn-login.gh-btn-block.gh-btn-icon.js-login-button.ember-view")
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: './case5/logged.png'})
    await new Promise(r => setTimeout(r, 1500));

    //Ingresar a Posts
    await page.click("#ember16")
    await page.screenshot({path: './case5/posts.png'})
    await new Promise(r => setTimeout(r, 1500));

    //Ingresar a Crear posts
    await page.click(".ember-view.gh-btn.gh-btn-primary.view-actions-top-row")
    await page.screenshot({path: './case5/newPost.png'})
    await new Promise(r => setTimeout(r, 1500));

    //Crear Nuevo Post
    await page.type(".gh-editor-title.ember-text-area.gh-input.ember-view", "caso5")
    await page.screenshot({path: './case5/setTituloPost.png'})
    await new Promise(r => setTimeout(r, 2500));
    await page.type(".koenig-editor__editor.__mobiledoc-editor.__has-no-content","caso5")
    await new Promise(r => setTimeout(r, 1500));
    await page.click(".ember-view.ember-basic-dropdown-trigger")
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: './case5/abrirPublish.png'})
    await page.click(".gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view")
    await new Promise(r => setTimeout(r, 1500));
    await page.click(".gh-btn.gh-btn-black.gh-btn-icon.ember-view")
    await new Promise(r => setTimeout(r, 1500));
    await page.click(".ember-view.gh-editor-back-button")
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: './case5/published.png'})
    

    //Validar que si se creo el nuevo post
    const grabItems = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes("caso5")){
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
    console.log(grabItems)

    //Ingreso al post para marcarlo como Draft
    const [button] = await page.$x("//a[contains(., 'caso5')]");
    if (button) {
        await button.click();
    }
    await new Promise(r => setTimeout(r, 1500));
    await page.screenshot({path: './case5/intoPost.png'})

    //Se marca el post como draft
    await page.click(".ember-view.ember-basic-dropdown-trigger")
    await new Promise(r => setTimeout(r, 1500));
    await page.click(".gh-publishmenu-radio-button")
    await new Promise(r => setTimeout(r, 1500));
    await page.click(".gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view")
    await new Promise(r => setTimeout(r, 1500));
    await page.click(".ember-view.gh-editor-back-button")
    await page.screenshot({path: './case5/drafted.png'})


    //Validamos si el post esta Publicado
    const grabItems2 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes("caso5")){
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


    //Validamos si el post esta se guardo como Draft
    const grabItems3 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes("caso5")){
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if(span.innerText.includes("DRAFT")){
                    isItContained = true
                }
            }
        })
        return isItContained;
     })
     
    console.log("WAS THE POST DRAFTED?")
    console.log(grabItems3)



    //...
    await browser.close();
    return;
})().catch(e=>console.log(e));
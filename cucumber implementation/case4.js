import PageObject from "./pageObject.js";
import puppeteer from 'puppeteer';


(async()=>{


    // GIVEN
    // Seteo Inicial
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    const caseToUse = 'case4';
    const pageObject = new PageObject();

    await page.goto('http://localhost:2368/ghost');
    await new Promise(r => setTimeout(r, 100));
    await page.screenshot({path: './'+caseToUse+'/login.png'});


    //WHEN
    //Autenticar
    await pageObject.loggin(page,caseToUse);
    //Ingresar a Posts
    await page.click("#ember16")
    await page.screenshot({path: './case4/posts.png'})
    await new Promise(r => setTimeout(r, 100));
    //Ingresar a Crear posts
    await page.click(".ember-view.gh-btn.gh-btn-primary.view-actions-top-row")
    await page.screenshot({path: './case4/newPost.png'})
    await new Promise(r => setTimeout(r, 100));
    //Crear Nuevo Post
    await pageObject.schedulePost(page,caseToUse);
    //Validar que si se programo para release el nuevo post 5 minutos despues de la hora de creacion
    const grabItems = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes("case4")){
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
            if(title.innerHTML.includes("case4")){
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
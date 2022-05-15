import PageObject from "./pageObject.js";
import puppeteer from 'puppeteer';


(async()=>{


    // GIVEN
    // Seteo Inicial
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    const caseToUse = 'case3';
    const pageObject = new PageObject();

    await page.goto('http://localhost:2368/ghost');
    await new Promise(r => setTimeout(r, 100));
    await page.screenshot({path: './'+caseToUse+'/login.png'});


    //WHEN
    //Autenticar
    await pageObject.loggin(page,caseToUse);
    //Ingresar a Posts
    await pageObject.goToPost(page,caseToUse);
    //Ingresar a Crear posts
    await pageObject.goToCreatePost(page,caseToUse);
    //Crear Nuevo Post como Draft
    await pageObject.draftPost(page,caseToUse);

    //THEN
    //Validar que si se creo el nuevo post
    const grabItems = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes("case3")){
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
    //Validar que si se creo draft del post
    const grabItems2 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes("case3")){
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
    console.log(grabItems2)


    //Ingreso al post para publicarlo
    await pageObject.goToSpecificPost(page,caseToUse);
    //Publico el post
    await pageObject.publishDraftPost(page,caseToUse);
    //Valido si se publico el post
    const grabItems3 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes("case3")){
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
    console.log(grabItems3)

    //...
    await browser.close();
    return;
})().catch(e=>console.log(e));
import PageObject from "./pageObject.js";
import puppeteer from 'puppeteer';


(async()=>{

    // GIVEN
    // Seteo Inicial
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    const caseToUse = 'case8';
    const pageObject = new PageObject();

    await page.goto('http://localhost:2368/ghost');
    await new Promise(r => setTimeout(r, 100));
    await page.screenshot({path: './'+caseToUse+'/login.png'})


    //WHEN
    //Autenticar
    await pageObject.loggin(page,caseToUse);
    //Ingresar a Paginas
    await pageObject.goToPages(page,caseToUse);
    //Ingresar a Crear Pages
    await pageObject.goToNewPages(page,caseToUse);
    //Crear Nueva Pagina como draft
    await pageObject.draftPage(page,caseToUse);


    //Validar que si se Publico la nueva pagina
    const grabItems = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes("case8")){
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
            if(title.innerHTML.includes("case8")){
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
    await pageObject.goToSpecificPage(page,caseToUse);


    //Publico la pagina
    await pageObject.publishDraftedPage(page,caseToUse);

    //Valido si se publico la Pagina
    const grabItems3 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes("case8")){
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
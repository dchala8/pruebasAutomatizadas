import PageObject from "./pageObject.js";
import puppeteer from 'puppeteer';


(async()=>{


    // GIVEN
    // Seteo Inicial
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    const caseToUse = 'case10';
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
    //Crear Nuevo Page
    await pageObject.createNewPage(page,caseToUse,caseToUse,caseToUse);
    

    //Validar que si se creo la nueva pagina
    const grabItems = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes("case10")){
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

    //Ingreso a la page para marcarlo como Draft
    await pageObject.goToSpecificPage(page,caseToUse)

    //Se marca la pagina como draft
    await pageObject.setPageAsDraft(page,caseToUse);



    //THEN
    //Validamos si la pagina esta Publicado
    const grabItems2 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes("case10")){
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


    //Validamos si la page esta se guardo como Draft
    const grabItems3 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes("case10")){
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
    console.log(grabItems3)



    //...
    await browser.close();
    return;
})().catch(e=>console.log(e));
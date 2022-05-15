import PageObject from "./pageObject.js";
import puppeteer from 'puppeteer';


(async()=>{


    // GIVEN
    // Seteo Inicial
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    const caseToUse = 'case7';
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
    
    //Validar que si se publico la nueva pagina
    const grabItems = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes("case7")){
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
    await pageObject.goToSpecificPage(page,caseToUse);
    //Elimino a la pagina
    await pageObject.deletePage(page,caseToUse);

    
    await new Promise(r => setTimeout(r, 100));
    await page.screenshot({path: './case7/listPageAfterDelete.png'})

    //THEN
    //Validar que si se elimino la nueva pagina
    const grabItems2 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes("case7")){
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
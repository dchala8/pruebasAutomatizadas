import PageObject from "./pageObject.js";
import puppeteer from 'puppeteer';


(async()=>{


    // GIVEN
    // Seteo Inicial
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    const caseToUse = 'case1';
    const pageObject = new PageObject();

    await page.goto('http://localhost:2368/ghost');
    await new Promise(r => setTimeout(r, 100));
    await page.screenshot({path: './'+caseToUse+'/login.png'})


    //WHEN
    //Autenticar
    await pageObject.loggin(page,caseToUse);
    //Ingresar a Posts
    await pageObject.goToPost(page,caseToUse);
    //Ingresar a Crear posts
    await pageObject.goToCreatePost(page,caseToUse);
    //Crear Nuevo Post
    await pageObject.createPost(page,caseToUse,caseToUse,caseToUse);



    //THEN
    //Validar que si se creo el nuevo post
    const grabItems = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes('case1')){
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if(span.innerText.includes("PUBLISHED")){
                    isItContained = true
                }
            }
        })

        return isItContained;
     })
    //Se imprime el resultado de las pruebas
    console.log("WAS THE POST CREATED AND PUBLISHED?")
    console.log(grabItems)
    

    await browser.close();
    return;
})().catch(e=>console.log(e));
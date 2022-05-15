const PageObject = require("../../pageObject.js");
const { When, Then, Given, } = require("cucumber")
const puppeteer = require("puppeteer")
var { setDefaultTimeout } = require('cucumber');
 
const caseToUse = 'case1';
const pageObject = new PageObject();

setDefaultTimeout(60 * 1000);

let browser, page

Given('User visits ghost',async function () {
    browser = await puppeteer.launch({headless: false});
    page = await browser.newPage();

    await page.goto('http://localhost:2368/ghost');
    await new Promise(r => setTimeout(r, 100));
    await page.screenshot({path: './'+caseToUse+'/login.png'})

});



When('User creates a new post',async function () {
    //Autenticar
    await pageObject.loggin(page,caseToUse);
    //Ingresar a Posts
    await pageObject.goToPost(page,caseToUse);
    //Ingresar a Crear posts
    await pageObject.goToCreatePost(page,caseToUse);
    //Crear Nuevo Post
    await pageObject.createPost(page,caseToUse,caseToUse,caseToUse);
});


Then('validate if post was created',async function () {
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
});

When('User creates a new post and User deletes the new post', async function () {
    //Autenticar
    await pageObject.loggin(page,caseToUse);
    //Ingresar a Posts
    await pageObject.goToPost(page,caseToUse);
    //Ingresar a Crear posts
    await pageObject.goToCreatePost(page,caseToUse);
    //Crear Nuevo Post
    await pageObject.createPost(page,caseToUse,caseToUse,caseToUse);
    //Validar que si se creo el nuevo post
    const grabItems = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item")
        let isItContained = false
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a")
            const firstElement = actualPublication[0]
            const title = firstElement.querySelector("h3")
            if(title.innerHTML.includes("case2")){
                const lastElement = actualPublication[3]
                const span = lastElement.querySelector(".flex.items-center span")
                if(span.innerText.includes("PUBLISHED")){
                    isItContained = true
                }
            }
        })

        return isItContained;
     })
     
    console.log("WAS THE POST CREATED?");
    console.log(grabItems);

    //Ingreso al post para eliminarlo
    await pageObject.goToSpecificPost(page,caseToUse);
    
    //Elimino el post
    await pageObject.deletePost(page,caseToUse);

    await new Promise(r => setTimeout(r, 100));
    await page.screenshot({path: './case2/listPostAfterDelete.png'});
});

Then('Validate if the post was deleted', async function () {
    //Validar que si se elimino el nuevo post
    const grabItems2 = await page.evaluate(() => {
        const elements = document.querySelectorAll(".gh-list-row.gh-posts-list-item");
        let isItContained = false;
        
        elements.forEach((publication)=> {
            const actualPublication = publication.querySelectorAll("a");
            const firstElement = actualPublication[0];
            const title = firstElement.querySelector("h3");
            if(title.innerHTML.includes("case2")){
                isItContained = true;
            }
        })

        return !isItContained;
    })
    console.log("WAS THE POST DELETED?")
    console.log(grabItems2)
    await browser.close();
});